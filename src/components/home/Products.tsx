import Link from "next/link";

const products = [
  {
    title: "Equity Trading",
    href: "/products/equity",
  },
  {
    title: "Mutual Funds",
    href: "/products/mutual-funds",
  },
  {
    title: "IPO Investments",
    href: "/products/ipo",
  },
  {
    title: "Research Advisory",
    href: "/research/blog",
  },
  {
    title: "NRI Services",
    href: "/contact",
  },
  {
    title: "Corporate Solutions",
    href: "/contact",
  },
];

export default function Products() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-arihant-violet">Products tailored to investor goals</h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className="block rounded-2xl border border-arihant-green/25 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="font-semibold text-gray-900">{product.title}</h3>
              <p className="mt-2 text-sm text-gray-600">Designed for disciplined and long-term wealth creation.</p>
              <span className="mt-4 inline-block text-sm font-medium text-arihant-green">Explore now →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
