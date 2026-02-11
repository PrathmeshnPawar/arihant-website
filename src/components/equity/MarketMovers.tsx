import { Quote } from "@/types/market";
import { EquityCard } from "./EquityCard";


interface Props {
  gainers: Quote[];
  losers: Quote[];
}

export function MarketMovers({ gainers, losers }: Props) {
  return (
    <EquityCard title="Market Movers">
      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium text-gray-500 mb-2">
            Top Gainers
          </p>
          {gainers.map((s) => (
            <div key={s.symbol} className="flex justify-between">
              <span>{s.symbol}</span>
              <span className="text-emerald-600 font-medium">
                {s.changePercent}
              </span>
            </div>
          ))}
        </div>

        <div>
          <p className="text-sm font-medium text-gray-500 mb-2">
            Top Losers
          </p>
          {losers.map((s) => (
            <div key={s.symbol} className="flex justify-between">
              <span>{s.symbol}</span>
              <span className="text-red-600 font-medium">
                {s.changePercent}
              </span>
            </div>
          ))}
        </div>
      </div>
    </EquityCard>
  );
}
