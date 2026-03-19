import { Pool } from "pg";
import * as dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

/* ── segment map shared across all functions ── */
const SEG: Record<string, string> = {
    NFO: "NSEFO",
    BFO: "BSEFO",
    NCD: "NSECD",
    BCD: "BSCCD",
};

function seg(exchange: string): string {
    return SEG[exchange] ?? exchange;
}

/* ── Find token ── */
export async function findToken(
    symbol: string,
    expiry: string,
    strike: number,
    optionType: string,
    exchange: string
): Promise<number | null> {
    const isFutures = optionType === "XX" || !strike || strike === 0;

    const query = isFutures
        ? `SELECT exchange_token FROM contracts
           WHERE symbol = $1
           AND expiry_date::text = $2
           AND exchange_seg = $3
           AND option_type = 'XX'
           LIMIT 1`
        : `SELECT exchange_token FROM contracts
           WHERE symbol = $1
           AND expiry_date::text = $2
           AND exchange_seg = $3
           AND strike_price = $4
           AND option_type = $5
           LIMIT 1`;

    const params = isFutures
        ? [symbol, expiry, seg(exchange)]
        : [symbol, expiry, seg(exchange), strike, optionType];

    console.log("Query params:", params);
    const result = await pool.query(query, params);
    console.log("Query rows:", result.rows);
    return result.rows[0]?.exchange_token ?? null;
}

/* ── Get distinct symbols for a given exchange ── */
export async function getAllSymbols(exchange: string) {
    const result = await pool.query(
        `SELECT DISTINCT ON (symbol) symbol, lot_size
         FROM contracts
         WHERE exchange_seg = $1
         AND expiry_date IS NOT NULL
         AND inst_type IN ('FUTIDX', 'FUTSTK', 'OPTIDX', 'OPTSTK')
         ORDER BY symbol`,
        [seg(exchange)]
    );
    return result.rows;
}

/* ── Get expiries for a symbol+exchange ── */
export async function getExpiries(symbol: string, exchange: string): Promise<string[]> {
    const result = await pool.query(
        `SELECT DISTINCT expiry_date::text AS expiry
         FROM contracts
         WHERE symbol = $1
         AND exchange_seg = $2
         AND expiry_date IS NOT NULL
         ORDER BY expiry`,
        [symbol, seg(exchange)]
    );
    return result.rows.map(r => r.expiry);
}

/* ── Get strikes for a symbol+expiry+exchange ── */
export async function getStrikes(symbol: string, expiry: string, exchange: string): Promise<number[]> {
    const result = await pool.query(
        `SELECT DISTINCT strike_price
         FROM contracts
         WHERE symbol = $1
         AND expiry_date::text = $2
         AND exchange_seg = $3
         AND option_type != 'XX'
         ORDER BY strike_price ASC`,
        [symbol, expiry, seg(exchange)]
    );
    return result.rows.map(r => Number(r.strike_price));
}