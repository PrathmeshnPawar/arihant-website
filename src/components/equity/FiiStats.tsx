import { EquityCard } from "./EquityCard";

export function FiiStats() {
  return (
    <EquityCard title="FII / DII Activity">
      <div className="space-y-3">
        <div className="flex justify-between">
          <span>FII Net Buy</span>
          <span className="text-emerald-600 font-medium">
            ₹324 Cr
          </span>
        </div>

        <div className="flex justify-between">
          <span>DII Net Buy</span>
          <span className="text-emerald-600 font-medium">
            ₹210 Cr
          </span>
        </div>

        <p className="text-xs text-gray-500 pt-2">
          Data updated periodically.
        </p>
      </div>
    </EquityCard>
  );
}
