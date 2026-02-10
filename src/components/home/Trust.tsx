const stats = [
  { label: "Years of Experience", value: "30+" },
  { label: "Active Investors", value: "2.5+ Lakh" },
  { label: "Corporate Clients", value: "1000+" },
  { label: "Pan India Presence", value: "120+ Cities" },
];

export default function Trust() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-bold text-arihant-green">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-gray-600">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
