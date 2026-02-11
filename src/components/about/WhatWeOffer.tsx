"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { BarChart3, Building2, Gem, Globe2 } from "lucide-react";

const offerings = [
  {
    title: "Investment Solutions",
    icon: BarChart3,
    items: [
      "Equities",
      "Derivatives",
      "Currency",
      "Commodity",
      "Mutual Funds",
      "Fixed Income",
      "Gold",
      "National Pension Scheme",
    ],
  },
  {
    title: "Corporate Solutions",
    icon: Building2,
    items: [
      "Investment services",
      "Merchant banking and investment banking services",
      "Depository Services",
      "Equity Research",
    ],
  },
  {
    title: "HNI Investment Services",
    icon: Gem,
    items: [
      "Arihant Platinum",
      "Portfolio Management Services (PMS)",
      "Financial Planning",
    ],
  },
  {
    title: "NRI Services",
    icon: Globe2,
    items: [
      "Investment across asset classes and platforms",
      "Depository Services",
      "PMS",
      "Financial Planning",
    ],
  },
];

export function WhatWeOffer() {
  return (
    <motion.section
      className="py-28 bg-linear-to-b from-arihant-violet-soft to-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={stagger}
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          variants={fadeUp}
          className="text-center text-4xl font-bold text-arihant-violet"
        >
          What We Offer
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-5 max-w-3xl text-center text-gray-600 leading-relaxed"
        >
          We commit people, capital and ideas to help our clients grow with
          disciplined investing and research-driven strategies.
        </motion.p>

        <motion.div
          variants={stagger}
          className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {offerings.map((section) => {
            const Icon = section.icon;

            return (
              <motion.div
                key={section.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="
                  group rounded-2xl bg-white p-7
                  shadow-[0_10px_30px_rgba(0,0,0,0.06)]
                  border border-black/5
                  transition-all duration-300
                  hover:shadow-[0_15px_45px_rgba(0,0,0,0.10)]
                "
              >
                {/* Icon Container */}
                <div className="mb-5 inline-flex rounded-xl bg-arihant-green/10 p-3">
                  <Icon
                    className="h-6 w-6 text-arihant-green"
                    strokeWidth={2}
                  />
                </div>

                <h3 className="text-lg font-semibold text-arihant-violet">
                  {section.title}
                </h3>

                <ul className="mt-4 space-y-2.5 text-sm text-gray-600">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-arihant-green shrink-0" />
  <span className="leading-relaxed">{item}</span>
</li>

                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
