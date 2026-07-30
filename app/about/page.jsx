import Link from "next/link";

export const metadata = {
  title: "About NorthSky Reviews | AI Software Research & Reviews",

  description:
    "Learn about NorthSky Reviews, our mission, editorial standards, review methodology, and how we evaluate AI software, SaaS platforms, and technology tools.",

  alternates: {
    canonical: "https://northsky-reviews.vercel.app/about",
  },
};


const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About NorthSky Reviews",
  "description":
    "NorthSky Reviews is an independent technology publication covering AI software, SaaS platforms, automation tools, and business technology.",
  "publisher": {
    "@type": "Organization",
    "name": "NorthSky Reviews",
    "url": "https://northsky-reviews.vercel.app",
  },
};


export default function AboutPage() {

  return (

    <main className="min-h-screen bg-white text-slate-900">


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutSchema),
        }}
      />


      {/* HERO */}

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 px-6 py-24 text-white">

        <div className="mx-auto max-w-5xl text-center">


          <span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">
            About NorthSky Reviews
          </span>


          <h1 className="mt-8 text-5xl font-black md:text-6xl">
            Helping People Choose Better Software
          </h1>


          <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-slate-300">

            NorthSky Reviews is an independent technology publication focused
            on researching AI software, SaaS platforms, automation tools, and
            emerging technology products.

            We help individuals and businesses make smarter software decisions
            through transparent reviews, comparisons, and practical buying
            guides.

          </p>


        </div>

      </section>



      {/* MISSION */}

      <section className="px-6 py-20">

        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">


          <div>

            <h2 className="text-4xl font-black">
              Our Mission
            </h2>


            <p className="mt-6 text-lg leading-8 text-slate-600">

              Thousands of AI tools and software platforms launch every year.
              Finding technology that actually delivers value can be difficult.

            </p>


            <p className="mt-6 text-lg leading-8 text-slate-600">

              NorthSky Reviews simplifies the process by researching products,
              comparing features, analyzing pricing, and highlighting the tools
              that provide real-world value.

            </p>


          </div>



          <div className="rounded-3xl bg-slate-50 p-10">


            <h3 className="text-2xl font-black">
              What We Cover
            </h3>


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





      {/* REVIEW PROCESS */}

      <section className="bg-slate-50 px-6 py-20">


        <div className="mx-auto max-w-6xl">


          <h2 className="text-center text-4xl font-black">
            How We Review Software
          </h2>


          <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-600">

            Our complete{" "}

            <Link
              href="/methodology"
              className="font-bold text-blue-600 hover:underline"
            >
              review methodology
            </Link>

            explains how we evaluate software across features,
            performance, usability, pricing, security, and value.

          </p>



          <div className="mt-14 grid gap-8 md:grid-cols-4">



            {[
              {
                icon:"🔍",
                title:"Research",
                text:"We analyze features, pricing, documentation, integrations, and market positioning."
              },
              {
                icon:"🧪",
                title:"Testing",
                text:"We evaluate usability, workflows, onboarding, performance, and practical applications."
              },
              {
                icon:"⚖️",
                title:"Comparison",
                text:"We compare similar products to identify strengths, weaknesses, and best use cases."
              },
              {
                icon:"⭐",
                title:"Ratings",
                text:"Scores reflect editorial evaluation across multiple important categories."
              }

            ].map((item)=> (

              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow"
              >

                <div className="text-4xl">
                  {item.icon}
                </div>


                <h3 className="mt-5 text-xl font-black">
                  {item.title}
                </h3>


                <p className="mt-3 text-slate-600">
                  {item.text}
                </p>


              </div>

            ))}


          </div>


        </div>


      </section>





      {/* EDITORIAL */}

      <section className="px-6 py-20">


        <div className="mx-auto max-w-4xl">


          <h2 className="text-4xl font-black">
            Editorial Standards
          </h2>



          <div className="mt-10 space-y-8 text-lg leading-8 text-slate-600">


            <p>

              Our editorial team creates accurate, balanced, and useful
              technology content. Reviews are updated as products evolve,
              pricing changes, and new features become available.

            </p>


            <p>

              Some pages may contain affiliate links. However, partnerships do
              not influence rankings, ratings, or recommendations.

              Learn more about our{" "}

              <Link
                href="/affiliate-disclosure"
                className="font-bold text-blue-600 hover:underline"
              >
                affiliate disclosure
              </Link>.

            </p>


            <p>

              Meet the team behind NorthSky Reviews:

              {" "}

              <Link
                href="/authors/northsky-team"
                className="font-bold text-blue-600 hover:underline"
              >
                NorthSky Research Team
              </Link>.

            </p>


          </div>


        </div>


      </section>





      {/* TRUST */}

      <section className="bg-slate-950 px-6 py-16 text-white">


        <div className="mx-auto grid max-w-5xl gap-8 text-center md:grid-cols-3">


          <div>

            <h3 className="text-3xl font-black">
              Independent
            </h3>

            <p className="mt-3 text-slate-300">
              Reviews based on research and editorial evaluation.
            </p>

          </div>



          <div>

            <h3 className="text-3xl font-black">
              Updated
            </h3>

            <p className="mt-3 text-slate-300">
              Content updated as technology changes.
            </p>

          </div>



          <div>

            <h3 className="text-3xl font-black">
              Transparent
            </h3>

            <p className="mt-3 text-slate-300">
              Clear methodology and honest recommendations.
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

          Browse expert reviews, comparisons, and rankings to discover the
          right technology tools for your goals.

        </p>



        <div className="mt-10 flex flex-wrap justify-center gap-5">


          <Link
            href="/ai"
            className="rounded-xl bg-white px-8 py-4 font-bold text-blue-600 hover:bg-slate-100"
          >
            Explore AI Tools
          </Link>



          <Link
            href="/comparisons"
            className="rounded-xl border border-white px-8 py-4 font-bold hover:bg-white/10"
          >
            View Comparisons
          </Link>


        </div>


      </section>


    </main>

  );

}
