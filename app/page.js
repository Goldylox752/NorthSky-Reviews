"use client";

import { useState } from "react";

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Send an Instant Request",
    description:
      "Trigger a branded SMS or email review link the moment a job is completed—no app download required for your customer.",
  },
  {
    step: "02",
    title: "Smart Sentiment Routing",
    description:
      "Customers tap a star rating in one click. 4 & 5-star ratings go straight to your Google Business Profile; 1–3 stars open a private resolution form.",
  },
  {
    step: "03",
    title: "Climb the Local Map Pack",
    description:
      "Consistent, verified 5-star reviews push your business into Google’s top 3 local results and convert more inbound calls.",
  },
];

const METRICS = [
  { value: "4.9★", label: "Average Client Rating" },
  { value: "68%", label: "SMS Tap-Through Rate" },
  { value: "3.4x", label: "More Monthly Google Reviews" },
  { value: "< 15s", label: "Customer Checkout Time" },
];

const CLIENT_RESULTS = [
  {
    name: "Marcus T.",
    company: "Apex Roofing & Exteriors",
    location: "Edmonton, AB",
    quote:
      "We jumped from 14 reviews to 72 in two months. Our techs text the link before pulling out of the driveway.",
  },
  {
    name: "Elena R.",
    company: "Northside Auto Care",
    location: "Leduc, AB",
    quote:
      "The private feedback catch saved us twice from 2-star misunderstandings. Customers love how effortless the link is.",
  },
  {
    name: "Devon K.",
    company: "Summit HVAC & Plumbing",
    location: "Calgary, AB",
    quote:
      "Setup took ten minutes. We now hold the #1 spot in the local map pack across two neighboring towns.",
  },
];

