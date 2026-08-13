import Link from "next/link";
import { comparisons } from "@/app/data/comparisons";

const SITE_URL = "https://north-sky-reviews-f1gr.vercel.app";
const PAGE_URL = `${SITE_URL}/comparisons`;

export const metadata = {
  title:
    "Software Comparisons 2026 | AI, VPN & SaaS Comparisons | NorthSky Reviews",

  description:
    "Compare AI tools, software, VPNs, SaaS platforms, productivity apps, and technology services with detailed side-by-side comparisons from NorthSky Reviews.",

  keywords: [
    "software comparisons",
    "AI software comparisons",
    "AI tool comparisons",
    "ChatGPT vs Claude",
    "VPN comparisons",
    "SaaS comparisons",
    "software alternatives",
    "best software 2026",
    "technology comparisons",
    "NorthSky Reviews",
  ],

  metadataBase: new URL(SITE_URL),

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Software Comparisons 2026 | NorthSky Reviews",

    description:
      "Compare AI tools, software, VPNs, SaaS platforms, and technology products side by side.",

    url: PAGE_URL,

    siteName: "NorthSky Reviews",

    locale: "en_CA",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Software Comparisons 2026 | NorthSky Reviews",

    description:
      "Compare AI tools, software, VPNs, SaaS platforms, and technology products.",
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

export default function ComparisonsPage() {
  const safeComparisons = Array.isArray(comparisons)
    ? comparisons.filter(Boolean)
    : [];

  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "CollectionPage",

        "@id": `${PAGE_URL}#webpage`,

        url: PAGE_URL,

        name:
          "Software Comparisons 2026 | NorthSky Reviews",

        description:
          "Side-by-side comparisons of AI tools, software, VPNs, SaaS platforms, productivity apps, and technology services.",

        isPartOf: {
          "@type": "WebSite",

          "@id": `${SITE_URL}#website`,

          name: "NorthSky Reviews",

          url: SITE_URL,
        },

        breadcrumb: {
          "@id": `${PAGE_URL}#breadcrumb`,
        },
      },

      {
        "@type": "ItemList",

        "@id": `${PAGE_URL}#comparison-list`,

        name: "NorthSky Software Comparisons",

        numberOfItems: safeComparisons.length,

        itemListElement: safeComparisons.map(
          (comparison, index) => ({
            "@type": "ListItem",

            position: index + 1,

            name:
              comparison.title ||
              "Software Comparison",

            url:
              `${SITE_URL}/comparisons/${comparison.slug}`,
          })
        ),
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

            name: "Comparisons",

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

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-6 py-24 text-white">

        <div className="mx-auto max-w-6xl text-center">

          <span className="inline-flex rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300 ring-1 ring-blue-400/20">
            ⚖️ Software Comparisons
          </span>

          <h1 className="mt-8 text-5xl font-black tracking-tight md:text-7xl">
            Compare Before You Choose
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            Compare AI tools, software, VPNs, SaaS platforms,
            productivity apps, and technology services to
            find the option that fits your needs.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/reviews"
              className="rounded-xl bg-blue-600 px-8 py-4 font-bold transition hover:bg-blue-700"
            >
              Browse Reviews →
            </Link>

            <Link
              href="/guides"
              className="rounded-xl border border-white/20 px-8 py-4 font-bold transition hover:bg-white/10"
            >
              Buying Guides →
            </Link>

          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-sm font-black uppercase tracking-widest text-blue-600">
              Side-by-Side Research
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Find the Right Technology
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Software can look similar on the surface while
              offering very different features, pricing,
              capabilities, and limitations. Our comparisons
              help you understand the differences before you
              make a decision.
            </p>

          </div>

          {/* STATS */}

          <div className="mt-12 grid gap-5 sm:grid-cols-3">

            <Stat
              value={`${safeComparisons.length}+`}
              label="Comparisons"
            />

            <Stat
              value="2026"
              label="Current Research"
            />

            <Stat
              value="Multiple"
              label="Technology Categories"
            />

          </div>

        </div>

      </section>

      {/* COMPARISON GRID */}

      <section className="bg-slate-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="text-sm font-black uppercase tracking-widest text-blue-600">
              Explore Comparisons
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Popular Software Comparisons
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              Explore detailed comparisons covering features,
              pricing, strengths, weaknesses, use cases, and
              alternatives.
            </p>

          </div>

          {safeComparisons.length > 0 ? (

            <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

              {safeComparisons.map((comparison) => (

                <Link
                  key={comparison.slug}
                  href={`/comparisons/${comparison.slug}`}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
                >

                  <div className="flex items-center justify-between">

                    <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black uppercase tracking-wide text-blue-700">
                      Comparison
                    </span>

                    <span className="text-xl">
                      ⚖️
                    </span>

                  </div>

                  <h3 className="mt-6 text-2xl font-black leading-tight group-hover:text-blue-600">
                    {comparison.title}
                  </h3>

                  <p className="mt-4 line-clamp-4 text-sm leading-7 text-slate-600">
                    {comparison.description ||
                      "Compare these technology products and discover which option may be right for you."}
                  </p>

                  <div className="mt-7 border-t border-slate-100 pt-5">

                    <span className="font-black text-blue-600">
                      Read Comparison →
                    </span>

                  </div>

                </Link>

              ))}

            </div>

          ) : (

            <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-12 text-center">

              <h3 className="text-2xl font-black">
                Comparisons Coming Soon
              </h3>

              <p className="mt-3 text-slate-600">
                New technology comparisons are being added
                regularly.
              </p>

            </div>

          )}

        </div>

      </section>

      {/* WHAT WE COMPARE */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <p className="text-sm font-black uppercase tracking-widest text-blue-600">
              Comparison Criteria
            </p>

            <h2 className="mt-3 text-4xl font-black">
              What We Compare
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              We look beyond simple feature lists to help
              you understand how competing products differ.
            </p>

          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <CompareCard
              icon="⚙️"
              title="Features"
              description="Compare capabilities, tools, integrations, and functionality."
            />

            <CompareCard
              icon="💰"
              title="Pricing"
              description="Understand plans, costs, limits, and overall pricing."
            />

            <CompareCard
              icon="🎯"
              title="Use Cases"
              description="See which products are better suited to different users."
            />

            <CompareCard
              icon="🏆"
              title="Overall Value"
              description="Evaluate strengths, weaknesses, and value against alternatives."
            />

          </div>

        </div>

      </section>

      {/* CATEGORY LINKS */}

      <section className="bg-slate-950 px-6 py-20 text-white">

        <div className="mx-auto max-w-6xl text-center">

          <p className="text-sm font-black uppercase tracking-widest text-blue-400">
            Explore More
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Explore Technology Categories
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <CategoryLink
              href="/ai"
              title="AI Tools"
            />

            <CategoryLink
              href="/software"
              title="Software"
            />

            <CategoryLink
              href="/vpn"
              title="VPN & Security"
            />

            <CategoryLink
              href="/reviews"
              title="All Reviews"
            />

          </div>

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="bg-blue-600 px-6 py-20 text-center text-white">

        <div className="mx-auto max-w-4xl">

          <h2 className="text-4xl font-black md:text-5xl">
            Still Deciding?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Read the individual reviews behind our
            comparisons and explore detailed buying guides
            before making your decision.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <Link
              href="/reviews"
              className="rounded-xl bg-white px-8 py-4 font-black text-blue-600 transition hover:bg-slate-100"
            >
              Read Reviews →
            </Link>

            <Link
              href="/guides"
              className="rounded-xl border border-white/30 px-8 py-4 font-black transition hover:bg-white/10"
            >
              Browse Guides →
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
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">

      <p className="text-3xl font-black text-slate-900">
        {value}
      </p>

      <p className="mt-2 text-sm font-semibold text-slate-500">
        {label}
      </p>

    </div>
  );
}

function CompareCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

      <div className="text-3xl">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-black">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {description}
      </p>

    </div>
  );
}

function CategoryLink({
  href,
  title,
}) {
  return (
    <Link
      href={href}
      className="rounded-2xl bg-white/5 p-6 text-left ring-1 ring-white/10 transition hover:bg-white/10"
    >

      <h3 className="font-black">
        {title}
      </h3>

      <span className="mt-3 block text-sm font-bold text-blue-400">
        Explore →
      </span>

    </Link>
  );
}