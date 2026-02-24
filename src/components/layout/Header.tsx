"use client";

import Link from "next/link";
import { siteConfig } from "@/config/navigation";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { ChevronDown } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
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
      clearTimeout(closeTimer.current); // ✅ CRITICAL FIX
    }

    closeTimer.current = setTimeout(() => {
      setActiveMenu(null);
      closeTimer.current = null; // ✅ Prevent ghost triggers
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
            <DropdownMenu
              open={activeMenu === group.label}
              modal={false}
              key={group.label}
            >
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
        <div className="flex items-center gap-3">
  {/* Mobile Menu Button */}
  <button
    className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
    onClick={() => setOpen(!open)}
  >
    {open ? <X size={22} /> : <Menu size={22} />}
  </button>

  {/* CTA */}
  <Link
    href="/contact"
    className="hidden lg:inline-flex rounded-full bg-arihant-green px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold text-white transition hover:bg-arihant-violet"
  >
    Open Account
  </Link>
</div>
      </div>

      {/* Mobile menu */}
      {open && (
  <div className="lg:hidden border-t border-gray-200 bg-white px-6 py-5">
    <div className="space-y-2">

      {siteConfig.map((group) => (
        <div key={group.label}>

          {/* Section Header */}
          <button
            onClick={() =>
              setExpanded(expanded === group.label ? null : group.label)
            }
            className="
              w-full flex items-center justify-between
              py-3 text-left font-medium text-gray-800
            "
          >
            {group.label}
            <ChevronDown
              size={18}
              className={`transition-transform ${
                expanded === group.label ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Children */}
          {expanded === group.label && (
            <div className="pl-3 pb-2 space-y-2">
              {group.children?.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="
                    block py-2 text-sm text-gray-600
                    hover:text-arihant-violet
                  "
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}

    </div>
  </div>
)}
    </header>
  );
}
