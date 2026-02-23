"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

export function AboutHero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28 text-center overflow-hidden">
      
      {/* Background glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="
          absolute inset-0 -z-10 flex items-center justify-center
        "
      >
        <div
          className="
            h-[420px] w-[420px]
            rounded-full
            bg-gradient-to-br from-arihant-green/30 to-arihant-violet/30
            blur-3xl
          "
        />
      </motion.div>

      <motion.div
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
      </motion.div>
    </section>
  );
}
