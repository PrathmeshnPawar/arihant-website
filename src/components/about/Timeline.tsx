const timeline = [
  {
    year: "1992",
    event: "Arihant Capital founded with a vision of ethical investing.",
  },
  {
    year: "2005",
    event: "Expanded operations across major Indian cities.",
  },
  {
    year: "2015",
    event: "Launched digital trading platforms for retail investors.",
  },
  {
    year: "2024",
    event: "Serving over 2.5 lakh investors nationwide.",
  },
];

export function CompanyTimeline() {
  return (
    <section className="bg-arihant-violet-soft py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Journey
        </h2>

        <div className="space-y-8">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="flex gap-6 items-start"
            >
              <span className="text-arihant-green font-bold text-lg">
                {item.year}
              </span>
              <p className="text-gray-700">
                {item.event}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
