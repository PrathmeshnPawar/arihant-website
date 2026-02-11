async function getPosts() {
  try {
    const res = await fetch(
      "https://arihant-cms-xtre.vercel.app/api/posts",
      { next: { revalidate: 60 } }
    );

    if (!res.ok) return [];

    const json = await res.json();

    // ✅ Correct extraction
    return json.data?.posts || [];
  } catch (error) {
    console.error("CMS fetch failed:", error);
    return [];
  }
}




type Post = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  category?: {
    name: string;
  };
  coverImage?: {
    url: string;
  };
};

export default async function BlogPage() {
  const posts: Post[] = await getPosts();

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-3xl font-bold text-arihant-violet">
        Research Blog
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <a
            key={post._id}
            href={`https://arihant-cms-xtre.vercel.app/blog/${post.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <article
              className="
                overflow-hidden rounded-xl border border-arihant-violet/20 bg-white
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-md
              "
            >
              {/* Cover Image */}
              {post.coverImage?.url && (
                <img
                  src={post.coverImage.url}
                  alt={post.title}
                  className="h-40 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              )}

              <div className="p-5">
                {/* Category */}
                {post.category?.name && (
                  <p className="text-xs font-semibold uppercase tracking-wide text-arihant-green">
                    {post.category.name}
                  </p>
                )}

                {/* Title */}
                <h2 className="mt-2 text-base font-semibold text-arihant-violet group-hover:text-arihant-green transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Date */}
                <p className="mt-3 text-xs text-gray-500">
                  {new Date(post.publishedAt).toDateString()}
                </p>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}
