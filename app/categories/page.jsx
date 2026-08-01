import Link from "next/link";
import { categories } from "@/app/data/tools";

const siteUrl = "https://northsky-reviews.vercel.app";

export const metadata = {
  title:
    "Best Software Categories 2026 | AI, SaaS, VPN, Security & Business Tools | NorthSky Reviews",

  description:
    "Explore the best software categories in 2026 including AI tools, SaaS platforms, VPNs, cybersecurity software, productivity apps, marketing tools, developer software, finance solutions, and expert buying guides.",

  keywords: [
    "best software categories 2026",
    "AI tools",
    "SaaS software",
    "VPN reviews",
    "cybersecurity software",
    "business software",
    "productivity tools",
    "developer tools",
    "finance software",
    "software reviews",
    "software comparisons",
    "technology reviews"
  ],

  alternates: {
    canonical: `${siteUrl}/categories`
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },

  openGraph: {
    title:
      "Best Software Categories 2026 | NorthSky Reviews",

    description:
      "Browse expert software rankings, comparisons, reviews, and buying guides across AI, SaaS, VPN, cybersecurity, business software, developer tools, and productivity platforms.",

    url: `${siteUrl}/categories`,

    siteName: "NorthSky Reviews",

    locale: "en_CA",

    type: "website",

    images: [
      {
        url: `${siteUrl}/og/categories.jpg`,
        width: 1200,
        height: 630,
        alt: "NorthSky Reviews Software Categories"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best Software Categories 2026 | NorthSky Reviews",

    description:
      "Discover the best AI tools, VPNs, SaaS platforms, cybersecurity software, productivity apps, and business tools.",

    images: [`${siteUrl}/og/categories.jpg`]
  },

  category: "Technology",

  metadataBase: new URL(siteUrl)
};
const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",

  "@id": `${siteUrl}/categories`,

  url: `${siteUrl}/categories`,

  name: "NorthSky Reviews Software Categories",

  headline: "Best Software Categories 2026",

  description:
    "Browse AI tools, SaaS software, VPNs, cybersecurity platforms, productivity apps, business software, developer tools, finance software, and technology reviews.",

  inLanguage: "en-CA",

  isPartOf: {
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`
  },

  publisher: {
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`
  },

  mainEntity: {
    "@type": "ItemList",

    itemListOrder: "https://schema.org/ItemListOrderAscending",

    numberOfItems: categories.length,

    itemListElement: categories.map((category, index) => ({
      "@type": "ListItem",

      position: index + 1,

      name: category.name,

      url: `${siteUrl}/category/${category.slug}`
    }))
  }
};

const organizationSchema = {
  "@context": "https://schema.org",

  "@type": "Organization",

  "@id": `${siteUrl}/#organization`,

  name: "NorthSky Reviews",

  url: siteUrl,

  logo: `${siteUrl}/logo.png`,

  description:
    "NorthSky Reviews publishes independent software reviews, comparisons, rankings, buying guides, and technology research.",

  sameAs: [
    "https://x.com/",
    "https://facebook.com/",
    "https://linkedin.com/"
  ]
};

const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  "@id": `${siteUrl}/#website`,

  url: siteUrl,

  name: "NorthSky Reviews",

  publisher: {
    "@id": `${siteUrl}/#organization`
  },

  potentialAction: {
    "@type": "SearchAction",

    target: `${siteUrl}/search?q={search_term_string}`,

    "query-input": "required name=search_term_string"
  }
};

const breadcrumbSchema = {
  "@context": "https://schema.org",

  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",

      position: 1,

      name: "Home",

      item: siteUrl
    },
    {
      "@type": "ListItem",

      position: 2,

      name: "Software Categories",

      item: `${siteUrl}/categories`
    }
  ]
};
<p
  className="
  mx-auto
  mt-6
  max-w-4xl
  text-xl
  leading-8
  text-slate-300
  "
>
NorthSky Reviews helps individuals, professionals, developers, and businesses
discover the best software for every need. Our software categories bring together
expert reviews, detailed comparisons, buying guides, rankings, and curated
recommendations across today's most important technology sectors.

