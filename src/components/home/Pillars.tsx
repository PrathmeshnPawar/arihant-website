"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, BarChart3, Sprout } from "lucide-react";

const pillars = [
  {
    title: "Invest",
    icon: TrendingUp,
    items: ["Equity", "Mutual Funds", "IPOs"],
    gradient: "from-arihant-green/20 via-arihant-green/5 to-transparent",
    iconBg: "bg-arihant-green/10 text-arihant-green",
  },
  {
    title: "Trade",
    icon: BarChart3,
    items: ["Advanced Platforms", "Expert Research", "Market Tools"],
    gradient: "from-arihant-violet/20 via-arihant-violet/5 to-transparent",
    iconBg: "bg-arihant-violet/10 text-arihant-violet",
  },
  {
    title: "Grow",
    icon: Sprout,
    items: ["SIPs", "NRI Services", "Wealth Planning"],
    gradient: "from-arihant-green/20 via-arihant-violet/10 to-transparent",
    iconBg: "bg-arihant-green/10 text-arihant-green",
  },
];

export default function Pillars() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-arihant-violet sm:text-4xl">
            One platform. Three growth pillars.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <Card className="group relative h-full overflow-hidden rounded-3xl border border-slate-100 bg-white transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-arihant-violet/10">
                  
                  {/* GRADIENT TOP SECTION */}
                  <div className={`relative h-44 w-full bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
                    {/* Animated Decorative Blurs */}
                    <div className="absolute top-0 right-0 -mr-10 -mt-10 h-32 w-32 rounded-full bg-white/30 blur-2xl" />
                    
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl ${p.iconBg} shadow-inner backdrop-blur-md`}
                    >
                      <Icon size={40} strokeWidth={1.5} />
                    </motion.div>
                  </div>

                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-arihant-violet">
                      {p.title}
                    </h3>
                    
                    <ul className="mt-6 space-y-4">
                      {p.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-slate-600">
                          <div className="h-1.5 w-1.5 rounded-full bg-arihant-green" />
                          <span className="text-sm font-medium leading-none">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-10">
                      <button className="group/btn flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-arihant-green transition-all hover:gap-3">
                        Explore <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </CardContent>

                  {/* Visual Accent: Progress Line */}
                  <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-arihant-green transition-all duration-700 ease-out group-hover:w-full" />
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}