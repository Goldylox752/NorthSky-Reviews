import Link from "next/link";


export const metadata = {

  title:
    "Best AI Software Deals 2026 | NorthSky Reviews",

  description:
    "Discover the best AI software deals, SaaS discounts, lifetime deals, and productivity tool offers curated by NorthSky Reviews.",

  keywords:[
    "AI software deals",
    "AI tool discounts",
    "SaaS deals",
    "software lifetime deals",
    "best AI tools discounts"
  ],

  alternates:{
    canonical:
    "https://northsky-reviews.vercel.app/deals"
  }

};



export default function DealsPage(){


const deals = [

{
name:"ChatGPT Plus",
category:"AI Assistant",
discount:"Free Plan Available",
description:
"Explore one of the most popular AI assistants for writing, research, coding, and productivity.",
link:"/reviews/chatgpt"
},


{
name:"Claude",
category:"AI Writing",
discount:"Free Plan Available",
description:
"Advanced AI assistant known for writing quality, reasoning, and long-form content.",
link:"/reviews/claude"
},


{
name:"AI Business Tools",
category:"Business Software",
discount:"Top Picks",
description:
"Discover automation, marketing, and productivity software for modern businesses.",
link:"/ai"
},


{
name:"Software Comparisons",
category:"Buying Guides",
discount:"Save Before Buying",
description:
"Compare popular software platforms before choosing your next tool.",
link:"/comparisons"
}


];





const schema = {

"@context":"https://schema.org",

"@type":"CollectionPage",

"name":
"AI Software Deals",

"description":
"Curated AI software deals and technology offers.",

"url":
"https://northsky-reviews.vercel.app/deals"

};




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

Best AI Software Deals 2026

</h1>



<p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">

Discover software discounts, AI tool offers,
and recommended platforms that deliver the best
value for your money.

</p>


</div>


</section>







<section className="px-6 py-20">


<div className="mx-auto max-w-6xl">


<h2 className="text-4xl font-black">

Featured Deals

</h2>



<p className="mt-5 text-lg text-slate-600">

Our team researches AI software, SaaS platforms,
and technology products to help you find better
tools at better value.

</p>





<div className="mt-12 grid gap-8 md:grid-cols-2">



{deals.map((deal)=>(
  
<div

key={deal.name}

className="rounded-3xl border border-slate-200 p-8 shadow-sm transition hover:shadow-lg"

>


<span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-bold text-blue-700">

{deal.category}

</span>



<h3 className="mt-6 text-2xl font-black">

{deal.name}

</h3>



<p className="mt-3 font-bold text-green-600">

{deal.discount}

</p>



<p className="mt-4 text-slate-600">

{deal.description}

</p>



<Link

href={deal.link}

className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white hover:bg-blue-700"

>

View Details →

</Link>



</div>

))}



</div>


</div>


</section>







<section className="bg-slate-50 px-6 py-20">


<div className="mx-auto max-w-5xl text-center">


<h2 className="text-4xl font-black">

Why Use NorthSky Deals?

</h2>


<div className="mt-10 grid gap-8 md:grid-cols-3">


<div className="rounded-3xl bg-white p-8">

<div className="text-4xl">
🔎
</div>

<h3 className="mt-4 text-xl font-black">
Research
</h3>

<p className="mt-3 text-slate-600">
We analyze software features, pricing,
and value.
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
Find alternatives before committing
to software.
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
Discover tools selected for real-world use.
</p>

</div>



</div>


</div>


</section>







<section className="px-6 py-20 text-center">


<h2 className="text-4xl font-black">

Explore More Software

</h2>


<div className="mt-8 flex flex-wrap justify-center gap-5">


<Link

href="/ai"

className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white"

>

Browse AI Tools

</Link>



<Link

href="/comparisons"

className="rounded-xl border border-slate-300 px-8 py-4 font-bold"

>

Compare Software

</Link>


</div>


</section>





</main>

);


}
