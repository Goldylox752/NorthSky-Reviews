import Link from "next/link";
import { notFound } from "next/navigation";

import { guides } from "@/app/data/guides";
import { tools } from "@/app/data/tools";
import { comparisons } from "@/app/data/comparisons";


const siteUrl =
  "https://northsky-reviews.vercel.app";



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

    title:
      `${guide.title} | NorthSky Reviews`,


    description:
      guide.description,


    keywords:[
      ...(guide.keywords || []),
      "technology guides",
      "software reviews",
      "AI tools"
    ],


    alternates:{
      canonical:
        `${siteUrl}/guides/${guide.slug}`
    },


    openGraph:{

      title:
        guide.title,

      description:
        guide.description,

      url:
        `${siteUrl}/guides/${guide.slug}`,

      siteName:
        "NorthSky Reviews",

      type:
        "article"

    }

  };

}







export default async function GuidePage({ params }) {


  const { slug } = await params;


  const guide =
    guides.find(
      (item) => item.slug === slug
    );



  if (!guide) {
    notFound();
  }




  // Convert product IDs into full product objects

  const products =
    (guide.products || [])
      .map((id) =>
        tools.find(
          (tool) => tool.slug === id
        )
      )
      .filter(Boolean);






  const faq = [

    {
      q:
        `What are the best products in ${guide.title}?`,

      a:
        "NorthSky Reviews evaluates products using features, pricing, performance, reliability, and overall value."
    },


    {
      q:
        "How does NorthSky create buying guides?",

      a:
        "We research products, compare alternatives, analyze features, and update recommendations regularly."
    },


    {
      q:
        "Are rankings influenced by advertisers?",

      a:
        "No. Affiliate partnerships do not determine rankings or recommendations."
    }

  ];






  const schema = {

    "@context":
      "https://schema.org",

    "@type":
      "Article",


    headline:
      guide.title,


    description:
      guide.description,


    author:{
      "@type":
        "Organization",

      name:
        "NorthSky Reviews"
    },


    publisher:{
      "@type":
        "Organization",

      name:
        "NorthSky Reviews"
    }

  };







return (

<main className="min-h-screen bg-white text-slate-900">


<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html:
JSON.stringify(schema)
}}
/>





<section className="
bg-gradient-to-br
from-slate-950
via-blue-950
to-indigo-950
px-6
py-24
text-white
">


<div className="
mx-auto
max-w-6xl
">


<div className="
font-bold
text-blue-400
">

📚 NorthSky Buying Guide

</div>




<h1 className="
mt-6
text-5xl
font-black
md:text-7xl
">

{guide.title}

</h1>




<p className="
mt-6
max-w-3xl
text-xl
text-slate-300
">

{guide.description}

</p>




</div>


</section>







<section className="
mx-auto
max-w-7xl
px-6
py-20
">


<h2 className="
text-4xl
font-black
">

🏆 Recommended Products

</h2>






<div className="
mt-10
grid
gap-8
md:grid-cols-3
">



{products.length === 0 ? (

<div className="
rounded-3xl
border
p-8
">

More recommendations coming soon.

</div>


) : (


products.map((product,index)=>(


<article

key={product.slug}

className="
rounded-3xl
border
bg-white
p-8
shadow-sm
hover:shadow-xl
transition
"

>


<div className="
font-bold
text-blue-600
">

#{index + 1} Pick

</div>




<h3 className="
mt-5
text-3xl
font-black
">

{product.name}

</h3>




<p className="
mt-3
text-yellow-500
font-bold
">

★★★★★ {product.rating}/10

</p>




<p className="
mt-5
text-slate-600
">

{product.description}

</p>





{product.link && (

<a

href={product.link}

target="_blank"

rel="nofollow sponsored noopener"

className="
mt-6
block
rounded-xl
bg-blue-600
px-5
py-3
text-center
font-bold
text-white
"

>

Visit Website →

</a>

)}



</article>


))

)}


</div>


</section>







<section className="
bg-slate-50
px-6
py-20
">


<div className="
mx-auto
max-w-6xl
">


<h2 className="
text-4xl
font-black
">

Compare Before Buying

</h2>




<div className="
mt-10
grid
gap-6
md:grid-cols-3
">


{comparisons.slice(0,3).map((item)=>(


<Link

key={item.slug}

href={`/comparisons/${item.slug}`}

className="
rounded-3xl
bg-white
p-7
shadow
hover:shadow-xl
"

>


<h3 className="
text-xl
font-black
">

{item.title}

</h3>


<p className="
mt-3
text-slate-600
">

{item.description}

</p>


</Link>


))}


</div>


</div>


</section>








<section className="
mx-auto
max-w-5xl
px-6
py-20
">


<h2 className="
text-4xl
font-black
">

Frequently Asked Questions

</h2>




<div className="
mt-8
space-y-5
">


{faq.map((item)=>(


<div

key={item.q}

className="
rounded-2xl
border
p-6
"

>


<h3 className="
font-black
">

{item.q}

</h3>



<p className="
mt-3
text-slate-600
">

{item.a}

</p>


</div>


))}


</div>


</section>






</main>

);

}
