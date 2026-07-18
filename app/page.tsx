export default function HomePage() {
  const categories = [
    "Technology",
    "Home & Kitchen",
    "Outdoor",
    "Health & Fitness",
    "Automotive",
    "Travel",
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <h1 className="text-5xl font-bold">
            NorthSky Reviews
          </h1>

          <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
            Honest product reviews, buying guides, and carefully selected
            recommendations to help you make smarter purchases.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="/reviews"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-700"
            >
              Browse Reviews
            </a>

            <a
              href="/categories"
              className="rounded-lg border border-white px-6 py-3 hover:bg-white hover:text-slate-900"
            >
              Categories
            </a>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="mx-auto max-w-5xl px-6 py-12">
        <input
          type="search"
          placeholder="Search reviews..."
          className="w-full rounded-lg border border-gray-300 p-4 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <h2 className="mb-8 text-3xl font-bold">
          Popular Categories
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-xl bg-white p-6 shadow transition hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">{category}</h3>

              <p className="mt-3 text-gray-600">
                Explore expert reviews and buying guides for {category}.
              </p>

              <a
                href={`/categories/${category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                className="mt-4 inline-block text-blue-600 font-semibold"
              >
                View Reviews →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Find Your Next Great Purchase
          </h2>

          <p className="mt-6 text-lg">
            Compare products, read trusted reviews, and discover the best
            deals—all in one place.
          </p>

          <a
            href="/reviews"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-4 font-semibold text-blue-600 hover:bg-gray-100"
          >
            Start Exploring
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-gray-600">
          © {new Date().getFullYear()} NorthSky Reviews. All rights reserved.
        </div>
      </footer>
    </main>
  );
}