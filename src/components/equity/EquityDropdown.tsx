"use client";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import  Button  from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";

interface EquityDropdownProps {
  label: string;
  items: string[];
}

export function EquityDropdown({ label, items }: EquityDropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="rounded-xl bg-white text-arihant-violet border-border/40 hover:bg-arihant-violet-soft"
        >
          {label}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-64 rounded-xl border border-border/40 shadow-lg"
      >
        {items.map((item, index) => (
          <DropdownMenuItem
            key={item}
            className="cursor-pointer text-sm hover:bg-arihant-violet-soft"
          >
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
