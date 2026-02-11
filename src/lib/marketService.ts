import { getQuote, getWeeklyHighLow } from "./alphaVantage";

export async function getMarketData() {
  const symbols = ["AAPL", "MSFT", "GOOGL", "TSLA", "NVDA"];

  // Fetch quotes (5 calls max)
  const quotes = (await Promise.all(
    symbols.map((s) => getQuote(s))
  )).filter(Boolean);

  // Compute movers
  const sorted = [...quotes].sort(
    (a: any, b: any) =>
      parseFloat(b["09. change"]) - parseFloat(a["09. change"])
  );

  const gainers = sorted.slice(0, 2);
  const losers = sorted.slice(-2);

  // Weekly high/low for 1 flagship stock
  const weekly = await getWeeklyHighLow("AAPL");

  return {
    quotes,
    gainers,
    losers,
    weekly,
  };
}
