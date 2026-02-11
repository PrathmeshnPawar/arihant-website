import Link from "next/link";
import { AboutHero } from "@/components/about/Hero";
import { StatsGrid } from "@/components/about/StatsGrid";
import { CompanyTimeline } from "@/components/about/Timeline";
import { CoreValues } from "@/components/about/CoreValues";
import { AwardsSection } from "@/components/about/Awards";
import { WhatWeOffer } from "@/components/about/WhatWeOffer";
export const metadata = {
  title: "About Arihant Capital – Trusted Investment Partner",
  description:
    "Learn about Arihant Capital’s journey, philosophy, and commitment to research-driven investing and client success.",
  alternates: {
     canonical: "https://arihant-website-356i.vercel.app/about_us",
  },
};

export default function AboutUsPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <StatsGrid />
      <WhatWeOffer/>
      <CoreValues />
      <CompanyTimeline />
      <AwardsSection />

      <section className="bg-arihant-violet py-16 text-center text-white">
        <h2 className="mb-6 text-3xl font-bold">Ready to generate wealth with us?</h2>
        <Link
          href="/contact"
          className="rounded-full bg-arihant-green px-8 py-3 font-bold text-white transition hover:bg-white hover:text-arihant-violet"
        >
          Open an Account
        </Link>
      </section>
    </main>
  );
}
