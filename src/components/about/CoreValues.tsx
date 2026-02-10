const values = [
  {
    title: "Integrity",
    description: "We operate with transparency and honesty in everything we do.",
  },
  {
    title: "Research Driven",
    description: "Every recommendation is backed by data, analysis, and expertise.",
  },
  {
    title: "Client First",
    description: "Our success is measured by the long-term success of our clients.",
  },
  {
    title: "Discipline",
    description: "We believe consistent, disciplined investing builds real wealth.",
  },
];

export function CoreValues() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-14 text-center text-4xl font-bold text-arihant-violet">
          Our Core Values
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-arihant-violet/20 bg-white p-8 text-center transition hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-arihant-violet">
                {value.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-gray-700">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
