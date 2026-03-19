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

const exchanges: Exchange[] = ["NFO", "BFO", "NCD", "BCD"];
const products: Product[] = ["Futures", "Options"];
const optionTypes: OptionType[] = ["Calls", "Puts"];

export default function FnOMarginCalculator() {

    /* ================= HOOK FIRST ================= */
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
    } = useFnOLogic();

    /* ================= STATE ================= */
    const [symbolList, setSymbolList] = React.useState<{ symbol: string; lot_size: number }[]>([]);
    const [expiries, setExpiries] = React.useState<string[]>([]);
    const [strikes, setStrikes] = React.useState<number[]>([]);
    const [symbolSearch, setSymbolSearch] = React.useState("");
    const [showDropdown, setShowDropdown] = React.useState(false);

    /* ================= LOAD SYMBOLS ================= */
    React.useEffect(() => {
        fetch(`/api/contracts/symbols?exchange=${form.exchange}`)
            .then(r => r.json())
            .then(d => setSymbolList(d.symbols ?? []));
    }, [form.exchange]);

    /* ================= LOAD EXPIRIES ================= */
    React.useEffect(() => {
        if (!form.symbol) {
            setExpiries([]);
            return;
        }
        fetch(`/api/contracts/expiries?symbol=${form.symbol}&exchange=${form.exchange}`)
            .then(r => r.json())
            .then(d => setExpiries(d.expiries ?? []));
    }, [form.symbol, form.exchange]);

    /* ================= LOAD STRIKES + AUTO-FILL LTP ================= */
    React.useEffect(() => {
        if (!form.symbol || !form.expiry) return;

        fetch(`/api/contracts/strikes?symbol=${form.symbol}&expiry=${form.expiry}&exchange=${form.exchange}`)
            .then(r => r.json())
            .then(d => {
                const list: number[] = d.strikes ?? [];
                setStrikes(list);

                setForm(prev => ({
                    ...prev,
                    ltp: 1,  // ← placeholder, not strike price
                    // Only auto-fill strike if not already set
                    strike: prev.strike === 0 && list.length > 0
                        ? list[Math.floor(list.length / 2)]
                        : prev.strike,
                }));
            });
    }, [form.symbol, form.expiry, form.product, form.exchange, setForm]);

    /* ================= FILTERED SYMBOLS ================= */
    const filteredSymbols = symbolSearch.length > 0
        ? symbolList.filter(s => s.symbol.toLowerCase().includes(symbolSearch.toLowerCase()))
        : symbolList;

    const currentLotSize = symbolList.find(s => s.symbol === form.symbol)?.lot_size;

    /* ================= RENDER ================= */
    return (
        <section className="mx-auto max-w-5xl px-6 py-10">
            <h1 className="text-2xl font-bold text-arihant-violet mb-6">
                F&amp;O Margin Calculator
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* ── INPUT PANEL ── */}
                <div className="lg:col-span-2 rounded-2xl border border-border/40 bg-white p-6 shadow-sm space-y-4">

                    {/* Exchange + Product */}
                    <div className="grid grid-cols-2 gap-4">
                        <Field label="Exchange">
                            <select
                                value={form.exchange}
                                onChange={(e) => {
                                    setSymbolSearch("");
                                    setForm({
                                        ...form,
                                        exchange: e.target.value as Exchange,
                                        symbol: null,
                                        expiry: null,
                                        strike: 0,
                                    });
                                }}
                                className={selectCls}
                            >
                                {exchanges.map(o => <option key={o} value={o}>{o}</option>)}
                            </select>
                        </Field>

                        <Field label="Product">
                            <select
                                value={form.product}
                                onChange={(e) => setForm({...form, product: e.target.value as Product, strike: 0})}
                                className={selectCls}
                            >
                                {products.map(o => <option key={o} value={o}>{o}</option>)}
                            </select>
                        </Field>
                    </div>

                    {/* ── Symbol autocomplete with dropdown ── */}
                    <Field label="Symbol">
                        <div className="relative">
                            <input
                                type="text"
                                autoComplete="off"
                                value={symbolSearch}
                                placeholder="Search e.g. NIFTY, BANKNIFTY"
                                onChange={(e) => {
                                    setSymbolSearch(e.target.value);
                                    setShowDropdown(true);
                                    // Clear selection when user types
                                    if (form.symbol) {
                                        setForm({...form, symbol: null, expiry: null, strike: 0});
                                    }
                                }}
                                onFocus={() => setShowDropdown(true)}
                                onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                                className={inputCls}
                            />
                            {/* ── DROPDOWN LIST ── */}
                            {showDropdown && filteredSymbols.length > 0 && (
                                <ul className="absolute z-20 mt-1 w-full max-h-52 overflow-y-auto rounded-lg border border-border/40 bg-white shadow-xl text-sm">
                                    {filteredSymbols.map((s) => (
                                        <li
                                            key={s.symbol}
                                            onMouseDown={() => {
                                                setSymbolSearch(s.symbol);
                                                setShowDropdown(false);
                                                setForm({
                                                    ...form,
                                                    symbol: s.symbol,
                                                    expiry: null,
                                                    strike: 0,
                                                    qty: Number(s.lot_size) || 0,
                                                });
                                            }}
                                            className="px-3 py-2.5 hover:bg-gray-50 cursor-pointer border-b last:border-0 flex justify-between items-center"
                                        >
                                            <span className="font-medium">{s.symbol}</span>
                                            <span className="text-gray-400 text-xs">Lot: {s.lot_size}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </Field>

                    {/* ── Expiry — shows after symbol selected ── */}
                    {form.symbol && (
                        <Field label="Expiry">
                            <select
                                value={form.expiry ?? ""}
                                onChange={(e) => setForm({ ...form, expiry: e.target.value || null, strike: 0 })}
                                className={selectCls}
                            >
                                <option value="" disabled>-- Select Expiry --</option>
                                {expiries.map((e) => (
                                    <option key={e} value={e}>
                                        {new Date(e).toLocaleDateString("en-IN", {
                                            day: "2-digit", month: "short", year: "numeric"
                                        })}
                                    </option>
                                ))}
                            </select>
                        </Field>
                    )}

                    {/* ── Strike + Option Type — Options only, after expiry selected ── */}
                    {form.product === "Options" && form.expiry && (
                        <div className="grid grid-cols-2 gap-4">
                            <Field label="Strike Price">
                                <select
                                    value={form.strike || ""}
                                    onChange={(e) => setForm({...form, strike: Number(e.target.value)})}
                                    className={selectCls}
                                >
                                    <option value="" disabled>-- Select Strike --</option>
                                    {strikes.map(s => (
                                        <option key={s} value={s}>{s}</option>
                                    ))}
                                </select>
                            </Field>

                            <Field label="Option Type">
                                <select
                                    value={form.optionType}
                                    onChange={(e) => setForm({...form, optionType: e.target.value as OptionType})}
                                    className={selectCls}
                                >
                                    {optionTypes.map(o => <option key={o} value={o}>{o}</option>)}
                                </select>
                            </Field>
                        </div>
                    )}

                    {/* ── Net Quantity ── */}
                    <Field label={`Net Quantity${currentLotSize ? ` (Lot size: ${currentLotSize})` : ""}`}>
                        <input
                            type="number"
                            value={form.qty ?? 0}
                            onChange={(e) => setForm({...form, qty: Number(e.target.value)})}
                            className={inputCls}
                        />
                    </Field>

                    {/* ── Buy / Sell ── */}
                    <div className="flex gap-6">
                        <Radio label="Buy" checked={form.trade_type === "Buy"}
                               onChange={() => setForm({...form, trade_type: "Buy"})}/>
                        <Radio label="Sell" checked={form.trade_type === "Sell"}
                               onChange={() => setForm({...form, trade_type: "Sell"})}/>
                    </div>

                    {/* ── Error ── */}
                    {error && (
                        <div className="rounded-lg bg-red-50 border border-red-100 px-4 py-3 text-sm text-red-600">
                            {error}
                        </div>
                    )}

                    {/* ── Actions ── */}
                    <div className="flex gap-3 pt-2">
                        <button
                            onClick={handleAdd}
                            disabled={loading}
                            className="rounded-lg bg-arihant-violet px-6 py-2.5 text-white text-sm font-semibold disabled:opacity-50 hover:opacity-90 transition-opacity flex items-center gap-2"
                        >
                            {loading && (
                                <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none"
                                     viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                            strokeWidth="4"/>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                                </svg>
                            )}
                            {loading ? "Calculating…" : "Add Position"}
                        </button>
                        <button
                            onClick={() => {
                                resetForm();
                                resetBasket();
                                setSymbolSearch("");
                            }}
                            className="rounded-lg border border-border/40 px-6 py-2.5 text-sm font-medium hover:bg-gray-50 transition-colors"
                        >
                            Reset
                        </button>
                    </div>
                </div>

                {/* ── SUMMARY CARD ── */}
                <div className="rounded-2xl border border-border/40 bg-white shadow-sm overflow-hidden h-fit">
                    <div className="bg-arihant-violet px-4 py-3 text-white text-xs font-bold uppercase tracking-widest">
                        Margin Summary
                    </div>
                    <div className="p-5 space-y-3">
                        <SummaryRow label="Net Premium" value={summary.netPremium}></SummaryRow>
                        <SummaryRow label="Span Margin" value={summary.span}/>
                        <SummaryRow label="Exposure Margin" value={summary.exposure}/>
                        <div className="pt-3 border-t flex justify-between items-center">
                            <span className="text-sm font-bold text-gray-900">Total Required</span>
                            <span
                                className="text-base font-black text-arihant-violet">{formatCurrency(summary.total)}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── BASKET TABLE — only shown when positions exist ── */}
            {basket.length > 0 && (
                <div className="mt-6 rounded-2xl border border-border/40 bg-white shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-gray-50 border-b border-border/40">
                            <tr>
                                {["Contract", "Product", "Trade Type","Option Type", "Strike", "Qty", "Initial Margin", "Exposure", "Total", ""].map(h => (
                                    <th key={h} className="px-4 py-3 text-left text-[11px] font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">
                                        {h}
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-border/20">
                            {basket.map((row) => (
                                <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-4 py-3 font-semibold text-gray-900 whitespace-nowrap">{row.contract}</td>
                                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{row.product}</td>
                                    <td className={`px-4 py-3 font-bold whitespace-nowrap ${row.trade_type === "Buy" ? "text-green-600" : "text-red-500"}`}>
                                        {row.trade_type}
                                    </td>
                                    <td className="px-4 py-3 text-gray-500 whitespace-nowrap">
                                        {row.product === "Futures" ? "—" : row.optionType}
                                    </td>
                                    <td className="px-4 py-3 text-gray-600 whitespace-nowrap">
                                        {!row.strike || row.strike <= 0 ? "—" : row.strike}
                                    </td>
                                    <td className="px-4 py-3 tabular-nums whitespace-nowrap">{row.qty}</td>
                                    <td className="px-4 py-3 tabular-nums whitespace-nowrap">{formatCurrency(row.initialMargin)}</td>
                                    <td className="px-4 py-3 tabular-nums whitespace-nowrap">{formatCurrency(row.exposure)}</td>
                                    <td className="px-4 py-3 tabular-nums whitespace-nowrap font-semibold">
                                        {formatCurrency(row.total)}  {/* ← per-row total */}
                                    </td>
                                    <td className="px-4 py-3">
                                        <button
                                            onClick={() => removeItem(row.id)}
                                            className="text-gray-300 hover:text-red-500 transition-colors"
                                        >
                                            <DeleteOutlineIcon fontSize="small"/>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {/* Summary row at bottom */}
                            <tr className="bg-gray-50 font-bold border-t-2 border-border/40">
                                <td className="px-4 py-3" colSpan={6}>Total</td>
                                <td className="px-4 py-3 tabular-nums">{formatCurrency(summary.span)}</td>
                                <td className="px-4 py-3 tabular-nums">{formatCurrency(summary.exposure)}</td>
                                <td className="px-4 py-3 tabular-nums">{formatCurrency(summary.total)}</td>
                                <td/>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </section>
    );
}

/* ================= SHARED STYLES ================= */
const inputCls = "mt-1 w-full rounded-lg border border-border/40 px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-arihant-violet";
const selectCls = "mt-1 w-full rounded-lg border border-border/40 px-3 py-2 text-sm bg-white focus:outline-none focus:ring-1 focus:ring-arihant-violet";

/* ================= UI HELPERS ================= */
function Field({label, children}: { label: string; children: React.ReactNode }) {
    return (
        <div>
            <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{label}</label>
            {children}
        </div>
    );
}

function SummaryRow({label, value}: { label: string; value: number }) {
    return (
        <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">{label}</span>
            <span className="font-semibold tabular-nums">{formatCurrency(value)}</span>
        </div>
    );
}

function Radio({label, checked, onChange}: { label: string; checked: boolean; onChange: () => void }) {
    return (
        <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" checked={checked} onChange={onChange} className="accent-arihant-violet w-4 h-4"/>
            <span
                className={`text-sm font-medium transition-colors ${checked ? "text-arihant-violet" : "text-gray-500"}`}>
                {label}
            </span>
        </label>
    );
}