import Link from "next/link";

export const metadata = {
  title: "NorthSky Team | AI Software Review Experts",
  description:
    "Meet the NorthSky Reviews team. We research, test, and compare AI tools, software platforms, and technology products to help you make smarter buying decisions.",
};

export default function AuthorPage() {
  return (
    <main className="author-page">

      <section className="author-hero">

        <h1>
          NorthSky Reviews Team
        </h1>

        <p>
          The NorthSky Reviews team researches, tests, and analyzes
          AI tools, software platforms, and emerging technology to help
          businesses and individuals choose better software.
        </p>

      </section>


      <section className="author-profile">

        <div className="author-card">

          <div className="author-avatar">
            NS
          </div>

          <div>

            <h2>
              NorthSky Research Team
            </h2>

            <p>
              Technology Research & Software Analysis
            </p>

          </div>

        </div>


        <h2>
          Our Review Process
        </h2>

        <p>
          Every product reviewed by NorthSky Reviews is evaluated using
          a consistent scoring framework focused on features, performance,
          pricing, usability, security, and overall value.
        </p>


        <div className="criteria-grid">

          <div>
            <h3>Features</h3>
            <p>
              We analyze capabilities, integrations, and unique advantages.
            </p>
          </div>


          <div>
            <h3>Performance</h3>
            <p>
              We evaluate reliability, speed, and real-world usefulness.
            </p>
          </div>


          <div>
            <h3>Value</h3>
            <p>
              We compare pricing, plans, and whether tools deliver ROI.
            </p>
          </div>


          <div>
            <h3>Ease of Use</h3>
            <p>
              We consider setup, learning curve, and user experience.
            </p>
          </div>

        </div>


        <h2>
          Latest Reviews
        </h2>

        <p>
          Explore our latest AI software reviews and comparisons.
        </p>


        <Link href="/ai">
          Explore AI Tools →
        </Link>


      </section>

    </main>
  );
}
