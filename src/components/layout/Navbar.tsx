"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-arihant-violet text-white shadow-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wide md:text-2xl"
        >
          Arihant Capital
        </Link>

        {/* Desktop menu */}
        <div className="hidden items-center gap-6 text-base md:flex md:text-lg">
          <Link href="/products/equity" className="hover:text-arihant-green-soft">
            Products
          </Link>
          <Link href="/research/blog" className="hover:text-arihant-green-soft">
            Research
          </Link>
          <Link href="/tools/sip" className="hover:text-arihant-green-soft">
            Tools
          </Link>
          <Link href="/about-us" className="hover:text-arihant-green-soft">
            About
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-arihant-green px-5 py-2.5 text-base font-semibold transition hover:bg-arihant-green/90"
          >
            Open Account
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="space-y-4 border-t border-white/20 bg-arihant-violet px-6 py-6 text-base md:hidden">
          <Link href="/products/equity" className="block">
            Products
          </Link>
          <Link href="/research/blog" className="block">
            Research
          </Link>
          <Link href="/tools/sip" className="block">
            Tools
          </Link>
          <Link href="/about-us" className="block">
            About
          </Link>
          <Link
            href="/contact"
            className="block font-semibold text-arihant-green-soft"
          >
            Open Account
          </Link>
        </div>
      )}
    </nav>
  );
}
