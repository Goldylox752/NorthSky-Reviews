import Link from "next/link";
import { tools, categories } from "@/app/data/tools";

export const metadata = {
  title: "All AI Tools – Complete List | NorthSky Reviews",
  description:
    "Browse our complete list of AI tools, with expert reviews, comparisons, and ratings. Find the best AI software for your needs.",
};

const ITEMS_PER_PAGE = 12;

export default function AllToolsPage({ searchParams }) {
  const search = searchParams?.search || "";
  const category = searchParams?.category || "";
  const page = parseInt(searchParams?.page) || 1;

  // Filter tools
  let filtered = tools;
  if (category) {
    filtered = filtered.filter((t) => t.categorySlug === category);
  }
  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q)
    );
  }

  // Pagination
  const total = filtered.length;
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginated = filtered.slice(start, start + ITEMS_PER_PAGE);

  // Build URL for filter links
  function getUrl(pageNum = page) {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (category) params.set("category", category);
    if (pageNum > 1) params.set("page", pageNum);
    return `/all-tools?${params.toString()}`;
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-black">All AI Tools</h1>
        <p className="mt-3 text-lg text-slate-600">
          Browse our complete collection – expert reviews, ratings, and comparisons.
        </p>

        {/* ─── Filters ────────────────────────────────────────────── */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          {/* Search */}
          <form action="/all-tools" method="GET" className="flex flex-1 gap-2">
            <input
              type="text"
              name="search"
              placeholder="Search tools..."
              defaultValue={search}
              className="flex-1 rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
            >
              Search
            </button>
          </form>

          {/* Category filter (dropdown) */}
          <div className="flex items-center gap-2">
            <label htmlFor="category" className="text-sm font-medium text-slate-600">
              Category
            </label>
            <select
              id="category"
              value={category}
              onChange={(e) => {
                const params = new URLSearchParams();
                if (e.target.value) params.set("category", e.target.value);
                if (search) params.set("search", search);
                window.location.href = `/all-tools?${params.toString()}`;
              }}
              className="rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">All</option>
              {categories.map((cat) => (
                <option key={cat.slug} value={cat.slug}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {/* Clear filters */}
          {(search || category) && (
            <Link
              href="/all-tools"
              className="text-sm font-bold text-red-600 hover:underline"
            >
              Clear filters
            </Link>
          )}
        </div>

        {/* ─── Results Count ──────────────────────────────────────── */}
        <p className="mt-6 text-slate-600">
          Showing {start + 1}–{Math.min(start + ITEMS_PER_PAGE, total)} of {total} tools
        </p>

        {/* ─── Tools Grid ────────────────────────────────────────── */}
        {paginated.length === 0 ? (
          <div className="mt-8 rounded-2xl bg-slate-50 p-12 text-center">
            <p className="text-slate-600">No tools found matching your criteria.</p>
            <Link href="/all-tools" className="mt-4 inline-block font-bold text-blue-600">
              Reset filters
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {paginated.map((tool) => (
              <div
                key={tool.slug}
                className="rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                    {tool.category}
                  </span>
                  <span className="text-sm font-bold text-green-600">⭐ {tool.rating}</span>
                </div>
                <h3 className="mt-4 text-xl font-bold">{tool.name}</h3>
                <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                  {tool.description}
                </p>
                <p className="mt-2 text-sm font-bold text-slate-700">
                  Best for: {tool.bestFor}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {tool.reviewPath && (
                    <Link
                      href={tool.reviewPath}
                      className="text-sm font-bold text-blue-600 hover:underline"
                    >
                      Read Review
                    </Link>
                  )}
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="nofollow sponsored"
                    className="text-sm font-bold text-green-600 hover:underline"
                  >
                    Visit Site →
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ─── Pagination ────────────────────────────────────────── */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={getUrl(p)}
                className={`rounded-xl px-4 py-2 font-bold ${
                  p === page
                    ? "bg-blue-600 text-white"
                    : "border text-slate-600 hover:bg-slate-50"
                }`}
              >
                {p}
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}