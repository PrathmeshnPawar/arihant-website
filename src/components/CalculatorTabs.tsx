"use client";

import { usePathname, useRouter } from "next/navigation";

export default function CalculatorTabs() {
  const pathname = usePathname();
  const router = useRouter();

  const tabs = [
    { label: "FnO Calculator", path: "/tools/margin/fno" },
    { label: "Equity Futures Calculator", path: "/tools/margin/equityfutures" },
  ];

  return (
    <div className="mb-6 flex rounded-xl border border-border/40 bg-white p-1 shadow-sm w-fit">
      {tabs.map((tab) => {
        const active = pathname === tab.path;

        return (
          <button
            key={tab.path}
            onClick={() => router.push(tab.path)}
            className={`px-5 py-2 text-sm rounded-lg transition ${
              active
                ? "bg-arihant-violet text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
