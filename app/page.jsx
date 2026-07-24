import Link from "next/link";

export const metadata = {
  title:
    "NorthSky Reviews | Best AI Tools, VPNs, Software & Technology Deals 2026",
  description:
    "Discover expert reviews, comparisons, and exclusive deals on AI tools, VPNs, software, hosting, travel technology, and business apps.",
};


const featuredDeals = [
  {
    name: "NordVPN",
    category: "VPN & Privacy",
    rating: "5/5",
    description:
      "Protect your online privacy with encrypted browsing, secure Wi-Fi protection, streaming support, and advanced security features.",
    link: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=",
    badge: "Editor's Choice",
  },
  {
    name: "NordPass",
    category: "Password Security",
    rating: "5/5",
    description:
      "Secure your digital life with password management, encrypted storage, and easy account protection.",
    link: "https://go.nordpass.io/aff_c?offer_id=488&aff_id=",
    badge: "Best Security Tool",
  },
  {
    name: "Saily",
    category: "Travel eSIM",
    rating: "4.5/5",
    description:
      "Stay connected worldwide with affordable mobile data plans without needing a physical SIM card.",
    link: "https://go.saily.site/aff_c?offer_id=101&aff_id=",
    badge: "Travel Pick",
  },
];


export default function HomePage() {
return (

<main>


{/* HERO */}

<section className="bg-gradient-to-br from-slate-950 via-blue-950 to-blue-700 text-white">

<div className="mx-auto max-w-7xl px-6 py-24">

<span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold">
⭐ Trusted Reviews • Comparisons • Deals
</span>


<h1 className="mt-8 max-w-5xl text-5xl font-extrabold md:text-6xl">
Find The Best
<span className="text-blue-400"> AI Tools, </span>
Software & Technology
</h1>


<p className="mt-8 max-w-3xl text-xl text-slate-300">
NorthSky Reviews helps you discover the best software, VPNs, AI tools,
hosting providers, travel technology, and business platforms through
expert reviews and detailed comparisons.
</p>


<div className="mt-10 flex flex-wrap gap-4">


<Link
href="/reviews"
className="rounded-xl bg-blue-600 px-8 py-4 font-bold hover:bg-blue-700"
>
Browse Reviews
</Link>


<Link
href="/deals"
className="rounded-xl border border-white/30 px-8 py-4 font-bold hover:bg-white/10"
>
View Deals
</Link>


</div>


<div className="mt-12 grid gap-4 md:grid-cols-4 text-sm">

<div>✓ Expert Research</div>
<div>✓ Honest Comparisons</div>
<div>✓ Updated 2026 Rankings</div>
<div>✓ Exclusive Offers</div>

</div>


</div>

</section>



{/* FEATURED DEALS */}


<section className="bg-slate-50 py-24">

<div className="mx-auto max-w-7xl px-6">


<div className="text-center">

<h2 className="text-4xl font-bold text-slate-900">
Featured Technology Deals
</h2>


<p className="mt-4 text-lg text-slate-600">
Our top recommended products for privacy, travel, and productivity.
</p>

</div>



<div className="mt-14 grid gap-8 md:grid-cols-3">


{featuredDeals.map((deal)=>(

<div
key={deal.name}
className="rounded-3xl bg-white p-8 shadow-lg border"
>


<span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
{deal.badge}
</span>


<h3 className="mt-6 text-3xl font-bold">
{deal.name}
</h3>


<p className="mt-2 text-blue-600 font-semibold">
{deal.category}
</p>


<p className="mt-5 text-yellow-500 font-bold">
★★★★★ {deal.rating}
</p>


<p className="mt-5 text-slate-600">
{deal.description}
</p>


<a
href={deal.link}
target="_blank"
rel="nofollow sponsored noopener noreferrer"
className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-bold text-white"
>
Get Deal →
</a>


</div>


))}


</div>

</div>

</section>



{/* CATEGORIES */}


<section className="py-24">

<div className="mx-auto max-w-7xl px-6">


<h2 className="text-center text-4xl font-bold">
Explore Categories
</h2>



<div className="mt-12 grid gap-6 md:grid-cols-3">


{[
["🤖 AI Tools","/category/ai"],
["🔒 VPN & Security","/category/vpn"],
["☁️ Hosting","/category/hosting"],
["💼 Business Software","/category/business"],
["📱 Travel Technology","/category/travel"],
["🔥 Best Deals","/deals"]
].map(([title,url])=>(


<Link
key={title}
href={url}
className="rounded-2xl border bg-white p-8 text-xl font-bold hover:border-blue-600 hover:shadow-xl"
>

{title}

</Link>


))}


</div>


</div>

</section>




{/* COMPARISONS */}


<section className="bg-slate-900 py-24 text-white">


<div className="mx-auto max-w-7xl px-6 text-center">


<h2 className="text-4xl font-bold">
Compare Before You Buy
</h2>


<p className="mt-5 text-slate-300 text-lg">
Side-by-side comparisons of the world's top software and technology tools.
</p>


<div className="mt-10 flex flex-wrap justify-center gap-5">


<Link
href="/comparisons/nordvpn-vs-surfshark"
className="rounded-xl bg-white px-6 py-3 text-slate-900 font-bold"
>
VPN Comparisons
</Link>


<Link
href="/comparisons"
className="rounded-xl bg-blue-600 px-6 py-3 font-bold"
>
All Comparisons
</Link>


</div>


</div>


</section>




{/* DISCLOSURE */}


<section className="py-10 border-t">

<div className="mx-auto max-w-4xl px-6 text-center text-sm text-slate-500">

NorthSky Reviews participates in affiliate programs. We may earn a commission
when you purchase through our links at no additional cost to you. Our reviews
are based on product research, features, pricing, and value.

</div>

</section>



</main>

);
}