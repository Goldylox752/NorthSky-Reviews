import Link from "next/link";

const siteUrl = "https://north-sky-reviews-f1gr.vercel.app";

export const metadata = {
  title:
    "NorthSky Reviews | Best AI Tools, Software, VPNs & Technology 2026",

  description:
    "Discover the best AI tools, software, VPNs, SaaS platforms, cybersecurity services, and technology solutions with expert reviews, comparisons, rankings, and buying guides.",

  keywords: [
    "best AI tools 2026",
    "AI tools reviews",
    "software reviews",
    "best software 2026",
    "VPN reviews",
    "best VPN Canada",
    "SaaS reviews",
    "cybersecurity tools",
    "technology comparisons",
    "AI software",
    "software buying guides",
  ],

  metadataBase: new URL(siteUrl),

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "NorthSky Reviews | Best AI Tools, Software & Technology 2026",

    description:
      "Independent technology reviews, comparisons, rankings, and buying guides covering AI, software, VPNs, cybersecurity, SaaS, and productivity tools.",

    url: siteUrl,

    siteName: "NorthSky Reviews",

    locale: "en_CA",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "NorthSky Reviews | Best AI Tools & Software 2026",

    description:
      "Reviews, comparisons, rankings, and buying guides for AI tools, software, VPNs, cybersecurity and technology.",
  },
};

const categories = [
  ["🤖", "AI Tools", "/category/ai"],
  ["🔒", "VPN & Privacy", "/category/vpn"],
  ["🛡️", "Cybersecurity", "/category/cybersecurity"],
  ["☁️", "Hosting", "/category/hosting"],
  ["💼", "Business Software", "/category/business"],
  ["⚡", "Productivity", "/category/productivity"],
  ["📈", "Marketing Tools", "/category/marketing"],
  ["👨‍💻", "Developer Tools", "/category/developer-tools"],
];

const topReviews = [
  {
    name: "ChatGPT",
    score: "9.8/10",
    category: "AI Assistant",
    description:
      "Explore features, capabilities, use cases, pricing and alternatives.",
    link: "/reviews/chatgpt",
  },

  {
    name: "NordVPN",
    score: "9.5/10",
    category: "VPN & Security",
    description:
      "Review privacy, security, performance, features and overall value.",
    link: "/reviews/nordvpn",
  },

  {
    name: "Claude",
    score: "9.4/10",
    category: "AI Assistant",
    description:
      "Explore Claude's AI capabilities, features, strengths and use cases.",
    link: "/reviews/claude",
  },
];

const comparisons = [
  {
    title: "ChatGPT vs Claude",
    description:
      "Compare two leading AI assistants across features, capabilities and use cases.",
    link: "/comparisons/chatgpt-vs-claude",
  },

  {
    title: "Best AI Tools 2026",
    description:
      "Compare leading AI software for productivity, business, writing and research.",
    link: "/comparisons/best-ai-tools-2026",
  },

  {
    title: "VPN vs Antivirus",
    description:
      "Understand the difference between VPN protection and antivirus software.",
    link: "/comparisons/vpn-vs-antivirus",
  },

  {
    title: "Best VPN Providers",
    description:
      "Compare popular VPN services based on features, privacy and value.",
    link: "/comparisons/best-vpn-providers",
  },
];

const guides = [
  {
    title: "Best AI Tools 2026",
    description:
      "Discover leading AI tools for writing, coding, business, research and productivity.",
    link: "/guides/best-ai-tools-2026",
    category: "AI",
  },

  {
    title: "Best AI Tools for Business",
    description:
      "Explore AI software for automation, marketing, customer support and business workflows.",
    link: "/guides/best-ai-tools-for-business",
    category: "Business AI",
  },

  {
    title: "Best VPNs in Canada 2026",
    description:
      "Compare VPN services for privacy, security, streaming, speed and international access.",
    link: "/guides/best-vpns-canada",
    category: "VPN",
  },

  {
    title: "Best eSIM Providers 2026",
    description:
      "Compare travel eSIM providers for international trips and affordable mobile data.",
    link: "/guides/best-esim-providers-2026",
    category: "Travel Tech",
  },

  {
    title: "Best Website Builders 2026",
    description:
      "Compare website builders for businesses, ecommerce stores, creators and startups.",
    link: "/guides/best-website-builders-2026",
    category: "Website Tools",
  },

  {
    title: "Best AI Coding Tools 2026",
    description:
      "Explore AI coding assistants for programming, debugging, development and productivity.",
    link: "/guides/best-ai-coding-tools-2026",
    category: "Developer AI",
  },
];

