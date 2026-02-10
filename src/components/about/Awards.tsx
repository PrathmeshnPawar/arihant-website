const awards = [
  "AsiaMoney – Best Retail Brokerage",
  "Great Place to Work – 2024–25",
  "Featured in Forbes & CNBC",
];

export function AwardsSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-10 text-3xl font-bold text-arihant-violet">Recognition & Awards</h2>

        <div className="flex flex-col justify-center gap-8 text-gray-700 md:flex-row">
          {awards.map((award) => (
            <div key={award} className="rounded-xl border border-arihant-violet/20 bg-white px-6 py-4">
              🏆 {award}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
