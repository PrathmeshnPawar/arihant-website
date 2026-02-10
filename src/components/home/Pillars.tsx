const pillars = [
  {
    title: "Easy to start",
    description: "Open an account quickly and begin investing across products with a guided onboarding flow.",
  },
  {
    title: "Built on research",
    description: "Get market insights, sector notes and actionable ideas from experienced analysts.",
  },
  {
    title: "Designed for growth",
    description: "Use calculators and disciplined plans like SIPs to steadily build wealth over time.",
  },
];

export default function Pillars() {
  return (
    <section className="bg-[#fafafa] py-18">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900">Why investors choose Arihant</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
          A clean, transparent and support-first investing experience with the discipline of a legacy brokerage.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <article key={pillar.title} className="rounded-2xl border border-gray-200 bg-white p-7">
              <span className="text-sm font-semibold text-arihant-green">0{index + 1}</span>
              <h3 className="mt-3 text-xl font-semibold text-gray-900">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
