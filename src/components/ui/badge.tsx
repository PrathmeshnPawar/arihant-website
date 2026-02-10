import * as React from "react";
import { cn } from "@/lib/animations";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full bg-arihant-green-soft px-4 py-1.5 text-xs font-semibold text-arihant-green",
        className,
      )}
      {...props}
    />
  );
}
