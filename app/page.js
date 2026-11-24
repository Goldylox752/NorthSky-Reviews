import Link from 'next/link';

export const metadata = {
  title: 'NorthSky Auto | Automotive Tech, Reviews, Guides & Travel Gear',
  description:
    'Independent automotive tech reviews, buying guides, side-by-side comparisons, travel tech, and exclusive deals curated by the NorthSky Team.',
};

const PRIMARY_SECTIONS = [
  {
    title: 'In-Depth Reviews',
    href: '/reviews',
    badge: 'Tested',
    description:
      'Hands-on evaluations of dash cams, OBD2 scanners, jump starters, and modern vehicle electronics.',
  },
  {
    title: 'Best-Of Lists',
    href: '/best',
    badge: 'Top Picks',
    description:
      'Ranked recommendations across every budget and vehicle class—updated regularly for reliability.',
  },
  {
    title: 'Head-to-Head Comparisons',
    href: '/comparisons',
    badge: 'Vs.',
    description:
      'Side-by-side spec breakdowns and real-world road tests to help you choose between leading models.',
  },
  {
    title: 'Buyer & DIY Guides',
    href: '/guides',
    badge: 'How-To',
    description:
      'Step-by-step installation walkthroughs, maintenance checklists, and smart buying advice.',
  },
  {
    title: 'Active Deals & Discounts',
    href: '/deals',
    badge: 'Save',
    description:
      'Verified price drops, seasonal promos, and exclusive partner codes on top-rated auto gear.',
  },
  {
    title: 'Browse All Categories',
    href: '/categories',
    badge: 'Directory',
    description:
      'Explore our full index of automotive hardware, software, accessories, and connected car systems.',
  },
];

const SPECIALTY_HUBS = [
  {
    title: 'Automotive AI',
    href: '/ai',
    tag: 'Next-Gen',
    description: 'AI-powered diagnostics, smart infotainment, and driver-assistance tools.',
  },
  {
    title: 'All Auto Tools',
    href: '/all-tools',
    tag: 'Directory',
    description: 'Complete catalog of diagnostic utilities, calculators, and garage software.',
  },
  {
    title: 'Travel Tech',
    href: '/travel-tech',
    tag: 'Connected',
    description: 'Portable power stations, mobile hotspots, GPS trackers, and road-trip electronics.',
  },
  {
    title: 'Road & Travel',
    href: '/travel',
    tag: 'Adventure',
    description: 'Route planning, overlanding essentials, and long-haul comfort gear.',
  },
  {
    title: 'In-Car & Travel VPNs',
    href: '/vpn',
    tag: 'Security',
    description: 'Protect connected infotainment systems and public Wi-Fi on the road.',
  },
  {
    title: 'Category Index',
    href: '/category',
    tag: 'Browse',
    description: 'Filter reviews and articles directly by specific equipment sub-category.',
  },
];

