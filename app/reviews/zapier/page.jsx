import Link from "next/link";

export const dynamic = "force-static";

const siteUrl = "https://northsky-reviews.vercel.app";
const pageUrl = `${siteUrl}/reviews/zapier`;

export const metadata = {
  title:
    "Zapier Review 2026 | Features, Pricing, Pros & Cons | NorthSky Reviews",

  description:
    "Zapier review 2026 covering automation features, integrations, ease of use, pricing, strengths, weaknesses, alternatives, and who Zapier is best for.",

  keywords: [
    "Zapier review 2026",
    "Zapier review",
    "Zapier pricing",
    "Zapier automation",
    "Zapier alternatives",
    "AI automation tools",
    "workflow automation software",
    "business automation",
    "no code automation",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: "Zapier Review 2026 | NorthSky Reviews",
    description:
      "Explore Zapier features, pricing, automation capabilities, pros, cons, and alternatives.",
    url: pageUrl,
    siteName: "NorthSky Reviews",
    locale: "en_CA",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zapier Review 2026 | NorthSky Reviews",
    description:
      "Zapier features, pricing, pros, cons, and alternatives.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const scores = [
  ["Features", "9.7"],
  ["Ease of Use", "9.8"],
  ["Integrations", "9.9"],
  ["Automation", "9.6"],
  ["Value", "9.0"],
];

const pros = [
  "Large ecosystem of application integrations",
  "Easy visual workflow creation",
  "Useful for businesses and individual users",
  "No-code automation options",
  "Supports multi-step workflows",
];

const cons = [
  "Advanced automation can become expensive",
  "Pricing depends heavily on workflow usage",
  "Complex workflows may require more technical planning",
];

const useCases = [
  {
    title: "Lead Management",
    description:
      "Connect forms, CRM platforms, email systems, spreadsheets, and notifications to automate lead workflows.",
  },
  {
    title: "Marketing",
    description:
      "Automate repetitive marketing tasks such as notifications, data transfers, content workflows, and campaign processes.",
  },
  {
    title: "Sales",
    description:
      "Move customer information between sales applications and trigger follow-up tasks automatically.",
  },
  {
    title: "Productivity",
    description:
      "Connect everyday applications and reduce repetitive administrative work.",
  },
];

const faqs = [
  {
    question: "What is Zapier?",
    answer:
      "Zapier is a workflow automation platform that connects applications and allows users to automate actions between them.",
  },
  {
    question: "Is Zapier easy to use?",
    answer:
      "Zapier is designed to make workflow automation accessible without requiring traditional programming for many common use cases.",
  },
  {
    question: "What is Zapier best for?",
    answer:
      "Zapier is particularly useful for connecting business applications, automating repetitive tasks, managing leads, and building productivity workflows.",
  },
  {
    question: "Is Zapier worth it?",
    answer:
      "Zapier can be valuable when automation saves meaningful time or reduces repetitive manual work. The right plan depends on workflow volume and the features required.",
  },
  {
    question: "What are Zapier alternatives?",
    answer:
      "Popular alternatives include Make, n8n, Microsoft Power Automate, and Pipedream. The best option depends on complexity, integrations, technical requirements, and budget.",
  },
];

export default function ZapierReviewPage() {
  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name:
          "Zapier Review 2026 | NorthSky Reviews",
        description:
          "Zapier review covering features, pricing, automation, integrations, pros, cons, and alternatives.",

        isPartOf: {
          "@type": "WebSite",
          "@id": `${siteUrl}#website`,
          name: "NorthSky Reviews",
          url: siteUrl,
        },

        breadcrumb: {
          "@id": `${pageUrl}#breadcrumb`,
        },

        mainEntity: {
          "@id": `${pageUrl}#article`,
        },
      },

      {
        "@type": "Article",
        "@id": `${pageUrl}#article`,
        headline:
          "Zapier Review 2026",
        description:
          "A detailed review of Zapier's automation platform, features, integrations, usability, pricing considerations, strengths, weaknesses, and alternatives.",
        url: pageUrl,

        datePublished: "2026-08-12",
        dateModified: "2026-08-12",

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
      },

      {
        "@type": "Review",
        "@id": `${pageUrl}#review`,
        itemReviewed: {
          "@type": "SoftwareApplication",
          name: "Zapier",
          applicationCategory:
            "BusinessApplication",
        },

        reviewRating: {
          "@type": "Rating",
          ratingValue: "9.6",
          bestRating: "10",
          worstRating: "1",
        },

        author: {
          "@type": "Organization",
          name: "NorthSky Reviews",
        },
      },

      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,

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
            name: "Reviews",
            item: `${siteUrl}/reviews`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Zapier Review",
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* HERO */}

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 px-6 py-24 text-white">

        <div className="mx-auto max-w-6xl">

          <Link
            href="/reviews"
            className="text-sm font-bold text-blue-300 hover:text-white"
          >
            ← Back to Reviews
          </Link>

          <div className="mt-10 max-w-4xl">

            <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-black text-blue-300">
              ⚙️ AUTOMATION SOFTWARE REVIEW
            </span>

            <h1 className="mt-7 text-5xl font-black tracking-tight md:text-7xl">
              Zapier Review
              <span className="text-blue-400">
                {" "}2026
              </span>
            </h1>

            <p className="mt-7 text-xl leading-8 text-slate-300">
              A practical look at Zapier's automation platform,
              integrations, workflow capabilities, usability,
              pricing considerations, strengths, weaknesses,
              and alternatives.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/ai/best-ai-automation-tools-2026"
                className="rounded-xl bg-blue-600 px-7 py-4 font-black hover:bg-blue-500"
              >
                Automation Rankings →
              </Link>

              <Link
                href="/comparisons"
                className="rounded-xl border border-white/30 px-7 py-4 font-black hover:bg-white/10"
              >
                Compare Software →
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* SUMMARY */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-8 lg:grid-cols-3">

            <div className="rounded-3xl border bg-slate-50 p-8 lg:col-span-2">

              <p className="text-sm font-black uppercase tracking-widest text-blue-600">
                OUR TAKE
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Is Zapier worth considering?
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Zapier is a strong option for people and businesses
                that want to connect applications and automate
                repetitive workflows without building everything
                from scratch.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Its biggest strength is the combination of
                integrations and accessible workflow creation.
                For teams with recurring processes across multiple
                applications, automation can reduce manual work
                and improve consistency.
              </p>

            </div>

            <div className="rounded-3xl bg-slate-950 p-8 text-white">

              <p className="text-sm font-black uppercase tracking-widest text-blue-400">
                NORTHSKY SCORE
              </p>

              <div className="mt-5 text-6xl font-black">
                9.6
                <span className="text-2xl text-slate-400">
                  /10
                </span>
              </div>

              <p className="mt-4 text-slate-300">
                Strong overall automation platform.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SCORES */}

      <section className="bg-slate-50 px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-4xl font-black">
            Zapier Ratings
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

            {scores.map(([label, score]) => (

              <div
                key={label}
                className="rounded-3xl bg-white p-6 text-center shadow-sm"
              >

                <p className="text-sm font-bold text-slate-500">
                  {label}
                </p>

                <p className="mt-3 text-4xl font-black text-blue-600">
                  {score}
                </p>

                <p className="text-xs font-bold text-slate-400">
                  / 10
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <p className="text-sm font-black uppercase tracking-widest text-blue-600">
            FEATURES
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            What Can Zapier Do?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {[
              "Connect applications",
              "Automate repetitive workflows",
              "Create multi-step processes",
              "Trigger actions between services",
              "Move information between applications",
              "Build business productivity workflows",
            ].map((feature) => (

              <div
                key={feature}
                className="rounded-2xl border p-6"
              >
                <span className="font-black">
                  ✓ {feature}
                </span>
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* USE CASES */}

      <section className="bg-slate-50 px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-4xl font-black">
            Best Zapier Use Cases
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {useCases.map((item) => (

              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-sm"
              >

                <h3 className="text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PROS CONS */}

      <section className="px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-4xl font-black">
            Zapier Pros & Cons
          </h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">

            <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-8">

              <h3 className="text-2xl font-black text-emerald-800">
                What We Like
              </h3>

              <ul className="mt-6 space-y-4">

                {pros.map((item) => (
                  <li
                    key={item}
                    className="leading-7 text-slate-700"
                  >
                    ✓ {item}
                  </li>
                ))}

              </ul>

            </div>

            <div className="rounded-3xl border border-amber-100 bg-amber-50 p-8">

              <h3 className="text-2xl font-black text-amber-800">
                Things to Consider
              </h3>

              <ul className="mt-6 space-y-4">

                {cons.map((item) => (
                  <li
                    key={item}
                    className="leading-7 text-slate-700"
                  >
                    • {item}
                  </li>
                ))}

              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* ALTERNATIVES */}

      <section className="bg-slate-950 px-6 py-24 text-white">

        <div className="mx-auto max-w-6xl">

          <p className="text-sm font-black uppercase tracking-widest text-blue-400">
            ALTERNATIVES
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Zapier Alternatives
          </h2>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {[
              ["Make", "/reviews/make"],
              ["n8n", "/reviews/n8n"],
              ["Power Automate", "/reviews/microsoft-power-automate"],
              ["Pipedream", "/reviews/pipedream"],
            ].map(([name, href]) => (

              <Link
                key={name}
                href={href}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
              >

                <h3 className="text-xl font-black">
                  {name}
                </h3>

                <span className="mt-4 block font-bold text-blue-400">
                  View Review →
                </span>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section
        id="faq"
        className="bg-slate-50 px-6 py-24"
      >

        <div className="mx-auto max-w-5xl">

          <h2 className="text-center text-4xl font-black">
            Zapier FAQ
          </h2>

          <div className="mt-10 space-y-5">

            {faqs.map((faq) => (

              <details
                key={faq.question}
                className="rounded-3xl border bg-white p-6"
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

      {/* INTERNAL LINKS */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-6xl rounded-3xl border p-8 md:p-10">

          <h2 className="text-3xl font-black">
            Continue Researching
          </h2>

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <Link
              href="/ai/best-ai-automation-tools-2026"
              className="rounded-xl bg-slate-950 p-5 font-black text-white hover:bg-blue-600"
            >
              AI Automation →
            </Link>

            <Link
              href="/ai/best-ai-tools-2026"
              className="rounded-xl border p-5 font-black hover:border-blue-300"
            >
              Best AI Tools →
            </Link>

            <Link
              href="/comparisons"
              className="rounded-xl border p-5 font-black hover:border-blue-300"
            >
              Comparisons →
            </Link>

            <Link
              href="/guides"
              className="rounded-xl border p-5 font-black hover:border-blue-300"
            >
              Buying Guides →
            </Link>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-blue-600 px-6 py-20 text-center text-white">

        <div className="mx-auto max-w-4xl">

          <h2 className="text-4xl font-black md:text-5xl">
            Ready to Explore More Automation Tools?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            Compare automation platforms and discover software
            that fits your workflow.
          </p>

          <Link
            href="/ai/best-ai-automation-tools-2026"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-black text-blue-600 hover:bg-slate-100"
          >
            View AI Automation Rankings →
          </Link>

        </div>

      </section>

      {/* DISCLOSURE */}

      <section className="border-t px-6 py-8">

        <p className="mx-auto max-w-4xl text-center text-xs leading-6 text-slate-500">
          <strong className="text-slate-700">
            Affiliate Disclosure:
          </strong>{" "}
          NorthSky Reviews may earn commissions from qualifying
          affiliate partnerships. Affiliate relationships help
          support the website and do not determine editorial
          rankings or recommendations.
        </p>

      </section>

    </main>
  );
}