export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold text-center">Contact Us</h1>
      <form className="mt-8 space-y-4">
        <input type="text" placeholder="Name" className="w-full border p-3 rounded-md" />
        <input type="email" placeholder="Email" className="w-full border p-3 rounded-md" />
        <textarea placeholder="Message" className="w-full border p-3 rounded-md h-32"></textarea>
        <button className="w-full bg-arihant-green text-white py-3 rounded-md font-bold">Send Message</button>
      </form>
    </section>
  );
}