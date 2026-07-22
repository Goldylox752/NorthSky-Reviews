import Link from "next/link";
import { travelTech } from "@/app/data/travelTech";


export const metadata = {

  title:
    "Travel Tech Reviews 2026 | Best Travel Gadgets & Technology",

  description:
    "NorthSky Travel Tech reviews the best travel gadgets, eSIMs, VPNs, chargers, accessories, and technology for modern travelers.",

  keywords:[
    "travel tech reviews",
    "best travel gadgets 2026",
    "travel accessories",
    "best eSIM",
    "travel VPN"
  ],

  alternates:{
    canonical:
    "https://northsky-reviews.vercel.app/travel-tech"
  }

};



export default function TravelTechPage(){


const featured =
[...travelTech]
.sort((a,b)=>b.rating-a.rating)
.slice(0,12);



return (

<main className="min-h-screen bg-white text-slate-900">



{/* SCHEMA */}

<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify({

"@context":"https://schema.org",

"@type":"CollectionPage",

"name":"NorthSky Travel Tech Reviews",

"description":
"Travel technology reviews, gadgets, and buying guides.",

"url":
"https://northsky-reviews.vercel.app/travel-tech",

"mainEntity":{

"@type":"ItemList",

"itemListElement":

featured.map((item,index)=>({

"@type":"ListItem",

"position":index+1,

"name":item.name,

"url":
`https://northsky-reviews.vercel.app/reviews/${item.slug}`

}))

}

})

}}

/>





{/* HERO */}

<section className="bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-900 px-6 py-24 text-white">


<div className="mx-auto max-w-5xl text-center">


<div className="inline-flex rounded-full bg-cyan-500/20 px-5 py-2 text-sm font-bold text-cyan-300">

✈️ Travel Technology Reviews

</div>



<h1 className="mt-6 text-5xl font-black md:text-7xl">

Travel Tech Reviews

</h1>



<p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">

Discover the best travel gadgets, eSIMs,
VPNs, chargers, and smart technology
for your next adventure.

</p>




<div className="mt-10 flex flex-wrap justify-center gap-4">


<Link

href="/reviews"

className="rounded-xl bg-blue-600 px-8 py-4 font-bold"

>

All Reviews →

</Link>



<Link

href="/comparisons"

className="rounded-xl border border-white/30 px-8 py-4 font-bold"

>

Compare Travel Tech →

</Link>


</div>


</div>


</section>








{/* CATEGORIES */}

<section className="mx-auto max-w-7xl px-6 py-16">


<h2 className="text-4xl font-black">

Travel Technology Categories

</h2>



<div className="mt-8 grid gap-6 md:grid-cols-4">


{[

"eSIM & Mobile Data",

"Travel VPNs",

"Chargers & Power",

"Smart Accessories"

].map((item)=>(


<div

key={item}

className="rounded-2xl border p-6 font-bold hover:shadow-lg"

>

{item}

</div>


))}


</div>


</section>









{/* FEATURED PRODUCTS */}

<section className="bg-slate-50 px-6 py-20">


<div className="mx-auto max-w-7xl">


<h2 className="text-4xl font-black">

⭐ Featured Travel Tech Reviews

</h2>



<div className="mt-10 grid gap-8 md:grid-cols-3">


{featured.map((item)=>(


<Link

key={item.slug}

href={`/reviews/${item.slug}`}

className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"

>


<div className="flex justify-between">


<span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold text-cyan-700">

{item.category}

</span>



<span className="font-black text-green-600">

⭐ {item.rating}

</span>


</div>




<h3 className="mt-5 text-2xl font-black">

{item.name}

</h3>



<p className="mt-4 text-slate-600">

{item.description}

</p>



<span className="mt-6 block font-bold text-blue-600">

Read Review →

</span>



</Link>


))}


</div>


</div>


</section>








{/* BUYING GUIDE */}

<section className="px-6 py-20">


<div className="mx-auto max-w-5xl rounded-3xl bg-slate-950 p-12 text-center text-white">


<h2 className="text-3xl font-black">

Travel Tech Buying Guides

</h2>


<p className="mt-5 text-slate-300">

Find the best technology for international travel,
remote work, airports, hotels, and outdoor adventures.

</p>


<div className="mt-8 grid gap-4 md:grid-cols-3">


<Link
href="/comparisons"
className="rounded-xl bg-white/10 p-4 font-bold"
>

Best eSIMs →

</Link>


<Link
href="/comparisons"
className="rounded-xl bg-white/10 p-4 font-bold"
>

Best Travel VPNs →

</Link>


<Link
href="/comparisons"
className="rounded-xl bg-white/10 p-4 font-bold"
>

Best Chargers →

</Link>


</div>


</div>


</section>








{/* CTA */}

<section className="bg-blue-600 px-6 py-20 text-center text-white">


<h2 className="text-4xl font-black">

Travel Smarter With Better Technology

</h2>


<p className="mt-4">

NorthSky tests and compares travel technology
to help you buy with confidence.

</p>



<Link

href="/newsletter"

className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-600"

>

Join Newsletter →

</Link>


</section>







<footer className="px-6 py-8 text-center text-sm text-slate-500">

Disclosure: NorthSky Reviews may earn commissions from affiliate links.

</footer>



</main>

);

}