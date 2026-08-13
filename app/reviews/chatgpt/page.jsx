import Link from "next/link";

const siteUrl = "https://north-sky-reviews-f1gr.vercel.app";
const pageUrl = `${siteUrl}/reviews/chatgpt`;

export const metadata = {
  title: "ChatGPT Review 2026: Features, Pricing & Alternatives | NorthSky Reviews",

  description:
    "ChatGPT review for 2026 covering features, pricing, writing, research, coding, productivity, pros and cons, and alternatives.",

  keywords: [
    "ChatGPT review 2026",
    "ChatGPT pricing",
    "ChatGPT features",
    "ChatGPT alternatives",
    "ChatGPT AI review",
    "best AI tools 2026",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: "ChatGPT Review 2026 | NorthSky Reviews",
    description:
      "Our ChatGPT review covering features, pricing, strengths, weaknesses, use cases, and alternatives.",
    url: pageUrl,
    siteName: "NorthSky Reviews",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "ChatGPT Review 2026 | NorthSky Reviews",
    description:
      "Features, pricing, pros, cons, use cases and alternatives.",
  },
};

const pros = [
  "Powerful general-purpose AI assistant",
  "Useful for writing, research, brainstorming and coding",
  "Wide range of practical business and productivity uses",
  "Easy to use for beginners",
  "Supports a broad range of workflows",
];

const cons = [
  "Some advanced features require a paid plan",
  "AI-generated answers can still contain mistakes",
  "Best results require clear prompts and instructions",
  "Features and pricing can change over time",
];

const useCases = [
  {
    title: "✍️ Writing",
    description:
      "Draft emails, articles, marketing copy, outlines, summaries and other written content.",
  },
  {
    title: "💻 Coding",
    description:
      "Generate code, explain programming concepts, troubleshoot errors and assist with development workflows.",
  },
  {
    title: "🔎 Research",
    description:
      "Organize information, summarize material, brainstorm questions and help structure research tasks.",
  },
  {
    title: "📈 Business",
    description:
      "Create business documents, analyze ideas, develop workflows and assist with everyday business tasks.",
  },
];

const faq = [
  {
    q: "Is ChatGPT worth it in 2026?",
    a:
      "ChatGPT can be valuable for users who regularly need help with writing, coding, research, brainstorming, productivity or business tasks. Whether a paid plan is worthwhile depends on how frequently you use its advanced capabilities.",
  },
  {
    q: "What can ChatGPT be used for?",
    a:
      "ChatGPT can assist with writing, coding, brainstorming, research, learning, business tasks, productivity and many other text-based workflows.",
  },
  {
    q: "Is ChatGPT free?",
    a:
      "ChatGPT offers a free option, while additional capabilities and higher usage limits may be available through paid plans. Check the current pricing directly before subscribing.",
  },
  {
    q: "Is ChatGPT always accurate?",
    a:
      "No. ChatGPT can make mistakes or produce inaccurate information. Important information should be independently verified, especially for financial, legal, medical or other high-stakes decisions.",
  },
  {
    q: "What are the best ChatGPT alternatives?",
    a:
      "Popular alternatives include Claude, Gemini and other specialized AI assistants. The best alternative depends on the tasks, features and workflow that matter most to you.",
  },
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  name: "ChatGPT Review 2026",
  headline: "ChatGPT Review 2026: Features, Pricing & Alternatives",
  url: pageUrl,

  author: {
    "@type": "Organization",
    name: "NorthSky Reviews",
    url: siteUrl,
  },

  publisher: {
    "@type": "Organization",
    name: "NorthSky Reviews",
    url: siteUrl,
  },

  itemReviewed: {
    "@type": "SoftwareApplication",
    name: "ChatGPT",
    applicationCategory: "AI Assistant",
    operatingSystem: "Web",
  },

  reviewRating: {
    "@type": "Rating",
    ratingValue: "9.2",
    bestRating: "10",
    worstRating: "1",
  },

  reviewBody:
    "NorthSky Reviews evaluates ChatGPT as a general-purpose AI assistant for writing, coding, research, productivity and business workflows.",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
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
      name: "Reviews",
      item: `${siteUrl}/reviews`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "ChatGPT",
      item: pageUrl,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a,
    },
  })),
};

