export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-center text-3xl font-bold text-arihant-violet">Contact Us</h1>
      <p className="mt-3 text-center text-gray-600">Share your details and our advisor will reach out shortly.</p>
      <form className="mt-8 space-y-4 rounded-xl border border-arihant-violet/20 bg-white p-6">
        <input type="text" placeholder="Name" className="w-full rounded-md border border-arihant-violet/20 p-3" />
        <input type="email" placeholder="Email" className="w-full rounded-md border border-arihant-violet/20 p-3" />
        <textarea placeholder="Message" className="h-32 w-full rounded-md border border-arihant-violet/20 p-3"></textarea>
        <button className="w-full rounded-md bg-arihant-green py-3 font-bold text-white transition hover:bg-arihant-violet">
          Send Message
        </button>
      </form>
    </section>
  );
}
