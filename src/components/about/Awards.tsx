"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { Award, Star, TrendingUp } from "lucide-react";

const awards = [
  {
    name: "AsiaMoney – Best Retail Brokerage",
    icon: Award,
    color: "from-arihant-green/20",
  },
  {
    name: "Great Place to Work – 2024–25",
    icon: Star,
    color: "from-arihant-violet/20",
  },
  {
    name: "Featured in Forbes & CNBC",
    icon: TrendingUp,
    color: "from-arihant-green/20",
  },
];

export function AwardsSection() {
  return (
    <motion.section
      className="relative overflow-hidden py-24 bg-slate-50/50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/4 -z-10 h-64 w-64 rounded-full bg-arihant-violet/5 blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 -z-10 h-64 w-64 rounded-full bg-arihant-green/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.div variants={fadeUp} className="mb-16">
          <h2 className="text-4xl font-extrabold tracking-tight text-arihant-violet sm:text-5xl">
            Recognition & Awards
          </h2>
          <div className="mt-4 mx-auto h-1 w-20 bg-arihant-green rounded-full" />
        </motion.div>

        <motion.div
          variants={stagger}
          className="grid gap-8 md:grid-cols-3"
        >
          {awards.map((award) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={award.name}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="relative group rounded-3xl border border-white bg-white/60 p-8 shadow-xl shadow-slate-200/50 backdrop-blur-md transition-all duration-300 hover:border-arihant-violet/30"
              >
                {/* Internal Gradient Glow */}
                <div className={`absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br ${award.color} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
                
                <div className="flex flex-col items-center gap-6">
                  <div className="rounded-2xl bg-arihant-violet/5 p-4 text-arihant-violet transition-colors group-hover:bg-arihant-violet group-hover:text-white">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                  <p className="text-xl font-semibold leading-relaxed text-slate-800">
                    {award.name}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}