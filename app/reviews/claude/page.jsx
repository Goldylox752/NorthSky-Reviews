import Link from "next/link";

const siteUrl = "https://north-sky-reviews-f1gr.vercel.app";
const pageUrl = `${siteUrl}/reviews/claude`;

export const metadata = {
  title:
    "Claude Review 2026: Features, Pricing & Alternatives | NorthSky Reviews",

  description:
    "Claude review for 2026 covering features, pricing, writing, coding, analysis, business use, pros, cons, and alternatives.",

  keywords: [
    "Claude review 2026",
    "Claude AI review",
    "Claude pricing",
    "Claude features",
    "Claude alternatives",
    "Claude vs ChatGPT",
    "best AI tools 2026",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: "Claude Review 2026 | NorthSky Reviews",
    description:
      "Our Claude AI review covering features, pricing, strengths, weaknesses, use cases and alternatives.",
    url: pageUrl,
    siteName: "NorthSky Reviews",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Claude Review 2026 | NorthSky Reviews",
    description:
      "Features, pricing, pros, cons, use cases and alternatives.",
  },
};

const pros = [
  "Strong writing and analysis capabilities",
  "Useful for long-form content and document work",
  "Strong coding and reasoning assistance",
  "Clean and straightforward user experience",
  "Useful for professional and business workflows",
];

const cons = [
  "Some advanced capabilities require a paid plan",
  "AI-generated information should still be verified",
  "Features and usage limits can vary by plan",
  "Not every workflow will benefit equally from Claude",
];

const useCases = [
  {
    title: "✍️ Writing & Editing",
    description:
      "Create, rewrite, summarize and refine long-form content, emails, documents and other written material.",
  },
  {
    title: "🧠 Analysis",
    description:
      "Analyze information, organize complex ideas and help turn large amounts of material into useful summaries.",
  },
  {
    title: "💻 Coding",
    description:
      "Generate code, explain programming concepts, troubleshoot problems and assist developers with software projects.",
  },
  {
    title: "🏢 Business",
    description:
      "Help with reports, planning, documentation, brainstorming, customer communication and other professional workflows.",
  },
];

const faq = [
  {
    q: "Is Claude worth it in 2026?",
    a:
      "Claude can be a strong choice for users who need help with writing, analysis, coding, documents and professional workflows. Whether a paid plan is worthwhile depends on your usage and the features you need.",
  },
  {
    q: "What is Claude used for?",
    a:
      "Claude can assist with writing, analysis, coding, brainstorming, research, summarization, document work and many other productivity tasks.",
  },
  {
    q: "Is Claude free?",
    a:
      "Claude offers access options that can change over time. Check the official Claude website for current plans, pricing and usage limits before subscribing.",
  },
  {
    q: "Is Claude better than ChatGPT?",
    a:
      "Neither is universally better. Claude and ChatGPT have different strengths, and the best option depends on your preferred features, workflow and use cases.",
  },
  {
    q: "What are the best Claude alternatives?",
    a:
      "ChatGPT, Gemini and other AI assistants can serve as alternatives to Claude. Comparing features, pricing and use cases can help determine which tool fits your needs.",
  },
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  name: "Claude Review 2026",
  headline: "Claude Review 2026: Features, Pricing & Alternatives",
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
    name: "Claude",
    applicationCategory: "AI Assistant",
    operatingSystem: "Web",
  },

  reviewRating: {
    "@type": "Rating",
    ratingValue: "9.1",
    bestRating: "10",
    worstRating: "1",
  },

  reviewBody:
    "NorthSky Reviews evaluates Claude as an AI assistant for writing, analysis, coding, document work and professional productivity.",
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
      name: "Claude",
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

