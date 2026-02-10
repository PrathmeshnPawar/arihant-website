import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="bg-arihant-green py-20 text-center text-white">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="mb-4 text-3xl font-bold">Start your investing journey today</h2>

        <p className="mb-8 text-white/85">Open an account in minutes with expert support and a trusted investment partner.</p>

        <Link
          href="/contact"
          className="inline-block rounded-full bg-white px-8 py-3 font-bold text-arihant-violet transition hover:bg-arihant-violet-soft"
        >
          Open an Account
        </Link>
      </div>
    </section>
  );
}
