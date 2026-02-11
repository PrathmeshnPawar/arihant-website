"use client";

import { EquityCard } from "./EquityCard";

export function MarketSummary() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <EquityCard title="Nifty 50">
        <p className="text-2xl font-bold">21,235.15</p>
        <p className="text-green-600 font-medium">+0.45%</p>
      </EquityCard>

      <EquityCard title="Sensex">
        <p className="text-2xl font-bold">70,845.32</p>
        <p className="text-red-600 font-medium">-0.12%</p>
      </EquityCard>

      <EquityCard title="Market Status">
        <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
          ● Live
        </span>
      </EquityCard>
    </div>
  );
}
