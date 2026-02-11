import { WeeklyData } from "@/types/market";
import { EquityCard } from "./EquityCard";

interface Props {
  weekly: WeeklyData | null;
}

export function WeeklyHighLow({ weekly }: Props) {
  return (
    <EquityCard title="Weekly High / Low">
      {!weekly ? (
        <p className="text-sm text-gray-500">
          Weekly data temporarily unavailable.
        </p>
      ) : (
        <div className="space-y-3 text-lg font-medium">
          <div className="flex justify-between">
            <span>High</span>
            <span className="text-emerald-600">
              ${weekly.high}
            </span>
          </div>

          <div className="flex justify-between">
            <span>Low</span>
            <span className="text-red-600">
              ${weekly.low}
            </span>
          </div>
        </div>
      )}
    </EquityCard>
  );
}
