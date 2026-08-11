import Link from "next/link";
const siteUrl = "https://north-sky-reviews.vercel.app";
export const metadata = {
  title: "Best Software Deals & Discounts 2026 | NorthSky Reviews",
  description:
    "Find the best AI, software, VPN, travel technology, and online security deals curated by NorthSky Reviews.",
  keywords: [
    "software deals 2026",
    "AI deals",
    "VPN deals",
    "NordVPN deal",
    "software discounts",
    "technology deals",
    "travel technology deals",
    "eSIM deals",
    "promo codes",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: `${siteUrl}/deals`,
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
    title: "Best Software Deals & Discounts 2026 | NorthSky Reviews",
    description:
      "Discover software discounts, VPN offers, AI tools, travel technology deals, and technology promotions.",
    url: `${siteUrl}/deals`,
    siteName: "NorthSky Reviews",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og/deals.jpg`,
        width: 1200,
        height: 630,
        alt: "NorthSky Reviews Software Deals",
      },
    ],
  },
};
const deals = [
  {
    name: "NordVPN",
    category: "VPN & Online Security",
    badge: "🔥 Featured Deal",
    icon: "🔒",
    description:
      "Protect your online activity with VPN security, privacy tools, and access to servers around the world.",
    rating: "9.5/10",
    review: "/reviews/nordvpn",
    affiliate:
      "https://go.nordvpn.net/aff_c?offer_id=725&aff_id=143955",
  },
  {
    name: "NordVPN",
    category: "VPN Promotion",
    badge: "⭐ Alternative Offer",
    icon: "🛡️",
    description:
      "Explore another NordVPN promotional offer and choose the plan that best fits your needs.",
    rating: "9.5/10",
    review: "/reviews/nordvpn",
    affiliate:
      "https://go.nordvpn.net/aff_c?offer_id=1002&aff_id=143955",
  },
  {
    name: "NordPass",
    category: "Password Manager",
    badge: "🔐 Security Pick",
    icon: "🔑",
    description:
      "Securely store passwords, manage digital accounts, and improve your online security.",
    rating: "Recommended",
    review: "/reviews/nordpass",
  },
  {
    name: "Saily",
    category: "Travel eSIM",
    badge: "✈️ Travel Tech",
    icon: "📱",
    description:
      "Stay connected while traveling with flexible eSIM data plans for destinations around the world.",
    rating: "Travel Pick",
    review: "/reviews/saily",
  },
  {
    name: "AI Productivity Tools",
    category: "Artificial Intelligence",
    badge: "🤖 AI Picks",
    icon: "🧠",
    description:
      "Explore AI assistants, writing tools, coding platforms, automation software, and productivity tools.",
    rating: "Top AI Picks",
    review: "/ai",
  },
  {
    name: "Travel Technology",
    category: "Travel",
    badge: "🌎 Travel Deals",
    icon: "✈️",
    description:
      "Discover eSIMs, travel apps, attraction passes, airport transfers, and other travel technology.",
    rating: "Explore Deals",
    review: "/category/travel",
  },
];
const dealCategories = [
  {
    icon: "🤖",
    title: "AI Deals",
    text: "AI assistants, automation, writing, coding, and productivity software.",
    href: "/ai",
  },
  {
    icon: "🔒",
    title: "VPN & Security",
    text: "VPNs, password managers, privacy software, and cybersecurity tools.",
    href: "/category/vpn",
  },
  {
    icon: "💼",
    title: "Business Software",
    text: "CRM, productivity, automation, finance, and business platforms.",
    href: "/category/business",
  },
  {
    icon: "✈️",
    title: "Travel Technology",
    text: "eSIMs, travel apps, transportation, and attraction deals.",
    href: "/category/travel",
  },
];
export default function DealsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "NorthSky Reviews Deals",
    description:
      "Curated software, AI, VPN, security, and travel technology deals.",
    url: `${siteUrl}/deals`,
    publisher: {
      "@type": "Organization",
      name: "NorthSky Reviews",
      url: siteUrl,
    },
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
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-800 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <span className="inline-flex rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">
            🔥 NorthSky Deals
          </span>
          <h1 className="mt-7 text-5xl font-black md:text-6xl">
            Best Software Deals & Discounts
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            Discover worthwhile deals on AI tools, VPNs, security software,
            business platforms, travel technology, and more.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#featured-deals"
              className="rounded-xl bg-blue-500 px-7 py-4 font-black transition hover:bg-blue-600"
            >
              View Featured Deals →
            </a>
            <Link
              href="/reviews"
              className="rounded-xl border border-white/30 px-7 py-4 font-black transition hover:bg-white/10"
            >
              Read Reviews
            </Link>
          </div>
        </div>
      </section>
      {/* FEATURED DEALS */}
      <section id="featured-deals" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
              Featured Offers
            </span>
            <h2 className="mt-5 text-4xl font-black">
              Deals Worth Checking Out
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Our featured offers across security, AI, software, and travel
              technology.
            </p>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {deals.map((deal) => (
              <article
                key={`${deal.name}-${deal.badge}`}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="text-4xl">{deal.icon}</div>
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-black text-blue-700">
                    {deal.badge}
                  </span>
                </div>
                <h3 className="mt-6 text-2xl font-black">
                  {deal.name}
                </h3>
                <p className="mt-2 font-bold text-blue-600">
                  {deal.category}
                </p>
                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {deal.description}
                </p>
                <div className="mt-6 rounded-xl bg-slate-50 p-4">
                  <span className="text-sm font-bold text-slate-500">
                    Rating
                  </span>
                  <div className="mt-1 font-black">
                    ⭐ {deal.rating}
                  </div>
                </div>
                <div className="mt-6 grid gap-3">
                  {deal.affiliate && (
                    <a
                      href={deal.affiliate}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      className="rounded-xl bg-blue-600 px-5 py-3 text-center font-black text-white transition hover:bg-blue-700"
                    >
                      Get Deal →
                    </a>
                  )}
                  <Link
                    href={deal.review}
                    className="rounded-xl border border-slate-200 px-5 py-3 text-center font-bold transition hover:bg-slate-50"
                  >
                    {deal.affiliate ? "Read Review" : "Explore →"}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* CATEGORIES */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-4xl font-black">
              Browse Deals By Category
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Find offers based on what you're looking for.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {dealCategories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="rounded-3xl border bg-white p-7 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
              >
                <div className="text-4xl">{category.icon}</div>
                <h3 className="mt-5 text-xl font-black">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {category.text}
                </p>
                <div className="mt-5 font-black text-blue-600">
                  Explore →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* WHY NORTHSKY */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
            Our Approach
          </span>
          <h2 className="mt-5 text-4xl font-black">
            How We Choose Deals
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
            We look at pricing, features, usability, security, reputation,
            and overall value when deciding what deserves a place on
            NorthSky Reviews.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border p-7">
              <div className="text-4xl">🔍</div>
              <h3 className="mt-4 text-xl font-black">
                Research
              </h3>
              <p className="mt-3 text-slate-600">
                We examine products, features, pricing, and available offers.
              </p>
            </div>
            <div className="rounded-3xl border p-7">
              <div className="text-4xl">⚖️</div>
              <h3 className="mt-4 text-xl font-black">
                Compare
              </h3>
              <p className="mt-3 text-slate-600">
                We compare alternatives to identify strong overall value.
              </p>
            </div>
            <div className="rounded-3xl border p-7">
              <div className="text-4xl">⭐</div>
              <h3 className="mt-4 text-xl font-black">
                Recommend
              </h3>
              <p className="mt-3 text-slate-600">
                We highlight products and offers worth exploring.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-12 text-center text-white md:p-16">
          <h2 className="text-4xl font-black md:text-5xl">
            Find Your Next Great Deal
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            Explore NorthSky Reviews for software reviews, comparisons,
            rankings, buying guides, and technology deals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/reviews"
              className="rounded-xl bg-white px-7 py-4 font-black text-blue-600"
            >
              Browse Reviews →
            </Link>
            <Link
              href="/categories"
              className="rounded-xl border border-white/40 px-7 py-4 font-black"
            >
              Explore Categories →
            </Link>
          </div>
        </div>
      </section>
      {/* AFFILIATE DISCLOSURE */}
      <section className="border-t px-6 py-10">
        <div className="mx-auto max-w-4xl text-center text-sm leading-6 text-slate-500">
          <strong>Affiliate Disclosure:</strong> NorthSky Reviews may earn a
          commission when you purchase products or services through certain
          links on this page. These commissions help support our website and
          research. Affiliate relationships do not determine our editorial
          ratings or opinions.
        </div>
      </section>
    </main>
  );
}