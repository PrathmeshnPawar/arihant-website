const awards = [
  "AsiaMoney – Best Retail Brokerage",
  "Great Place to Work – 2024–25",
  "Featured in Forbes & CNBC",
];

export function AwardsSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">
          Recognition & Awards
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-8 text-gray-700">
          {awards.map((award) => (
            <div
              key={award}
              className="bg-white border rounded-xl px-6 py-4"
            >
              🏆 {award}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
