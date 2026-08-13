import Link from "next/link";

const siteUrl = "https://north-sky-reviews-f1gr.vercel.app";
const pageUrl = `${siteUrl}/reviews/nordvpn`;

export const metadata = {
  title:
    "NordVPN Review 2026: Features, Pricing, Security & Speed | NorthSky Reviews",

  description:
    "NordVPN review for 2026 covering security, privacy, speed, streaming, features, pricing, pros, cons and alternatives.",

  keywords: [
    "NordVPN review 2026",
    "NordVPN review",
    "NordVPN pricing",
    "NordVPN features",
    "NordVPN security",
    "best VPN Canada 2026",
    "NordVPN alternatives",
  ],

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: "NordVPN Review 2026 | NorthSky Reviews",
    description:
      "Our NordVPN review covering security, privacy, speed, streaming, pricing, features and alternatives.",
    url: pageUrl,
    siteName: "NorthSky Reviews",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "NordVPN Review 2026 | NorthSky Reviews",
    description:
      "Security, privacy, speed, streaming, pricing, pros, cons and alternatives.",
  },
};

const pros = [
  "Strong security and privacy features",
  "Large international server network",
  "Useful for travelers and public Wi-Fi protection",
  "Strong streaming and general browsing capabilities",
  "Easy-to-use apps across multiple platforms",
];

const cons = [
  "Premium plans can cost more than basic VPN alternatives",
  "Long-term promotional pricing can differ from renewal pricing",
  "Some advanced features may require higher-tier plans",
  "VPN performance can vary depending on location and server",
];

const features = [
  {
    title: "🔒 Security",
    description:
      "NordVPN provides encrypted VPN connections designed to protect internet traffic from local network interception and improve privacy on untrusted networks.",
  },
  {
    title: "🌎 Global Access",
    description:
      "A broad international server network gives users more location options for browsing while traveling or accessing services available in different regions.",
  },
  {
    title: "⚡ Speed",
    description:
      "VPN performance depends on the selected server, distance, network conditions and local internet connection, but NordVPN is designed for high-speed connections.",
  },
  {
    title: "📺 Streaming",
    description:
      "NordVPN is commonly used for streaming and accessing services while traveling, although availability can change and streaming providers may block VPN connections.",
  },
];

const faq = [
  {
    q: "Is NordVPN worth it in 2026?",
    a:
      "NordVPN can be a strong option for users who prioritize privacy, security, international connectivity and convenient VPN apps. Whether it is worth the price depends on your needs and the current plan available.",
  },
  {
    q: "Is NordVPN safe?",
    a:
      "A VPN can improve privacy and security by encrypting traffic between your device and the VPN service. Users should still maintain good security practices, use strong passwords and keep their devices updated.",
  },
  {
    q: "Does NordVPN work in Canada?",
    a:
      "NordVPN offers VPN connectivity for users in Canada and provides servers in Canada and other countries. Server availability can change, so check the current server list directly.",
  },
  {
    q: "Can NordVPN improve internet speed?",
    a:
      "A VPN normally adds some network overhead, so it does not inherently make an internet connection faster. Performance can vary depending on routing, server location and network congestion.",
  },
  {
    q: "What are NordVPN alternatives?",
    a:
      "Popular VPN alternatives include Proton VPN, Surfshark and other established VPN providers. The right choice depends on price, privacy features, server locations and your intended use.",
  },
];

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",

  name: "NordVPN Review 2026",

  headline:
    "NordVPN Review 2026: Features, Pricing, Security & Speed",

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
    name: "NordVPN",
    applicationCategory: "VPN",
    operatingSystem: "Windows, macOS, Android, iOS",
  },

  reviewRating: {
    "@type": "Rating",
    ratingValue: "9.0",
    bestRating: "10",
    worstRating: "1",
  },

  reviewBody:
    "NorthSky Reviews evaluates NordVPN for security, privacy, speed, streaming, international connectivity and overall value.",
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
      name: "NordVPN",
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

