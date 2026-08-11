import Link from "next/link";
const siteUrl = "https://northsky-reviews.vercel.app";
export const metadata = {
  title:
    "Best Software Deals, VPN Offers & Travel Promo Codes 2026 | NorthSky Reviews",
  description:
    "Find the latest software deals, VPN offers, AI tools, travel promotions, and verified promo codes curated by NorthSky Reviews.",
  keywords: [
    "software deals 2026",
    "VPN deals 2026",
    "NordVPN deal",
    "AI software deals",
    "software discounts",
    "travel promo codes",
    "Klook promo codes",
    "technology deals",
    "eSIM deals",
    "travel discounts",
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
    title:
      "Best Software Deals, VPN Offers & Travel Promo Codes 2026",
    description:
      "Discover software discounts, VPN offers, AI tools, travel promotions, and technology deals.",
    url: `${siteUrl}/deals`,
    siteName: "NorthSky Reviews",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: `${siteUrl}/og/deals.jpg`,
        width: 1200,
        height: 630,
        alt: "NorthSky Reviews Deals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Software Deals & Promo Codes 2026 | NorthSky Reviews",
    description:
      "Find VPN offers, software discounts, AI deals, travel promotions, and promo codes.",
    images: [`${siteUrl}/og/deals.jpg`],
  },
};
const featuredDeals = [
  {
    name: "NordVPN",
    category: "VPN & Online Security",
    icon: "🔒",
    badge: "FEATURED VPN",
    rating: "9.5/10",
    description:
      "Protect your online activity with VPN security, privacy tools, and global server access.",
    affiliate:
      "https://go.nordvpn.net/aff_c?offer_id=725&aff_id=143955",
    review: "/reviews/nordvpn",
  },
  {
    name: "NordVPN",
    category: "VPN Promotion",
    icon: "🛡️",
    badge: "ALTERNATIVE OFFER",
    rating: "9.5/10",
    description:
      "Check another NordVPN promotional offer and choose the plan that best fits your needs.",
    affiliate:
      "https://go.nordvpn.net/aff_c?offer_id=1002&aff_id=143955",
    review: "/reviews/nordvpn",
  },
  {
    name: "Saily",
    category: "Travel eSIM",
    icon: "📱",
    badge: "TRAVEL PICK",
    description:
      "Stay connected while traveling with eSIM data plans for destinations around the world.",
    review: "/reviews/saily",
  },
  {
    name: "NordPass",
    category: "Password Manager",
    icon: "🔑",
    badge: "SECURITY PICK",
    description:
      "Securely manage passwords and digital accounts with a dedicated password manager.",
    review: "/reviews/nordpass",
  },
  {
    name: "AI Productivity Tools",
    category: "Artificial Intelligence",
    icon: "🤖",
    badge: "AI PICKS",
    description:
      "Explore AI assistants, writing tools, coding platforms, automation software, and productivity solutions.",
    review: "/ai",
  },
  {
    name: "Travel Technology",
    category: "Travel",
    icon: "✈️",
    badge: "TRAVEL DEALS",
    description:
      "Explore eSIMs, attraction passes, airport transfers, travel apps, and other travel technology offers.",
    review: "/category/travel",
  },
];
const promoDeals = [
  {
    name: "Qianhai Snow World",
    category: "China Travel",
    icon: "❄️",
    code: "QIANHAI0731",
    offer: "Buy One Get One Free Ski Pass",
    description:
      "Use the promotional code for the available Qianhai Snow World ski pass offer.",
    href: "/deals/qianhai-snow-world",
  },
  {
    name: "Guangzhou Bonski",
    category: "China Travel",
    icon: "⛷️",
    code: "BONSKI0731",
    offer: "Buy One Get One Free Ski Pass",
    description:
      "Save with the available Bonski promotional offer for selected ski passes.",
    href: "/deals/guangzhou-bonski",
  },
  {
    name: "KLIA Ekspres Kuala Lumpur",
    category: "Airport Transfer",
    icon: "🚆",
    code: "MY5KLIA",
    offer: "5% Off",
    description:
      "Save on selected KLIA Ekspres airport transfer tickets with the promotional code.",
    href: "/deals/klia-ekspres-kuala-lumpur",
  },
  {
    name: "JR Tokyo Wide Pass",
    category: "Japan Rail",
    icon: "🚄",
    code: "SUMMER8TWP",
    offer: "8% Off",
    description:
      "Save on selected JR Tokyo Wide Pass packages with the available promotion.",
    href: "/deals/jr-tokyo-wide-pass",
  },
  {
    name: "Osaka Amazing Pass",
    category: "Japan Attractions",
    icon: "🎡",
    code: "OAPSUMMER3",
    offer: "15% Off",
    description:
      "Use the promotional code for savings on eligible Osaka attraction passes.",
    href: "/deals/osaka-amazing-pass",
  },
  {
    name: "TOKYO SKYTREE®",
    category: "Tokyo Attractions",
    icon: "🗼",
    code: "S3SKYTREE",
    offer: "15% Off",
    description:
      "Save on eligible TOKYO SKYTREE® admission tickets with the available promotion.",
    href: "/deals/tokyo-skytree-ticket",
  },
];
const categories = [
  {
    icon: "🔒",
    title: "VPN & Security",
    text:
      "VPNs, privacy tools, password managers, and cybersecurity software.",
    href: "/category/vpn",
  },
  {
    icon: "🤖",
    title: "AI Deals",
    text:
      "AI assistants, writing tools, coding platforms, and productivity software.",
    href: "/ai",
  },
  {
    icon: "✈️",
    title: "Travel Deals",
    text:
      "Travel technology, eSIMs, attraction passes, rail passes, and airport transfers.",
    href: "/category/travel",
  },
  {
    icon: "💼",
    title: "Business Software",
    text:
      "Business, productivity, automation, finance, and SaaS platforms.",
    href: "/category/business",
  },
];
export default function DealsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name:
      "NorthSky Reviews Software Deals & Promo Codes",
    description:
      "Curated software deals, VPN offers, AI deals, travel promotions, and promotional codes.",
    url: `${siteUrl}/deals`,
    publisher: {
      "@type": "Organization",
      name: "NorthSky Reviews",
      url: siteUrl,
    },
  };
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
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-800 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <span className="inline-flex rounded-full bg-blue-500/20 px-5 py-2 text-sm font-black text-blue-300">
            🔥 NORTHSKY DEALS
          </span>
          <h1 className="mt-7 text-5xl font-black leading-tight md:text-6xl">
            Best Software Deals
            <span className="block text-blue-400">
              & Promo Codes 2026
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            Discover VPN offers, AI software, technology deals,
            travel promotions, and verified promo codes curated
            by NorthSky Reviews.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="#featured"
              className="rounded-xl bg-blue-500 px-7 py-4 font-black hover:bg-blue-600"
            >
              View Deals →
            </a>
            <a
              href="#promo-codes"
              className="rounded-xl border border-white/30 px-7 py-4 font-black hover:bg-white/10"
            >
              Promo Codes
            </a>
          </div>
        </div>
      </section>
      {/* FEATURED */}
      <section
        id="featured"
        className="px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-black text-blue-700">
              FEATURED OFFERS
            </span>
            <h2 className="mt-5 text-4xl font-black">
              Deals Worth Checking Out
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Our featured technology offers across
              security, AI, software, and travel.
            </p>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {featuredDeals.map((deal) => (
              <article
                key={`${deal.name}-${deal.badge}`}
                className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="text-4xl">
                    {deal.icon}
                  </div>
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
                {deal.rating && (
                  <div className="mt-3 font-black text-yellow-500">
                    ⭐ {deal.rating}
                  </div>
                )}
                <p className="mt-4 flex-1 leading-7 text-slate-600">
                  {deal.description}
                </p>
                <div className="mt-7 grid gap-3">
                  {deal.affiliate && (
                    <a
                      href={deal.affiliate}
                      target="_blank"
                      rel="nofollow sponsored noopener noreferrer"
                      className="rounded-xl bg-blue-600 px-5 py-3 text-center font-black text-white hover:bg-blue-700"
                    >
                      Get Deal →
                    </a>
                  )}
                  <Link
                    href={deal.review}
                    className="rounded-xl border border-slate-200 px-5 py-3 text-center font-bold hover:bg-slate-50"
                  >
                    Read Review →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* PROMO CODES */}
      <section
        id="promo-codes"
        className="bg-slate-50 px-6 py-20"
      >
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-black text-blue-700">
              PROMO CODES
            </span>
            <h2 className="mt-5 text-4xl font-black">
              Travel Promo Codes
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Current promotional codes and travel offers
              featured by NorthSky Reviews.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {promoDeals.map((deal) => (
              <article
                key={deal.name}
                className="rounded-3xl border bg-white p-7 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">
                    {deal.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-black">
                      {deal.name}
                    </h3>
                    <p className="mt-1 font-bold text-blue-600">
                      {deal.category}
                    </p>
                  </div>
                </div>
                <div className="mt-6 rounded-2xl bg-slate-950 p-5 text-center text-white">
                  <p className="text-sm font-bold text-slate-400">
                    PROMO CODE
                  </p>
                  <p className="mt-2 text-2xl font-black tracking-wider">
                    {deal.code}
                  </p>
                  <p className="mt-2 font-bold text-blue-300">
                    {deal.offer}
                  </p>
                </div>
                <p className="mt-5 leading-7 text-slate-600">
                  {deal.description}
                </p>
                <Link
                  href={deal.href}
                  className="mt-6 inline-flex w-full justify-center rounded-xl bg-blue-600 px-5 py-3 font-black text-white hover:bg-blue-700"
                >
                  View Deal Details →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      {/* CATEGORIES */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-4xl font-black">
              Browse Deals By Category
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Find offers based on the technology
              or service you're looking for.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.title}
                href={category.href}
                className="rounded-3xl border bg-white p-7 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
              >
                <div className="text-4xl">
                  {category.icon}
                </div>
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
      {/* HOW WE SELECT */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-black text-blue-300">
            OUR APPROACH
          </span>
          <h2 className="mt-5 text-4xl font-black">
            How We Select Deals
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            We evaluate products and promotions based on
            value, features, usability, security, pricing,
            reputation, and overall usefulness.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl bg-white/10 p-7">
              <div className="text-4xl">
                🔍
              </div>
              <h3 className="mt-4 text-xl font-black">
                Research
              </h3>
              <p className="mt-3 text-slate-300">
                We examine products, features, pricing,
                and available promotions.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-7">
              <div className="text-4xl">
                ⚖️
              </div>
              <h3 className="mt-4 text-xl font-black">
                Compare
              </h3>
              <p className="mt-3 text-slate-300">
                We compare alternatives to identify
                strong overall value.
              </p>
            </div>
            <div className="rounded-3xl bg-white/10 p-7">
              <div className="text-4xl">
                ⭐
              </div>
              <h3 className="mt-4 text-xl font-black">
                Recommend
              </h3>
              <p className="mt-3 text-slate-300">
                We highlight products and offers
                worth exploring.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-12 text-center text-white md:p-16">
          <h2 className="text-4xl font-black md:text-5xl">
            Find Your Next Great Deal
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            Explore NorthSky Reviews for software reviews,
            comparisons, rankings, buying guides, and
            technology deals.
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
          <strong>Affiliate Disclosure:</strong>{" "}
          NorthSky Reviews may earn a commission when
          you purchase products or services through certain
          links on this page. These commissions help support
          our website and research. Affiliate relationships
          do not determine our editorial ratings or opinions.
        </div>
      </section>
    </main>
  );
}