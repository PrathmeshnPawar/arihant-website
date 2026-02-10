import Link from "next/link";
import { AboutHero } from "@/components/about/Hero";
import { StatsGrid } from "@/components/about/StatsGrid";
import { CompanyTimeline } from "@/components/about/Timeline";
import { CoreValues } from "@/components/about/CoreValues";
import { AwardsSection } from "@/components/about/Awards";

export default function AboutUsPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <StatsGrid />
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
