"use client";

import { useState, useMemo } from "react";

export default function SIPCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [years, setYears] = useState(12);
  const [rate, setRate] = useState(12);

  const { invested, futureValue, gains } = useMemo(() => {
    const n = years * 12;

    if (rate === 0) {
      const invested = monthly * n;
      return { invested, futureValue: invested, gains: 0 };
    }

    const r = rate / 100 / 12;

    const fv =
      monthly *
      ((Math.pow(1 + r, n) - 1) / r) *
      (1 + r);

    const invested = monthly * n;

    return {
      invested: Math.round(invested),
      futureValue: Math.round(fv),
      gains: Math.round(fv - invested),
    };
  }, [monthly, years, rate]);

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-4xl font-bold text-arihant-violet mb-10">
        SIP Calculator
      </h1>

      <div className="rounded-3xl border border-border/40 bg-white p-10 shadow-sm">
        <Slider
          label="Monthly Investment"
          value={monthly}
          display={`₹ ${monthly.toLocaleString()}`}
          min={500}
          max={100000}
          step={500}
          onChange={setMonthly}
        />

        <Slider
          label="Time Horizon"
          value={years}
          display={`${years} Years`}
          min={1}
          max={40}
          step={1}
          onChange={setYears}
        />

        <Slider
          label="Expected Return"
          value={rate}
          display={`${rate}%`}
          min={1}
          max={20}
          step={0.5}
          onChange={setRate}
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Stat label="Invested Amount" value={`₹ ${invested.toLocaleString()}`} />
          <Stat label="Estimated Gains" value={`₹ ${gains.toLocaleString()}`} />
          <Stat
            label="Future Value"
            value={`₹ ${futureValue.toLocaleString()}`}
            highlight
          />
        </div>
      </div>
      <div className="mt-10 rounded-2xl border border-border/40 bg-white p-6 text-sm text-gray-600 shadow-sm">
  <h3 className="text-base font-semibold text-arihant-violet mb-3">
    How this calculator works
  </h3>

  <p className="mb-2">
    A SIP (Systematic Investment Plan) allows investors to contribute a fixed
    amount at regular intervals. The calculator estimates the future value of
    investments assuming consistent contributions and compounded returns.
  </p>

  <p className="mb-2">
    Returns are compounded monthly based on the expected rate of return. Actual
    market performance may vary due to volatility, fund performance, and
    economic conditions.
  </p>

  <p className="text-xs text-gray-400 mt-3">
    * Calculations are illustrative and do not guarantee returns.
  </p>
</div>

    </section>
  );
}

function Slider({ label, value, display, min, max, step, onChange }: any) {
  return (
    <div className="mb-8">
      <div className="flex justify-between text-sm font-medium">
        <span>{label}</span>
        <span className="text-arihant-violet">{display}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full mt-3 accent-arihant-green"
      />
    </div>
  );
}

function Stat({ label, value, highlight }: any) {
  return (
    <div
      className={`rounded-2xl border border-border/40 p-5 text-center ${
        highlight ? "bg-emerald-50" : "bg-white"
      }`}
    >
      <p className="text-xs text-gray-500">{label}</p>
      <p className={`text-xl font-semibold mt-1 ${highlight ? "text-arihant-green" : ""}`}>
        {value}
      </p>
    </div>
  );
}
