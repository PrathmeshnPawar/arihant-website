import { WeeklyData } from "@/types/market";
import { EquityCard } from "./EquityCard";

interface Props {
  weekly: WeeklyData | null;
}

export function WeeklyHighLow({ weekly }: Props) {
  if (!weekly) return null;

  return (
    <EquityCard title="Weekly High / Low">
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
    </EquityCard>
  );
}
