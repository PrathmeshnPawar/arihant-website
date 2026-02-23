"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const timeline = [
  { year: "1992", event: "Arihant Capital founded with a vision of ethical investing." },
  { year: "2005", event: "Expanded operations across major Indian cities." },
  { year: "2015", event: "Launched digital trading platforms for retail investors." },
  { year: "2024", event: "Serving over 2.5 lakh investors nationwide." },
];

export function CompanyTimeline() {
  return (
    <motion.section
      className="bg-arihant-violet-soft py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={stagger}
    >
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          variants={fadeUp}
          className="mb-16 text-center text-4xl font-bold text-arihant-violet"
        >
          Our Journey
        </motion.h2>

        {/* Timeline container */}
        <div className="relative">
          
          {/* Vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-arihant-violet/20" />

          <motion.div variants={stagger} className="space-y-12">
            {timeline.map((item) => (
              <motion.div
                key={item.year}
                variants={fadeUp}
                whileHover={{ x: 4 }}
                className="relative flex items-start gap-8"
              >
                {/* Node */}
                <div className="relative z-10 mt-1 h-8 w-8 rounded-full bg-white border border-arihant-green/30 flex items-center justify-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-arihant-green" />
                </div>

                {/* Content */}
                <div>
                  <span className="text-xl font-bold text-arihant-green md:text-2xl">
                    {item.year}
                  </span>

                  <p className="mt-2 text-lg leading-relaxed text-gray-700">
                    {item.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
