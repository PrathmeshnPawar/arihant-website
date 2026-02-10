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
    title: "Fixed Income",
    href: "/products/equity",
  },
  {
    title: "NRI Services",
    href: "/products/equity",
  },
  {
    title: "Corporate Solutions",
    href: "/products/equity",
  },
];

export default function Products() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Products
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.title}
              href={product.href}
              className="bg-white border rounded-xl p-6 hover:shadow-sm transition block"
            >
              <h3 className="font-semibold text-gray-900">
                {product.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Designed for long-term wealth creation.
              </p>
              <span className="mt-4 inline-block text-sm font-medium text-arihant-green">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
