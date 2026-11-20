"use client";

import { useState } from "react";

const CATEGORY_HUBS = [
  {
    name: "AI Tools",
    href: "/ai",
    badge: "Updated Weekly",
    description:
      "Hands-on reviews of AI writers, coding assistants, workflow builders, and productivity apps.",
    count: "40+ Reviews",
  },
  {
    name: "VPN & Security",
    href: "/vpn",
    secondaryHref: "/surfshark",
    secondaryLabel: "Featured: Surfshark Review →",
    badge: "Speed Tested",
    description:
      "Independent no-logs audits, streaming unlocks, WireGuard speed benchmarks, and pricing breakdowns.",
    count: "25+ Tested",
  },
  {
    name: "Travel & Travel Tech",
    href: "/travel",
    secondaryHref: "/travel-tech",
    secondaryLabel: "Explore Travel Tech →",
    badge: "Field Tested",
    description:
      "eSIMs, portable routers, GaN chargers, noise-canceling gear, and digital nomad essentials.",
    count: "30+ Guides",
  },
  {
    name: "All Software & Tools",
    href: "/all-tools",
    badge: "Full Directory",
    description:
      "Browse our complete searchable index across every software, security, and hardware category.",
    count: "120+ Listings",
  },
];

const FEATURED_COMPARISONS = [
  {
    title: "Best AI Productivity & Automation Tools (2026)",
    category: "Best-Of Roundup",
    href: "/best",
    readTime: "9 min read",
    summary:
      "We tested 18 leading AI assistants on accuracy, pricing, privacy policies, and real-world workflow speed.",
  },
  {
    title: "Head-to-Head Software & VPN Comparisons",
    category: "Comparisons",
    href: "/comparisons",
    readTime: "7 min read",
    summary:
      "Side-by-side feature matrices, speed charts, and clear verdicts so you don't overpay for bloated tiers.",
  },
  {
    title: "Surfshark VPN Review & Speed Benchmarks",
    category: "Spotlight Review",
    href: "/surfshark",
    readTime: "8 min read",
    summary:
      "Full breakdown of unlimited device connections, WireGuard throughput, streaming access, and multi-year pricing.",
  },
];

const EDITORIAL_HUBS = [
  {
    title: "In-Depth Individual Product Reviews",
    tag: "Reviews",
    href: "/reviews",
    excerpt:
      "Unfiltered pros, cons, benchmark scores, and long-term testing notes from the NorthSky editorial team.",
  },
  {
    title: "Buyer’s Guides & Step-by-Step Tutorials",
    tag: "Guides",
    href: "/guides",
    excerpt:
      "Practical walkthroughs on choosing VPN protocols, configuring AI workflows, and packing smart travel tech.",
  },
  {
    title: "NorthSky Editorial Blog & Industry News",
    tag: "Blog",
    href: "/blog",
    excerpt:
      "Latest software updates, cybersecurity alerts, AI releases, and behind-the-scenes testing notes.",
  },
];

