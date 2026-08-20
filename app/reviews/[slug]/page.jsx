import Link from "next/link";
import { notFound } from "next/navigation";
import { tools } from "@/app/data/tools";

const siteUrl = "https://north-sky-reviews-f1gr.vercel.app";

export function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const tool = tools.find((item) => item.slug === slug);

  if (!tool) {
    return {
      title: "Review Not Found | NorthSky Reviews",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${tool.name} Review 2026 | Features, Pricing & Alternatives`,
    description: `Read our ${tool.name} review covering features, pricing, pros, cons, ratings, alternatives, and overall value in 2026.`,
    keywords: [
      `${tool.name} review`,
      `${tool.name} pricing`,
      `${tool.name} alternatives`,
      `${tool.name} features`,
      `${tool.name} pros and cons`,
      `${tool.category || "software"} reviews`,
    ],
    alternates: {
      canonical: `${siteUrl}/reviews/${tool.slug}`,
    },
    openGraph: {
      title: `${tool.name} Review 2026 | NorthSky Reviews`,
      description:
        tool.description ||
        `Read the NorthSky Reviews evaluation of ${tool.name}.`,
      url: `${siteUrl}/reviews/${tool.slug}`,
      siteName: "NorthSky Reviews",
      locale: "en_CA",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.name} Review 2026`,
      description:
        tool.description ||
        `Features, pricing, pros, cons and alternatives for ${tool.name}.`,
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  };
}

