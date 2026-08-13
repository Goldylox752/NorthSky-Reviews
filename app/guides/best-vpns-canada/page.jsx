import Link from "next/link";
import { notFound } from "next/navigation";

import { guides } from "@/app/data/guides";
import { tools } from "@/app/data/tools";
import { comparisons } from "@/app/data/comparisons";

const siteUrl = "https://north-sky-reviews-f1gr.vercel.app";

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const guide = guides.find(
    (item) => item.slug === slug
  );

  if (!guide) {
    return {
      title: "Guide Not Found | NorthSky Reviews",
    };
  }

  return {
    title: `${guide.title} | NorthSky Reviews`,

    description: guide.description,

    keywords: [
      ...(guide.keywords || []),
      "best VPN Canada",
      "VPN Canada 2026",
      "Canadian VPN",
      "VPN privacy",
      "VPN security",
      "VPN streaming",
    ],

    alternates: {
      canonical: `${siteUrl}/guides/${guide.slug}`,
    },

    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `${siteUrl}/guides/${guide.slug}`,
      siteName: "NorthSky Reviews",
      type: "article",
    },
  };
}

export default async function BestVPNsCanadaPage({ params }) {
  const { slug } = await params;

  const guide = guides.find(
    (item) => item.slug === slug
  );

  if (!guide) {
    notFound();
  }

  const products = (guide.products || [])
    .map((id) =>
      tools.find((tool) => tool.slug === id)
    )
    .filter(Boolean);

  const faq = [
    {
      q: "What is the best VPN in Canada in 2026?",
      a:
        "The best VPN depends on your priorities, including privacy, connection speed, streaming access, server locations, device support and price. NorthSky Reviews evaluates VPN services across these factors.",
    },
    {
      q: "Why use a VPN in Canada?",
      a:
        "A VPN can encrypt your internet connection and help protect your privacy when using public or private networks. It can also provide access to VPN server locations in different countries.",
    },
    {
      q: "Can a VPN improve online privacy?",
      a:
        "A VPN can add a layer of privacy by encrypting traffic between your device and the VPN server. It does not make you completely anonymous online, and other privacy practices still matter.",
    },
    {
      q: "Can Canadians use a VPN for streaming?",
      a:
        "VPN services may provide servers in different countries that can change the apparent location of your internet connection. Streaming services can restrict or change access based on their own policies.",
    },
    {
      q: "Are free VPNs safe?",
      a:
        "Free VPN services vary considerably. Before using one, review its privacy policy, business model, security practices, data collection policies and limitations.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",

    headline: guide.title,

    description: guide.description,

    url: `${siteUrl}/guides/${guide.slug}`,

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

    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/guides/${guide.slug}`,
    },

    about: [
      "VPN",
      "Online Privacy",
      "Cybersecurity",
      "Internet Security",
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

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* STRUCTURED DATA */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* HERO */}

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-6 py-24 text-white">

        <div className="mx-auto max-w-6xl">

          <Link
            href="/guides"
            className="text-sm font-bold text-blue-300 hover:text-white"
          >
            ← Back to Guides
          </Link>

          <div className="mt-8">

            <span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">
              🔒 VPN Buying Guide
            </span>

          </div>

          <h1 className="mt-8 max-w-5xl text-5xl font-black leading-tight md:text-7xl">
            Best VPNs in Canada 2026
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-300">
            Compare VPN services for privacy, security, streaming,
            speed, Canadian users and international internet access.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              href="/reviews/nordvpn"
              className="rounded-xl bg-blue-600 px-8 py-4 font-bold hover:bg-blue-500"
            >
              Read Our VPN Review →
            </Link>

            <Link
              href="/comparisons"
              className="rounded-xl border border-white/30 px-8 py-4 font-bold hover:bg-white/10"
            >
              Compare Software →
            </Link>

          </div>

        </div>

      </section>

      {/* INTRO */}

      <section className="mx-auto max-w-6xl px-6 py-16">

        <div className="max-w-4xl">

          <p className="font-bold uppercase tracking-wider text-blue-600">
            2026 VPN Guide
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Choosing the right VPN in Canada
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A VPN can help protect your internet traffic when you're
            connected to the internet, particularly when using networks
            you don't fully trust.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Canadian users may also consider server availability,
            international connections, streaming compatibility, speed,
            supported devices and overall subscription value.
          </p>

        </div>

      </section>

      {/* TOP PICKS */}

      <section className="bg-slate-50 px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <p className="font-bold uppercase tracking-wider text-blue-600">
            Top Pick
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Best VPNs for Canadians
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {products.length === 0 ? (

              <div className="rounded-3xl border bg-white p-8">
                More VPN recommendations coming soon.
              </div>

            ) : (

              products.map((product, index) => (

                <article
                  key={product.slug}
                  className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >

                  <div className="font-black text-blue-600">
                    #{index + 1} Pick
                  </div>

                  <h3 className="mt-5 text-3xl font-black">
                    {product.name}
                  </h3>

                  {product.rating && (
                    <div className="mt-3 font-bold text-yellow-500">
                      ★ {product.rating}/10
                    </div>
                  )}

                  <p className="mt-5 leading-7 text-slate-600">
                    {product.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-3">

                    <Link
                      href={`/reviews/${product.slug}`}
                      className="rounded-xl bg-slate-900 px-5 py-3 font-bold text-white"
                    >
                      Read Review
                    </Link>

                    {product.link && (
                      <a
                        href={product.link}
                        target="_blank"
                        rel="nofollow sponsored noopener"
                        className="rounded-xl bg-blue-600 px-5 py-3 font-bold text-white"
                      >
                        Visit Website →
                      </a>
                    )}

                  </div>

                </article>

              ))

            )}

          </div>

        </div>

      </section>

      {/* WHAT TO LOOK FOR */}

      <section className="mx-auto max-w-6xl px-6 py-20">

        <p className="font-bold uppercase tracking-wider text-blue-600">
          Buying Guide
        </p>

        <h2 className="mt-3 text-4xl font-black">
          What should Canadians look for in a VPN?
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {[
            [
              "🔐 Privacy",
              "Look for clear privacy policies, strong encryption and transparent data practices.",
            ],
            [
              "⚡ Speed",
              "VPN connections can affect performance, so connection speed is an important consideration.",
            ],
            [
              "🌎 Server Locations",
              "A broad network of locations can be useful for international connections and travel.",
            ],
            [
              "📺 Streaming",
              "If streaming is important, check whether the service supports the platforms and locations you need.",
            ],
            [
              "📱 Device Support",
              "Consider whether the VPN supports your computer, phone, tablet, browser and other devices.",
            ],
            [
              "💰 Price",
              "Compare subscription costs, renewal pricing, included features and any additional limitations.",
            ],
          ].map(([title, description]) => (

            <div
              key={title}
              className="rounded-3xl border bg-white p-7"
            >

              <h3 className="text-xl font-black">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {description}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* CANADA SECTION */}

      <section className="bg-slate-50 px-6 py-20">

        <div className="mx-auto max-w-5xl">

          <h2 className="text-4xl font-black">
            Why Canadians use VPN services
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            VPNs can be useful for Canadians who want an additional
            privacy layer when browsing the internet, using public
            Wi-Fi or connecting to services while travelling.
          </p>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            A VPN can also make it possible to connect through servers
            located in other countries. However, VPN users should
            always follow the terms and policies of the websites and
            services they access.
          </p>

        </div>

      </section>

      {/* PROS / CONSIDERATIONS */}

      <section className="mx-auto max-w-6xl px-6 py-20">

        <div className="grid gap-8 md:grid-cols-2">

          <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-8">

            <h2 className="text-3xl font-black text-emerald-800">
              Benefits of using a VPN
            </h2>

            <ul className="mt-6 space-y-4">

              {[
                "Adds encryption to your VPN connection",
                "Can provide an additional privacy layer",
                "Useful when using public Wi-Fi",
                "Can provide access to international server locations",
                "Supports privacy-focused browsing habits",
              ].map((item) => (

                <li
                  key={item}
                  className="flex gap-3"
                >
                  <span className="font-black text-emerald-600">
                    ✓
                  </span>

                  <span>{item}</span>
                </li>

              ))}

            </ul>

          </div>

          <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8">

            <h2 className="text-3xl font-black text-amber-800">
              Things to consider
            </h2>

            <ul className="mt-6 space-y-4">

              {[
                "A VPN does not make you completely anonymous",
                "VPN speed can vary by server and location",
                "Free VPN services require careful evaluation",
                "Streaming availability can change",
                "Subscription pricing and features vary",
              ].map((item) => (

                <li
                  key={item}
                  className="flex gap-3"
                >
                  <span className="font-black text-amber-600">
                    !
                  </span>

                  <span>{item}</span>
                </li>

              ))}

            </ul>

          </div>

        </div>

      </section>

      {/* COMPARISONS */}

      <section className="bg-slate-50 px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <p className="font-bold uppercase tracking-wider text-blue-600">
            Compare
          </p>

          <h2 className="mt-3 text-4xl font-black">
            Compare VPN & Security Tools
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            {comparisons.slice(0, 3).map((item) => (

              <Link
                key={item.slug}
                href={`/comparisons/${item.slug}`}
                className="rounded-3xl border bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"
              >

                <h3 className="text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600">
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

      {/* FAQ */}

      <section className="mx-auto max-w-5xl px-6 py-20">

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
              className="rounded-2xl border bg-white p-7"
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

        <div className="rounded-2xl border bg-slate-50 p-6 text-sm leading-6 text-slate-500">

          <strong className="text-slate-700">
            Affiliate Disclosure:
          </strong>{" "}
          NorthSky Reviews may earn a commission when you purchase
          products or services through qualifying links. Affiliate
          relationships do not determine our editorial ratings or
          recommendations.

        </div>

      </section>

      {/* CTA */}

      <section className="bg-blue-600 px-6 py-20 text-center text-white">

        <div className="mx-auto max-w-3xl">

          <h2 className="text-4xl font-black md:text-5xl">
            Find the Right VPN
          </h2>

          <p className="mt-5 text-lg text-blue-100">
            Compare privacy, security, speed and features before choosing
            a VPN service.
          </p>

          <Link
            href="/reviews/nordvpn"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-600"
          >
            Read Our VPN Review →
          </Link>

        </div>

      </section>

    </main>
  );
}