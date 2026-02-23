"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

import {
  Activity,
  BarChart3,
  MonitorSmartphone,
  BadgePercent,
  ChartColumn,
} from "lucide-react";

const iconMap = {
  activity: Activity,
  research: BarChart3,
  platform: MonitorSmartphone,
  brokerage: BadgePercent,
  analytics: ChartColumn,
};

interface Feature {
  title: string;
  description: string;
  icon: keyof typeof iconMap;   // ✅ STRING KEY ONLY
}

interface FeaturesGridProps {
  heading?: string;
  subheading?: string;
  features: Feature[];
}

export function FeaturesGrid({ heading, subheading, features }: FeaturesGridProps) {
  return (
    <motion.section
      className="mx-auto max-w-6xl px-6 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      {(heading || subheading) && (
        <motion.div variants={fadeUp} className="text-center">
          {heading && <h2 className="text-3xl font-bold text-arihant-violet">{heading}</h2>}
          {subheading && <p className="mt-2 text-gray-600">{subheading}</p>}
        </motion.div>
      )}

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => {
          const Icon = iconMap[feature.icon];

          return (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="rounded-2xl bg-white p-6 shadow-sm border"
            >
              <Icon className="h-8 w-8 text-arihant-green mb-4" />
              <h3 className="font-semibold text-arihant-violet">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}
