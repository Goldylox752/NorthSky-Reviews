import type { Metadata } from "next";


export const metadata: Metadata = {

  title:
    "Contact NorthSky Reviews",

  description:
    "Contact NorthSky Reviews for questions, partnerships, corrections, and feedback.",

};



export default function ContactPage(){

return (

<main className="bg-white text-slate-900">


<section className="bg-slate-950 px-6 py-24 text-center text-white">


<h1 className="text-5xl font-black">

Contact NorthSky Reviews

</h1>


<p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">

Have a question, suggestion, or partnership
request? We would love to hear from you.

</p>


</section>





<section className="mx-auto max-w-5xl px-6 py-20">


<div className="rounded-3xl border p-10">


<h2 className="text-3xl font-bold">

Get In Touch

</h2>


<p className="mt-5 text-lg text-slate-600">

For business inquiries, affiliate partnerships,
content updates, or corrections, contact the
NorthSky Reviews team.

</p>



<div className="mt-8">


<a
href="mailto:contact@northskyreviews.com"
className="inline-block rounded-xl bg-blue-600 px-8 py-4 font-bold text-white"
>

Email Us →

</a>


</div>


</div>


</section>





<section className="bg-slate-50 px-6 py-20">


<div className="mx-auto max-w-5xl">


<h2 className="text-3xl font-bold">

Partnerships

</h2>


<p className="mt-5 text-slate-600">

Brands interested in reviews, partnerships,
or technology collaborations can reach out
to our team.

</p>


</div>


</section>


</main>

);

}