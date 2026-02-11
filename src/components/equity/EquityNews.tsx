import { NewsItem } from "@/types/market";
import { EquityCard } from "./EquityCard";

interface Props {
  news: NewsItem[];
}

export function EquityNews({ news }: Props) {
  return (
    <EquityCard title="Equity News">
      {!news?.length ? (
        <p className="text-sm text-gray-500">
          No news available at the moment.
        </p>
      ) : (
        <ul className="divide-y divide-gray-100">
          {news.map((item) => (
            <li key={item.url} className="py-3">
              <a
                href={item.url}
                target="_blank"
                className="text-gray-800 hover:text-arihant-violet transition font-medium"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </EquityCard>
  );
}