Whether you're searching for AI assistants, VPN services, cybersecurity software,
business platforms, SaaS applications, developer tools, productivity apps,
marketing software, web hosting, finance solutions, password managers, or travel
technology, our research is designed to help you compare features, pricing,
performance, ease of use, security, and overall value before making a decision.

Every category is regularly updated to reflect new products, feature releases,
pricing changes, and industry trends. We organize hundreds of software products
into easy-to-browse categories so you can quickly find trusted recommendations,
compare leading alternatives, and choose the right solution for your personal,
professional, or business goals.
</p>
{/* EDITORIAL STANDARDS */}

<section
  className="
  bg-white
  px-6
  py-24
  "
>

  <div
    className="
    mx-auto
    max-w-6xl
    "
  >

    <div className="text-center">

      <span
        className="
        inline-flex
        rounded-full
        bg-blue-100
        px-5
        py-2
        text-sm
        font-bold
        text-blue-700
        "
      >
        Editorial Standards
      </span>

      <h2
        className="
        mt-6
        text-4xl
        font-black
        "
      >
        Our Review Process
      </h2>

      <p
        className="
        mx-auto
        mt-6
        max-w-3xl
        text-lg
        leading-8
        text-slate-600
        "
      >
        Every recommendation published by NorthSky Reviews follows a
        structured evaluation process designed to help readers make
        informed software decisions. We compare products using
        consistent criteria and continually review our content as
        software evolves.
      </p>

    </div>

    <div
      className="
      mt-16
      grid
      gap-8
      md:grid-cols-3
      "
    >

      <div className="rounded-3xl border p-8">

        <div className="text-5xl">🔍</div>

        <h3 className="mt-6 text-2xl font-black">
          Independent Research
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          We research product documentation, pricing,
          features, integrations, support, security,
          and overall market positioning before making
          recommendations.
        </p>

      </div>

      <div className="rounded-3xl border p-8">

        <div className="text-5xl">⚙️</div>

        <h3 className="mt-6 text-2xl font-black">
          Consistent Evaluation
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Software is compared using standardized
          criteria including usability, performance,
          value, reliability, security, customer
          support, and feature depth.
        </p>

      </div>

      <div className="rounded-3xl border p-8">

        <div className="text-5xl">📈</div>

        <h3 className="mt-6 text-2xl font-black">
          Regular Updates
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Rankings, reviews, and buying guides are
          reviewed throughout the year to reflect
          product updates, pricing changes, and new
          technology releases.
        </p>

      </div>

    </div>

    <div
      className="
      mt-20
      rounded-3xl
      bg-slate-50
      p-10
      "
    >

      <h3 className="text-3xl font-black text-center">
        What We Evaluate
      </h3>

      <div
        className="
        mt-10
        grid
        gap-6
        md:grid-cols-2
        "
      >

        {[
          "Features & Functionality",
          "Ease of Use",
          "Performance & Reliability",
          "Security & Privacy",
          "Pricing & Value",
          "Customer Support",
          "Integrations",
          "Overall Recommendation"
        ].map((item) => (

          <div
            key={item}
            className="
            flex
            items-center
            gap-4
            rounded-2xl
            bg-white
            p-5
            "
          >

            <span className="text-2xl">
              ✅
            </span>

            <span className="font-semibold">
              {item}
            </span>

          </div>

        ))}

      </div>

    </div>

    <div
      className="
      mt-20
      rounded-3xl
      bg-gradient-to-r
      from-blue-600
      to-indigo-700
      p-10
      text-center
      text-white
      "
    >

      <h3 className="text-3xl font-black">
        Our Commitment
      </h3>

      <p
        className="
        mx-auto
        mt-6
        max-w-3xl
        text-lg
        leading-8
        text-blue-100
        "
      >
        Our goal is to publish trustworthy software reviews,
        practical buying guides, and transparent comparisons
        that help readers confidently choose the best software
        for work, business, security, and everyday productivity.
      </p>

    </div>

  </div>

</section>
{/* EXPLORE MORE */}

<section
  className="
  bg-slate-50
  px-6
  py-24
  "
