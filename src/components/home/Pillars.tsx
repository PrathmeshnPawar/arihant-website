import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

const pillars = [
  { title: "Invest", items: ["Equity", "Mutual Funds", "IPOs"] },
  { title: "Trade", items: ["Advanced Platforms", "Expert Research", "Market Tools"] },
  { title: "Grow", items: ["SIPs", "NRI Services", "Wealth Planning"] },
];

export default function Pillars() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-arihant-violet">One platform. Three growth pillars.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-arihant-violet/15 bg-arihant-violet-soft p-8">
              <h3 className="text-xl font-semibold text-arihant-green">{p.title}</h3>
              <ul className="mt-4 space-y-2 text-gray-700">
                {p.items.map((i) => (
                  <li key={i}>• {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
