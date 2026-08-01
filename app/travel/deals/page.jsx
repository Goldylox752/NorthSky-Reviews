import Link from "next/link";
import Script from "next/script";

const siteUrl = "https://northsky-reviews.vercel.app";

export const metadata = {
  title:
    "Best Travel Deals 2026 | Flights, Hotels, eSIMs & Travel Discounts | NorthSky Reviews",

  description:
    "Find the best travel deals in 2026 including flight discounts, hotel offers, eSIM promotions, VPN deals, travel apps, and technology savings.",

  keywords: [
    "best travel deals 2026",
    "cheap flights",
    "hotel discounts",
    "travel esim deals",
    "vpn deals",
    "travel technology deals",
    "airport transfer deals",
    "travel discounts"
  ],

  alternates: {
    canonical: `${siteUrl}/travel/deals`
  }
};


export default function TravelDealsPage() {

const deals = [

{
icon:"✈️",
title:"Flight Deals",
category:"Flights",
description:
"Discover flight savings, booking strategies, and tools to find cheaper airfare.",
link:"/travel/flights"
},

{
icon:"🏨",
title:"Hotel Discounts",
category:"Hotels",
description:
"Compare hotel deals, accommodation platforms, rewards programs, and promotions.",
link:"/travel/hotels"
},

{
icon:"📱",
title:"Travel eSIM Deals",
category:"Connectivity",
description:
"Save on international mobile data with affordable eSIM providers.",
link:"/travel/esim"
},

{
icon:"🔒",
title:"VPN Travel Offers",
category:"Security",
description:
"Protect your connection while traveling with privacy tools and VPN discounts.",
link:"/category/vpn"
},

{
icon:"🎒",
title:"Travel Gear Deals",
category:"Technology",
description:
"Find chargers, adapters, smart luggage, and essential travel accessories.",
link:"/travel/gear"
},

{
icon:"🌎",
title:"Tours & Experiences",
category:"Activities",
description:
"Discover discounts on attractions, activities, and travel experiences.",
link:"/travel"
}

];


return (

<main className="min-h-screen bg-white text-slate-900">


<section className="
bg-gradient-to-br
from-sky-950
via-blue-700
to-cyan-500
px-6
py-32
text-white
">

<div className="
mx-auto
max-w-7xl
">


<span className="
rounded-full
bg-white/20
px-5
py-2
font-bold
">

🔥 Travel Deals Marketplace

</span>


<h1 className="
mt-8
text-5xl
font-black
md:text-7xl
">

Best Travel Deals
<span className="text-cyan-300">
 {" "}2026
</span>

</h1>


<p className="
mt-8
max-w-4xl
text-xl
leading-9
text-blue-100
">

Save money on your next adventure with
curated flight deals, hotel discounts,
travel eSIM offers, VPN promotions,
and technology recommendations.

</p>


<div className="
mt-10
flex
flex-wrap
gap-5
">

<Link
href="/travel"
className="
rounded-xl
bg-white
px-8
py-4
font-black
text-blue-700
"
>
Explore Travel Hub →
</Link>


<Link
href="/deals"
className="
rounded-xl
border
border-white/40
px-8
py-4
font-black
"
>
All Deals →
</Link>


</div>


</div>

</section>



<section className="px-6 py-24">

<div className="
mx-auto
max-w-7xl
">


<h2 className="
text-center
text-4xl
font-black
">

Latest Travel Savings

</h2>


<div className="
mt-14
grid
gap-8
md:grid-cols-3
">

{deals.map((deal)=>(

<Link
key={deal.title}
href={deal.link}
className="
rounded-3xl
border
p-8
transition
hover:-translate-y-2
hover:shadow-xl
"
>


<div className="text-5xl">
{deal.icon}
</div>


<h3 className="
mt-6
text-2xl
font-black
">

{deal.title}

</h3>


<p className="
mt-2
font-bold
text-blue-600
">

{deal.category}

</p>


<p className="
mt-5
leading-7
text-slate-600
">

{deal.description}

</p>


<div className="
mt-6
font-black
text-blue-600
">

View Deals →

</div>


</Link>

))}

</div>

</div>

</section>




<section className="
bg-slate-950
px-6
py-24
text-white
">

<div className="
mx-auto
max-w-5xl
text-center
">


<h2 className="
text-4xl
font-black
">

Why Use NorthSky Travel Deals?

</h2>


<p className="
mt-6
text-lg
text-slate-300
">

We research travel services based on pricing,
features, reliability, security, and overall value
to help travelers make smarter decisions.

</p>


<div className="
mt-12
grid
gap-6
md:grid-cols-3
">


<div className="
rounded-3xl
bg-white/10
p-8
">

<h3 className="text-3xl">
💰
</h3>

<p className="mt-4 font-bold">
Save Money
</p>

</div>


<div className="
rounded-3xl
bg-white/10
p-8
">

<h3 className="text-3xl">
🌎
</h3>

<p className="mt-4 font-bold">
Global Travel
</p>

</div>


<div className="
rounded-3xl
bg-white/10
p-8
">

<h3 className="text-3xl">
🔎
</h3>

<p className="mt-4 font-bold">
Trusted Reviews
</p>

</div>


</div>

</div>

</section>




<section className="
px-6
py-16
border-t
">

<div className="
mx-auto
max-w-4xl
text-center
text-sm
text-slate-500
">

NorthSky Reviews may earn commissions from
affiliate partnerships. Recommendations are
based on independent research including pricing,
features, usability, and value.

</div>

</section>



<Script
id="travel-deals-schema"
type="application/ld+json"
>
{JSON.stringify({

"@context":"https://schema.org",

"@type":"CollectionPage",

"name":"Best Travel Deals 2026",

"url":`${siteUrl}/travel/deals`,

"description":
"Travel deals including flights, hotels, eSIMs, VPNs and travel technology offers."

})}
</Script>


</main>

);

}