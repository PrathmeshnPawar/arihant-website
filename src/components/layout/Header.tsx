"use client";

import Link from "next/link";
import { siteConfig } from "@/config/navigation";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

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
        <nav className="hidden items-center gap-8 text-base lg:flex md:text-lg">
          {siteConfig.slice(0, 4).map((group) => (
            <Link
              key={group.label}
              href={group.children?.[0]?.href ?? "#"}
              className="font-medium text-gray-700 transition hover:text-arihant-violet"
            >
              {group.label}
            </Link>
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
