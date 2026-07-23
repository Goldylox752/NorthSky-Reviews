import Link from "next/link";

export const metadata = {

  title:
    "Contact NorthSky Reviews | Partnerships, Feedback & Questions",

  description:
    "Contact NorthSky Reviews for software submissions, partnerships, corrections, feedback, and technology review inquiries.",

  keywords:[
    "contact NorthSky Reviews",
    "software review submissions",
    "AI partnerships",
    "technology feedback"
  ],

  alternates:{
    canonical:
    "https://northsky-reviews.vercel.app/contact"
  }

};



export default function ContactPage(){

const schema = {

"@context":"https://schema.org",

"@type":"ContactPage",

"name":"Contact NorthSky Reviews",

"description":
"Contact NorthSky Reviews for partnerships, feedback, and software inquiries.",

"url":
"https://northsky-reviews.vercel.app/contact"

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

📩 Contact NorthSky Reviews

</span>



<h1 className="mt-8 text-5xl font-black md:text-6xl">

Let's Connect

</h1>



<p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">

Have a question, software suggestion, partnership
request, or correction? Contact the NorthSky Reviews team.

</p>


</div>


</section>







<section className="px-6 py-20">


<div className="mx-auto max-w-6xl">


<div className="grid gap-8 md:grid-cols-3">



<div className="rounded-3xl border p-8 shadow-sm">


<div className="text-4xl">
🤝
</div>


<h2 className="mt-5 text-2xl font-black">

Partnerships

</h2>


<p className="mt-4 text-slate-600">

Interested in working with NorthSky Reviews?
Reach out about collaborations, sponsorships,
and technology partnerships.

</p>


</div>





<div className="rounded-3xl border p-8 shadow-sm">


<div className="text-4xl">
🚀
</div>


<h2 className="mt-5 text-2xl font-black">

Submit A Product

</h2>


<p className="mt-4 text-slate-600">

Have an AI tool, software platform, or technology
product you want reviewed?

</p>


</div>





<div className="rounded-3xl border p-8 shadow-sm">


<div className="text-4xl">
📝
</div>


<h2 className="mt-5 text-2xl font-black">

Corrections

</h2>


<p className="mt-4 text-slate-600">

Found outdated information?
Let us know so we can keep our reviews accurate.

</p>


</div>



</div>


</div>


</section>







<section className="bg-slate-50 px-6 py-20">


<div className="mx-auto max-w-5xl">


<div className="rounded-3xl bg-white p-10 shadow">


<h2 className="text-3xl font-black">

Get In Touch

</h2>


<p className="mt-5 text-lg text-slate-600">

For business inquiries, affiliate partnerships,
content updates, and review requests, contact us.

</p>



<a

href="mailto:contact@northskyreviews.com"

className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-700"

>

contact@northskyreviews.com →

</a>


</div>


</div>


</section>







<section className="px-6 py-20">


<div className="mx-auto max-w-5xl rounded-3xl bg-slate-950 p-12 text-center text-white">


<h2 className="text-4xl font-black">

Explore NorthSky Reviews

</h2>


<p className="mt-5 text-slate-300">

Discover AI tools, software rankings,
and technology comparisons.

</p>



<div className="mt-8 flex flex-wrap justify-center gap-5">


<Link

href="/reviews"

className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white"

>

Read Reviews →

</Link>



<Link

href="/comparisons"

className="rounded-xl border border-white/30 px-8 py-4 font-bold"

>

Compare Tools →

</Link>


</div>


</div>


</section>



</main>

);

}
