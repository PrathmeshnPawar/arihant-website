import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/Button";

const highlights = ["30+ years of market expertise", "2.5L+ active investors", "Research-backed recommendations"];

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
        <div>
          <Badge>Trusted Investing Partner</Badge>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Build long-term wealth with <span className="text-arihant-green">clarity and confidence.</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-gray-600">
            Invest in equity, mutual funds and IPOs with a clean, easy-to-use experience and expert guidance at every step.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className={buttonVariants({ variant: "default" })}>
              Open Account
            </Link>
            <Link href="/products/equity" className={buttonVariants({ variant: "outline" })}>
              Explore Products
            </Link>
          </div>

          <ul className="mt-6 space-y-2 text-sm text-gray-600">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-arihant-green" />
                {item}
              </li>
            ))}
          </ul>
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
