import { EquityHeader } from "@/components/equity/EquityHeader";
import { MarketOverview } from "@/components/equity/MarketOverview";
import { SectorWatch } from "@/components/equity/SectorWatch";
import { MarketMovers } from "@/components/equity/MarketMovers";
import { FiiStats } from "@/components/equity/FiiStats";
import { ResearchReports } from "@/components/equity/ResearchReports";
import { EquityNews } from "@/components/equity/EquityNews";
import { PopularStocks } from "@/components/equity/PopularStocks";
import { WeeklyHighLow } from "@/components/equity/WeeklyHighLow";

import { getQuote, getWeeklyHighLow, getNews } from "@/lib/alphaVantage";
import type { Quote } from "@/types/market";
import { TodayMarkets } from "@/components/equity/TodayMarkets";

export default async function EquityPage() {
  const symbols = ["AAPL", "MSFT", "GOOGL"];

  const quotes = (await Promise.all(
    symbols.map(getQuote)
  )).filter(Boolean) as Quote[];

  const sorted = [...quotes].sort((a, b) => b.change - a.change);
  const gainers = sorted.slice(0, 2);
  const losers = sorted.slice(-2);

  const weekly = await getWeeklyHighLow("AAPL");
  const news = await getNews();

  return (
    <div className="bg-gradient-to-b from-white to-emerald-50/30 min-h-screen py-14">
      <div className="mx-auto max-w-7xl px-6 space-y-16">

        <EquityHeader />
        <section>
          <TodayMarkets />
        </section>

        {/* Market Overview */}
        <section>
          <MarketOverview quotes={quotes} />
        </section>

        {/* Market Highlights */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-6">
            Market Highlights
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <MarketMovers gainers={gainers} losers={losers} />
            <WeeklyHighLow weekly={weekly} />
          </div>
        </section>

        {/* Sector & Popular */}
        <section>
          <div className="grid gap-8 md:grid-cols-2">
            <SectorWatch />
            <PopularStocks quotes={quotes.slice(0, 3)} />
          </div>
        </section>

        {/* News */}
        {news && (
          <section>
            <EquityNews news={news} />
          </section>
        )}

        {/* Bottom Section */}
        <section>
          <div className="grid gap-8 md:grid-cols-2">
            <FiiStats />
            <ResearchReports />
          </div>
        </section>

      </div>
    </div>
  );
}
