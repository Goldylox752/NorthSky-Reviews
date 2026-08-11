import Link from "next/link";
const siteUrl = "https://northsky-reviews.vercel.app";
export const metadata = {
  title:
    "NorthSky Reviews | Best AI Tools, Software Reviews, VPNs & Technology Rankings 2026",
  description:
    "Discover the best AI tools, SaaS platforms, VPNs, cybersecurity software, hosting providers, business tools, and technology solutions with expert reviews, comparisons, rankings, and buying guides.",
  keywords: [
    "best AI tools 2026",
    "AI software reviews",
    "software reviews 2026",
    "VPN reviews",
    "best SaaS tools",
    "technology comparisons",
    "business software",
    "hosting reviews",
    "cybersecurity tools",
    "productivity software",
    "developer tools",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title:
      "NorthSky Reviews | Best Software & Technology Reviews 2026",
    description:
      "Expert software reviews, AI tool rankings, VPN comparisons, SaaS guides, and technology recommendations.",
    url: siteUrl,
    siteName: "NorthSky Reviews",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og/home.jpg`,
        width: 1200,
        height: 630,
        alt: "NorthSky Reviews Technology Reviews",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "NorthSky Reviews | Best Software Reviews 2026",
    description:
      "Discover AI tools, software reviews, comparisons, rankings, and technology guides.",
    images: [`${siteUrl}/og/home.jpg`],
  },
};
const featuredDeals = [
  {
    name: "NordVPN",
    category: "Online Security",
    rating: "9.5/10",
    badge: "Top VPN Pick",
    description:
      "A privacy-focused VPN with strong security features, global server coverage, and useful tools for protecting your online activity.",
    link: "/reviews/nordvpn",
  },
  {
    name: "ChatGPT",
    category: "AI Tools",
    rating: "9.8/10",
    badge: "Top AI Pick",
    description:
      "A leading AI assistant for writing, research, coding, brainstorming, productivity, and everyday tasks.",
    link: "/reviews/chatgpt",
  },
  {
    name: "Claude",
    category: "AI Tools",
    rating: "9.4/10",
    badge: "Editor's Pick",
    description:
      "An advanced AI assistant designed for writing, analysis, research, coding, and professional workflows.",
    link: "/reviews/claude",
  },
];
const categories = [
  {
    icon: "🤖",
    title: "AI Tools",
    description:
      "AI assistants, automation platforms, writing tools, coding AI, and productivity solutions.",
    link: "/category/ai",
  },
  {
    icon: "🔒",
    title: "VPN & Privacy",
    description:
      "VPN providers, privacy software, online security, and digital protection tools.",
    link: "/category/vpn",
  },
  {
    icon: "🛡️",
    title: "Cybersecurity",
    description:
      "Security platforms, antivirus software, identity protection, and threat prevention.",
    link: "/category/cybersecurity",
  },
  {
    icon: "☁️",
    title: "Hosting",
    description:
      "Web hosting, cloud platforms, domains, and website infrastructure solutions.",
    link: "/category/hosting",
  },
  {
    icon: "💼",
    title: "Business Software",
    description:
      "CRM, automation, operations, and business management platforms.",
    link: "/category/business",
  },
  {
    icon: "⚡",
    title: "Productivity",
    description:
      "Task management, collaboration, workflow, and organization tools.",
    link: "/category/productivity",
  },
  {
    icon: "🔑",
    title: "Password Managers",
    description:
      "Secure password storage, identity protection, and account security tools.",
    link: "/category/password-managers",
  },
  {
    icon: "📈",
    title: "Marketing Tools",
    description:
      "SEO, analytics, advertising, email marketing, and growth platforms.",
    link: "/category/marketing",
  },
  {
    icon: "👨‍💻",
    title: "Developer Tools",
    description:
      "APIs, coding tools, software development platforms, and technical resources.",
    link: "/category/developer-tools",
  },
  {
    icon: "💰",
    title: "Finance Software",
    description:
      "Accounting, budgeting, payments, and financial technology solutions.",
    link: "/category/finance-software",
  },
  {
    icon: "✈️",
    title: "Travel Technology",
    description:
      "Travel apps, eSIMs, booking platforms, and digital travel solutions.",
    link: "/category/travel",
  },
  {
    icon: "☁️",
    title: "SaaS Platforms",
    description:
      "Cloud-based software solutions for individuals, teams, and businesses.",
    link: "/category/saas",
  },
];
const topRatedTools = [
  {
    name: "ChatGPT",
    category: "AI Assistant",
    score: "9.8/10",
    description:
      "Leading AI assistant for writing, research, coding, and productivity.",
    link: "/reviews/chatgpt",
  },
  {
    name: "NordVPN",
    category: "VPN Security",
    score: "9.5/10",
    description:
      "Privacy-focused VPN with security features, speed, and global servers.",
    link: "/reviews/nordvpn",
  },
  {
    name: "Claude",
    category: "AI Assistant",
    score: "9.4/10",
    description:
      "Advanced AI platform for analysis, writing, and professional workflows.",
    link: "/reviews/claude",
  },
];
const latestReviews = [
  {
    title: "ChatGPT Review 2026",
    text:
      "Complete breakdown of features, pricing, capabilities, and alternatives.",
    link: "/reviews/chatgpt",
  },
  {
    title: "Claude Review 2026",
    text:
      "AI performance review for writing, research, business, and productivity.",
    link: "/reviews/claude",
  },
  {
    title: "NordVPN Review 2026",
    text:
      "Security, privacy, speed, pricing, and feature evaluation.",
    link: "/reviews/nordvpn",
  },
];
const comparisons = [
  {
    title: "ChatGPT vs Claude",
    link: "/comparisons/chatgpt-vs-claude",
  },
  {
    title: "Best AI Tools 2026",
    link: "/comparisons/best-ai-tools-2026",
  },
  {
    title: "VPN vs Antivirus",
    link: "/comparisons/vpn-vs-antivirus",
  },
  {
    title: "Best VPN Providers",
    link: "/comparisons/best-vpn-providers",
  },
  {
    title: "Best eSIM Providers",
    link: "/comparisons/best-esim-providers",
  },
  {
    title: "Best SaaS Platforms",
    link: "/comparisons/best-saas-platforms",
  },
];
const guides = [
  {
    title: "Best AI Tools 2026",
    text:
      "Compare leading artificial intelligence platforms for writing, coding, automation, research, and productivity.",
    link: "/guides/best-ai-tools-2026",
  },
  {
    title: "Best VPNs In Canada 2026",
    text:
      "Analyze privacy, security, speed, features, and pricing from leading VPN providers.",
    link: "/guides/best-vpns-canada",
  },
  {
    title: "Best Business Software 2026",
    text:
      "Discover CRM, automation, finance, and productivity platforms designed to help businesses grow.",
    link: "/guides/best-business-software",
  },
];
const standards = [
  {
    icon: "🔍",
    title: "Independent Research",
    text:
      "We analyze software features, pricing, security, usability, and performance.",
  },
  {
    icon: "⚖️",
    title: "Expert Comparisons",
    text:
      "We compare alternatives to help readers make better technology decisions.",
  },
  {
    icon: "📈",
    title: "Updated Rankings",
    text:
      "Our recommendations evolve as software, pricing, and technology change.",
  },
  {
    icon: "🔒",
    title: "Transparent Reviews",
    text:
      "Affiliate relationships do not determine our editorial evaluations.",
  },
];
const faqs = [
  {
    q: "What does NorthSky Reviews cover?",
    a:
      "NorthSky Reviews covers AI tools, SaaS platforms, VPNs, cybersecurity software, hosting, productivity apps, business software, developer tools, and other technology solutions.",
  },
  {
    q: "How are software rankings created?",
    a:
      "Rankings consider features, usability, performance, security, pricing, support, integrations, and overall value.",
  },
  {
    q: "Does NorthSky Reviews use affiliate links?",
    a:
      "Some recommendations may contain affiliate links that help support our research and website operations. Affiliate partnerships do not determine our editorial rankings or opinions.",
  },
];
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-32">
          <div className="max-w-5xl">
            <span className="inline-flex rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">
              ⭐ Independent Software Reviews • Rankings • Comparisons
            </span>
            <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              Discover The Best
              <span className="text-blue-400"> AI Tools, </span>
              Software & Technology Solutions
            </h1>
            <p className="mt-8 max-w-4xl text-xl leading-9 text-slate-300">
              NorthSky Reviews helps individuals, creators, developers, and
              businesses find the right technology faster through software
              reviews, AI tool rankings, product comparisons, buying guides,
              and curated technology recommendations.
            </p>
            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/categories"
                className="rounded-xl bg-blue-500 px-8 py-4 font-black transition hover:bg-blue-600"
              >
                Explore Software Categories →
              </Link>
              <Link
                href="/reviews"
                className="rounded-xl border border-white/30 px-8 py-4 font-black transition hover:bg-white/10"
              >
                Read Reviews →
              </Link>
            </div>
          </div>
          {/* STATS */}
          <div className="mt-20 grid gap-6 md:grid-cols-4">
            {[
              ["500+", "Software Tools Reviewed"],
              ["100+", "Software Comparisons"],
              ["12+", "Technology Categories"],
              ["2026", "Updated Rankings"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="rounded-3xl bg-white/10 p-7 backdrop-blur"
              >
                <h3 className="text-4xl font-black">{number}</h3>
                <p className="mt-2 text-slate-300">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FEATURED DEALS */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-700">
              Editor&apos;s Recommendations
            </span>
            <h2 className="mt-6 text-4xl font-black">
              Top Technology Recommendations
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
              Hand-picked software and technology products evaluated for
              features, security, usability, performance, and overall value.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {featuredDeals.map((deal) => (
              <div
                key={deal.name}
                className="relative rounded-3xl border bg-white p-8 transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="absolute right-6 top-6 rounded-full bg-blue-600 px-4 py-2 text-sm font-black text-white">
                  {deal.badge}
                </div>
                <h3 className="pr-32 text-3xl font-black">
                  {deal.name}
                </h3>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-slate-100 px-4 py-1 text-sm font-bold text-slate-700">
                    {deal.category}
                  </span>
                  <span className="font-black text-yellow-500">
                    ★★★★★ {deal.rating}
                  </span>
                </div>
                <p className="mt-6 leading-7 text-slate-600">
                  {deal.description}
                </p>
                <div className="mt-8 grid gap-3">
                  <div className="rounded-xl bg-slate-50 p-4 text-sm font-semibold">
                    ✓ Reviewed For Features & Value
                  </div>
                  <div className="rounded-xl bg-slate-50 p-4 text-sm font-semibold">
                    ✓ Updated For 2026
                  </div>
                </div>
                <Link
                  href={deal.link}
                  className="mt-8 inline-flex w-full justify-center rounded-xl bg-blue-600 px-6 py-4 font-black text-white transition hover:bg-blue-700"
                >
                  Read Review →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CATEGORY HUB */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-700">
              Software Directory
            </span>
            <h2 className="mt-6 text-4xl font-black">
              Explore Software Categories
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
              Browse reviews, comparisons, rankings, and buying guides across
              major software and technology categories.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.link}
                className="group rounded-3xl border bg-white p-7 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="text-5xl">{category.icon}</div>
                <h3 className="mt-5 text-xl font-black">
                  {category.title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  {category.description}
                </p>
                <div className="mt-6 font-black text-blue-600 group-hover:underline">
                  Explore Reviews →
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/categories"
              className="inline-flex rounded-xl bg-slate-950 px-8 py-4 font-black text-white transition hover:bg-slate-800"
            >
              View All Software Categories →
            </Link>
          </div>
        </div>
      </section>
      {/* TOP RATED */}
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">
              Top Rankings 2026
            </span>
            <h2 className="mt-6 text-4xl font-black">
              Top Rated Software & Technology Tools
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">
              Explore highly-rated software platforms evaluated for features,
              performance, security, usability, and overall value.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {topRatedTools.map((tool) => (
              <Link
                key={tool.name}
                href={tool.link}
                className="rounded-3xl bg-white/10 p-8 transition hover:bg-white/20"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black">{tool.name}</h3>
                  <span className="whitespace-nowrap rounded-full bg-blue-500 px-4 py-2 font-black">
                    ⭐ {tool.score}
                  </span>
                </div>
                <p className="mt-4 font-bold text-blue-300">
                  {tool.category}
                </p>
                <p className="mt-4 leading-7 text-slate-300">
                  {tool.description}
                </p>
                <div className="mt-6 font-black">
                  Read Full Review →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* LATEST REVIEWS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-4xl font-black">
            Latest Software Reviews
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-lg text-slate-600">
            Detailed software analysis covering features, pricing,
            alternatives, performance, and real-world use cases.
          </p>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {latestReviews.map((review) => (
              <Link
                key={review.title}
                href={review.link}
                className="rounded-3xl border p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <h3 className="text-2xl font-black">
                  {review.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {review.text}
                </p>
                <div className="mt-6 font-black text-blue-600">
                  View Review →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* COMPARISONS */}
      <section className="bg-slate-900 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">
            Compare Products
          </span>
          <h2 className="mt-6 text-4xl font-black">
            Compare Before You Choose
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">
            Side-by-side comparisons help you evaluate features, pricing,
            strengths, weaknesses, and overall value.
          </p>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {comparisons.map((comparison) => (
              <Link
                key={comparison.title}
                href={comparison.link}
                className="rounded-2xl bg-white/10 p-6 font-black transition hover:bg-white/20"
              >
                {comparison.title}
                <span className="ml-2 text-blue-400">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* BUYING GUIDES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-bold text-blue-700">
              Expert Resources
            </span>
            <h2 className="mt-6 text-4xl font-black">
              Software Buying Guides
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
              Research-focused guides helping you choose the right software
              for business, security, productivity, and technology needs.
            </p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.title}
                href={guide.link}
                className="rounded-3xl border bg-white p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <h3 className="text-2xl font-black">
                  {guide.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {guide.text}
                </p>
                <div className="mt-6 font-black text-blue-600">
                  Read Guide →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* TRUST */}
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">
              Our Standards
            </span>
            <h2 className="mt-6 text-4xl font-black">
              Why Trust NorthSky Reviews?
            </h2>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {standards.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white/10 p-8"
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-5 text-xl font-black">
                  {item.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-4xl font-black">
            Frequently Asked Questions
          </h2>
          <div className="mt-12 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-3xl border p-7"
              >
                <h3 className="text-xl font-black">
                  {faq.q}
                </h3>
                <p className="mt-4 leading-7 text-slate-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* FINAL CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-12 text-center text-white md:p-16">
          <h2 className="text-4xl font-black md:text-5xl">
            Find The Right Software Faster
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-blue-100">
            Explore reviews, comparisons, rankings, and buying guides to
            discover the best technology solutions for your goals.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              href="/categories"
              className="rounded-xl bg-white px-8 py-4 font-black text-blue-600"
            >
              Explore Categories
            </Link>
            <Link
              href="/all-tools"
              className="rounded-xl border border-white/40 px-8 py-4 font-black text-white"
            >
              Browse All Tools
            </Link>
          </div>
        </div>
      </section>
      {/* AFFILIATE DISCLOSURE */}
      <section className="border-t px-6 py-10">
        <div className="mx-auto max-w-4xl text-center text-sm leading-6 text-slate-500">
          NorthSky Reviews may earn commissions from affiliate partnerships.
          These partnerships help support our research and website operations.
          Our recommendations are based on independent evaluation of
          features, pricing, usability, security, performance, and overall
          value.
        </div>
      </section>
    </main>
  );
}