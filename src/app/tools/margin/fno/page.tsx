"use client";

import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { formatCurrency } from "@/utils/formatters";
import { useFnOLogic, Exchange, Product, OptionType } from "./fnoLogic";

const exchanges: Exchange[] = ["NFO", "BFO", "MCX", "CDS"];
const products: Product[] = ["Futures", "Options"];
const optionTypes: OptionType[] = ["Calls", "Puts"];

export default function FnOMarginCalculator() {
  const {
    basket,
    form,
    setForm,
    summary,
    handleAdd,
    removeItem,
    resetForm,
    resetBasket,
  } = useFnOLogic();

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
              onChange={(v) => setForm({ ...form, exchange: v as Exchange })}
            />

            <Select
              label="Product"
              value={form.product}
              options={products}
              onChange={(v) => setForm({ ...form, product: v as Product })}
            />
          </div>

          <div className="mt-4">
            <Select
              label="Symbol"
              value={form.symbol?.label ?? ""}
              options={["360ONE 24-FEB-2026", "NIFTY 27-MAR-2026"]}
              onChange={(v: string) =>
                setForm({ ...form, symbol: { label: v } })
              }
            />
          </div>

          {form.product === "Options" && (
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Input
                label="Strike Price"
                value={form.strike}
                onChange={(v) => setForm({ ...form, strike: v })}
              />

              <Select
                label="Option Type"
                value={form.optionType}
                options={optionTypes}
                onChange={(v) =>
                  setForm({ ...form, optionType: v as OptionType })
                }
              />
            </div>
          )}

          <div className="mt-4">
            <Input
              label="Net Quantity"
              type="number"
              value={form.qty}
              onChange={(v) => setForm({ ...form, qty: Number(v) })}
            />
          </div>

          <div className="flex gap-6 mt-4 text-sm">
            <Radio
              label="Buy"
              checked={form.side === "Buy"}
              onChange={() => setForm({ ...form, side: "Buy" })}
            />
            <Radio
              label="Sell"
              checked={form.side === "Sell"}
              onChange={() => setForm({ ...form, side: "Sell" })}
            />
          </div>

          <div className="flex gap-3 mt-6">
            <button
              onClick={handleAdd}
              className="rounded-lg bg-arihant-violet px-5 py-2 text-white text-sm font-medium"
            >
              Add Position
            </button>

            <button
              onClick={() => {
                resetForm();
                resetBasket();
              }}
              className="rounded-lg border border-border/40 px-5 py-2 text-sm"
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
      <div className="mt-6 rounded-2xl border border-border/40 bg-white shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-600">
            <tr>
              {[
                "Exchange",
                "Contract",
                "Qty",
                "Initial",
                "Exposure",
                "Total",
                "",
              ].map((h) => (
                <th key={h} className="px-4 py-3 text-left font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {basket.length === 0 ? (
              <tr>
                <td colSpan={7} className="text-center py-6 text-gray-400">
                  No positions added
                </td>
              </tr>
            ) : (
              <>
                {basket.map((row) => (
                  <tr key={row.id} className="border-t">
                    <td className="px-4 py-3">{row.exchange}</td>
                    <td>{row.contract}</td>
                    <td>{row.qty}</td>
                    <td>{formatCurrency(row.initialMargin)}</td>
                    <td>{formatCurrency(row.exposure)}</td>
                    <td>{formatCurrency(row.total)}</td>
                    <td>
                      <button onClick={() => removeItem(row.id)}>
                        <DeleteOutlineIcon fontSize="small" />
                      </button>
                    </td>
                  </tr>
                ))}

                {/* ✅ TOTALS ROW */}
                <tr className="border-t bg-gray-50 font-semibold">
                  <td className="px-4 py-3" colSpan={3}>
                    Total
                  </td>
                  <td>{formatCurrency(summary.span)}</td>
                  <td>{formatCurrency(summary.exposure)}</td>
                  <td>{formatCurrency(summary.total)}</td>
                  <td />
                </tr>
              </>
            )}
          </tbody>
        </table>
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

function Input({ label, value, onChange, type = "text" }: InputProps) {
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
}

function Select({ label, value, options, onChange }: SelectProps) {
  return (
    <div>
      <label className="text-xs text-gray-500">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-lg border border-border/40 px-3 py-2 text-sm"
      >
        {options.map((o: string) => (
          <option key={o} value={o}>
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

function Radio({ label, checked, onChange }: RadioProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer">
      <input type="radio" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}
