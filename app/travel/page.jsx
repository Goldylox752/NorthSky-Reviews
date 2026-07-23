import Link from "next/link";
import Script from "next/script";

export const metadata = {
  title: "Travel Deals | Flights, Hotels & Car Rentals | NorthSky Reviews",
  description:
    "Compare flights, hotels, car rentals, travel insurance, and vacation deals. Save money with trusted travel partners.",
};

export default function TravelPage() {
  return (
    <main className="min-h-screen bg-white">

      <section className="bg-gradient-to-br from-sky-900 via-blue-700 to-cyan-500 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-5xl font-black md:text-7xl">
            ✈️ Travel Deals
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-blue-100">
            Compare flights, hotels, rental cars, travel insurance,
            airport transfers, and vacation packages from trusted providers.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/guides"
              className="rounded-xl bg-white px-8 py-4 font-bold text-blue-700"
            >
              Travel Guides
            </Link>

            <Link
              href="/"
              className="rounded-xl border border-white/40 px-8 py-4 font-bold"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">

          <h2 className="text-4xl font-black">
            Search & Compare Travel
          </h2>

          <p className="mt-3 text-slate-600">
            Find the best prices from hundreds of airlines,
            hotels, and travel providers.
          </p>

          <div
            id="travelpayouts-widget"
            className="mt-10 rounded-3xl border bg-white p-6 shadow-lg"
          >
            <p className="text-center text-slate-500">
              Travel search widget will appear here.
            </p>
          </div>

          {/* Paste your official Travelpayouts widget below */}
          {/* <Script id="travelpayouts" strategy="afterInteractive">
            {`YOUR OFFICIAL TRAVELPAYOUTS WIDGET CODE`}
          </Script> */}

        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-4">

          {[
            {
              title: "Flights",
              icon: "✈️",
              desc: "Compare airfare worldwide."
            },
            {
              title: "Hotels",
              icon: "🏨",
              desc: "Find hotels with competitive rates."
            },
            {
              title: "Car Rentals",
              icon: "🚗",
              desc: "Book rental cars from major providers."
            },
            {
              title: "Travel Insurance",
              icon: "🛡️",
              desc: "Protect your next trip."
            }
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 shadow"
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="mt-5 text-2xl font-black">
                {item.title}
              </h3>

              <p className="mt-3 text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

    </main>
  );
}