import type { Metadata } from "next";
import FixedIncomeClient from "@/components/fixed-income/FixedIncomeClient";

export const metadata: Metadata = {
  title: "Fixed Income Investments – Bonds, FDs & NCDs | Arihant",
  description:
    "Explore Corporate Bonds, Fixed Deposits, NCDs and Debt Funds offering stable and predictable returns.",
  alternates: {
    canonical:
      "https://arihant-website-356i.vercel.app/products/fixed-income",
  },
};

export default function FixedIncomePage() {
  return <FixedIncomeClient />;
}
