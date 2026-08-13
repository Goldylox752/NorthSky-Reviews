import Link from "next/link";
import { guides } from "@/app/data/guides";

const SITE_URL = "https://north-sky-reviews-f1gr.vercel.app";
const PAGE_URL = `${SITE_URL}/guides`;

export const dynamic = "force-static";

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
      "Research technology before you buy with NorthSky Reviews guides covering AI, software, VPNs, cybersecurity, productivity, and more.",
    url: PAGE_URL,
    siteName: "NorthSky Reviews",
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Technology Guides 2026 | NorthSky Reviews",
    description:
      "AI, software, VPN, cybersecurity, productivity, and technology buying guides.",
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
      "Discover useful business software, SaaS platforms, productivity tools, and digital services.",
  },
  {
    href: "/vpn",
    icon: "🔒",
    title: "VPN & Privacy",
    description:
      "Learn about VPN services, online privacy, security, and safer internet browsing.",
  },
  {
    href: "/comparisons",
    icon: "⚖️",
    title: "Comparisons",
    description:
      "Compare competing technology products and services before making a decision.",
  },
];

const popularGuideTopics = [
  "Best AI Tools 2026",
  "Best AI Writing Tools",
  "Best AI Coding Tools",
  "Best AI Automation Tools",
  "Best VPNs",
  "Best Productivity Software",
];

export default function GuidesPage() {
  const guideList = Array.isArray(guides) ? guides : [];

  const featuredGuides = [...guideList]
    .filter((guide) => guide?.slug && guide?.title)
    .sort((a, b) => {
      if (Boolean(a?.featured) === Boolean(b?.featured))) {
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
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Technology Guides 2026 | NorthSky Reviews",
        description:
          "Technology guides covering AI tools, software, VPNs, cybersecurity, productivity, automation, and buying decisions.",
        isPartOf: {
          "@type": "WebSite",
          "@id": `${SITE_URL}#website`,
          name: "NorthSky Reviews",
          url: SITE_URL,
        },
      },

      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#guides`,
        name: "NorthSky Technology Guides",
        numberOfItems: featuredGuides.length,
        itemListElement: featuredGuides.map((guide, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: guide.title,
          url: `${SITE_URL}/guides/${guide.slug}`,
        })),
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
      {/* SEO STRUCTURED DATA */}

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
            Technology Guides
            <span className="text-blue-400"> 2026</span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            Practical guides to help you research AI tools, software, VPNs,
            cybersecurity, productivity platforms, and technology before you
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
              Compare Software →
            </Link>
          </div>

          <p className="mt-8 text-sm text-slate-400">
            Independent research • Reviews • Comparisons • Buying guides
          </p>
        </div>
      </section>

      {/* INTRO */}

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="font-black uppercase tracking-widest text-blue-600">
            NorthSky Reviews
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Research Before You Buy
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Technology changes quickly. Our guides are designed to simplify
            complicated software and technology decisions by explaining what
            products do, who they are best for, and what to consider before
            choosing one.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Use our guides alongside individual reviews and comparisons to
            build a clearer picture before subscribing to a product or
            service.
          </p>
        </div>
      </section>

      {/* GUIDES */}

      <section id="guides" className="px-6 py-12 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="font-black uppercase tracking-widest text-blue-600">
                Guide Library
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Latest Technology Guides
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                Explore our growing collection of research-focused technology
                guides.
              </p>
            </div>

            <div className="rounded-full bg-blue-50 px-5 py-3 font-black text-blue-700">
              {guideList.length}{" "}
              {guideList.length === 1 ? "Guide" : "Guides"}
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
                      {guide.category || "Technology"}
                    </span>

                    {guide.featured && (
                      <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-black text-amber-700">
                        ⭐ Featured
                      </span>
                    )}
                  </div>

                  <p className="mt-6 text-xs font-black uppercase tracking-widest text-slate-400">
                    Guide #{index + 1}
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
              <div className="text-5xl">📚</div>

              <h3 className="mt-5 text-2xl font-black">
                Guides Coming Soon
              </h3>

              <p className="mx-auto mt-3 max-w-xl text-slate-600">
                NorthSky Reviews is building a growing library of technology
                research and buying guides.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* TOPICS */}

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-widest text-blue-600">
              Explore Topics
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Find Guides By Topic
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Explore NorthSky Reviews by technology category.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {topicCards.map((topic) => (
              <TopicCard key={topic.title} {...topic} />
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR TOPICS */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-widest text-blue-600">
              Popular Research
            </p>

            <h2 className="mt-3 text-4xl font-black">
              Popular Guide Topics
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {popularGuideTopics.map((topic) => (
              <Link
                key={topic}
                href="/guides"
                className="rounded-full border border-slate-200 bg-white px-5 py-3 font-bold text-slate-700 transition hover:border-blue-300 hover:text-blue-600"
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY NORTHSKY */}

      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-widest text-blue-400">
              Why NorthSky
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Built for Better Technology Decisions
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ValueCard
              icon="🔎"
              title="Research First"
              description="Understand products, features, use cases, and alternatives before making a purchase."
            />

            <ValueCard
              icon="⚖️"
              title="Compare Options"
              description="Use reviews and comparisons to understand how competing products differ."
            />

            <ValueCard
              icon="💡"
              title="Practical Advice"
              description="Focus on real-world use cases and helping readers choose technology that fits their needs."
            />
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="bg-blue-600 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black md:text-5xl">
            Ready to Research?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Explore NorthSky Reviews for technology guides, software reviews,
            comparisons, rankings, and deals.
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

      <section className="border-t px-6 py-8">
        <p className="mx-auto max-w-4xl text-center text-xs leading-6 text-slate-500">
          NorthSky Reviews may earn commissions from qualifying affiliate
          partnerships. Affiliate relationships help support the website and
          do not determine our editorial rankings or opinions.
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