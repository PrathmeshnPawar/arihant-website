"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal } from "../ui/Reveal";

const products = [
  {
    title: "Equity Trading",
    description: "High-performance platforms with real-time analytics and expert research calls.",
    href: "/products/equity",
    variant: "featured",
  },
  {
    title: "Mutual Funds",
    description: "Handpicked funds for every goal.",
    href: "/products/mutual-funds",
    variant: "primary",
  },
  {
    title: "IPOs & Listings",
    description: "Guided support for primary market opportunities.",
    href: "/products/ipo",
    variant: "outline",
  },
];

export default function Products() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-arihant-green">Services</h2>
        </Reveal>
        
        <Reveal delay={0.1}>
          <p className="mt-2 text-3xl font-bold tracking-tight text-arihant-violet sm:text-4xl">
            Everything you need to grow.
          </p>
        </Reveal>
        
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-6 sm:grid-rows-2">
          {/* Featured Product: Equity Trading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="col-span-1 row-span-1 rounded-3xl bg-white border border-slate-200 p-8 sm:col-span-3 sm:row-span-2 flex flex-col justify-between shadow-sm hover:shadow-xl hover:shadow-arihant-green/5 transition-all duration-300 cursor-pointer group"
          >
            <Link href="/products/equity" className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-arihant-violet">Equity Trading</h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  High-performance platforms with real-time analytics and expert research calls.
                </p>
              </div>
              <span className="mt-8 text-sm font-bold text-arihant-green group-hover:translate-x-2 transition-transform inline-block">
                Learn more →
              </span>
            </Link>
          </motion.div>
          
          {/* Primary Action: Mutual Funds */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="col-span-1 rounded-3xl bg-arihant-violet p-8 sm:col-span-3 text-white shadow-lg shadow-arihant-violet/20 cursor-pointer group"
          >
            <Link href="/products/mutual-funds">
              <h3 className="text-xl font-bold">Mutual Funds</h3>
              <p className="mt-2 text-white/70">Handpicked funds for every goal.</p>
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity text-arihant-green-soft text-sm font-medium">
                View top picks →
              </div>
            </Link>
          </motion.div>
          
          {/* Outline Action: IPOs & Listings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ y: -5 }}
            className="col-span-1 rounded-3xl border border-slate-200 bg-white p-8 sm:col-span-3 flex justify-between items-center hover:border-arihant-green/50 transition-colors cursor-pointer group"
          >
            <Link href="/products/ipo" className="flex justify-between items-center w-full">
              <h3 className="text-lg font-bold text-arihant-violet">IPOs & Listings</h3>
              <motion.div 
                whileHover={{ rotate: 45 }}
                className="h-10 w-10 rounded-full bg-arihant-green-soft flex items-center justify-center text-arihant-green transition-colors group-hover:bg-arihant-green group-hover:text-white"
              >
                ↗
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}