import Button from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/card";
import Input from "@/components/ui/input";
import Textarea from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-center text-3xl font-bold text-arihant-violet">Contact Us</h1>
      <p className="mt-3 text-center text-gray-600">Share your details and our advisor will reach out shortly.</p>

      <Card className="mt-8">
        <CardContent className="space-y-4 p-6">
          <Input type="text" placeholder="Name" />
          <Input type="email" placeholder="Email" />
          <Textarea placeholder="Message" />
          <Button className="w-full rounded-md">Send Message</Button>
        </CardContent>
      </Card>
    </section>
  );
}
