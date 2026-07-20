import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {

  title:
    "Best Tech Deals 2026 | VPNs, eSIMs, AI Tools & Software Offers",

  description:
    "Find trusted technology deals, discounts, and recommendations from NorthSky Reviews including VPNs, travel eSIMs, AI tools, and software.",

  keywords: [
    "tech deals 2026",
    "VPN deals",
    "NordVPN deal",
    "Saily eSIM deal",
    "AI software deals",
    "technology discounts",
  ],

};



const deals = [

{
title:
"NordVPN",

category:
"Privacy & Security",

description:
"Protect your online privacy with advanced security features, fast speeds, and reliable VPN protection.",

button:
"Get NordVPN Deal",

link:
"https://go.nordvpn.net/aff_c?offer_id=725&aff_id=143955"

},


{
title:
"Saily eSIM",

category:
"Travel Technology",

description:
"Stay connected worldwide with affordable mobile data plans designed for travelers.",

button:
"Get Saily eSIM",

link:
"https://go.saily.site/aff_c?offer_id=101&aff_id=13276"

},


{
title:
"AI Tools",

category:
"Artificial Intelligence",

description:
"Discover AI software for productivity, automation, business, and creative workflows.",

button:
"Explore AI Tools",

link:
"/ai/best-ai-tools-2026"

}

];





export default function DealsPage(){


return (

<main className="bg-white text-slate-900">



{/* SEO Schema */}

<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html: JSON.stringify({

"@context":
"https://schema.org",

"@type":
"CollectionPage",

"name":
"NorthSky Reviews Deals",

"description":
"Technology deals and recommended products from NorthSky Reviews.",


"mainEntity":

{

"@type":
"ItemList",

"itemListElement":

deals.map((deal,index)=>({

"@type":
"ListItem",

"position":
index + 1,

"name":
deal.title

}))

}

})

}}

/>







<section className="bg-slate-950 px-6 py-24 text-center text-white">


<h1 className="text-5xl font-black md:text-6xl">

Best Tech Deals 2026

</h1>


<p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">

Save money on trusted technology products,
software, and digital services recommended
by NorthSky Reviews.

</p>


</section>








<section className="mx-auto max-w-6xl px-6 py-20">


<h2 className="mb-10 text-4xl font-bold">

Featured Technology Deals

</h2>



<div className="grid gap-8 md:grid-cols-3">


{deals.map((deal)=>(


<div

key={deal.title}

className="rounded-2xl border p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"

>


<p className="text-sm font-bold text-blue-600">

{deal.category}

</p>



<h2 className="mt-3 text-3xl font-bold">

{deal.title}

</h2>



<p className="mt-5 text-slate-600">

{deal.description}

</p>




<a

href={deal.link}

target={deal.link.startsWith("http") ? "_blank" : undefined}

rel={deal.link.startsWith("http") ? "nofollow sponsored noopener noreferrer" : undefined}

aria-label={`${deal.button} for ${deal.title}`}

className="mt-8 block rounded-xl bg-blue-600 px-5 py-4 text-center font-bold text-white transition hover:bg-blue-700"

>

{deal.button}

</a>


</div>


))}


</div>


</section>








<section className="bg-slate-50 px-6 py-20">


<div className="mx-auto max-w-5xl">


<h2 className="text-4xl font-bold">

Why Trust NorthSky Deals?

</h2>


<div className="mt-8 grid gap-6 md:grid-cols-3">


<div className="rounded-xl border bg-white p-6">

<h3 className="font-bold">
Independent Research
</h3>

<p className="mt-3 text-slate-600">

We compare features, pricing,
security, and overall value.

</p>

</div>




<div className="rounded-xl border bg-white p-6">

<h3 className="font-bold">
Updated Guides
</h3>

<p className="mt-3 text-slate-600">

We keep recommendations updated as
technology changes.

</p>

</div>




<div className="rounded-xl border bg-white p-6">

<h3 className="font-bold">
Affiliate Transparency
</h3>

<p className="mt-3 text-slate-600">

Some links are affiliate links and may
earn us a commission at no extra cost.

</p>

</div>


</div>


</div>


</section>







<section className="bg-blue-600 px-6 py-20 text-center text-white">


<h2 className="text-4xl font-bold">

Compare Before You Buy

</h2>


<p className="mt-5 text-lg">

Read our detailed reviews and comparison guides.

</p>



<Link

href="/reviews"

className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-600"

>

Read Reviews →

</Link>


</section>




</main>

);

}