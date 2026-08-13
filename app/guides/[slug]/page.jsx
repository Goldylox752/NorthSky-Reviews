import Link from "next/link";
import { notFound } from "next/navigation";

import { guides } from "@/app/data/guides";
import { tools } from "@/app/data/tools";
import { comparisons } from "@/app/data/comparisons";

const siteUrl = "https://north-sky-reviews-f1gr.vercel.app";

export const dynamicParams = false;

export function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const guide = guides.find((item) => item.slug === slug);

  if (!guide) {
    return {
      title: "Guide Not Found | NorthSky Reviews",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const canonicalUrl = `${siteUrl}/guides/${guide.slug}`;

  return {
    title: `${guide.title} | NorthSky Reviews`,

    description: guide.description,

    keywords: [
      ...(guide.keywords || []),
      "technology guides",
      "software reviews",
      "AI tools",
      "technology buying guides",
    ],

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title: `${guide.title} | NorthSky Reviews`,
      description: guide.description,
      url: canonicalUrl,
      siteName: "NorthSky Reviews",
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: `${guide.title} | NorthSky Reviews`,
      description: guide.description,
    },
  };
}

export default async function GuidePage({ params }) {
  const { slug } = await params;

  const guide = guides.find((item) => item.slug === slug);

  if (!guide) {
    notFound();
  }

  const products = (guide.products || [])
    .map((id) => tools.find((tool) => tool.slug === id))
    .filter(Boolean);

  const primaryProduct = products[0];

  /*
   * Try to find comparisons that relate to one of the products
   * in this particular guide.
   */
  const relatedComparisons = comparisons
    .filter((comparison) => {
      const comparisonText = JSON.stringify(comparison).toLowerCase();

      return products.some((product) =>
        comparisonText.includes(product.slug.toLowerCase())
      );
    })
    .slice(0, 3);

  /*
   * Fall back to the first three comparisons if no product-specific
   * comparisons exist yet.
   */
  const comparisonList =
    relatedComparisons.length > 0
      ? relatedComparisons
      : comparisons.slice(0, 3);

  const faq = [
    {
      q: `What are the best products in ${guide.title}?`,
      a:
        "NorthSky Reviews evaluates products using features, pricing, performance, reliability, ease of use, and overall value. Recommendations can vary depending on what you need the product to accomplish.",
    },
    {
      q: "How does NorthSky Reviews create buying guides?",
      a:
        "We research products, compare alternatives, evaluate features and pricing, and organize recommendations around common use cases. Guides are designed to help readers make informed technology decisions.",
    },
    {
      q: "Are NorthSky Reviews rankings influenced by advertisers?",
      a:
        "No. Affiliate partnerships do not determine our rankings or recommendations. We may earn a commission when readers purchase through qualifying links, but editorial recommendations are based on the products and their overall value.",
    },
    {
      q: "Should I compare products before buying?",
      a:
        "Yes. Pricing, features, limitations, integrations, and intended use can vary considerably between products. Comparing alternatives can help you choose the option that best fits your needs and budget.",
    },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    url: `${siteUrl}/guides/${guide.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/guides/${guide.slug}`,
    },
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
    about: {
      "@type": "Thing",
      name: guide.category || "Technology",
    },
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
        name: "Guides",
        item: `${siteUrl}/guides`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: guide.title,
        item: `${siteUrl}/guides/${guide.slug}`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* STRUCTURED DATA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* HERO */}

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-6 py-20 text-white md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center gap-3 text-sm font-bold">
            <Link
              href="/guides"
              className="text-blue-300 transition hover:text-white"
            >
              ← Technology Guides
            </Link>

            {guide.category && (
              <>
                <span className="text-slate-500">/</span>

                <span className="rounded-full bg-blue-500/20 px-4 py-1.5 text-blue-300">
                  {guide.category}
                </span>
              </>
            )}
          </div>

          <h1 className="mt-8 max-w-5xl text-4xl font-black leading-tight md:text-6xl">
            {guide.title}
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-slate-300 md:text-xl">
            {guide.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#recommendations"
              className="rounded-xl bg-blue-600 px-7 py-4 font-bold transition hover:bg-blue-500"
            >
              See Our Picks ↓
            </Link>

            <Link
              href="/comparisons"
              className="rounded-xl border border-white/20 px-7 py-4 font-bold transition hover:bg-white/10"
            >
              Compare Tools
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}

      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
          <p className="text-sm font-black uppercase tracking-wider text-blue-600">
            NorthSky Reviews Buying Guide
          </p>

          <h2 className="mt-3 text-3xl font-black md:text-4xl">
            How to Choose the Right Option
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Choosing technology can be difficult when products offer similar
            features, pricing, and marketing claims. This NorthSky Reviews
            guide brings the most relevant options together so you can compare
            them based on features, value, usability, performance, and the
            needs of different types of users.
          </p>

          {primaryProduct && (
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our current selection includes{" "}
              <strong>{primaryProduct.name}</strong>
              {products.length > 1
                ? " and other options worth comparing."
                : " as a product worth considering."}
            </p>
          )}
        </div>
      </section>

      {/* RECOMMENDATIONS */}

      <section
        id="recommendations"
        className="mx-auto max-w-7xl scroll-mt-20 px-6 py-16"
      >
        <div className="max-w-3xl">
          <p className="font-bold uppercase tracking-wider text-blue-600">
            Our Recommendations
          </p>

          <h2 className="mt-2 text-4xl font-black md:text-5xl">
            Recommended Products
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            These products are included based on the tools currently
            associated with this guide. Review pricing and features before
            making a purchase.
          </p>
        </div>

        {products.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-10">
            <h3 className="text-2xl font-black">
              More recommendations coming soon
            </h3>

            <p className="mt-3 text-slate-600">
              We are expanding this guide with additional products and
              comparisons.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <article
                key={product.slug}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-black text-blue-700">
                    #{index + 1} Pick
                  </span>

                  {index === 0 && (
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-700">
                      TOP PICK
                    </span>
                  )}
                </div>

                <h3 className="mt-6 text-3xl font-black">
                  {product.name}
                </h3>

                {product.rating !== undefined && (
                  <div className="mt-4">
                    <span className="text-lg font-black text-slate-900">
                      {product.rating}/10
                    </span>

                    <span className="ml-2 font-bold text-slate-500">
                      Overall Rating
                    </span>
                  </div>
                )}

                {product.description && (
                  <p className="mt-5 flex-1 leading-7 text-slate-600">
                    {product.description}
                  </p>
                )}

                {product.link && (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="nofollow sponsored noopener"
                    className="mt-7 block rounded-xl bg-blue-600 px-5 py-4 text-center font-bold text-white transition hover:bg-blue-500"
                  >
                    Visit {product.name} →
                  </a>
                )}
              </article>
            ))}
          </div>
        )}
      </section>

      {/* HOW WE EVALUATE */}

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="font-bold uppercase tracking-wider text-blue-600">
            Editorial Methodology
          </p>

          <h2 className="mt-2 text-4xl font-black">
            How We Evaluate Technology
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              [
                "⚙️ Features",
                "We look at the capabilities and features that matter for real-world use.",
              ],
              [
                "💰 Value",
                "We consider pricing, available plans, and what users receive for the cost.",
              ],
              [
                "🚀 Performance",
                "We consider usability, reliability, speed, and overall product experience.",
              ],
              [
                "🎯 Use Case",
                "We consider which types of users and businesses each product serves best.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-slate-200 bg-white p-6"
              >
                <h3 className="font-black">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISONS */}

      {comparisonList.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="font-bold uppercase tracking-wider text-blue-600">
              Compare Before Buying
            </p>

            <h2 className="mt-2 text-4xl font-black md:text-5xl">
              Related Comparisons
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Compare alternatives before deciding which technology is right
              for you.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {comparisonList.map((item) => (
              <Link
                key={item.slug}
                href={`/comparisons/${item.slug}`}
                className="rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-xl font-black">{item.title}</h3>

                {item.description && (
                  <p className="mt-3 leading-7 text-slate-600">
                    {item.description}
                  </p>
                )}

                <div className="mt-5 font-bold text-blue-600">
                  View Comparison →
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}

      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <p className="font-bold uppercase tracking-wider text-blue-600">
            FAQ
          </p>

          <h2 className="mt-2 text-4xl font-black">
            Frequently Asked Questions
          </h2>

          <div className="mt-10 space-y-5">
            {faq.map((item) => (
              <div
                key={item.q}
                className="rounded-2xl border border-slate-200 bg-white p-7"
              >
                <h3 className="text-lg font-black">{item.q}</h3>

                <p className="mt-3 leading-7 text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AFFILIATE DISCLOSURE */}

      <section className="mx-auto max-w-5xl px-6 py-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-6 text-slate-500">
          <strong className="text-slate-700">Affiliate Disclosure:</strong>{" "}
          NorthSky Reviews may earn a commission when you purchase a product
          or service through certain links on this page. This does not
          determine our editorial recommendations or rankings.
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="bg-blue-600 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-black md:text-5xl">
            Still Comparing Your Options?
          </h2>

          <p className="mt-5 text-lg text-blue-100">
            Explore more NorthSky Reviews comparisons and find the technology
            that fits your needs.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/comparisons"
              className="rounded-xl bg-white px-8 py-4 font-bold text-blue-600 transition hover:bg-slate-100"
            >
              View Comparisons →
            </Link>

            <Link
              href="/reviews"
              className="rounded-xl border border-white/30 px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Browse Reviews →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}