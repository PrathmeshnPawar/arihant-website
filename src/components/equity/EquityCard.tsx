"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface EquityCardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function EquityCard({ title, children, className }: EquityCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      className={`rounded-2xl border border-border/40 bg-white p-6 shadow-sm hover:shadow-lg transition ${className}`}
    >
      <h3 className="mb-4 text-lg font-semibold text-arihant-violet">
        {title}
      </h3>
      {children}
    </motion.div>
  );
}
