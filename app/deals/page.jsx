import Link from "next/link";


export const metadata = {

  title:
    "Best Software Deals & Discounts 2026 | NorthSky Reviews",

  description:
    "Discover the best AI software deals, SaaS discounts, productivity tools, and technology offers curated by NorthSky Reviews.",

  keywords:[
    "software deals",
    "AI tool discounts",
    "SaaS deals",
    "best software offers 2026",
    "technology discounts"
  ],

  alternates:{
    canonical:
      "https://northsky-reviews.vercel.app/deals"
  }

};



export default function DealsPage(){


const schema = {

"@context":"https://schema.org",

"@type":"CollectionPage",

"name":
"NorthSky Reviews Software Deals",

"description":
"Curated AI software deals, SaaS discounts, and technology offers.",

"url":
"https://northsky-reviews.vercel.app/deals",

"publisher":{

"@type":"Organization",

"name":
"NorthSky Reviews",

"url":
"https://northsky-reviews.vercel.app"

}

};



const deals = [

{

name:
"NordVPN",

category:
"Online Security",

description:
"Protect your online privacy with a leading VPN service.",

badge:
"Popular Privacy Deal"

},


{

name:
"NordPass",

category:
"Password Management",

description:
"Securely store passwords and manage digital accounts.",

badge:
"Security Pick"

},


{

name:
"Saily",

category:
"Travel eSIM",

description:
"Stay connected worldwide with affordable mobile data plans.",

badge:
"Travel Technology"

},


{

name:
"AI Productivity Tools",

category:
"Artificial Intelligence",

description:
"Explore powerful AI assistants, writing tools, and automation software.",

badge:
"AI Deals"

}


];





return (

<main className="min-h-screen bg-white text-slate-900">


<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify(schema)

}}

/>







<section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 px-6 py-24 text-center text-white">


<div className="mx-auto max-w-5xl">


<span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">

🔥 Software Deals

</span>



<h1 className="mt-8 text-5xl font-black md:text-6xl">

Best Software Deals & Offers

</h1>



<p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-slate-300">

Discover discounted AI tools, SaaS platforms,
security software, and technology products
selected by NorthSky Reviews.

</p>


</div>


</section>









<section className="px-6 py-20">


<div className="mx-auto max-w-6xl">


<h2 className="text-4xl font-black">

Featured Deals

</h2>



<p className="mt-5 text-lg text-slate-600">

We highlight useful technology products that
provide strong value for individuals and businesses.

</p>





<div className="mt-12 grid gap-8 md:grid-cols-2">



{deals.map((deal)=>(
  
<div

key={deal.name}

className="rounded-3xl border border-slate-200 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"

>


<span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">

{deal.badge}

</span>



<h3 className="mt-6 text-2xl font-black">

{deal.name}

</h3>



<p className="mt-2 font-semibold text-blue-600">

{deal.category}

</p>



<p className="mt-5 leading-7 text-slate-600">

{deal.description}

</p>



<Link

href="/reviews"

className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"

>

Read Review →

</Link>



</div>

))}



</div>


</div>


</section>









<section className="bg-slate-50 px-6 py-20">


<div className="mx-auto max-w-5xl text-center">


<h2 className="text-4xl font-black">

How We Select Deals

</h2>



<p className="mt-6 text-lg leading-8 text-slate-600">

NorthSky Reviews evaluates software based on
features, usability, pricing, reliability,
security, and overall value.

</p>



<div className="mt-10 grid gap-6 md:grid-cols-3">


<div className="rounded-3xl bg-white p-8">

<div className="text-4xl">
🔍
</div>

<h3 className="mt-4 text-xl font-black">
Research
</h3>

<p className="mt-3 text-slate-600">
We analyze products and pricing before recommending tools.
</p>

</div>



<div className="rounded-3xl bg-white p-8">

<div className="text-4xl">
⚖️
</div>

<h3 className="mt-4 text-xl font-black">
Compare
</h3>

<p className="mt-3 text-slate-600">
We compare alternatives to identify strong options.
</p>

</div>



<div className="rounded-3xl bg-white p-8">

<div className="text-4xl">
⭐
</div>

<h3 className="mt-4 text-xl font-black">
Recommend
</h3>

<p className="mt-3 text-slate-600">
We highlight products offering strong user value.
</p>

</div>


</div>


</div>


</section>









<section className="bg-slate-950 px-6 py-20 text-center text-white">


<h2 className="text-4xl font-black">

Explore More Software

</h2>



<p className="mx-auto mt-5 max-w-2xl text-slate-300">

Browse reviews, comparisons, and AI software rankings.

</p>




<div className="mt-8 flex flex-wrap justify-center gap-5">


<Link

href="/reviews"

className="rounded-xl bg-blue-600 px-8 py-4 font-bold"

>

View Reviews →

</Link>



<Link

href="/ai"

className="rounded-xl border border-white/30 px-8 py-4 font-bold"

>

Explore AI Tools →

</Link>


</div>


</section>





</main>

);

}
