import Link from "next/link";
import { siteConfig } from "@/config/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-arihant-violet/20 bg-arihant-violet text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {siteConfig.map((section) => (
            <div key={section.label}>
              <h3 className="mb-4 text-sm font-semibold text-white">{section.label}</h3>
              <ul className="space-y-2">
                {section.children?.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/85 transition hover:text-arihant-green-soft">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center">
          <p className="text-xs leading-relaxed text-white/80">
            <strong>Disclaimer:</strong> Investment in securities market are subject to market risks.
            Read all related documents carefully before investing. Arihant Capital Markets Ltd | SEBI Reg No: INZ000180936.
          </p>
          <p className="mt-3 text-xs text-white/70">© {new Date().getFullYear()} Arihant Capital Markets Ltd.</p>
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} Arihant Capital Markets Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
