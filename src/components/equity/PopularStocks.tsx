import { Quote } from "@/types/market";
import { EquityCard } from "./EquityCard";


interface Props {
  quotes: Quote[];
}
export function PopularStocks({ quotes }: Props) {
  return (
    <EquityCard title="Popular Stocks">
      <div className="space-y-3">
        {quotes.map((s) => (
          <div key={s.symbol} className="flex justify-between">
            <span>{s.symbol}</span>
            <span className="font-medium">
              ${s.price}
            </span>
          </div>
        ))}
      </div>
    </EquityCard>
  );
}