export default function NorthSkyReviewsPage() {
  // Interactive Star Funnel Simulator State
  const [selectedStars, setSelectedStars] = useState(5);
  const [hoveredStars, setHoveredStars] = useState(0);
  const [privateNote, setPrivateNote] = useState("");
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  // Interactive SMS Builder State
  const [bizName, setBizName] = useState("NorthSky Exteriors");
  const [customerName, setCustomerName] = useState("Jordan");
  const [smsQueued, setSmsQueued] = useState(false);

  const activeRating = hoveredStars || selectedStars;
  const isPositiveRoute = selectedStars >= 4;

  const handlePrivateFeedback = (e) => {
    e.preventDefault();
    if (!privateNote.trim()) return;
    setFeedbackSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-sky-500/30">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500 text-sm font-extrabold text-slate-950">
              NS
            </span>
            <span className="text-lg font-bold tracking-tight text-white">
              NorthSky <span className="text-sky-400">Reviews</span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
            <a href="#funnel-demo" className="transition hover:text-white">
              Interactive Funnel
            </a>
            <a href="#how-it-works" className="transition hover:text-white">
              How It Works
            </a>
            <a href="#sms-preview" className="transition hover:text-white">
              SMS Builder
            </a>
            <a href="#pricing" className="transition hover:text-white">
              Pricing
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="/login"
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-300 transition hover:text-white"
            >
              Sign In
            </a>
            <a
              href="/signup"
              className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-sky-400"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-slate-800/70">
          <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-xs font-semibold text-sky-300">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                Automated Reputation Management for Local Businesses
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
                Get more{" "}
                <span className="text-sky-400">5-star Google reviews</span>{" "}
                without chasing customers.
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-slate-400">
                NorthSky Reviews sends instant SMS review invites, routes happy
                customers directly to Google, and catches negative feedback
                privately before it hurts your rating.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="/signup"
                  className="w-full rounded-xl bg-sky-500 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-400 sm:w-auto"
                >
                  Launch Your Review Link
                </a>
                <a
                  href="#funnel-demo"
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-7 py-3.5 text-sm font-semibold text-slate-200 transition hover:border-slate-600 hover:bg-slate-800 sm:w-auto"
                >
                  Test the Star Filter Live
                </a>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:grid-cols-4">
              {METRICS.map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-2xl font-extrabold text-white sm:text-3xl">
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs font-medium text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Star Routing Simulator */}
        <section id="funnel-demo" className="border-b border-slate-800/70 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                Smart Sentiment Routing
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
                Click a star rating to see how NorthSky protects your score
              </h2>
              <p className="mt-4 leading-relaxed text-slate-400">
                Every customer receives a clean, mobile-first rating screen. Try
                selecting <strong className="text-white">4 or 5 stars</strong>{" "}
                versus <strong className="text-white">1 to 3 stars</strong> on
                the interactive card to experience both paths firsthand.
              </p>

              <div className="mt-6 space-y-3 text-sm text-slate-300">
                <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                  <span className="mt-0.5 text-emerald-400">●</span>
                  <div>
                    <p className="font-semibold text-white">
                      4–5 Stars → Direct Google Redirect
                    </p>
                    <p className="mt-0.5 text-slate-400">
                      Zero friction—opens your Google Business Profile review
                      box in one tap.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                  <span className="mt-0.5 text-amber-400">●</span>
                  <div>
                    <p className="font-semibold text-white">
                      1–3 Stars → Private Service Recovery
                    </p>
                    <p className="mt-0.5 text-slate-400">
                      Captures the issue privately and alerts your manager so
                      you can make it right immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Customer Card */}
            <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-7 shadow-2xl">
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                  Live Customer View
                </p>
                <h3 className="mt-1 text-xl font-bold text-white">
                  How was your experience with {bizName || "NorthSky Exteriors"}?
                </h3>

                {/* Star Selector */}
                <div
                  className="mt-5 flex items-center justify-center gap-2"
                  onMouseLeave={() => setHoveredStars(0)}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => {
                        setSelectedStars(star);
                        setFeedbackSubmitted(false);
                      }}
                      onMouseEnter={() => setHoveredStars(star)}
                      aria-label={`Rate ${star} stars`}
                      className={`text-4xl transition-transform hover:scale-110 ${
                        star <= activeRating
                          ? "text-amber-400"
                          : "text-slate-700"
                      }`}
                    >
                      ★
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-xs text-slate-400">
                  Selected: {selectedStars} out of 5 stars
                </p>
              </div>

              <div className="mt-6 border-t border-slate-800 pt-6">
                {isPositiveRoute ? (
                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-center">
                    <p className="text-sm font-semibold text-emerald-300">
                      Awesome! Thank you for the {selectedStars}-star rating.
                    </p>
                    <p className="mt-1.5 text-xs text-slate-300">
                      Tap below to post your review on Google—it helps local
                      customers find us!
                    </p>
                    <a
                      href="#funnel-demo"
                      onClick={(e) => e.preventDefault()}
                      className="mt-4 inline-block w-full rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-bold text-slate-950 transition hover:bg-emerald-400"
                    >
                      Continue to Google Review →
                    </a>
                  </div>
                ) : (
                  <form
                    onSubmit={handlePrivateFeedback}
                    className="rounded-2xl border border-amber-500/30 bg-amber-500/10 p-5"
                  >
                    <p className="text-sm font-semibold text-amber-300">
                      We want to make this right.
                    </p>
                    <p className="mt-1 text-xs text-slate-300">
                      Tell our management team directly what went wrong so we
                      can resolve it today:
                    </p>

                    {feedbackSubmitted ? (
                      <div className="mt-4 rounded-xl bg-slate-950/70 p-3.5 text-xs text-emerald-300">
                        ✓ Private alert sent to owner dashboard. Thank you for
                        helping us improve!
                      </div>
                    ) : (
                      <>
                        <textarea
                          rows={3}
                          value={privateNote}
                          onChange={(e) => setPrivateNote(e.target.value)}
                          placeholder="Share details with the owner..."
                          className="mt-3 w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-xs text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                        />
                        <button
                          type="submit"
                          className="mt-3 w-full rounded-xl bg-amber-400 px-4 py-2.5 text-xs font-bold text-slate-950 transition hover:bg-amber-300"
                        >
                          Send Private Feedback to Manager
                        </button>
                      </>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="border-b border-slate-800/70 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                Simple 3-Step Workflow
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
                Built for busy crews and front-desk teams
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {HOW_IT_WORKS.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/15 text-sm font-extrabold text-sky-400">
                    {item.step}
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SMS Message Customizer */}
        <section id="sms-preview" className="border-b border-slate-800/70 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                Twilio-Powered SMS Invites
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white">
                Customize your automated text message
              </h2>
              <p className="mt-3 text-slate-400">
                Personalize your business and customer names to see how crisp
                and natural your review text looks on mobile.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Business Name
                  </label>
                  <input
                    type="text"
                    value={bizName}
                    onChange={(e) => {
                      setBizName(e.target.value);
                      setSmsQueued(false);
                    }}
                    className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white focus:border-sky-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Customer First Name
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => {
                      setCustomerName(e.target.value);
                      setSmsQueued(false);
                    }}
                    className="mt-1.5 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-sm text-white focus:border-sky-500 focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSmsQueued(true)}
                className="mt-5 rounded-xl bg-sky-500 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-400"
              >
                Simulate Test SMS Dispatch
              </button>
            </div>

            <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-semibold text-slate-400">
                  Messages • Now
                </span>
                <span className="rounded-full bg-sky-500/15 px-2.5 py-0.5 text-xs font-medium text-sky-400">
                  SMS Preview
                </span>
              </div>

              <div className="mt-5 rounded-2xl rounded-tl-sm bg-slate-800 p-4 text-sm leading-relaxed text-slate-200">
                Hi {customerName.trim() || "there"}! Thanks for choosing{" "}
                <strong className="text-white">
                  {bizName.trim() || "NorthSky Exteriors"}
                </strong>
                . Mind rating your experience today? It takes 15 seconds:
                <span className="mt-2 block font-medium text-sky-400 underline">
                  https://northsky-reviews.vercel.app/r/{" "}
                  {(bizName.trim() || "northsky")
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, "-")}
                </span>
              </div>

              {smsQueued && (
                <p className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs text-emerald-300">
                  ✓ Simulated SMS payload ready for{" "}
                  <code>POST /api/send-review</code>.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="border-b border-slate-800/70 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center text-3xl font-bold tracking-tight text-white">
              Local businesses winning with NorthSky Reviews
            </h2>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {CLIENT_RESULTS.map((item) => (
                <article
                  key={item.name}
                  className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
                >
                  <div>
                    <p className="text-sm tracking-wider text-amber-400">
                      ★★★★★
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-300">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                  </div>
                  <div className="mt-6 border-t border-slate-800 pt-4">
                    <p className="text-sm font-bold text-white">{item.name}</p>
                    <p className="text-xs text-slate-400">
                      {item.company} • {item.location}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                Straightforward monthly plans
              </h2>
              <p className="mt-2 text-slate-400">
                14-day free trial included. No contracts.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
                <h3 className="text-lg font-bold text-white">Starter</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Ideal for single-truck operators &amp; local shops.
                </p>
                <p className="mt-6 text-4xl font-extrabold text-white">
                  $49
                  <span className="text-base font-normal text-slate-400">
                    /mo
                  </span>
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  <li>✓ 300 SMS &amp; email review requests / mo</li>
                  <li>✓ Google Business Profile direct link</li>
                  <li>✓ 1–3 star private feedback filter</li>
                  <li>✓ Instant email &amp; dashboard alerts</li>
                </ul>
                <a
                  href="/signup?plan=starter"
                  className="mt-8 block w-full rounded-xl border border-slate-700 bg-slate-800 py-3 text-center text-sm font-bold text-white transition hover:bg-slate-700"
                >
                  Start Free Trial
                </a>
              </div>

              <div className="rounded-2xl border border-sky-500/50 bg-slate-900 p-8 shadow-xl shadow-sky-500/10">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">Growth</h3>
                  <span className="rounded-full bg-sky-500/15 px-3 py-0.5 text-xs font-bold text-sky-400">
                    Most Popular
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-400">
                  For growing service fleets &amp; multi-location brands.
                </p>
                <p className="mt-6 text-4xl font-extrabold text-white">
                  $99
                  <span className="text-base font-normal text-slate-400">
                    /mo
                  </span>
                </p>
                <ul className="mt-6 space-y-3 text-sm text-slate-300">
                  <li>✓ Unlimited review invites &amp; automated reminders</li>
                  <li>✓ Multi-location &amp; technician leaderboard</li>
                  <li>✓ Embeddable 5-star website review widget</li>
                  <li>✓ Priority Twilio &amp; webhook support</li>
                </ul>
                <a
                  href="/signup?plan=growth"
                  className="mt-8 block w-full rounded-xl bg-sky-500 py-3 text-center text-sm font-bold text-slate-950 transition hover:bg-sky-400"
                >
                  Start Free Trial
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} NorthSky Reviews. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="transition hover:text-white">
              Privacy
            </a>
            <a href="/terms" className="transition hover:text-white">
              Terms
            </a>
            <a href="/login" className="transition hover:text-white">
              Client Login
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
