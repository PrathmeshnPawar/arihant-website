export interface Quote {
  symbol: string;
  price: number;
  change: number;
  changePercent: string;
}

export interface WeeklyData {
  high: number;
  low: number;
}

export interface NewsItem {
  title: string;
  url: string;
}
