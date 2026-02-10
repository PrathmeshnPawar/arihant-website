import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="bg-white pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <Card className="border-arihant-violet/20 bg-arihant-violet-soft">
          <CardContent className="px-8 py-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900">Start your investing journey today</h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              Open your account in minutes and get support from onboarding to your first investment.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link href="/contact" className={buttonVariants({ variant: "default", size: "lg" })}>
                Open Account
              </Link>
              <Link href="/research/news" className={buttonVariants({ variant: "outline", size: "lg" })}>
                View Market News
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