export default async function ReviewPage({ params }) {
  const { slug } = await params;

  const tool = tools.find((item) => item.slug === slug);

  if (!tool) {
    notFound();
  }

  const rating = Number(tool.rating || 0);

  const scores = [
    {
      name: "Features",
      score: Number(tool.featureScore || 9),
    },
    {
      name: "Ease of Use",
      score: Number(tool.easeScore || 9),
    },
    {
      name: "Performance",
      score: Number(tool.performanceScore || 9),
    },
    {
      name: "Value",
      score: Number(tool.valueScore || 8),
    },
  ];

  const pros = tool.pros || [
    "Strong feature set",
    "Easy to use",
    "Good overall value",
  ];

  const cons = tool.cons || [
    "Pricing may vary by plan",
    "Some advanced features may require a paid plan",
  ];

  const features = tool.features || [
    "Core platform features",
    "Productivity capabilities",
    "Integrations and workflows",
    "Multiple pricing options",
  ];

  const alternatives = Array.isArray(tool.alternatives)
    ? tool.alternatives
    : [];

  const faq = [
    {
      question: `Is ${tool.name} worth it in 2026?`,
      answer: `${tool.name} can be a strong option for users who need ${
        tool.category?.toLowerCase() || "technology"
      } capabilities. NorthSky Reviews evaluates it based on features, usability, performance, pricing, and overall value.`,
    },
    {
      question: `How much does ${tool.name} cost?`,
      answer: tool.price
        ? `${tool.name} currently has pricing listed as ${tool.price}. Check the official website for the latest plans and pricing.`
        : `Pricing for ${tool.name} can change. Check the official website for current plans and pricing.`,
    },
    {
      question: `What are the best ${tool.name} alternatives?`,
      answer:
        alternatives.length > 0
          ? `Popular alternatives covered by NorthSky Reviews include ${alternatives.join(
              ", "
            )}.`
          : `NorthSky Reviews compares ${tool.name} with competing products based on features, pricing, usability, and value.`,
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Review",
        "@id": `${siteUrl}/reviews/${tool.slug}#review`,
        name: `${tool.name} Review 2026`,
        headline: `${tool.name} Review 2026`,
        description:
          tool.description ||
          `NorthSky Reviews evaluation of ${tool.name}.`,
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
        reviewRating: {
          "@type": "Rating",
          ratingValue: rating,
          bestRating: 10,
          worstRating: 1,
        },
        itemReviewed: {
          "@type": "SoftwareApplication",
          name: tool.name,
          description: tool.description,
          applicationCategory: tool.category || "Software",
          ...(tool.link ? { url: tool.link } : {}),
        },
      },
      {
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
            name: `${tool.name} Review`,
            item: `${siteUrl}/reviews/${tool.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
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

      {/* BREADCRUMBS */}
      <div className="mx-auto max-w-6xl px-6 py-6 text-sm text-slate-500">
        <Link href="/" className="hover:text-blue-600">
          Home
        </Link>

        <span className="mx-2">/</span>

        <Link href="/reviews" className="hover:text-blue-600">
          Reviews
        </Link>

        <span className="mx-2">/</span>

        <span>{tool.name}</span>
      </div>

      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-800 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-bold text-blue-300">
              {tool.category || "Software"}
            </span>

            <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm font-bold text-green-300">
              ⭐ {rating}/10
            </span>
          </div>

          <h1 className="mt-7 text-5xl font-black tracking-tight md:text-7xl">
            {tool.name} Review
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-300">
            {tool.description ||
              `Our complete review of ${tool.name}, including features, pricing, performance, pros, cons, and alternatives.`}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            {tool.link && (
              <a
                href={tool.link}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="rounded-xl bg-white px-8 py-4 font-black text-blue-700 transition hover:bg-slate-100"
              >
                Visit {tool.name} →
              </a>
            )}

            <Link
              href="/comparisons"
              className="rounded-xl border border-white/30 px-8 py-4 font-black transition hover:bg-white/10"
            >
              Compare Alternatives
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK SUMMARY */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-4">
            <QuickFact
              title="Overall Rating"
              value={`${rating}/10`}
            />

            <QuickFact
              title="Category"
              value={tool.category || "Software"}
            />

            <QuickFact
              title="Best For"
              value={tool.bestFor || "General users"}
            />

            <QuickFact
              title="Pricing"
              value={tool.price || "Check website"}
            />
          </div>
        </div>
      </section>

      {/* MAIN REVIEW */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-black">
              What Is {tool.name}?
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              {tool.name} is a{" "}
              {tool.category?.toLowerCase() || "software"} platform.
              NorthSky Reviews evaluates this product using consistent
              criteria including features, pricing, usability,
              performance, security, and overall value.
            </p>

            {/* SCORE BREAKDOWN */}
            <h2 className="mt-14 text-3xl font-black">
              NorthSky Score Breakdown
            </h2>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {scores.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl bg-slate-50 p-6"
                >
                  <div className="flex justify-between gap-4 font-black">
                    <span>{item.name}</span>

                    <span className="text-blue-600">
                      {item.score}/10
                    </span>
                  </div>

                  <div className="mt-4 h-2 rounded-full bg-slate-200">
                    <div
                      className="h-2 rounded-full bg-blue-600"
                      style={{
                        width: `${Math.min(
                          Math.max(item.score, 0) * 10,
                          100
                        )}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* PROS / CONS */}
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl bg-green-50 p-8">
                <h2 className="text-2xl font-black text-green-700">
                  What We Like
                </h2>

                <ul className="mt-5 space-y-3 text-slate-700">
                  {pros.map((item) => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl bg-red-50 p-8">
                <h2 className="text-2xl font-black text-red-700">
                  What Could Be Better
                </h2>

                <ul className="mt-5 space-y-3 text-slate-700">
                  {cons.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FEATURES */}
            <h2 className="mt-14 text-3xl font-black">
              Key Features
            </h2>

            <ul className="mt-6 space-y-4">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="rounded-xl bg-slate-50 p-4"
                >
                  <span className="font-bold text-blue-600">
                    ✓
                  </span>{" "}
                  {feature}
                </li>
              ))}
            </ul>

            {/* VERDICT */}
            <div className="mt-14 rounded-3xl bg-blue-50 p-8">
              <p className="text-sm font-black uppercase tracking-widest text-blue-600">
                NorthSky Verdict
              </p>

              <h2 className="mt-3 text-3xl font-black">
                Is {tool.name} Worth It?
              </h2>

              <p className="mt-5 leading-8 text-slate-700">
                {tool.name} is worth considering if its features,
                pricing, and capabilities match your needs. Our
                overall score of <strong>{rating}/10</strong> reflects
                our evaluation of its features, usability, performance,
                and value.
              </p>
            </div>

            {/* ALTERNATIVES */}
            {alternatives.length > 0 && (
              <>
                <h2 className="mt-14 text-3xl font-black">
                  {tool.name} Alternatives
                </h2>

                <p className="mt-4 text-slate-600">
                  Looking for another option? Explore these related
                  software reviews.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {alternatives.map((alt) => (
                    <Link
                      key={alt}
                      href={`/reviews/${alt}`}
                      className="rounded-xl bg-blue-50 px-5 py-3 font-bold text-blue-700 transition hover:bg-blue-100"
                    >
                      {alt}
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* SIDEBAR */}
          <aside className="h-fit rounded-3xl bg-slate-50 p-8 lg:sticky lg:top-8">
            <p className="text-sm font-black uppercase tracking-widest text-blue-600">
              Quick Review
            </p>

            <h2 className="mt-3 text-3xl font-black">
              {tool.name}
            </h2>

            <div className="mt-6 text-5xl font-black text-blue-600">
              {rating}/10
            </div>

            <p className="mt-2 text-slate-500">
              NorthSky Rating
            </p>

            <div className="mt-8 space-y-5 border-t pt-6">
              <div>
                <p className="text-sm font-bold text-slate-500">
                  Category
                </p>

                <p className="mt-1 font-black">
                  {tool.category || "Software"}
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-slate-500">
                  Best For
                </p>

                <p className="mt-1 font-black">
                  {tool.bestFor || "General users"}
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-slate-500">
                  Pricing
                </p>

                <p className="mt-1 font-black">
                  {tool.price || "Check website"}
                </p>
              </div>
            </div>

            {tool.link && (
              <a
                href={tool.link}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="mt-8 block rounded-xl bg-blue-600 px-6 py-4 text-center font-black text-white transition hover:bg-blue-700"
              >
                Visit Official Website →
              </a>
            )}
          </aside>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-black uppercase tracking-widest text-blue-600">
            FAQ
          </p>

          <h2 className="mt-3 text-center text-4xl font-black">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-5">
            {faq.map((item) => (
              <div
                key={item.question}
                className="rounded-3xl border bg-white p-7"
              >
                <h3 className="text-xl font-black">
                  {item.question}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black md:text-5xl">
            Ready to Try {tool.name}?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-blue-100">
            Check the latest features, pricing, and availability on
            the official website.
          </p>

          {tool.link && (
            <a
              href={tool.link}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-black text-blue-600 transition hover:bg-slate-100"
            >
              Visit {tool.name} →
            </a>
          )}
        </div>
      </section>

      {/* DISCLOSURE */}
      <section className="border-t px-6 py-8">
        <p className="mx-auto max-w-4xl text-center text-xs leading-6 text-slate-500">
          NorthSky Reviews may earn commissions from qualifying
          affiliate partnerships. Affiliate relationships do not
          determine our editorial rankings or opinions.
        </p>
      </section>
    </main>
  );
}

function QuickFact({ title, value }) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <p className="text-sm font-bold text-slate-500">
        {title}
      </p>

      <p className="mt-2 text-xl font-black">
        {value}
      </p>
    </div>
  );
}
