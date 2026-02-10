const pillars = [
  { title: "Invest", items: ["Equity", "Mutual Funds", "IPOs"] },
  { title: "Trade", items: ["Online Platforms", "Research", "Tools"] },
  { title: "Grow", items: ["SIPs", "NRI Services", "Wealth Planning"] },
];

export default function Pillars() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {pillars.map((p) => (
          <div key={p.title} className="bg-white p-8 rounded-xl border">
            <h3 className="text-xl font-semibold text-green-600">
              {p.title}
            </h3>
            <ul className="mt-4 space-y-2 text-gray-600">
              {p.items.map((i) => (
                <li key={i}>• {i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
