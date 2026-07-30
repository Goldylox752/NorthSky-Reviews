import Link from "next/link";


export default function Footer() {

  const year = new Date().getFullYear();


  return (

    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">


      <div className="mx-auto max-w-7xl px-6 py-16">


        <div className="grid gap-12 md:grid-cols-4">



          {/* BRAND */}

          <div>


            <Link
              href="/"
              className="text-2xl font-black text-white"
            >

              <span className="text-blue-500">
                NorthSky
              </span>{" "}
              Reviews

            </Link>



            <p className="mt-5 leading-7 text-slate-400">

              NorthSky Reviews is an independent technology
              publication helping people discover AI tools,
              software platforms, SaaS products, and business
              technology through reviews, comparisons, and
              buying guides.

            </p>



            <div className="mt-6 flex flex-wrap gap-3">


              <span className="rounded-full bg-blue-600 px-3 py-1 text-sm font-semibold text-white">
                AI Reviews
              </span>


              <span className="rounded-full bg-slate-800 px-3 py-1 text-sm font-semibold">
                SaaS
              </span>


              <span className="rounded-full bg-slate-800 px-3 py-1 text-sm font-semibold">
                Technology
              </span>


            </div>


          </div>







          {/* EXPLORE */}

          <div>


            <h3 className="mb-5 text-lg font-bold text-white">
              Explore
            </h3>


            <ul className="space-y-3">


              <li>
                <Link href="/ai" className="hover:text-white">
                  AI Tools
                </Link>
              </li>


              <li>
                <Link href="/all-tools" className="hover:text-white">
                  All Software
                </Link>
              </li>


              <li>
                <Link href="/reviews" className="hover:text-white">
                  Reviews
                </Link>
              </li>


              <li>
                <Link href="/comparisons" className="hover:text-white">
                  Comparisons
                </Link>
              </li>


              <li>
                <Link href="/guides" className="hover:text-white">
                  Guides
                </Link>
              </li>


              <li>
                <Link href="/deals" className="hover:text-white">
                  Software Deals
                </Link>
              </li>


            </ul>


          </div>







          {/* COMPANY */}

          <div>


            <h3 className="mb-5 text-lg font-bold text-white">
              Company
            </h3>


            <ul className="space-y-3">


              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>


              <li>
                <Link href="/authors/northsky-team" className="hover:text-white">
                  NorthSky Team
                </Link>
              </li>


              <li>
                <Link href="/methodology" className="hover:text-white">
                  Review Methodology
                </Link>
              </li>


              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>


              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>


              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms
                </Link>
              </li>


              <li>
                <Link href="/affiliate-disclosure" className="hover:text-white">
                  Affiliate Disclosure
                </Link>
              </li>


            </ul>


          </div>







          {/* NEWSLETTER */}

          <div>


            <h3 className="mb-5 text-lg font-bold text-white">
              Stay Updated
            </h3>


            <p className="mb-5 text-slate-400">

              Get AI software reviews,
              technology updates, and buying guides.

            </p>



            <form className="space-y-3">


              <label
                className="sr-only"
                htmlFor="footer-email"
              >
                Email address
              </label>


              <input

                id="footer-email"

                type="email"

                placeholder="Your email"

                className="
                w-full
                rounded-xl
                border
                border-slate-700
                bg-slate-900
                px-4
                py-3
                text-white
                placeholder:text-slate-500
                focus:border-blue-500
                focus:outline-none
                "

              />



              <button

                type="button"

                className="
                w-full
                rounded-xl
                bg-blue-600
                px-4
                py-3
                font-bold
                text-white
                transition
                hover:bg-blue-700
                "

              >

                Subscribe

              </button>


            </form>



            <p className="mt-5 text-sm text-slate-500">

              Business inquiries:
              <br />

              <a
                href="mailto:byronsanche@zohomailcloud.ca"
                className="text-blue-400 hover:underline"
              >
                byronsanche@zohomailcloud.ca
              </a>

            </p>


          </div>



        </div>







        <div className="mt-16 border-t border-slate-800 pt-8">


          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">


            <p className="text-sm text-slate-500">

              © {year} NorthSky Reviews.
              All rights reserved.

            </p>



            <div className="flex flex-wrap gap-6 text-sm">


              <Link href="/privacy" className="hover:text-white">
                Privacy
              </Link>


              <Link href="/terms" className="hover:text-white">
                Terms
              </Link>


              <Link href="/affiliate-disclosure" className="hover:text-white">
                Disclosure
              </Link>


              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>


            </div>


          </div>


        </div>


      </div>


    </footer>

  );

}
