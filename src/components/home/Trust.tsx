const stats = [
  { label: "Years of Experience", value: "30+" },
  { label: "Active Investors", value: "2.5L+" },
  { label: "Corporate Clients", value: "1000+" },
  { label: "Cities Covered", value: "120+" },
];

export default function Trust() {
  return (
    <section className="bg-arihant-green py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 text-center sm:grid-cols-2 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-bold text-white">{stat.value}</p>
            <p className="mt-1 text-sm text-white/90">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
