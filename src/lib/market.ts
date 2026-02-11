export async function getMarketSummary() {
  try {
    const res = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${process.env.AV_API_KEY}`,
      { next: { revalidate: 600 } }
    );

    const data = await res.json();

    if (!data["Time Series (Daily)"]) {
      console.error("API Error:", data);
      throw new Error("Invalid response structure");
    }

    const timeSeries = data["Time Series (Daily)"];

    // Get latest available date
    const latestDate = Object.keys(timeSeries)[0];
    const latestData = timeSeries[latestDate];
    console.log(latestData)

    return {
      date: latestDate,
      open: parseFloat(latestData["1. open"]),
      high: parseFloat(latestData["2. high"]),
      low: parseFloat(latestData["3. low"]),
      close: parseFloat(latestData["4. close"]),
      volume: parseInt(latestData["5. volume"]),
    };

  } catch (error) {
    console.error("Market API error:", error);
    return null;
  }
}
