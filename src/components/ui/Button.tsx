// src/components/ui/Button.tsx
"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils"; // Corrected path to standard utility

export type ButtonVariant = "default" | "outline" | "ghost";
export type ButtonSize = "default" | "sm" | "lg";

export function buttonVariants({
  variant = "default",
  size = "default",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}) {
  return cn(
    "inline-flex items-center justify-center rounded-full font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arihant-green/35 disabled:pointer-events-none disabled:opacity-50",
    variant === "default" && "bg-arihant-green text-white shadow-md shadow-arihant-green/10",
    variant === "outline" && "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",
    variant === "ghost" && "bg-transparent text-slate-600 hover:bg-arihant-violet-soft",
    size === "default" && "px-6 py-3 text-sm",
    size === "sm" && "px-4 py-2 text-sm",
    size === "lg" && "px-8 py-4 text-base",
    className,
  );
}

// We extend HTMLMotionProps to allow the button to be used in motion groups
export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        // Premium default interactions
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={buttonVariants({ variant, size, className })}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
export default Button;