import Link from "next/link";

const siteUrl = "https://north-sky-reviews-f1gr.vercel.app";
const pageUrl = `${siteUrl}/reviews/shopify`;

export const metadata = {
  title:
    "Shopify Review 2026: Pricing, Features, Pros & Cons | NorthSky Reviews",

  description:
    "Shopify review for 2026 covering pricing, ecommerce features, online stores, payments, apps, SEO, pros, cons and alternatives.",

  keywords: [
    "Shopify review 2026",
    "Shopify review",
    "Shopify pricing",
    "Shopify ecommerce",
    "Shopify website builder",
    "best ecommerce platform 2026",
    "Shopify alternatives",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: "Shopify Review 2026 | NorthSky Reviews",
    description:
      "Our Shopify review covering ecommerce features, pricing, online stores, apps, SEO and alternatives.",
    url: pageUrl,
    siteName: "NorthSky Reviews",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shopify Review 2026 | NorthSky Reviews",
    description:
      "Shopify pricing, ecommerce features, pros, cons and alternatives.",
  },
};

const pros = [
  "Designed specifically for ecommerce businesses",
  "Large ecosystem of apps and integrations",
  "Professional online store features",
  "Supports multiple sales channels",
  "Scales from small stores to larger ecommerce operations",
];

const cons = [
  "Monthly subscription costs can add up",
  "Some advanced features require additional apps or higher-tier plans",
  "App costs can increase the overall cost of running a store",
  "Transaction and payment costs depend on the setup",
];

const features = [
  {
    title: "🛒 Online Store",
    description:
      "Shopify provides tools for creating and managing an ecommerce storefront, product catalog, checkout and customer experience.",
  },
  {
    title: "💳 Payments",
    description:
      "Businesses can accept online payments through supported payment solutions and configure their store's checkout experience.",
  },
  {
    title: "📦 Inventory",
    description:
      "Shopify provides tools for managing products, inventory, orders and fulfillment across an ecommerce operation.",
  },
  {
    title: "🧩 App Ecosystem",
    description:
      "The Shopify ecosystem includes apps and integrations that can extend marketing, analytics, customer support, fulfillment and other store functions.",
  },
  {
    title: "📈 Marketing & SEO",
    description:
      "Store owners can use ecommerce marketing features, content, analytics and SEO tools to help attract and convert customers.",
  },
  {
    title: "📱 Sales Channels",
    description:
      "Shopify supports selling through an online store and additional supported channels, depending on the merchant's setup.",
  },
];

const faq = [
  {
    q: "Is Shopify worth it in 2026?",
    a:
      "Shopify can be a strong choice for businesses that want a dedicated ecommerce platform with hosting, store management, payments and an extensive app ecosystem. The best option depends on your budget and business model.",
  },
  {
    q: "How much does Shopify cost?",
    a:
      "Shopify offers multiple subscription plans. Pricing, promotions and transaction-related costs can change, so merchants should check the current official Shopify pricing before subscribing.",
  },
  {
    q: "Is Shopify good for beginners?",
    a:
      "Shopify is designed to make ecommerce store creation accessible to businesses without extensive web development experience. However, building a successful store still requires work on products, branding, marketing and customer acquisition.",
  },
  {
    q: "Can Shopify be used for a small business?",
    a:
      "Yes. Shopify is commonly used by small businesses and entrepreneurs selling physical products, digital products and other goods online.",
  },
  {
    q: "What are the best Shopify alternatives?",
    a:
      "Alternatives include WooCommerce, Wix, Squarespace and other ecommerce platforms. The best choice depends on customization requirements, budget, technical ability and the type of store being built.",
  },
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",

  name: "Shopify Review 2026",

  headline:
    "Shopify Review 2026: Pricing, Features, Pros & Cons",

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
    name: "Shopify",
    applicationCategory: "Ecommerce Platform",
  },

  reviewRating: {
    "@type": "Rating",
    ratingValue: "9.1",
    bestRating: "10",
    worstRating: "1",
  },

  reviewBody:
    "NorthSky Reviews evaluates Shopify for ecommerce store creation, payments, inventory management, integrations, marketing capabilities and overall value.",
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
      name: "Shopify",
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

