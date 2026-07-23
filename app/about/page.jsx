import Link from "next/link";

export const metadata = {
  title: "About NorthSky Reviews",

  description:
    "Learn about NorthSky Reviews, our mission, editorial standards, review methodology, and how we evaluate AI software, SaaS products, and technology tools.",

  alternates: {
    canonical: "https://northsky-reviews.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">
            About NorthSky Reviews
          </span>

          <h1 className="mt-8 text-5xl font-black md:text-6xl">
            Helping People Choose Better Software
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl text-slate-300">
            NorthSky Reviews is an independent technology publication dedicated
            to reviewing AI software, SaaS platforms, automation tools, and
            business technology. Our goal is to help individuals and companies
            make informed software decisions through honest research,
            comparisons, and practical recommendations.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-4xl font-black">Our Mission</h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Thousands of new AI tools launch every year. Finding software that
              actually solves problems can be overwhelming.
            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We simplify the process by publishing detailed reviews,
              side-by-side comparisons, buying guides, and curated rankings
              based on real-world use cases.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-50 p-10">
            <h3 className="text-2xl font-black">What We Cover</h3>

            <ul className="mt-6 space-y-4 text-slate-700">
              <li>🤖 AI Assistants</li>
              <li>✍️ AI Writing Tools</li>
              <li>💻 AI Coding Platforms</li>
              <li>🎨 Image & Video Generators</li>
              <li>📈 Marketing Software</li>
              <li>⚙️ Automation Platforms</li>
              <li>🏢 Business Software</li>
              <li>☁️ SaaS Products</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-4xl font-black">
            How We Review Software
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            <div className="rounded-3xl bg-white p-8 shadow">
              <div className="text-4xl">🔍</div>
              <h3 className="mt-5 text-xl font-black">Research</h3>
              <p className="mt-3 text-slate-600">
                We analyze product documentation, features, pricing, and market
                positioning.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow">
              <div className="text-4xl">🧪</div>
              <h3 className="mt-5 text-xl font-black">Testing</h3>
              <p className="mt-3 text-slate-600">
                When possible, we evaluate usability, onboarding, workflows,
                integrations, and performance.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow">
              <div className="text-4xl">⚖️</div>
              <h3 className="mt-5 text-xl font-black">Comparison</h3>
              <p className="mt-3 text-slate-600">
                We compare similar products based on value, capabilities, and
                target audience.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow">
              <div className="text-4xl">⭐</div>
              <h3 className="mt-5 text-xl font-black">Ratings</h3>
              <p className="mt-3 text-slate-600">
                Ratings reflect our editorial assessment across multiple
                categories, including ease of use, features, pricing, support,
                and overall value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Standards */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-black">Editorial Standards</h2>

          <div className="mt-10 space-y-8 text-lg leading-8 text-slate-600">
            <p>
              Our editorial team strives to publish accurate, balanced, and
              useful information. We continuously update our reviews as products
              evolve and new features are released.
            </p>

            <p>
              While some pages may contain affiliate links, our recommendations
              are based on editorial judgment rather than compensation. We aim
              to provide transparent, trustworthy content that helps readers
              choose the right software for their needs.
            </p>

            <p>
              If you notice outdated information or believe a review should be
              updated, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 px-6 py-20 text-center text-white">
        <h2 className="text-4xl font-black">
          Start Exploring the Best AI Software
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-xl text-blue-100">
          Browse expert reviews, software comparisons, and curated rankings to
          find the right tools for your business or personal projects.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <Link
            href="/ai"
            className="rounded-xl bg-white px-8 py-4 font-bold text-blue-600 transition hover:bg-slate-100"
          >
            Explore AI Tools
          </Link>

          <Link
            href="/comparisons"
            className="rounded-xl border border-white px-8 py-4 font-bold transition hover:bg-white/10"
          >
            View Comparisons
          </Link>
        </div>
      </section>
    </main>
  );
}
