import Link from "next/link";

const highlights = ["30+ years of market expertise", "2.5L+ active investors", "Research-backed recommendations"];

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-20">
        <div>
          <p className="inline-block rounded-full bg-arihant-green-soft px-4 py-1.5 text-xs font-semibold text-arihant-green">Trusted Investing Partner</p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Build long-term wealth with <span className="text-arihant-green">clarity and confidence.</span>
          </h1>
          <p className="mt-4 max-w-xl text-lg text-gray-600">
            Invest in equity, mutual funds and IPOs with a clean, easy-to-use experience and expert guidance at every step.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-full bg-arihant-green px-6 py-3 font-semibold text-white">
              Open Account
            </Link>
            <Link href="/products/equity" className="rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700">
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

        <div className="rounded-2xl border border-gray-200 bg-white p-5">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-arihant-violet-soft p-4">
              <p className="text-xs font-medium text-gray-500">Portfolio Value</p>
              <p className="mt-2 text-2xl font-bold text-gray-900">₹ 18.42L</p>
              <p className="text-sm text-arihant-green">+12.8% (1Y)</p>
            </div>
            <div className="rounded-xl bg-arihant-green-soft p-4">
              <p className="text-xs font-medium text-gray-500">Watchlist</p>
              <p className="mt-2 text-sm font-semibold text-gray-900">Nifty 50, Banking, Pharma</p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4 sm:col-span-2">
              <p className="text-xs font-medium text-gray-500">Today&apos;s Insight</p>
              <p className="mt-1 text-sm text-gray-700">Stay invested with staggered allocation during volatile market sessions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
