import Link from "next/link";
import { notFound } from "next/navigation";
import { tools, categories } from "@/app/data/tools";


export async function generateStaticParams(){

  return categories.map((category)=>({
    slug: category.slug
  }));

}



export async function generateMetadata({params}){

  const {slug}=await params;


  const category =
  categories.find(
    (item)=>item.slug===slug
  );


  if(!category){

    return {
      title:"AI Category | NorthSky Reviews"
    };

  }


  return {

    title:
    `Best ${category.name} AI Tools 2026 | NorthSky Reviews`,

    description:
    `Compare the best ${category.name.toLowerCase()} AI software, reviews, ratings, and recommendations.`

  };

}





export default async function AIcategoryPage({params}){


const {slug}=await params;



const category =
categories.find(
(item)=>item.slug===slug
);



if(!category){

notFound();

}





const categoryTools =
tools
.filter((tool)=>

tool.category === category.name

||

tool.tags?.includes(slug)

)

.sort(
(a,b)=>
(b.rating || 0) -
(a.rating || 0)
);






return (

<main className="min-h-screen bg-white text-slate-900">


<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:

JSON.stringify({

"@context":"https://schema.org",

"@type":"CollectionPage",

"name":
`Best ${category.name} AI Tools`,

"description":
`AI software reviews and recommendations.`,

"url":
`https://northsky-reviews.vercel.app/ai/categories/${slug}`

})

}}

/>





<section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 px-6 py-24 text-white">


<div className="mx-auto max-w-5xl text-center">


<div className="text-6xl">

{category.icon}

</div>



<h1 className="mt-8 text-5xl font-black md:text-6xl">

Best {category.name} AI Tools 2026

</h1>



<p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">

Discover top-rated AI tools for
{category.name.toLowerCase()},
including reviews, ratings, comparisons,
and recommendations.

</p>



</div>

</section>







<section className="mx-auto max-w-7xl px-6 py-20">


<div className="mb-12 text-center">


<h2 className="text-4xl font-black">

Top {category.name} Tools

</h2>


<p className="mt-4 text-slate-600">

Ranked by features, usability, performance,
and overall value.

</p>


</div>






<div className="grid gap-8 md:grid-cols-3">


{categoryTools.map((tool)=>(


<article

key={tool.slug}

className="rounded-3xl border p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"

>


<div className="flex justify-between">


<span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">

{tool.category}

</span>



<span className="font-bold text-yellow-500">

⭐ {tool.rating}

</span>


</div>





<h3 className="mt-6 text-3xl font-black">

{tool.name}

</h3>





<p className="mt-4 text-slate-600">

{tool.description}

</p>





<div className="mt-8 space-y-3">


<Link

href={`/ai/reviews/${tool.slug}`}

className="block rounded-xl border px-5 py-3 text-center font-bold"

>

Read Full Review →

</Link>





<a

href={tool.link}

target="_blank"

rel="noopener noreferrer sponsored"

className="block rounded-xl bg-blue-600 px-5 py-3 text-center font-bold text-white"

>

Try {tool.name}

</a>



</div>


</article>


))}


</div>






{categoryTools.length===0 && (

<div className="rounded-3xl bg-slate-50 p-10 text-center">


<h2 className="text-2xl font-black">

No tools found

</h2>


<p className="mt-3 text-slate-600">

More AI tools are being added soon.

</p>


</div>

)}



</section>







<section className="bg-slate-50 px-6 py-20">


<div className="mx-auto max-w-5xl text-center">


<h2 className="text-4xl font-black">

How NorthSky Reviews Evaluates AI Tools

</h2>


<p className="mt-5 text-lg text-slate-600">

We review AI platforms based on pricing,
features, ease of use, reliability,
security, and real-world performance.

</p>


</div>


</section>






<section className="py-12 text-center">


<Link

href="/ai"

className="font-bold text-blue-600"

>

← Back to AI Hub

</Link>


</section>





</main>

);

}