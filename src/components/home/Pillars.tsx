import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, BarChart3, Leaf } from "lucide-react";

const pillars = [
  {
    title: "Invest",
    icon: TrendingUp,
    items: ["Equity", "Mutual Funds", "IPOs"],
  },
  {
    title: "Trade",
    icon: BarChart3,
    items: ["Advanced Platforms", "Expert Research", "Market Tools"],
  },
  {
    title: "Grow",
    icon: Leaf,
    items: ["SIPs", "NRI Services", "Wealth Planning"],
  },
];

export default function Pillars() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-arihant-violet">
          One platform. Three growth pillars.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => {
            const Icon = p.icon;

            return (
              <Card
                key={p.title}
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-arihant-violet/15
                  bg-arihant-violet-soft
                  transition-all duration-300
                  hover:-translate-y-2 hover:shadow-2xl
                "
              >
                {/* gradient glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-arihant-green/20 to-arihant-violet/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <CardContent className="relative z-10 p-8">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-arihant-green/10 p-2 text-arihant-green">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-semibold text-arihant-green">
                      {p.title}
                    </h3>
                  </div>

                  <ul className="mt-6 space-y-3 text-gray-700">
                    {p.items.map((i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-arihant-green" />
                        {i}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-arihant-violet opacity-0 transition-all group-hover:opacity-100">
                    Explore <ArrowRight size={14} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
