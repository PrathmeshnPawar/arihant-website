import Button from "@/components/ui/Button";
import Input from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-arihant-violet">
          Contact Us
        </h1>
        <p className="mt-3 text-gray-600">
          Share your details and our advisor will reach out shortly.
        </p>
      </div>

      <form
        className="
          mt-10
          rounded-3xl
          border border-border/40
          bg-white
          p-8
          shadow-sm
          space-y-5
        "
      >
        <Input placeholder="Full Name" />

        <Input type="email" placeholder="Email Address" />

        <Textarea placeholder="How can we help you?" />

        <Button className="w-full">
          Send Message
        </Button>

        <p className="text-xs text-center text-gray-400 pt-2">
          Our team typically responds within one business day.
        </p>
      </form>
    </section>
  );
}
