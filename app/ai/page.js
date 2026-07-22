import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import { tools, categories } from "@/app/data/tools";
import { comparisons } from "@/app/data/comparisons";

export const metadata = {
  title: "Best AI Tools & Software (2026) | NorthSky Reviews",
  description:
    "Compare the best AI tools for writing, coding, image generation, business, automation and productivity. Independent reviews and buying guides.",
};

const aiTools = tools.filter(
  (tool) =>
    tool.category?.toLowerCase().includes("ai") ||
    tool.tags?.includes("ai")
);

const featured = [...aiTools]
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 6);

export default function AIPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="mb-6 inline-flex rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">
            ⭐ Trusted AI Software Reviews
          </div>

          <h1 className="max-w-4xl text-5xl font-black md:text-7xl">
            Find the Best AI Tools for Every Task
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-slate-300">
            Compare AI assistants, image generators, coding tools,
            automation software, productivity apps and business AI
            solutions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/all-tools"
              className="rounded-xl bg-blue-600 px-8 py-4 font-bold hover:bg-blue-700"
            >
              Browse AI Tools
            </Link>

            <Link
              href="/comparisons"
              className="rounded-xl border border-white/20 px-8 py-4 font-bold hover:bg-white/10"
            >
              Compare Tools
            </Link>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">

            <div className="rounded-2xl bg-white/10 p-6">
              <p className="text-4xl font-black">{aiTools.length}+</p>
              <p className="text-slate-300">AI Tools</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <p className="text-4xl font-black">{comparisons.length}+</p>
              <p className="text-slate-300">Comparisons</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <p className="text-4xl font-black">{categories.length}</p>
              <p className="text-slate-300">Categories</p>
            </div>

            <div className="rounded-2xl bg-white/10 p-6">
              <p className="text-4xl font-black">2026</p>
              <p className="text-slate-300">Latest Reviews</p>
            </div>

          </div>

        </div>
      </section>

      {/* Categories */}

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">

          <h2 className="text-center text-4xl font-black">
            Browse by Category
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="rounded-2xl bg-white p-8 shadow transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-4xl">
                  {category.icon}
                </div>

                <h3 className="mt-5 text-2xl font-bold">
                  {category.name}
                </h3>

                <p className="mt-3 text-slate-600">
                  Explore top rated {category.name.toLowerCase()} software.
                </p>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* Featured */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="mb-12 flex items-center justify-between">

          <div>
            <h2 className="text-4xl font-black">
              Editor's Choice
            </h2>

            <p className="mt-3 text-slate-600">
              Highest-rated AI software this year.
            </p>
          </div>

          <Link
            href="/all-tools"
            className="font-bold text-blue-600"
          >
            View All →
          </Link>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {featured.map((tool) => (

            <div
              key={tool.slug}
              className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="flex justify-between">

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
                  {tool.category}
                </span>

                <span className="font-bold text-green-600">
                  ⭐ {tool.rating}
                </span>

              </div>

              <h3 className="mt-6 text-3xl font-black">
                {tool.name}
              </h3>

              <p className="mt-4 text-slate-600">
                {tool.description}
              </p>

              <div className="mt-8 space-y-3">

                {tool.reviewPath && (
                  <Link
                    href={tool.reviewPath}
                    className="block rounded-xl border px-5 py-3 text-center font-bold hover:bg-slate-50"
                  >
                    Read Review
                  </Link>
                )}

                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="block rounded-xl bg-blue-600 px-5 py-3 text-center font-bold text-white hover:bg-blue-700"
                >
                  Visit Website
                </a>

              </div>

            </div>

          ))}

        </div>

      </section>

     