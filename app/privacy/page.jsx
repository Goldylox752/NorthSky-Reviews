import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | NorthSky Reviews",

  description:
    "Read the NorthSky Reviews privacy policy to understand how we collect, use, and protect visitor information.",

  alternates: {
    canonical:
      "https://northsky-reviews.vercel.app/privacy",
  },
};


export default function PrivacyPage() {


  const schema = {
    "@context": "https://schema.org",
    "@type": "PrivacyPolicy",

    name:
      "NorthSky Reviews Privacy Policy",

    url:
      "https://northsky-reviews.vercel.app/privacy",

    publisher: {
      "@type": "Organization",
      name:
        "NorthSky Reviews",
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

            🔒 Privacy Policy

          </span>



          <h1 className="mt-8 text-5xl font-black md:text-6xl">

            Your Privacy Matters

          </h1>



          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">

            NorthSky Reviews respects your privacy and is committed to
            protecting information collected through our website.

          </p>


        </div>

      </section>





      {/* CONTENT */}

      <section className="px-6 py-20">


        <div className="mx-auto max-w-4xl space-y-12">



          <div>

            <h2 className="text-3xl font-black">
              Information We Collect
            </h2>


            <p className="mt-5 text-lg leading-8 text-slate-600">

              NorthSky Reviews may collect limited information when you visit
              our website, subscribe to updates, contact us, or interact with
              our content.

            </p>


            <p className="mt-5 text-lg leading-8 text-slate-600">

              This information may include contact information you voluntarily
              provide, such as your email address, as well as anonymous usage
              data collected through analytics tools.

            </p>

          </div>





          <div>

            <h2 className="text-3xl font-black">
              How We Use Information
            </h2>


            <p className="mt-5 text-lg leading-8 text-slate-600">

              Information collected may be used to:

            </p>


            <ul className="mt-5 list-disc space-y-3 pl-6 text-lg text-slate-600">

              <li>
                Improve website performance and user experience
              </li>

              <li>
                Respond to questions and requests
              </li>

              <li>
                Send updates if you choose to subscribe
              </li>

              <li>
                Analyze website traffic and content performance
              </li>

              <li>
                Improve our reviews and recommendations
              </li>

            </ul>

          </div>





          <div>

            <h2 className="text-3xl font-black">
              Analytics & Cookies
            </h2>


            <p className="mt-5 text-lg leading-8 text-slate-600">

              NorthSky Reviews may use analytics technologies and cookies to
              understand how visitors use our website, measure performance,
              and improve content.

            </p>


            <p className="mt-5 text-lg leading-8 text-slate-600">

              Cookies are small files stored on your device that help websites
              provide a better experience.

            </p>

          </div>





          <div>

            <h2 className="text-3xl font-black">
              Affiliate Links
            </h2>


            <p className="mt-5 text-lg leading-8 text-slate-600">

              Some pages on NorthSky Reviews may contain affiliate links.
              When you purchase through these links, we may earn a commission
              at no additional cost to you.

            </p>


            <p className="mt-5 text-lg leading-8 text-slate-600">

              Affiliate relationships help support our research and content
              creation. Learn more on our{" "}

              <Link
                href="/affiliate-disclosure"
                className="font-bold text-blue-600 hover:underline"
              >
                affiliate disclosure page
              </Link>.

            </p>

          </div>





          <div>

            <h2 className="text-3xl font-black">
              Third-Party Services
            </h2>


            <p className="mt-5 text-lg leading-8 text-slate-600">

              We may use third-party services such as analytics providers,
              advertising partners, affiliate platforms, and technology tools
              to operate and improve our website.

            </p>


            <p className="mt-5 text-lg leading-8 text-slate-600">

              These services may collect information according to their own
              privacy policies.

            </p>

          </div>





          <div>

            <h2 className="text-3xl font-black">
              Data Security
            </h2>


            <p className="mt-5 text-lg leading-8 text-slate-600">

              We take reasonable measures to protect information submitted to
              NorthSky Reviews. However, no online service can guarantee
              complete security.

            </p>

          </div>





          <div>

            <h2 className="text-3xl font-black">
              Contact Us
            </h2>


            <p className="mt-5 text-lg leading-8 text-slate-600">

              If you have questions about this privacy policy, contact us:

            </p>


            <a

              href="mailto:contact@northskyreviews.com"

              className="mt-4 inline-block font-bold text-blue-600 hover:underline"

            >

              contact@northskyreviews.com

            </a>

          </div>





          <div>

            <p className="text-sm text-slate-500">

              Last updated: July 2026

            </p>

          </div>



        </div>


      </section>


    </main>

  );

}
