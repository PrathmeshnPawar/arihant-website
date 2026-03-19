import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { Pool } from "pg";
import * as csv from "csv-parse/sync";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

function parseExpiry(raw?: string): string | null {
    if (!raw) return null;

    const str = raw.trim().toUpperCase();

    const months: Record<string, string> = {
        JAN: "01",
        FEB: "02",
        MAR: "03",
        APR: "04",
        MAY: "05",
        JUN: "06",
        JUL: "07",
        AUG: "08",
        SEP: "09",
        OCT: "10",
        NOV: "11",
        DEC: "12",
    };

    const match4 = str.match(/^(\d{2})([A-Z]{3})(\d{4})$/);
    if (match4) {
        const [, day, mon, year] = match4;
        return `${year}-${months[mon]}-${day}`;
    }

    const match2 = str.match(/^(\d{2})([A-Z]{3})(\d{2})$/);
    if (match2) {
        const [, day, mon, year] = match2;
        return `20${year}-${months[mon]}-${day}`;
    }

    return null;
}

async function seed() {
    const client = await pool.connect();

    try {
        console.log("Fetching contract master from Greeksoft...");

        const res = await fetch("http://restapi.greeksoft.in:3434/getAllContract", {
            headers: {
                "Authorization": process.env.SESSION_TOKEN!,
            },
        });

        if (!res.ok) {
            throw new Error(`Greeksoft responded with ${res.status}`);
        }

        const text = await res.text();

        // Strip BOM if present
        const cleanText = text.replace(/^\uFEFF/, "");

        const rows = csv.parse(cleanText, {
            columns: true,
            skip_empty_lines: true,
            trim: true,
            bom: true,
            relax_column_count: true,
        });

        console.log(`Parsed ${rows.length} contracts.`);

        // Debug: check column names for BOM/whitespace issues


        // Debug: check NFO rows and expiry parsing
        const nfoRows = rows.filter((r: any) => r["ExchangeSegMent"]?.trim() === "NSEFO");
        console.log("NFO count:", nfoRows.length);
        if (nfoRows.length > 0) {
            const sample = nfoRows[0] as any;
            console.log("First NFO row:", JSON.stringify(sample));
            console.log("Raw expiry:", JSON.stringify(sample["ExpiryDate"]));
            console.log("Parsed expiry:", parseExpiry(sample["ExpiryDate"]));
            console.log("Char codes:", [...(sample["ExpiryDate"] ?? "")].map((c: string) => c.charCodeAt(0)));
        }

        // Debug: all segments
        const segments = [...new Set(rows.map((r: any) => r["ExchangeSegMent"]?.trim()))];
        console.log("All segments:", segments);

        // Insert
        console.log("Inserting...");
        await client.query("BEGIN");
        await client.query("DELETE FROM contracts");

        for (const row of rows as any[]) {
            await client.query(
                `INSERT INTO contracts (
                    greek_token, exchange_token, exchange_seg, inst_type,
                    symbol, description, expiry_date, option_type,
                    strike_price, tick_size, lot_size, trading_symbol, symbol_expiry
                ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
                ON CONFLICT (greek_token) DO UPDATE SET
                    exchange_seg   = EXCLUDED.exchange_seg,
                    expiry_date    = EXCLUDED.expiry_date,
                    strike_price   = EXCLUDED.strike_price,
                    option_type    = EXCLUDED.option_type,
                    lot_size       = EXCLUDED.lot_size`,
                [
                    Number(row["GreekToken"]),
                    Number(row["ExchangeToken"]),
                    row["ExchangeSegMent"]?.trim(),
                    row["Series/InstType"]?.trim(),
                    row["Symbol"]?.trim(),
                    row["Description"]?.trim(),
                    parseExpiry(row["ExpiryDate"]),
                    row["OptionType"]?.trim() || "XX",
                    Number(row["StrikePrice"]) || 0,
                    Number(row["TickSize"]) || 0,
                    Number(row["LotSize"]) || 1,
                    row["TradingSymbol"]?.trim(),
                    row["SymbolWithExpiry"]?.trim(),
                ]
            );
        }

        await client.query("COMMIT");
        console.log("✅ Seed complete");

    } catch (err) {
        await client.query("ROLLBACK");
        console.error("❌ Seed failed:", err);
    } finally {
        client.release();
        await pool.end();
    }
}

seed();