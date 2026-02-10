const values = [
  {
    title: "Integrity",
    description:
      "We operate with transparency and honesty in everything we do.",
  },
  {
    title: "Research Driven",
    description:
      "Every recommendation is backed by data, analysis, and expertise.",
  },
  {
    title: "Client First",
    description:
      "Our success is measured by the long-term success of our clients.",
  },
  {
    title: "Discipline",
    description:
      "We believe consistent, disciplined investing builds real wealth.",
  },
];

export function CoreValues() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Core Values
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white border rounded-xl p-6 text-center hover:shadow-sm transition"
            >
              <h3 className="text-lg font-semibold text-gray-900">
                {value.title}
              </h3>
              <p className="mt-3 text-sm text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
