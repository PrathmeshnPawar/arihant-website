"use client";

import { useState, useMemo } from "react";

export default function EMICalculator() {
  const [amount, setAmount] = useState(1000000);
  const [rate, setRate] = useState(8);
  const [months, setMonths] = useState(60);

  const { emi, interest, total } = useMemo(() => {
    const r = rate / 12 / 100;

    if (r === 0) {
      const emi = amount / months;
      return {
        emi: Math.round(emi),
        interest: 0,
        total: amount,
      };
    }

    const emi =
      (amount * r * Math.pow(1 + r, months)) /
      (Math.pow(1 + r, months) - 1);

    const total = emi * months;
    const interest = total - amount;

    return {
      emi: Math.round(emi),
      interest: Math.round(interest),
      total: Math.round(total),
    };
  }, [amount, rate, months]);

  return (
    <section className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold text-arihant-violet mb-8">
        EMI Calculator
      </h1>

      <div className="rounded-3xl border border-border/40 bg-white p-8 shadow-sm">
        <Field label="Loan Amount" value={amount} onChange={setAmount} prefix="₹" />
        <Field label="Interest Rate (%)" value={rate} onChange={setRate} />
        <Field label="Tenure (Months)" value={months} onChange={setMonths} />

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
          <Stat label="Monthly EMI" value={`₹ ${emi.toLocaleString()}`} highlight />
          <Stat label="Total Interest" value={`₹ ${interest.toLocaleString()}`} />
          <Stat label="Total Payment" value={`₹ ${total.toLocaleString()}`} />
        </div>
      </div>
      <div className="mt-10 rounded-2xl border border-border/40 bg-white p-6 text-sm text-gray-600 shadow-sm">
  <h3 className="text-base font-semibold text-arihant-violet mb-3">
    How this calculator works
  </h3>

  <p className="mb-2">
    The EMI (Equated Monthly Installment) represents the fixed monthly payment
    required to repay a loan over a specified tenure. Each payment consists of
    both principal repayment and interest.
  </p>

  <p className="mb-2">
    The calculation assumes a reducing balance method, where interest is charged
    only on the outstanding loan amount. Over time, the interest component
    decreases while the principal component increases.
  </p>

  <p className="text-xs text-gray-400 mt-3">
    * Results are indicative and do not include taxes, processing fees, or
    changes in interest rates.
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
