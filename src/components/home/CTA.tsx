import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-arihant-violet/20 bg-arihant-violet-soft px-8 py-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Start your investing journey today</h2>
          <p className="mx-auto mt-3 max-w-2xl text-gray-600">
            Open your account in minutes and get support from onboarding to your first investment.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="rounded-full bg-arihant-green px-7 py-3 font-semibold text-white">
              Open Account
            </Link>
            <Link href="/research/news" className="rounded-full border border-gray-300 px-7 py-3 font-semibold text-gray-700">
              View Market News
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
