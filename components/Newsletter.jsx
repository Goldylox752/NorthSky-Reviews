import { useState } from "react";

export default function Newsletter({ variant = "inline" }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const response = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name }),
    });

    const data = await response.json();

    if (response.ok) {
      setStatus({ type: "success", message: data.message });
      setEmail("");
      setName("");
    } else {
      setStatus({ type: "error", message: data.error });
    }

    setLoading(false);
  }

  // Inline variant (used in blog posts)
  if (variant === "inline") {
    return (
      <div className="my-8 rounded-2xl bg-blue-50 p-6">
        <h3 className="text-lg font-bold">📬 Stay in the loop</h3>
        <p className="mt-1 text-sm text-slate-600">
          Get the latest reviews and deals straight to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 rounded-xl border px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            required
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-xl border px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-blue-600 px-6 py-2 text-sm font-bold text-white transition hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Subscribing..." : "Subscribe →"}
          </button>
        </form>
        {status.message && (
          <p
            className={`mt-3 text-sm ${
              status.type === "success" ? "text-green-700" : "text-red-700"
            }`}
          >
            {status.message}
          </p>
        )}
      </div>
    );
  }

  // Hero variant (for the homepage)
  return (
    <section className="bg-slate-900 px-6 py-16 text-center text-white">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold">📫 Join the NorthSky Newsletter</h2>
        <p className="mt-3 text-slate-400">
          Get exclusive deals, honest reviews, and travel tech tips – delivered weekly.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            required
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-blue-600 px-8 py-3 font-bold transition hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? "Joining..." : "Join Free →"}
          </button>
        </form>
        <p className="mt-3 text-sm text-slate-500">
          No spam. Unsubscribe anytime.
        </p>
        {status.message && (
          <p
            className={`mt-3 text-sm ${
              status.type === "success" ? "text-green-400" : "text-red-400"
            }`}
          >
            {status.message}
          </p>
        )}
      </div>
    </section>
  );
}
```

---

📁 4. Add Newsletter to Pages

Homepage (app/page.js)

```jsx
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <main>
      {/* ... existing hero and product grid ... */}
      
      <Newsletter variant="hero" />
      
      {/* ... rest of the page ... */}
    </main>
  );
}
```

Review Pages (e.g., Saily)

Add the inline newsletter at the end of your review:

```jsx
import Newsletter from "@/components/Newsletter";

export default function SailyReview() {
  return (
    <main>
      {/* ... review content ... */}
      
      <Newsletter variant="inline" />
      
      {/* ... rest of the page ... */}
    </main>
  );
}
```

---

📊 5. Admin Dashboard – View Subscribers

Create app/admin/subscribers/page.js (protect this route with authentication):

```jsx
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export default async function SubscribersPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  // Check if user is admin (optional: add a role check)
  const { data: subscribers } = await supabase
    .from("subscribers")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold">Subscribers ({subscribers?.length || 0})</h1>
      <div className="mt-8 overflow-hidden rounded-2xl border">
        <table className="w-full text-left">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Signed Up</th>
              <th className="px-6 py-3">Source</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {subscribers?.map((sub) => (
              <tr key={sub.id}>
                <td className="px-6 py-4">{sub.email}</td>
                <td className="px-6 py-4">{sub.name || "—"}</td>
                <td className="px-6 py-4">{new Date(sub.created_at).toLocaleDateString()}</td>
                <td className="px-6 py-4">{sub.source || "website"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
```

---

📤 6. Export Subscribers (CSV)

Add this to app/api/subscribers/export/route.js:

```js
import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { data: subscribers } = await supabase
    .from("subscribers")
    .select("email, name, created_at")
    .order("created_at", { ascending: false });

  // Build CSV
  const headers = ["Email", "Name", "Date Subscribed"];
  const rows = subscribers.map((s) => [
    s.email,
    s.name || "",
    new Date(s.created_at).toLocaleDateString(),
  ]);
  const csv = [headers.join(","), ...rows.map((r) => r.join(","))].join("\n");

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv",
      "Content-Disposition": 'attachment; filename="subscribers.csv"',
    },
  });
}