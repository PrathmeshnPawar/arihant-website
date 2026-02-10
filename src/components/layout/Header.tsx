"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-arihant-green text-sm font-bold text-white">
            A
          </span>
          <div className="leading-tight">
            <p className="text-base font-bold text-gray-900">Arihant Capital</p>
            <p className="text-[11px] font-medium text-gray-500">Generating Wealth</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-gray-600 lg:flex">
          {siteConfig.slice(0, 4).map((group) => (
            <Link key={group.label} href={group.children?.[0]?.href ?? "#"} className="transition hover:text-arihant-green">
              {group.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/contact" className="text-sm font-medium text-gray-600 transition hover:text-arihant-green">
            Talk to Advisor
          </Link>
          <Link href="/contact" className="rounded-full bg-arihant-green px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90">
            Open Account
          </Link>
        </div>

        <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
          {open ? <X size={22} className="text-gray-700" /> : <Menu size={22} className="text-gray-700" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-200 bg-white px-6 py-4 md:hidden">
          <div className="space-y-3 text-sm text-gray-700">
            <Link href="/products/equity" className="block" onClick={() => setOpen(false)}>
              Products
            </Link>
            <Link href="/research/blog" className="block" onClick={() => setOpen(false)}>
              Research
            </Link>
            <Link href="/tools/sip" className="block" onClick={() => setOpen(false)}>
              Tools
            </Link>
            <Link href="/about-us" className="block" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="block pt-2 font-semibold text-arihant-green" onClick={() => setOpen(false)}>
              Open Account
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
