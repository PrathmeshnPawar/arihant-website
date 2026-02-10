import Link from "next/link";
import { siteConfig } from "@/config/navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2">
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

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden text-sm font-medium text-gray-600 transition hover:text-arihant-green md:inline">
            Talk to Advisor
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-arihant-green px-5 py-2 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Open Account
          </Link>
        </div>
      </div>
    </header>
  );
}
