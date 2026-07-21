import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { tools } from "@/app/data/tools";
import { comparisons } from "@/app/data/comparisons";

export default function SearchPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState({ tools: [], comparisons: [] });
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const inputRef = useRef(null);

  // Focus input on load
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Search on query change
  useEffect(() => {
    if (initialQuery) {
      performSearch(initialQuery);
    }
  }, [initialQuery]);

  function performSearch(searchTerm) {
    if (!searchTerm.trim()) {
      setResults({ tools: [], comparisons: [] });
      setHasSearched(false);
      return;
    }

    setLoading(true);
    const q = searchTerm.toLowerCase().trim();

    // Search tools
    const toolResults = tools.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.category.toLowerCase().includes(q) ||
        (t.best && t.best.toLowerCase().includes(q))
    );

    // Search comparisons
    const comparisonResults = comparisons.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.tool1.name.toLowerCase().includes(q) ||
        c.tool2.name.toLowerCase().includes(q)
    );

    setResults({
      tools: toolResults,
      comparisons: comparisonResults,
    });
    setHasSearched(true);
    setLoading(false);

    // Update URL
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    performSearch(query);
  }

  function handleClear() {
    setQuery("");
    setResults({ tools: [], comparisons: [] });
    setHasSearched(false);
    router.push("/search");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  const totalResults = results.tools.length + results.comparisons.length;

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-black">🔍 Search NorthSky</h1>
        <p className="mt-2 text-lg text-slate-600">
          Find reviews, comparisons, and tools
        </p>

        {/* ─── Search Bar ──────────────────────────────────────────── */}
        <form onSubmit={handleSubmit} className="mt-8 flex gap-3">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for VPNs, AI tools, travel tech..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 rounded-xl border px-6 py-4 text-lg outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search"
          />
          <button
            type="submit"
            className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
          >
            Search
          </button>
          {query && (
            <button
              type="button"
              onClick={handleClear}
              className="rounded-xl border px-6 py-4 font-bold text-slate-600 transition hover:bg-slate-50"
            >
              Clear
            </button>
          )}
        </form>

        {/* ─── Results ────────────────────────────────────────────── */}
        {loading && (
          <div className="mt-12 text-center text-slate-500">Searching...</div>
        )}

        {hasSearched && !loading && (
          <>
            {totalResults === 0 ? (
              <div className="mt-12 rounded-2xl bg-slate-50 p-12 text-center">
                <p className="text-slate-600">
                  No results found for "<strong>{query}</strong>".
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  Try different keywords or browse our categories.
                </p>
                <Link
                  href="/all-tools"
                  className="mt-4 inline-block font-bold text-blue-600 hover:underline"
                >
                  Browse all tools →
                </Link>
              </div>
            ) : (
              <>
                <p className="mt-8 text-sm text-slate-500">
                  Found {totalResults} result{totalResults > 1 ? "s" : ""}
                </p>

                {/* Tools */}
                {results.tools.length > 0 && (
                  <div className="mt-6">
                    <h2 className="text-2xl font-bold">🛠️ Tools</h2>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      {results.tools.map((tool) => (
                        <Link
                          key={tool.slug}
                          href={tool.reviewPath || `/reviews/${tool.slug}`}
                          className="rounded-2xl border p-6 transition hover:shadow-lg"
                        >
                          <div className="flex items-start justify-between">
                            <h3 className="text-xl font-bold">{tool.name}</h3>
                            <span className="text-sm font-bold text-green-600">
                              ⭐ {tool.rating}
                            </span>
                          </div>
                          <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                            {tool.description}
                          </p>
                          <span className="mt-3 inline-block text-sm font-bold text-blue-600">
                            Read Review →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Comparisons */}
                {results.comparisons.length > 0 && (
                  <div className="mt-10">
                    <h2 className="text-2xl font-bold">⚖️ Comparisons</h2>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      {results.comparisons.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/comparisons/${c.slug}`}
                          className="rounded-2xl border p-6 transition hover:shadow-lg"
                        >
                          <h3 className="text-xl font-bold">{c.title}</h3>
                          <p className="mt-2 text-sm text-slate-600 line-clamp-2">
                            {c.description}
                          </p>
                          <span className="mt-3 inline-block text-sm font-bold text-blue-600">
                            Compare →
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </>
        )}

        {/* ─── Suggestions (when no search) ──────────────────────── */}
        {!hasSearched && !loading && (
          <div className="mt-12">
            <h3 className="text-lg font-bold text-slate-600">Popular searches</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {["VPN", "AI", "Travel", "Coding", "Image Generator"].map((term) => (
                <button
                  key={term}
                  onClick={() => {
                    setQuery(term);
                    performSearch(term);
                  }}
                  className="rounded-full border px-4 py-2 text-sm font-medium transition hover:bg-slate-50"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}