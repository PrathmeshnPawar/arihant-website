import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-arihant-violet py-20 text-center text-white">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">
          Start your investing journey today
        </h2>

        <p className="text-white/80 mb-8">
          Open an account in minutes with expert support at every step.
        </p>

        <Link
          href="/auth/open-account"
          className="inline-block bg-arihant-orange hover:bg-orange-600 px-8 py-3 rounded-full font-bold transition"
        >
          Open an Account
        </Link>
      </div>
    </section>
  );
}
