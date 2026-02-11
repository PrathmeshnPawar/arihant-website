"use client";

import Link from "next/link";
import { siteConfig } from "@/config/navigation";
import { useRef, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
    // Hover intent timer (CRITICAL FIX)
 
  const [mobileOpen, setMobileOpen] = useState(false);
  // We track which specific menu is "hovered"
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

const handleOpen = (label: string) => {
  if (closeTimer.current) {
    clearTimeout(closeTimer.current);
    closeTimer.current = null;
  }

  setActiveMenu(label);
};

const handleClose = () => {
  if (closeTimer.current) {
    clearTimeout(closeTimer.current);   // ✅ CRITICAL FIX
  }

  closeTimer.current = setTimeout(() => {
    setActiveMenu(null);
    closeTimer.current = null;          // ✅ Prevent ghost triggers
  }, 150);
};


  return (
    <header className="sticky top-0 z-50 border-b border-arihant-green/15 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex flex-col">
          <span className="text-2xl font-bold text-arihant-violet md:text-3xl">
            Arihant Capital
          </span>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-arihant-green">
            Generating Wealth
          </span>
        </Link>

        {/* Desktop Nav */}
<nav className="hidden lg:flex items-center gap-8">
      {siteConfig.slice(0, 4).map((group) => (
        <DropdownMenu open={activeMenu === group.label} modal={false} key={group.label}>
  <div
    className="relative pb-3"
    onMouseEnter={() => handleOpen(group.label)}
    onMouseLeave={handleClose}
  >
    <DropdownMenuTrigger asChild>

      {/* 🚫 NO hover handlers here */}
      <button
        className="
          flex items-center gap-1
          font-medium text-gray-700
          hover:text-arihant-violet
          transition-colors
        "
      >
        {group.label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${
            activeMenu === group.label ? "rotate-180" : ""
          }`}
        />
      </button>

    </DropdownMenuTrigger>

    <DropdownMenuContent
      sideOffset={0}
      align="start"
      onMouseEnter={() => handleOpen(group.label)}
      onMouseLeave={handleClose}
      onPointerDownOutside={(e) => e.preventDefault()}
      onInteractOutside={(e) => e.preventDefault()}
      onCloseAutoFocus={(e) => e.preventDefault()}
      className="w-56 rounded-xl bg-white shadow-xl border border-gray-100 p-2"
    >
      {group.children?.map((item) => (
        <DropdownMenuItem key={item.href} asChild>
          <Link
            href={item.href}
            className="
              block px-3 py-2 rounded-lg text-sm
              hover:bg-emerald-50
              transition-colors
            "
          >
            {item.label}
          </Link>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </div>
</DropdownMenu>

      ))}
    </nav>


        {/* CTA */}
        <Link
          href="/contact"
          className="rounded-full bg-arihant-green px-6 py-3 text-base font-semibold text-white transition hover:bg-arihant-violet"
        >
          Open Account
        </Link>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-gray-200 bg-white px-6 py-6 md:hidden">
          <div className="space-y-4 text-base text-gray-700">
            <Link
              href="/products/equity"
              className="block"
              onClick={() => setOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/research/blog"
              className="block"
              onClick={() => setOpen(false)}
            >
              Research
            </Link>
            <Link
              href="/tools/sip"
              className="block"
              onClick={() => setOpen(false)}
            >
              Tools
            </Link>
            <Link
              href="/about-us"
              className="block"
              onClick={() => setOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block pt-3 font-semibold text-arihant-green"
              onClick={() => setOpen(false)}
            >
              Open Account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
