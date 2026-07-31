import Link from "next/link";

export const metadata = {
  title:
    "Best AI, Software & Travel Deals 2026 | NorthSky Reviews",

  description:
    "Discover the best AI tools, software discounts, travel promotions, and technology deals curated by NorthSky Reviews.",

  keywords: [
    "AI software deals",
    "SaaS discounts",
    "travel deals",
    "Klook promo codes",
    "technology offers",
    "best deals 2026",
  ],

  alternates: {
    canonical:
      "https://northsky-reviews.vercel.app/deals",
  },
};

export default function DealsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "NorthSky Reviews Deals",
    description:
      "Curated AI software deals, travel promotions, and technology offers.",
    url:
      "https://northsky-reviews.vercel.app/deals",

    publisher: {
      "@type": "Organization",
      name: "NorthSky Reviews",
      url:
        "https://northsky-reviews.vercel.app",
    },
  };


  const deals = [

    {
      name: "NordVPN",
      category: "Online Security",
      description:
        "Protect your privacy online with a trusted VPN solution.",
      badge: "🔒 Security Deal",
      url: "/reviews",
    },

    {
      name: "NordPass",
      category: "Password Management",
      description:
        "Securely manage passwords and digital accounts.",
      badge: "🛡️ Security Pick",
      url: "/reviews",
    },

    {
      name: "Saily",
      category: "Travel eSIM",
      description:
        "Stay connected worldwide with affordable mobile data plans.",
      badge: "📱 Travel Tech",
      url: "/reviews",
    },

    {
      name: "Qianhai Snow World",
      category: "China Travel",
      description:
        "Buy One Get One Free ski pass deal. Use promo code QIANHAI0731.",
      badge: "❄️ B1G1 Deal",
      url: "/deals/qianhai-snow-world",
    },

    {
      name: "Guangzhou Bonski",
      category: "China Travel",
      description:
        "Get a Buy One Get One Free Advanced Trail Unlimited Ski Pass.",
      badge: "⛷️ B1G1 Deal",
      url: "/deals/guangzhou-bonski",
    },

    {
      name: "KLIA Ekspres Kuala Lumpur",
      category: "Airport Transfer",
      description:
        "Save 5% on Kuala Lumpur airport express tickets with code MY5KLIA.",
      badge: "✈️ Travel Deal",
      url: "/deals/klia-ekspres-kuala-lumpur",
    },

    {
      name: "JR Tokyo Wide Pass",
      category: "Japan Rail",
      description:
        "Save 8% on selected JR Tokyo Wide Pass packages.",
      badge: "🚄 Japan Deal",
      url: "/deals/jr-tokyo-wide-pass",
    },

    {
      name: "Osaka Amazing Pass",
      category: "Japan Attractions",
      description:
        "Save 15% on Osaka attractions with promo code OAPSUMMER3.",
      badge: "🎡 Japan Deal",
      url: "/deals/osaka-amazing-pass",
    },

    {
      name: "TOKYO SKYTREE® Ticket",
      category: "Tokyo Attractions",
      description:
        "Save 15% on Tokyo SKYTREE® admission tickets.",
      badge: "🗼 Tokyo Deal",
      url: "/deals/tokyo-skytree-ticket",
    },

    {
      name: "AI Productivity Tools",
      category: "Artificial Intelligence",
      description:
        "Discover AI assistants, automation platforms, and productivity software.",
      badge: "🤖 AI Deals",
      url: "/ai",
    },

  ];


  return (

    <main className="min-h-screen bg-white text-slate-900">


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />


      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 px-6 py-24 text-center text-white">

        <div className="mx-auto max-w-5xl">

          <span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">
            🔥 AI, Software & Travel Deals
          </span>


          <h1 className="mt-8 text-5xl font-black md:text-6xl">
            Best Deals & Discounts 2026
          </h1>


          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-300">
            Discover discounted AI tools, software subscriptions,
            travel experiences, and technology products selected by
            NorthSky Reviews.
          </p>

        </div>

      </section>



      <section className="px-6 py-20">

        <div className="mx-auto max-w-6xl">

          <h2 className="text-4xl font-black">
            Featured Deals
          </h2>


          <p className="mt-5 text-lg text-slate-600">
            Explore exclusive promotions, discount codes, and
            recommended products across software and travel.
          </p>



          <div className="mt-12 grid gap-8 md:grid-cols-2">


            {deals.map((deal)=>(

              <div
                key={deal.name}
                className="rounded-3xl border border-slate-200 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">
                  {deal.badge}
                </span>


                <h3 className="mt-6 text-2xl font-black">
                  {deal.name}
                </h3>


                <p className="mt-2 font-semibold text-blue-600">
                  {deal.category}
                </p>


                <p className="mt-5 leading-7 text-slate-600">
                  {deal.description}
                </p>


                <Link
                  href={deal.url}
                  className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
                >
                  View Deal →
                </Link>


              </div>

            ))}


          </div>

        </div>

      </section>



      <section className="bg-slate-50 px-6 py-20">

        <div className="mx-auto max-w-5xl text-center">

          <h2 className="text-4xl font-black">
            How We Select Deals
          </h2>


          <p className="mt-6 text-lg leading-8 text-slate-600">
            NorthSky Reviews evaluates deals based on value,
            reliability, pricing, user experience, and overall
            usefulness.
          </p>


          <div className="mt-10 grid gap-6 md:grid-cols-3">


            <div className="rounded-3xl bg-white p-8">
              <div className="text-4xl">🔍</div>
              <h3 className="mt-4 text-xl font-black">
                Research
              </h3>
              <p className="mt-3 text-slate-600">
                We review products, pricing, and promotions.
              </p>
            </div>


            <div className="rounded-3xl bg-white p-8">
              <div className="text-4xl">⚖️</div>
              <h3 className="mt-4 text-xl font-black">
                Compare
              </h3>
              <p className="mt-3 text-slate-600">
                We compare options to find strong value.
              </p>
            </div>


            <div className="rounded-3xl bg-white p-8">
              <div className="text-4xl">⭐</div>
              <h3 className="mt-4 text-xl font-black">
                Recommend
              </h3>
              <p className="mt-3 text-slate-600">
                We highlight deals worth exploring.
              </p>
            </div>


          </div>

        </div>

      </section>



      <section className="bg-slate-950 px-6 py-20 text-center text-white">

        <h2 className="text-4xl font-black">
          Explore NorthSky Reviews
        </h2>


        <p className="mx-auto mt-5 max-w-2xl text-slate-300">
          Browse software reviews, AI tools, comparisons,
          and travel technology recommendations.
        </p>


        <div className="mt-8 flex flex-wrap justify-center gap-5">


          <Link
            href="/reviews"
            className="rounded-xl bg-blue-600 px-8 py-4 font-bold"
          >
            View Reviews →
          </Link>


          <Link
            href="/ai"
            className="rounded-xl border border-white/30 px-8 py-4 font-bold"
          >
            Explore AI Tools →
          </Link>


        </div>

      </section>


    </main>

  );
}