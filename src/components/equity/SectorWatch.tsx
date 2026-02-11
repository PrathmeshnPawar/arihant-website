import { getSectorPerformance } from "@/lib/alphaVantage";
import { EquityCard } from "./EquityCard";

export async function SectorWatch() {
  const sectors = await getSectorPerformance();
  if (!sectors) return null;

  const entries = Object.entries(sectors).slice(0, 6);

  return (
    <EquityCard title="Sector Watch">
      <ul className="space-y-3">
        {entries.map(([sector, value]) => (
          <li
            key={sector}
            className="flex justify-between"
          >
            <span>{sector}</span>
            <span className="font-medium">
              {value}
            </span>
          </li>
        ))}
      </ul>
    </EquityCard>
  );
}

