export default function HomePage() {
  const categories = [
    {
      name: "Technology",
      icon: "💻",
      description: "Laptops, phones, AI tools, gadgets and electronics.",
    },
    {
      name: "Home & Kitchen",
      icon: "🏠",
      description: "Smart appliances, tools, and everyday essentials.",
    },
    {
      name: "Outdoor",
      icon: "🏕️",
      description: "Camping, drones, gear, and adventure equipment.",
    },
    {
      name: "Health & Fitness",
      icon: "💪",
      description: "Fitness equipment, wearables, and wellness products.",
    },
    {
      name: "Automotive",
      icon: "🚗",
      description: "Car accessories, tools, and technology.",
    },
    {
      name: "Travel",
      icon: "✈️",
      description: "Travel gear, accessories, and smart solutions.",
    },
  ];

  const products = [
    {
      name: "Best Laptops 2026",
      rating: "★★★★★",
      description:
        "Top-performing laptops ranked by value and performance.",
    },
    {
      name: "Best Drones Under $500",
      rating: "★★★★★",
      description:
        "Compare beginner and professional drones.",
    },
    {
      name: "Smart Home Essentials",
      rating: "★★★★☆",
      description:
        "Upgrade your home with smart technology.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">

      <section className="bg-gradient-to-br from-slate-950 via-blue-900 to-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-28 text-center">

          <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm">
            🚀 AI Powered Product Intelligence
          </span>

          <h1 className="mt-8 text-5xl font-bold md:text-7xl">
            NorthSky Reviews
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">
            Discover the best products through expert reviews,
            comparisons, and buying guides.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <a
              href="/reviews"
              className="rounded-xl bg-blue-600 px-8 py-4 font-bold"
            >
              Explore Reviews
            </a>

            <a
              href="/ai"
              className="rounded-xl border px-8 py-4 font-bold"
            >
              AI Assistant
            </a>

          </div>

        </div>
      </section>


      <section className="mx-auto max-w-5xl px-6 py-12">

        <input
          type="search"
          placeholder="Search products and reviews..."
          className="w-full rounded-xl border p-4 text-lg"
        />

      </section>


      <section className="mx-auto max-w-7xl px-6 py-10">

        <h2 className="mb-8 text-3xl font-bold">
          Trending Reviews
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-2xl bg-white p-6 shadow"
            >

              <div className="text-yellow-500">
                {product.rating}
              </div>

              <h3 className="mt-3 text-xl font-bold">
                {product.name}
              </h3>

              <p className="mt-3 text-gray-600">
                {product.description}
              </p>

            </div>
          ))}

        </div>

      </section>


      <section className="mx-auto max-w-7xl px-6 pb-20">

        <h2 className="mb-8 text-3xl font-bold">
          Categories
        </h2>

        <div className="grid gap-6 md:grid-cols-3">

          {categories.map((category) => (

            <div
              key={category.name}
              className="rounded-2xl bg-white p-6 shadow"
            >

              <div className="text-4xl">
                {category.icon}
              </div>

              <h3 className="mt-4 text-xl font-bold">
                {category.name}
              </h3>

              <p className="mt-2 text-gray-600">
                {category.description}
              </p>

            </div>

          ))}

        </div>

      </section>


      <section className="bg-slate-900 py-20 text-center text-white">

        <h2 className="text-4xl font-bold">
          Find Better Products With NorthSky AI
        </h2>

        <p className="mt-4 text-slate-300">
          Compare products and discover smarter purchases.
        </p>

      </section>


      <footer className="border-t bg-white py-8 text-center text-gray-600">
        © {new Date().getFullYear()} NorthSky Reviews
      </footer>

    </main>
  );
}