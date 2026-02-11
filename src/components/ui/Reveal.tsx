"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

interface RevealProps {
  children: React.ReactNode;
  staggerChildren?: boolean;
  delay?:number;
}

export const Reveal = ({ children, staggerChildren = false }: RevealProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={staggerChildren ? stagger : fadeUp}
    >
      {children}
    </motion.div>
  );
};

// Add this helper to wrap individual items inside a staggered parent
export const RevealItem = ({ children }: { children: React.ReactNode }) => {
  return <motion.div variants={fadeUp}>{children}</motion.div>;
};