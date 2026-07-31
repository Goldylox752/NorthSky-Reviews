import Link from "next/link";

export const metadata = {
  title: "Qianhai Snow World Buy One Get One Free Deal | NorthSky Reviews",
  description:
    "Save on Qianhai Snow World with the QIANHAI0731 Buy One Get One Free promotion. Limited-time ski pass deal available through Klook.",
};

export default function QianhaiSnowWorldPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="mx-auto max-w-5xl px-6 py-16">

        <div className="inline-flex rounded-full bg-red-600 px-4 py-2 text-sm font-bold text-white">
          🔥 Limited Time Travel Deal
        </div>

        <h1 className="mt-6 text-5xl font-extrabold text-slate-900">
          Qianhai Snow World
        </h1>

        <h2 className="mt-3 text-3xl font-bold text-blue-600">
          Buy One Get One Free Ski Pass Offer
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-700">
          Experience Qianhai Ice and Snow World with this exclusive
          limited-time promotion. Use the promo code below to unlock a
          Buy One Get One Free offer on select unlimited ski passes.
        </p>


        <div className="mt-10 rounded-2xl bg-white p-8 shadow-lg border">

          <h2 className="text-2xl font-bold text-slate-900">
            Promotion Details
          </h2>

          <div className="mt-6 space-y-4">

            <div className="rounded-xl bg-red-50 p-6 text-center">
              <p className="text-sm font-semibold uppercase text-red-600">
                Promo Code
              </p>

              <p className="mt-2 text-4xl font-extrabold tracking-widest text-red-700">
                QIANHAI0731
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
                  Platform
                </p>
                <p>
                  All Platforms
                </p>
              </div>

              <div className="rounded-xl bg-slate-100 p-4">
                <p className="font-semibold">
                  Valid Region
                </p>
                <p>
                  Hong Kong & Macau
                </p>
              </div>

              <div className="rounded-xl bg-slate-100 p-4">
                <p className="font-semibold">
                  Availability
                </p>
                <p>
                  Limited Quantity
                </p>
              </div>

            </div>


            <div className="rounded-xl bg-blue-50 p-6">

              <h3 className="font-bold text-xl">
                Eligible Ski Passes
              </h3>

              <ul className="mt-3 list-disc pl-6 text-slate-700">
                <li>
                  Advanced Trail Unlimited Ski Pass
                </li>

                <li>
                  Summer Special Advanced Slope Unlimited Ski Pass
                </li>
              </ul>

            </div>


            <div className="rounded-xl bg-white border p-6">

              <h3 className="font-bold text-xl">
                Terms & Conditions
              </h3>

              <ul className="mt-3 list-disc pl-6 space-y-2 text-slate-700">

                <li>
                  Coupon valid for eligible Qianhai Ice and Snow World packages only.
                </li>

                <li>
                  Limited quantity available. First come, first served.
                </li>

                <li>
                  Coupon is for personal use only and cannot be exchanged for cash.
                </li>

                <li>
                  Cannot be combined with other promotions.
                </li>

                <li>
                  Unused coupons expire automatically.
                </li>

                <li>
                  Cancelled or failed orders may return the coupon if it has not expired.
                </li>

              </ul>

            </div>

          </div>

        </div>


        <div className="mt-10 rounded-2xl bg-blue-600 p-8 text-white">

          <h2 className="text-3xl font-bold">
            Claim Your Qianhai Snow World Deal
          </h2>

          <p className="mt-4 text-lg">
            Visit Klook, select your eligible ski pass, and enter promo code:
          </p>

          <div className="mt-4 rounded-xl bg-white px-6 py-4 text-center text-3xl font-black tracking-widest text-blue-700">
            QIANHAI0731
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