"use client";

import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import {formatCurrency} from "@/utils/formatters";
import {
    useFnOLogic,
    Exchange,
    Product,
    OptionType,
} from "./fnoLogic";

const exchanges: Exchange[] = ["NFO", "BFO", "MCX", "CDS"];
const products: Product[] = ["Futures", "Options"];
const optionTypes: OptionType[] = ["Calls", "Puts"];

export default function FnOMarginCalculator() {
    /**
     * Pass your real session token + gscid here.
     * Typically you'd pull these from an auth context:
     *   const { token, userId } = useAuth();
     *   useFnOLogic(token, userId)
     */
    const [symbols, setSymbols] = React.useState<{ label: string; symbol: string; expiry: string }[]>([]);

    React.useEffect(() => {
        async function loadContracts() {
            const res = await fetch("/api/contracts");
            const data = await res.json();

            const list = (data.contracts ?? []).map((c: any) => {
                const expiryLabel = new Date(c.expiry).toLocaleDateString("en-IN", {
                    day: "2-digit", month: "short", year: "numeric"
                });
                return {
                    label: `${c.symbol} ${expiryLabel}`,
                    symbol: c.symbol,
                    expiry: c.expiry,   // "2026-03-30"
                };
            });

            // dedupe by label
            const seen = new Set<string>();
            setSymbols(list.filter((c: any) => seen.has(c.label) ? false : seen.add(c.label)));
        }
        loadContracts();
    }, []);

    const {
        basket,
        form,
        setForm,
        summary,
        handleAdd,
        removeItem,
        resetForm,
        resetBasket,
        loading,
        error,
    } = useFnOLogic(
        "",       // ← replace with real authToken from your session/context
        "DIWA",   // ← replace with real gscid / broker userId
    );

    return (
        <section className="mx-auto max-w-6xl px-6 py-10">
            <h1 className="text-3xl font-bold text-arihant-violet mb-6">
                FnO Margin Calculator
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* INPUT PANEL */}
                <div className="lg:col-span-2 rounded-2xl border border-border/40 bg-white p-6 shadow-sm">
                    <h2 className="text-sm font-semibold text-gray-500 mb-4">INPUTS</h2>

                    <div className="grid grid-cols-2 gap-4">
                        <Select
                            label="Exchange"
                            value={form.exchange}
                            options={exchanges}
                            onChange={(v) => setForm({...form, exchange: v as Exchange})}
                        />

                        <Select
                            label="Product"
                            value={form.product}
                            options={products}
                            onChange={(v) => setForm({...form, product: v as Product})}
                        />
                    </div>

                    <div className="mt-4">
                        <label className="text-xs text-gray-500">Symbol</label>
                        <select
                            value={form.symbol ?? ""}
                            onChange={(e) => {
                                console.log("Raw select value:", e.target.value);
                                const selected = symbols.find(s => s.label === e.target.value);
                                console.log("Selected:", selected);
                                setForm({
                                    ...form,
                                    symbol: selected?.symbol ?? null,
                                    expiry: selected?.expiry ?? null,
                                });
                            }}
                            className="mt-1 w-full rounded-lg border border-border/40 px-3 py-2 text-sm"
                        >
                            <option value="" disabled>-- Select Symbol --</option>
                            {symbols.map((s) => (
                                <option key={s.label} value={s.label}>
                                    {s.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* LTP – required by the Greeksoft API */}
                    <div className="mt-4">
                        <Input
                            label="LTP (Last Traded Price)"
                            type="number"
                            value={form.ltp}
                            onChange={(v) => setForm({...form, ltp: Number(v)})}
                        />
                    </div>

                    {form.product === "Options" && (
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <Input
                                label="Strike Price"
                                value={form.strike}
                                onChange={(v) => setForm({...form, strike: Number(v)})}
                            />

                            <Select
                                label="Option Type"
                                value={form.optionType}
                                options={optionTypes}
                                onChange={(v) =>
                                    setForm({...form, optionType: v as OptionType})
                                }
                            />
                        </div>
                    )}

                    <div className="mt-4">
                        <Input
                            label="Net Quantity"
                            type="number"
                            value={form.qty}
                            onChange={(v) => setForm({...form, qty: Number(v)})}
                        />
                    </div>

                    <div className="flex gap-6 mt-4 text-sm">
                        <Radio
                            label="Buy"
                            checked={form.side === "Buy"}
                            onChange={() => setForm({...form, side: "Buy"})}
                        />
                        <Radio
                            label="Sell"
                            checked={form.side === "Sell"}
                            onChange={() => setForm({...form, side: "Sell"})}
                        />
                    </div>

                    {/* Error banner */}
                    {error && (
                        <div className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                            {error}
                        </div>
                    )}

                    <div className="flex gap-3 mt-6">
                        <button
                            onClick={handleAdd}
                            disabled={loading}
                            className="rounded-lg bg-arihant-violet px-5 py-2 text-white text-sm font-medium disabled:opacity-60 flex items-center gap-2"
                        >
                            {loading && (
                                <svg
                                    className="animate-spin h-4 w-4 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8v8H4z"
                                    />
                                </svg>
                            )}
                            {loading ? "Calculating…" : "Add Position"}
                        </button>

                        <button
                            onClick={() => {
                                resetForm();
                                resetBasket();
                            }}
                            disabled={loading}
                            className="rounded-lg border border-border/40 px-5 py-2 text-sm disabled:opacity-60"
                        >
                            Clear
                        </button>
                    </div>
                </div>

                {/* SUMMARY CARD */}
                <div className="rounded-2xl border border-border/40 bg-white shadow-sm">
                    <div className="rounded-t-2xl bg-arihant-violet px-4 py-2 text-white text-sm font-semibold">
                        Total Values
                    </div>

                    <div className="p-4 text-sm space-y-2">
                        <div>Span Margin: {formatCurrency(summary.span)}</div>
                        <div>Exposure: {formatCurrency(summary.exposure)}</div>

                        <div className="border-t pt-2 font-semibold">
                            Total Margin: {formatCurrency(summary.total)}
                        </div>
                    </div>
                </div>
            </div>

            {/* TABLE */}
            <div className="mt-6 rounded-2xl border border-border/40 bg-white shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[760px] text-sm">
                        <thead className="bg-gray-50 text-gray-600">
                        <tr>
                            {[
                                "Exchange",
                                "Contract",
                                "Product",
                                "Strike Price",
                                "Qty",
                                "Span Margin",
                                "Exposure",
                                "",
                            ].map((h) => (
                                <th
                                    key={h}
                                    className="px-3 sm:px-4 py-3 text-left font-semibold whitespace-nowrap"
                                >
                                    {h}
                                </th>
                            ))}
                        </tr>
                        </thead>

                        <tbody>
                        {basket.length === 0 ? (
                            <tr>
                                <td colSpan={8} className="text-center py-6 text-gray-400">
                                    No positions added
                                </td>
                            </tr>
                        ) : (
                            <>
                                {basket.map((row) => (
                                    <tr key={row.id} className="border-t">
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            {row.exchange}
                                        </td>

                                        <td className="px-4 py-3 whitespace-nowrap">
                                            {row.contract}
                                        </td>

                                        <td className="px-4 py-3 whitespace-nowrap">
                                            {row.product}
                                        </td>

                                        <td className="px-4 py-3 whitespace-nowrap">
                                            {row.strike === 0 ? "N/A" : row.strike}
                                        </td>

                                        <td className="px-4 py-3 whitespace-nowrap">
                                            {row.qty}
                                        </td>

                                        <td className="px-4 py-3 whitespace-nowrap">
                                            {formatCurrency(row.initialMargin)}
                                        </td>

                                        <td className="px-4 py-3 whitespace-nowrap">
                                            {formatCurrency(row.exposure)}
                                        </td>

                                        <td className="px-4 py-3 whitespace-nowrap">
                                            <button
                                                onClick={() => removeItem(row.id)}
                                                className="p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200"
                                            >
                                                <DeleteOutlineIcon fontSize="small"/>
                                            </button>
                                        </td>
                                    </tr>
                                ))}

                                {/* TOTALS ROW */}
                                <tr className="border-t bg-gray-50 font-semibold">
                                    <td className="px-4 py-3 whitespace-nowrap" colSpan={5}>
                                        Total
                                    </td>

                                    <td className="px-4 py-3 whitespace-nowrap">
                                        {formatCurrency(summary.span)}
                                    </td>

                                    <td className="px-4 py-3 whitespace-nowrap">
                                        {formatCurrency(summary.exposure)}
                                    </td>

                                    <td/>
                                </tr>
                            </>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="mt-10 rounded-2xl border border-border/40 bg-white p-6 shadow-sm">
                <h3 className="text-base font-semibold text-arihant-violet mb-3">
                    How this calculator works
                </h3>

                <p className="text-sm text-gray-600 mb-2">
                    Futures and Options (FnO) trading requires traders to maintain margins
                    instead of paying the full contract value. This calculator estimates
                    the margin obligation based on position size and exchange rules.
                </p>

                <p className="text-sm text-gray-600 mb-2">
                    Margin requirements consist of components such as SPAN margin and
                    exposure margin. Hedged positions may benefit from reduced margin
                    requirements, while naked positions typically require higher capital.
                </p>

                <p className="text-xs text-gray-400 mt-3">
                    * Actual margin requirements are determined by the exchange and broker
                    risk systems. Values shown are indicative for educational purposes
                    only.
                </p>
            </div>
        </section>
    );
}

/* ================= UI Helpers ================= */
interface InputProps {
    label: string;
    value: string | number;
    onChange: (value: string) => void;
    type?: React.HTMLInputTypeAttribute;
}

function Input({label, value, onChange, type = "text"}: InputProps) {
    return (
        <div>
            <label className="text-xs text-gray-500">{label}</label>

            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="mt-1 w-full rounded-lg border border-border/40 px-3 py-2 text-sm"
            />
        </div>
    );
}

interface SelectProps {
    label: string;
    value: string;
    options: string[];
    onChange: (value: string) => void;
    placeholder?: string;
}

function Select({label, value, options, onChange, placeholder}: SelectProps) {
    return (
        <div>
            <label className="text-xs text-gray-500">{label}</label>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="mt-1 w-full rounded-lg border border-border/40 px-3 py-2 text-sm"
            >
                {placeholder && (
                    <option value="" disabled>
                        {placeholder}
                    </option>
                )}
                {options.map((o: string, i: number) => (
                    <option key={`${o}-${i}`} value={o}>
                        {o}
                    </option>
                ))}
            </select>
        </div>
    );
}

interface RadioProps {
    label: string;
    checked: boolean;
    onChange: () => void;
}

function Radio({label, checked, onChange}: RadioProps) {
    return (
        <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" checked={checked} onChange={onChange}/>
            {label}
        </label>
    );
}