import type { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {

  title:
    "Technology Reviews 2026 | VPNs, AI Tools, Travel Tech & Software",

  description:
    "Read independent technology reviews covering VPNs, AI tools, travel technology, software, and digital products.",

  keywords: [
    "technology reviews",
    "VPN reviews",
    "NordVPN review",
    "Saily eSIM review",
    "AI tool reviews",
    "software reviews",
  ],

};



const reviews = [

{
title:
"NordVPN Review 2026",

category:
"VPN",

description:
"Complete review covering NordVPN security, speed, privacy features, and value.",

link:
"/reviews/nordvpn"

},


{
title:
"Saily eSIM Review 2026",

category:
"Travel Tech",

description:
"Review of Saily eSIM features, setup, coverage, and international travel performance.",

link:
"/reviews/saily"

},


{
title:
"Best VPNs in Canada 2026",

category:
"Comparison",

description:
"Compare leading VPN providers for Canadian users based on security, speed, and value.",

link:
"/comparisons/best-vpns-canada"

},


{
title:
"NordVPN vs ExpressVPN 2026",

category:
"Comparison",

description:
"See how two leading VPN providers compare across features, privacy, and performance.",

link:
"/comparisons/nordvpn-vs-expressvpn"

},


{
title:
"Best eSIMs in Canada 2026",

category:
"Travel",

description:
"Find the best travel eSIM options for affordable international connectivity.",

link:
"/travel/best-esim-canada"

},


{
title:
"Best AI Tools 2026",

category:
"Artificial Intelligence",

description:
"Discover the top AI tools for productivity, business, and creativity.",

link:
"/ai/best-ai-tools-2026"

}

];



export default function ReviewsPage(){


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
"NorthSky Reviews",

"description":
"Technology reviews, comparisons, and buying guides."

})
}}
/>







<section className="bg-slate-950 px-6 py-24 text-center text-white">


<h1 className="text-5xl font-black md:text-6xl">

NorthSky Reviews

</h1>


<p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">

Independent reviews and comparisons helping
you make smarter technology decisions.

</p>


</section>







<section className="mx-auto max-w-7xl px-6 py-20">


<h2 className="mb-10 text-4xl font-bold">

Latest Reviews & Comparisons

</h2>



<div className="grid gap-8 md:grid-cols-3">


{reviews.map((review)=>(


<Link
key={review.title}
href={review.link}
className="rounded-2xl border p-8 transition hover:-translate-y-2 hover:shadow-lg"
>


<p className="text-sm font-bold text-blue-600">

{review.category}

</p>


<h3 className="mt-3 text-2xl font-bold">

{review.title}

</h3>


<p className="mt-5 text-slate-600">

{review.description}

</p>


<span className="mt-6 block font-bold text-blue-600">

Read Review →

</span>


</Link>


))}


</div>


</section>







<section className="bg-slate-50 px-6 py-20">


<div className="mx-auto max-w-5xl">


<h2 className="text-4xl font-bold">

How We Review Products

</h2>



<p className="mt-6 text-lg text-slate-600">

NorthSky Reviews evaluates technology products
based on features, performance, usability,
security, pricing, and overall value.

</p>



<div className="mt-10 grid gap-6 md:grid-cols-3">


<div className="rounded-xl bg-white border p-6">

<h3 className="font-bold">
Research
</h3>

<p className="mt-3 text-slate-600">

We analyze products and compare alternatives.

</p>

</div>



<div className="rounded-xl bg-white border p-6">

<h3 className="font-bold">
Testing
</h3>

<p className="mt-3 text-slate-600">

We focus on real-world usability and features.

</p>

</div>



<div className="rounded-xl bg-white border p-6">

<h3 className="font-bold">
Recommendations
</h3>

<p className="mt-3 text-slate-600">

We highlight products that provide strong value.

</p>

</div>


</div>


</div>


</section>







<section className="bg-blue-600 px-6 py-20 text-center text-white">


<h2 className="text-4xl font-bold">

Find The Right Technology

</h2>


<p className="mt-5 text-lg">

Explore our guides, comparisons, and recommendations.

</p>



<Link
href="/deals"
className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-600"
>

View Deals →

</Link>


</section>




</main>

);

}