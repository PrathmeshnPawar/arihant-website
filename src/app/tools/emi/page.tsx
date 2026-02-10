export default function EMICalculator() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20">
      <h1 className="text-3xl font-bold">EMI Calculator</h1>
      <div className="mt-8 grid gap-4">
        <input type="number" placeholder="Loan Amount" className="border p-3 rounded-md" />
        <input type="number" placeholder="Interest Rate (%)" className="border p-3 rounded-md" />
        <input type="number" placeholder="Tenure (months)" className="border p-3 rounded-md" />
        <button className="bg-green-600 text-white py-3 rounded-md">Calculate</button>
      </div>
    </section>
  );
}