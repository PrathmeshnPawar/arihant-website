import type { Metadata } from "next";
import EquityContent from "./EquityContent";

export const metadata: Metadata = {
  title: "Equity Trading Account – Trade Stocks & Shares | Arihant Capital",
  description: "Open an Equity Trading Account with Arihant Capital to trade stocks...",
  alternates: {
    canonical: "https://arihant-website-356i.vercel.app/products/equity-product",
  },
};

export default function Page() {
  return <EquityContent />;
}