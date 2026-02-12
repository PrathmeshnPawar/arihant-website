"use client";

import { BondsSection } from "@/components/fixed-income/BondsSection";
import { ShieldCheck, Landmark, FileText, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const products = [
  {
    title: "Corporate Fixed Deposits",
    desc: "Earn higher and stable returns by investing in company deposits.",
    icon: Landmark,
  },
  {
    title: "Bonds",
    desc: "Invest in debt instruments issued by corporations and institutions.",
    icon: BarChart3,
  },
  {
    title: "NCDs",
    desc: "Diversify your portfolio with Non-Convertible Debentures.",
    icon: FileText,
  },
  {
    title: "Debt Funds",
    desc: "Professionally managed fixed income mutual fund solutions.",
    icon: ShieldCheck,
  },
];

export default function FixedIncomeClient() {
  return (
    <main className="bg-linear-to-b from-white to-emerald-50/40 min-h-screen">
      <motion.section
        className="mx-auto max-w-7xl px-6 pt-16 pb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={stagger}
      >
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <motion.h1 variants={fadeUp} className="text-4xl font-bold text-arihant-violet">
              Fixed Income Investment Options
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-4 text-gray-600">
              Our range of fixed income offerings cater to investors seeking
              predictable returns and stability.
            </motion.p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {products.map((p) => {
              const Icon = p.icon;

              return (
                <motion.div
                  key={p.title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl bg-white p-5 shadow-sm border"
                >
                  <Icon className="h-6 w-6 text-arihant-green mb-3" />
                  <h3 className="font-semibold text-arihant-violet">{p.title}</h3>
                  <p className="text-sm text-gray-600">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      <BondsSection />
    </main>
  );
}
