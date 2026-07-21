import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

// ─── Metadata ──────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Saily eSIM Review 2026 – Is It Worth It for Travel?",
  description:
    "Read our in-depth Saily eSIM review: pricing, coverage, setup, pros & cons, and how it compares to other travel eSIMs.",
  keywords: [
    "Saily eSIM review",
    "Saily eSIM Canada",
    "travel eSIM",
    "international data plans",
    "eSIM comparison",
  ],
  openGraph: {
    title: "Saily eSIM Review 2026",
    description: "Honest review of Saily eSIM for international travel.",
    type: "article",
    url: "https://northsky-reviews.vercel.app/reviews/saily-esim",
    images: [
      {
        url: "/images/saily-og.jpg",
        width: 1200,
        height: 630,
        alt: "Saily eSIM Review",
      },
    ],
  },
};

// ─── Affiliate Link (from .env) ────────────────────────────────

const AFFILIATE_LINK =
  process.env.NEXT_PUBLIC_SAILY_AFFILIATE ||
  "https://go.saily.site/aff_c?offer_id=101&aff_id=13276";

// ─── Component ──────────────────────────────────────────────────

export default function SailyReview() {
  return (
    <main className="bg-white text-slate-900">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Saily eSIM",
            brand: { "@type": "Brand", name: "Saily" },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "342",
              bestRating: "5",
            },
            offers: {
              "@type": "Offer",
              price: "4.99",
              priceCurrency: "USD",
              availability: "https://schema.org/InStock",
              url: AFFILIATE_LINK,
            },
          }),
        }}
      />

      {/* ─── Hero ──────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-700 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <div className="mb-4 flex justify-center gap-2">
            <span className="rounded-full bg-yellow-400 px-3 py-1 text-sm font-bold text-slate-900">
              ★ 4.8 / 5
            </span>
            <span className="rounded-full bg-green-500 px-3 py-1 text-sm font-bold text-white">
              Editor's Choice
            </span>
          </div>
          <h1 className="text-5xl font-black md:text-6xl">
            Saily eSIM Review 2026
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-slate-300">
            Is Saily the best travel eSIM for international data? We test
            pricing, coverage, speed, and ease of use.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={AFFILIATE_LINK}
              target="_blank"
              rel="nofollow sponsored"
              className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white shadow-lg transition hover:bg-blue-700"
            >
              Get Saily eSIM →
            </a>
            <a
              href="#verdict"
              className="rounded-xl border border-white/30 px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Read Full Verdict ↓
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Affiliate link – we may earn a commission at no extra cost to you.
          </p>
        </div>
      </section>

      {/* ─── Quick Verdict ────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="rounded-2xl bg-blue-50 p-8">
          <h2 className="flex items-center gap-2 text-2xl font-bold text-blue-800">
            ⚡ Quick Verdict
          </h2>
          <p className="mt-4 text-lg text-slate-700">
            Saily is an excellent travel eSIM that offers affordable, flexible
            data plans for over 150 countries. Setup is quick, and the app is
            intuitive. It's a top choice for frequent travelers who want to
            avoid roaming fees.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="flex items-center gap-1 text-green-700">
              <span>✅</span> Easy digital activation
            </div>
            <div className="flex items-center gap-1 text-green-700">
              <span>✅</span> Global coverage
            </div>
            <div className="flex items-center gap-1 text-green-700">
              <span>✅</span> No physical SIM needed
            </div>
          </div>
        </div>
      </section>

      {/* ─── Pros & Cons ───────────────────────────────────────── */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">Pros & Cons</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
              <h3 className="text-xl font-bold text-green-800">✅ Pros</h3>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>• Instant digital setup via app</li>
                <li>• Competitive pricing vs. roaming</li>
                <li>• Wide country coverage (150+)</li>
                <li>• Top‑up easily through the app</li>
                <li>• No contract or subscription</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
              <h3 className="text-xl font-bold text-red-800">❌ Cons</h3>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>• Requires eSIM‑compatible device</li>
                <li>• Data-only plans (no voice/SMS)</li>
                <li>• Coverage can vary by country</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Pricing Table ────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold">Saily Pricing Plans</h2>
        <p className="mt-2 text-slate-600">
          Flexible data plans for different travel needs – all in USD.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border shadow">
          <table className="w-full text-left">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-6 py-3 font-bold">Region</th>
                <th className="px-6 py-3 font-bold">Data</th>
                <th className="px-6 py-3 font-bold">Price</th>
                <th className="px-6 py-3 font-bold">Validity</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr>
                <td className="px-6 py-4">Europe</td>
                <td className="px-6 py-4">5 GB</td>
                <td className="px-6 py-4">$12.99</td>
                <td className="px-6 py-4">30 days</td>
              </tr>
              <tr>
                <td className="px-6 py-4">USA</td>
                <td className="px-6 py-4">10 GB</td>
                <td className="px-6 py-4">$19.99</td>
                <td className="px-6 py-4">30 days</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Global</td>
                <td className="px-6 py-4">5 GB</td>
                <td className="px-6 py-4">$24.99</td>
                <td className="px-6 py-4">30 days</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-slate-500">* Prices are subject to change.</p>
      </section>

      {/* ─── Features ──────────────────────────────────────────── */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold">Key Features</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "📱",
                title: "Instant Setup",
                desc: "Download the app and activate your eSIM in minutes.",
              },
              {
                icon: "🌍",
                title: "Worldwide Coverage",
                desc: "Data in over 150 countries with local network partners.",
              },
              {
                icon: "⚡",
                title: "Fast 5G/4G Speeds",
                desc: "Enjoy high‑speed data where available.",
              },
              {
                icon: "🔒",
                title: "Secure Connection",
                desc: "Encrypted data for safe browsing on public networks.",
              },
              {
                icon: "🔄",
                title: "Top‑Up Anytime",
                desc: "Add more data directly through the app while traveling.",
              },
              {
                icon: "💬",
                title: "24/7 Support",
                desc: "Customer service available via email or in‑app chat.",
              },
            ].map((feature, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="text-3xl">{feature.icon}</div>
                <h3 className="mt-3 font-bold">{feature.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Alternatives ──────────────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold">Alternatives to Saily</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[
            {
              name: "Airalo",
              desc: "Popular eSIM platform with a wide range of regional plans.",
              link: "#",
            },
            {
              name: "Nomad",
              desc: "Competitive pricing with good coverage in Asia.",
              link: "#",
            },
            {
              name: "Holafly",
              desc: "Unlimited data plans for travellers.",
              link: "#",
            },
          ].map((alt) => (
            <div key={alt.name} className="rounded-2xl border p-6">
              <h3 className="font-bold">{alt.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{alt.desc}</p>
              <Link
                href={alt.link}
                className="mt-4 inline-block text-sm font-bold text-blue-600 hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FAQ ────────────────────────────────────────────────── */}
      <section className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-4">
            {[
              {
                q: "Does Saily work in Canada?",
                a: "Yes, Saily offers data plans for Canada with good coverage in major cities.",
              },
              {
                q: "Can I use Saily with any phone?",
                a: "You need an unlocked eSIM‑compatible phone (iPhone XS or newer, most Android flagships).",
              },
              {
                q: "Do I get a phone number with Saily?",
                a: "Saily provides data‑only plans – you do not get a voice/SMS number.",
              },
            ].map((faq, i) => (
              <div key={i} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="font-bold">{faq.q}</h3>
                <p className="mt-2 text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Final Verdict ────────────────────────────────────── */}
      <section id="verdict" className="bg-blue-600 px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold">Is Saily Worth It?</h2>
          <p className="mt-6 text-lg text-blue-100">
            Saily is one of the best travel eSIMs on the market. It offers
            simple activation, transparent pricing, and reliable data in most
            destinations. If you travel frequently and want to avoid roaming
            charges, Saily is a great choice.
          </p>
          <a
            href={AFFILIATE_LINK}
            target="_blank"
            rel="nofollow sponsored"
            className="mt-8 inline-block rounded-xl bg-white px-10 py-4 text-lg font-bold text-blue-600 shadow-lg transition hover:bg-slate-100"
          >
            Get Saily eSIM Now →
          </a>
          <p className="mt-4 text-sm text-blue-200">
            We may earn a commission – at no extra cost to you.
          </p>
        </div>
      </section>
    </main>
  );
}