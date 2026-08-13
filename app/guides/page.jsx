import Link from "next/link";
import { guides } from "@/app/data/guides";

const siteUrl = "https://northsky-reviews.vercel.app";
const pageUrl = `${siteUrl}/guides`;

export const metadata = {
  title:
    "Technology Guides 2026 | AI, Software & Buying Guides | NorthSky Reviews",

  description:
    "Explore NorthSky Reviews technology guides covering AI tools, software, automation, VPNs, productivity, cybersecurity, and technology buying decisions.",

  keywords: [
    "AI guides",
    "technology guides",
    "software guides",
    "AI tool guides",
    "software buying guides",
    "technology buying guides",
    "AI software guides",
    "VPN guides",
    "cybersecurity guides",
    "productivity software guides",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title:
      "Technology Guides 2026 | AI, Software & Buying Guides | NorthSky Reviews",

    description:
      "Research-focused guides covering AI tools, software, automation, cybersecurity, VPNs, productivity, and technology buying decisions.",

    url: pageUrl,
    siteName: "NorthSky Reviews",
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Technology Guides 2026 | NorthSky Reviews",
    description:
      "Explore AI, software, cybersecurity, VPN, productivity, and technology buying guides.",
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

export default function GuidesPage() {
  const guideList = Array.isArray(guides) ? guides : [];

  const featuredGuides = [...guideList]
    .sort((a, b) => {
      if (Boolean(a?.featured) === Boolean(b?.featured)) {
        return 0;
      }

      return a?.featured ? -1 : 1;
    })
    .slice(0, 12);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name:
          "Technology Guides 2026 | NorthSky Reviews",
        description:
          "Technology guides covering AI tools, software, automation, cybersecurity, VPNs, productivity, and technology buying decisions.",

        isPartOf: {
          "@type": "WebSite",
          "@id": `${siteUrl}#website`,
          name: "NorthSky Reviews",
          url: siteUrl,
        },

        mainEntity: {
          "@id": `${pageUrl}#guides`,
        },
      },

      {
        "@type": "ItemList",
        "@id": `${pageUrl}#guides`,
        name: "NorthSky Technology Guides",
        numberOfItems: featuredGuides.length,

        itemListElement: featuredGuides.map(
          (guide, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name:
              guide?.title ||
              "Technology Guide",
            url: `${siteUrl}/guides/${guide?.slug || ""}`,
          })
        ),
      },

      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Guides",
            item: pageUrl,
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

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-6xl">
          <span className="inline-flex rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300 ring-1 ring-blue-400/20">
            📚 Technology Knowledge Hub
          </span>

          <h1 className="mt-8 text-5xl font-black tracking-tight md:text-7xl">
            NorthSky Guides
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-300">
            Expert guides covering AI tools, software,
            automation, cybersecurity, productivity,
            VPNs, and smarter technology decisions.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/all-tools"
              className="rounded-xl bg-blue-600 px-8 py-4 font-bold transition hover:bg-blue-500"
            >
              Explore Tools →
            </Link>

            <Link
              href="/reviews"
              className="rounded-xl border border-white/30 px-8 py-4 font-bold transition hover:bg-white/10"
            >
              Read Reviews →
            </Link>

            <Link
              href="/comparisons"
              className="rounded-xl border border-white/30 px-8 py-4 font-bold transition hover:bg-white/10"
            >
              Compare Software →
            </Link>
          </div>
        </div>
      </section>

      {/* GUIDE DIRECTORY */}

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-blue-600">
              NorthSky Reviews
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              Technology Buying Guides
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Research-focused guides designed to help
              you understand technology, compare products,
              and make better buying decisions.
            </p>
          </div>

          <div className="rounded-full bg-blue-50 px-5 py-3 font-bold text-blue-600">
            {guideList.length}{" "}
            {guideList.length === 1
              ? "Guide"
              : "Guides"}
          </div>
        </div>

        {featuredGuides.length > 0 ? (
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {featuredGuides.map((guide, index) => (
              <article
                key={guide.slug}
                className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-black uppercase text-blue-700">
                    {guide.category ||
                      "Technology"}
                  </span>

                  {guide.featured && (
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-black text-amber-700">
                      ⭐ Featured
                    </span>
                  )}
                </div>

                <div className="mt-6 text-sm font-bold text-slate-400">
                  Guide #{index + 1}
                </div>

                <h3 className="mt-2 text-2xl font-black leading-tight group-hover:text-blue-600">
                  {guide.title}
                </h3>

                <p className="mt-4 line-clamp-4 text-sm leading-7 text-slate-600">
                  {guide.description ||
                    "Explore this NorthSky Reviews technology guide for research, recommendations, comparisons, and buying advice."}
                </p>

                <div className="mt-auto pt-7">
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="block rounded-xl bg-slate-950 px-5 py-3 text-center font-black text-white transition hover:bg-blue-600"
                  >
                    Read Guide →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-12 text-center">
            <div className="text-4xl">
              📚
            </div>

            <h3 className="mt-5 text-2xl font-black">
              Guides Coming Soon
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-slate-600">
              NorthSky Reviews is building a
              growing library of technology guides
              and buying resources.
            </p>
          </div>
        )}
      </section>

      {/* TOPIC HUB */}

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-widest text-blue-600">
              Explore Topics
            </p>

            <h2 className="mt-3 text-4xl font-black">
              Find Guides By Topic
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Explore guides across the technology
              categories covered by NorthSky Reviews.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <TopicCard
              href="/ai"
              icon="🤖"
              title="AI Tools"
              description="AI assistants, writing tools, research platforms, coding tools, and automation."
            />

            <TopicCard
              href="/vpn"
              icon="🔒"
              title="VPN & Privacy"
              description="VPN services, online privacy, security, and safer browsing."
            />

            <TopicCard
              href="/software"
              icon="💻"
              title="Software"
              description="Business software, SaaS platforms, productivity tools, and more."
            />

            <TopicCard
              href="/comparisons"
              icon="⚖️"
              title="Comparisons"
              description="Side-by-side technology comparisons to help you choose."
            />
          </div>
        </div>
      </section>

      {/* WHY NORTHSKY */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            <ValueCard
              icon="🔎"
              title="Research First"
              description="We organize product information, features, pricing, and alternatives so you can research before buying."
            />

            <ValueCard
              icon="⚖️"
              title="Compare Options"
              description="Use our reviews and comparisons to understand how competing products differ."
            />

            <ValueCard
              icon="💡"
              title="Make Better Decisions"
              description="Our guides are designed to simplify complicated technology purchasing decisions."
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

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Explore NorthSky Reviews for technology
            guides, software reviews, rankings, and
            comparisons.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/reviews"
              className="rounded-xl bg-white px-8 py-4 font-black text-blue-600 transition hover:bg-slate-100"
            >
              Browse Reviews →
            </Link>

            <Link
              href="/comparisons"
              className="rounded-xl border border-white/30 px-8 py-4 font-black transition hover:bg-white/10"
            >
              Compare Software →
            </Link>
          </div>
        </div>
      </section>

      {/* DISCLOSURE */}

      <section className="border-t px-6 py-8">
        <p className="mx-auto max-w-4xl text-center text-xs leading-6 text-slate-500">
          NorthSky Reviews may earn commissions from
          affiliate partnerships. Affiliate relationships
          help support the website and do not determine
          our editorial rankings or opinions.
        </p>
      </section>
    </main>
  );
}

/* -----------------------------------------
   TOPIC CARD
----------------------------------------- */

function TopicCard({
  href,
  icon,
  title,
  description,
}) {
  return (
    <Link
      href={href}
      className="group rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
    >
      <div className="text-4xl">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-black group-hover:text-blue-600">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {description}
      </p>

      <span className="mt-5 block font-black text-blue-600">
        Explore →
      </span>
    </Link>
  );
}

/* -----------------------------------------
   VALUE CARD
----------------------------------------- */

function ValueCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <div className="text-4xl">
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