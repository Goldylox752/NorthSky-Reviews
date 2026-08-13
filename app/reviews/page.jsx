import Link from "next/link";
import { tools } from "@/app/data/tools";
import { comparisons } from "@/app/data/comparisons";

export const dynamic = "force-static";

const SITE_URL = "https://north-sky-reviews-f1gr.vercel.app";
const PAGE_URL = `${SITE_URL}/reviews`;

export const metadata = {
  title:
    "AI & Software Reviews 2026 | Technology Reviews | NorthSky Reviews",

  description:
    "Explore NorthSky Reviews for AI tools, software, SaaS, productivity, automation, VPN, cybersecurity, developer, and business technology reviews. Compare features, pricing, ratings, and alternatives.",

  keywords: [
    "AI software reviews",
    "AI tool reviews",
    "software reviews 2026",
    "technology reviews",
    "best AI tools",
    "SaaS reviews",
    "VPN reviews",
    "cybersecurity reviews",
    "software comparisons",
    "business software reviews",
    "developer tool reviews",
    "technology buying guides",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "AI & Software Reviews 2026 | NorthSky Reviews",

    description:
      "Explore reviews of AI tools, software, SaaS platforms, cybersecurity products, developer tools, and business technology.",

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
      "Explore AI, software, SaaS, cybersecurity, VPN, and technology reviews.",
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
  const safeTools = Array.isArray(tools) ? tools : [];

  const safeComparisons = Array.isArray(comparisons)
    ? comparisons
    : [];

  const featuredReviews = [...safeTools]
    .filter(Boolean)
    .sort(
      (a, b) =>
        Number(b?.rating || 0) -
        Number(a?.rating || 0)
    )
    .slice(0, 12);

  const popularComparisons =
    safeComparisons
      .filter(Boolean)
      .slice(0, 6);

  const itemList = featuredReviews.map(
    (tool, index) => ({
      "@type": "ListItem",

      position: index + 1,

      name:
        tool?.name ||
        "Technology Review",

      url:
        `${SITE_URL}/reviews/${encodeURIComponent(
          tool?.slug || ""
        )}`,
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
          "NorthSky Reviews covering AI tools, software, SaaS platforms, cybersecurity products, developer tools, VPNs, and business technology.",

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
          "@id": `${PAGE_URL}#reviews`,
        },
      },

      {
        "@type": "ItemList",

        "@id": `${PAGE_URL}#reviews`,

        name:
          "Featured AI and Software Reviews",

        numberOfItems:
          featuredReviews.length,

        itemListElement:
          itemList,
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
          __html:
            JSON.stringify(schema),
        }}
      />

      {/* HERO */}

      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-6 py-24 text-white">

        <div className="mx-auto max-w-6xl text-center">

          <span className="inline-flex rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300 ring-1 ring-blue-400/20">
            🔬 NorthSky Technology Reviews
          </span>

          <h1 className="mt-8 text-5xl font-black tracking-tight md:text-7xl">
            AI & Software Reviews
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            Explore detailed reviews of AI tools,
            SaaS platforms, productivity software,
            automation tools, VPNs, cybersecurity
            products, developer software, and business
            technology.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/ai"
              className="rounded-xl bg-blue-600 px-8 py-4 font-bold transition hover:bg-blue-700"
            >
              Explore AI Tools →
            </Link>

            <Link
              href="/comparisons"
              className="rounded-xl border border-white/20 px-8 py-4 font-bold transition hover:bg-white/10"
            >
              Compare Software →
            </Link>

            <Link
              href="/best"
              className="rounded-xl border border-white/20 px-8 py-4 font-bold transition hover:bg-white/10"
            >
              Best Software →
            </Link>

          </div>

          {/* STATS */}

          <div className="mt-16 grid gap-5 sm:grid-cols-2 md:grid-cols-4">

            <Stat
              value={`${safeTools.length}+`}
              label="Products Reviewed"
            />

            <Stat
              value={`${safeComparisons.length}+`}
              label="Comparisons"
            />

            <Stat
              value="25+"
              label="Technology Categories"
            />

            <Stat
              value="2026"
              label="Current Rankings"
            />

          </div>

        </div>

      </section>

      {/* FEATURED REVIEWS */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-sm font-black uppercase tracking-widest text-blue-600">
              Featured Reviews
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Technology Reviews
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Research popular AI platforms, software
              products, SaaS tools, cybersecurity services,
              productivity platforms, and business technology.
            </p>

          </div>

          {featuredReviews.length > 0 ? (

            <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

              {featuredReviews.map((tool) => (

                <Link
                  key={tool.slug}
                  href={`/reviews/${tool.slug}`}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
                >

                  <div className="flex items-center justify-between gap-3">

                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black text-blue-700">
                      {tool.category ||
                        "Technology"}
                    </span>

                    {tool.rating && (
                      <span className="font-black text-green-600">
                        ⭐ {tool.rating}
                      </span>
                    )}

                  </div>

                  <h3 className="mt-6 text-2xl font-black group-hover:text-blue-600">
                    {tool.name}
                  </h3>

                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
                    {tool.description ||
                      `Read our NorthSky Reviews review of ${tool.name}.`}
                  </p>

                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate-100 pt-5 text-sm">

                    <span className="font-bold text-slate-500">
                      {tool.price ||
                        "Free & Paid"}
                    </span>

                    <span className="rounded-full bg-slate-100 px-3 py-1 font-bold text-slate-600">
                      Review
                    </span>

                  </div>

                  <span className="mt-7 block font-black text-blue-600">
                    Read Full Review →
                  </span>

                </Link>

              ))}

            </div>

          ) : (

            <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center">

              <h3 className="text-2xl font-black">
                Reviews Coming Soon
              </h3>

              <p className="mt-3 text-slate-600">
                New technology reviews are being added
                regularly.
              </p>

            </div>

          )}

        </div>

      </section>

      {/* CATEGORIES */}

      <section className="bg-slate-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm font-black uppercase tracking-widest text-blue-600">
              Technology Categories
            </p>

            <h2 className="mt-3 text-4xl font-black">
              Explore Technology
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Find technology reviews by product type,
              industry, and use case.
            </p>

          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <CategoryLink
              href="/ai"
              title="AI Tools"
              description="AI assistants, generators, research tools, and productivity platforms."
            />

            <CategoryLink
              href="/software"
              title="Software"
              description="Business, productivity, ecommerce, and general software reviews."
            />

            <CategoryLink
              href="/vpn"
              title="VPN & Security"
              description="VPN, privacy, security, and online protection reviews."
            />

            <CategoryLink
              href="/comparisons"
              title="Comparisons"
              description="Compare competing technology products before choosing."
            />

          </div>

        </div>

      </section>

      {/* COMPARISONS */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

            <div>

              <p className="text-sm font-black uppercase tracking-widest text-blue-600">
                Software Comparisons
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Popular Comparisons
              </h2>

              <p className="mt-4 max-w-2xl text-lg text-slate-600">
                Compare features, pricing, capabilities,
                strengths, weaknesses, and alternatives
                before choosing your next software platform.
              </p>

            </div>

            <Link
              href="/comparisons"
              className="font-black text-blue-600 hover:text-blue-800"
            >
              View All Comparisons →
            </Link>

          </div>

          {popularComparisons.length > 0 && (

            <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

              {popularComparisons.map((item) => (

                <Link
                  key={item.slug}
                  href={`/comparisons/${item.slug}`}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >

                  <h3 className="text-2xl font-black">
                    {item.title}
                  </h3>

                  <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
                    {item.description ||
                      "Compare these technology products and discover which option may be right for you."}
                  </p>

                  <span className="mt-7 block font-black text-blue-600">
                    Read Comparison →
                  </span>

                </Link>

              ))}

            </div>

          )}

        </div>

      </section>

      {/* METHODOLOGY */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-5xl rounded-3xl bg-slate-950 p-10 text-center text-white md:p-14">

          <p className="text-sm font-black uppercase tracking-widest text-blue-400">
            Review Methodology
          </p>

          <h2 className="mt-4 text-4xl font-black">
            How We Evaluate Technology
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
            NorthSky Reviews evaluates products using
            factors such as features, pricing, usability,
            integrations, security, performance, support,
            alternatives, and overall value.
          </p>

          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">

            <Method
              title="Features"
              description="Capabilities, tools, integrations, and functionality."
            />

            <Method
              title="Pricing"
              description="Plans, costs, limits, and overall pricing structure."
            />

            <Method
              title="Performance"
              description="Usability, reliability, speed, and practical experience."
            />

            <Method
              title="Value"
              description="Overall usefulness compared with competing options."
            />

          </div>

          <Link
            href="/methodology"
            className="mt-10 inline-block font-black text-blue-400 hover:text-white"
          >
            Read Our Full Methodology →
          </Link>

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="bg-blue-600 px-6 py-20 text-center text-white">

        <div className="mx-auto max-w-4xl">

          <h2 className="text-4xl font-black md:text-5xl">
            Find Better Software Faster
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100 md:text-xl">
            Read reviews, compare technology, and explore
            buying guides before choosing your next tool.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <Link
              href="/best"
              className="rounded-xl bg-white px-8 py-4 font-black text-blue-600 transition hover:bg-slate-100"
            >
              Best Software →
            </Link>

            <Link
              href="/guides"
              className="rounded-xl border border-white/30 px-8 py-4 font-black text-white transition hover:bg-white/10"
            >
              Buying Guides →
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}

/* -----------------------------------------
   COMPONENTS
----------------------------------------- */

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/10">

      <p className="text-4xl font-black">
        {value}
      </p>

      <p className="mt-1 text-sm text-slate-300">
        {label}
      </p>

    </div>
  );
}

function CategoryLink({
  href,
  title,
  description,
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
    >

      <h3 className="text-xl font-black">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-600">
        {description}
      </p>

      <span className="mt-4 block text-sm font-black text-blue-600">
        Explore →
      </span>

    </Link>
  );
}

function Method({
  title,
  description,
}) {
  return (
    <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">

      <p className="font-black text-white">
        {title}
      </p>

      <p className="mt-2 text-sm leading-6 text-slate-400">
        {description}
      </p>

    </div>
  );
}