export default function ClaudeReviewPage() {
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
            className="text-sm font-bold text-blue-300 transition hover:text-white"
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
            Claude Review 2026
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-300">
            An in-depth look at Claude, including its features, pricing,
            strengths, weaknesses, practical use cases and alternatives.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="https://claude.ai"
              target="_blank"
              rel="nofollow sponsored noopener"
              className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-500"
            >
              Try Claude →
            </a>

            <Link
              href="/comparisons/chatgpt-vs-claude"
              className="rounded-xl border border-white/30 px-8 py-4 font-bold transition hover:bg-white/10"
            >
              Claude vs ChatGPT →
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
              Is Claude worth using?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Claude is a capable AI assistant with particular strengths in
              writing, analysis, coding and professional productivity. Its
              straightforward interface makes it accessible while still
              supporting sophisticated workflows.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              It can be useful for individuals, developers, students,
              creators and businesses that need assistance with documents,
              reasoning, communication and software development.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              <strong>Bottom line:</strong> Claude is a strong ChatGPT
              alternative and deserves consideration if writing, analysis,
              coding and professional workflows are important to you.
            </p>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
              NorthSky Rating
            </p>

            <div className="mt-4 text-6xl font-black text-blue-600">
              9.1
              <span className="text-2xl text-slate-400">/10</span>
            </div>

            <p className="mt-3 font-bold text-slate-700">
              Excellent
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Writing</span>
                <strong>9.5/10</strong>
              </div>

              <div className="flex justify-between">
                <span>Analysis</span>
                <strong>9.5/10</strong>
              </div>

              <div className="flex justify-between">
                <span>Coding</span>
                <strong>9/10</strong>
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
            What can Claude do?
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
                  <span className="font-black text-emerald-600">
                    ✓
                  </span>

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
                  <span className="font-black text-red-600">
                    ×
                  </span>

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
            Claude Pricing
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Claude offers different access levels depending on the features,
            usage and capabilities you need. Pricing and plan details can
            change, so check the official Claude website for the latest
            information before subscribing.
          </p>

          <a
            href="https://claude.ai"
            target="_blank"
            rel="nofollow sponsored noopener"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-500"
          >
            Check Current Claude Plans →
          </a>
        </div>
      </section>

      {/* COMPARISON */}

      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="font-bold uppercase tracking-wider text-blue-600">
          Head-to-Head
        </p>

        <h2 className="mt-3 text-4xl font-black">
          Claude vs ChatGPT
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          Both platforms are powerful general-purpose AI assistants. Your
          choice should depend on the type of work you do most often and the
          features you value.
        </p>

        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200">
          <div className="grid grid-cols-3 bg-slate-950 p-5 font-black text-white">
            <div>Category</div>
            <div>Claude</div>
            <div>ChatGPT</div>
          </div>

          <div className="divide-y divide-slate-200">
            {[
              ["Writing", "Excellent", "Excellent"],
              ["Analysis", "Excellent", "Excellent"],
              ["Coding", "Excellent", "Excellent"],
              ["Versatility", "Excellent", "Excellent"],
              ["Best For", "Writing & analysis", "Broad workflows"],
            ].map(([category, claude, chatgpt]) => (
              <div
                key={category}
                className="grid grid-cols-3 p-5 text-sm md:text-base"
              >
                <div className="font-bold">{category}</div>
                <div className="text-slate-600">{claude}</div>
                <div className="text-slate-600">{chatgpt}</div>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/comparisons/chatgpt-vs-claude"
          className="mt-8 inline-block font-bold text-blue-600"
        >
          Read the full ChatGPT vs Claude comparison →
        </Link>
      </section>

      {/* ALTERNATIVES */}

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold uppercase tracking-wider text-blue-600">
            Alternatives
          </p>

          <h2 className="mt-3 text-4xl font-black">
            More AI Tools to Consider
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <Link
              href="/reviews/chatgpt"
              className="rounded-3xl border border-slate-200 bg-white p-7 transition hover:shadow-xl"
            >
              <h3 className="text-2xl font-black">ChatGPT</h3>

              <p className="mt-3 text-slate-600">
                A versatile AI assistant for writing, coding, research,
                productivity and business.
              </p>

              <div className="mt-5 font-bold text-blue-600">
                Read ChatGPT Review →
              </div>
            </Link>

            <Link
              href="/comparisons/chatgpt-vs-claude"
              className="rounded-3xl border border-slate-200 bg-white p-7 transition hover:shadow-xl"
            >
              <h3 className="text-2xl font-black">
                ChatGPT vs Claude
              </h3>

              <p className="mt-3 text-slate-600">
                Compare features, strengths and use cases side by side.
              </p>

              <div className="mt-5 font-bold text-blue-600">
                View Comparison →
              </div>
            </Link>

            <Link
              href="/guides/best-ai-tools-2026"
              className="rounded-3xl border border-slate-200 bg-white p-7 transition hover:shadow-xl"
            >
              <h3 className="text-2xl font-black">
                Best AI Tools 2026
              </h3>

              <p className="mt-3 text-slate-600">
                Explore more AI tools recommended by NorthSky Reviews.
              </p>

              <div className="mt-5 font-bold text-blue-600">
                Read AI Guide →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="mx-auto max-w-5xl px-6 py-16">
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
      </section>

      {/* DISCLOSURE */}

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

      {/* CTA */}

      <section className="bg-blue-600 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-black md:text-5xl">
            Ready to Try Claude?
          </h2>

          <p className="mt-5 text-lg text-blue-100">
            Visit the official Claude website to explore its latest features,
            plans and capabilities.
          </p>

          <a
            href="https://claude.ai"
            target="_blank"
            rel="nofollow sponsored noopener"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-600 transition hover:bg-slate-100"
          >
            Visit Claude →
          </a>
        </div>
      </section>
    </main>
  );
}