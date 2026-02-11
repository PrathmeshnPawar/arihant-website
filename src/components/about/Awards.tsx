"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const awards = [
  "AsiaMoney – Best Retail Brokerage",
  "Great Place to Work – 2024–25",
  "Featured in Forbes & CNBC",
];

export function AwardsSection() {
  return (
    <motion.section
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.h2
          variants={fadeUp}
          className="mb-12 text-4xl font-bold text-arihant-violet"
        >
          Recognition & Awards
        </motion.h2>

        <motion.div
          variants={stagger}
          className="flex flex-col justify-center gap-10 text-gray-700 md:flex-row"
        >
          {awards.map((award) => (
            <motion.div
              key={award}
              variants={fadeUp}
              className="rounded-2xl border border-arihant-violet/20 bg-white px-8 py-6 text-lg shadow-sm"
            >
              🏆 {award}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
