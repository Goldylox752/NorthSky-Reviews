import Link from "next/link";

const siteUrl = "https://northsky-reviews.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "Best Travel Deals 2026 | Flights, Hotels, eSIMs & Travel Technology | NorthSky Reviews",
  description:
    "Discover the best travel deals, flight discounts, hotel offers, eSIM providers, travel apps, VPNs, insurance, and technology tools for smarter travel.",
  keywords: [
    "best travel deals 2026",
    "cheap flights",
    "hotel deals",
    "travel eSIM",
    "best travel apps",
    "travel technology",
    "airport transfers",
    "travel insurance",
    "best VPN for travel",
    "Saily eSIM review",
    "travel gadgets",
  ],
  alternates: {
    canonical: `${siteUrl}/travel`,
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
      "Best Travel Deals 2026 | Travel Apps, eSIMs & Technology",
    description:
      "Compare travel services, mobile connectivity, booking platforms, and technology solutions for smarter trips.",
    url: `${siteUrl}/travel`,
    siteName: "NorthSky Reviews",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Travel Deals 2026 | NorthSky Reviews",
    description:
      "Find flights, hotels, eSIMs, travel apps, VPNs, and technology recommendations.",
  },
};

const searchHub = [
  {
    icon: "✈️",
    title: "Flights",
    description:
      "Compare airfare options and discover better flight deals.",
    link: "/travel/flights",
  },
  {
    icon: "🏨",
    title: "Hotels",
    description:
      "Find accommodation options from trusted travel providers.",
    link: "/travel/hotels",
  },
  {
    icon: "📱",
    title: "Travel eSIMs",
    description:
      "Stay connected worldwide without expensive roaming fees.",
    link: "/travel/esim",
  },
  {
    icon: "🔒",
    title: "Travel VPNs",
    description:
      "Protect your data while using public WiFi abroad.",
    link: "/category/vpn",
  },
];

const categories = [
  {
    icon: "📱",
    title: "Travel eSIMs",
    description:
      "Compare international mobile data providers and avoid expensive roaming fees.",
    link: "/travel/esim",
  },
  {
    icon: "✈️",
    title: "Flights",
    description:
      "Find airfare deals, booking tips, and ways to save on travel.",
    link: "/travel/flights",
  },
  {
    icon: "🏨",
    title: "Hotels",
    description:
      "Discover hotel platforms, booking strategies, and accommodation deals.",
    link: "/travel/hotels",
  },
  {
    icon: "🚗",
    title: "Car Rentals",
    description:
      "Compare rental services and transportation options worldwide.",
    link: "/travel/cars",
  },
  {
    icon: "🔒",
    title: "Travel VPNs",
    description:
      "Protect your identity and stay secure on public networks.",
    link: "/category/vpn",
  },
  {
    icon: "🛡️",
    title: "Travel Insurance",
    description:
      "Compare protection plans for unexpected travel issues.",
    link: "/travel/insurance",
  },
  {
    icon: "📲",
    title: "Travel Apps",
    description:
      "Find useful apps for navigation, booking, translation, and planning.",
    link: "/travel/apps",
  },
  {
    icon: "🎒",
    title: "Travel Gear",
    description:
      "Explore technology products and accessories for travelers.",
    link: "/travel/gear",
  },
];

const guides = [
  {
    title: "Best Travel eSIMs 2026",
    description:
      "Compare global eSIM providers, pricing, coverage, and data plans for international travel.",
    link: "/travel/guides/best-esim-2026",
    category: "Connectivity",
  },
  {
    title: "Best VPNs For Travel 2026",
    description:
      "Protect your privacy on public WiFi and stay secure while traveling worldwide.",
    link: "/travel/guides/best-vpn-travel",
    category: "Security",
  },
  {
    title: "Best Travel Apps 2026",
    description:
      "Discover apps for flights, hotels, navigation, translation, payments, and trip planning.",
    link: "/travel/guides/best-travel-apps",
    category: "Technology",
  },
  {
    title: "Best Travel Gadgets 2026",
    description:
      "Explore chargers, adapters, smart luggage, and technology accessories for travelers.",
    link: "/travel/guides/best-travel-gadgets",
    category: "Gear",
  },
  {
    title: "Cheap Flight Tips 2026",
    description:
      "Learn strategies to find cheaper flights and maximize travel savings.",
    link: "/travel/guides/cheap-flights",
    category: "Flights",
  },
  {
    title: "Travel Security Guide 2026",
    description:
      "Learn how to protect your devices, accounts, and personal information abroad.",
    link: "/travel/guides/travel-security",
    category: "Safety",
  },
];

