import Link from 'next/link';
import {
  Search,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Star,
  Cpu,
  Compass,
  Tag,
  Wrench,
  BookOpen,
  Scale,
  Award,
  Lock,
  Layers,
  CheckCircle2,
  Zap,
  ChevronRight,
  Bot,
} from 'lucide-react';

export const metadata = {
  title: 'NorthSky Reviews | AI Software Reviews, Comparisons, Guides & Tools',
  description:
    'Independent AI tool reviews, head-to-head comparisons, buyer guides, travel tech, VPNs, and verified deals curated by the NorthSky Team.',
};

const PRIMARY_SECTIONS = [
  {
    title: 'In-Depth AI Reviews',
    href: '/reviews',
    badge: 'Tested',
    icon: Star,
    accent: 'text-amber-400 bg-amber-500/10 ring-amber-500/20',
    description:
      'Hands-on benchmarks of AI assistants, coding copilots, image generators, and automation platforms.',
  },
  {
    title: 'Best-Of AI Lists',
    href: '/best',
    badge: 'Top Picks',
    icon: Award,
    accent: 'text-sky-400 bg-sky-500/10 ring-sky-500/20',
    description:
      'Ranked AI software recommendations across every workflow and budget—updated regularly.',
  },
  {
    title: 'Head-to-Head Comparisons',
    href: '/comparisons',
    badge: 'Vs.',
    icon: Scale,
    accent: 'text-indigo-400 bg-indigo-500/10 ring-indigo-500/20',
    description:
      'Side-by-side output tests, pricing tiers, and context-window breakdowns between leading models.',
  },
  {
    title: 'AI & Workflow Guides',
    href: '/guides',
    badge: 'How-To',
    icon: BookOpen,
    accent: 'text-emerald-400 bg-emerald-500/10 ring-emerald-500/20',
    description:
      'Practical prompt playbooks, automation tutorials, and step-by-step setup walkthroughs.',
  },
  {
    title: 'Active Deals & Discounts',
    href: '/deals',
    badge: 'Save',
    icon: Tag,
    accent: 'text-rose-400 bg-rose-500/10 ring-rose-500/20',
    description:
      'Verified software discounts, annual plan promos, and exclusive partner codes on top AI tools.',
  },
  {
    title: 'Browse All Categories',
    href: '/categories',
    badge: 'Directory',
    icon: Layers,
    accent: 'text-cyan-400 bg-cyan-500/10 ring-cyan-500/20',
    description:
      'Explore our full index of AI writing, video, coding, productivity, and security tools.',
  },
];

const FEATURED_ARTICLES = [
  {
    category: 'AI Reviews',
    href: '/reviews',
    score: '9.5 / 10',
    title: 'AI Coding Assistants Benchmarked: Latency, Repo Context & Bug-Fix Accuracy',
    excerpt:
      'We ran 40 multi-file refactoring tasks across leading IDE copilots to measure real-world speed and accuracy.',
    readTime: '9 min read',
  },
  {
    category: 'Best Picks',
    href: '/best',
    score: '2026 Picks',
    title: 'Best AI Productivity & Automation Tools for Creators and Solo Operators',
    excerpt:
      'Ranked by value per dollar, API reliability, data privacy controls, and zero-fluff workflow integration.',
    readTime: '11 min read',
  },
  {
    category: 'Comparisons',
    href: '/comparisons',
    score: 'Head-to-Head',
    title: 'Flagship LLMs Compared: Reasoning Depth, Multimodal Speed & API Pricing',
    excerpt:
      'Side-by-side prompt stress tests showing where each frontier model wins—and where it hallucinates.',
    readTime: '7 min read',
  },
];

