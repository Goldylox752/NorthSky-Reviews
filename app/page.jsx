import Link from "next/link";

export const metadata = {
  title: "NorthSky Reviews | Best AI Tools, Software & Technology Reviews 2026",
  description:
    "Compare the best AI tools, software, VPNs, web hosting, business apps, and technology products. Read expert reviews, pricing guides, rankings, and exclusive deals from NorthSky Reviews.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.18),transparent_45%)]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300">
              ⭐ Trusted Reviews • Comparisons • Deals
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-6xl">
              Find the Best
              <span className="text-blue-400"> AI Tools</span>,
              Software &
              Technology
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
              NorthSky Reviews helps you discover the highest-rated AI tools,
              software, VPNs, business platforms, hosting providers, and
              productivity apps. Compare features, pricing, alternatives, and
              exclusive offers—all in one place.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/reviews"
                className="rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Browse Reviews
              </Link>

              <Link
                href="/comparisons"
                className="rounded-xl border border-white/20 px-7 py-4 font-semibold transition hover:bg-white/10"
              >
                Compare Software
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-300">
              <span>✓ Expert Reviews</span>
              <span>✓ Updated for 2026</span>
              <span>✓ Honest Comparisons</span>
              <span>✓ Exclusive Deals</span>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 lg:max-w-md">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm font-semibold text-green-300">
                Featured Deal
              </span>

              <h2 className="mt-5 text-3xl font-bold">
                Protect Your Privacy Online
              </h2>

              <p className="mt-4 text-slate-300">
                Discover our recommended VPN for secure browsing, encrypted
                connections, streaming, and online privacy.
              </p>

              <a
                href="PASTE_YOUR_VPN_AFFILIATE_LINK_HERE"
                target="_blank"
                rel="nofollow sponsored noopener noreferrer"
                className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                View VPN Deal →
              </a>

              <p className="mt-4 text-xs text-slate-400">
                Disclosure: We may earn a commission if you purchase through our
                affiliate links, at no extra cost to you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
{/* ================================
    Popular Categories
================================ */}

<section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="max-w-3xl">
      <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
        Explore
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Browse Reviews by Category
      </h2>

      <p className="mt-6 text-lg text-slate-600">
        Whether you're searching for the best AI software, a secure VPN,
        business tools, or cloud hosting, NorthSky Reviews helps you compare
        features, pricing, alternatives, and exclusive deals.
      </p>
    </div>

    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

      <Link
        href="/category/ai"
        className="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
      >
        <div className="text-5xl">🤖</div>
        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          AI Tools
        </h3>
        <p className="mt-3 text-slate-600">
          Chatbots, writing assistants, coding tools, image generators,
          automation platforms and productivity software.
        </p>
      </Link>

      <Link
        href="/category/vpn"
        className="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
      >
        <div className="text-5xl">🔒</div>
        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          VPN & Privacy
        </h3>
        <p className="mt-3 text-slate-600">
          Compare VPN providers, password managers and cybersecurity tools to
          stay protected online.
        </p>
      </Link>

      <Link
        href="/category/business"
        className="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
      >
        <div className="text-5xl">💼</div>
        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          Business Software
        </h3>
        <p className="mt-3 text-slate-600">
          CRM platforms, accounting software, project management and workflow
          automation solutions.
        </p>
      </Link>

      <Link
        href="/category/hosting"
        className="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
      >
        <div className="text-5xl">☁️</div>
        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          Web Hosting
        </h3>
        <p className="mt-3 text-slate-600">
          Find reliable web hosting, VPS, cloud servers and website builders
          for every budget.
        </p>
      </Link>

      <Link
        href="/category/marketing"
        className="group rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
      >
        <div className="text-5xl">📈</div>
        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          Marketing Tools
        </h3>
        <p className="mt-3 text-slate-600">
          SEO software, email marketing platforms, social media tools and
          advertising solutions.
        </p>
      </Link>

      <Link
        href="/deals"
        className="group rounded-2xl border border-blue-600 bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white transition hover:-translate-y-1 hover:shadow-2xl"
      >
        <div className="text-5xl">🔥</div>

        <h3 className="mt-6 text-2xl font-bold">
          Today's Best Deals
        </h3>

        <p className="mt-3 text-blue-100">
          Save money with exclusive discounts, coupons and affiliate offers
          from leading software companies.
        </p>

        <div className="mt-6 font-semibold">
          View Deals →
        </div>
      </Link>

    </div>
  </div>
</section>
{/* ========================================
    Editor's Picks
======================================== */}

<section className="bg-slate-50 py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">
      <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
        ⭐ Editor's Picks
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Our Top Recommendations for 2026
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
        Every product below has been selected based on features, pricing,
        reliability, ease of use, customer satisfaction, and overall value.
      </p>
    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-3">

      {/* AI */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
        <span className="text-5xl">🤖</span>

        <h3 className="mt-6 text-2xl font-bold">
          Best AI Tools
        </h3>

        <p className="mt-4 text-slate-600">
          Discover AI assistants, writing tools, coding platforms, image
          generators, automation software, and productivity apps.
        </p>

        <Link
          href="/best-ai-tools"
          className="mt-8 inline-flex font-semibold text-blue-600 hover:text-blue-700"
        >
          Explore AI Tools →
        </Link>
      </div>

      {/* VPN */}
      <div className="rounded-3xl border-2 border-blue-600 bg-white p-8 shadow-lg">

        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
          Featured
        </span>

        <div className="mt-4 text-5xl">
          🔒
        </div>

        <h3 className="mt-6 text-2xl font-bold">
          Recommended VPN
        </h3>

        <p className="mt-4 text-slate-600">
          Protect your privacy, secure public Wi-Fi, stream safely, and encrypt
          your internet connection with our recommended VPN.
        </p>

        <a
          href="PASTE_YOUR_VPN_AFFILIATE_LINK_HERE"
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Claim VPN Deal
        </a>

        <p className="mt-4 text-xs text-slate-500">
          Affiliate disclosure: We may earn a commission if you purchase
          through our links at no extra cost to you.
        </p>

      </div>

      {/* Hosting */}
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl">

        <span className="text-5xl">☁️</span>

        <h3 className="mt-6 text-2xl font-bold">
          Best Web Hosting
        </h3>

        <p className="mt-4 text-slate-600">
          Compare shared hosting, VPS, WordPress hosting, dedicated servers,
          and cloud hosting providers.
        </p>

        <Link
          href="/hosting"
          className="mt-8 inline-flex font-semibold text-blue-600 hover:text-blue-700"
        >
          Compare Hosting →
        </Link>

      </div>

    </div>

    {/* Quick Links */}

    <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

      <Link
        href="/comparisons"
        className="rounded-xl border bg-white p-6 text-center font-semibold hover:border-blue-600 hover:shadow-md"
      >
        AI Comparisons →
      </Link>

      <Link
        href="/vpn"
        className="rounded-xl border bg-white p-6 text-center font-semibold hover:border-blue-600 hover:shadow-md"
      >
        VPN Reviews →
      </Link>

      <Link
        href="/deals"
        className="rounded-xl border bg-white p-6 text-center font-semibold hover:border-blue-600 hover:shadow-md"
      >
        Software Deals →
      </Link>

      <Link
        href="/reviews"
        className="rounded-xl border bg-white p-6 text-center font-semibold hover:border-blue-600 hover:shadow-md"
      >
        Browse All Reviews →
      </Link>

    </div>

  </div>
</section>
{/* ========================================
    Featured Comparisons
======================================== */}

<section className="py-24 bg-white">
  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">
      <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
        ⚖️ Software Comparisons
      </span>

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        Compare the Best Software Side-by-Side
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
        We break down pricing, features, ease of use, integrations, AI
        capabilities, and overall value to help you choose the right software.
      </p>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

      <Link
        href="/comparisons/chatgpt-vs-claude"
        className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
      >
        <span className="text-5xl">🤖</span>

        <h3 className="mt-6 text-2xl font-bold">
          ChatGPT vs Claude
        </h3>

        <p className="mt-4 text-slate-600">
          Compare features, pricing, reasoning ability, coding performance,
          and which AI assistant is best for your workflow.
        </p>

        <div className="mt-8 font-semibold text-blue-600">
          Read Comparison →
        </div>
      </Link>

      <Link
        href="/comparisons/nordvpn-vs-surfshark"
        className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
      >
        <span className="text-5xl">🔒</span>

        <h3 className="mt-6 text-2xl font-bold">
          NordVPN vs Surfshark
        </h3>

        <p className="mt-4 text-slate-600">
          Compare speed, privacy, streaming, pricing, and security features
          to find the right VPN.
        </p>

        <div className="mt-8 font-semibold text-blue-600">
          Read Comparison →
        </div>
      </Link>

      <Link
        href="/comparisons/notion-vs-clickup"
        className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
      >
        <span className="text-5xl">📋</span>

        <h3 className="mt-6 text-2xl font-bold">
          Notion vs ClickUp
        </h3>

        <p className="mt-4 text-slate-600">
          Which productivity platform is better for teams, projects,
          collaboration, and documentation?
        </p>

        <div className="mt-8 font-semibold text-blue-600">
          Read Comparison →
        </div>
      </Link>

      <Link
        href="/comparisons/canva-vs-adobe-express"
        className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
      >
        <span className="text-5xl">🎨</span>

        <h3 className="mt-6 text-2xl font-bold">
          Canva vs Adobe Express
        </h3>

        <p className="mt-4 text-slate-600">
          Compare templates, AI tools, pricing, and creative features for
          designers and marketers.
        </p>

        <div className="mt-8 font-semibold text-blue-600">
          Read Comparison →
        </div>
      </Link>

      <Link
        href="/comparisons/hostinger-vs-siteground"
        className="group rounded-3xl border border-slate-200 bg-white p-8 transition hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
      >
        <span className="text-5xl">☁️</span>

        <h3 className="mt-6 text-2xl font-bold">
          Hostinger vs SiteGround
        </h3>

        <p className="mt-4 text-slate-600">
          Compare performance, uptime, WordPress features, customer support,
          and overall hosting value.
        </p>

        <div className="mt-8 font-semibold text-blue-600">
          Read Comparison →
        </div>
      </Link>

      <Link
        href="/comparisons"
        className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white transition hover:shadow-2xl"
      >
        <span className="text-5xl">🚀</span>

        <h3 className="mt-6 text-2xl font-bold">
          View All Comparisons
        </h3>

        <p className="mt-4 text-blue-100">
          Browse dozens of detailed software, AI, VPN, hosting, and business
          software comparisons.
        </p>

        <div className="mt-8 font-semibold">
          Explore All →
        </div>
      </Link>

    </div>

  </div>
</section>
{/* ========================================
    Today's Best Deals
======================================== */}

<section className="bg-slate-900 py-24 text-white">
  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">
      <span className="rounded-full bg-yellow-400/20 px-4 py-2 text-sm font-semibold text-yellow-300">
        🔥 Today's Best Deals
      </span>

      <h2 className="mt-6 text-4xl font-bold md:text-5xl">
        Save on Top-Rated Software & Services
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300">
        We've rounded up some of the best offers on AI tools, VPNs, web hosting,
        productivity software, and business platforms. These deals are updated
        regularly to help you get more value for your money.
      </p>
    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-4">

      {/* VPN Deal */}
      <div className="rounded-3xl bg-white p-8 text-slate-900 shadow-xl">
        <div className="text-5xl">🔒</div>

        <h3 className="mt-5 text-2xl font-bold">
          Featured VPN
        </h3>

        <p className="mt-4 text-slate-600">
          Protect your privacy, secure public Wi-Fi, and browse with confidence
          using our recommended VPN.
        </p>

        <a
          href="PASTE_YOUR_VPN_AFFILIATE_LINK_HERE"
          target="_blank"
          rel="nofollow sponsored noopener noreferrer"
          className="mt-8 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
        >
          View Deal →
        </a>
      </div>

      {/* AI */}
      <div className="rounded-3xl bg-white p-8 text-slate-900 shadow-xl">
        <div className="text-5xl">🤖</div>

        <h3 className="mt-5 text-2xl font-bold">
          AI Software
        </h3>

        <p className="mt-4 text-slate-600">
          Discover exclusive offers on AI writing, coding, automation, and
          productivity tools.
        </p>

        <Link
          href="/deals/ai"
          className="mt-8 inline-flex font-semibold text-blue-600 hover:text-blue-700"
        >
          Browse AI Deals →
        </Link>
      </div>

      {/* Hosting */}
      <div className="rounded-3xl bg-white p-8 text-slate-900 shadow-xl">
        <div className="text-5xl">☁️</div>

        <h3 className="mt-5 text-2xl font-bold">
          Web Hosting
        </h3>

        <p className="mt-4 text-slate-600">
          Compare hosting providers, WordPress plans, VPS servers, and cloud
          infrastructure offers.
        </p>

        <Link
          href="/deals/hosting"
          className="mt-8 inline-flex font-semibold text-blue-600 hover:text-blue-700"
        >
          View Hosting Deals →
        </Link>
      </div>

      {/* Business */}
      <div className="rounded-3xl bg-white p-8 text-slate-900 shadow-xl">
        <div className="text-5xl">💼</div>

        <h3 className="mt-5 text-2xl font-bold">
          Business Tools
        </h3>

        <p className="mt-4 text-slate-600">
          Save on CRM platforms, accounting software, project management tools,
          and business automation.
        </p>

        <Link
          href="/deals"
          className="mt-8 inline-flex font-semibold text-blue-600 hover:text-blue-700"
        >
          Browse Deals →
        </Link>
      </div>

    </div>

    {/* Bottom Stats */}

    <div className="mt-20 grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 text-center md:grid-cols-4">

      <div>
        <div className="text-4xl font-bold text-blue-400">500+</div>
        <p className="mt-2 text-slate-300">Products Reviewed</p>
      </div>

      <div>
        <div className="text-4xl font-bold text-blue-400">100+</div>
        <p className="mt-2 text-slate-300">Expert Comparisons</p>
      </div>

      <div>
        <div className="text-4xl font-bold text-blue-400">50+</div>
        <p className="mt-2 text-slate-300">Buying Guides</p>
      </div>

      <div>
        <div className="text-4xl font-bold text-blue-400">Daily</div>
        <p className="mt-2 text-slate-300">Deal Updates</p>
      </div>

    </div>

  </div>
</section>