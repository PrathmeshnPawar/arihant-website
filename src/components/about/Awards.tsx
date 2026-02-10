const awards = [
  "AsiaMoney – Best Retail Brokerage",
  "Great Place to Work – 2024–25",
  "Featured in Forbes & CNBC",
];

export function AwardsSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-12 text-4xl font-bold text-arihant-violet">
          Recognition & Awards
        </h2>

        <div className="flex flex-col justify-center gap-10 text-gray-700 md:flex-row">
          {awards.map((award) => (
            <div
              key={award}
              className="rounded-2xl border border-arihant-violet/20 bg-white px-8 py-6 text-lg shadow-sm"
            >
              🏆 {award}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
