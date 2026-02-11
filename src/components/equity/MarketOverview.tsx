import { Quote } from "@/types/market";
import { EquityCard } from "./EquityCard";

interface Props {
  quotes: Quote[];
}

export function MarketOverview({ quotes }: Props) {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {quotes.map((stock) => (
        <EquityCard key={stock.symbol} title={stock.symbol}>
          <div className="space-y-2">
            <p className="text-3xl font-semibold">
              ${stock.price}
            </p>

            <p
              className={`text-lg font-medium ${
                stock.change > 0
                  ? "text-emerald-600"
                  : "text-red-600"
              }`}
            >
              {stock.changePercent}
            </p>
          </div>
        </EquityCard>
      ))}
    </div>
  );
}
