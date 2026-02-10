import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/card";
import Input from "@/components/ui/input";

export default function EMICalculator() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold text-arihant-violet">EMI Calculator</h1>
      <div className="mt-8 grid gap-4 rounded-xl border border-arihant-violet/20 bg-white p-6">
        <input type="number" placeholder="Loan Amount" className="rounded-md border border-arihant-violet/20 p-3" />
        <input type="number" placeholder="Interest Rate (%)" className="rounded-md border border-arihant-violet/20 p-3" />
        <input type="number" placeholder="Tenure (months)" className="rounded-md border border-arihant-violet/20 p-3" />
        <button className="rounded-md bg-arihant-green py-3 font-semibold text-white transition hover:bg-arihant-violet">Calculate</button>
      </div>
    </section>
  );
}