const comparisons = [
  {
    title: "Saily vs Airalo",
    description:
      "Compare travel eSIM pricing, coverage, data plans, and global availability.",
    link: "/travel/comparisons/saily-vs-airalo",
  },
  {
    title: "Best Travel VPNs Compared",
    description:
      "Compare VPN speed, privacy features, servers, pricing, and travel performance.",
    link: "/travel/comparisons/best-travel-vpn",
  },
  {
    title: "Booking.com vs Expedia",
    description:
      "Compare hotel booking platforms, rewards, prices, and travel benefits.",
    link: "/travel/comparisons/booking-vs-expedia",
  },
  {
    title: "Best eSIM Providers 2026",
    description:
      "Compare the top international eSIM providers for travelers.",
    link: "/travel/comparisons/best-esim-providers",
  },
  {
    title: "Best Travel Apps 2026",
    description:
      "Compare apps for flights, hotels, maps, translation, and planning.",
    link: "/travel/comparisons/best-travel-apps",
  },
  {
    title: "Carry-On Tech Compared",
    description:
      "Compare chargers, adapters, power banks, and travel accessories.",
    link: "/travel/comparisons/travel-tech",
  },
];

const deals = [
  {
    title: "Travel eSIM Discounts",
    icon: "📱",
    deal: "Save on international data plans",
    description:
      "Find affordable mobile connectivity deals for travelers.",
    link: "/travel/esim",
  },
  {
    title: "Flight Deals",
    icon: "✈️",
    deal: "Find cheaper airfare",
    description:
      "Discover flight booking strategies and travel savings.",
    link: "/travel/flights",
  },
  {
    title: "Hotel Promotions",
    icon: "🏨",
    deal: "Limited-time accommodation offers",
    description:
      "Compare hotel prices, rewards, and booking discounts.",
    link: "/travel/hotels",
  },
  {
    title: "VPN Travel Offers",
    icon: "🔒",
    deal: "Protect your connection while saving",
    description:
      "Find security tools and VPN promotions for travelers.",
    link: "/category/vpn",
  },
  {
    title: "Travel Gear Deals",
    icon: "🎒",
    deal: "Smart travel accessories",
    description:
      "Discover chargers, adapters, luggage, and travel technology.",
    link: "/travel/gear",
  },
  {
    title: "Airport Services",
    icon: "🚆",
    deal: "Transfers and travel extras",
    description:
      "Find airport transportation and convenience services.",
    link: "/travel",
  },
];

const faqs = [
  {
    q: "What travel services does NorthSky Reviews cover?",
    a: "We cover flights, hotels, travel eSIMs, VPNs, insurance, travel apps, booking platforms, and travel technology.",
  },
  {
    q: "Are NorthSky travel recommendations independent?",
    a: "Yes. Recommendations are based on research including features, pricing, security, usability, and overall value.",
  },
  {
    q: "Does NorthSky use affiliate links?",
    a: "Some travel recommendations include affiliate links. These partnerships help support the website while maintaining editorial independence.",
  },
  {
    q: "What is the best travel eSIM in 2026?",
    a: "The best travel eSIM depends on destination, coverage needs, pricing, and data requirements. Our comparisons help travelers choose the right provider.",
  },
  {
    q: "Do I need a VPN when traveling?",
    a: "A VPN can help protect your internet connection when using public WiFi networks such as airports, hotels, and cafes.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "NorthSky Reviews",
      url: siteUrl,
      logo: `${siteUrl}/logo.png`,
    },
    {
      "@type": "WebPage",
      name: "Best Travel Deals 2026 | NorthSky Reviews",
      url: `${siteUrl}/travel`,
      description:
        "Discover travel deals, eSIM providers, flights, hotels, VPNs, travel apps, and technology recommendations.",
    },
    {
      "@type": "ItemList",
      name: "Top Travel Technology Picks",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Saily eSIM Travel Review",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "NordVPN Travel Security Review",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best Travel Booking Services",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      })),
    },
  ],
};