const schema = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "WebSite",

      "@id": `${siteUrl}/#website`,

      url: siteUrl,

      name: "NorthSky Reviews",

      description:
        "Technology reviews, comparisons, rankings and buying guides.",

      inLanguage: "en-CA",
    },

    {
      "@type": "Organization",

      "@id": `${siteUrl}/#organization`,

      name: "NorthSky Reviews",

      url: siteUrl,

      description:
        "NorthSky Reviews publishes technology reviews, comparisons, rankings and buying guides.",
    },

    {
      "@type": "WebPage",

      "@id": `${siteUrl}/#webpage`,

      url: siteUrl,

      name:
        "NorthSky Reviews | Best AI Tools, Software, VPNs & Technology 2026",

      description:
        "Discover the best AI tools, software, VPNs, cybersecurity services and technology solutions.",
    },
  ],
};

export default function HomePage() {
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

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-800 px-6 py-24 text-white md:py-32">

        <div className="mx-auto max-w-6xl text-center">

          <span className="inline-block rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2 text-sm font-bold text-blue-300">
            ⭐ Reviews • Rankings • Comparisons • Guides
          </span>

          <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Find the Best
            <span className="text-blue-400">
              {" "}AI, Software & Technology
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            NorthSky Reviews helps you discover better technology through
            software reviews, AI tool comparisons, rankings, buying guides,
            and practical recommendations.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              href="/reviews"
              className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-500"
            >
              Browse Reviews →
            </Link>

            <Link
              href="/guides"
              className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Explore Guides
            </Link>

            <Link
              href="/comparisons"
              className="rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Compare Tools
            </Link>

          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-400">

            <span>✓ AI Software</span>
            <span>✓ VPN & Privacy</span>
            <span>✓ SaaS</span>
            <span>✓ Cybersecurity</span>
            <span>✓ Productivity</span>

          </div>

        </div>

      </section>

      {/* QUICK NAV */}

      <section className="border-b bg-white px-6 py-8">

        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-3">

          <Link
            href="/reviews"
            className="rounded-full bg-slate-100 px-5 py-3 text-sm font-bold hover:bg-blue-50 hover:text-blue-600"
          >
            Reviews
          </Link>

          <Link
            href="/comparisons"
            className="rounded-full bg-slate-100 px-5 py-3 text-sm font-bold hover:bg-blue-50 hover:text-blue-600"
          >
            Comparisons
          </Link>

          <Link
            href="/guides"
            className="rounded-full bg-slate-100 px-5 py-3 text-sm font-bold hover:bg-blue-50 hover:text-blue-600"
          >
            Buying Guides
          </Link>

          <Link
            href="/all-tools"
            className="rounded-full bg-slate-100 px-5 py-3 text-sm font-bold hover:bg-blue-50 hover:text-blue-600"
          >
            All Tools
          </Link>

          <Link
            href="/deals"
            className="rounded-full bg-slate-100 px-5 py-3 text-sm font-bold hover:bg-blue-50 hover:text-blue-600"
          >
            Deals
          </Link>

        </div>

      </section>

      {/* WHAT WE COVER */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Explore NorthSky
            </span>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Technology Categories
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-600">
              Explore software and technology categories to find the tools
              that fit your needs.
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-4">

            {categories.map(([icon, name, link]) => (

              <Link
                key={name}
                href={link}
                className="group rounded-3xl border bg-white p-7 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
              >

                <div className="text-4xl">
                  {icon}
                </div>

                <h3 className="mt-5 text-lg font-black">
                  {name}
                </h3>

                <div className="mt-3 text-sm font-bold text-blue-600">
                  Explore →
                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* FEATURED REVIEWS */}

      <section className="bg-slate-950 px-6 py-20 text-white">

        <div className="mx-auto max-w-6xl">

          <div className="flex flex-wrap items-end justify-between gap-5">

            <div>

              <span className="text-sm font-bold uppercase tracking-wider text-blue-400">
                Featured Reviews
              </span>

              <h2 className="mt-3 text-4xl font-black">
                Top Technology Picks
              </h2>

            </div>

            <Link
              href="/reviews"
              className="font-bold text-blue-400 hover:text-white"
            >
              View All Reviews →
            </Link>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {topReviews.map((review) => (

              <Link
                key={review.name}
                href={review.link}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:bg-white/10"
              >

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <p className="text-sm font-bold text-blue-300">
                      {review.category}
                    </p>

                    <h3 className="mt-2 text-2xl font-black">
                      {review.name}
                    </h3>

                  </div>

                  <span className="rounded-full bg-blue-600 px-3 py-2 text-sm font-bold">
                    ⭐ {review.score}
                  </span>

                </div>

                <p className="mt-5 leading-7 text-slate-400">
                  {review.description}
                </p>

                <div className="mt-6 font-bold text-blue-400">
                  Read Review →
                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* COMPARISONS */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Side-by-Side
            </span>

            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Compare Before You Choose
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-slate-600">
              See how popular software and technology products compare
              before making a decision.
            </p>

          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">

            {comparisons.map((item) => (

              <Link
                key={item.title}
                href={item.link}
                className="rounded-3xl border bg-white p-7 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
              >

                <h3 className="text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-5 font-bold text-blue-600">
                  Compare →
                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* GUIDES */}

      <section className="bg-slate-50 px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <div className="flex flex-wrap items-end justify-between gap-5">

            <div>

              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Buying Guides
              </span>

              <h2 className="mt-3 text-4xl font-black md:text-5xl">
                Technology Guides
              </h2>

            </div>

            <Link
              href="/guides"
              className="font-bold text-blue-600"
            >
              View All Guides →
            </Link>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {guides.slice(0, 6).map((guide) => (

              <Link
                key={guide.link}
                href={guide.link}
                className="rounded-3xl border bg-white p-7 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
              >

                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                  {guide.category}
                </span>

                <h3 className="mt-5 text-xl font-black">
                  {guide.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {guide.description}
                </p>

                <div className="mt-6 font-bold text-blue-600">
                  Read Guide →
                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>

      {/* TRUST / EDITORIAL */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-5xl text-center">

          <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
            Our Approach
          </span>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Technology research made easier
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Choosing software can be complicated. NorthSky Reviews organizes
            important information into reviews, comparisons, rankings and
            practical buying guides so you can evaluate technology faster.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border p-7">
              <div className="text-3xl">🔎</div>
              <h3 className="mt-4 text-xl font-black">
                Research
              </h3>
              <p className="mt-3 text-slate-600">
                We organize important product features, use cases and
                considerations.
              </p>
            </div>

            <div className="rounded-3xl border p-7">
              <div className="text-3xl">⚖️</div>
              <h3 className="mt-4 text-xl font-black">
                Compare
              </h3>
              <p className="mt-3 text-slate-600">
                Compare products and alternatives to understand which
                options may fit your needs.
              </p>
            </div>

            <div className="rounded-3xl border p-7">
              <div className="text-3xl">🎯</div>
              <h3 className="mt-4 text-xl font-black">
                Decide
              </h3>
              <p className="mt-3 text-slate-600">
                Use practical recommendations and buying guides to make
                more informed technology decisions.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}

      <section className="px-6 py-20">

        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-center text-white md:p-16">

          <h2 className="text-4xl font-black md:text-5xl">
            Find Better Technology Faster
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Explore reviews, comparisons, rankings and buying guides from
            NorthSky Reviews.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/reviews"
              className="rounded-xl bg-white px-8 py-4 font-bold text-blue-600 hover:bg-slate-100"
            >
              Browse Reviews →
            </Link>

            <Link
              href="/guides"
              className="rounded-xl border border-white/30 px-8 py-4 font-bold text-white hover:bg-white/10"
            >
              Browse Guides
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