import Link from "next/link";


export const metadata = {

  title:
    "Affiliate Disclosure | NorthSky Reviews",

  description:
    "Learn how NorthSky Reviews uses affiliate links, partnerships, and recommendations while maintaining editorial independence.",

  keywords:[
    "NorthSky Reviews affiliate disclosure",
    "software affiliate links",
    "AI tool partnerships",
    "technology reviews disclosure"
  ],

  alternates:{
    canonical:
      "https://northsky-reviews.vercel.app/affiliate-disclosure"
  }

};



export default function AffiliateDisclosurePage(){


const schema = {

"@context":"https://schema.org",

"@type":"WebPage",

"name":
"NorthSky Reviews Affiliate Disclosure",

"description":
"Affiliate relationship disclosure for NorthSky Reviews.",

"url":
"https://northsky-reviews.vercel.app/affiliate-disclosure"

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

🤝 Transparency

</span>



<h1 className="mt-8 text-5xl font-black md:text-6xl">

Affiliate Disclosure

</h1>



<p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">

How NorthSky Reviews handles affiliate
relationships and product recommendations.

</p>


</div>


</section>







<section className="mx-auto max-w-5xl px-6 py-20 space-y-12">





<div>

<h2 className="text-3xl font-black">

Our Commitment To Transparency

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

NorthSky Reviews believes transparency is
important when recommending software,
AI tools, and technology products.

</p>


<p className="mt-4 text-lg leading-8 text-slate-600">

Some links on this website may be affiliate
links. This means we may receive a commission
if you purchase a product through certain links.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

How Affiliate Links Work

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

When you click an affiliate link and complete
a purchase or signup, the company may provide
NorthSky Reviews with compensation.

</p>


<p className="mt-4 text-lg leading-8 text-slate-600">

The price you pay is not increased because of
using an affiliate link.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

Editorial Independence

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

Affiliate partnerships do not determine our
ratings, rankings, reviews, or recommendations.

</p>


<p className="mt-4 text-lg leading-8 text-slate-600">

Our reviews are based on research, product
features, usability, pricing, performance,
and overall value.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

Products We Review

</h2>


<ul className="mt-5 space-y-3 text-lg text-slate-600">


<li>
✓ Artificial intelligence software
</li>


<li>
✓ SaaS platforms
</li>


<li>
✓ Productivity applications
</li>


<li>
✓ Business technology tools
</li>


<li>
✓ Automation software
</li>


</ul>


</div>







<div>

<h2 className="text-3xl font-black">

Advertising & Partnerships

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

NorthSky Reviews may work with software
companies, affiliate programs, and technology
partners.

</p>


<p className="mt-4 text-lg leading-8 text-slate-600">

Partnerships allow us to continue creating
free reviews, comparisons, and educational
content.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

Questions?

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

If you have questions about our affiliate
relationships or editorial standards,
contact us.

</p>


<a

href="mailto:byronsanche@zohomailcloud.ca"

className="mt-5 inline-block font-bold text-blue-600 hover:underline"

>

byronsanche@zohomailcloud.ca →

</a>


</div>





</section>







<section className="bg-slate-950 px-6 py-16 text-center text-white">


<h2 className="text-3xl font-black">

Explore NorthSky Reviews

</h2>


<p className="mx-auto mt-4 max-w-2xl text-slate-300">

Discover AI software reviews,
comparisons, and technology guides.

</p>



<div className="mt-8 flex flex-wrap justify-center gap-5">


<Link

href="/reviews"

className="rounded-xl bg-blue-600 px-8 py-4 font-bold"

>

Read Reviews →

</Link>



<Link

href="/methodology"

className="rounded-xl border border-white/30 px-8 py-4 font-bold"

>

Review Methodology →

</Link>


</div>


</section>



</main>

);

}
