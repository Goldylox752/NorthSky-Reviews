import Link from "next/link";
const siteUrl = "https://northsky-reviews.vercel.app";
export const metadata = {
  title: "Best AI, Software & Travel Deals 2026 | NorthSky Reviews",
  description:
    "Discover the best AI tools, software discounts, VPN offers, travel promotions, and technology deals curated by NorthSky Reviews.",
  keywords: [
    "AI software deals",
    "SaaS discounts",
    "VPN deals",
    "NordVPN deal",
    "travel deals",
    "Klook promo codes",
    "technology offers",
    "best deals 2026",
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: `${siteUrl}/deals`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Best AI, Software & Travel Deals 2026 | NorthSky Reviews",
    description:
      "Find software discounts, VPN offers, AI deals, travel promotions, and technology deals.",
    url: `${siteUrl}/deals`,
    siteName: "NorthSky Reviews",
    locale: "en_CA",
    type: "website",
  },
};
const deals = [
  {
    name: "NordVPN",
    category: "Online Security",
    description:
      "Protect your online connection with VPN privacy and security features.",
    badge: "🔒 Featured Security Deal",
    affiliate:
      "https://go.nordvpn.net/aff_c?offer_id=725&aff_id=143955",
    review: "/reviews/nordvpn",
    external: true,
  },
  {
    name: "NordPass",
    category: "Password Management",
    description:
      "Securely manage passwords and digital accounts with a dedicated password manager.",
    badge: "🛡️ Security Pick",
    url: "/reviews/nordpass",
  },
  {
    name: "Saily",
    category: "Travel eSIM",
    description:
      "Stay connected while travelling with international mobile data plans.",
    badge: "📱 Travel Tech",
    url: "/reviews/saily",
  },
  {
    name: "Qianhai Snow World",
    category: "China Travel",
    description:
      "Buy One Get One Free ski pass promotion using the listed promotional code.",
    badge: "❄️ B1G1 Deal",
    url: "/deals/qianhai-snow-world",
  },
  {
    name: "Guangzhou Bonski",
    category: "China Travel",
    description:
      "Buy One Get One Free Advanced Trail Unlimited Ski Pass promotion.",
    badge: "⛷️ B1G1 Deal",
    url: "/deals/guangzhou-bonski",
  },
  {
    name: "KLIA Ekspres Kuala Lumpur",
    category: "Airport Transfer",
    description:
      "Save on Kuala Lumpur airport express tickets with the available promotion.",
    badge: "✈️ Travel Deal",
    url: "/deals/klia-ekspres-kuala-lumpur",
  },
  {
    name: "JR Tokyo Wide Pass",
    category: "Japan Rail",
    description:
      "Explore selected JR Tokyo Wide Pass packages and available promotions.",
    badge: "🚄 Japan Deal",
    url: "/deals/jr-tokyo-wide-pass",
  },
  {
    name: "Osaka Amazing Pass",
    category: "Japan Attractions",
    description:
      "Save on selected Osaka attractions with the available promotion.",
    badge: "🎡 Japan Deal",
    url: "/deals/osaka-amazing-pass",
  },
  {
    name: "TOKYO SKYTREE® Ticket",
    category: "Tokyo Attractions",
    description:
      "Find available discounts and promotions for Tokyo SKYTREE® tickets.",
    badge: "🗼 Tokyo Deal",
    url: "/deals/tokyo-skytree-ticket",
  },
  {
    name: "AI Productivity Tools",
    category: "Artificial Intelligence",
    description:
      "Discover AI assistants, automation platforms, coding tools, and productivity software.",
    badge: "🤖 AI Deals",
    url: "/ai",
  },
];
const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "NorthSky Reviews Deals",
  description:
    "Curated AI software deals, VPN offers, travel promotions, and technology discounts.",
  url: `${siteUrl}/deals`,
  publisher: {
    "@type": "Organization",
    name: "NorthSky Reviews",
    url: siteUrl,
  },
};
export default function DealsPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-5xl">
          <span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">
            🔥 NorthSky Deals
          </span>
          <h1 className="mt-7 text-5xl font-black md:text-6xl">
            Best Deals & Discounts 2026
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-300">
            Discover AI tools, software discounts, VPN offers, travel
            promotions, and technology deals selected by NorthSky Reviews.
          </p>
        </div>
      </section>
      {/* DEALS */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-4xl font-black">
              Featured Deals
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Explore current promotions, recommended products, and
              technology offers.
            </p>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-2">
            {deals.map((deal) => (
              <div
                key={deal.name}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
                  {deal.badge}
                </span>
                <h3 className="mt-6 text-2xl font-black">
                  {deal.name}
                </h3>
                <p className="mt-2 font-bold text-blue-600">
                  {deal.category}
                </p>
                <p className="mt-5 leading-7 text-slate-600">
                  {deal.description}
                </p>
                {deal.external ? (
                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={deal.affiliate}
                      target="_blank"
                      rel="nofollow sponsored noopener"
                      className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
                    >
                      Check Deal →
                    </a>
                    <Link
                      href={deal.review}
                      className="rounded-xl border border-slate-200 px-6 py-3 font-bold hover:bg-slate-50"
                    >
                      Read Review
                    </Link>
                  </div>
                ) : (
                  <Link
                    href={deal.url}
                    className="mt-7 inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
                  >
                    View Deal →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* DEAL TYPES */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-4xl font-black">
              Find Deals By Category
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Browse NorthSky recommendations across software, security,
              AI, and travel technology.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {[
              ["🤖", "AI Tools", "/ai"],
              ["🔒", "VPN & Privacy", "/category/vpn"],
              ["💼", "Business Software", "/category/business"],
              ["🛡️", "Cybersecurity", "/category/cybersecurity"],
              ["✈️", "Travel Technology", "/category/travel"],
              ["⚡", "Productivity", "/category/productivity"],
            ].map(([icon, title, url]) => (
              <Link
                key={title}
                href={url}
                className="rounded-2xl border bg-white p-6 transition hover:border-blue-500 hover:shadow-lg"
              >
                <div className="text-4xl">
                  {icon}
                </div>
                <h3 className="mt-4 font-black">
                  {title}
                </h3>
                <p className="mt-2 text-sm font-bold text-blue-600">
                  Explore →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* HOW WE SELECT */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <span className="text-sm font-bold text-blue-400">
            OUR DEAL STANDARDS
          </span>
          <h2 className="mt-3 text-4xl font-black">
            How We Select Deals
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              [
                "🔍",
                "Research",
                "We review products, pricing, features, and promotions.",
              ],
              [
                "⚖️",
                "Compare",
                "We consider alternatives and overall value.",
              ],
              [
                "⭐",
                "Recommend",
                "We highlight offers that are worth exploring.",
              ],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-3xl bg-white/10 p-8"
              >
                <div className="text-4xl">
                  {icon}
                </div>
                <h3 className="mt-4 text-xl font-black">
                  {title}
                </h3>
                <p className="mt-3 text-slate-300">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-center text-white md:p-14">
          <h2 className="text-4xl font-black">
            Research Before You Buy
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-blue-100">
            Check our reviews and comparisons before taking advantage of
            a software or technology deal.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/reviews"
              className="rounded-xl bg-white px-7 py-4 font-black text-blue-600"
            >
              Browse Reviews →
            </Link>
            <Link
              href="/comparisons"
              className="rounded-xl border border-white/40 px-7 py-4 font-black"
            >
              Compare Products →
            </Link>
          </div>
        </div>
      </section>
      {/* AFFILIATE DISCLOSURE */}
      <section className="border-t px-6 py-10">
        <div className="mx-auto max-w-4xl text-center text-sm leading-6 text-slate-500">
          <p>
            <strong>Affiliate Disclosure:</strong> NorthSky Reviews may earn
            commissions when you purchase or sign up through certain links on
            this website. These commissions help support our website and
            research. Affiliate relationships do not determine our editorial
            ratings, recommendations, or opinions.
          </p>
        </div>
      </section>
    </main>
  );
}