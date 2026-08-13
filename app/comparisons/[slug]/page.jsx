import Link from "next/link";
import { notFound } from "next/navigation";

import { comparisons } from "@/app/data/comparisons";
import { tools } from "@/app/data/tools";

const SITE_URL = "https://northsky-reviews.vercel.app";

export async function generateStaticParams() {
  return comparisons.map((comparison) => ({
    slug: comparison.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const comparison = comparisons.find(
    (item) => item.slug === slug
  );

  if (!comparison) {
    return {
      title: "Comparison Not Found | NorthSky Reviews",
    };
  }

  return {
    title: `${comparison.title} 2026: Features, Pricing & Winner | NorthSky Reviews`,

    description:
      comparison.description ||
      `Compare ${comparison.title} features, pricing, performance, pros, cons, and overall value.`,

    keywords: [
      `${comparison.title} comparison`,
      `${comparison.title} vs`,
      "software comparison 2026",
      "AI tool comparison",
      "technology comparisons",
      "software alternatives",
    ],

    alternates: {
      canonical: `${SITE_URL}/comparisons/${comparison.slug}`,
    },

    openGraph: {
      title: `${comparison.title} 2026 Comparison`,
      description:
        comparison.description ||
        `Compare ${comparison.title} and find the best option for your needs.`,
      url: `${SITE_URL}/comparisons/${comparison.slug}`,
      siteName: "NorthSky Reviews",
      locale: "en_CA",
      type: "article",
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function ComparisonPage({ params }) {
  const { slug } = await params;

  const comparison = comparisons.find(
    (item) => item.slug === slug
  );

  if (!comparison) {
    notFound();
  }

  /*
   * Resolve products.
   *
   * Supports:
   *
   * products: ["chatgpt", "claude"]
   *
   * AND:
   *
   * productA: { slug: "chatgpt" }
   * productB: { slug: "claude" }
   */

  const productIds = Array.isArray(comparison.products)
    ? comparison.products
    : [];

  const resolvedProducts = productIds
    .map((id) => {
      const slug =
        typeof id === "string"
          ? id
          : id?.slug;

      return tools.find(
        (tool) => tool.slug === slug
      );
    })
    .filter(Boolean);

  const productA =
    comparison.productA ||
    resolvedProducts[0] ||
    null;

  const productB =
    comparison.productB ||
    resolvedProducts[1] ||
    null;

  const productAName =
    productA?.name || "Option A";

  const productBName =
    productB?.name || "Option B";

  const productAScore =
    Number(productA?.rating) || 9;

  const productBScore =
    Number(productB?.rating) || 8;

  const faq = [
    {
      q: `Which is better: ${productAName} or ${productBName}?`,

      a:
        comparison.winner
          ? `NorthSky Reviews selected ${comparison.winner} as the overall winner based on features, pricing, usability, performance, and value. The best choice can still depend on your individual needs.`
          : `The best choice depends on your needs. NorthSky Reviews compares features, pricing, usability, performance, and overall value to help you decide.`,
    },

    {
      q: `What is the main difference between ${productAName} and ${productBName}?`,

      a:
        "The main differences can include features, pricing, performance, integrations, usability, and the types of users each product is designed for.",
    },

    {
      q: "Does NorthSky Reviews recommend a winner?",

      a:
        comparison.winner
          ? `Yes. For this comparison, NorthSky Reviews selected ${comparison.winner} as the overall winner.`
          : "NorthSky Reviews evaluates both products without automatically selecting a winner. The best choice depends on the user's requirements.",
    },
  ];

  const pageUrl =
    `${SITE_URL}/comparisons/${comparison.slug}`;

  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Article",

        "@id": `${pageUrl}#article`,

        headline: comparison.title,

        description:
          comparison.description ||
          `Compare ${productAName} and ${productBName}.`,

        url: pageUrl,

        author: {
          "@type": "Organization",
          name: "NorthSky Reviews",
          url: SITE_URL,
        },

        publisher: {
          "@type": "Organization",
          name: "NorthSky Reviews",
          url: SITE_URL,
        },

        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": pageUrl,
        },
      },

      {
        "@type": "BreadcrumbList",

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
            name: "Comparisons",
            item: `${SITE_URL}/comparisons`,
          },

          {
            "@type": "ListItem",
            position: 3,
            name: comparison.title,
            item: pageUrl,
          },
        ],
      },

      {
        "@type": "FAQPage",

        mainEntity: faq.map((item) => ({
          "@type": "Question",

          name: item.q,

          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  const features = comparison.features || [
    {
      name: "Overall Rating",
      a: `${productAScore}/10`,
      b: `${productBScore}/10`,
    },
    {
      name: "Pricing",
      a: productA?.price || "Varies",
      b: productB?.price || "Varies",
    },
    {
      name: "Best For",
      a: productA?.bestFor || "General users",
      b: productB?.bestFor || "Advanced users",
    },
  ];

  const productAPros =
    productA?.pros || [
      "Strong feature set",
      "Easy to use",
      "Good overall value",
    ];

  const productBPros =
    productB?.pros || [
      "Advanced capabilities",
      "Strong performance",
      "Useful for experienced users",
    ];

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* SCHEMA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      {/* BREADCRUMBS */}

      <div className="mx-auto max-w-6xl px-6 pt-8 text-sm text-slate-500">

        <Link
          href="/"
          className="hover:text-blue-600"
        >
          Home
        </Link>

        <span className="mx-2">/</span>

        <Link
          href="/comparisons"
          className="hover:text-blue-600"
        >
          Comparisons
        </Link>

        <span className="mx-2">/</span>

        <span>{comparison.title}</span>

      </div>

      {/* HERO */}

      <section className="mt-8 bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 px-6 py-20 text-white">

        <div className="mx-auto max-w-6xl">

          <span className="inline-flex rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300 ring-1 ring-blue-400/20">
            ⚖️ NorthSky Software Comparison
          </span>

          <h1 className="mt-7 max-w-5xl text-5xl font-black tracking-tight md:text-7xl">
            {comparison.title}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            {comparison.description ||
              `Compare ${productAName} and ${productBName} across features, pricing, performance, usability, and overall value.`}
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            <ProductHeroCard
              product={productA}
              name={productAName}
              score={productAScore}
              position="Option 1"
            />

            <ProductHeroCard
              product={productB}
              name={productBName}
              score={productBScore}
              position="Option 2"
            />

          </div>

        </div>

      </section>

      {/* QUICK VERDICT */}

      <section className="px-6 py-16">

        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-100 bg-blue-50 p-8 text-center md:p-12">

          <div className="text-5xl">
            🏆
          </div>

          <p className="mt-5 text-sm font-black uppercase tracking-widest text-blue-600">
            NorthSky Verdict
          </p>

          <h2 className="mt-3 text-4xl font-black">

            {comparison.winner
              ? `${comparison.winner} Wins`
              : "Which One Should You Choose?"}

          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-slate-600">

            {comparison.winner
              ? `${comparison.winner} is our overall pick for this comparison based on features, pricing, usability, performance, and overall value.`
              : "Consider your budget, required features, workflow, and experience level before making your decision."}

          </p>

        </div>

      </section>

      {/* COMPARISON TABLE */}

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">

          <table className="w-full min-w-[650px] text-left">

            <thead className="bg-slate-950 text-white">

              <tr>

                <th className="p-5">
                  Feature
                </th>

                <th className="p-5">
                  {productAName}
                </th>

                <th className="p-5">
                  {productBName}
                </th>

              </tr>

            </thead>

            <tbody>

              {features.map((row) => (

                <tr
                  key={row.name}
                  className="border-t border-slate-200"
                >

                  <td className="p-5 font-black">
                    {row.name}
                  </td>

                  <td className="p-5 text-slate-600">
                    {row.a}
                  </td>

                  <td className="p-5 text-slate-600">
                    {row.b}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </section>

      {/* SCORE BREAKDOWN */}

      <section className="bg-slate-50 px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-4xl font-black">
            Score Breakdown
          </h2>

          <div className="mt-12 grid gap-7 md:grid-cols-2">

            <ScoreCard
              name={productAName}
              score={productAScore}
            />

            <ScoreCard
              name={productBName}
              score={productBScore}
            />

          </div>

        </div>

      </section>

      {/* PROS */}

      <section className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2">

        <ProsCard
          title={`Why Choose ${productAName}`}
          items={productAPros}
        />

        <ProsCard
          title={`Why Choose ${productBName}`}
          items={productBPros}
        />

      </section>

      {/* FULL REVIEWS */}

      <section className="bg-slate-50 px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-4xl font-black">
            Read Full Reviews
          </h2>

          <div className="mt-10 grid gap-7 md:grid-cols-2">

            {[productA, productB]
              .filter(Boolean)
              .map((product) => (

                <Link
                  key={product.slug}
                  href={`/reviews/${product.slug}`}
                  className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >

                  <p className="font-bold text-blue-600">
                    Full Review
                  </p>

                  <h3 className="mt-4 text-3xl font-black">
                    {product.name}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    Read features, pricing, pros, cons,
                    alternatives, and our overall assessment.
                  </p>

                  <span className="mt-6 block font-black text-blue-600">
                    Read Review →
                  </span>

                </Link>

              ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-center text-white md:p-14">

          <h2 className="text-4xl font-black">
            Ready to Choose?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-blue-100">
            Check current features, pricing, and offers
            before making your final decision.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            {productA?.link && (
              <a
                href={productA.link}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="rounded-xl bg-white px-7 py-4 font-black text-blue-600"
              >
                Try {productAName} →
              </a>
            )}

            {productB?.link && (
              <a
                href={productB.link}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="rounded-xl border border-white/40 px-7 py-4 font-black text-white"
              >
                Try {productBName} →
              </a>
            )}

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="mx-auto max-w-5xl px-6 py-20">

        <h2 className="text-center text-4xl font-black">
          Frequently Asked Questions
        </h2>

        <div className="mt-10 space-y-5">

          {faq.map((item) => (

            <div
              key={item.q}
              className="rounded-3xl border border-slate-200 p-7"
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

      </section>

      {/* TRANSPARENCY */}

      <section className="px-6 pb-16">

        <div className="mx-auto max-w-4xl rounded-3xl bg-slate-100 p-8 text-center">

          <h3 className="font-black">
            NorthSky Transparency
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            NorthSky Reviews may earn commissions from
            qualifying affiliate links. Affiliate relationships
            help support the site and do not determine our
            editorial rankings or opinions.
          </p>

        </div>

      </section>

    </main>
  );
}

/* --------------------------------
   COMPONENTS
-------------------------------- */

function ProductHeroCard({
  product,
  name,
  score,
  position,
}) {
  return (
    <div className="rounded-3xl bg-white/10 p-7 ring-1 ring-white/10">

      <p className="text-sm font-bold text-blue-300">
        {position}
      </p>

      <div className="mt-3 flex items-center justify-between gap-4">

        <h2 className="text-2xl font-black">
          {name}
        </h2>

        <span className="rounded-full bg-blue-600 px-3 py-2 text-sm font-black">
          ⭐ {score}/10
        </span>

      </div>

      {product?.category && (
        <p className="mt-3 text-sm text-slate-300">
          {product.category}
        </p>
      )}

    </div>
  );
}

function ScoreCard({
  name,
  score,
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8">

      <div className="flex items-center justify-between gap-4">

        <h3 className="text-2xl font-black">
          {name}
        </h3>

        <span className="rounded-full bg-blue-100 px-4 py-2 font-black text-blue-700">
          ⭐ {score}/10
        </span>

      </div>

      <div className="mt-7 h-3 overflow-hidden rounded-full bg-slate-200">

        <div
          className="h-3 rounded-full bg-blue-600"
          style={{
            width: `${Math.min(score * 10, 100)}%`,
          }}
        />

      </div>

    </div>
  );
}

function ProsCard({
  title,
  items,
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-8">

      <h2 className="text-2xl font-black">
        {title}
      </h2>

      <ul className="mt-6 space-y-4">

        {items.map((item) => (

          <li
            key={item}
            className="flex gap-3 text-slate-700"
          >

            <span className="font-black text-green-600">
              ✓
            </span>

            <span>{item}</span>

          </li>

        ))}

      </ul>

    </div>
  );
}