"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  imageSrc?: string;
  imageAlt?: string;
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCta,
  imageSrc,
  imageAlt,
}: HeroProps) {
  return (
    <motion.section
      className="bg-arihant-violet-soft py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={stagger}
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 items-center">

        {/* LEFT */}
        <div>
          {subtitle && (
            <motion.p
              variants={fadeUp}
              className="text-sm font-bold uppercase tracking-wider text-arihant-green"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.h1
            variants={fadeUp}
            className="mt-2 text-4xl font-bold text-arihant-violet sm:text-5xl"
          >
            {title}
          </motion.h1>

          {description && (
            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg text-gray-700"
            >
              {description}
            </motion.p>
          )}

          {primaryCta && (
            <motion.div variants={fadeUp} className="mt-8">
              <Link
                href={primaryCta.href}
                className="inline-block rounded-full bg-arihant-green px-8 py-3 font-semibold text-white hover:opacity-90 transition"
              >
                {primaryCta.label}
              </Link>
            </motion.div>
          )}
        </div>

        {/* RIGHT IMAGE */}
        {imageSrc && (
          <motion.div variants={fadeUp} className="relative">
            <Image
              src={imageSrc}
              alt={imageAlt || "Hero image"}
              width={600}
              height={400}
              className="w-full rounded-2xl shadow-lg"
            />
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}
