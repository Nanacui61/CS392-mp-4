import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">
          Monet Art Explorer
        </h1>
        <nav>
          <ul className="flex gap-6 text-sm">
          <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/art" className="hover:underline">
                Artworks
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
