import Link from "next/link";

export const metadata = {
  title:
    "NorthSky Affiliate Deals | Best VPNs, Travel Apps & Software Reviews 2026",
  description:
    "Discover the best software, VPNs, travel technology, and online tools. Read expert reviews, comparisons, and exclusive affiliate deals from NorthSky Reviews.",
};

// Tip: Add NEXT_PUBLIC_NORD_AFF_ID=your_id to your .env.local file to auto-fill your IDs
const AFF_ID = process.env.NEXT_PUBLIC_NORD_AFF_ID || "";

const affiliates = [
  {
    name: "NordVPN",
    category: "VPN & Security",
    rating: "★★★★★",
    score: "4.9/5",
    badge: "Editor's Choice",
    bestFor: "Streaming & Max Privacy",
    description:
      "A leading VPN service focused on privacy, security, streaming access, and fast encrypted connections.",
    features: [
      "High-speed VPN servers worldwide",
      "Built-in Threat Protection & ad blocker",
      "Seamless 4K streaming support",
      "Up to 10 simultaneous device connections",
    ],
    link: `https://go.nordvpn.net/aff_c?offer_id=15&aff_id=${AFF_ID}`,
    reviewSlug: "/reviews/nordvpn",
  },
  {
    name: "NordPass",
    category: "Password Manager",
    rating: "★★★★★",
    score: "4.8/5",
    badge: "Best Security Tool",
    bestFor: "Zero-Knowledge Vaults",
    description:
      "Securely store passwords, generate strong credentials, and protect your online accounts with XChaCha20 encryption.",
    features: [
      "Encrypted password & passkey vault",
      "Secure credential sharing",
      "Real-time multi-device sync",
      "Data breach scanner & password health",
    ],
    link: `https://go.nordpass.io/aff_c?offer_id=488&aff_id=${AFF_ID}`,
    reviewSlug: "/reviews/nordpass",
  },
  {
    name: "Saily",
    category: "Travel Technology",
    rating: "★★★★☆",
    score: "4.7/5",
    badge: "Best Travel eSIM",
    bestFor: "International Travelers",
    description:
      "A convenient eSIM solution for travelers who need affordable, instant mobile data in 150+ destinations worldwide.",
    features: [
      "Instant eSIM activation via app",
      "Flexible international & regional data plans",
      "No physical SIM card swap required",
      "Budget-friendly roaming alternative",
    ],
    link: `https://go.saily.site/aff_c?offer_id=101&aff_id=${AFF_ID}`,
    reviewSlug: "/reviews/saily",
  },
  {
    name: "Featured Software Deal",
    category: "Technology",
    rating: "★★★★☆",
    score: "4.6/5",
    badge: "Recommended",
    bestFor: "Productivity & Workflow",
    description:
      "Discover our latest recommended technology tools, software platforms, and online services vetted for value.",
    features: [
      "Hands-on expert reviews",
      "Side-by-side feature comparisons",
      "Transparent pricing analysis",
      "Exclusive partner discounts",
    ],
    link: "PASTE_YOUR_LINK",
    reviewSlug: "/reviews",
  },
];

export default function AffiliatePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top FTC Compliance Disclosure */}
      <div className="border-b border-slate-200 bg-white px-6 py-2.5 text-center text-xs text-slate-500">
        NorthSky Reviews is reader-supported. When you buy through links on our
        site, we may earn an affiliate commission at no extra cost to you.
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/20 px-4 py-1.5 text-sm font-semibold text-blue-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>
            NorthSky Exclusive Deals • Updated 2026
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
            Best Software, VPNs &amp; Technology Deals Reviewed
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-blue-100 md:text-xl">
            We test, compare, and review technology products to help you find
            better tools, stronger privacy protection, and smarter online
            solutions.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#deals"
              className="rounded-xl bg-white px-7 py-4 font-bold text-blue-950 shadow-lg transition hover:bg-blue-50"
            >
              Explore Top Deals
            </a>

            <Link
              href="/reviews"
              className="rounded-xl border border-white/30 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Read Full Reviews
            </Link>

            <Link
              href="/comparisons"
              className="rounded-xl border border-white/30 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Compare Products
            </Link>
          </div>
        </div>
      </section>

      {/* Affiliate Cards Grid */}
      <section id="deals" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Featured Recommendations
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Our top-rated tools selected for privacy, travel, productivity, and
            online security.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {affiliates.map((item) => (
            <article
              key={item.name}
              className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl"
            >
              <div>
                {/* Header Row: Badge & Rating */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
                    {item.badge}
                  </span>

                  <div className="flex items-center gap-1.5 text-sm font-semibold text-slate-700">
                    <span className="text-lg text-amber-400" aria-hidden="true">
                      {item.rating}
                    </span>
                    <span>({item.score})</span>
                  </div>
                </div>

                {/* Title & Category */}
                <h3 className="mt-6 text-2xl font-bold text-slate-900 sm:text-3xl">
                  {item.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-blue-600">
                  {item.category}
                </p>

                {/* Description */}
                <p className="mt-4 leading-relaxed text-slate-600">
                  {item.description}
                </p>

                {/* Feature Checklist */}
                <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-6 text-sm text-slate-700">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons (Pinned to bottom) */}
              <div className="mt-8 flex flex-wrap items-center gap-3 pt-4">
                <a
                  href={item.link}
                  target="_blank"
                  rel="nofollow sponsored noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-xl bg-blue-600 px-6 py-3.5 text-center font-bold text-white shadow-sm transition hover:bg-blue-700"
                >
                  Claim Deal →
                </a>

                <Link
                  href={item.reviewSlug}
                  className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-5 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Read Review
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Quick Comparison Summary Table */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-8 py-6">
            <h2 className="text-2xl font-bold text-slate-900">
              Quick Deal Comparison
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Compare our top-rated platforms side-by-side to pick the right fit.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-xs uppercase text-slate-500">
                <tr>
                  <th className="px-8 py-4 font-semibold">Product</th>
                  <th className="px-6 py-4 font-semibold">Category</th>
                  <th className="px-6 py-4 font-semibold">Best For</th>
                  <th className="px-6 py-4 font-semibold">Rating</th>
                  <th className="px-8 py-4 text-right font-semibold">Offer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {affiliates.map((item) => (
                  <tr key={item.name} className="hover:bg-slate-50/80">
                    <td className="px-8 py-4 font-bold text-slate-900">
                      {item.name}
                    </td>
                    <td className="px-6 py-4 text-slate-600">{item.category}</td>
                    <td className="px-6 py-4 text-slate-600">{item.bestFor}</td>
                    <td className="px-6 py-4 font-semibold text-slate-800">
                      {item.score}
                    </td>
                    <td className="px-8 py-4 text-right">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="nofollow sponsored noopener noreferrer"
                        className="inline-block rounded-lg bg-blue-50 px-4 py-2 font-bold text-blue-700 transition hover:bg-blue-600 hover:text-white"
                      >
                        Get Deal →
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Footer Disclosure */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-4xl px-6 text-center text-sm leading-relaxed text-slate-500">
          <p className="font-semibold text-slate-700">Affiliate Disclosure</p>
          <p className="mt-2">
            NorthSky Reviews participates in affiliate marketing programs. We
            may earn a commission when you purchase through our links, at no
            additional cost to you. Our reviews and recommendations are
            independent and based on hands-on testing, features, pricing, and
            overall value.
          </p>
        </div>
      </footer>
    </main>
  );
}
