"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { Reveal, RevealItem } from "../ui/Reveal";
import WealthScene from "@/components/3d/WealthScene";


const highlights = [
  "30+ years of market expertise",
  "2.5L+ active investors",
  "Research-backed calls and insights",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-20 pt-24 lg:pt-32">
      
      {/* Soft Ambient Background Glow */}
       <WealthScene />

  {/* Soft Ambient Glow Still Works */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-arihant-violet-soft/40 blur-3xl"
  />
     
      <div className="mx-auto max-w-7xl px-6 relative z-10">

        <div className="lg:flex lg:items-center lg:gap-x-16">
          
          {/* LEFT CONTENT */}
          <div className="max-w-2xl lg:flex-auto">
            <Reveal staggerChildren={true}>
              <RevealItem>
                <div className="mb-8 flex">
                  <span className="rounded-full bg-arihant-green/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-arihant-green">
                    EST. 1992 • SEBI REGISTERED
                  </span>
                </div>
              </RevealItem>

              <RevealItem>
                <h1 className="text-5xl font-extrabold tracking-tight text-arihant-violet sm:text-6xl lg:text-7xl">
                  Wealth creation, <br />
                  <span className="text-arihant-green italic font-serif">
                    refined.
                  </span>
                </h1>
              </RevealItem>

              <RevealItem>
                <p className="mt-8 text-lg leading-8 text-slate-600">
                  Navigate the Indian markets with institutional-grade research
                  and personalized advisory.
                </p>
              </RevealItem>

              <RevealItem>
                <div className="mt-10 flex items-center gap-x-6">
                  <Button size="lg">
                    Get Started
                  </Button>

                  <Link
                    href="/services"
                    className="text-sm font-semibold text-slate-700 hover:text-arihant-violet transition-colors"
                  >
                    Explore Services →
                  </Link>
                </div>
              </RevealItem>
            </Reveal>
          </div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow"
          >
            {/* The "Glow" behind the card - made it slightly more subtle */}
  <div className="absolute -inset-4 bg-arihant-violet/5 blur-3xl rounded-full" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-3xl border border-slate-200 bg-slate-50/60 p-4"
            >
              <div className="rounded-2xl bg-white p-8 shadow-xl shadow-slate-200/50">
                <p className="text-sm font-medium text-slate-500">
                  Nifty 50 Strategy
                </p>

                <div className="mt-2 flex items-baseline gap-x-2">
                  <span className="text-4xl font-bold tracking-tight text-slate-900">
                    Research-Led
                  </span>
                </div>

                <div className="mt-6 space-y-4 border-t border-slate-100 pt-6">
                  {["Equity Advisory", "Custom Portfolios", "Global Desk"].map(
                    (item, idx) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="flex items-center text-sm text-slate-600"
                      >
                        <div className="mr-3 h-1.5 w-1.5 rounded-full bg-arihant-green" />
                        {item}
                      </motion.div>
                    ),
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
