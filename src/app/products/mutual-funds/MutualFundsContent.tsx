"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle2, TrendingUp, ShieldCheck, PieChart } from "lucide-react";

export default function MutualFundsContent() {
  return (
    <main className="bg-white">
      {/* ✅ HERO SECTION WITH MESH GRADIENT */}
      <section className="relative overflow-hidden pt-24 pb-32">
        <div className="absolute top-0 left-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-50 via-white to-transparent" />
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <Reveal>
              <div>
                <span className="inline-block rounded-full bg-arihant-green/10 px-4 py-1 text-sm font-bold text-arihant-green mb-6">
                  Wealth Creation
                </span>
                <h1 className="text-5xl font-extrabold text-arihant-violet leading-tight">
                  Make your goals real with <span className="text-arihant-green">Mutual Funds</span>
                </h1>
                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  Invest in diversified portfolios managed by professionals. Whether
                  you are planning for retirement or wealth creation —
                  mutual funds provide a disciplined path forward.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/contact" className="rounded-full bg-arihant-green px-8 py-4 font-bold text-white shadow-lg shadow-arihant-green/20 hover:scale-105 transition-all">
                    Start Investing
                  </Link>
                  <Link href="/research/blog" className="rounded-full border-2 border-arihant-violet/10 px-8 py-4 font-bold text-arihant-violet hover:bg-white transition-all">
                    Learn More
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <motion.div 
                whileHover={{ y: -10 }}
                className="relative rounded-3xl bg-white p-4 shadow-2xl shadow-emerald-900/10 border border-emerald-50"
              >
                <Image
                  src="/sip.png"
                  alt="Mutual fund growth"
                  width={600}
                  height={500}
                  className="rounded-2xl w-full h-auto"
                  priority
                />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ✅ STARTER BENEFITS - GLASS CARD */}
      <section className="mx-auto max-w-7xl px-6 -mt-16 relative z-10">
        <div className="rounded-3xl bg-white/80 backdrop-blur-xl p-10 shadow-xl border border-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-arihant-violet">
                Start small, dream big.
              </h2>
              <p className="text-gray-500 mt-2">Invest with as little as ₹100 per month.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow max-w-2xl">
              {[
                "SIP or Lump-sum options",
                "Risk-aligned portfolios",
                "Asset class diversification",
                "Instant performance tracking"
              ].map((text) => (
                <div key={text} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-arihant-green" size={20} />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ✅ WHY CHOOSE US - ICON GRID */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-arihant-violet">Why Invest with Arihant</h2>
          <div className="mt-4 mx-auto h-1.5 w-16 bg-arihant-green rounded-full" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            { title: "Research-Driven", desc: "Curated using long-term performance frameworks.", icon: ShieldCheck },
            { title: "Diversification", desc: "Reduce concentration risk across multiple sectors.", icon: PieChart },
            { title: "Compounding", desc: "Harness wealth through disciplined SIP strategies.", icon: TrendingUp },
          ].map((item, idx) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -5 }}
              className="rounded-3xl bg-slate-50 p-8 border border-transparent hover:border-arihant-green/20 transition-all"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-arihant-green shadow-sm">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-arihant-violet">{item.title}</h3>
              <p className="mt-4 text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ✅ CTA SECTION */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[3rem] bg-arihant-violet p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <h3 className="text-4xl font-bold relative z-10">Build wealth systematically</h3>
          <p className="mt-6 text-lg text-white/70 relative z-10 max-w-2xl mx-auto">
            Start today with disciplined investing backed by expert research and modern tools.
          </p>
          <Link href="/contact" className="mt-10 inline-block rounded-full bg-arihant-green px-10 py-4 font-bold text-white hover:bg-white hover:text-arihant-violet transition-all relative z-10">
            Start Your SIP
          </Link>
        </div>
      </section>
    </main>
  );
}