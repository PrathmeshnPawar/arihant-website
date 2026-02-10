import Link from "next/link";
import { siteConfig } from "@/config/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold text-gray-900">Arihant Capital</h3>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-gray-600">
              Invest with confidence through research-driven products, dependable support, and a long-term approach to wealth creation.
            </p>
          </div>

          {siteConfig.slice(0, 3).map((section) => (
            <div key={section.label}>
              <h4 className="mb-4 text-sm font-semibold text-gray-900">{section.label}</h4>
              <ul className="space-y-2">
                {section.children?.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-gray-600 transition hover:text-arihant-green">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-arihant-violet-soft p-5 text-sm text-gray-700">
          <strong>Disclaimer:</strong> Investments in securities market are subject to market risks. Read all scheme related documents carefully before investing.
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} Arihant Capital Markets Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}
