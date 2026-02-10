// src/app/about-us/page.tsx
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

      {/* Final CTA to "Open an Account" before the footer */}
      <section className="bg-arihant-violet py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">
          Ready to generate wealth with us?
        </h2>
        <button className="bg-arihant-orange hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition-all">
          Open an Account
        </button>
      </section>
    </main>
  );
}
