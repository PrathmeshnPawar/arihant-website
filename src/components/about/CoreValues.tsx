"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

const values = [
  {
    title: "Straightforward",
    description:
      "We are open and transparent with our customers and with each other",
  },
  {
    title: "Humble",
    description:
      "We seek and value feedback to serve you better and get better everyday",
  },
  {
    title: "You first",
    description:
      "Keeping our clients first — because they are at the heart of everything we do",
  },
  {
    title: "Gritty",
    description:
      "We constantly work towards creating value for our clients through objective advice",
  },
  {
    title: "Curious",
    description:
      "We are constantly learning and improving to enhance client experience through innovation",
  },
  {
    title: "Simplicity",
    description:
      "Making investments simple, understandable and accessible to everyone",
  },
];

export function CoreValues() {
  return (
    <motion.section
      className="py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          variants={fadeUp}
          className="mb-14 text-center text-4xl font-bold text-arihant-violet"
        >
          Our Values
          
        </motion.h2>
        
        <motion.div
          variants={stagger}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {values.map((value) => (
            <motion.div
              key={value.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-arihant-violet/20 bg-white p-8 text-center transition hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-arihant-violet">
                {value.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-gray-700">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