const SPECIALTY_HUBS = [
  {
    title: 'AI Hub',
    href: '/ai',
    tag: 'Core',
    icon: Bot,
    description: 'Latest AI model breakdowns, agent workflows, and breakthrough software launches.',
  },
  {
    title: 'All Tools Directory',
    href: '/all-tools',
    tag: 'Index',
    icon: Wrench,
    description: 'Complete searchable catalog of every AI app, utility, and platform we track.',
  },
  {
    title: 'Travel Tech',
    href: '/travel-tech',
    tag: 'Mobile',
    icon: Zap,
    description: 'AI translation devices, portable routers, power banks, and remote-work hardware.',
  },
  {
    title: 'Travel Guides',
    href: '/travel',
    tag: 'On The Road',
    icon: Compass,
    description: 'Smart itinerary planners, eSIMs, and digital nomad gear for seamless trips.',
  },
  {
    title: 'VPN & Privacy Tools',
    href: '/vpn',
    tag: 'Security',
    icon: Lock,
    description: 'Independent speed and no-logs audits for securing your data on public networks.',
  },
  {
    title: 'Category Archive',
    href: '/category',
    tag: 'Filter',
    icon: Cpu,
    description: 'Jump directly into specific software verticals and sub-category review feeds.',
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
    { name: 'AI Hub', href: '/ai' },
    { name: 'All Tools', href: '/all-tools' },
    { name: 'Travel Tech', href: '/travel-tech' },
    { name: 'Travel', href: '/travel' },
    { name: 'VPNs', href: '/vpn' },
    { name: 'Categories', href: '/categories' },
    { name: 'Category Archive', href: '/category' },
  ],
  company: [
    { name: 'About NorthSky Reviews', href: '/about' },
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
    <div className="min-h-screen bg-[#060911] text-slate-100 selection:bg-sky-500 selection:text-slate-950">
      {/* Top Disclosure & Status Strip */}
      <div className="border-b border-slate-800/70 bg-slate-950/90 px-4 py-2 text-center text-xs text-slate-400">
        <span>Independent hands-on AI software &amp; digital tool reviews. </span>
        <Link
          href="/affiliate-disclosure"
          className="text-sky-400 underline decoration-sky-500/40 hover:text-sky-300"
        >
          Reader-supported via affiliate links
        </Link>
        <span className="mx-2 text-slate-700">|</span>
        <Link href="/deals" className="font-medium text-emerald-400 hover:text-emerald-300">
          View Live Software Deals &rarr;
        </Link>
      </div>

      {/* Top Navigation */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#060911]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-600 font-extrabold text-slate-950 shadow-lg shadow-sky-500/20 transition-transform group-hover:scale-105">
              NS
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none tracking-tight text-white">
                NorthSky<span className="text-sky-400">Reviews</span>
              </span>
              <span className="mt-0.5 text-[10px] font-medium uppercase tracking-widest text-slate-500">
                AI &amp; Tech Intelligence
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <Link href="/reviews" className="hover:text-sky-400 transition-colors">
              Reviews
            </Link>
            <Link href="/best" className="hover:text-sky-400 transition-colors">
              Best Picks
            </Link>
            <Link href="/comparisons" className="hover:text-sky-400 transition-colors">
              Comparisons
            </Link>
            <Link href="/guides" className="hover:text-sky-400 transition-colors">
              Guides
            </Link>
            <Link href="/ai" className="hover:text-sky-400 transition-colors">
              AI Hub
            </Link>
            <Link href="/all-tools" className="hover:text-sky-400 transition-colors">
              All Tools
            </Link>
            <Link href="/vpn" className="hover:text-sky-400 transition-colors">
              VPNs
            </Link>
            <Link href="/travel-tech" className="hover:text-sky-400 transition-colors">
              Travel Tech
            </Link>
          </nav>

          <div className="flex items-center gap-2.5">
            <Link
              href="/deals"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-400 ring-1 ring-inset ring-emerald-500/30 hover:bg-emerald-500/20 transition-colors"
            >
              <Tag className="h-3.5 w-3.5" />
              Deals
            </Link>
            <Link
              href="/search"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/90 px-3.5 py-2 text-sm text-slate-300 hover:border-sky-500/40 hover:text-white transition-colors"
            >
              <Search className="h-4 w-4 text-sky-400" />
              <span className="hidden sm:inline">Search</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-slate-800/80 bg-gradient-to-b from-[#0B1222] via-[#060911] to-[#060911] py-16 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-96 w-[44rem] -translate-x-1/2 rounded-full bg-sky-500/15 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/25 bg-sky-500/10 px-4 py-1.5 text-xs font-medium text-sky-300 mb-6">
            <ShieldCheck className="h-3.5 w-3.5 text-sky-400" />
            <span>Zero Paid Rankings • Real Prompt &amp; Workflow Benchmarks</span>
            <span className="text-slate-600">•</span>
            <Link href="/methodology" className="underline hover:text-white">
              Testing Methodology
            </Link>
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:leading-[1.1]">
            Unbiased AI Reviews,{' '}
            <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
              Tool Comparisons &amp; Tech Guides
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-400">
            Hands-on evaluations of AI software, productivity tools, VPNs, and connected travel tech curated by the{' '}
            <Link
              href="/authors/northsky-team"
              className="font-medium text-slate-200 underline decoration-sky-500/50 hover:text-sky-400"
            >
              NorthSky Editorial Team
            </Link>
            .
          </p>

          {/* Search Bar Form routing to /search */}
          <form
            action="/search"
            method="GET"
            className="mx-auto mt-9 flex max-w-2xl items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/95 p-2 shadow-2xl shadow-sky-950/30 focus-within:border-sky-500/60"
          >
            <Search className="ml-3 h-5 w-5 shrink-0 text-slate-500" />
            <input
              type="text"
              name="q"
              placeholder="Search AI writers, coding assistants, VPNs, travel tech..."
              className="w-full bg-transparent px-2 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none"
            />
            <button
              type="submit"
              className="shrink-0 rounded-xl bg-sky-500 px-6 py-2.5 text-sm font-semibold text-slate-950 hover:bg-sky-400 transition-colors cursor-pointer"
            >
              Search
            </button>
          </form>

          {/* Quick Pill Links */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
            <span className="font-medium text-slate-500">Jump to:</span>
            <Link
              href="/ai"
              className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5 hover:border-sky-500/40 hover:text-sky-400 transition-colors"
            >
              AI Hub
            </Link>
            <Link
              href="/best"
              className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5 hover:border-sky-500/40 hover:text-sky-400 transition-colors"
            >
              Best AI Picks
            </Link>
            <Link
              href="/comparisons"
              className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5 hover:border-sky-500/40 hover:text-sky-400 transition-colors"
            >
              Comparisons
            </Link>
            <Link
              href="/all-tools"
              className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5 hover:border-sky-500/40 hover:text-sky-400 transition-colors"
            >
              All Tools
            </Link>
            <Link
              href="/vpn"
              className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5 hover:border-sky-500/40 hover:text-sky-400 transition-colors"
            >
              VPNs
            </Link>
            <Link
              href="/travel-tech"
              className="rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-1.5 hover:border-sky-500/40 hover:text-sky-400 transition-colors"
            >
              Travel Tech
            </Link>
          </div>

          {/* Trust Metrics Bar */}
          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 sm:grid-cols-4">
            <div>
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="mt-1 text-xs text-slate-400">Independent Scoring</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-sky-400">Hands-On</div>
              <div className="mt-1 text-xs text-slate-400">Real Prompt Benchmarks</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-emerald-400">Verified</div>
              <div className="mt-1 text-xs text-slate-400">Software Deals &amp; Promos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">4-Point</div>
              <div className="mt-1 text-xs text-slate-400">Privacy &amp; Value Audit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Hubs */}
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 space-y-24">
        {/* Core Editorial Sections */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-sky-400">
                Editorial Hubs
              </span>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Core AI &amp; Software Coverage
              </h2>
              <p className="mt-1.5 text-sm text-slate-400">
                Cut through AI hype with structured benchmarks, transparent pricing breakdowns, and practical guides.
              </p>
            </div>
            <Link
              href="/categories"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 hover:text-sky-300"
            >
              <span>Explore all categories</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRIMARY_SECTIONS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-900/50 p-6 hover:border-sky-500/50 hover:bg-slate-900/90 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-2.5">
                        <div className={`flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-inset ${item.accent}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="rounded-md bg-slate-800/90 px-2.5 py-1 text-xs font-medium text-slate-300">
                          {item.badge}
                        </span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-slate-600 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-800/70 flex items-center justify-between text-xs">
                    <span className="font-mono text-slate-500">{item.href}</span>
                    <span className="font-medium text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      Open hub
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Featured Editorial Briefings */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                Latest Bench Reports
              </span>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Featured AI Reviews &amp; Comparisons
              </h2>
            </div>
            <Link
              href="/reviews"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 hover:text-sky-300"
            >
              <span>All latest reviews</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {FEATURED_ARTICLES.map((article, idx) => (
              <Link
                key={idx}
                href={article.href}
                className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950 p-6 hover:border-slate-700 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-semibold uppercase tracking-wider text-sky-400">
                      {article.category}
                    </span>
                    <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 font-semibold text-emerald-300 ring-1 ring-inset ring-emerald-500/20">
                      {article.score}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-white group-hover:text-sky-300 transition-colors">
                    {article.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                    {article.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                  <span>By NorthSky Team • {article.readTime}</span>
                  <ChevronRight className="h-4 w-4 text-slate-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Specialty Verticals & Tools */}
        <section>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                Connected Ecosystem
              </span>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                AI Verticals, Security &amp; Travel Tech
              </h2>
              <p className="mt-1.5 text-sm text-slate-400">
                Explore our complete tool index, privacy software reviews, and mobile tech guides.
              </p>
            </div>
            <Link
              href="/all-tools"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-400 hover:text-sky-300"
            >
              <span>Browse full tool directory</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SPECIALTY_HUBS.map((hub) => {
              const Icon = hub.icon;
              return (
                <Link
                  key={hub.href}
                  href={hub.href}
                  className="group rounded-2xl border border-slate-800/90 bg-slate-900/35 p-5 hover:border-sky-500/40 hover:bg-slate-900/80 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Icon className="h-4 w-4 text-sky-400" />
                      <h3 className="font-bold text-white group-hover:text-sky-400 transition-colors">
                        {hub.title}
                      </h3>
                    </div>
                    <span className="rounded-md bg-slate-800 px-2.5 py-0.5 text-[11px] font-medium text-slate-300">
                      {hub.tag}
                    </span>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                    {hub.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Editorial Standards Banner */}
        <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-[#0B1324] to-slate-900/80 p-8 sm:p-10">
          <div className="grid gap-8 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Editorial Integrity</span>
              </div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Transparent Testing &amp; Reader-First Disclosures
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                NorthSky Reviews is built on repeatable testing and strict editorial independence. See how our team evaluates AI models, data retention policies, and subscription value—and how affiliate partnerships fund our work.
              </p>
              <div className="mt-5 flex flex-wrap gap-4 text-xs text-slate-300">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  No paid review scores
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Standardized prompt stress tests
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Clear affiliate disclosures
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/methodology"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 hover:bg-slate-200 transition-colors"
              >
                Our Methodology
              </Link>
              <Link
                href="/about"
                className="rounded-xl border border-slate-700 bg-slate-800/70 px-5 py-3 text-sm font-medium text-slate-200 hover:bg-slate-800 transition-colors"
              >
                About NorthSky
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Comprehensive Site Footer */}
      <footer className="border-t border-slate-800/90 bg-[#04060C] pt-16 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-500 font-bold text-slate-950">
                  NS
                </div>
                <span className="text-lg font-bold text-white">
                  NorthSky<span className="text-sky-400">Reviews</span>
                </span>
              </Link>
              <p className="mt-4 text-xs leading-relaxed text-slate-400">
                Independent AI software reviews, head-to-head comparisons, VPN audits, and travel tech guides.
              </p>
              <p className="mt-4 text-xs leading-relaxed text-slate-500">
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
                AI, Security &amp; Travel
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
            <p>&copy; {new Date().getFullYear()} NorthSky Reviews. All rights reserved.</p>
            <div className="flex flex-wrap gap-5">
              <Link href="/privacy-policy" className="hover:text-slate-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-slate-300">
                Terms
              </Link>
              <Link href="/affiliate-disclosure" className="hover:text-slate-300">
                Affiliate Disclosure
              </Link>
              <Link href="/affiliates" className="hover:text-slate-300">
                Affiliates
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
