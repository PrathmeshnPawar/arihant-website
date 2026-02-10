import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/Button";

const highlights = ["30+ years of market expertise", "2.5L+ active investors", "Research-backed recommendations"];

const highlights = [
  "30+ years of market expertise",
  "2.5L+ active investors",
  "Research-backed calls and insights",
];

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-arihant-violet-soft to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="inline-block rounded-full bg-arihant-green-soft px-4 py-2 text-xs font-semibold uppercase tracking-wide text-arihant-green">
            Trusted since 1992
          </p>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-arihant-violet md:text-5xl">
            Invest smarter with <span className="text-arihant-green">clarity, confidence and care.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-gray-600">
            Explore equity, mutual funds, IPOs and advisory offerings designed to help you build long-term wealth.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-arihant-green px-6 py-3 font-semibold text-white transition hover:bg-arihant-violet">
              Open an Account
            </Link>
            <Link href="/about-us" className="rounded-full border border-arihant-violet/25 px-6 py-3 font-semibold text-arihant-violet transition hover:bg-arihant-violet-soft">
              About Arihant
            </Link>
          </div>

          <ul className="mt-7 space-y-2 text-sm text-gray-600">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-arihant-green" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-arihant-green/20 bg-white p-8 shadow-sm">
          <div className="rounded-2xl bg-arihant-violet p-6 text-white">
            <p className="text-sm text-white/80">Today&apos;s market insights</p>
            <h3 className="mt-2 text-xl font-semibold">Research-led recommendations</h3>
            <p className="mt-4 text-sm text-white/80">
              Daily market notes, thematic ideas and risk-aware insights to support every investor.
            </p>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-xl bg-arihant-green-soft p-4 text-arihant-violet">
              <p className="font-bold text-2xl">2.5L+</p>
              <p>Active investors</p>
            </div>
            <div className="rounded-xl bg-arihant-violet-soft p-4 text-arihant-violet">
              <p className="font-bold text-2xl">30+</p>
              <p>Years of trust</p>
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              <Card className="border-0 bg-arihant-violet-soft p-4 shadow-none">
                <p className="text-xs font-medium text-gray-500">Portfolio Value</p>
                <p className="mt-2 text-2xl font-bold text-gray-900">₹ 18.42L</p>
                <p className="text-sm text-arihant-green">+12.8% (1Y)</p>
              </Card>
              <Card className="border-0 bg-arihant-green-soft p-4 shadow-none">
                <p className="text-xs font-medium text-gray-500">Watchlist</p>
                <p className="mt-2 text-sm font-semibold text-gray-900">Nifty 50, Banking, Pharma</p>
              </Card>
              <Card className="p-4 sm:col-span-2">
                <p className="text-xs font-medium text-gray-500">Today&apos;s Insight</p>
                <p className="mt-1 text-sm text-gray-700">Stay invested with staggered allocation during volatile market sessions.</p>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
