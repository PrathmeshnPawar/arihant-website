"use client"; // This tells Next.js this specific file handles browser logic

import { Hero } from "@/components/ui/Hero";
import { FeaturesGrid } from "@/components/products/FeaturesGrid";
import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

export default function EquityContent() {
  return (
    <main className="bg-white text-gray-800">
      <Hero
        subtitle="Equity"
        title="Equity Trading Account"
        description="Trade stocks and equities with powerful tools, in-depth research, and real-time insights — all backed by Arihant’s expertise."
        primaryCta={{
          label: "Open an Equity Trading Account",
          href: "/contact",
        }}
        imageSrc="/stock-market-dashboard-analytics-screen.png"
        imageAlt="Equity trading dashboard"
      />

      <FeaturesGrid
        heading="Why Choose an Equity Trading Account with Us"
        subheading="Built for serious investors and traders"
        features={[
          { title: "Real-Time Quotes", description: "Live price updates...", icon: "activity" },
          { title: "In-Depth Research", description: "Equity research...", icon: "analytics" },
          { title: "Advanced Platforms", description: "Powerful web...", icon: "platform" },
          { title: "Competitive Brokerage", description: "Transparent pricing...", icon: "brokerage" },
        ]}
      />

      <section className="relative overflow-hidden bg-slate-50/50 py-24">
        <div className="absolute top-0 right-0 -z-10 h-96 w-96 rounded-full bg-arihant-green/5 blur-[120px]" />
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <Reveal>
              {/* This motion.div will now work perfectly because it's in a Client Component */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="relative rounded-3xl border border-white bg-white p-2 shadow-2xl shadow-slate-200"
              >
                <Image
                  src="/trading-platform.png"
                  alt="Interface"
                  width={900}
                  height={520}
                  className="rounded-2xl w-full h-auto object-cover"
                />
              </motion.div>
            </Reveal>

            <div className="lg:max-w-lg">
              <Reveal>
                <span className="text-arihant-green font-bold uppercase tracking-widest text-sm mb-4 block">Technology Driven</span>
                <h2 className="text-4xl font-extrabold text-arihant-violet leading-tight sm:text-5xl">Experience Our <br /> Trading Platforms</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-gray-600 text-lg leading-relaxed">Powerful, intuitive, and engineered for modern investors.</p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/contact" className="rounded-full bg-arihant-green px-8 py-4 text-white font-bold">Open Account</Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ... Rest of your "How It Works" and "CTA Final" sections ... */}
    </main>
  );
}