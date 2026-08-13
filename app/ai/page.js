import Link from "next/link";

import { tools, categories } from "@/app/data/tools";
import { comparisons } from "@/app/data/comparisons";

const SITE_URL = "https://north-sky-reviews-f1gr.vercel.app";
const PAGE_URL = `${SITE_URL}/ai`;

export const dynamic = "force-static";

export const metadata = {
  title:
    "Best AI Tools 2026 | AI Software Reviews & Comparisons | NorthSky Reviews",

  description:
    "Discover the best AI tools in 2026 for writing, coding, research, design, automation, business, productivity, and more. Compare AI software with NorthSky Reviews.",

  keywords: [
    "best AI tools 2026",
    "AI software reviews",
    "AI tools",
    "AI productivity tools",
    "AI automation software",
    "AI coding tools",
    "AI writing tools",
    "AI image generators",
    "ChatGPT alternatives",
    "AI business tools",
  ],

  alternates: {
    canonical: PAGE_URL,
  },

  openGraph: {
    title:
      "Best AI Tools 2026 | AI Software Reviews & Comparisons | NorthSky Reviews",

    description:
      "Explore AI assistants, writing tools, coding platforms, image generators, automation software, research tools, and business AI.",

    url: PAGE_URL,
    siteName: "NorthSky Reviews",
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Best AI Tools 2026 | NorthSky Reviews",
    description:
      "Explore the best AI software for writing, coding, business, productivity, research, automation, and more.",
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

const allTools = Array.isArray(tools) ? tools : [];
const allCategories = Array.isArray(categories) ? categories : [];
const allComparisons = Array.isArray(comparisons) ? comparisons : [];

const aiTools = allTools
  .filter((tool) => {
    const category = tool?.category?.toLowerCase() || "";
    const tags = Array.isArray(tool?.tags)
      ? tool.tags.map((tag) => String(tag).toLowerCase())
      : [];

    return (
      category.includes("ai") ||
      tags.includes("ai") ||
      tags.includes("artificial intelligence")
    );
  })
  .sort((a, b) => {
    const ratingA = Number(a?.rating) || 0;
    const ratingB = Number(b?.rating) || 0;

    return ratingB - ratingA;
  });

const featuredTools = aiTools.slice(0, 6);

const aiCategories = [
  {
    name: "AI Assistants",
    slug: "ai-assistants",
    icon: "🤖",
    description:
      "Explore AI assistants for everyday questions, research, writing, planning, analysis, and productivity.",
  },
  {
    name: "AI Writing",
    slug: "ai-writing",
    icon: "✍️",
    description:
      "Find AI writing platforms for content creation, marketing, editing, copywriting, and communication.",
  },
  {
    name: "AI Coding",
    slug: "ai-coding",
    icon: "💻",
    description:
      "Explore AI coding assistants and developer tools for programming, debugging, testing, and development.",
  },
  {
    name: "AI Image Generation",
    slug: "ai-image-generation",
    icon: "🎨",
    description:
      "Discover AI image generators for creative projects, marketing, design, illustrations, and visual content.",
  },
  {
    name: "AI Automation",
    slug: "ai-automation",
    icon: "⚙️",
    description:
      "Explore AI-powered automation platforms for workflows, business processes, integrations, and productivity.",
  },
  {
    name: "AI Business Tools",
    slug: "ai-business",
    icon: "🏢",
    description:
      "Find AI software designed for sales, marketing, customer service, operations, and business productivity.",
  },
];

const popularGuides = [
  {
    title: "Best AI Tools 2026",
    description:
      "Our broad guide to the leading AI tools for productivity, business, writing, coding, research, and more.",
    href: "/ai/best-ai-tools-2026",
  },
  {
    title: "Best AI Coding Tools 2026",
    description:
      "Compare AI coding assistants and developer platforms designed to make programming faster.",
    href: "/ai/best-ai-coding-tools-2026",
  },
  {
    title: "Best AI Automation Tools 2026",
    description:
      "Explore AI automation platforms for workflows, integrations, business processes, and productivity.",
    href: "/ai/best-ai-automation-tools-2026",
  },
  {
    title: "Best AI Image Generators 2026",
    description:
      "Compare leading AI image generation platforms for creative and professional use.",
    href: "/ai/best-ai-image-generators-2026",
  },
];

const faqs = [
  {
    question: "What are the best AI tools in 2026?",
    answer:
      "The best AI tool depends on what you need to accomplish. Different platforms specialize in areas such as general AI assistance, writing, coding, research, image generation, automation, and business workflows.",
  },
  {
    question: "What should I look for in an AI tool?",
    answer:
      "Consider the tool's features, accuracy, ease of use, integrations, privacy practices, pricing, available models, reliability, and how well it fits your specific workflow.",
  },
  {
    question: "Are AI tools free?",
    answer:
      "Some AI tools offer free plans or trials, while others require a paid subscription. Features and usage limits can vary significantly between free and paid plans.",
  },
  {
    question: "What is the best AI tool for business?",
    answer:
      "Business users may benefit from different tools depending on their needs. AI assistants, writing platforms, automation software, coding tools, research systems, and customer-support platforms can all serve different business workflows.",
  },
];

export default function AIPage() {
  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Best AI Tools 2026 | NorthSky Reviews",
        description:
          "Explore AI software reviews, rankings, comparisons, and buying guides.",
        isPartOf: {
          "@type": "WebSite",
          "@id": `${SITE_URL}#website`,
          name: "NorthSky Reviews",
          url: SITE_URL,
        },
      },

      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#tools`,
        name: "Featured AI Tools",
        numberOfItems: featuredTools.length,

        itemListElement: featuredTools.map((tool, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: tool.name,
          url: tool.reviewPath
            ? `${SITE_URL}${tool.reviewPath}`
            : undefined,
        })),
      },

      {
        "@type": "FAQPage",
        "@id": `${PAGE_URL}#faq`,

        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,

          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
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
            name: "AI Tools",
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
          <Link
            href="/"
            className="text-sm font-bold text-blue-300 hover:text-white"
          >
            ← NorthSky Reviews
          </Link>

          <div className="mt-8">
            <span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-black text-blue-300 ring-1 ring-blue-400/20">
              🤖 AI SOFTWARE DIRECTORY
            </span>
          </div>

          <h1 className="mt-8 text-5xl font-black tracking-tight md:text-7xl">
            Best AI Tools
            <span className="text-blue-400"> 2026</span>
          </h1>

          <p className="mx-auto mt-7 max-w-4xl text-xl leading-8 text-slate-300">
            Explore AI software for writing, coding, research, design,
            automation, business, productivity, and everyday work.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/ai/best-ai-tools-2026"
              className="rounded-xl bg-blue-600 px-8 py-4 font-black hover:bg-blue-500"
            >
              Best AI Tools 2026 →
            </Link>

            <Link
              href="/comparisons"
              className="rounded-xl border border-white/30 px-8 py-4 font-black hover:bg-white/10"
            >
              Compare AI Tools →
            </Link>

            <Link
              href="/guides"
              className="rounded-xl border border-white/30 px-8 py-4 font-black hover:bg-white/10"
            >
              AI Buying Guides →
            </Link>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            <StatCard
              value={aiTools.length}
              label="AI Tools"
            />

            <StatCard
              value={allComparisons.length}
              label="Comparisons"
            />

            <StatCard
              value={aiCategories.length}
              label="AI Categories"
            />

            <StatCard
              value="2026"
              label="Current Rankings"
            />
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="font-black uppercase tracking-widest text-blue-600">
            NORTHSKY AI HUB
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Find the Right AI Software
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            AI software has expanded rapidly across writing, coding,
            research, design, automation, customer service, marketing,
            productivity, and business operations.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            NorthSky Reviews organizes these tools into reviews, rankings,
            comparisons, and practical guides so you can research different
            options before choosing a platform.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-widest text-blue-600">
              AI CATEGORIES
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Explore AI By Use Case
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
              Start with the type of AI software you need.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {aiCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/categories/${category.slug}`}
                className="group rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-4xl">{category.icon}</div>

                <h3 className="mt-5 text-2xl font-black group-hover:text-blue-600">
                  {category.name}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {category.description}
                </p>

                <span className="mt-5 block font-black text-blue-600">
                  Explore Category →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED TOOLS */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="font-black uppercase tracking-widest text-blue-600">
                FEATURED SOFTWARE
              </p>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Featured AI Tools
              </h2>

              <p className="mt-4 max-w-2xl text-lg text-slate-600">
                Explore highly rated AI software currently represented in the
                NorthSky Reviews database.
              </p>
            </div>

            <Link
              href="/reviews"
              className="font-black text-blue-600 hover:text-blue-800"
            >
              View All Reviews →
            </Link>
          </div>

          {featuredTools.length > 0 ? (
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredTools.map((tool) => (
                <article
                  key={tool.slug || tool.name}
                  className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-black text-blue-700">
                      {tool.category || "AI Tool"}
                    </span>

                    {tool.rating && (
                      <span className="font-black text-emerald-600">
                        ⭐ {tool.rating}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 text-3xl font-black">
                    {tool.name}
                  </h3>

                  <p className="mt-4 flex-1 leading-7 text-slate-600">
                    {tool.description ||
                      "Explore features, use cases, pricing, and alternatives."}
                  </p>

                  <div className="mt-8 space-y-3">
                    {tool.reviewPath && (
                      <Link
                        href={tool.reviewPath}
                        className="block rounded-xl bg-slate-950 px-5 py-3 text-center font-black text-white hover:bg-blue-600"
                      >
                        Read Review →
                      </Link>
                    )}

                    {tool.link && (
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="block rounded-xl border border-slate-200 px-5 py-3 text-center font-black hover:border-blue-300 hover:text-blue-600"
                      >
                        Visit Website ↗
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-12 text-center">
              <div className="text-5xl">🤖</div>

              <h3 className="mt-5 text-2xl font-black">
                AI Tools Coming Soon
              </h3>

              <p className="mt-3 text-slate-600">
                NorthSky Reviews is building its AI software directory.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* GUIDES */}

      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-widest text-blue-400">
              AI BUYING GUIDES
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Research AI Before You Choose
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {popularGuides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10"
              >
                <h3 className="text-2xl font-black">
                  {guide.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {guide.description}
                </p>

                <span className="mt-6 block font-black text-blue-400">
                  Read Guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISONS */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-widest text-blue-600">
              AI COMPARISONS
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Compare AI Software
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
              Compare competing AI platforms to understand their differences,
              strengths, use cases, and potential value.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {allComparisons.slice(0, 4).map((comparison) => (
              <Link
                key={
                  comparison.slug ||
                  comparison.title ||
                  comparison.name
                }
                href={
                  comparison.href ||
                  comparison.path ||
                  `/comparisons/${comparison.slug}`
                }
                className="rounded-3xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
              >
                <h3 className="text-2xl font-black">
                  {comparison.title || comparison.name}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {comparison.description ||
                    "Compare technology products and platforms before making a decision."}
                </p>

                <span className="mt-5 block font-black text-blue-600">
                  Compare →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/comparisons"
              className="inline-block rounded-xl bg-blue-600 px-8 py-4 font-black text-white hover:bg-blue-700"
            >
              Browse All Comparisons →
            </Link>
          </div>
        </div>
      </section>

      {/* WHY NORTHSKY */}

      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-widest text-blue-600">
              OUR APPROACH
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              AI Research Made Easier
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ValueCard
              icon="🔎"
              title="Research"
              description="Explore features, capabilities, use cases, pricing, and important considerations."
            />

            <ValueCard
              icon="⚖️"
              title="Compare"
              description="See how different AI platforms compare before committing to a product."
            />

            <ValueCard
              icon="🎯"
              title="Choose"
              description="Use practical guides and reviews to identify software that fits your workflow."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="font-black uppercase tracking-widest text-blue-600">
              FAQ
            </p>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              AI Tools FAQ
            </h2>
          </div>

          <div className="mt-10 space-y-5">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="rounded-3xl border border-slate-200 bg-white p-6"
              >
                <summary className="cursor-pointer list-none font-black">
                  {faq.question}
                </summary>

                <p className="mt-4 leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="bg-blue-600 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black md:text-5xl">
            Find the Right AI Tool
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Explore AI reviews, rankings, comparisons, and buying guides from
            NorthSky Reviews.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/ai/best-ai-tools-2026"
              className="rounded-xl bg-white px-8 py-4 font-black text-blue-600 hover:bg-slate-100"
            >
              Best AI Tools 2026 →
            </Link>

            <Link
              href="/reviews"
              className="rounded-xl border border-white/30 px-8 py-4 font-black hover:bg-white/10"
            >
              Browse Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* DISCLOSURE */}

      <section className="border-t px-6 py-8">
        <p className="mx-auto max-w-4xl text-center text-xs leading-6 text-slate-500">
          NorthSky Reviews may earn commissions from qualifying affiliate
          partnerships. Affiliate relationships help support the website and
          do not determine our editorial rankings or recommendations.
        </p>
      </section>
    </main>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
      <p className="text-4xl font-black">
        {value}
      </p>

      <p className="mt-1 text-slate-300">
        {label}
      </p>
    </div>
  );
}

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

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}