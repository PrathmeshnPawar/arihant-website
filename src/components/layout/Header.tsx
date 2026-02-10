import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-green-600">
          ArihantCapital
        </Link>

        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/products/equity">Products</Link>
          <Link href="/research/blog">Research</Link>
          <Link href="/tools/sip">Tools</Link>
          <Link href="/(marketing)/about-us">About</Link>
          <Link href="/(marketing)/contact">Contact</Link>
        </nav>

        <Link
          href="/auth/open-account"
          className="bg-green-600 text-white px-4 py-2 rounded-md text-sm"
        >
          Open Account
        </Link>
      </div>
    </header>
  );
}
