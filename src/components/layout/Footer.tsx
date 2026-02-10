import Link from "next/link";
import { siteConfig } from "@/config/navigation";

export default function Footer() {
  return (
    <footer className="bg-arihant-lightGreen border-t border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {siteConfig.map((section) => (
            <div key={section.label}>
              <h3 className="text-gray-900 font-semibold text-sm mb-4">
                {section.label}
              </h3>

              <ul className="space-y-2">
                {section.children?.slice(0, 5).map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-arihant-green hover:underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-6 border-t border-green-200">
          <p className="text-[11px] text-gray-500 leading-relaxed text-center max-w-5xl mx-auto">
            <strong>Disclaimer:</strong> Investment in securities market are
            subject to market risks. Read all the related documents carefully
            before investing. Arihant Capital Markets Ltd | SEBI Reg No:
            INZ000180936.
          </p>

          <p className="mt-4 text-[11px] text-gray-400 text-center">
            © {new Date().getFullYear()} Arihant Capital Markets Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
