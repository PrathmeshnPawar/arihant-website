import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl bg-arihant-violet px-8 py-12 text-center text-white md:px-14 md:py-14">
          <h2 className="text-3xl font-bold">Ready to take the next step?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/85">
            Open your account and get guided support from onboarding to your first investment.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" className="rounded-full bg-white px-7 py-3 font-semibold text-arihant-violet transition hover:bg-arihant-green-soft">
              Open Account
            </Link>
            <Link href="/research/news" className="rounded-full border border-white/40 px-7 py-3 font-semibold text-white transition hover:bg-white/10">
              View Market News
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
