import { EquityCard } from "./EquityCard";
import { MarketChart } from "./MarketChart";

const mockData = [
  { time: "09:00", value: 25940 },
  { time: "09:15", value: 26020 },
  { time: "09:30", value: 25980 },
  { time: "09:45", value: 25920 },
  { time: "10:00", value: 25950 },
  { time: "10:15", value: 25910 },
  { time: "10:30", value: 25960 },
];

export function TodayMarkets() {
  return (
    <EquityCard title="Today's Markets">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-6 text-sm font-medium">
          <span className="text-arihant-violet cursor-pointer">
            Nifty 50
          </span>
          <span className="text-gray-400 cursor-pointer">
            Sensex
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          <span className="text-green-600 font-medium">
            Live
          </span>
        </div>
      </div>

      {/* Time Filters */}
      <div className="flex gap-3 mb-6 text-sm">
        {["1D", "1W", "1M", "3M", "6M", "1Y", "3Y"].map((range) => (
          <button
            key={range}
            className="rounded-full px-4 py-1 bg-emerald-100 text-emerald-700 font-medium"
          >
            {range}
          </button>
        ))}
      </div>

      {/* Chart */}
      <MarketChart data={mockData} />

      {/* Market Breadth */}
      <div className="mt-6">
        <div className="flex h-3 w-full rounded-full overflow-hidden">
          <div className="bg-green-500 w-2/5"></div>
          <div className="bg-red-500 w-3/5"></div>
        </div>
        <div className="flex justify-between text-xs mt-2 text-gray-500">
          <span>Advances</span>
          <span>Declines</span>
        </div>
      </div>
    </EquityCard>
  );
}
