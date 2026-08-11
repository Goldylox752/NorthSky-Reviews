import Link from "next/link";
const siteUrl = "https://northsky-reviews.vercel.app";
export const metadata = {
  title:
    "NorthSky Reviews | Best AI Tools, Software, VPNs & Technology 2026",
  description:
    "Discover the best AI tools, software, VPNs, SaaS platforms, cybersecurity tools, and technology solutions with reviews, comparisons, rankings, and buying guides.",
  keywords: [
    "best AI tools 2026",
    "software reviews",
    "VPN reviews",
    "best SaaS tools",
    "AI software",
    "cybersecurity tools",
    "technology comparisons",
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
    title: "NorthSky Reviews | Best Software & Technology Reviews 2026",
    description:
      "AI tools, software reviews, VPN comparisons, technology rankings, and buying guides.",
    url: siteUrl,
    siteName: "NorthSky Reviews",
    locale: "en_CA",
    type: "website",
  },
};
const affiliates = {
  nordvpn:
    "https://go.nordvpn.net/aff_c?offer_id=725&aff_id=143955",
  nordvpnAlt:
    "https://go.nordvpn.net/aff_c?offer_id=1002&aff_id=143955",
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
const reviews = [
  {
    name: "ChatGPT",
    score: "9.8/10",
    category: "AI Assistant",
    link: "/reviews/chatgpt",
  },
  {
    name: "NordVPN",
    score: "9.5/10",
    category: "VPN Security",
    link: "/reviews/nordvpn",
  },
  {
    name: "Claude",
    score: "9.4/10",
    category: "AI Assistant",
    link: "/reviews/claude",
  },
];
const comparisons = [
  ["ChatGPT vs Claude", "/comparisons/chatgpt-vs-claude"],
  ["Best AI Tools 2026", "/comparisons/best-ai-tools-2026"],
  ["VPN vs Antivirus", "/comparisons/vpn-vs-antivirus"],
  ["Best VPN Providers", "/comparisons/best-vpn-providers"],
];
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-700 px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">
            ⭐ Reviews • Rankings • Comparisons
          </span>
          <h1 className="mt-7 text-5xl font-black leading-tight md:text-6xl">
            Find The Best
            <span className="text-blue-400"> Software & AI Tools</span>
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            NorthSky Reviews helps you discover better software through
            independent reviews, comparisons, rankings, and technology guides.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link
              href="/reviews"
              className="rounded-xl bg-blue-600 px-7 py-4 font-bold hover:bg-blue-500"
            >
              Browse Reviews →
            </Link>
            <Link
              href="/categories"
              className="rounded-xl border border-white/30 px-7 py-4 font-bold hover:bg-white/10"
            >
              Explore Categories
            </Link>
          </div>
        </div>
      </section>
      {/* FEATURED PICK */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-sm font-bold text-blue-600">
              FEATURED SECURITY PICK
            </span>
            <h2 className="mt-3 text-4xl font-black">
              NordVPN
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              A popular VPN solution for privacy, security, streaming,
              browsing, and protecting your connection on public networks.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-2xl rounded-3xl border bg-white p-8 text-center shadow-sm">
            <div className="text-3xl font-black">
              ⭐ 9.5/10
            </div>
            <p className="mt-3 text-slate-600">
              Top VPN Pick
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <a
                href={affiliates.nordvpn}
                target="_blank"
                rel="nofollow sponsored noopener"
                className="rounded-xl bg-blue-600 px-7 py-4 font-bold text-white hover:bg-blue-700"
              >
                Check NordVPN Deal →
              </a>
              <Link
                href="/reviews/nordvpn"
                className="rounded-xl border px-7 py-4 font-bold"
              >
                Read Review
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* CATEGORIES */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-4xl font-black">
              Explore Software Categories
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Find reviews and recommendations across today's most important
              technology categories.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {categories.map(([icon, name, link]) => (
              <Link
                key={name}
                href={link}
                className="rounded-2xl border p-6 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
              >
                <div className="text-4xl">{icon}</div>
                <h3 className="mt-4 font-black">
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
      {/* TOP REVIEWS */}
      <section className="bg-slate-950 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <span className="text-sm font-bold text-blue-400">
              TOP RATED
            </span>
            <h2 className="mt-3 text-4xl font-black">
              Best Technology Picks
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {reviews.map((review) => (
              <Link
                key={review.name}
                href={review.link}
                className="rounded-3xl bg-white/10 p-7 transition hover:bg-white/20"
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-2xl font-black">
                    {review.name}
                  </h3>
                  <span className="rounded-full bg-blue-600 px-3 py-2 text-sm font-bold">
                    ⭐ {review.score}
                  </span>
                </div>
                <p className="mt-4 text-blue-300">
                  {review.category}
                </p>
                <div className="mt-6 font-bold">
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
            <h2 className="text-4xl font-black">
              Compare Before You Choose
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Compare popular software, AI platforms, VPNs, and technology
              services side by side.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {comparisons.map(([title, link]) => (
              <Link
                key={title}
                href={link}
                className="rounded-2xl border p-6 font-bold transition hover:border-blue-500 hover:shadow-md"
              >
                {title}
                <span className="ml-2 text-blue-600">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* GUIDES */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-4xl font-black">
            Technology Buying Guides
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              ["Best AI Tools 2026", "/guides/best-ai-tools-2026"],
              ["Best VPNs In Canada", "/guides/best-vpns-canada"],
              ["Best Business Software", "/guides/best-business-software"],
            ].map(([title, link]) => (
              <Link
                key={title}
                href={link}
                className="rounded-2xl border bg-white p-7 text-left transition hover:border-blue-500 hover:shadow-lg"
              >
                <h3 className="text-xl font-black">
                  {title}
                </h3>
                <p className="mt-4 text-sm text-slate-600">
                  Research, comparisons, features, pricing, and recommendations.
                </p>
                <div className="mt-5 font-bold text-blue-600">
                  Read Guide →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* FINAL CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-10 text-center text-white md:p-14">
          <h2 className="text-4xl font-black">
            Find Better Software Faster
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-blue-100">
            Explore reviews, rankings, comparisons, and buying guides from
            NorthSky Reviews.
          </p>
          <Link
            href="/reviews"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-600"
          >
            Browse Reviews →
          </Link>
        </div>
      </section>
      {/* DISCLOSURE */}
      <section className="border-t px-6 py-8">
        <p className="mx-auto max-w-4xl text-center text-xs leading-6 text-slate-500">
          NorthSky Reviews may earn commissions from affiliate partnerships.
          Affiliate relationships help support the website and do not determine
          our editorial rankings or opinions.
        </p>
      </section>
    </main>
  );
}