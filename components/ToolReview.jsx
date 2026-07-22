import Link from "next/link";


export default function ToolReview({
  name,
  category,
  rating,
  description,
  pros = [],
  cons = [],
  pricing,
  bestFor,
  alternatives = [],
  website,
  reviewSlug
}) {


return (

<article className="min-h-screen bg-white text-slate-900">


{/* Hero */}

<section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 px-6 py-24 text-white">


<div className="mx-auto max-w-5xl text-center">


<span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">

{category}

</span>


<h1 className="mt-8 text-5xl font-black md:text-6xl">

{name} Review 2026

</h1>


<p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">

{description}

</p>



<div className="mt-8 text-4xl font-black text-yellow-400">

⭐ {rating}/10

</div>



{website && (

<a

href={website}

target="_blank"

rel="noopener noreferrer sponsored"

className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-700"

>

Try {name} →

</a>

)}


</div>


</section>





{/* Overview */}

<section className="mx-auto max-w-6xl px-6 py-20">


<div className="grid gap-8 md:grid-cols-3">



<div className="rounded-3xl border p-8">

<h2 className="text-2xl font-black">

Rating

</h2>


<p className="mt-4 text-4xl font-black text-blue-600">

{rating}/10

</p>


</div>




<div className="rounded-3xl border p-8">

<h2 className="text-2xl font-black">

Pricing

</h2>


<p className="mt-4 text-slate-600">

{pricing || "Check current pricing"}

</p>


</div>




<div className="rounded-3xl border p-8">

<h2 className="text-2xl font-black">

Best For

</h2>


<p className="mt-4 text-slate-600">

{bestFor}

</p>


</div>



</div>



</section>






{/* Pros Cons */}

<section className="bg-slate-50 px-6 py-20">


<div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">



<div className="rounded-3xl bg-white p-8 shadow">


<h2 className="text-3xl font-black">

Pros

</h2>


<ul className="mt-6 space-y-4">


{pros.map((item)=>(

<li
key={item}
className="text-slate-700"
>

✅ {item}

</li>

))}


</ul>


</div>






<div className="rounded-3xl bg-white p-8 shadow">


<h2 className="text-3xl font-black">

Cons

</h2>


<ul className="mt-6 space-y-4">


{cons.map((item)=>(

<li
key={item}
className="text-slate-700"
>

❌ {item}

</li>

))}


</ul>


</div>



</div>


</section>







{/* Alternatives */}

{alternatives.length > 0 && (

<section className="px-6 py-20">


<div className="mx-auto max-w-6xl">


<h2 className="text-4xl font-black">

Alternatives To {name}

</h2>



<div className="mt-8 grid gap-5 md:grid-cols-3">


{alternatives.map((item)=>(


<div

key={item}

className="rounded-2xl border p-6 font-bold"

>

{item}

</div>


))}


</div>


</div>


</section>

)}





{/* FAQ Schema */}

<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify({

"@context":"https://schema.org",

"@type":"Review",

"name":`${name} Review`,

"reviewRating":{

"@type":"Rating",

"ratingValue":rating,

"bestRating":"10"

}


})

}}

/>






{/* Footer CTA */}

<section className="bg-blue-600 px-6 py-20 text-center text-white">


<h2 className="text-4xl font-black">

Ready To Try {name}?

</h2>


<p className="mt-4 text-blue-100">

Explore the official website and start using this AI tool today.

</p>



{website && (

<a

href={website}

target="_blank"

rel="noopener noreferrer sponsored"

className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-600"

>

Get Started →

</a>

)}


</section>




<div className="px-6 py-10 text-center">


<Link

href="/ai"

className="font-bold text-blue-600"

>

← Back To AI Tools

</Link>


</div>



</article>

);

}