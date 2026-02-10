import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Build your wealth{" "}
            <span className="text-arihant-green">with confidence</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Equity, Mutual Funds, IPOs, and long-term investing solutions
            backed by 30+ years of market expertise.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/auth/open-account"
              className="bg-arihant-green hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              Open an Account
            </Link>

            <Link
              href="/(marketing)/contact"
              className="border border-gray-300 px-6 py-3 rounded-full font-semibold text-gray-700 hover:bg-gray-50 transition"
            >
              Talk to an Advisor
            </Link>
          </div>
        </div>

        {/* Right visual */}
        <div className="hidden md:flex items-center justify-center">
          <div className="w-full h-80 rounded-2xl bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center text-arihant-green font-semibold">
            Platform Preview
          </div>
        </div>
      </div>
    </section>
  );
}
