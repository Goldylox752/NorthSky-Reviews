import Link from "next/link";

import { tools } from "@/app/data/tools";
import { comparisons } from "@/app/data/comparisons";
import { guides } from "@/app/data/guides";

export const dynamic = "force-static";

const SITE_URL = "https://north-sky-reviews-f1gr.vercel.app";
const PAGE_URL = `${SITE_URL}/reviews`;

export const metadata = {
  title:
    "AI & Software Reviews 2026 | Best Technology Tools | NorthSky Reviews",

  description:
    "Read NorthSky Reviews for AI, software, VPN, eSIM, productivity, ecommerce, and business technology reviews. Compare features, pricing, usability, strengths, weaknesses, and alternatives.",

  keywords: [
    "AI reviews 2026",
    "AI tool reviews",
    "software reviews",
    "technology reviews",
    "best AI tools",
    "SaaS reviews",
    "VPN reviews",
    "software comparisons",
    "business software reviews",
    "ecommerce software reviews",
    "technology buying guides",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "AI & Software Reviews 2026 | NorthSky Reviews",
    description:
      "Research AI tools, software, VPNs, productivity platforms, ecommerce tools, and business technology.",
    url: PAGE_URL,
    siteName: "NorthSky Reviews",
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "AI & Software Reviews 2026 | NorthSky Reviews",
    description:
      "Explore AI, software, VPN, ecommerce, productivity, and business technology reviews.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function ReviewsPage() {
  const safeTools = Array.isArray(tools)
    ? tools.filter(
        (tool) =>
          tool &&
          tool.name &&
          tool.slug
      )
    : [];

  const safeComparisons = Array.isArray(comparisons)
    ? comparisons.filter(
        (comparison) =>
          comparison &&
          comparison.slug
      )
    : [];

  const safeGuides = Array.isArray(guides)
    ? guides.filter(
        (guide) =>
          guide &&
          guide.slug &&
          guide.title
      )
    : [];

  const featuredReviews = [...safeTools]
    .sort(
      (a, b) =>
        Number(b.rating || 0) -
        Number(a.rating || 0)
    )
    .slice(0, 12);

  const categories = [
    ...new Set(
      safeTools
        .map((tool) => tool.category)
        .filter(Boolean)
    ),
  ];

  const popularComparisons =
    safeComparisons.slice(0, 6);

  const featuredGuides =
    safeGuides
      .filter((guide) => guide.featured)
      .slice(0, 6);

  const displayedGuides =
    featuredGuides.length > 0
      ? featuredGuides
      : safeGuides.slice(0, 6);

  const reviewItems =
    featuredReviews.map(
      (tool, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: tool.name,
        url: `${SITE_URL}/reviews/${tool.slug}`,
      })
    );

  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name:
          "AI & Software Reviews 2026 | NorthSky Reviews",
        description:
          "Technology reviews covering AI tools, software, VPNs, ecommerce, productivity, and business technology.",

        isPartOf: {
          "@type": "WebSite",
          "@id": `${SITE_URL}#website`,
          name: "NorthSky Reviews",
          url: SITE_URL,
        },

        breadcrumb: {
          "@id": `${PAGE_URL}#breadcrumb`,
        },

        mainEntity: {
          "@id": `${PAGE_URL}#review-list`,
        },
      },

      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#review-list`,
        name: "NorthSky Reviews",
        numberOfItems: featuredReviews.length,
        itemListElement: reviewItems,
      },

      {
        "@type": "BreadcrumbList",
        "@id": `${PAGE_URL}#breadcrumb`,

        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Reviews",
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* STRUCTURED DATA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* HERO */}

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 px-6 py-24 text-white md:py-28">

        <div className="mx-auto max-w-6xl text-center">

          <span className="inline-flex rounded-full bg-blue-500/20 px-5 py-2 text-sm font-black text-blue-300 ring-1 ring-blue-400/20">
            🔬 NorthSky Reviews
          </span>

          <h1 className="mt-8 text-5xl font-black tracking-tight md:text-7xl">
            AI & Software Reviews
            <span className="text-blue-400">
              {" "}2026
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            Research AI tools, software, VPNs, productivity
            platforms, ecommerce technology, and business
            software before you buy.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/all-tools"
              className="rounded-xl bg-blue-600 px-8 py-4 font-black transition hover:bg-blue-500"
            >
              Explore Tools →
            </Link>

            <Link
              href="/comparisons"
              className="rounded-xl border border-white/20 px-8 py-4 font-black transition hover:bg-white/10"
            >
              Compare Tools →
            </Link>

            <Link
              href="/guides"
              className="rounded-xl border border-white/20 px-8 py-4 font-black transition hover:bg-white/10"
            >
              Buying Guides →
            </Link>

          </div>

          {/* STATS */}

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <Stat
              value={safeTools.length}
              label="Products in Database"
            />

            <Stat
              value={safeComparisons.length}
              label="Comparisons"
            />

            <Stat
              value={safeGuides.length}
              label="Buying Guides"
            />

            <Stat
              value={categories.length}
              label="Categories"
            />

          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-4xl">

          <p className="text-sm font-black uppercase tracking-widest text-blue-600">
            Technology Research
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Find the Right Technology
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Choosing software can be difficult. NorthSky Reviews
            organizes product information into reviews, comparisons,
            rankings, and buying guides so you can research your
            options in one place.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Our reviews focus on practical factors including features,
            pricing, usability, performance, strengths, weaknesses,
            use cases, and alternatives.
          </p>

        </div>

      </section>

      {/* REVIEWS */}

      <section
        id="reviews"
        className="px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-sm font-black uppercase tracking-widest text-blue-600">
              Featured Technology Reviews
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Explore Our Reviews
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore our highest-rated products and discover
              how different technology platforms compare.
            </p>

          </div>

          {featuredReviews.length > 0 ? (

            <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

              {featuredReviews.map((tool) => (

                <article
                  key={tool.slug}
                  className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >

                  <div className="flex items-center justify-between gap-3">

                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black uppercase text-blue-700">
                      {tool.category || "Technology"}
                    </span>

                    {tool.rating !== undefined && (
                      <span className="font-black text-emerald-600">
                        ⭐ {tool.rating}/10
                      </span>
                    )}

                  </div>

                  {tool.badge && (
                    <div className="mt-5 text-xs font-black uppercase tracking-wide text-slate-400">
                      {tool.badge}
                    </div>
                  )}

                  <h3 className="mt-3 text-2xl font-black group-hover:text-blue-600">
                    {tool.name}
                  </h3>

                  <p className="mt-4 line-clamp-4 text-sm leading-7 text-slate-600">
                    {tool.description ||
                      `Explore the NorthSky Reviews review of ${tool.name}.`}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3">

                    <Score
                      label="Features"
                      value={tool.featureScore}
                    />

                    <Score
                      label="Value"
                      value={tool.valueScore}
                    />

                    <Score
                      label="Ease of Use"
                      value={tool.easeScore}
                    />

                    <Score
                      label="Performance"
                      value={tool.performanceScore}
                    />

                  </div>

                  <div className="mt-7">

                    <Link
                      href={`/reviews/${tool.slug}`}
                      className="block rounded-xl bg-slate-950 px-5 py-3 text-center font-black text-white transition hover:bg-blue-600"
                    >
                      Read Full Review →
                    </Link>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            <EmptyState />

          )}

        </div>

      </section>

      {/* CATEGORIES */}

      {categories.length > 0 && (

        <section className="bg-slate-50 px-6 py-24">

          <div className="mx-auto max-w-7xl">

            <div className="text-center">

              <p className="text-sm font-black uppercase tracking-widest text-blue-600">
                Browse By Category
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Explore Technology Categories
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Browse the technology categories covered by
                NorthSky Reviews.
              </p>

            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {categories.map((category) => {

                const categoryToolCount =
                  safeTools.filter(
                    (tool) =>
                      tool.category === category
                  ).length;

                const categorySlug =
                  safeTools.find(
                    (tool) =>
                      tool.category === category &&
                      tool.categorySlug
                  )?.categorySlug;

                return (
                  <Link
                    key={category}
                    href={
                      categorySlug
                        ? `/categories/${categorySlug}`
                        : "/all-tools"
                    }
                    className="group rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                  >

                    <h3 className="text-xl font-black group-hover:text-blue-600">
                      {category}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600">
                      {categoryToolCount}{" "}
                      {categoryToolCount === 1
                        ? "product"
                        : "products"}
                    </p>

                    <span className="mt-5 block font-black text-blue-600">
                      Explore →
                    </span>

                  </Link>
                );

              })}

            </div>

          </div>

        </section>

      )}

      {/* GUIDES */}

      {displayedGuides.length > 0 && (

        <section className="px-6 py-24">

          <div className="mx-auto max-w-7xl">

            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

              <div>

                <p className="text-sm font-black uppercase tracking-widest text-blue-600">
                  Research Hub
                </p>

                <h2 className="mt-3 text-4xl font-black md:text-5xl">
                  Buying Guides
                </h2>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                  Use our guides to discover recommended tools
                  for specific needs and use cases.
                </p>

              </div>

              <Link
                href="/guides"
                className="font-black text-blue-600 hover:text-blue-800"
              >
                View All Guides →
              </Link>

            </div>

            <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

              {displayedGuides.map((guide) => (

                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black uppercase text-blue-700">
                    {guide.category || "Technology"}
                  </span>

                  <h3 className="mt-6 text-2xl font-black leading-tight group-hover:text-blue-600">
                    {guide.title}
                  </h3>

                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
                    {guide.description ||
                      "Explore this NorthSky Reviews technology buying guide."}
                  </p>

                  <span className="mt-6 block font-black text-blue-600">
                    Read Guide →
                  </span>

                </Link>

              ))}

            </div>

          </div>

        </section>

      )}

      {/* COMPARISONS */}

      {popularComparisons.length > 0 && (

        <section className="bg-slate-50 px-6 py-24">

          <div className="mx-auto max-w-7xl">

            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

              <div>

                <p className="text-sm font-black uppercase tracking-widest text-blue-600">
                  Compare Before Buying
                </p>

                <h2 className="mt-3 text-4xl font-black md:text-5xl">
                  Popular Comparisons
                </h2>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                  Compare competing products side by side
                  before choosing a technology solution.
                </p>

              </div>

              <Link
                href="/comparisons"
                className="font-black text-blue-600 hover:text-blue-800"
              >
                View All Comparisons →
              </Link>

            </div>

            <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

              {popularComparisons.map((comparison) => (

                <Link
                  key={comparison.slug}
                  href={`/comparisons/${comparison.slug}`}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
                >

                  <h3 className="text-2xl font-black group-hover:text-blue-600">
                    {comparison.title}
                  </h3>

                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
                    {comparison.description ||
                      "Compare these products and discover which option may be the better fit."}
                  </p>

                  <span className="mt-6 block font-black text-blue-600">
                    View Comparison →
                  </span>

                </Link>

              ))}

            </div>

          </div>

        </section>

      )}

      {/* METHODOLOGY */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-6xl rounded-3xl bg-slate-950 p-10 text-white md:p-14">

          <div className="max-w-3xl">

            <p className="text-sm font-black uppercase tracking-widest text-blue-400">
              Editorial Approach
            </p>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              How We Evaluate Technology
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              NorthSky Reviews evaluates products using practical
              factors that matter when researching technology,
              including features, pricing, usability, performance,
              use cases, and overall value.
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <Method
              title="Features"
              description="We look at capabilities, tools, integrations, and important product functions."
            />

            <Method
              title="Pricing"
              description="We consider available plans, pricing structure, limits, and overall cost."
            />

            <Method
              title="Usability"
              description="We consider setup, learning curve, interface, and everyday usability."
            />

            <Method
              title="Value"
              description="We consider who the product is best suited for and how it compares with alternatives."
            />

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-blue-600 px-6 py-20 text-center text-white">

        <div className="mx-auto max-w-4xl">

          <h2 className="text-4xl font-black md:text-5xl">
            Research Before You Buy
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Explore reviews, comparisons, rankings, and
            buying guides from NorthSky Reviews.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <Link
              href="/all-tools"
              className="rounded-xl bg-white px-8 py-4 font-black text-blue-600 transition hover:bg-slate-100"
            >
              Explore All Tools →
            </Link>

            <Link
              href="/guides"
              className="rounded-xl border border-white/30 px-8 py-4 font-black transition hover:bg-white/10"
            >
              Read Buying Guides →
            </Link>

          </div>

        </div>

      </section>

      {/* DISCLOSURE */}

      <section className="border-t border-slate-200 px-6 py-10">

        <p className="mx-auto max-w-4xl text-center text-xs leading-6 text-slate-500">

          <strong className="text-slate-700">
            Affiliate Disclosure:
          </strong>{" "}

          NorthSky Reviews may earn commissions from
          qualifying affiliate partnerships. Affiliate
          relationships help support the website and do
          not determine editorial rankings or recommendations.

        </p>

      </section>

    </main>
  );
}

/* -----------------------------------------
   STAT
----------------------------------------- */

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10">

      <p className="text-4xl font-black">
        {value}
      </p>

      <p className="mt-2 text-sm text-slate-300">
        {label}
      </p>

    </div>
  );
}

/* -----------------------------------------
   SCORE
----------------------------------------- */

function Score({ label, value }) {
  if (
    value === undefined ||
    value === null ||
    value === ""
  ) {
    return null;
  }

  return (
    <div className="rounded-xl bg-slate-50 p-3">

      <p className="text-xs font-bold text-slate-500">
        {label}
      </p>

      <p className="mt-1 font-black text-slate-900">
        {value}/10
      </p>

    </div>
  );
}

/* -----------------------------------------
   METHOD
----------------------------------------- */

function Method({
  title,
  description,
}) {
  return (
    <div className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">

      <h3 className="font-black">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {description}
      </p>

    </div>
  );
}

/* -----------------------------------------
   EMPTY STATE
----------------------------------------- */

function EmptyState() {
  return (
    <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-12 text-center">

      <div className="text-4xl">
        🔬
      </div>

      <h3 className="mt-5 text-2xl font-black">
        Reviews Coming Soon
      </h3>

      <p className="mx-auto mt-3 max-w-xl text-slate-600">
        NorthSky Reviews is building a growing library
        of AI, software, security, productivity, and
        business technology reviews.
      </p>

    </div>
  );
}