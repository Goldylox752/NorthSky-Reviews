import Link from "next/link";
import { notFound } from "next/navigation";
import { tools } from "@/app/data/tools";


const siteUrl =
  "https://northsky-reviews.vercel.app";



export async function generateStaticParams(){

  return tools.map((tool)=>({

    slug: tool.slug,

  }));

}




export async function generateMetadata({params}){


const {slug}=await params;


const tool = tools.find(
(item)=>item.slug === slug
);



if(!tool){

return {

title:"Review Not Found | NorthSky Reviews"

};

}



return {

title:
`${tool.name} Review 2026 | NorthSky Reviews`,


description:
`${tool.name} review covering features, pricing, pros, cons, alternatives, and whether it is worth using.`,


alternates:{

canonical:
`${siteUrl}/reviews/${tool.slug}`

},


openGraph:{

title:
`${tool.name} Review 2026`,


description:
`Expert ${tool.name} review by NorthSky Reviews.`,


url:
`${siteUrl}/reviews/${tool.slug}`

}

};


}





export default async function ReviewPage({params}){


const {slug}=await params;


const tool = tools.find(
(item)=>item.slug === slug
);



if(!tool){

notFound();

}




return (

<main className="min-h-screen bg-white text-slate-900">





{/* SEO REVIEW SCHEMA */}

<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify({

"@context":"https://schema.org",

"@type":"Review",

"name":
`${tool.name} Review 2026`,


"url":
`${siteUrl}/reviews/${tool.slug}`,


"author":{

"@type":"Organization",

"name":"NorthSky Reviews"

},


"reviewRating":{

"@type":"Rating",

"ratingValue":tool.rating,

"bestRating":"10"

},


"itemReviewed":{

"@type":"SoftwareApplication",

"name":tool.name

}

})

}}

/>






{/* BREADCRUMBS */}

<div className="mx-auto max-w-5xl px-6 pt-8 text-sm text-slate-500">

<Link href="/" className="hover:text-blue-600">

Home

</Link>

{" / "}

<Link href="/reviews" className="hover:text-blue-600">

Reviews

</Link>

{" / "}

<span>

{tool.name}

</span>


</div>







{/* HERO */}

<section className="bg-slate-950 px-6 py-20 text-white">


<div className="mx-auto max-w-5xl">


<p className="font-bold text-blue-400">

{tool.category}

</p>




<h1 className="mt-5 text-5xl font-black md:text-6xl">

{tool.name} Review 2026

</h1>



<p className="mt-6 max-w-3xl text-xl text-slate-300">

{tool.description}

</p>





<div className="mt-8 flex flex-wrap gap-4">


<div className="rounded-xl bg-white/10 px-6 py-4 font-bold">

⭐ {tool.rating}/10

</div>



<a

href={tool.link}

target="_blank"

rel="noopener noreferrer sponsored"

className="rounded-xl bg-blue-600 px-8 py-4 font-bold hover:bg-blue-700"

>

Try {tool.name} →

</a>


</div>


</div>


</section>








{/* REVIEW CONTENT */}

<section className="mx-auto max-w-5xl px-6 py-16">


<div className="grid gap-10 md:grid-cols-3">



<div className="md:col-span-2">



<h2 className="text-3xl font-black">

Overview

</h2>



<p className="mt-5 leading-8 text-slate-600">

NorthSky Reviews evaluates {tool.name}
based on features, usability, performance,
pricing, and overall value.

</p>







<h2 className="mt-12 text-3xl font-black">

Pros & Cons

</h2>





<div className="mt-6 grid gap-6 md:grid-cols-2">



<div className="rounded-2xl bg-green-50 p-6">


<h3 className="font-black text-green-700">

✅ Pros

</h3>


<ul className="mt-4 space-y-2">


{(tool.pros || []).map((item)=>(

<li key={item}>

✓ {item}

</li>

))}


</ul>


</div>





<div className="rounded-2xl bg-red-50 p-6">


<h3 className="font-black text-red-700">

❌ Cons

</h3>


<ul className="mt-4 space-y-2">


{(tool.cons || []).map((item)=>(

<li key={item}>

• {item}

</li>

))}


</ul>


</div>



</div>








<h2 className="mt-12 text-3xl font-black">

Features

</h2>



<ul className="mt-5 space-y-3 text-slate-600">


{(tool.features || []).map((item)=>(

<li key={item}>

✓ {item}

</li>

))}


</ul>



</div>








{/* SIDEBAR */}


<aside className="h-fit rounded-3xl bg-slate-50 p-6">


<h3 className="text-xl font-black">

Quick Facts

</h3>



<div className="mt-5 space-y-5 text-sm">


<p>

<strong>Category</strong><br/>

{tool.category}

</p>



<p>

<strong>Rating</strong><br/>

⭐ {tool.rating}/10

</p>




<p>

<strong>Best For</strong><br/>

{tool.bestFor || tool.best || "General users"}

</p>



</div>





<Link

href="/comparisons"

className="mt-8 block rounded-xl bg-blue-600 px-5 py-3 text-center font-bold text-white"

>

Compare Alternatives →

</Link>



</aside>



</div>


</section>








{/* AFFILIATE CTA */}


<section className="px-6 pb-20">


<div className="mx-auto max-w-5xl rounded-3xl bg-blue-600 p-10 text-center text-white">


<h2 className="text-3xl font-black">

Ready to try {tool.name}?

</h2>



<a

href={tool.link}

target="_blank"

rel="noopener noreferrer sponsored"

className="mt-6 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-600"

>

Visit Official Website →

</a>




<p className="mt-6 text-sm text-blue-100">

Some links may be affiliate links. NorthSky Reviews may earn a commission at no extra cost to you.

</p>



</div>


</section>





</main>

);

}