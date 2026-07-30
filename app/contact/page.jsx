import Link from "next/link";

export const metadata = {
  title:
    "Contact NorthSky Reviews | Partnerships, Feedback & Questions",

  description:
    "Contact NorthSky Reviews for software submissions, partnerships, corrections, feedback, and technology review inquiries.",

  keywords: [
    "contact NorthSky Reviews",
    "software review submissions",
    "AI partnerships",
    "technology feedback",
    "software testing requests",
  ],

  alternates: {
    canonical:
      "https://northsky-reviews.vercel.app/contact",
  },
};


export default function ContactPage() {


  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",

    name:
      "Contact NorthSky Reviews",

    description:
      "Contact NorthSky Reviews for partnerships, software submissions, feedback, and technology inquiries.",

    url:
      "https://northsky-reviews.vercel.app/contact",

    publisher: {
      "@type": "Organization",
      name:
        "NorthSky Reviews",

      url:
        "https://northsky-reviews.vercel.app",
    },

  };



  return (

    <main className="min-h-screen bg-white text-slate-900">


      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />



      {/* HERO */}

      <section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 px-6 py-24 text-center text-white">

        <div className="mx-auto max-w-5xl">


          <span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">

            📩 Contact NorthSky Reviews

          </span>



          <h1 className="mt-8 text-5xl font-black md:text-6xl">

            Let's Connect

          </h1>



          <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-300">

            Have a question, software suggestion, partnership opportunity,
            or correction request?

            Our team is always interested in hearing from technology
            companies, developers, and readers.

          </p>


        </div>

      </section>





      {/* CONTACT TYPES */}

      <section className="px-6 py-20">


        <div className="mx-auto max-w-6xl">


          <div className="grid gap-8 md:grid-cols-3">



            <div className="rounded-3xl border p-8 shadow-sm">

              <div className="text-4xl">
                🤝
              </div>


              <h2 className="mt-5 text-2xl font-black">
                Partnerships
              </h2>


              <p className="mt-4 leading-7 text-slate-600">

                Interested in collaborating with NorthSky Reviews?
                Contact us about partnerships, sponsorships,
                and technology collaborations.

              </p>

            </div>





            <div className="rounded-3xl border p-8 shadow-sm">


              <div className="text-4xl">
                🚀
              </div>


              <h2 className="mt-5 text-2xl font-black">
                Submit A Product
              </h2>


              <p className="mt-4 leading-7 text-slate-600">

                Have an AI tool, SaaS platform, or technology product
                you would like our team to evaluate?

              </p>


            </div>





            <div className="rounded-3xl border p-8 shadow-sm">


              <div className="text-4xl">
                📝
              </div>


              <h2 className="mt-5 text-2xl font-black">
                Corrections
              </h2>


              <p className="mt-4 leading-7 text-slate-600">

                Found outdated information or an error?
                Send us feedback so we can keep our reviews accurate.

              </p>


            </div>



          </div>


        </div>


      </section>





      {/* EMAIL */}

      <section className="bg-slate-50 px-6 py-20">


        <div className="mx-auto max-w-5xl">


          <div className="rounded-3xl bg-white p-10 shadow">


            <h2 className="text-3xl font-black">

              Get In Touch

            </h2>



            <p className="mt-5 text-lg leading-8 text-slate-600">

              For business inquiries, affiliate partnerships,
              product submissions, content updates, and review requests,
              contact the NorthSky Reviews team.

            </p>



            <a

              href="mailto:contact@northskyreviews.com"

              aria-label="Email NorthSky Reviews"

              className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"

            >

              contact@northskyreviews.com →

            </a>


          </div>


        </div>


      </section>





      {/* TRUST LINKS */}

      <section className="px-6 py-16">


        <div className="mx-auto max-w-5xl text-center">


          <h2 className="text-3xl font-black">

            Learn More About NorthSky Reviews

          </h2>



          <p className="mt-5 text-lg text-slate-600">

            Learn how we research, evaluate, and review technology products.

          </p>



          <div className="mt-8 flex flex-wrap justify-center gap-5">


            <Link

              href="/about"

              className="rounded-xl border border-slate-300 px-8 py-4 font-bold hover:bg-slate-50"

            >

              About Us

            </Link>



            <Link

              href="/methodology"

              className="rounded-xl border border-slate-300 px-8 py-4 font-bold hover:bg-slate-50"

            >

              Review Methodology

            </Link>



            <Link

              href="/affiliate-disclosure"

              className="rounded-xl border border-slate-300 px-8 py-4 font-bold hover:bg-slate-50"

            >

              Affiliate Disclosure

            </Link>


          </div>


        </div>


      </section>





      {/* CTA */}

      <section className="bg-slate-950 px-6 py-20 text-center text-white">


        <h2 className="text-4xl font-black">

          Explore NorthSky Reviews

        </h2>



        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">

          Discover AI tools, software rankings, and technology comparisons.

        </p>




        <div className="mt-8 flex flex-wrap justify-center gap-5">


          <Link

            href="/reviews"

            className="rounded-xl bg-blue-600 px-8 py-4 font-bold"

          >

            Read Reviews →

          </Link>



          <Link

            href="/comparisons"

            className="rounded-xl border border-white/30 px-8 py-4 font-bold"

          >

            Compare Tools →

          </Link>


        </div>


      </section>



    </main>

  );

}
