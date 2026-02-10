import * as React from "react";
import { cn } from "@/lib/utils";

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
    "inline-flex items-center justify-center rounded-full font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-arihant-green/35 disabled:pointer-events-none disabled:opacity-50",
    variant === "default" && "bg-arihant-green text-white hover:opacity-90",
    variant === "outline" && "border border-gray-300 bg-white text-gray-700 hover:border-arihant-green hover:text-arihant-green",
    variant === "ghost" && "bg-transparent text-gray-700 hover:bg-arihant-violet-soft",
    size === "default" && "px-6 py-3 text-sm",
    size === "sm" && "px-4 py-2 text-sm",
    size === "lg" && "px-7 py-3.5 text-base",
    className,
  );
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return <button className={buttonVariants({ variant, size, className })} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export default Button;