export default function ShopifyReviewPage() {
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

      <section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 px-6 py-20 text-white md:py-28">

        <div className="mx-auto max-w-6xl">

          <Link
            href="/reviews"
            className="text-sm font-bold text-blue-300 hover:text-white"
          >
            ← Back to Reviews
          </Link>

          <div className="mt-8 flex flex-wrap gap-3">

            <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-bold text-blue-300">
              Ecommerce Review
            </span>

            <span className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-bold text-emerald-300">
              2026 Review
            </span>

          </div>

          <h1 className="mt-7 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Shopify Review 2026
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-300">
            A detailed look at Shopify's ecommerce platform, pricing,
            online store features, payments, apps, SEO, pros, cons and
            alternatives.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://www.shopify.com"
              target="_blank"
              rel="nofollow sponsored noopener"
              className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-500"
            >
              Visit Shopify →
            </a>

            <Link
              href="/guides/best-website-builders-2026"
              className="rounded-xl border border-white/30 px-8 py-4 font-bold hover:bg-white/10"
            >
              Best Website Builders →
            </Link>

          </div>

        </div>

      </section>

      {/* VERDICT */}

      <section className="mx-auto max-w-6xl px-6 py-16">

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">

          <div>

            <p className="font-bold uppercase tracking-wider text-blue-600">
              Our Verdict
            </p>

            <h2 className="mt-3 text-4xl font-black">
              Is Shopify worth it?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Shopify is one of the most recognizable ecommerce platforms
              for businesses that want to create, manage and grow an
              online store without building the entire ecommerce
              infrastructure themselves.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Its biggest strength is the combination of store-building
              tools, checkout, inventory management, integrations and
              third-party apps in one ecosystem.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              <strong>Bottom line:</strong> Shopify is a strong choice for
              entrepreneurs, small businesses and growing ecommerce brands
              that want a dedicated platform for selling online.
            </p>

          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

            <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
              NorthSky Rating
            </p>

            <div className="mt-4 text-6xl font-black text-blue-600">
              9.1
              <span className="text-2xl text-slate-400">
                /10
              </span>
            </div>

            <p className="mt-3 font-bold">
              Excellent
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-600">

              <div className="flex justify-between">
                <span>Ease of Use</span>
                <strong>9/10</strong>
              </div>

              <div className="flex justify-between">
                <span>Ecommerce</span>
                <strong>9.7/10</strong>
              </div>

              <div className="flex justify-between">
                <span>Features</span>
                <strong>9.5/10</strong>
              </div>

              <div className="flex justify-between">
                <span>Value</span>
                <strong>8.5/10</strong>
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
            What does Shopify offer?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {features.map((item) => (

              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8"
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

      {/* PROS / CONS */}

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

      {/* WHO IS IT FOR */}

      <section className="bg-slate-50 px-6 py-16">

        <div className="mx-auto max-w-5xl">

          <p className="font-bold uppercase tracking-wider text-blue-600">
            Who It's For
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Who should use Shopify?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Shopify is particularly well suited to entrepreneurs and
            businesses that want ecommerce functionality to be the core
            purpose of their website.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">

            {[
              "Small online businesses",
              "Ecommerce startups",
              "Established online retailers",
              "Creators selling products",
              "Businesses expanding into ecommerce",
              "Brands selling across multiple channels",
            ].map((item) => (

              <div
                key={item}
                className="rounded-2xl border bg-white p-5 font-bold"
              >
                ✓ {item}
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PRICING */}

      <section className="mx-auto max-w-5xl px-6 py-16">

        <p className="font-bold uppercase tracking-wider text-blue-600">
          Pricing
        </p>

        <h2 className="mt-3 text-4xl font-black">
          Shopify Pricing
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Shopify offers several subscription options designed for
          different types and sizes of ecommerce businesses. Pricing,
          promotions and transaction-related costs can change.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          When comparing plans, look beyond the monthly subscription price.
          Consider payment processing, apps, themes, domain costs,
          transaction fees and the features your business actually needs.
        </p>

        <a
          href="https://www.shopify.com"
          target="_blank"
          rel="nofollow sponsored noopener"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-500"
        >
          Check Current Shopify Pricing →
        </a>

      </section>

      {/* ALTERNATIVES */}

      <section className="bg-slate-50 px-6 py-16">

        <div className="mx-auto max-w-6xl">

          <p className="font-bold uppercase tracking-wider text-blue-600">
            Alternatives
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Shopify Alternatives
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <Link
              href="/guides/best-website-builders-2026"
              className="rounded-3xl border bg-white p-7 hover:shadow-xl"
            >

              <h3 className="text-2xl font-black">
                Best Website Builders
              </h3>

              <p className="mt-3 text-slate-600">
                Compare website platforms for businesses, creators and
                online stores.
              </p>

              <div className="mt-5 font-bold text-blue-600">
                Read Guide →
              </div>

            </Link>

            <Link
              href="/categories/software"
              className="rounded-3xl border bg-white p-7 hover:shadow-xl"
            >

              <h3 className="text-2xl font-black">
                Business Software
              </h3>

              <p className="mt-3 text-slate-600">
                Explore software tools for growing businesses.
              </p>

              <div className="mt-5 font-bold text-blue-600">
                Browse Software →
              </div>

            </Link>

            <Link
              href="/comparisons"
              className="rounded-3xl border bg-white p-7 hover:shadow-xl"
            >

              <h3 className="text-2xl font-black">
                Software Comparisons
              </h3>

              <p className="mt-3 text-slate-600">
                Compare technology products before making a purchase.
              </p>

              <div className="mt-5 font-bold text-blue-600">
                Compare Tools →
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

      {/* DISCLOSURE */}

      <section className="mx-auto max-w-5xl px-6 py-10">

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm leading-6 text-slate-500">

          <strong className="text-slate-700">
            Affiliate Disclosure:
          </strong>{" "}
          NorthSky Reviews may earn a commission when you purchase products
          or services through qualifying links on this page. Affiliate
          relationships do not determine our editorial ratings or
          recommendations.

        </div>

      </section>

      {/* CTA */}

      <section className="bg-blue-600 px-6 py-20 text-center text-white">

        <div className="mx-auto max-w-3xl">

          <h2 className="text-4xl font-black md:text-5xl">
            Ready to Build Your Online Store?
          </h2>

          <p className="mt-5 text-lg text-blue-100">
            Explore Shopify's current ecommerce plans and features.
          </p>

          <a
            href="https://www.shopify.com"
            target="_blank"
            rel="nofollow sponsored noopener"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-600 hover:bg-slate-100"
          >
            Visit Shopify →
          </a>

        </div>

      </section>

    </main>
  );
}