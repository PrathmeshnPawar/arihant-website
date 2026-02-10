const news = [
  "Nifty closes higher on banking and IT momentum.",
  "RBI keeps policy rates unchanged; focus remains on inflation control.",
  "Primary market pipeline remains active with upcoming SME listings.",
];

export default function NewsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-3xl font-bold text-arihant-violet">Market News</h1>
      <ul className="mt-8 space-y-4">
        {news.map((item) => (
          <li key={item} className="rounded-xl border border-arihant-green/25 bg-arihant-green-soft p-4 text-gray-800">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
