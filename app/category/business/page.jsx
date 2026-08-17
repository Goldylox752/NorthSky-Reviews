import Link from "next/link";

export const dynamic = "force-static";

export const metadata = {
  title: "Best Business Software & Tools in 2026 | NorthSky Reviews",
  description:
    "Explore business software, AI tools, productivity platforms, cybersecurity products, and technology for modern businesses.",
};

const categories = [
  {
    title: "AI for Business",
    description:
      "Discover AI assistants and automation tools that can help businesses improve productivity and workflows.",
    href: "/ai",
  },
  {
    title: "Productivity",
    description:
      "Tools for communication, organization, project management, writing, and getting more work done.",
    href: "/ai",
  },
  {
    title: "Cybersecurity",
    description:
      "Explore VPNs, password managers, privacy tools, and other security software.",
    href: "/comparisons/vpn-vs-antivirus",
  },
  {
    title: "Business Software",
    description:
      "Compare software platforms designed for teams, entrepreneurs, and growing companies.",
    href: "/comparisons/best-ai-tools",
  },
];

export default function BusinessCategoryPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="border-b bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
            Business
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Best Business Tools & Software
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Find software, AI platforms, productivity tools, and technology
            designed to help modern businesses work smarter.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-3xl font-bold">Explore Business Categories</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group rounded-2xl border border-slate-200 p-7 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold group-hover:text-blue-600">
                {category.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {category.description}
              </p>

              <span className="mt-5 inline-block text-sm font-semibold text-blue-600">
                Explore →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold">
            Technology for Modern Businesses
          </h2>

          <div className="mt-6 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="font-bold">Save Time</h3>
              <p className="mt-2 text-slate-600">
                Automation and AI can reduce repetitive work and help teams
                focus on higher-value tasks.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Improve Productivity</h3>
              <p className="mt-2 text-slate-600">
                The right software can make collaboration, organization, and
                communication easier.
              </p>
            </div>

            <div>
              <h3 className="font-bold">Protect Your Business</h3>
              <p className="mt-2 text-slate-600">
                Security and privacy tools can help businesses reduce digital
                risks.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          How NorthSky Reviews Evaluates Business Tools
        </h2>

        <p className="mt-6 leading-8 text-slate-600">
          We focus on practical factors including features, usability,
          performance, pricing, integrations, security, and overall value.
          Business software should solve a real problem rather than simply
          add another subscription to your technology stack.
        </p>

        <Link
          href="/methodology"
          className="mt-6 inline-block font-semibold text-blue-600 hover:underline"
        >
          Learn about our methodology →
        </Link>
      </section>
    </main>
  );
}