>

  <div
    className="
    mx-auto
    max-w-7xl
    "
  >

    <h2
      className="
      text-center
      text-4xl
      font-black
      "
    >
      Continue Exploring NorthSky Reviews
    </h2>

    <p
      className="
      mx-auto
      mt-5
      max-w-3xl
      text-center
      text-lg
      leading-8
      text-slate-600
      "
    >
      Whether you're researching AI software, comparing VPN providers,
      looking for business tools, or exploring productivity platforms,
      NorthSky Reviews brings together expert reviews, buying guides,
      comparisons, and curated recommendations to help you choose with
      confidence.
    </p>

    <div
      className="
      mt-14
      grid
      gap-8
      md:grid-cols-4
      "
    >

      <Link
        href="/reviews"
        className="rounded-3xl border bg-white p-8 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
      >
        <div className="text-5xl">⭐</div>

        <h3 className="mt-5 text-2xl font-black">
          Reviews
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Read in-depth software reviews covering features, pricing,
          performance, and value.
        </p>
      </Link>

      <Link
        href="/comparisons"
        className="rounded-3xl border bg-white p-8 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
      >
        <div className="text-5xl">⚖️</div>

        <h3 className="mt-5 text-2xl font-black">
          Comparisons
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Compare the leading software platforms side-by-side before
          making a decision.
        </p>
      </Link>

      <Link
        href="/guides"
        className="rounded-3xl border bg-white p-8 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
      >
        <div className="text-5xl">📘</div>

        <h3 className="mt-5 text-2xl font-black">
          Buying Guides
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Learn how to choose the right software with comprehensive
          buying guides and expert advice.
        </p>
      </Link>

      <Link
        href="/deals"
        className="rounded-3xl border bg-white p-8 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
      >
        <div className="text-5xl">🏷️</div>

        <h3 className="mt-5 text-2xl font-black">
          Software Deals
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          Discover the latest software discounts, promotions,
          and exclusive offers.
        </p>
      </Link>

    </div>

  </div>

</section>

{/* FINAL CTA */}

<section
  className="
  px-6
  py-24
  "
>

  <div
    className="
    mx-auto
    max-w-6xl
    rounded-3xl
    bg-gradient-to-br
    from-slate-950
    via-blue-950
    to-indigo-950
    p-16
    text-center
    text-white
    "
  >

    <span
      className="
      inline-flex
      rounded-full
      bg-blue-500/20
      px-5
      py-2
      text-sm
      font-bold
      text-blue-300
      "
    >
      Trusted Software Research
    </span>

    <h2
      className="
      mt-8
      text-5xl
      font-black
      "
    >
      Find Better Software Faster
    </h2>

    <p
      className="
      mx-auto
      mt-6
      max-w-3xl
      text-xl
      leading-8
      text-slate-300
      "
    >
      Browse expert reviews, compare leading software,
      explore buying guides, and discover trusted technology
      recommendations across AI, SaaS, cybersecurity,
      business software, productivity, and more.
    </p>

    <div
      className="
      mt-10
      flex
      flex-wrap
      justify-center
      gap-5
      "
    >

      <Link
        href="/all-tools"
        className="
        rounded-xl
        bg-blue-500
        px-8
        py-4
        font-black
        hover:bg-blue-600
        "
      >
        Browse All Software →
      </Link>

      <Link
        href="/reviews"
        className="
        rounded-xl
        border
        border-white/30
        px-8
        py-4
        font-black
        hover:bg-white/10
        "
      >
        Read Reviews →
      </Link>

    </div>

  </div>

</section>

{/* TRANSPARENCY */}

<section
  className="
  px-6
  pb-20
  "
>

  <div
    className="
    mx-auto
    max-w-5xl
    rounded-3xl
    border
    bg-slate-50
    p-10
    "
  >

    <h3 className="text-2xl font-black">
      Editorial Transparency
    </h3>

    <p className="mt-5 leading-8 text-slate-600">
      NorthSky Reviews is committed to publishing independent software
      reviews, comparisons, rankings, and buying guides. Some pages may
      contain affiliate links. If you purchase through one of these
      links, we may earn a commission at no additional cost to you.
      Affiliate partnerships never determine our rankings or editorial
      opinions. Our goal is to provide clear, accurate, and trustworthy
      information that helps readers choose the right software with
      confidence.
    </p>

  </div>

</section>