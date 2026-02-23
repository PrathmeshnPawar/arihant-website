"use client";

import Link from "next/link";
import { BondsSection } from "@/components/fixed-income/BondsSection";
import { ShieldCheck, Landmark, FileText, BarChart3 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

const products = [
  {
    title: "Corporate Fixed Deposits",
    desc: "Earn higher yield compared to bank FDs by investing in deposits offered by reputed companies.",
    icon: Landmark,
  },
  {
    title: "Bonds",
    desc: "From 54EC capital gain bonds to tax-free and sovereign bonds, invest in the right products.",
    icon: BarChart3,
  },
  {
    title: "NCDs",
    desc: "Low risk, high liquidity and attractive returns through listed Non-Convertible Debentures.",
    icon: FileText,
  },
  {
    title: "Debt Funds",
    desc: "Suitable solutions for short-term and long-term needs with professional management.",
    icon: ShieldCheck,
  },
];

export default function FixedIncomeClient() {
  return (
    <main className="bg-linear-to-b from-white to-emerald-50/40 min-h-screen">
      
      {/* ✅ HERO */}
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-20">
        <Reveal>
          <div className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1 text-sm font-medium text-arihant-green">
            Fixed Income Investments Made Easy
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="mt-6 text-4xl font-bold text-arihant-violet">
            High Returns With Peace of Mind
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">
            Our range of fixed income investment offerings cater to a wide range
            of risk appetites and investment outcomes. Whether you seek capital
            preservation, predictable income, or portfolio diversification, we
            have solutions designed for you.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-full bg-arihant-green px-6 py-3 text-white font-semibold hover:opacity-90 transition"
          >
            Invest Now
          </Link>
        </Reveal>
      </section>

      {/* ✅ PRODUCT GRID */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => {
            const Icon = p.icon;

            return (
              <Reveal key={p.title} delay={i * 0.05}>
                <div className="rounded-2xl bg-white p-6 shadow-sm border border-black/5 hover:shadow-md transition">
                  <Icon className="h-7 w-7 text-arihant-green mb-4" />
                  <h3 className="font-semibold text-arihant-violet">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ✅ BONDS SECTION */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <Reveal>
          <BondsSection />
        </Reveal>
      </section>

      {/* ✅ TAGLINE STRIP */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="rounded-3xl bg-white p-10 shadow-sm border border-black/5">
            <h3 className="text-2xl font-bold text-arihant-violet">
              One-stop for Fixed Income Investments
            </h3>
            <p className="mt-3 text-gray-600 max-w-2xl">
              Wide-range of fixed income offerings means it’s easy for you to
              invest, diversify, and track your investments through a single
              platform.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ✅ WHY ARIHANT */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl bg-emerald-50 p-8">
              <h3 className="text-xl font-semibold text-arihant-violet">
                Why Arihant?
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                With our proven track record, investors benefit from secured
                principal, predictable returns, and disciplined product
                selection backed by research.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="rounded-3xl bg-white p-8 shadow-sm border border-black/5">
              <h3 className="text-xl font-semibold text-arihant-violet">
                Earn Higher Fixed Returns & Unmatched Service
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                Our advisors assist you through the entire journey — from
                selecting suitable instruments to seamless execution.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ✅ BEFORE YOU INVEST */}
      <section className="mx-auto max-w-7xl px-6 pb-28">
        <Reveal>
          <h3 className="text-2xl font-bold text-arihant-violet mb-6">
            Before You Invest
          </h3>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-sm text-gray-700">
          {[
            "Read the application form carefully",
            "Perform background checks on issuers",
            "Evaluate ratings & risk factors",
            "Consider liquidity & tenure constraints",
          ].map((item, i) => (
            <Reveal key={item} delay={i * 0.05}>
              <div>✔ {item}</div>
            </Reveal>
          ))}
        </div>
      </section>

    </main>
  );
}
