import Link from "next/link";

export const metadata = {
  title:
    "NorthSky Affiliate Deals | Best VPNs, Travel Apps & Software Reviews 2026",
  description:
    "Discover the best software, VPNs, travel technology, and online tools. Read expert reviews, comparisons, and exclusive affiliate deals from NorthSky Reviews.",
};

const affiliates = [
  {
    name: "NordVPN",
    category: "VPN & Security",
    rating: "★★★★★",
    badge: "Editor's Choice",
    description:
      "A leading VPN service focused on privacy, security, streaming access, and fast encrypted connections.",
    features: [
      "High-speed VPN servers",
      "Threat protection",
      "Streaming support",
      "Multiple device connections",
    ],
    link: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=",
  },

  {
    name: "NordPass",
    category: "Password Manager",
    rating: "★★★★★",
    badge: "Best Security Tool",
    description:
      "Securely store passwords, generate strong credentials, and protect your online accounts.",
    features: [
      "Password vault",
      "Secure sharing",
      "Multi-device sync",
      "Data protection",
    ],
    link: "https://go.nordpass.io/aff_c?offer_id=488&aff_id=",
  },

  {
    name: "Saily",
    category: "Travel Technology",
    rating: "★★★★☆",
    badge: "Best Travel eSIM",
    description:
      "A convenient eSIM solution for travelers who need affordable mobile data worldwide.",
    features: [
      "Instant eSIM activation",
      "International data plans",
      "No physical SIM required",
      "Travel-friendly pricing",
    ],
    link: "https://go.saily.site/aff_c?offer_id=101&aff_id=",
  },

  {
    name: "Featured Software Deal",
    category: "Technology",
    rating: "★★★★☆",
    badge: "Recommended",
    description:
      "Discover our latest recommended technology tools, software platforms, and online services.",
    features: [
      "Expert reviews",
      "Feature comparisons",
      "Pricing analysis",
      "Exclusive offers",
    ],
    link: "PASTE_YOUR_LINK",
  },
];

export default function AffiliatePage() {
  return (
    <main className="bg-slate-50">

      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">

          <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold">
            NorthSky Exclusive Deals
          </span>

          <h1 className="mt-8 max-w-4xl text-5xl font-extrabold md:text-6xl">
            Best Software, VPNs & Technology Deals Reviewed
          </h1>

          <p className="mt-8 max-w-3xl text-xl text-blue-100">
            We test, compare, and review technology products to help you find
            better tools, stronger privacy protection, and smarter online
            solutions.
          </p>

          <div className="mt-10 flex gap-4">

            <Link
              href="/reviews"
              className="rounded-xl bg-white px-7 py-4 font-bold text-blue-900"
            >
              Read Reviews
            </Link>

            <Link
              href="/comparisons"
              className="rounded-xl border border-white/30 px-7 py-4 font-bold"
            >
              Compare Products
            </Link>

          </div>

        </div>
      </section>


      {/* Affiliate Cards */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Featured Recommendations
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Our top-rated tools selected for privacy, travel, productivity,
            and online security.
          </p>

        </div>


        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {affiliates.map((item) => (

            <div
              key={item.name}
              className="rounded-3xl border bg-white p-8 shadow-sm hover:shadow-xl"
            >

              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                {item.badge}
              </span>


              <h3 className="mt-6 text-3xl font-bold">
                {item.name}
              </h3>


              <p className="mt-2 text-blue-600 font-semibold">
                {item.category}
              </p>


              <p className="mt-4 text-yellow-500 text-xl">
                {item.rating}
              </p>


              <p className="mt-5 text-slate-600">
                {item.description}
              </p>


              <ul className="mt-6 space-y-2 text-slate-700">

                {item.features.map((feature)=>(
                  <li key={feature}>
                    ✓ {feature}
                  </li>
                ))}

              </ul>


              <a
                href={item.link}
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"
              >
                View Deal →
              </a>


            </div>

          ))}

        </div>

      </section>


      {/* Disclosure */}
      <section className="border-t bg-white py-10">

        <div className="mx-auto max-w-4xl px-6 text-center text-sm text-slate-500">

          Disclosure: NorthSky Reviews participates in affiliate programs.
          We may earn a commission when you purchase through our links, at no
          additional cost to you. Our reviews are based on research,
          features, pricing, and overall value.

        </div>

      </section>


    </main>
  );
}