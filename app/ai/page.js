import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import { tools, categories } from "@/app/data/tools";
import { comparisons } from "@/app/data/comparisons";

export const metadata = {
  title: "AI Tools Hub – NorthSky Reviews",
  description:
    "Explore the best AI tools for writing, coding, images, business, automation, and research. Expert reviews and comparisons.",
  openGraph: {
    title: "AI Tools Hub – NorthSky Reviews",
    description: "Discover and compare the top AI tools for every need.",
    url: "https://northsky-reviews.vercel.app/ai",
    siteName: "NorthSky Reviews",
    type: "website",
  },
};

// Get top 6 AI tools by rating
const topAITools = [...tools]
  .filter((t) => t.category.includes("AI"))
  .sort((a, b) => b.rating - a.rating)
  .slice(0, 6);

export default function AIPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "AI Tools Hub",
            description: "Curated AI tools, reviews, and comparisons.",
            url: "https://northsky-reviews.vercel.app/ai",
          }),
        }}
      />

      {/* ─── Hero ────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 inline-block rounded-full bg-purple-500/20 px-4 py-2 text-sm font-bold text-purple-300">
            🤖 AI · Machine Learning · Automation
          </div>
          <h1 className="text-5xl font-black md:text-6xl">
            Your AI Toolkit Hub
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Discover the best AI tools for writing, coding, images, business,
            automation, and research – all in one place.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/all-tools?category=ai-assistant"
              className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-blue-700"
            >
              Explore Assistants
            </Link>
            <Link
              href="/all-tools?category=ai-coding"
              className="rounded-xl border border-white/30 px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Coding Tools
            </Link>
            <Link
              href="/all-tools?category=ai-images"
              className="rounded-xl border border-white/30 px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Image Generators
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            ⭐ {tools.filter((t) => t.category.includes("AI")).length}+ AI tools reviewed
          </p>
        </div>
      </section>

      {/* ─── Categories ──────────────────────────────────────────── */}
      <section className="px-6 py-16 bg-slate-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-black">
            AI Tool Categories
          </h2>
          <p className="mt-2 text-center text-slate-600">
            Find the right AI tool for your specific need
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/categories/${cat.slug}`}
                className="flex items-center justify-center gap-3 rounded-xl bg-white p-6 font-bold shadow transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-2xl">{cat.icon}</span>
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Top AI Tools ────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-4xl font-black">Top AI Tools</h2>
            <p className="mt-2 text-slate-600">
              Highest‑rated AI software by our experts
            </p>
          </div>
          <Link
            href="/all-tools"
            className="font-bold text-blue-600 hover:underline"
          >
            View All →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {topAITools.map((tool) => (
            <div
              key={tool.slug}
              className="group rounded-3xl border p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-start justify-between">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-bold text-blue-600">
                  {tool.category}
                </span>
                <span className="text-sm font-bold text-green-600">
                  ⭐ {tool.rating}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-black">{tool.name}</h3>
              <p className="mt-2 font-bold text-green-600">{tool.best || "Top Pick"}</p>
              <p className="mt-5 text-slate-600">{tool.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {tool.reviewPath && (
                  <Link
                    href={tool.reviewPath}
                    className="text-sm font-bold text-blue-600 hover:underline"
                  >
                    Full Review →
                  </Link>
                )}
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-4 inline-block w-full rounded-xl bg-blue-600 px-6 py-3 text-center font-bold text-white transition hover:bg-blue-700"
                >
                  Try {tool.name} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Featured Comparisons ────────────────────────────────── */}
      {comparisons.length > 0 && (
        <section className="bg-slate-50 px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-end justify-between">
              <h2 className="text-3xl font-black">⚖️ AI Tool Comparisons</h2>
              <Link
                href="/comparisons"
                className="font-bold text-blue-600 hover:underline"
              >
                See All →
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {comparisons.slice(0, 2).map((c) => (
                <Link
                  key={c.slug}
                  href={`/comparisons/${c.slug}`}
                  className="rounded-2xl bg-white p-6 shadow transition hover:shadow-lg"
                >
                  <h3 className="text-xl font-bold">{c.title}</h3>
                  <p className="mt-2 text-slate-600 line-clamp-2">{c.description}</p>
                  <span className="mt-4 inline-block font-bold text-blue-600">
                    Compare Now →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── Newsletter ──────────────────────────────────────────── */}
      <Newsletter variant="hero" />

      {/* ─── Quick Start Guide ───────────────────────────────────── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl rounded-2xl border p-8 text-center">
          <h2 className="text-3xl font-black">New to AI?</h2>
          <p className="mt-3 text-slate-600">
            Start with our beginner-friendly guides and top recommendations.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/guides/getting-started-with-ai"
              className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
            >
              Read the Guide →
            </Link>
            <Link
              href="/reviews"
              className="rounded-xl border px-6 py-3 font-bold text-slate-700 transition hover:bg-slate-50"
            >
              Browse All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Affiliate Disclosure ────────────────────────────────── */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-100 p-8 text-center">
          <p className="text-sm text-slate-600">
            🔗 Affiliate Disclosure: Some links on NorthSky Reviews may be
            affiliate links. We may earn a commission at no extra cost to you.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            We only recommend products we trust.
          </p>
        </div>
      </section>
    </main>
  );
}