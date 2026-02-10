const stats = [
  { label: "Years of Experience", value: "30+" },
  { label: "Active Investors", value: "2.5L+" },
  { label: "Corporate Clients", value: "1000+" },
  { label: "Cities Covered", value: "120+" },
];

export default function Trust() {
  return (
    <section className="bg-arihant-violet py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center text-white md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-bold text-arihant-green-soft">{stat.value}</p>
            <p className="mt-2 text-sm text-white/85">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