const FOOTER_LINKS = {
  explore: [
    { name: 'Reviews', href: '/reviews' },
    { name: 'Best Picks', href: '/best' },
    { name: 'Comparisons', href: '/comparisons' },
    { name: 'Guides', href: '/guides' },
    { name: 'Deals', href: '/deals' },
    { name: 'Search', href: '/search' },
  ],
  verticals: [
    { name: 'Automotive AI', href: '/ai' },
    { name: 'All Tools', href: '/all-tools' },
    { name: 'Travel Tech', href: '/travel-tech' },
    { name: 'Travel', href: '/travel' },
    { name: 'VPNs for Travel', href: '/vpn' },
    { name: 'Categories', href: '/categories' },
    { name: 'Category Archive', href: '/category' },
  ],
  company: [
    { name: 'About NorthSky Auto', href: '/about' },
    { name: 'NorthSky Editorial Team', href: '/authors/northsky-team' },
    { name: 'Testing Methodology', href: '/methodology' },
    { name: 'Contact Us', href: '/contact' },
  ],
  legal: [
    { name: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
    { name: 'Affiliates', href: '/affiliates' },
    { name: 'Disclosure Policy', href: '/disclosure' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Privacy Summary', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ],
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-sky-500 selection:text-white">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 font-bold text-slate-950 shadow-lg shadow-sky-500/20">
              NS
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white">
                NorthSky<span className="text-sky-400">Auto</span>
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
            <Link href="/reviews" className="hover:text-sky-400 transition-colors">
              Reviews
            </Link>
            <Link href="/best" className="hover:text-sky-400 transition-colors">
              Best
            </Link>
            <Link href="/comparisons" className="hover:text-sky-400 transition-colors">
              Comparisons
            </Link>
            <Link href="/guides" className="hover:text-sky-400 transition-colors">
              Guides
            </Link>
            <Link href="/ai" className="hover:text-sky-400 transition-colors">
              Auto AI
            </Link>
            <Link href="/travel-tech" className="hover:text-sky-400 transition-colors">
              Travel Tech
            </Link>
            <Link
              href="/deals"
              className="rounded-full bg-sky-500/10 px-3 py-1 text-sky-400 ring-1 ring-inset ring-sky-500/30 hover:bg-sky-500/20 transition-colors"
            >
              Deals
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/search"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900 px-3.5 py-2 text-sm text-slate-300 hover:border-slate-700 hover:text-white transition-colors"
            >
              <svg
                className="h-4 w-4 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <span>Search</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 py-20 sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3.5 py-1 text-xs font-medium text-sky-300 mb-6">
            <span>Independent Testing &amp; Buying Intelligence</span>
            <span className="text-slate-600">•</span>
            <Link href="/methodology" className="underline hover:text-white">
              How We Test
            </Link>
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Smarter Automotive Gear,{' '}
            <span className="bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
              Connected Tech &amp; Travel
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            Data-backed reviews, head-to-head comparisons, AI tools, and road-tested travel tech curated by the{' '}
            <Link href="/authors/northsky-team" className="text-slate-200 underline decoration-sky-500/50 hover:text-sky-400">
              NorthSky Team
            </Link>
            .
          </p>

          {/* Search Bar Form routing to /search */}
          <form
            action="/search"
            method="GET"
            className="mx-auto mt-10 flex max-w-xl items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/90 p-2 shadow-2xl focus-within:border-sky-500/60"
          >
            <input
              type="text"
              name="q"
              placeholder="Search dash cams, OBD2 scanners, travel VPNs, AI tools..."
              className="w-full bg-transparent px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-sky-400 transition-colors"
            >
              Search
            </button>
          </form>

          {/* Quick Pill Links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
            <span className="font-medium text-slate-500">Popular:</span>
            <Link href="/best" className="rounded-md bg-slate-900 px-2.5 py-1 hover:bg-slate-800 hover:text-sky-400">
              Best Picks
            </Link>
            <Link href="/comparisons" className="rounded-md bg-slate-900 px-2.5 py-1 hover:bg-slate-800 hover:text-sky-400">
              Comparisons
            </Link>
            <Link href="/all-tools" className="rounded-md bg-slate-900 px-2.5 py-1 hover:bg-slate-800 hover:text-sky-400">
              All Tools
            </Link>
            <Link href="/travel-tech" className="rounded-md bg-slate-900 px-2.5 py-1 hover:bg-slate-800 hover:text-sky-400">
              Travel Tech
            </Link>
            <Link href="/vpn" className="rounded-md bg-slate-900 px-2.5 py-1 hover:bg-slate-800 hover:text-sky-400">
              Travel VPNs
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Hubs */}
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-20">
        {/* Core Editorial Sections */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Core Automotive Coverage
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Everything you need before upgrading your vehicle or garage setup.
              </p>
            </div>
            <Link
              href="/categories"
              className="text-sm font-medium text-sky-400 hover:text-sky-300"
            >
              View all categories &rarr;
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRIMARY_SECTIONS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-sky-500/50 hover:bg-slate-900 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center rounded-md bg-sky-500/10 px-2.5 py-1 text-xs font-medium text-sky-400 ring-1 ring-inset ring-sky-500/20">
                      {item.badge}
                    </span>
                    <span className="text-slate-600 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all">
                      &rarr;
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-sky-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80 text-xs font-mono text-slate-500">
                  northskyauto.com{item.href}
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Specialty Verticals & Tools */}
        <section>
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Tech, AI &amp; Travel Verticals
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Specialized tools, digital security, and connected gear for modern drivers.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SPECIALTY_HUBS.map((hub) => (
              <Link
                key={hub.href}
                href={hub.href}
                className="group rounded-xl border border-slate-800/90 bg-slate-900/30 p-5 hover:border-slate-700 hover:bg-slate-900/80 transition-all"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white group-hover:text-sky-400 transition-colors">
                    {hub.title}
                  </h3>
                  <span className="rounded bg-slate-800 px-2 py-0.5 text-[11px] font-medium text-slate-300">
                    {hub.tag}
                  </span>
                </div>
                <p className="mt-2 text-sm text-slate-400">{hub.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Editorial Standards Banner */}
        <section className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-900/60 p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-white">
                Transparent Testing &amp; Reader-First Disclosures
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                NorthSky Auto is built on verifiable data and clear editorial independence. Learn how our team evaluates products, how we fund our testing through affiliate partnerships, and how we protect your privacy.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/methodology"
                className="rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-slate-200 transition-colors"
              >
                Our Methodology
              </Link>
              <Link
                href="/affiliate-disclosure"
                className="rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-800 transition-colors"
              >
                Affiliate Disclosure
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Comprehensive Site Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 pt-16 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500 font-bold text-slate-950">
                  NS
                </div>
                <span className="text-lg font-bold text-white">
                  NorthSky<span className="text-sky-400">Auto</span>
                </span>
              </Link>
              <p className="mt-4 text-xs leading-relaxed text-slate-400">
                Independent automotive technology reviews, comparisons, AI utilities, and road-travel guides.
              </p>
              <p className="mt-4 text-xs text-slate-500">
                Reader-supported. When you buy through links on our site, we may earn an affiliate commission.{' '}
                <Link href="/disclosure" className="underline hover:text-slate-300">
                  Learn more
                </Link>
                .
              </p>
            </div>

            {/* Explore Links */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Explore
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
                {FOOTER_LINKS.explore.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-sky-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Verticals & Tools */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Tech &amp; Travel
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
                {FOOTER_LINKS.verticals.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-sky-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Editorial & Company */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Editorial
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
                {FOOTER_LINKS.company.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-sky-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Compliance */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                Policies &amp; Legal
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
                {FOOTER_LINKS.legal.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-sky-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} NorthSky Auto. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <Link href="/privacy-policy" className="hover:text-slate-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-slate-300">
                Terms
              </Link>
              <Link href="/affiliate-disclosure" className="hover:text-slate-300">
                Affiliate Disclosure
              </Link>
              <Link href="/contact" className="hover:text-slate-300">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
