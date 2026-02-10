import Link from "next/link";

const products = [
  { title: "Equity Trading", description: "Fast and reliable execution with expert-backed market insights.", href: "/products/equity" },
  { title: "Mutual Funds", description: "Curated funds for beginners and seasoned long-term investors.", href: "/products/mutual-funds" },
  { title: "IPO Investments", description: "Apply for upcoming IPOs with a smooth digital process.", href: "/products/ipo" },
  { title: "Market Research", description: "Read actionable blogs, outlooks and daily market developments.", href: "/research/blog" },
  { title: "SIP Planning", description: "Estimate future corpus and stay disciplined with monthly investing.", href: "/tools/sip" },
  { title: "Advisor Connect", description: "Talk to experts to choose products aligned with your goals.", href: "/contact" },
];

export default function Products() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900">Explore our investment ecosystem</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
          Everything you need to invest, monitor and grow your wealth from one platform.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-arihant-green hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{product.description}</p>
              <span className="mt-5 inline-block text-sm font-semibold text-arihant-green">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
