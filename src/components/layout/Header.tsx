"use client";

import Link from "next/link";
import { siteConfig } from "@/config/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-arihant-green/15 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-bold text-arihant-violet">Arihant Capital</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-arihant-green">
            Generating Wealth
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm lg:flex">
          {siteConfig.slice(0, 4).map((group) => (
            <Link key={group.label} href={group.children?.[0]?.href ?? "#"} className="text-gray-700 transition hover:text-arihant-violet">
              {group.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-arihant-green px-5 py-2 text-sm font-semibold text-white transition hover:bg-arihant-violet"
        >
          Open Account
        </Link>
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
