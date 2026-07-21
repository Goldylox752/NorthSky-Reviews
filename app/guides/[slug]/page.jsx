import Link from "next/link";
import { notFound } from "next/navigation";
import { guides } from "@/app/data/guides";


export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}


export async function generateMetadata({ params }) {

  const { slug } = await params;

  const guide = guides.find(
    (item) => item.slug === slug
  );


  if (!guide) {
    return {
      title: "Guide Not Found | NorthSky Reviews",
    };
  }


  return {
    title: `${guide.title} | NorthSky Reviews`,
    description: guide.description,

    openGraph: {
      title: guide.title,
      description: guide.description,
      url:
        `https://northsky-reviews.vercel.app/guides/${guide.slug}`,
      siteName: "NorthSky Reviews",
    },
  };
}



export default async function GuidePage({ params }) {

  const { slug } = await params;


  const guide = guides.find(
    (item) => item.slug === slug
  );


  if (!guide) {
    notFound();
  }



  return (

<main className="min-h-screen bg-white text-slate-900">


{/* SEO Schema */}

<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html:JSON.stringify({

"@context":"https://schema.org",

"@type":"Article",

headline:guide.title,

description:guide.description,

author:{
"@type":"Organization",
"name":"NorthSky Reviews"
},

publisher:{
"@type":"Organization",
"name":"NorthSky Reviews"
}

})
}}
/>




{/* Hero */}

<section className="bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 px-6 py-20 text-white">

<div className="mx-auto max-w-5xl">


<div className="text-blue-400 font-bold">

📚 Buying Guide

</div>


<h1 className="mt-5 text-5xl font-black md:text-6xl">

{guide.title}

</h1>


<p className="mt-6 max-w-3xl text-xl text-slate-300">

{guide.description}

</p>


<p className="mt-6 text-sm text-slate-400">

Updated: 2026 • NorthSky Expert Recommendations

</p>


</div>

</section>





{/* Introduction */}

<section className="mx-auto max-w-5xl px-6 py-16">


<h2 className="text-3xl font-black">

What We Recommend

</h2>


<p className="mt-5 leading-8 text-slate-600">

Finding the right technology can be difficult.
We research features, pricing, performance,
and real-world usability to help you choose
the best option.

</p>


</section>





{/* Products */}

<section className="bg-slate-50 px-6 py-16">


<div className="mx-auto max-w-6xl">


<h2 className="text-4xl font-black">

🏆 Top Picks

</h2>



<div className="mt-10 grid gap-8 md:grid-cols-3">


{guide.products?.map((product,index)=>(


<div

key={product.name}

className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"

>


<div className="text-sm font-bold text-blue-600">

#{index + 1} Recommended

</div>


<h3 className="mt-4 text-2xl font-black">

{product.name}

</h3>


<p className="mt-3 text-slate-600">

{product.description}

</p>



<div className="mt-5 rounded-xl bg-green-50 p-4 font-bold text-green-700">

⭐ {product.rating}/10

</div>



{product.link && (

<a

href={product.link}

target="_blank"

rel="noopener noreferrer sponsored"

className="mt-6 block rounded-xl bg-blue-600 px-5 py-3 text-center font-bold text-white hover:bg-blue-700"

>

Check Price →

</a>

)}


</div>


))}


</div>


</div>


</section>





{/* Buying Tips */}

<section className="mx-auto max-w-5xl px-6 py-16">


<h2 className="text-3xl font-black">

How We Choose

</h2>



<div className="mt-8 grid gap-6 md:grid-cols-3">


{[

{
icon:"🔬",
title:"Testing",
text:"We analyze features and usability."
},

{
icon:"💰",
title:"Value",
text:"We compare pricing and benefits."
},

{
icon:"⭐",
title:"Quality",
text:"We recommend products worth using."
}

].map((item)=>(


<div

key={item.title}

className="rounded-2xl bg-slate-50 p-6 text-center"

>


<div className="text-4xl">

{item.icon}

</div>


<h3 className="mt-4 font-black">

{item.title}

</h3>


<p className="mt-2 text-slate-600">

{item.text}

</p>


</div>


))}


</div>


</section>





{/* Newsletter CTA */}

<section className="px-6 pb-20">


<div className="mx-auto max-w-5xl rounded-3xl bg-blue-600 p-10 text-center text-white">


<h2 className="text-3xl font-black">

Get Weekly Technology Picks

</h2>


<p className="mt-4 text-blue-100">

Receive new reviews, deals, and buying guides.

</p>


<Link

href="/newsletter"

className="mt-6 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-600"

>

Subscribe Free →

</Link>


</div>


</section>


</main>

  );
}