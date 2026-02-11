"use client";

import { motion } from "framer-motion";

const bondTabs = [
  "Capital Gain Bonds",
  "Secondary Bonds",
  "Tax-Free Bonds",
  "Government",
];

const bonds = [
  {
    name: "REC 54EC Bonds",
    coupon: "5.25%",
    tenure: "5 Years",
    rating: "AAA",
    payments: "Yearly",
    min: "20,000",
    max: "5,00,000",
  },
  {
    name: "PFC 54EC Bonds",
    coupon: "5.25%",
    tenure: "5 Years",
    rating: "AAA",
    payments: "Yearly",
    min: "20,000",
    max: "5,00,000",
  },
];

export function BondsSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">

      {/* Tabs */}
      <div className="flex gap-6 text-sm font-medium border-b border-arihant-green/30">
        <button className="pb-3 border-b-2 border-arihant-green text-arihant-green">
          Bonds
        </button>
        <button className="pb-3 text-gray-400 hover:text-arihant-violet">
          Company Deposit
        </button>
      </div>

      {/* Header */}
      <div className="mt-10">
        <h2 className="text-3xl font-bold text-arihant-violet">
          Invest in high quality PSU and Corporate Bonds
        </h2>
        <p className="mt-2 text-gray-600">
          Fixed interest, predictable returns, and high credit quality instruments.
        </p>
      </div>

      {/* Sub Tabs */}
      <div className="mt-6 flex flex-wrap gap-6 text-sm">
        {bondTabs.map((tab, i) => (
          <button
            key={tab}
            className={`pb-2 ${
              i === 0
                ? "text-arihant-green border-b-2 border-arihant-green"
                : "text-gray-500 hover:text-arihant-violet"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="mt-8 overflow-x-auto rounded-2xl border border-black/5 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-emerald-50 text-gray-600">
            <tr>
              <th className="text-left p-4">Security</th>
              <th className="text-left p-4">Coupon</th>
              <th className="text-left p-4">Tenure</th>
              <th className="text-left p-4">Rating</th>
              <th className="text-left p-4">Payments</th>
              <th className="text-left p-4">Min Investment</th>
              <th className="text-left p-4">Max Investment</th>
              <th className="text-left p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {bonds.map((bond) => (
              <motion.tr
                key={bond.name}
                whileHover={{ backgroundColor: "#f9fafb" }}
                className="border-t border-gray-100"
              >
                <td className="p-4 font-medium text-gray-800">{bond.name}</td>
                <td className="p-4">{bond.coupon}</td>
                <td className="p-4">{bond.tenure}</td>
                <td className="p-4">{bond.rating}</td>
                <td className="p-4">{bond.payments}</td>
                <td className="p-4">₹{bond.min}</td>
                <td className="p-4">₹{bond.max}</td>
                <td className="p-4">
                  <button className="rounded-lg bg-arihant-green px-4 py-1.5 text-white text-xs font-semibold hover:opacity-90">
                    INVEST
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer CTA */}
      <div className="mt-4 text-right">
        <button className="text-sm text-arihant-green font-medium hover:underline">
          View All Products →
        </button>
      </div>
    </section>
  );
}