export default function ChatGPTReviewPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* STRUCTURED DATA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* HERO */}

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/reviews"
            className="text-sm font-bold text-blue-300 hover:text-white"
          >
            ← Back to Reviews
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-bold text-blue-300">
              AI Review
            </span>

            <span className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-bold text-emerald-300">
              2026 Review
            </span>
          </div>

          <h1 className="mt-7 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            ChatGPT Review 2026
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-300">
            An in-depth look at ChatGPT, including its features, pricing,
            strengths, weaknesses, practical use cases and alternatives.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://chatgpt.com"
              target="_blank"
              rel="nofollow sponsored noopener"
              className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-500"
            >
              Try ChatGPT →
            </a>

            <Link
              href="/comparisons/chatgpt-vs-claude"
              className="rounded-xl border border-white/30 px-8 py-4 font-bold hover:bg-white/10"
            >
              Compare ChatGPT →
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK VERDICT */}

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="font-bold uppercase tracking-wider text-blue-600">
              Our Verdict
            </p>

            <h2 className="mt-3 text-4xl font-black">
              Is ChatGPT worth using?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              ChatGPT is one of the most versatile AI assistants available
              for everyday users, creators, developers and businesses. Its
              biggest advantage is the range of tasks it can handle from a
              single interface.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              It can help with writing, coding, brainstorming, research,
              learning, business workflows and productivity. However, users
              should still verify important information because AI-generated
              answers can contain errors.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              <strong>Bottom line:</strong> ChatGPT is a strong choice for
              users looking for a flexible, general-purpose AI assistant.
            </p>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
              NorthSky Rating
            </p>

            <div className="mt-4 text-6xl font-black text-blue-600">
              9.2
              <span className="text-2xl text-slate-400">/10</span>
            </div>

            <p className="mt-3 font-bold text-slate-700">
              Excellent
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Ease of Use</span>
                <strong>9.5/10</strong>
              </div>

              <div className="flex justify-between">
                <span>Features</span>
                <strong>9.5/10</strong>
              </div>

              <div className="flex justify-between">
                <span>Versatility</span>
                <strong>9.5/10</strong>
              </div>

              <div className="flex justify-between">
                <span>Value</span>
                <strong>9/10</strong>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* FEATURES */}

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold uppercase tracking-wider text-blue-600">
            Features
          </p>

          <h2 className="mt-3 text-4xl font-black">
            What can ChatGPT do?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8"
              >
                <h3 className="text-2xl font-black">{item.title}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROS AND CONS */}

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8">
            <h2 className="text-3xl font-black text-emerald-800">
              Pros
            </h2>

            <ul className="mt-6 space-y-4">
              {pros.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-slate-700"
                >
                  <span className="font-black text-emerald-600">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-red-200 bg-red-50 p-8">
            <h2 className="text-3xl font-black text-red-800">
              Cons
            </h2>

            <ul className="mt-6 space-y-4">
              {cons.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-slate-700"
                >
                  <span className="font-black text-red-600">×</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PRICING */}

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="font-bold uppercase tracking-wider text-blue-600">
            Pricing
          </p>

          <h2 className="mt-3 text-4xl font-black">
            ChatGPT Pricing
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            ChatGPT offers different access levels depending on the features,
            usage limits and capabilities you need. Pricing and plan details
            can change, so we recommend checking the official website for the
            latest information before subscribing.
          </p>

          <a
            href="https://chatgpt.com"
            target="_blank"
            rel="nofollow sponsored noopener"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-500"
          >
            Check Current ChatGPT Plans →
          </a>
        </div>
      </section>

      {/* ALTERNATIVES */}

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="font-bold uppercase tracking-wider text-blue-600">
          Alternatives
        </p>

        <h2 className="mt-3 text-4xl font-black">
          ChatGPT Alternatives
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          ChatGPT isn't the only AI assistant worth considering. Comparing
          alternatives can help you find the right tool for your particular
          workflow.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Link
            href="/reviews/claude"
            className="rounded-3xl border border-slate-200 p-7 hover:shadow-xl"
          >
            <h3 className="text-2xl font-black">Claude</h3>

            <p className="mt-3 text-slate-600">
              Explore Claude as an alternative AI assistant for writing,
              analysis and productivity.
            </p>

            <div className="mt-5 font-bold text-blue-600">
              Read Claude Review →
            </div>
          </Link>

          <Link
            href="/comparisons/chatgpt-vs-claude"
            className="rounded-3xl border border-slate-200 p-7 hover:shadow-xl"
          >
            <h3 className="text-2xl font-black">
              ChatGPT vs Claude
            </h3>

            <p className="mt-3 text-slate-600">
              Compare two of the most popular general-purpose AI assistants.
            </p>

            <div className="mt-5 font-bold text-blue-600">
              View Comparison →
            </div>
          </Link>

          <Link
            href="/guides/best-ai-tools-2026"
            className="rounded-3xl border border-slate-200 p-7 hover:shadow-xl"
          >
            <h3 className="text-2xl font-black">
              Best AI Tools 2026
            </h3>

            <p className="mt-3 text-slate-600">
              See more AI tools recommended by NorthSky Reviews.
            </p>

            <div className="mt-5 font-bold text-blue-600">
              Read Guide →
            </div>
          </Link>
        </div>
      </section>

      {/* FAQ */}

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="font-bold uppercase tracking-wider text-blue-600">
            FAQ
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-5">
            {faq.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <h3 className="text-lg font-black">{item.q}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AFFILIATE DISCLOSURE */}

      <section className="mx-auto max-w-5xl px-6 py-10">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm leading-6 text-slate-500">
          <strong className="text-slate-700">
            Affiliate Disclosure:
          </strong>{" "}
          NorthSky Reviews may earn a commission when you purchase products
          or services through qualifying links on this page. This does not
          determine our editorial ratings or recommendations.
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="bg-blue-600 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-black md:text-5xl">
            Ready to Try ChatGPT?
          </h2>

          <p className="mt-5 text-lg text-blue-100">
            Visit the official ChatGPT website to explore the latest
            features and available plans.
          </p>

          <a
            href="https://chatgpt.com"
            target="_blank"
            rel="nofollow sponsored noopener"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-600 hover:bg-slate-100"
          >
            Visit ChatGPT →
          </a>
        </div>
      </section>
    </main>
  );
}