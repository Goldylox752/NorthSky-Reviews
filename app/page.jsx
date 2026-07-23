import Head from "next/head";
import { useEffect, useState } from "react";

function useCountUp(target, durationMs = 1200) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let start;
    let frame;
    const tick = (t) => {
      if (start === undefined) start = t;
      const progress = Math.min((t - start) / durationMs, 1);
      setValue(target * progress);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, durationMs]);
  return value;
}

const vpns = [
  {
    name: "NordVPN",
    tag: "BEST OVERALL",
    servers: "6,400+",
    unblock: "Netflix, Hulu",
    speedLoss: 12,
    price: "$3.09",
    rating: 9.7,
    href: "/reviews/nordvpn",
  },
  {
    name: "ExpressVPN",
    tag: "MOST CONSISTENT",
    servers: "3,000+",
    unblock: "Netflix, BBC",
    speedLoss: 18,
    price: "$6.67",
    rating: 9.4,
    href: "/reviews/expressvpn",
  },
  {
    name: "Surfshark",
    tag: "BEST VALUE",
    servers: "3,200+",
    unblock: "Disney+, HBO",
    speedLoss: 15,
    price: "$2.19",
    rating: 9.1,
    href: "/reviews/surfshark",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const speedLoss = useCountUp(12);
  const serverCount = useCountUp(6400);
  const testedCount = useCountUp(24);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Subscribe failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <Head>
        <title>NorthSky Reviews – Independent VPN, eSIM & AI Tool Tests 2026</title>
        <meta
          name="description"
          content="Hands-on reviews of the best VPNs, eSIMs, and AI tools. We buy every subscription and publish the raw speed, latency, and unblock numbers."
        />
        <link rel="canonical" href="https://www.northskyreviews.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NorthSky Reviews – Independent VPN, eSIM & AI Tool Tests 2026" />
        <meta
          property="og:description"
          content="Hands-on reviews of the best VPNs, eSIMs, and AI tools. Raw numbers, no sponsored placements."
        />
        <meta property="og:url" content="https://www.northskyreviews.com/" />
        <meta property="og:image" content="https://www.northskyreviews.com/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/*
          WebSite schema, not Product/AggregateRating — this is a listing page,
          not a single reviewed product. Per-product Review/AggregateRating
          markup lives on each /reviews/[product] page instead, tied to the
          actual review content there.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              name: "NorthSky Reviews",
              url: "https://www.northskyreviews.com/",
              description:
                "Independent, hands-on reviews of VPNs, eSIMs, and AI tools.",
            }),
          }}
        />
      </Head>

      <div
        className="min-h-screen bg-[#0B1220] text-[#E7ECF3]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <main className="max-w-6xl mx-auto px-4">
          {/* ===== HERO: live-readout diagnostics panel ===== */}
          <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center py-16 md:py-24 border-b border-white/10">
            <div>
              <p
                className="text-[13px] tracking-[0.2em] text-[#5EEAD4] uppercase"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                Field tests · updated July 2026
              </p>
              <h1
                className="text-4xl md:text-6xl font-bold tracking-tight mt-4 leading-[1.05]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Every rating here
                <br />
                survived a stopwatch.
              </h1>
              <p className="text-[#8A96AC] text-lg max-w-xl mt-5">
                No sponsored placements, no vendor-supplied scores. We buy each
                subscription ourselves, run it under load for two weeks, and
                publish the raw numbers before we publish an opinion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="/reviews/nordvpn"
                  className="bg-[#5EEAD4] hover:bg-[#7EF3E1] text-[#0B1220] font-semibold px-7 py-3 rounded-lg transition"
                >
                  Read the VPN comparison
                </a>
                <a
                  href="/reviews/best-esim"
                  className="border border-white/20 hover:border-white/40 text-[#E7ECF3] font-semibold px-7 py-3 rounded-lg transition"
                >
                  Best eSIMs 2026
                </a>
              </div>
            </div>

            {/* Sample readout card — a real captured test, animated once on load */}
            <div className="bg-[#121B2E] border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between">
                <p
                  className="text-xs tracking-widest text-[#8A96AC] uppercase"
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  Sample capture · NordVPN · London node
                </p>
                <span className="w-2 h-2 rounded-full bg-[#5EEAD4]" />
              </div>
              <dl
                className="grid grid-cols-2 gap-6 mt-6"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                <div>
                  <dt className="text-[#8A96AC] text-xs uppercase">Speed loss</dt>
                  <dd className="text-3xl font-medium mt-1">
                    {speedLoss.toFixed(0)}%
                  </dd>
                </div>
                <div>
                  <dt className="text-[#8A96AC] text-xs uppercase">Servers tested</dt>
                  <dd className="text-3xl font-medium mt-1">
                    {Math.round(serverCount).toLocaleString()}+
                  </dd>
                </div>
                <div>
                  <dt className="text-[#8A96AC] text-xs uppercase">Products tested</dt>
                  <dd className="text-3xl font-medium mt-1">
                    {Math.round(testedCount)}
                  </dd>
                </div>
                <div>
                  <dt className="text-[#8A96AC] text-xs uppercase">Streaming blocks</dt>
                  <dd className="text-3xl font-medium mt-1 text-[#5EEAD4]">0</dd>
                </div>
              </dl>
            </div>
          </section>

          {/* ===== COMPARISON: terminal-style table ===== */}
          <section className="py-16 border-b border-white/10">
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Top 3 VPNs, side by side
            </h2>
            <p className="text-[#8A96AC] mt-2 mb-8">
              Same connection, same five nodes, same two weeks.
            </p>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table
                className="w-full text-sm"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                <thead className="bg-white/[0.04] text-[#8A96AC] uppercase text-xs tracking-wider">
                  <tr>
                    <th className="p-4 text-left">Metric</th>
                    {vpns.map((v) => (
                      <th key={v.name} className="p-4 text-center">
                        {v.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="p-4 text-[#8A96AC]">Servers</td>
                    {vpns.map((v) => (
                      <td key={v.name} className="p-4 text-center">
                        {v.servers}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-white/[0.02]">
                    <td className="p-4 text-[#8A96AC]">Unblocks</td>
                    {vpns.map((v) => (
                      <td key={v.name} className="p-4 text-center text-[#5EEAD4]">
                        {v.unblock}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 text-[#8A96AC]">Speed loss</td>
                    {vpns.map((v) => (
                      <td key={v.name} className="p-4 text-center font-medium">
                        {v.speedLoss}%
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-white/[0.02]">
                    <td className="p-4 text-[#8A96AC]">Best price / mo</td>
                    {vpns.map((v) => (
                      <td key={v.name} className="p-4 text-center font-medium">
                        {v.price}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-4 text-[#8A96AC]">Rating</td>
                    {vpns.map((v) => (
                      <td key={v.name} className="p-4 text-center font-bold text-[#5EEAD4]">
                        {v.rating}
                      </td>
                    ))}
                  </tr>
                  <tr className="bg-white/[0.02]">
                    <td className="p-4 text-[#8A96AC]">Full review</td>
                    {vpns.map((v) => (
                      <td key={v.name} className="p-4 text-center">
                        <a
                          href={v.href}
                          className="inline-block bg-[#5EEAD4] text-[#0B1220] px-4 py-2 rounded-lg text-xs font-bold"
                        >
                          Read →
                        </a>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-[#8A96AC] mt-3 text-center">
              *Affiliate links support our testing at no extra cost to you.
            </p>
          </section>

          {/* ===== FEATURED REVIEWS ===== */}
          <section className="py-16 border-b border-white/10">
            <h2
              className="text-3xl font-bold mb-8"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Featured reviews
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {vpns.map((v) => (
                <div
                  key={v.name}
                  className="border border-white/10 rounded-xl p-5 bg-[#121B2E] hover:border-[#5EEAD4]/50 transition"
                >
                  <span
                    className="text-[10px] tracking-widest uppercase text-[#5EEAD4]"
                    style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    {v.tag}
                  </span>
                  <h3
                    className="text-xl font-bold mt-3"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {v.name}
                  </h3>
                  <p className="text-sm text-[#8A96AC] mt-1">
                    {v.speedLoss}% speed loss · {v.unblock}
                  </p>
                  <div
                    className="mt-3 text-sm text-[#5EEAD4]"
                    style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    {v.rating} / 10
                  </div>
                  <a
                    href={v.href}
                    className="block text-center mt-4 border border-white/20 hover:border-[#5EEAD4] py-2 rounded-lg font-medium text-sm transition"
                  >
                    Read full review
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* ===== AUTHOR: operator card ===== */}
          <section className="py-16 border-b border-white/10">
            <div className="flex flex-col md:flex-row items-center gap-6 bg-[#121B2E] border border-white/10 p-6 rounded-2xl">
              <div className="w-20 h-20 bg-[#5EEAD4]/15 border border-[#5EEAD4]/40 rounded-full flex items-center justify-center text-2xl font-bold text-[#5EEAD4]">
                AN
              </div>
              <div>
                <h3
                  className="font-bold text-lg"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Alex North, tester
                </h3>
                <p className="text-sm text-[#8A96AC] mt-1">
                  Cybersecurity nerd and digital nomad. I personally buy and
                  test every product for two weeks before writing a review. No
                  vendor ever pays for a rating.
                </p>
                <div
                  className="flex gap-4 mt-3 text-xs text-[#8A96AC]"
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  <span>Updated Jul 22, 2026</span>
                  <span>{Math.round(testedCount)} products tested this year</span>
                </div>
              </div>
            </div>
          </section>

          {/* ===== NEWSLETTER ===== */}
          <section className="text-center py-16">
            <h3
              className="text-2xl font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Subscribe to the transmission
            </h3>
            <p className="text-[#8A96AC] text-sm mt-1">
              No spam. One honest test report, every Wednesday.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto mt-5"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                className="border border-white/20 bg-[#121B2E] p-3 rounded-lg flex-1 text-[#E7ECF3] placeholder:text-[#8A96AC] focus:outline-none focus:border-[#5EEAD4]"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-[#5EEAD4] text-[#0B1220] px-6 py-3 rounded-lg font-semibold hover:bg-[#7EF3E1] transition disabled:opacity-50"
              >
                {status === "loading" ? "Subscribing…" : "Subscribe →"}
              </button>
            </form>
            {status === "success" && (
              <p className="text-[#5EEAD4] text-sm mt-2">
                You're on the list — check your inbox to confirm.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm mt-2">
                Enter a valid email and try again.
              </p>
            )}
          </section>

          <footer className="text-center text-xs text-[#8A96AC] border-t border-white/10 pt-6 pb-10">
            <p>
              NorthSky Reviews © 2026 — Independent reviews with affiliate
              links. We may earn a commission.
            </p>
          </footer>
        </main>
      </div>
    </>
  );
}