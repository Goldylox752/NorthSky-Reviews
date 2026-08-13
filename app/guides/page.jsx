import Link from "next/link";
import { guides } from "@/app/data/guides";

const siteUrl = "https://north-sky-reviews-f1gr.vercel.app";

export const metadata = {
  title:
    "Technology Guides 2026 | AI, Software & Buying Guides | NorthSky Reviews",

  description:
    "Explore NorthSky Reviews technology guides covering AI tools, automation software, VPNs, productivity apps, cybersecurity, and technology recommendations.",

  keywords: [
    "AI guides",
    "technology guides",
    "software guides",
    "AI automation guides",
    "best software guides",
    "technology buying guides",
    "AI tool guides",
    "software buying guides",
  ],

  alternates: {
    canonical: `${siteUrl}/guides`,
  },

  openGraph: {
    title:
      "Technology Guides 2026 | AI, Software & Buying Guides | NorthSky Reviews",
    description:
      "Expert technology guides covering AI tools, software, automation, cybersecurity, productivity, and buying decisions.",
    url: `${siteUrl}/guides`,
    siteName: "NorthSky Reviews",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Technology Guides 2026 | NorthSky Reviews",
    description:
      "Expert guides covering AI tools, software, automation, cybersecurity, and technology decisions.",
  },
};

export default function GuidesPage() {
  const guideList = Array.isArray(guides) ? guides : [];

  const featuredGuides = [...guideList]
    .sort((a, b) => {
      if (a.featured === b.featured) return 0;
      return a.featured ? -1 : 1;
    })
    .slice(0, 12);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "NorthSky Technology Guides",
    description:
      "NorthSky Reviews technology guides and buying recommendations covering AI, software, automation, cybersecurity, productivity, and technology.",
    url: `${siteUrl}/guides`,
    isPartOf: {
      "@type": "WebSite",
      name: "NorthSky Reviews",
      url: siteUrl,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: featuredGuides.length,
      itemListElement: featuredGuides.map((guide, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: guide.title,
        url: `${siteUrl}/guides/${guide.slug}`,
      })),
    },
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
      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-6xl">
          <span className="inline-block rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">
            📚 Technology Knowledge Hub
          </span>

          <h1 className="mt-8 text-5xl font-black md:text-7xl">
            NorthSky Guides
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-slate-300">
            Expert guides covering AI tools, software, automation,
            cybersecurity, productivity, and smarter technology decisions.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
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
          </div>
        </div>
      </section>

      {/* GUIDES */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div>
            <p className="font-bold uppercase tracking-wide text-blue-600">
              NorthSky Reviews
            </p>

            <h2 className="mt-2 text-4xl font-black">
              Latest Guides
            </h2>
          </div>

          <div className="rounded-full bg-blue-50 px-5 py-3 font-bold text-blue-600">
            {guideList.length}