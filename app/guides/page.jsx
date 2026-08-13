import Link from "next/link";
import { guides } from "@/app/data/guides";

export const dynamic = "force-static";

const SITE_URL = "https://north-sky-reviews-f1gr.vercel.app";
const PAGE_URL = `${SITE_URL}/guides`;

export const metadata = {
  title:
    "Technology Guides 2026 | AI, Software, VPN & Buying Guides | NorthSky Reviews",

  description:
    "Explore NorthSky Reviews technology guides covering AI tools, software, automation, VPNs, cybersecurity, productivity, and technology buying decisions.",

  keywords: [
    "technology guides 2026",
    "AI guides",
    "AI software guides",
    "software buying guides",
    "technology buying guides",
    "AI tool guides",
    "AI automation guides",
    "VPN guides",
    "cybersecurity guides",
    "productivity software guides",
    "software reviews",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Technology Guides 2026 | AI, Software, VPN & Buying Guides | NorthSky Reviews",

    description:
      "Research technology before you buy with NorthSky Reviews guides covering AI, software, VPNs, cybersecurity, productivity, automation, and more.",

    url: PAGE_URL,
    siteName: "NorthSky Reviews",
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Technology Guides 2026 | NorthSky Reviews",
    description:
      "AI, software, VPN, cybersecurity, productivity, automation, and technology buying guides.",
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

const topicCards = [
  {
    href: "/ai",
    icon: "🤖",
    title: "AI Tools",
    description:
      "Explore AI assistants, writing tools, coding platforms, image generators, research tools, and automation software.",
  },

  {
    href: "/software",
    icon: "💻",
    title: "Software",
    description:
      "Discover business software, SaaS platforms, productivity tools, and digital services for work and everyday use.",
  },

  {
    href: "/vpn",
    icon: "🔒",
    title: "VPN & Privacy",
    description:
      "Research VPN services, online privacy tools, cybersecurity products, and safer internet solutions.",
  },

  {
    href: "/comparisons",
    icon: "⚖️",
    title: "Comparisons",
    description:
      "Compare competing technology products and services before deciding which option is right for you.",
  },
];

const popularTopics = [
  {
    title: "Best AI Tools 2026",
    href: "/ai/best-ai-tools-2026",
  },

  {
    title: "Best AI Coding Tools",
    href: "/ai/best-ai-coding-tools-2026",
  },

  {
    title: "Best AI Automation Tools",
    href: "/ai/best-ai-automation-tools-2026",
  },

  {
    title: "Best AI Image Generators",
    href: "/ai/best-ai-image-generators-2026",
  },

  {
    title: "Best VPNs",
    href: "/vpn",
  },

  {
    title: "Software Reviews",
    href: "/reviews",
  },
];

export default function GuidesPage() {
  const guideList = Array.isArray(guides)
    ? guides.filter(
        (guide) => guide && guide.slug && guide.title
      )
    : [];

  const sortedGuides = [...guideList].sort((a, b) => {
    const featuredDifference =
      Number(Boolean(b.featured)) -
      Number(Boolean(a.featured));

    if (featuredDifference !== 0) {
      return featuredDifference;
    }

    const dateA = new Date(
      a.updatedAt || a.date || a.publishedAt || 0
    ).getTime();

    const dateB = new Date(
      b.updatedAt || b.date || b.publishedAt || 0
    ).getTime();

    if (!Number.isNaN(dateA) && !Number.isNaN(dateB)) {
      return dateB - dateA;
    }

    return String(a.title).localeCompare(String(b.title));
  });

  const featuredGuides = sortedGuides.slice(0, 12);

  const categories = [
    ...new Set(
      guideList
        .map((guide) => guide.category)
        .filter(Boolean)
    ),
  ];

  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name:
          "Technology Guides 2026 | NorthSky Reviews",

        description:
          "Technology guides covering AI tools, software, VPNs, cybersecurity, productivity, automation, and technology buying decisions.",

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
          "@id": `${PAGE_URL}#guides`,
        },
      },

      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#guides`,
        name: "NorthSky Technology Guides",
        numberOfItems: featuredGuides.length,

        itemListElement: featuredGuides.map(
          (guide, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: guide.title,
            url: `${SITE_URL}/guides/${guide.slug}`,
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
            name: "Guides",
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

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 px-6 py-24 text-white md:py-32">
        <div className="mx-auto max-w-6xl text-center">
          <span className="inline-flex rounded-full bg-blue-500/20 px-5 py-2 text-sm font-black text-blue-300 ring-1 ring-blue-400/20">
            📚 NORTHSKY KNOWLEDGE HUB
          </span>

          <h1 className="mt-8 text-5xl font-black tracking-tight md:text-7xl">
            Technology Guides{" "}
            <span className="text-blue-400">
              2026
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            Practical guides to help you research AI tools,
            software, automation, VPNs, cybersecurity,
            productivity platforms, and technology before you
            buy.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="#guides"
              className="rounded-xl bg-blue-600 px-8 py-4 font-black transition hover:bg-blue-500"
            >
              Explore Guides →
            </Link>

            <Link
              href="/reviews"
              className="rounded-xl border border-white/30 px-8 py-4 font-black transition hover:bg-white/10"
            >
              Read Reviews →
            </Link>

            <Link
              href="/comparisons"
              className="rounded-xl border border-white/30 px-8 py-4 font-black transition hover:bg-white/10"
            >
              Compare Tools →
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm text-slate-400">
            <span>Independent Research</span>
            <span>•</span>
            <span>Reviews</span>
            <span>•</span>
            <span>Comparisons</span>
            <span>•</span>
            <span>Buying Guides</span>
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="font-black uppercase tracking-widest text-blue-600">
            NORTHSKY REVIEWS
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Research Before You Buy
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Technology changes quickly. Choosing software,
            AI tools, privacy services, and other digital
            products can become complicated when every platform
            makes different promises.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            NorthSky Reviews creates research-focused guides
            designed to explain what products do, who they are
            best for, important features to consider, and how
            competing options differ.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Use these guides together with our individual
            reviews and comparisons to make more informed
            technology decisions.
          </p>
        </div>
      </section>

      {/* GUIDE LIBRARY */}

      <section
        id="guides"
        className="px-6 py-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-black uppercase tracking-widest text-blue-600">
                GUIDE LIBRARY
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Technology Buying Guides
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Explore our growing library of AI, software,
                automation, privacy, and technology research.
              </p>
            </div>

            <div className="rounded-full bg-blue-50 px-5 py-3 font-black text-blue-700">
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

                  <p className="mt-6 text-xs font-black uppercase tracking-widest text-slate-400">
                    Research Guide #{index + 1}
                  </p>

                  <h3 className="mt-2 text-2xl font-black leading-tight group-hover:text-blue-600">
                    {guide.title}
                  </h3>

                  <p className="mt-4 line-clamp-4 text-sm leading-7 text-slate-600">
                    {guide.description ||
                      "Explore this technology guide for research, recommendations, comparisons, and buying advice."}
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
              <div className="text-5xl">
                📚
              </div>

              <h3 className="mt-5 text-2xl font-black">
                Guides Coming Soon
              </h3>

              <p className="mx-auto mt-3 max-w-xl text-slate-600">
                NorthSky Reviews is building a growing
                library of technology research and buying
                guides.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CATEGORIES */}

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-widest text-blue-600">
              EXPLORE TOPICS
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Find Guides By Topic
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Explore NorthSky Reviews by technology category
              and discover research relevant to what you're
              looking for.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {topicCards.map((topic) => (
              <TopicCard
                key={topic.title}
                {...topic}
              />
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR RESEARCH */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-widest text-blue-600">
              POPULAR RESEARCH
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Start With These Guides
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Quickly jump to some of the most useful technology
              research pages on NorthSky Reviews.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularTopics.map((topic) => (
              <Link
                key={topic.href}
                href={topic.href}
                className="group rounded-2xl border border-slate-200 bg-white p-5 font-black transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
              >
                <span className="group-hover:text-blue-600">
                  {topic.title}
                </span>

                <span className="mt-2 block text-sm font-bold text-slate-400 group-hover:text-blue-500">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES FROM DATA */}

      {categories.length > 0 && (
        <section className="bg-slate-50 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <p className="font-black uppercase tracking-widest text-blue-600">
                GUIDE CATEGORIES
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Browse Research Categories
              </h2>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-slate-200 bg-white px-5 py-3 font-bold text-slate-700"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHY NORTHSKY */}

      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-widest text-blue-400">
              WHY NORTHSKY REVIEWS
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Built for Better Technology Decisions
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Our research hub connects guides, reviews,
              comparisons, and rankings so you can evaluate
              technology from multiple angles.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ValueCard
              icon="🔎"
              title="Research First"
              description="Understand products, features, use cases, limitations, and alternatives before making a purchase."
            />

            <ValueCard
              icon="⚖️"
              title="Compare Options"
              description="Use reviews and comparisons to understand how competing products differ."
            />

            <ValueCard
              icon="💡"
              title="Practical Advice"
              description="Focus on real-world use cases and helping readers find technology that fits their needs."
            />
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <p className="font-black uppercase tracking-widest text-blue-600">
            EDITORIAL APPROACH
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            How We Approach Technology Guides
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            NorthSky Reviews organizes technology research around
            practical factors such as features, usability,
            integrations, pricing, use cases, limitations,
            alternatives, and overall value.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Product features, pricing, availability, and
            capabilities can change over time. Readers should
            verify current information with the provider before
            making a purchase.
          </p>

          <Link
            href="/methodology"
            className="mt-7 inline-block font-black text-blue-600 hover:text-blue-800"
          >
            Read Our Full Methodology →
          </Link>
        </div>
      </section>

      {/* CTA */}

      <section className="bg-blue-600 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black md:text-5xl">
            Ready to Research?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Explore NorthSky Reviews for technology guides,
            software reviews, comparisons, rankings, and deals.
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
              Compare Tools →
            </Link>

            <Link
              href="/deals"
              className="rounded-xl border border-white/30 px-8 py-4 font-black transition hover:bg-white/10"
            >
              View Deals →
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
          NorthSky Reviews may earn commissions from qualifying
          affiliate partnerships. Affiliate relationships help
          support the website and do not determine our editorial
          rankings or opinions.
        </p>
      </section>
    </main>
  );
}

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
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-5 text-xl font-black group-hover:text-blue-600">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {description}
      </p>

      <span className="mt-5 block font-black text-blue-600">
        Explore →
      </span>
    </Link>
  );
}

function ValueCard({
  icon,
  title,
  description,
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
      <div className="text-4xl">{icon}</div>

      <h3 className="mt-5 text-xl font-black">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-300">
        {description}
      </p>
    </div>
  );
}