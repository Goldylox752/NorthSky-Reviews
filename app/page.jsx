"use client";

import { useState } from "react";

export default function HomePage() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    window.location.href = `/search?q=${encodeURIComponent(search.trim())}`;
  };

  const categories = [
    { icon: "🚗", name: "Auto & Dealers" },
    { icon: "🏠", name: "Home Services" },
    { icon: "🍽️", name: "Restaurants" },
    { icon: "🔨", name: "Contractors" },
    { icon: "🏨", name: "Hotels & Travel" },
    { icon: "💼", name: "Local Businesses" },
  ];

  const featuredBusinesses = [
    {
      name: "NorthSky Auto",
      category: "Auto & Dealers",
      location: "Edmonton, AB",
      rating: "4.9",
      reviews: 127,
    },
    {
      name: "Prairie Home Services",
      category: "Home Services",
      location: "Leduc, AB",
      rating: "4.8",
      reviews: 94,
    },
    {
      name: "Alberta Coffee Co.",
      category: "Restaurants",
      location: "Edmonton, AB",
      rating: "4.7",
      reviews: 216,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* NAVBAR */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <a
            href="/"
            className="flex items-center gap-3 font-bold text-xl"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white font-black">
              N
            </div>

            <span>
              NorthSky{" "}
              <span className="text-blue-600">Reviews</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a
              href="/businesses"
              className="text-sm font-medium text-slate-600 hover:text-blue-600"
            >
              Businesses
            </a>

            <a
              href="/categories"
              className="text-sm font-medium text-slate-600 hover:text-blue-600"
            >
              Categories
            </a>

            <a
              href="/reviews"
              className="text-sm font-medium text-slate-600 hover:text-blue-600"
            >
              Reviews
            </a>

            <a
              href="/for-businesses"
              className="text-sm font-medium text-slate-600 hover:text-blue-600"
            >
              For Businesses
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="hidden text-sm font-semibold text-slate-700 sm:block"
            >
              Sign In
            </a>

            <a
              href="/write-review"
              className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-blue-700"
            >
              Write a Review
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-50">

        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-100 blur-3xl" />

        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-indigo-100 blur-3xl" />

        <div className="relative mx-auto max-w-5xl px-6 py-24 text-center">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-4 py-2 text-xs font-bold text-blue-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Canada's local review platform
          </div>

          <h1 className="text-5xl font-black tracking-tight text-slate-950 sm:text-6xl md:text-7xl">
            Find businesses
            <br />
            <span className="text-blue-600">
              Canadians trust.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Discover trusted businesses, read real customer experiences,
            and share your own with the NorthSky community.
          </p>

          {/* SEARCH */}
          <form
            onSubmit={handleSearch}
            className="mx-auto mt-10 flex max-w-3xl flex-col gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl sm:flex-row"
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search businesses, services or categories..."
              className="flex-1 rounded-xl px-5 py-4 text-sm outline-none placeholder:text-slate-400"
            />

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold text-white hover:bg-blue-700"
            >
              Search
            </button>
          </form>

          <div className="mt-5 flex justify-center gap-2 text-sm text-slate-500">
            <span>📍</span>
            <span>Search businesses across Canada</span>
          </div>

          {/* STATS */}
          <div className="mx-auto mt-14 grid max-w-2xl grid-cols-3 divide-x divide-slate-200">

            <div>
              <div className="text-2xl font-black">50K+</div>
              <div className="mt-1 text-xs text-slate-500">
                Businesses
              </div>
            </div>

            <div>
              <div className="text-2xl font-black">250K+</div>
              <div className="mt-1 text-xs text-slate-500">
                Reviews
              </div>
            </div>

            <div>
              <div className="text-2xl font-black">4.8/5</div>
              <div className="mt-1 text-xs text-slate-500">
                Average Rating
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-10 flex items-end justify-between gap-6">

          <div>
            <p className="text-xs font-black tracking-widest text-blue-600">
              EXPLORE
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-tight">
              Browse by category
            </h2>

            <p className="mt-2 text-slate-500">
              Discover highly rated businesses across Canada.
            </p>
          </div>

          <a
            href="/categories"
            className="hidden text-sm font-bold text-blue-600 sm:block"
          >
            View all →
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {categories.map((category) => (
            <a
              key={category.name}
              href={`/categories/${category.name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")}`}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                {category.icon}
              </div>

              <div className="flex-1">
                <h3 className="font-bold">
                  {category.name}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  Explore businesses
                </p>
              </div>

              <span className="text-lg text-blue-600 transition group-hover:translate-x-1">
                →
              </span>

            </a>
          ))}

        </div>
      </section>

      {/* FEATURED BUSINESSES */}
      <section className="border-y border-slate-200 bg-slate-50">

        <div className="mx-auto max-w-7xl px-6 py-20">

          <div className="mb-10 flex items-end justify-between gap-6">

            <div>
              <p className="text-xs font-black tracking-widest text-blue-600">
                DISCOVER
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-tight">
                Featured businesses
              </h2>

              <p className="mt-2 text-slate-500">
                Businesses earning great reviews from their customers.
              </p>
            </div>

            <a
              href="/businesses"
              className="hidden text-sm font-bold text-blue-600 sm:block"
            >
              Browse all →
            </a>

          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {featuredBusinesses.map((business) => (
              <article
                key={business.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-xl font-black text-white">
                    {business.name.charAt(0)}
                  </div>

                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                    ✓ Verified
                  </span>

                </div>

                <p className="mt-6 text-xs font-black uppercase tracking-wider text-blue-600">
                  {business.category}
                </p>

                <h3 className="mt-2 text-xl font-black">
                  {business.name}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  📍 {business.location}
                </p>

                <div className="mt-5 flex items-center gap-2">

                  <span className="text-amber-500">
                    ★★★★★
                  </span>

                  <strong>
                    {business.rating}
                  </strong>

                  <span className="text-xs text-slate-400">
                    ({business.reviews} reviews)
                  </span>

                </div>

                <a
                  href={`/business/${business.name
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")}`}
                  className="mt-6 block border-t border-slate-100 pt-5 text-sm font-bold text-blue-600"
                >
                  View business →
                </a>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mx-auto max-w-2xl text-center">

          <p className="text-xs font-black tracking-widest text-blue-600">
            HOW IT WORKS
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-tight">
            Better decisions start with real experiences.
          </h2>

          <p className="mt-4 text-slate-500">
            NorthSky Reviews makes it easier to discover businesses
            and understand what their customers really think.
          </p>

        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">

          {[
            {
              number: "01",
              title: "Search",
              text: "Find a business, service or category anywhere in Canada.",
            },
            {
              number: "02",
              title: "Read",
              text: "Compare ratings and read experiences from other customers.",
            },
            {
              number: "03",
              title: "Review",
              text: "Share your experience and help the next customer.",
            },
          ].map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-slate-200 p-7"
            >

              <span className="text-sm font-black text-blue-600">
                {step.number}
              </span>

              <h3 className="mt-5 text-xl font-black">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                {step.text}
              </p>

            </div>
          ))}

        </div>
      </section>

      {/* BUSINESS OWNER CTA */}
      <section className="bg-slate-950">

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">

          <div>

            <p className="text-xs font-black tracking-widest text-blue-400">
              FOR BUSINESS OWNERS
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Put your business
              <br />
              on the map.
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-slate-400">
              Claim your NorthSky Reviews profile, showcase your business,
              respond to customer reviews and build trust with Canadians.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="/business/claim"
                className="rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-blue-700"
              >
                Claim Your Business
              </a>

              <a
                href="/for-businesses"
                className="rounded-xl border border-slate-700 px-6 py-3.5 text-sm font-bold text-white hover:bg-slate-800"
              >
                Learn More
              </a>

            </div>

          </div>

          <div className="rounded-3xl border border-slate-800 bg-white p-7 shadow-2xl">

            <div className="flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 font-black text-white">
                N
              </div>

              <div>
                <div className="font-bold">
                  Your Business
                </div>

                <div className="text-xs text-slate-500">
                  NorthSky Reviews
                </div>
              </div>

            </div>

            <div className="mt-8">

              <div className="text-5xl font-black">
                4.9
              </div>

              <div className="mt-2 text-xl tracking-widest text-amber-500">
                ★★★★★
              </div>

              <p className="mt-2 text-sm text-slate-500">
                Based on customer reviews
              </p>

            </div>

            <div className="mt-7 space-y-3">

              {[92, 70, 35, 15, 5].map((width, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-xs"
                >

                  <span>{5 - index}</span>

                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
                    <div
                      className="h-full rounded-full bg-blue-600"
                      style={{ width: `${width}%` }}
                    />
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* REVIEW CTA */}
      <section className="bg-blue-50 px-6 py-20 text-center">

        <div className="mx-auto max-w-2xl">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
            ⭐
          </div>

          <h2 className="mt-6 text-3xl font-black tracking-tight">
            Have an experience to share?
          </h2>

          <p className="mt-3 text-slate-500">
            Your review could help someone make their next great decision.
          </p>

          <a
            href="/write-review"
            className="mt-7 inline-block rounded-xl bg-blue-600 px-7 py-3.5 text-sm font-bold text-white hover:bg-blue-700"
          >
            Write a Review
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-white">

        <div className="mx-auto max-w-7xl px-6 py-16">

          <div className="grid gap-12 md:grid-cols-4">

            <div className="md:col-span-2">

              <a
                href="/"
                className="flex items-center gap-3 text-xl font-black"
              >

                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600">
                  N
                </span>

                <span>
                  NorthSky{" "}
                  <span className="text-blue-400">
                    Reviews
                  </span>
                </span>

              </a>

              <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">
                A Canadian platform for discovering businesses,
                sharing experiences and building trust through real
                customer reviews.
              </p>

            </div>

            <div>

              <h3 className="font-bold">
                Explore
              </h3>

              <div className="mt-5 space-y-3 text-sm text-slate-500">

                <a href="/businesses" className="block hover:text-white">
                  Businesses
                </a>

                <a href="/categories" className="block hover:text-white">
                  Categories
                </a>

                <a href="/reviews" className="block hover:text-white">
                  Reviews
                </a>

                <a href="/write-review" className="block hover:text-white">
                  Write a Review
                </a>

              </div>

            </div>

            <div>

              <h3 className="font-bold">
                Businesses
              </h3>

              <div className="mt-5 space-y-3 text-sm text-slate-500">

                <a
                  href="/for-businesses"
                  className="block hover:text-white"
                >
                  For Businesses
                </a>

                <a
                  href="/business/claim"
                  className="block hover:text-white"
                >
                  Claim Your Business
                </a>

                <a
                  href="/business/login"
                  className="block hover:text-white"
                >
                  Business Login
                </a>

                <a
                  href="/pricing"
                  className="block hover:text-white"
                >
                  Pricing
                </a>

              </div>

            </div>

          </div>

          <div className="mt-14 flex flex-col justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-600 sm:flex-row">

            <span>
              © {new Date().getFullYear()} NorthSky Reviews. All rights reserved.
            </span>

            <div className="flex gap-5">

              <a href="/privacy" className="hover:text-white">
                Privacy
              </a>

              <a href="/terms" className="hover:text-white">
                Terms
              </a>

              <a href="/contact" className="hover:text-white">
                Contact
              </a>

            </div>

            <span>
              🇨🇦 Proudly Canadian
            </span>

          </div>

        </div>

      </footer>

    </main>
  );
}