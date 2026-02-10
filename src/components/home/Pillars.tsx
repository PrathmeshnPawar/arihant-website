const pillars = [
  {
    title: "Simple onboarding",
    description: "Start quickly with an easy account opening journey and clear next steps.",
  },
  {
    title: "Research-first investing",
    description: "Use analyst-backed ideas and market updates to make informed decisions.",
  },
  {
    title: "Tools for discipline",
    description: "Plan with SIP, EMI and margin calculators to stay consistent with goals.",
  },
];

export default function Pillars() {
  return (
    <section className="bg-[#fafafa] py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-gray-900">Why investors choose Arihant</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
          A modern investing flow backed by long-standing market expertise.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <article key={pillar.title} className="rounded-2xl border border-gray-200 bg-white p-7">
              <span className="text-sm font-semibold text-arihant-green">0{index + 1}</span>
              <h3 className="mt-2 text-xl font-semibold text-gray-900">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
