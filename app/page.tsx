export default function HomePage() {
  return (
    <main className="min-h-screen p-6 flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to Monet Artworks Explorer
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Discover, explore, and learn about artworks from Harvard Art Museums.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/art"
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            View Art
          </a>
          <a
            href="/about"
            className="bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 transition"
          >
            About
          </a>
        </div>
      </div>
    </main>
  );
}
