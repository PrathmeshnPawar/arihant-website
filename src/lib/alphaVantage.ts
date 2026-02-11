import { Quote, WeeklyData, NewsItem } from "@/types/market";

export async function getQuote(symbol: string): Promise<Quote | null> {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.AV_API_KEY}`,
    { next: { revalidate: 21600 } } // 6 hours
  );

  const data = await res.json();

  const quote = data["Global Quote"];
  if (!quote) return null;

  return {
    symbol: quote["01. symbol"],
    price: parseFloat(quote["05. price"]),
    change: parseFloat(quote["09. change"]),
    changePercent: quote["10. change percent"],
  };
}

export async function getWeeklyHighLow(symbol: string): Promise<WeeklyData | null> {
  try {
    const res = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.AV_API_KEY}`,
      { next: { revalidate: 43200  } }
    );

    const data = await res.json();

    // ✅ CRITICAL — detect throttling
    if (data.Note || data.Information) {
      console.warn("Alpha Vantage throttled (weekly):", data);
      return null;
    }

    const series = data["Time Series (Daily)"];
    if (!series) return null;

    const last7 = Object.values(series).slice(0, 7) as any[];

    const highs = last7.map(d => parseFloat(d["2. high"]));
    const lows = last7.map(d => parseFloat(d["3. low"]));

    return {
      high: Math.max(...highs),
      low: Math.min(...lows),
    };
  } catch (err) {
    console.error("Weekly fetch failed:", err);
    return null;
  }
}


export async function getNews(): Promise<NewsItem[] | null> {
  try {
    const res = await fetch(
      `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=${process.env.AV_API_KEY}`,
      { next: { revalidate: 43200  } }
    );

    const data = await res.json();

    // ✅ CRITICAL — detect throttling
    if (data.Note || data.Information) {
      console.warn("Alpha Vantage throttled (news):", data);
      return [];
    }

    if (!data.feed) return [];

    return data.feed.slice(0, 5).map((item: any) => ({
      title: item.title,
      url: item.url,
    }));
  } catch (err) {
    console.error("News fetch failed:", err);
    return [];
  }
}

export async function getSectorPerformance(): Promise<Record<string, string> | null> {
  const res = await fetch(
    `https://www.alphavantage.co/query?function=SECTOR&apikey=${process.env.AV_API_KEY}`,
    { next: { revalidate: 21600 } }
  );

  const data = await res.json();

  const sectorData = data?.["Rank A: Real-Time Performance"];

  if (!sectorData) return null;

  return sectorData as Record<string, string>;
}
