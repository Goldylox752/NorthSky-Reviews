import Link from "next/link";

export const metadata = {
  title: "KLIA Ekspres Kuala Lumpur Airport Train 5% Off | NorthSky Deals",
  description:
    "Save 5% on KLIA Ekspres Kuala Lumpur Airport Express tickets with promo code MY5KLIA. Limited-time Klook travel deal.",
};

export default function KLIAEkspresPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-5xl px-6 py-16">

        <div className="inline-flex rounded-full bg-green-600 px-4 py-2 text-sm font-bold text-white">
          ✈️ Airport Travel Deal
        </div>

        <h1 className="mt-6 text-5xl font-extrabold text-slate-900">
          KLIA Ekspres Kuala Lumpur
        </h1>

        <h2 className="mt-3 text-3xl font-bold text-blue-600">
          Save 5% on Airport Express Tickets
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-700">
          Travel faster between Kuala Lumpur International Airport and the
          city with KLIA Ekspres. Use this limited-time promo code to save
          on your airport transfer ticket.
        </p>


        <div className="mt-10 rounded-2xl border bg-white p-8 shadow-lg">

          <h2 className="text-2xl font-bold">
            Promotion Details
          </h2>


          <div className="mt-6 space-y-4">

            <div className="rounded-xl bg-green-50 p-6 text-center">
              <p className="text-sm font-semibold uppercase text-green-700">
                Promo Code
              </p>

              <p className="mt-2 text-4xl font-extrabold tracking-widest text-green-700">
                MY5KLIA
              </p>

              <p className="mt-3 text-slate-600">
                5% Off KLIA Ekspres Ticket
              </p>
            </div>


            <div className="grid gap-4 md:grid-cols-2">

              <div className="rounded-xl bg-slate-100 p-4">
                <p className="font-semibold">
                  Discount
                </p>
                <p>
                  5% Off
                </p>
              </div>


              <div className="rounded-xl bg-slate-100 p-4">
                <p className="font-semibold">
                  Service
                </p>
                <p>
                  KLIA Ekspres Kuala Lumpur Airport Express Ticket
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
                  Maximum Discount
                </p>
                <p>
                  $1 USD
                </p>
              </div>

            </div>


            <div className="rounded-xl bg-blue-50 p-6">

              <h3 className="text-xl font-bold">
                Validity Period
              </h3>

              <p className="mt-3 text-slate-700">
                May 10, 2026 10:00 AM –
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
                  Valid only for KLIA Ekspres Kuala Lumpur Airport Express Ticket.
                </li>

                <li>
                  Maximum discount is $1 USD.
                </li>

                <li>
                  Each user may use the promo code once only.
                </li>

                <li>
                  Limited quantity available.
                </li>

                <li>
                  Discount is applied during checkout.
                </li>

                <li>
                  If the code is unavailable at checkout, usage limits may have been reached.
                </li>

                <li>
                  Final discount amount is shown on the checkout page.
                </li>

              </ul>

            </div>

          </div>

        </div>


        <div className="mt-10 rounded-2xl bg-blue-600 p-8 text-white">

          <h2 className="text-3xl font-bold">
            Book KLIA Ekspres & Save
          </h2>

          <p className="mt-4 text-lg">
            Use promo code below when booking your airport transfer:
          </p>


          <div className="mt-4 rounded-xl bg-white px-6 py-4 text-center text-3xl font-black tracking-widest text-blue-700">
            MY5KLIA
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