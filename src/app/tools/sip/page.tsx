export default function SIPCalculator() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold">SIP Calculator</h1>

      <div className="mt-8 grid gap-4">
        <input
          type="number"
          placeholder="Monthly Investment"
          className="border p-3 rounded-md"
        />
        <input
          type="number"
          placeholder="Expected Return (%)"
          className="border p-3 rounded-md"
        />
        <input
          type="number"
          placeholder="Duration (years)"
          className="border p-3 rounded-md"
        />

        <button className="bg-green-600 text-white py-3 rounded-md">
          Calculate
        </button>
      </div>
    </section>
  );
}
