import Link from "next/link";

export const metadata = {
  title: "Guangzhou Bonski Buy One Get One Free Deal | NorthSky Reviews",
  description:
    "Save on Guangzhou Bonski with the BONSKI0731 Buy One Get One Free promotion. Limited-time ski pass deal available through Klook.",
};

export default function GuangzhouBonskiPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-5xl px-6 py-16">

        <div className="inline-flex rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white">
          🔥 Limited Time Travel Deal
        </div>

        <h1 className="mt-6 text-5xl font-extrabold text-slate-900">
          Guangzhou Bonski
        </h1>

        <h2 className="mt-3 text-3xl font-bold text-blue-600">
          Buy One Get One Free Ski Pass Offer
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-700">
          Experience Guangzhou Bonski with this exclusive limited-time
          promotion. Use the promo code below to unlock a Buy One Get One
          Free offer on the Advanced Trail Unlimited Ski Pass.
        </p>


        <div className="mt-10 rounded-2xl bg-white p-8 shadow-lg border">

          <h2 className="text-2xl font-bold">
            Promotion Details
          </h2>


          <div className="mt-6 space-y-4">

            <div className="rounded-xl bg-red-50 p-6 text-center">
              <p className="text-sm font-semibold uppercase text-red-600">
                Promo Code
              </p>

              <p className="mt-2 text-4xl font-extrabold tracking-widest text-red-700">
                BONSKI0731
              </p>

              <p className="mt-3 text-slate-600">
                Buy One Get One Free
              </p>
            </div>


            <div className="grid gap-4 md:grid-cols-2">

              <div className="rounded-xl bg-slate-100 p-4">
                <p className="font-semibold">
                  Offer
                </p>
                <p>
                  2-for-1 Ski Pass Promotion
                </p>
              </div>


              <div className="rounded-xl bg-slate-100 p-4">
                <p className="font-semibold">
                  Location
                </p>
                <p>
                  Guangzhou Bonski
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
                  Eligible Region
                </p>
                <p>
                  Hong Kong & Macau
                </p>
              </div>

            </div>


            <div className="rounded-xl bg-blue-50 p-6">

              <h3 className="text-xl font-bold">
                Eligible Package
              </h3>

              <ul className="mt-3 list-disc pl-6">
                <li>
                  Advanced Trail Unlimited Ski Pass
                </li>
              </ul>

            </div>


            <div className="rounded-xl border bg-white p-6">

              <h3 className="text-xl font-bold">
                Validity Period
              </h3>

              <p className="mt-3 text-slate-700">
                July 31, 2026 21:00 –
                August 1, 2026 23:59 (GMT +08:00)
              </p>

            </div>


            <div className="rounded-xl border bg-white p-6">

              <h3 className="text-xl font-bold">
                Terms & Conditions
              </h3>

              <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-700">

                <li>
                  Valid only for Guangzhou Bonski Advanced Trail Unlimited Ski Pass.
                </li>

                <li>
                  Limited quantity available. First come, first served.
                </li>

                <li>
                  Personal use only. Cannot be exchanged for cash.
                </li>

                <li>
                  Cannot be combined with other promotions.
                </li>

                <li>
                  Unused vouchers expire automatically.
                </li>

                <li>
                  Cancelled or failed orders may return the voucher if it has not expired.
                </li>

                <li>
                  The platform may cancel voucher eligibility for abuse or misuse.
                </li>

              </ul>

            </div>

          </div>

        </div>


        <div className="mt-10 rounded-2xl bg-blue-600 p-8 text-white">

          <h2 className="text-3xl font-bold">
            Claim Your Guangzhou Bonski Deal
          </h2>

          <p className="mt-4 text-lg">
            Book your Guangzhou Bonski ski experience and apply this promo code:
          </p>


          <div className="mt-4 rounded-xl bg-white px-6 py-4 text-center text-3xl font-black tracking-widest text-blue-700">
            BONSKI0731
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