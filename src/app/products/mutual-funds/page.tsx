import type { Metadata } from "next";
import MutualFundsContent from "./MutualFundsContent";

export const metadata: Metadata = {
  title: "Mutual Funds – Invest Smarter with SIP & Long Term Growth | Arihant",
  description: "Invest in carefully selected mutual funds with Arihant. Start SIPs, build long-term wealth, and diversify your portfolio with expert-backed research.",
  alternates: {
    canonical: "https://arihant-website-356i.vercel.app/products/mutual-funds",
  },
};

export default function Page() {
  return <MutualFundsContent />;
}