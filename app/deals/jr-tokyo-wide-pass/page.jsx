import Link from "next/link";

export const metadata = {
  title: "JR Tokyo Wide Pass 8% Off Deal | NorthSky Deals",
  description:
    "Save 8% on selected JR Tokyo Wide Pass packages with promo code SUMMER8TWP. Limited-time Japan travel deal available through Klook.",
};

export default function JRTokyoWidePassPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-5xl px-6 py-16">

        <div className="inline-flex rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white">
          🇯🇵 Japan Travel Deal
        </div>

        <h1 className="mt-6 text-5xl font-extrabold text-slate-900">
          JR Tokyo Wide Pass
        </h1>

        <h2 className="mt-3 text-3xl font-bold text-blue-600">
          Save 8% on Selected JR Pass Packages
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-700">
          Explore Tokyo and surrounding regions with the JR Tokyo Wide Pass.
          Use this limited-time promo code to save on selected rail pass
          packages and travel experiences across Japan.
        </p>


        <div className="mt-10 rounded-2xl border bg-white p-8 shadow-lg">

          <h2 className="text-2xl font-bold">
            Promotion Details
          </h2>

          <div className="mt-6 space-y-4">

            <div className="rounded-xl bg-red-50 p-6 text-center">
              <p className="text-sm font-semibold uppercase text-red-600">
                Promo Code
              </p>

              <p className="mt-2 text-4xl font-extrabold tracking-widest text-red-700">
                SUMMER8TWP
              </p>

              <p className="mt-3 text-slate-600">
                8% Off JR Tokyo Wide Pass
              </p>
            </div>


            <div className="grid gap-4 md:grid-cols-2">

              <div className="rounded-xl bg-slate-100 p-4">
                <p className="font-semibold">
                  Discount
                </p>
                <p>
                  8% Off
                </p>
              </div>

              <div className="rounded-xl bg-slate-100 p-4">
                <p className="font-semibold">
                  Maximum Discount
                </p>
                <p>
                  1,500 JPY
                </p>
              </div>

              <div className="rounded-xl bg-slate-100 p-4">
                <p className="font-semibold">
                  Platform
                </p>
                <p>
                  All Platforms
                </p>
              </div>

              <div className="rounded-xl bg-slate-100 p-4">
                <p className="font-semibold">
                  Eligibility
                </p>
                <p>
                  Excludes Japan Residents (JP)
                </p>
              </div>

            </div>


            <div className="rounded-xl bg-blue-50 p-6">

              <h3 className="text-xl font-bold">
                Eligible Packages
              </h3>

              <ul className="mt-3 list-disc pl-6 text-slate-700">

                <li>
                  3-day pass + One-way Skyliner ticket
                </li>

                <li>
                  3-day pass + 24-hour Tokyo Subway ticket
                </li>

                <li>
                  3-day pass + 48-hour Tokyo Subway ticket
                </li>

                <li>
                  3-day pass + 72-hour Tokyo Subway ticket
                </li>

              </ul>

            </div>


            <div className="rounded-xl bg-white border p-6">

              <h3 className="text-xl font-bold">
                Validity Period
              </h3>

              <p className="mt-3 text-slate-700">
                April 27, 2026 10:00 AM –
                August 2, 2026 9:59 AM
                (GMT +08:00)
              </p>

            </div>


            <div className="rounded-xl border p-6">

              <h3 className="text-xl font-bold">
                Terms & Conditions
              </h3>

              <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-700">

                <li>
                  Valid only for selected JR Tokyo Wide Pass packages.
                </li>

                <li>
                  Maximum discount is 1,500 JPY.
                </li>

                <li>
                  Each user may use the promo code once only.
                </li>

                <li>
                  Limited quantity available.
                </li>

                <li>
                  Discount applies during checkout.
                </li>

                <li>
                  If the code is unavailable, the usage limit may have been reached.
                </li>

                <li>
                  Final discount amount is shown at checkout.
                </li>

              </ul>

            </div>

          </div>

        </div>


        <div className="mt-10 rounded-2xl bg-blue-600 p-8 text-white">

          <h2 className="text-3xl font-bold">
            Book JR Tokyo Wide Pass & Save
          </h2>

          <p className="mt-4 text-lg">
            Apply this promo code during checkout:
          </p>


          <div className="mt-4 rounded-xl bg-white px-6 py-4 text-center text-3xl font-black tracking-widest text-blue-700">
            SUMMER8TWP
          </div>


          <a
            href="https://www.klook.com/?aid=128344"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 font-bold text-blue-700 hover:bg-slate-100"
          >
            Book on Klook →
          </a>

        </div>


        <div className="mt-12">
          <Link
            href="/deals"
            className="font-semibold text-blue-600 hover:underline"
          >
            ← Back to NorthSky Deals
          </Link>
        </div>

      </section>
    </main>
  );
}