export default function NordVPNReviewPage() {
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

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-6 py-20 text-white md:py-28">
        <div className="mx-auto max-w-6xl">

          <Link
            href="/reviews"
            className="text-sm font-bold text-blue-300 hover:text-white"
          >
            ← Back to Reviews
          </Link>

          <div className="mt-8 flex flex-wrap gap-3">

            <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-bold text-blue-300">
              VPN Review
            </span>

            <span className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-bold text-emerald-300">
              2026 Review
            </span>

          </div>

          <h1 className="mt-7 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            NordVPN Review 2026
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-300">
            A detailed look at NordVPN's security, privacy, speed,
            streaming capabilities, features, pricing and alternatives.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://nordvpn.com"
              target="_blank"
              rel="nofollow sponsored noopener"
              className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-500"
            >
              Visit NordVPN →
            </a>

            <Link
              href="/guides/best-vpns-canada"
              className="rounded-xl border border-white/30 px-8 py-4 font-bold hover:bg-white/10"
            >
              Best VPNs in Canada →
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
              Is NordVPN worth it?
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              NordVPN is a well-established VPN service designed to improve
              online privacy and security while providing users with
              connections through servers in multiple countries.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              It can be particularly useful for travelers, remote workers,
              people using public Wi-Fi and users who want additional privacy
              when browsing online.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              <strong>Bottom line:</strong> NordVPN is a strong premium VPN
              option for users who want a combination of security, privacy,
              international connectivity and ease of use.
            </p>

          </div>

          <aside className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

            <p className="text-sm font-bold uppercase tracking-wide text-slate-500">
              NorthSky Rating
            </p>

            <div className="mt-4 text-6xl font-black text-blue-600">
              9.0
              <span className="text-2xl text-slate-400">
                /10
              </span>
            </div>

            <p className="mt-3 font-bold">
              Excellent
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-600">

              <div className="flex justify-between">
                <span>Security</span>
                <strong>9.5/10</strong>
              </div>

              <div className="flex justify-between">
                <span>Speed</span>
                <strong>9/10</strong>
              </div>

              <div className="flex justify-between">
                <span>Ease of Use</span>
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
            What does NordVPN offer?
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

      {/* PROS CONS */}

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

      {/* CANADA */}

      <section className="bg-slate-50 px-6 py-16">

        <div className="mx-auto max-w-5xl">

          <p className="font-bold uppercase tracking-wider text-blue-600">
            Canada
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Is NordVPN good for Canadians?
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            NordVPN can be useful for Canadian users who want additional
            privacy when using public Wi-Fi, traveling internationally or
            connecting through VPN servers in different locations.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Canadian users should also consider server locations, current
            pricing, device compatibility and the services they intend to
            access before choosing a VPN.
          </p>

          <Link
            href="/guides/best-vpns-canada"
            className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-500"
          >
            See Best VPNs in Canada →
          </Link>

        </div>

      </section>

      {/* PRICING */}

      <section className="mx-auto max-w-5xl px-6 py-16">

        <p className="font-bold uppercase tracking-wider text-blue-600">
          Pricing
        </p>

        <h2 className="mt-3 text-4xl font-black">
          NordVPN Pricing
        </h2>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          NordVPN offers different subscription options and promotional
          pricing can change. Renewal pricing may also differ from an
          introductory offer.
        </p>

        <p className="mt-5 text-lg leading-8 text-slate-600">
          Before subscribing, review the current plan, billing period,
          renewal price, included features and refund terms directly on
          the official NordVPN website.
        </p>

        <a
          href="https://nordvpn.com"
          target="_blank"
          rel="nofollow sponsored noopener"
          className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-500"
        >
          Check Current NordVPN Pricing →
        </a>

      </section>

      {/* ALTERNATIVES */}

      <section className="bg-slate-50 px-6 py-16">

        <div className="mx-auto max-w-6xl">

          <p className="font-bold uppercase tracking-wider text-blue-600">
            Alternatives
          </p>

          <h2 className="mt-3 text-4xl font-black">
            NordVPN Alternatives
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <Link
              href="/reviews/nordpass"
              className="rounded-3xl border bg-white p-7 hover:shadow-xl"
            >
              <h3 className="text-2xl font-black">
                NordPass
              </h3>

              <p className="mt-3 text-slate-600">
                Explore another privacy-focused product from the Nord
                ecosystem.
              </p>

              <div className="mt-5 font-bold text-blue-600">
                Read Review →
              </div>
            </Link>

            <Link
              href="/guides/best-vpns-canada"
              className="rounded-3xl border bg-white p-7 hover:shadow-xl"
            >
              <h3 className="text-2xl font-black">
                Best VPNs in Canada
              </h3>

              <p className="mt-3 text-slate-600">
                Compare VPN options for Canadian users.
              </p>

              <div className="mt-5 font-bold text-blue-600">
                Read Guide →
              </div>
            </Link>

            <Link
              href="/categories/vpn"
              className="rounded-3xl border bg-white p-7 hover:shadow-xl"
            >
              <h3 className="text-2xl font-black">
                VPN Reviews
              </h3>

              <p className="mt-3 text-slate-600">
                Browse more VPN reviews and privacy software.
              </p>

              <div className="mt-5 font-bold text-blue-600">
                Browse VPNs →
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

      {/* FINAL CTA */}

      <section className="bg-blue-600 px-6 py-20 text-center text-white">

        <div className="mx-auto max-w-3xl">

          <h2 className="text-4xl font-black md:text-5xl">
            Ready to Protect Your Connection?
          </h2>

          <p className="mt-5 text-lg text-blue-100">
            Check NordVPN's current plans and features on the official
            website.
          </p>

          <a
            href="https://nordvpn.com"
            target="_blank"
            rel="nofollow sponsored noopener"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-600 hover:bg-slate-100"
          >
            Visit NordVPN →
          </a>

        </div>

      </section>

    </main>
  );
}