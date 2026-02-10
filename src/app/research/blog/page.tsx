const posts = [
  { title: "How SIPs build long-term wealth", tag: "Mutual Funds", date: "12 Jan 2026" },
  { title: "Navigating market volatility with discipline", tag: "Equity", date: "08 Jan 2026" },
  { title: "IPO checklist for first-time investors", tag: "IPO", date: "02 Jan 2026" },
];

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-bold text-arihant-violet">Research Blog</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="rounded-xl border border-arihant-violet/20 bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-arihant-green">{post.tag}</p>
            <h2 className="mt-3 text-lg font-semibold text-arihant-violet">{post.title}</h2>
            <p className="mt-4 text-sm text-gray-600">{post.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
