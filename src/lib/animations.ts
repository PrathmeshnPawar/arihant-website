// src/lib/animations.ts
import type { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1], // Quintic out easing for high-end feel
    },
  },
};

export const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1, // Faster stagger for snappier UX
    },
  },
};