export default function NorthSkyReviewsHome() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filteredHubs =
    selectedFilter === "all"
      ? CATEGORY_HUBS
      : CATEGORY_HUBS.filter((hub) =>
          hub.href.toLowerCase().includes(selectedFilter)
        );

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-sky-500/30">
      {/* Top Disclosure Bar */}
      <div className="border-b border-slate-800/80 bg-slate-900/90 px-4 py-2 text-center text-xs text-slate-400">
        Independent testing by{" "}
        <a
          href="/authors"
          className="font-medium text-slate-200 underline decoration-slate-600 hover:text-sky-400"
        >
          our authors
        </a>{" "}
        &amp;{" "}
        <a
          href="/authors/northsky-team"
          className="font-medium text-slate-200 underline decoration-slate-600 hover:text-sky-400"
        >
          The NorthSky Team
        </a>
        . Reader-supported via{" "}
        <a
          href="/affiliate-disclosure"
          className="font-medium text-slate-200 underline decoration-slate-600 hover:text-sky-400"
        >
          affiliate links
        </a>{" "}
        at zero extra cost to you.
      </div>

      {/* Primary Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
          <a href="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500 text-sm font-extrabold text-slate-950">
              NS
            </span>
            <span className="text-lg font-bold tracking-tight text-white">
              NorthSky <span className="text-sky-400">Reviews</span>
            </span>
          </a>

          <nav className="hidden items-center gap-5 text-sm font-medium text-slate-300 xl:flex">
            <a href="/reviews" className="transition hover:text-white">
              Reviews
            </a>
            <a href="/best" className="transition hover:text-white">
              Best Of
            </a>
            <a href="/comparisons" className="transition hover:text-white">
              Comparisons
            </a>
            <a href="/ai" className="transition hover:text-white">
              AI
            </a>
            <a href="/vpn" className="transition hover:text-white">
              VPN
            </a>
            <a href="/surfshark" className="transition hover:text-white">
              Surfshark
            </a>
            <a href="/travel" className="transition hover:text-white">
              Travel
            </a>
            <a href="/travel-tech" className="transition hover:text-white">
              Travel Tech
            </a>
            <a href="/guides" className="transition hover:text-white">
              Guides
            </a>
            <a href="/blog" className="transition hover:text-white">
              Blog
            </a>
            <a
              href="/deals"
              className="rounded-md bg-emerald-500/15 px-2.5 py-1 text-emerald-300 transition hover:bg-emerald-500/25"
            >
              Deals
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/search"
              className="rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-slate-200 transition hover:border-slate-600 hover:bg-slate-800"
            >
              Search
            </a>
            <a
              href="/all-tools"
              className="rounded-lg bg-sky-500 px-4 py-2 text-xs font-bold text-slate-950 transition hover:bg-sky-400"
            >
              All Tools
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero & Search */}
        <section className="border-b border-slate-800/70 py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold text-sky-300">
              <span>Independent Tech, AI, VPN &amp; Travel Gear Testing</span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Honest software &amp; tech reviews backed by{" "}
              <span className="text-sky-400">real-world testing.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
              We benchmark AI tools, VPN providers, and travel tech so you can
              skip the marketing hype and pick the right tool the first time.
            </p>

            {/* Search Form pointing to /search */}
            <form
              action="/search"
              method="GET"
              className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
            >
              <input
                type="text"
                name="q"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search reviews, comparisons, AI tools, Surfshark, VPNs..."
                className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3.5 text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-xl bg-sky-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
              >
                Search Reviews
              </button>
            </form>

            {/* Quick Topic Pills */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-xs">
              <span className="text-slate-500">Popular hubs:</span>
              <a
                href="/ai"
                className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-slate-300 hover:border-sky-500/50 hover:text-white"
              >
                AI Tools
              </a>
              <a
                href="/vpn"
                className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-slate-300 hover:border-sky-500/50 hover:text-white"
              >
                VPNs
              </a>
              <a
                href="/surfshark"
                className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-sky-300 hover:border-sky-500/50 hover:text-white"
              >
                Surfshark
              </a>
              <a
                href="/travel"
                className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-slate-300 hover:border-sky-500/50 hover:text-white"
              >
                Travel
              </a>
              <a
                href="/travel-tech"
                className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-slate-300 hover:border-sky-500/50 hover:text-white"
              >
                Travel Tech
              </a>
              <a
                href="/comparisons"
                className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-slate-300 hover:border-sky-500/50 hover:text-white"
              >
                Comparisons
              </a>
              <a
                href="/best"
                className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-slate-300 hover:border-sky-500/50 hover:text-white"
              >
                Best Of
              </a>
              <a
                href="/blog"
                className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-slate-300 hover:border-sky-500/50 hover:text-white"
              >
                Blog
              </a>
              <a
                href="/deals"
                className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-emerald-300 hover:border-emerald-500/50"
              >
                Active Deals
              </a>
            </div>
          </div>
        </section>

        {/* Core Category Hubs */}
        <section className="border-b border-slate-800/70 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  Explore Coverage Verticals
                </h2>
                <p className="mt-1.5 text-sm text-slate-400">
                  Dive into a dedicated vertical or view{" "}
                  <a
                    href="/categories"
                    className="text-sky-400 underline hover:text-sky-300"
                  >
                    all categories
                  </a>{" "}
                  and{" "}
                  <a
                    href="/category"
                    className="text-sky-400 underline hover:text-sky-300"
                  >
                    category index
                  </a>
                  .
                </p>
              </div>

              {/* Interactive Hub Filter */}
              <div className="flex flex-wrap gap-2 text-xs">
                {[
                  { id: "all", label: "All Hubs" },
                  { id: "ai", label: "AI" },
                  { id: "vpn", label: "VPN" },
                  { id: "travel", label: "Travel" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSelectedFilter(tab.id)}
                    className={`rounded-lg px-3 py-1.5 font-semibold transition ${
                      selectedFilter === tab.id
                        ? "bg-sky-500 text-slate-950"
                        : "border border-slate-800 bg-slate-900 text-slate-300 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredHubs.map((hub) => (
                <div
                  key={hub.name}
                  className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition hover:border-slate-700"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="rounded-md bg-sky-500/10 px-2.5 py-1 text-xs font-semibold text-sky-400">
                        {hub.badge}
                      </span>
                      <span className="text-xs text-slate-500">{hub.count}</span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-white">
                      <a href={hub.href} className="hover:text-sky-400">
                        {hub.name}
                      </a>
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {hub.description}
                    </p>
                  </div>

                  <div className="mt-6 space-y-2 border-t border-slate-800/80 pt-4 text-xs font-semibold">
                    <a
                      href={hub.href}
                      className="block text-sky-400 hover:text-sky-300"
                    >
                      Browse {hub.name} →
                    </a>
                    {hub.secondaryHref && (
                      <a
                        href={hub.secondaryHref}
                        className="block text-slate-300 hover:text-white"
                      >
                        {hub.secondaryLabel}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Editorial, Comparisons & Spotlight */}
        <section className="border-b border-slate-800/70 py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Top Picks, Comparisons &amp; Featured Reviews
              </h2>
              <div className="flex items-center gap-5 text-sm font-semibold">
                <a
                  href="/deals"
                  className="text-emerald-400 hover:text-emerald-300"
                >
                  Latest Deals →
                </a>
                <a
                  href="/reviews"
                  className="text-sky-400 hover:text-sky-300"
                >
                  View All Reviews →
                </a>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {FEATURED_COMPARISONS.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-7 transition hover:border-sky-500/40 hover:bg-slate-900"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold uppercase tracking-wider text-sky-400">
                        {item.category}
                      </span>
                      <span className="text-slate-500">{item.readTime}</span>
                    </div>
                    <h3 className="mt-3 text-xl font-bold text-white group-hover:text-sky-400">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">
                      {item.summary}
                    </p>
                  </div>

                  <span className="mt-6 inline-block text-xs font-bold text-slate-200 group-hover:text-sky-400">
                    Read Full Breakdown →
                  </span>
                </a>
              ))}
            </div>

            {/* Guides, Reviews & Blog Strip */}
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {EDITORIAL_HUBS.map((hub) => (
                <a
                  key={hub.title}
                  href={hub.href}
                  className="rounded-2xl border border-slate-800/80 bg-slate-900/30 p-6 transition hover:border-slate-700"
                >
                  <span className="text-xs font-semibold text-emerald-400">
                    {hub.tag}
                  </span>
                  <h3 className="mt-2 text-base font-bold text-white">
                    {hub.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    {hub.excerpt}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Editorial Standards & Methodology Trust Banner */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 md:p-12">
              <div className="grid items-center gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                    Editorial Independence
                  </span>
                  <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                    How the NorthSky Team tests &amp; scores every product
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
                    No vendor can pay to alter our ratings or comparison rankings.
                    Every tool goes through standardized benchmarks for speed,
                    privacy, usability, and real-world value before earning a
                    spot in our recommendations.
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href="/methodology"
                    className="rounded-xl bg-sky-500 px-5 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-sky-400"
                  >
                    Read Our Testing Methodology
                  </a>
                  <a
                    href="/authors"
                    className="rounded-xl border border-slate-700 bg-slate-800 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-slate-700"
                  >
                    Meet Our Authors &amp; Editorial Team
                  </a>
                  <a
                    href="/about"
                    className="rounded-xl border border-slate-800 bg-slate-950/60 px-5 py-2.5 text-center text-xs font-medium text-slate-300 transition hover:text-white"
                  >
                    About NorthSky Reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Comprehensive Site Footer with All Routes */}
      <footer className="border-t border-slate-800/80 bg-slate-950 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand Column */}
            <div>
              <a href="/" className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500 text-xs font-extrabold text-slate-950">
                  NS
                </span>
                <span className="text-base font-bold text-white">
                  NorthSky Reviews
                </span>
              </a>
              <p className="mt-4 text-xs leading-relaxed text-slate-400">
                Independent reviews, side-by-side comparisons, and buying
                guides for AI software, VPN security, and modern travel tech.
              </p>
            </div>

            {/* Categories & Spotlights Column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                Categories &amp; Spotlights
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
                <li>
                  <a href="/ai" className="hover:text-white">
                    AI Tools &amp; Software
                  </a>
                </li>
                <li>
                  <a href="/vpn" className="hover:text-white">
                    VPN &amp; Privacy
                  </a>
                </li>
                <li>
                  <a href="/surfshark" className="hover:text-white">
                    Surfshark VPN Review
                  </a>
                </li>
                <li>
                  <a href="/travel" className="hover:text-white">
                    Travel
                  </a>
                </li>
                <li>
                  <a href="/travel-tech" className="hover:text-white">
                    Travel Tech
                  </a>
                </li>
                <li>
                  <a href="/categories" className="hover:text-white">
                    All Categories
                  </a>
                </li>
                <li>
                  <a href="/category" className="hover:text-white">
                    Category Directory
                  </a>
                </li>
              </ul>
            </div>

            {/* Reviews, Blog & Tools Column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                Reviews, Blog &amp; Tools
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
                <li>
                  <a href="/reviews" className="hover:text-white">
                    Latest Reviews
                  </a>
                </li>
                <li>
                  <a href="/best" className="hover:text-white">
                    Best-Of Lists
                  </a>
                </li>
                <li>
                  <a href="/comparisons" className="hover:text-white">
                    Head-to-Head Comparisons
                  </a>
                </li>
                <li>
                  <a href="/guides" className="hover:text-white">
                    How-To Guides
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:text-white">
                    Editorial Blog
                  </a>
                </li>
                <li>
                  <a href="/deals" className="hover:text-white">
                    Verified Deals
                  </a>
                </li>
                <li>
                  <a href="/all-tools" className="hover:text-white">
                    All Tools Index
                  </a>
                </li>
                <li>
                  <a href="/search" className="hover:text-white">
                    Search Site
                  </a>
                </li>
              </ul>
            </div>

            {/* Company & Disclosures Column */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                Company &amp; Policies
              </h3>
              <ul className="mt-4 space-y-2.5 text-xs text-slate-400">
                <li>
                  <a href="/about" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="/authors" className="hover:text-white">
                    All Authors
                  </a>
                </li>
                <li>
                  <a href="/authors/northsky-team" className="hover:text-white">
                    NorthSky Editorial Team
                  </a>
                </li>
                <li>
                  <a href="/methodology" className="hover:text-white">
                    Testing Methodology
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="/affiliate-disclosure" className="hover:text-white">
                    Affiliate Disclosure
                  </a>
                </li>
                <li>
                  <a href="/affiliates" className="hover:text-white">
                    Affiliates &amp; Partners
                  </a>
                </li>
                <li>
                  <a href="/disclosure" className="hover:text-white">
                    Editorial Disclosure
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="hover:text-white">
                    Privacy Summary
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-white">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 text-xs text-slate-500 sm:flex-row">
            <p>© {new Date().getFullYear()} NorthSky Reviews. All rights reserved.</p>
            <p>
              Independent reviews • See our{" "}
              <a
                href="/affiliate-disclosure"
                className="underline hover:text-slate-300"
              >
                Affiliate Disclosure
              </a>{" "}
              &amp;{" "}
              <a href="/methodology" className="underline hover:text-slate-300">
                Methodology
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
