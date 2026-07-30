import Link from "next/link";


export default function NotFound() {


  return (

    <main className="flex min-h-screen items-center justify-center bg-white px-6">


      <div className="max-w-xl text-center">


        <div className="text-8xl font-black text-blue-600">

          404

        </div>



        <h1 className="mt-6 text-4xl font-black text-slate-900">

          Page Not Found

        </h1>



        <p className="mt-5 text-lg leading-8 text-slate-600">

          The page you are looking for may have been moved,
          removed, or does not exist.

          Explore NorthSky Reviews to discover AI tools,
          software reviews, and technology comparisons.

        </p>





        <div className="mt-8 flex flex-wrap justify-center gap-4">


          <Link

            href="/"

            className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white transition hover:bg-blue-700"

          >

            Back Home

          </Link>





          <Link

            href="/ai"

            className="rounded-xl border border-slate-300 px-8 py-4 font-bold text-slate-900 transition hover:bg-slate-50"

          >

            Explore AI Tools

          </Link>


        </div>





        <div className="mt-12 rounded-3xl bg-slate-50 p-8">


          <h2 className="text-xl font-black text-slate-900">

            Explore NorthSky Reviews

          </h2>



          <div className="mt-6 space-y-4 font-bold">


            <div>

              <Link

                href="/reviews"

                className="text-blue-600 hover:underline"

              >

                ⭐ Software Reviews

              </Link>

            </div>





            <div>

              <Link

                href="/comparisons"

                className="text-blue-600 hover:underline"

              >

                ⚖️ AI Comparisons

              </Link>

            </div>





            <div>

              <Link

                href="/guides"

                className="text-blue-600 hover:underline"

              >

                📚 Technology Guides

              </Link>

            </div>





            <div>

              <Link

                href="/methodology"

                className="text-blue-600 hover:underline"

              >

                🔍 Review Methodology

              </Link>

            </div>



          </div>


        </div>





        <div className="mt-10 text-sm text-slate-500">

          NorthSky Reviews — AI software research and technology insights

        </div>



      </div>


    </main>

  );

}
