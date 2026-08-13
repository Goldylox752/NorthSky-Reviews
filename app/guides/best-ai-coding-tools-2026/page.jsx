import Link from "next/link";
import { notFound } from "next/navigation";

import { guides } from "@/app/data/guides";
import { tools } from "@/app/data/tools";
import { comparisons } from "@/app/data/comparisons";

const siteUrl = "https://north-sky-reviews-f1gr.vercel.app";

const slug = "best-ai-coding-tools-2026";

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug: currentSlug } = await params;

  const guide = guides.find(
    (item) => item.slug === currentSlug
  );

  if (!guide) {
    return {
      title: "Guide Not Found | NorthSky Reviews",
    };
  }

  return {
    title:
      `${guide.title} | NorthSky Reviews`,

    description:
      guide.description,

    keywords: [
      ...(guide.keywords || []),
      "AI coding assistants",
      "AI programming tools",
      "developer tools",
      "coding software",
    ],

    alternates: {
      canonical:
        `${siteUrl}/guides/${guide.slug}`,
    },

    openGraph: {
      title:
        guide.title,

      description:
        guide.description,

      url:
        `${siteUrl}/guides/${guide.slug}`,

      siteName:
        "NorthSky Reviews",

      type:
        "article",
    },
  };
}

export default async function AICodingToolsGuide({
  params,
}) {
  const { slug: currentSlug } = await params;

  const guide = guides.find(
    (item) => item.slug === currentSlug
  );

  if (!guide) {
    notFound();
  }

  const products = (guide.products || [])
    .map((id) =>
      tools.find(
        (tool) => tool.slug === id
      )
    )
    .filter(Boolean);

  const faq = [
    {
      q: "What are AI coding tools?",
      a:
        "AI coding tools are software assistants that can help developers write, explain, refactor, debug and understand code.",
    },
    {
      q: "What is the best AI coding tool in 2026?",
      a:
        "The best tool depends on your programming language, development environment, workflow and the type of assistance you need. NorthSky Reviews compares tools based on features, usability and overall value.",
    },
    {
      q: "Can AI coding tools replace developers?",
      a:
        "AI coding assistants can automate parts of software development, but developers remain responsible for architecture, testing, security, requirements, code review and final decisions.",
    },
    {
      q: "Are AI coding tools good for beginners?",
      a:
        "They can be useful for beginners because they can explain programming concepts and provide examples. Beginners should still learn the fundamentals rather than relying entirely on generated code.",
    },
    {
      q: "Are AI coding tools free?",
      a:
        "Some AI coding tools offer free plans or limited usage. Premium features, higher usage limits and advanced models may require paid subscriptions.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline:
      guide.title,

    description:
      guide.description,

    url:
      `${siteUrl}/guides/${guide.slug}`,

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

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        `${siteUrl}/guides/${guide.slug}`,
    },

    about: [
      "Artificial Intelligence",
      "Software Development",
      "Programming",
      "Developer Tools",
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

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* SCHEMA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(schema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(faqSchema),
        }}
      />

      {/* HERO */}

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 px-6 py-24 text-white">

        <div className="mx-auto max-w-6xl">

          <Link
            href="/guides"
            className="text-sm font-bold text-blue-300 hover:text-white"
          >
            ← Back to Guides
          </Link>

          <div className="mt-8">

            <span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">
              🤖 AI Developer Guide
            </span>

          </div>

          <h1 className="mt-8 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Best AI Coding Tools 2026
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-300">
            Discover AI coding assistants that can help developers
            write code faster, understand complex projects, debug
            problems and improve software development workflows.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/all-tools"
              className="rounded-xl bg-blue-600 px-8 py-4 font-bold hover:bg-blue-500"
            >
              Explore AI Tools →
            </Link>

            <Link
              href="/comparisons"
              className="rounded-xl border border-white/30 px-8 py-4 font-bold hover:bg-white/10"
            >
              Compare Tools →
            </Link>

          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="mx-auto max-w-6xl px-6 py-16">

        <div className="max-w-4xl">

          <p className="font-bold uppercase tracking-wider text-blue-600">
            2026 Guide
          </p>

          <h2 className="mt-3 text-4xl font-black">
            AI is changing how software gets built
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            AI coding assistants can help with many parts of the
            development process, from generating code and explaining
            unfamiliar functions to debugging errors and creating
            documentation.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            The best tool depends on your development environment,
            programming languages, workflow and how much control you
            want over generated code.
          </p>

        </div>

      </section>

      {/* RECOMMENDED TOOLS */}

      <section className="bg-slate-50 px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-wrap items-end justify-between gap-5">

            <div>

              <p className="font-bold uppercase tracking-wider text-blue-600">
                Top Picks
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Best AI Coding Tools
              </h2>

            </div>

            <span className="rounded-full bg-white px-5 py-3 font-bold shadow-sm">
              {products.length} Featured Tools
            </span>

          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            {products.length === 0 ? (

              <div className="rounded-3xl border bg-white p-8">
                More developer recommendations coming soon.
              </div>

            ) : (

              products.map((product, index) => (

                <article
                  key={product.slug}
                  className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="flex items-center justify-between">

                    <span className="font-black text-blue-600">
                      #{index + 1} Pick
                    </span>

                    {product.rating && (
                      <span className="font-bold text-yellow-500">
                        ★ {product.rating}/10
                      </span>
                    )}

                  </div>

                  <h3 className="mt-6 text-3xl font-black">
                    {product.name}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {product.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">

                    <Link
                      href={`/reviews/${product.slug}`}
                      className="rounded-xl bg-slate-900 px-5 py-3 font-bold text-white"
                    >
                      Read Review
                    </Link>

                    {product.link && (
                      <a
                        href={product.link}
                        target="_blank"
                        rel="nofollow sponsored noopener"
                        className="rounded-xl bg-blue-600 px-5 py-3 font-bold text-white"
                      >
                        Visit Website →
                      </a>
                    )}

                  </div>

                </article>

              ))

            )}

          </div>

        </div>

      </section>

      {/* HOW WE CHOOSE */}

      <section className="mx-auto max-w-6xl px-6 py-20">

        <p className="font-bold uppercase tracking-wider text-blue-600">
          Our Method
        </p>

        <h2 className="mt-3 text-4xl font-black">
          How we evaluate AI coding tools
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {[
            [
              "⚡ Productivity",
              "How effectively the tool can help developers complete common programming tasks.",
            ],
            [
              "🧠 AI Capability",
              "How well the assistant handles coding questions, generation, explanation and debugging.",
            ],
            [
              "💻 Developer Experience",
              "Ease of use, integrations and compatibility with common development workflows.",
            ],
            [
              "💰 Value",
              "Features and usefulness relative to the cost of the service.",
            ],
          ].map(([title, description]) => (

            <div
              key={title}
              className="rounded-3xl border bg-white p-7"
            >

              <h3 className="text-xl font-black">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {description}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* USE CASES */}

      <section className="bg-slate-50 px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-4xl font-black">
            What can AI coding tools help with?
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {[
              "Writing new functions",
              "Explaining existing code",
              "Debugging errors",
              "Refactoring code",
              "Generating tests",
              "Creating documentation",
              "Learning programming",
              "Working with APIs",
              "Building prototypes",
            ].map((item) => (

              <div
                key={item}
                className="rounded-2xl border bg-white p-6 font-bold"
              >
                ✓ {item}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* COMPARISONS */}

      <section className="mx-auto max-w-6xl px-6 py-20">

        <p className="font-bold uppercase tracking-wider text-blue-600">
          Compare
        </p>

        <h2 className="mt-3 text-4xl font-black">
          Compare AI & Software Tools
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {comparisons.slice(0, 3).map((item) => (

            <Link
              key={item.slug}
              href={`/comparisons/${item.slug}`}
              className="rounded-3xl border bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
            >

              <h3 className="text-xl font-black">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {item.description}
              </p>

              <div className="mt-5 font-bold text-blue-600">
                Compare →
              </div>

            </Link>

          ))}

        </div>

      </section>

      {/* FAQ */}

      <section className="bg-slate-50 px-6 py-20">

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
                className="rounded-2xl border bg-white p-7"
              >

                <h3 className="text-lg font-black">
                  {item.q}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.a}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* DISCLOSURE */}

      <section className="mx-auto max-w-5xl px-6 py-10">

        <div className="rounded-2xl border bg-slate-50 p-6 text-sm leading-6 text-slate-500">

          <strong className="text-slate-700">
            Affiliate Disclosure:
          </strong>{" "}
          NorthSky Reviews may earn a commission when you purchase products
          or services through qualifying links on this website. Affiliate
          relationships do not determine our editorial ratings or
          recommendations.

        </div>

      </section>

      {/* CTA */}

      <section className="bg-blue-600 px-6 py-20 text-center text-white">

        <div className="mx-auto max-w-3xl">

          <h2 className="text-4xl font-black md:text-5xl">
            Build Faster With AI
          </h2>

          <p className="mt-5 text-lg text-blue-100">
            Explore AI tools that can help with your next software project.
          </p>

          <Link
            href="/all-tools"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-600"
          >
            Explore AI Tools →
          </Link>

        </div>

      </section>

    </main>
  );
}