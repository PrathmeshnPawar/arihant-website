import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/card";
import Input from "@/components/ui/input";

export default function SIPCalculator() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold text-arihant-violet">SIP Calculator</h1>

      <Card className="mt-8">
        <CardContent className="grid gap-4 p-6">
          <Input type="number" placeholder="Monthly Investment" />
          <Input type="number" placeholder="Expected Return (%)" />
          <Input type="number" placeholder="Duration (years)" />
          <Button className="rounded-md">Calculate</Button>
        </CardContent>
      </Card>
    </section>
  );
}
