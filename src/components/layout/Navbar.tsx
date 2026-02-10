"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-arihant-violet text-white shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="font-bold">Arihant Capital</Link>

        <div className="hidden items-center gap-5 md:flex">
          <Link href="/products/equity">Products</Link>
          <Link href="/research/blog">Research</Link>
          <Link href="/tools/sip">Tools</Link>
          <Link href="/about-us">About</Link>
          <Link href="/contact" className="rounded-full bg-arihant-green px-4 py-2 text-sm font-semibold">Open Account</Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="space-y-3 border-t border-white/20 bg-arihant-violet px-4 py-4 text-sm md:hidden">
          <Link href="/products/equity" className="block">Products</Link>
          <Link href="/research/blog" className="block">Research</Link>
          <Link href="/tools/sip" className="block">Tools</Link>
          <Link href="/about-us" className="block">About</Link>
          <Link href="/contact" className="block font-semibold text-arihant-green-soft">Open Account</Link>
        </div>
      )}
    </nav>
  );
}
