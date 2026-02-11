"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

export function AboutHero() {
  return (
    <motion.section
      className="mx-auto max-w-7xl px-6 py-28 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={stagger}
    >
      <motion.h1
        variants={fadeUp}
        className="text-5xl font-bold leading-tight text-arihant-violet sm:text-6xl md:text-7xl"
      >
        Generating wealth for you is at the heart of everything we do.
      </motion.h1>

      <motion.h2
        variants={fadeUp}
        className="mx-auto mt-6 max-w-4xl text-xl leading-relaxed text-gray-700 md:text-2xl"
      >
        We help clients meet financial goals with passion and integrity.
      </motion.h2>

      <motion.p
        variants={fadeUp}
        className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-700 md:text-xl"
      >
        For over three decades, we have helped investors navigate Indian markets
        with discipline, research, and a long-term approach.
      </motion.p>
    </motion.section>
  );
}
