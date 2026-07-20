import Link from "next/link";

export default function HomePage() {

  const topPicks = [

    {
      title: "🔒 Editor's Choice — NordVPN",

      description:
        "The best overall VPN for privacy, streaming, gaming, and online security.",

      button:
        "Get NordVPN →",

      href:
        "https://go.nordvpn.net/aff_c?offer_id=725&aff_id=143955",

      badge:
        "Editor's Choice",

    },


    {
      title:
        "✈️ Best Travel eSIM — Saily",

      description:
        "Affordable mobile data in 200+ destinations with instant activation and no roaming surprises.",

      button:
        "Get Saily →",

      href:
        "https://go.saily.site/aff_c?offer_id=101&aff_id=13276",

      badge:
        "Best Value",

    },


    {
      title:
        "🤖 Best AI Tools",

      description:
        "Discover powerful AI software for writing, coding, productivity, and business growth.",

      button:
        "Explore AI →",

      href:
        "/ai",

      badge:
        "Trending",

    },

  ];



  const reviews = [

    {
      title:
        "NordVPN Review",

      description:
        "An in-depth review covering speed, security, streaming, privacy, pricing, and overall value.",

      href:
        "/reviews/nordvpn",

      rating:
        "★★★★★",

    },


    {
      title:
        "Saily eSIM Review",

      description:
        "Everything you need to know before using Saily for your next international trip.",

      href:
        "/reviews/saily",

      rating:
        "★★★★★",

    },


    {
      title:
        "Best VPNs For Canada",

      description:
        "Compare the top VPN providers for Canadians based on speed, privacy, streaming, and price.",

      href:
        "/comparisons/best-vpns-canada",

      rating:
        "★★★★★",

    },

  ];



  const trust = [

    {
      title:
        "✔ Research Based",

      description:
        "Recommendations are based on detailed research, product features, pricing, and overall value.",

    },


    {
      title:
        "✔ Honest Reviews",

      description:
        "We explain the advantages and limitations so you can make informed buying decisions.",

    },


    {
      title:
        "✔ Updated Regularly",

      description:
        "Our guides are updated to reflect new features, pricing changes, and technology trends.",

    },

  ];



  return (

    <main className="min-h-screen bg-slate-950 text-white">


      {/* SEO Schema */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({

            "@context":
              "https://schema.org",

            "@type":
              "Organization",

            "name":
              "NorthSky Reviews",

            "url":
              "https://northsky-reviews.vercel.app",

            "description":
              "Independent technology reviews, comparisons, and buying guides covering VPNs, AI tools, travel technology, software, and cybersecurity.",

          }),
        }}
      />



      {/* Header */}

      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">


        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">


          <Link
            href="/"
            className="text-3xl font-black tracking-tight"
          >

            NorthSky

            <span className="text-sky-400">
              {" "}Reviews
            </span>

          </Link>



          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">


            <Link
              href="/"
              className="transition hover:text-sky-400"
            >
              Home
            </Link>


            <Link
              href="/reviews"
              className="transition hover:text-sky-400"
            >
              Reviews
            </Link>


            <Link
              href="/comparisons"
              className="transition hover:text-sky-400"
            >
              Comparisons
            </Link>


            <Link
              href="/ai"
              className="transition hover:text-sky-400"
            >
              AI Tools
            </Link>


            <Link
              href="/travel"
              className="transition hover:text-sky-400"
            >
              Travel
            </Link>


            <Link
              href="/deals"
              className="transition hover:text-sky-400"
            >
              Deals
            </Link>


          </nav>


        </div>


      </header>





      {/* Hero Section */}

      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-6 py-28 text-center">


        <div className="mx-auto max-w-5xl">


          <span className="inline-block rounded-full border border-sky-400/40 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-300">

            Independent Reviews • Expert Recommendations • Trusted Buying Guides

          </span>



          <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">

            Find The Best Tech

            <br />

            Before You

            <span className="text-sky-400">
              {" "}Buy
            </span>

          </h1>



          <p className="mx-auto mt-8 max-w-3xl text-xl leading-8 text-slate-300">

            NorthSky Reviews helps you discover the best VPNs,
            AI tools, travel technology, software, hosting,
            and cybersecurity products through honest reviews,
            comparisons, and buying guides.

          </p>



          <div className="mt-12 flex flex-wrap justify-center gap-4">


            <Link
              href="/reviews"
              className="rounded-xl bg-sky-400 px-8 py-4 font-bold text-slate-900 transition hover:bg-sky-300"
            >

              Browse Reviews

            </Link>



            <a
              href="https://go.nordvpn.net/aff_c?offer_id=725&aff_id=143955"
              target="_blank"
              rel="nofollow sponsored noopener"
              aria-label="Get NordVPN deal"
              className="rounded-xl border border-sky-400 px-8 py-4 font-bold text-sky-400 transition hover:bg-sky-400 hover:text-slate-900"
            >

              🔒 Get NordVPN

            </a>


          </div>



          <p className="mt-10 text-sm text-slate-400">

            ⭐ Trusted recommendations • Updated regularly • Affiliate supported

          </p>


        </div>


      </section>





      {/* Affiliate Disclosure */}

      <section className="border-y border-slate-800 bg-slate-900 px-6 py-6">


        <div className="mx-auto max-w-5xl text-center text-sm text-slate-400">


          <strong className="text-white">
            Affiliate Disclosure:
          </strong>

          {" "}
          Some links on NorthSky Reviews are affiliate links.
          We may earn a commission if you purchase through
          our links at no additional cost to you. Our reviews
          are based on independent research and evaluation.


        </div>


      </section>





      {/* Search */}

      <section className="mx-auto max-w-5xl px-6 py-12">


        <input

          type="search"

          placeholder="Search VPNs, AI tools, hosting, software, and travel technology..."

          className="w-full rounded-xl border border-slate-700 bg-slate-900 p-5 text-lg text-white outline-none transition focus:border-sky-400"

        />


      </section>
            {/* Top Picks */}
      <section className="px-6 py-24 bg-white text-slate-900">

        <div className="mx-auto max-w-7xl">

          <div className="text-center mb-14">

            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Editor Recommendations
            </span>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              NorthSky Top Picks
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              Our highest-rated technology recommendations based on
              performance, security, features, and overall value.
            </p>

          </div>



          <div className="grid gap-8 md:grid-cols-3">


            {topPicks.map((item)=>(

              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >


                <div className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-xs font-bold text-blue-600">
                  {item.badge}
                </div>



                <h3 className="mt-6 text-2xl font-black">
                  {item.title}
                </h3>



                <div className="mt-4 text-yellow-500 text-lg">
                  ★★★★★
                </div>



                <p className="mt-5 leading-7 text-slate-600">
                  {item.description}
                </p>



                <a
                  href={item.href}
                  target={
                    item.href.startsWith("http")
                    ? "_blank"
                    : "_self"
                  }
                  rel={
                    item.href.startsWith("http")
                    ? "noopener noreferrer sponsored"
                    : undefined
                  }
                  className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition hover:bg-blue-700"
                >

                  {item.button}

                </a>


              </div>


            ))}


          </div>


        </div>

      </section>






      {/* Categories */}

      <section className="bg-slate-50 px-6 py-24">


        <div className="mx-auto max-w-7xl">


          <div className="text-center mb-14">


            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Explore
            </span>


            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Browse Technology Categories
            </h2>


            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              Explore detailed reviews, comparisons, and buying guides
              across today's most popular technology categories.
            </p>


          </div>





          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">



            {[
              {
                title:"🔒 VPN Reviews",
                description:"Privacy, security, streaming and online protection.",
                href:"/reviews"
              },

              {
                title:"🤖 AI Tools",
                description:"AI software for business, coding and productivity.",
                href:"/ai"
              },

              {
                title:"✈️ Travel Tech",
                description:"eSIMs, gadgets and travel connectivity.",
                href:"/travel"
              },

              {
                title:"💻 Hosting",
                description:"Web hosting and online business tools.",
                href:"/hosting"
              },

              {
                title:"🛡 Cybersecurity",
                description:"Security software and privacy solutions.",
                href:"/security"
              },

              {
                title:"⚡ Productivity",
                description:"Apps and tools to work smarter.",
                href:"/productivity"
              },

              {
                title:"📊 Comparisons",
                description:"Side-by-side technology comparisons.",
                href:"/comparisons"
              },

              {
                title:"🔥 Best Deals",
                description:"Top offers and recommended products.",
                href:"/deals"
              }

            ].map((category)=>(


              <a
                key={category.title}
                href={category.href}
                className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >


                <h3 className="text-xl font-black">
                  {category.title}
                </h3>


                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {category.description}
                </p>


                <span className="mt-5 block font-bold text-blue-600">
                  Explore →
                </span>


              </a>


            ))}



          </div>



        </div>


      </section>
            {/* Featured Reviews */}

      <section className="bg-white px-6 py-24 text-slate-900">


        <div className="mx-auto max-w-7xl">


          <div className="mb-14 text-center">


            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Latest Content
            </span>


            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Featured Reviews
            </h2>


            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              Detailed reviews, comparisons, and expert recommendations
              to help you make smarter technology decisions.
            </p>


          </div>




          <div className="grid gap-8 md:grid-cols-3">


            {reviews.map((review)=>(


              <div
                key={review.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >


                <div className="text-xl text-yellow-500">
                  {review.rating}
                </div>



                <h3 className="mt-5 text-2xl font-black">
                  {review.title}
                </h3>



                <p className="mt-5 leading-7 text-slate-600">
                  {review.description}
                </p>



                <a
                  href={review.href}
                  target={
                    review.href.startsWith("http")
                    ? "_blank"
                    : "_self"
                  }
                  rel={
                    review.href.startsWith("http")
                    ? "noopener noreferrer sponsored"
                    : undefined
                  }
                  className="mt-8 inline-block font-bold text-blue-600 hover:text-blue-700"
                >

                  Read Review →

                </a>


              </div>


            ))}


          </div>


        </div>


      </section>






      {/* Trust Section */}


      <section className="bg-slate-50 px-6 py-24">


        <div className="mx-auto max-w-7xl">


          <div className="mb-14 text-center">


            <h2 className="text-4xl font-black md:text-5xl">
              Why Trust NorthSky Reviews?
            </h2>


            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
              We focus on transparent research, honest comparisons,
              and practical recommendations.
            </p>


          </div>





          <div className="grid gap-8 md:grid-cols-3">


            {trust.map((item)=>(


              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8"
              >


                <h3 className="text-2xl font-black">
                  {item.title}
                </h3>


                <p className="mt-5 leading-7 text-slate-600">
                  {item.description}
                </p>


              </div>


            ))}


          </div>



        </div>


      </section>







      {/* Featured Deals */}


      <section className="bg-white px-6 py-24 text-slate-900">


        <div className="mx-auto max-w-7xl">


          <div className="mb-14 text-center">


            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Recommended Offers
            </span>


            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Featured Technology Deals
            </h2>


            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              Save money on products and services we recommend.
            </p>


          </div>





          <div className="grid gap-8 md:grid-cols-2">





            {/* NordVPN Deal */}


            <div
              className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm"
            >


              <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-bold text-green-700">
                Privacy Pick
              </span>


              <h3 className="mt-6 text-3xl font-black">
                🔒 NordVPN
              </h3>


              <p className="mt-5 leading-7 text-slate-600">

                Secure your connection, protect your privacy,
                and browse safely with one of the world's
                leading VPN services.

              </p>



              <a
                href="https://go.nordvpn.net/aff_c?offer_id=725&aff_id=143955"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-4 font-bold text-white hover:bg-blue-700"
              >

                Get NordVPN →

              </a>


            </div>






            {/* Saily Deal */}


            <div
              className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm"
            >


              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                Travel Pick
              </span>


              <h3 className="mt-6 text-3xl font-black">
                ✈️ Saily eSIM
              </h3>



              <p className="mt-5 leading-7 text-slate-600">

                Stay connected while traveling with affordable
                mobile data plans and easy digital activation.

              </p>




              <a
                href="https://go.saily.site/aff_c?offer_id=101&aff_id=13276"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-4 font-bold text-white hover:bg-blue-700"
              >

                Get Saily →

              </a>


            </div>



          </div>



        </div>


      </section>
            {/* Featured Reviews */}

      <section className="bg-white px-6 py-24 text-slate-900">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Latest Reviews
            </span>

            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Featured Reviews
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              Explore detailed reviews, comparisons, and technology
              recommendations from NorthSky Reviews.
            </p>

          </div>



          <div className="grid gap-8 md:grid-cols-3">

            {reviews.map((review)=>(

              <div
                key={review.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="text-xl text-yellow-500">
                  {review.rating}
                </div>


                <h3 className="mt-5 text-2xl font-black">
                  {review.title}
                </h3>


                <p className="mt-5 leading-7 text-slate-600">
                  {review.description}
                </p>


                <a
                  href={review.href}
                  target={
                    review.href.startsWith("http")
                    ? "_blank"
                    : "_self"
                  }
                  rel={
                    review.href.startsWith("http")
                    ? "noopener noreferrer sponsored"
                    : undefined
                  }
                  className="mt-8 inline-block font-bold text-blue-600 hover:text-blue-700"
                >
                  Read Full Review →
                </a>


              </div>

            ))}

          </div>

        </div>

      </section>





      {/* Why Trust NorthSky */}

      <section className="bg-slate-50 px-6 py-24">


        <div className="mx-auto max-w-7xl">


          <div className="mb-14 text-center">


            <h2 className="text-4xl font-black md:text-5xl">
              Why Trust NorthSky Reviews?
            </h2>


            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
              We provide transparent technology recommendations
              based on research, comparisons, and real-world value.
            </p>


          </div>




          <div className="grid gap-8 md:grid-cols-3">


            {trust.map((item)=>(

              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-8"
              >

                <h3 className="text-2xl font-black">
                  {item.title}
                </h3>


                <p className="mt-5 leading-7 text-slate-600">
                  {item.description}
                </p>


              </div>

            ))}


          </div>


        </div>


      </section>






      {/* Featured Deals */}

      <section className="bg-white px-6 py-24 text-slate-900">


        <div className="mx-auto max-w-7xl">


          <div className="mb-14 text-center">


            <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Top Offers
            </span>


            <h2 className="mt-4 text-4xl font-black md:text-5xl">
              Featured Deals
            </h2>


            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
              Recommended technology products and services
              worth checking out.
            </p>


          </div>





          <div className="grid gap-8 md:grid-cols-2">



            <div className="rounded-3xl border border-slate-200 p-10 shadow-sm">


              <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-bold text-green-700">
                Security Pick
              </span>


              <h3 className="mt-6 text-3xl font-black">
                🔒 NordVPN
              </h3>


              <p className="mt-5 text-slate-600 leading-7">
                Protect your online privacy with secure
                encryption, fast speeds, and advanced
                security features.
              </p>


              <a
                href="https://go.nordvpn.net/aff_c?offer_id=725&aff_id=143955"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-4 font-bold text-white hover:bg-blue-700"
              >
                Get NordVPN →
              </a>


            </div>





            <div className="rounded-3xl border border-slate-200 p-10 shadow-sm">


              <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700">
                Travel Pick
              </span>


              <h3 className="mt-6 text-3xl font-black">
                ✈️ Saily eSIM
              </h3>


              <p className="mt-5 text-slate-600 leading-7">
                Get affordable international mobile data
                without expensive roaming fees.
              </p>


              <a
                href="https://go.saily.site/aff_c?offer_id=101&aff_id=13276"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="mt-8 inline-block rounded-xl bg-blue-600 px-7 py-4 font-bold text-white hover:bg-blue-700"
              >
                Get Saily →
              </a>


            </div>



          </div>


        </div>


      </section>
            {/* Newsletter */}

      <section className="bg-slate-50 px-6 py-24">


        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm">


          <h2 className="text-4xl font-black md:text-5xl">
            Stay Ahead of Technology
          </h2>


          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">

            Get the latest technology reviews, buying guides,
            comparisons, and exclusive recommendations from
            NorthSky Reviews.

          </p>



          <div className="mt-10 flex flex-col gap-4 md:flex-row md:justify-center">


            <input
              type="email"
              placeholder="Enter your email address"
              className="rounded-xl border border-slate-300 px-6 py-4 outline-none focus:border-blue-600 md:w-96"
            />


            <button
              className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"
            >
              Subscribe
            </button>


          </div>


          <p className="mt-5 text-sm text-slate-500">
            No spam. Unsubscribe anytime.
          </p>


        </div>


      </section>






      {/* Final CTA */}


      <section className="bg-blue-600 px-6 py-24 text-center text-white">


        <div className="mx-auto max-w-4xl">


          <h2 className="text-4xl font-black md:text-5xl">
            Find The Right Technology For You
          </h2>


          <p className="mt-6 text-lg text-blue-100">

            Compare products, read expert reviews,
            and discover trusted technology recommendations.

          </p>



          <a
            href="/reviews"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-600 transition hover:bg-blue-50"
          >
            Browse Reviews →
          </a>


        </div>


      </section>







      {/* Footer */}


      <footer className="border-t bg-slate-950 px-6 py-16 text-white">


        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-4">



          {/* Brand */}


          <div>


            <h3 className="text-2xl font-black">

              NorthSky
              <span className="text-blue-400">
                Reviews
              </span>

            </h3>



            <p className="mt-5 leading-7 text-slate-400">

              Independent technology reviews,
              comparisons, and buying guides
              helping you make smarter buying
              decisions.

            </p>


          </div>







          {/* Explore */}


          <div>


            <h4 className="font-bold text-lg">
              Explore
            </h4>



            <div className="mt-5 flex flex-col gap-3 text-slate-400">


              <Link href="/reviews">
                Reviews
              </Link>


              <Link href="/comparisons">
                Comparisons
              </Link>


              <Link href="/ai">
                AI Tools
              </Link>


              <Link href="/travel">
                Travel Tech
              </Link>


              <Link href="/deals">
                Deals
              </Link>


            </div>


          </div>







          {/* Company */}


          <div>


            <h4 className="font-bold text-lg">
              Company
            </h4>



            <div className="mt-5 flex flex-col gap-3 text-slate-400">


              <Link href="/about">
                About
              </Link>


              <Link href="/contact">
                Contact
              </Link>


              <Link href="/privacy-policy">
                Privacy Policy
              </Link>


              <Link href="/affiliate-disclosure">
                Affiliate Disclosure
              </Link>


              <Link href="/editorial-policy">
                Editorial Policy
              </Link>


            </div>


          </div>







          {/* Partners */}


          <div>


            <h4 className="font-bold text-lg">
              Featured Partners
            </h4>



            <div className="mt-5 flex flex-col gap-4">


              <a
                href="https://go.nordvpn.net/aff_c?offer_id=725&aff_id=143955"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="rounded-xl bg-blue-600 px-5 py-3 text-center font-bold hover:bg-blue-700"
              >
                🔒 Get NordVPN
              </a>



              <a
                href="https://go.saily.site/aff_c?offer_id=101&aff_id=13276"
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="rounded-xl border border-blue-400 px-5 py-3 text-center font-bold text-blue-400 hover:bg-blue-400 hover:text-slate-950"
              >
                ✈️ Get Saily eSIM
              </a>


            </div>


          </div>



        </div>






        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">


          © {new Date().getFullYear()} NorthSky Reviews.
          All rights reserved.



          <p className="mx-auto mt-4 max-w-3xl leading-6">


            <strong className="text-slate-300">
              Affiliate Disclosure:
            </strong>{" "}
            Some links on NorthSky Reviews are affiliate links.
            We may earn a commission when you purchase through
            these links at no additional cost to you.
            Our recommendations are based on research,
            comparisons, and editorial evaluation.


          </p>


        </div>



      </footer>