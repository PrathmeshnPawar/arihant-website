import Link from "next/link";

const products = [
  { title: "Equity Trading", description: "Reliable execution with live market tracking.", href: "/products/equity" },
  { title: "Mutual Funds", description: "Goal-oriented fund options for long-term investors.", href: "/products/mutual-funds" },
  { title: "IPO", description: "Apply to upcoming IPOs through a simple flow.", href: "/products/ipo" },
  { title: "Research", description: "Daily updates and actionable market insights.", href: "/research/blog" },
  { title: "SIP Calculator", description: "Project your investment growth with ease.", href: "/tools/sip" },
  { title: "Advisor Support", description: "Talk to experts to build your personalized plan.", href: "/contact" },
];

export default function Products() {
  return (
    <section className="bg-white py-18">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900">Explore products and tools</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">Everything needed to invest, learn and grow in one place.</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link key={product.title} href={product.href} className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-arihant-green/50">
              <h3 className="text-lg font-semibold text-gray-900">{product.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{product.description}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-arihant-green">Learn more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
