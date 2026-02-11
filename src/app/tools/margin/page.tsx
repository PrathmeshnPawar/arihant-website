"use client";

import { useState, useMemo } from "react";

export default function MarginCalculator() {
  const [tradeValue, setTradeValue] = useState(100000);
  const [leverage, setLeverage] = useState(5);
  const [marginPct, setMarginPct] = useState(20);

  const { requiredMargin, exposure } = useMemo(() => {
    const requiredMargin = tradeValue * (marginPct / 100);
    const exposure = tradeValue * leverage;

    return {
      requiredMargin: Math.round(requiredMargin),
      exposure: Math.round(exposure),
    };
  }, [tradeValue, leverage, marginPct]);

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold text-arihant-violet mb-8">
        Margin Calculator
      </h1>

      <div className="rounded-3xl border border-border/40 bg-white p-8 shadow-sm">
        <Field label="Trade Value" value={tradeValue} onChange={setTradeValue} prefix="₹" />
        <Field label="Leverage" value={leverage} onChange={setLeverage} />
        <Field label="Margin (%)" value={marginPct} onChange={setMarginPct} />

        <div className="mt-8 grid grid-cols-2 gap-4">
          <Stat label="Required Margin" value={`₹ ${requiredMargin.toLocaleString()}`} highlight />
          <Stat label="Effective Exposure" value={`₹ ${exposure.toLocaleString()}`} />
        </div>
      </div>
      <div className="mt-10 rounded-2xl border border-border/40 bg-white p-6 text-sm text-gray-600 shadow-sm">
  <h3 className="text-base font-semibold text-arihant-violet mb-3">
    How this calculator works
  </h3>

  <p className="mb-2">
    Margin trading allows investors to take positions larger than their available
    capital by using leverage. The calculator estimates the capital required to
    open a position based on trade value and margin percentage.
  </p>

  <p className="mb-2">
    Higher leverage increases potential gains but also amplifies risk. Market
    movements may require additional funds to maintain positions.
  </p>

  <p className="text-xs text-gray-400 mt-3">
    * Margin requirements may vary based on exchange rules and risk policies.
  </p>
</div>

    </section>
  );
}

function Field({ label, value, onChange, prefix }: any) {
  return (
    <div className="mb-5">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="mt-1 flex items-center rounded-lg border border-border/40 px-4">
        {prefix && <span className="text-gray-500 mr-2">{prefix}</span>}
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full py-3 outline-none"
        />
      </div>
      
    </div>
    
  );
}

function Stat({ label, value, highlight }: any) {
  return (
    <div
      className={`rounded-xl border border-border/40 p-4 text-center ${
        highlight ? "bg-emerald-50" : "bg-white"
      }`}
    >
      <p className="text-xs text-gray-500">{label}</p>
      <p className={`text-lg font-semibold ${highlight ? "text-arihant-green" : ""}`}>
        {value}
      </p>
    </div>
  );
}
