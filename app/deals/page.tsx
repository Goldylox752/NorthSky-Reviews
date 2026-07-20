import type { Metadata } from "next";


export const metadata: Metadata = {

  title:
    "Best Tech Deals 2026 | VPNs, eSIMs, AI Tools & Software Offers",

  description:
    "Find the best technology deals, discounts, and recommendations from NorthSky Reviews including VPNs, travel eSIMs, AI tools, and software.",

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
"Protect your online privacy with one of the leading VPN services.",

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
"Stay connected while traveling with affordable international mobile data.",

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
"Discover powerful AI software for productivity, business, and creativity.",

button:
"Explore AI Tools",

link:
"/ai/best-ai-tools-2026"

}

];



export default function DealsPage(){


return (

<main className="bg-white text-slate-900">



{/* Schema */}

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
"Technology deals and recommended products from NorthSky Reviews."

})
}}
/>







<section className="bg-slate-950 px-6 py-24 text-center text-white">


<h1 className="text-5xl font-black md:text-6xl">

Best Tech Deals 2026

</h1>


<p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">

Save time finding trusted technology
offers, discounts, and recommended tools.

</p>


</section>








<section className="mx-auto max-w-6xl px-6 py-20">


<h2 className="mb-10 text-4xl font-bold">

Featured Deals

</h2>



<div className="grid gap-8 md:grid-cols-3">


{deals.map((deal)=>(


<div
key={deal.title}
className="rounded-2xl border p-8 shadow-sm"
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
rel="nofollow sponsored"
className="mt-8 block rounded-xl bg-blue-600 px-5 py-4 text-center font-bold text-white"
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


<div className="rounded-xl bg-white border p-6">

<h3 className="font-bold">

Independent Research

</h3>

<p className="mt-3 text-slate-600">

We compare features, usability, and value.

</p>

</div>




<div className="rounded-xl bg-white border p-6">

<h3 className="font-bold">

Updated Recommendations

</h3>

<p className="mt-3 text-slate-600">

Technology changes quickly. We update our guides.

</p>

</div>




<div className="rounded-xl bg-white border p-6">

<h3 className="font-bold">

Affiliate Transparency

</h3>

<p className="mt-3 text-slate-600">

Some links may earn us a commission at no extra cost.

</p>

</div>


</div>


</div>


</section>







<section className="bg-blue-600 px-6 py-20 text-center text-white">


<h2 className="text-4xl font-bold">

Explore More Reviews

</h2>


<p className="mt-5 text-lg">

Find detailed comparisons before buying.

</p>



<a
href="/reviews"
className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-600"
>

Read Reviews →

</a>


</section>




</main>

);

}