import Link from "next/link";

const highlights = [
  "30+ years of market expertise",
  "2.5L+ active investors",
  "Research-backed calls and insights",
];

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-18 md:grid-cols-2 md:py-24">
        <div>
          <p className="inline-block rounded-full bg-arihant-green-soft px-4 py-1.5 text-xs font-semibold text-arihant-green">
            Trusted Investing Partner
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Create long-term wealth with
            <span className="text-arihant-green"> confidence.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-gray-600">
            Equity, IPOs, Mutual Funds, and advisory support in one seamless investing experience inspired by modern fintech simplicity.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="rounded-full bg-arihant-green px-6 py-3 font-semibold text-white transition hover:opacity-90">
              Start Investing
            </Link>
            <Link href="/products/equity" className="rounded-full border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition hover:border-arihant-green hover:text-arihant-green">
              Explore Products
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

        <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="rounded-2xl bg-arihant-violet p-6 text-white">
            <p className="text-sm text-white/80">Portfolio Snapshot</p>
            <p className="mt-2 text-3xl font-bold">₹ 18.42L</p>
            <p className="mt-1 text-sm text-arihant-green-soft">+12.8% in 1Y</p>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-arihant-green-soft p-4">
              <p className="text-xs font-medium text-gray-500">Top Performer</p>
              <p className="mt-1 font-semibold text-gray-900">Large Cap Funds</p>
            </div>
            <div className="rounded-xl bg-arihant-violet-soft p-4">
              <p className="text-xs font-medium text-gray-500">Research Alert</p>
              <p className="mt-1 font-semibold text-gray-900">Banking Sector Watch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