function SectionHeader({ label, title, description, dark = false }) {
  return (
    <div className="text-center">
      <span
        className={`inline-flex rounded-full px-5 py-2 text-sm font-bold ${
          dark
            ? "bg-cyan-500/20 text-cyan-300"
            : "bg-blue-100 text-blue-700"
        }`}
      >
        {label}
      </span>

      <h2
        className={`mt-6 text-4xl font-black ${
          dark ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      <p
        className={`mx-auto mt-5 max-w-3xl text-lg ${
          dark ? "text-slate-300" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export default function TravelPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* HERO */}
      <section className="bg-gradient-to-br from-sky-950 via-blue-700 to-cyan-500 px-6 py-32 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <span className="inline-flex rounded-full bg-white/20 px-5 py-2 text-sm font-bold text-cyan-100">
              ✈️ Travel Deals • eSIMs • Apps • Technology
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              Discover The Best
              <span className="text-cyan-300"> Travel Deals,</span>{" "}
              Apps & Technology For Your Next Trip
            </h1>

            <p className="mt-8 max-w-4xl text-xl leading-9 text-blue-100">
              NorthSky Travel helps travelers discover better ways to
              plan trips with flight deals, hotel recommendations,
              travel eSIMs, airport services, VPNs, insurance, and
              essential travel technology.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/travel/guides"
                className="rounded-xl bg-white px-8 py-4 font-black text-blue-700 transition hover:bg-blue-50"
              >
                Explore Travel Guides →
              </Link>

              <Link
                href="/travel/esim"
                className="rounded-xl border border-white/40 px-8 py-4 font-black transition hover:bg-white/10"
              >
                Compare eSIMs →
              </Link>
            </div>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-4">
            {[
              ["🌎", "Global Travel Deals"],
              ["📱", "Travel eSIM Reviews"],
              ["🔒", "Travel Security"],
              ["2026", "Updated Travel Picks"],
            ].map(([icon, text]) => (
              <div
                key={text}
                className="rounded-3xl bg-white/10 p-7 backdrop-blur"
              >
                <div className="text-4xl font-black">{icon}</div>
                <p className="mt-3 text-blue-100">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEARCH HUB */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Travel Search Hub"
            title="Plan Your Trip In One Place"
            description="Compare travel services including flights, hotels, mobile connectivity, security, and transportation before your next journey."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {searchHub.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="rounded-3xl border bg-white p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="text-5xl">{item.icon}</div>

                <h3 className="mt-6 text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-6 font-black text-blue-600">
                  Explore →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Travel Resources"
            title="Explore Travel Categories"
            description="Discover travel tools, services, and technology designed to make every trip easier, safer, and more affordable."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((item) => (
              <Link
                key={item.title}
                href={item.link}
                className="group rounded-3xl border bg-white p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <div className="text-5xl">{item.icon}</div>

                <h3 className="mt-6 text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-6 font-black text-blue-600 group-hover:underline">
                  Explore →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            dark
            label="Travel Technology"
            title="Technology That Makes Travel Better"
            description="From staying connected overseas to protecting your digital identity, NorthSky Reviews evaluates the technology travelers depend on."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: "🌎",
                title: "Stay Connected Anywhere",
                text: "Compare eSIM providers, mobile data plans, and connectivity solutions for international travel.",
              },
              {
                icon: "🔐",
                title: "Travel Securely",
                text: "Use VPNs, password managers, and security tools to protect your personal information.",
              },
              {
                icon: "⚡",
                title: "Travel Smarter",
                text: "Discover apps and technology that simplify booking, navigation, payments, and planning.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white/10 p-8"
              >
                <div className="text-5xl">{item.icon}</div>

                <h3 className="mt-6 text-2xl font-black">
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

      {/* GUIDES */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Travel Guides & Reviews"
            title="Expert Travel Guides For Smarter Trips"
            description="Research the best travel technology, services, and tools before your next adventure."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {guides.map((guide) => (
              <Link
                key={guide.title}
                href={guide.link}
                className="rounded-3xl border bg-white p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
              >
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-bold text-slate-700">
                  {guide.category}
                </span>

                <h3 className="mt-6 text-2xl font-black">
                  {guide.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {guide.description}
                </p>

                <div className="mt-6 font-black text-blue-600">
                  Read Guide →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISONS */}
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            dark
            label="Travel Comparisons"
            title="Compare Travel Services Before You Book"
            description="Compare travel providers, technology tools, and services side-by-side to find the best option for your journey."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {comparisons.map((comparison) => (
              <Link
                key={comparison.title}
                href={comparison.link}
                className="rounded-3xl bg-white/10 p-8 transition hover:bg-white/20"
              >
                <h3 className="text-2xl font-black">
                  {comparison.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-300">
                  {comparison.description}
                </p>

                <div className="mt-6 font-black text-cyan-300">
                  Compare Now →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="NorthSky Travel Standards"
            title="Why Trust NorthSky Travel Reviews?"
            description="We evaluate travel services based on features, pricing, reliability, security, coverage, and overall value."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {[
              {
                icon: "🔍",
                title: "Independent Research",
                text: "We analyze travel platforms, technology, and services before recommending them.",
              },
              {
                icon: "⚖️",
                title: "Real Comparisons",
                text: "We compare alternatives so travelers can choose the right option.",
              },
              {
                icon: "🌎",
                title: "Global Coverage",
                text: "We review travel solutions designed for international travelers.",
              },
              {
                icon: "🔒",
                title: "Transparent Reviews",
                text: "Affiliate partnerships help support the site but do not control rankings.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border bg-white p-8"
              >
                <div className="text-5xl">{item.icon}</div>

                <h3 className="mt-5 text-xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            label="Travel FAQ"
            title="Frequently Asked Travel Questions"
            description="Answers to common questions about travel services, technology, connectivity, and security."
          />

          <div className="mt-12 space-y-5">
            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-3xl border bg-white p-7"
              >
                <h3 className="text-xl font-black">{faq.q}</h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEALS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="🔥 Updated Travel Deals"
            title="Save Money On Your Next Adventure"
            description="Discover current travel promotions, booking deals, and technology offers curated by NorthSky Reviews."
          />

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {deals.map((deal) => (
              <Link
                key={deal.title}
                href={deal.link}
                className="rounded-3xl border bg-white p-8 transition hover:-translate-y-2 hover:border-orange-400 hover:shadow-xl"
              >
                <div className="text-5xl">{deal.icon}</div>

                <h3 className="mt-6 text-2xl font-black">
                  {deal.title}
                </h3>

                <p className="mt-3 font-bold text-orange-600">
                  {deal.deal}
                </p>

                <p className="mt-4 leading-7 text-slate-600">
                  {deal.description}
                </p>

                <div className="mt-6 font-black text-blue-600">
                  View Deals →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-sky-600 to-blue-700 p-16 text-center text-white">
          <h2 className="text-5xl font-black">
            Plan Smarter. Travel Better.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-blue-100">
            Explore travel deals, technology reviews, comparisons,
            and guides designed to help you save money and travel
            with confidence.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <Link
              href="/travel/guides"
              className="rounded-xl bg-white px-8 py-4 font-black text-blue-700 transition hover:bg-blue-50"
            >
              Explore Travel Guides
            </Link>

            <Link
              href="/travel/esim"
              className="rounded-xl border border-white/40 px-8 py-4 font-black transition hover:bg-white/10"
            >
              Compare eSIM Providers
            </Link>
          </div>
        </div>
      </section>

      {/* DISCLOSURE */}
      <section className="border-t px-6 py-10">
        <div className="mx-auto max-w-4xl text-center text-sm leading-6 text-slate-500">
          NorthSky Reviews may earn commissions from affiliate
          partnerships with travel providers, technology companies,
          and service platforms. These partnerships help support our
          research and website operations.
          <br />
          <br />
          Our recommendations are based on independent evaluation of
          features, pricing, reliability, security, usability, and
          overall value.
        </div>
      </section>

      {/* STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
    </main>
  );
}
