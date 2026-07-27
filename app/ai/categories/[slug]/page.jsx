import Link from "next/link";
import { notFound } from "next/navigation";

import { tools, categories } from "@/app/data/tools";



const siteUrl = "https://northsky-reviews.vercel.app";



export function generateStaticParams(){

  return categories.map((category)=>({

    slug: category.slug

  }));

}




export async function generateMetadata({params}){


const category = categories.find(

(item)=>item.slug === params.slug

);



if(!category){

return {

title:"Category Not Found | NorthSky Reviews"

};

}



return {

title:
`Best ${category.name} AI Tools 2026 | NorthSky Reviews`,

description:
`Explore the best ${category.name} AI tools with reviews, ratings, features, pricing, and comparisons.`,

alternates:{

canonical:
`${siteUrl}/ai/categories/${category.slug}`

}

};

}





export default function AIcategoryPage({params}){


const category = categories.find(

(item)=>item.slug === params.slug

);



if(!category){

notFound();

}





const categoryTools = tools

.filter((tool)=>

tool.categorySlug === category.slug ||

tool.tags?.includes(category.slug) ||

tool.category === category.name

)

.sort(

(a,b)=>

(b.rating || 0) -

(a.rating || 0)

);






const schema={

"@context":"https://schema.org",

"@type":"CollectionPage",

"name":
`Best ${category.name} AI Tools 2026`,

"description":
`AI software reviews and recommendations for ${category.name}.`,

"url":
`${siteUrl}/ai/categories/${category.slug}`

};






return (

<main className="min-h-screen bg-white text-slate-900">



<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify(schema)

}}

/>







<section className="
bg-gradient-to-br
from-slate-950
via-indigo-950
to-blue-900
px-6
py-24
text-white
">


<div className="
mx-auto
max-w-6xl
text-center
">


<div className="text-6xl">

{category.icon || "🤖"}

</div>



<h1 className="
mt-8
text-5xl
font-black
md:text-7xl
">

Best {category.name} AI Tools 2026

</h1>



<p className="
mx-auto
mt-6
max-w-3xl
text-xl
text-slate-300
">

Compare the top {category.name.toLowerCase()} AI software,
including features, ratings, pricing, and expert reviews.

</p>


</div>


</section>









<section className="
mx-auto
max-w-7xl
px-6
py-20
">


<div className="
flex
items-center
justify-between
flex-wrap
gap-5
">


<h2 className="
text-4xl
font-black
">

Top {category.name} Tools

</h2>


<div className="
rounded-full
bg-blue-50
px-5
py-3
font-bold
text-blue-600
">

{categoryTools.length} Tools

</div>


</div>







<div className="
mt-12
grid
gap-8
md:grid-cols-3
">


{categoryTools.map((tool)=>(


<article

key={tool.slug}

className="
rounded-3xl
border
bg-white
p-8
shadow-sm
transition
hover:-translate-y-2
hover:shadow-xl
"

>



<div className="
flex
justify-between
items-center
">


<span className="
rounded-full
bg-blue-100
px-3
py-1
text-sm
font-bold
text-blue-700
">

{tool.category}

</span>



<span className="
font-black
text-yellow-500
">

⭐ {tool.rating}/10

</span>


</div>







<h3 className="
mt-6
text-3xl
font-black
">

{tool.name}

</h3>







<p className="
mt-4
text-slate-600
">

{tool.description}

</p>







<div className="
mt-8
space-y-3
">


<Link

href={`/reviews/${tool.slug}`}

className="
block
rounded-xl
border
px-5
py-3
text-center
font-bold
hover:bg-slate-50
"

>

Read Review →

</Link>






{tool.link && (

<a

href={tool.link}

target="_blank"

rel="noopener noreferrer sponsored"

className="
block
rounded-xl
bg-blue-600
px-5
py-3
text-center
font-bold
text-white
hover:bg-blue-700
"

>

Visit Website →

</a>

)}


</div>




</article>


))}



</div>









{categoryTools.length === 0 && (

<div className="
mt-12
rounded-3xl
bg-slate-50
p-10
text-center
">


<h2 className="
text-2xl
font-black
">

No Tools Found

</h2>


<p className="
mt-3
text-slate-600
">

New AI tools are being added soon.

</p>


</div>

)}



</section>









<section className="
bg-slate-50
px-6
py-20
">


<div className="
mx-auto
max-w-5xl
text-center
">


<h2 className="
text-4xl
font-black
">

How NorthSky Reviews Ranks AI Tools

</h2>



<p className="
mt-5
text-lg
text-slate-600
">

Each AI platform is reviewed using features,
performance, pricing, usability, reliability,
and overall value.

</p>


</div>


</section>








<section className="
py-12
text-center
">


<Link

href="/ai"

className="
font-bold
text-blue-600
"

>

← Back To AI Hub

</Link>


</section>





</main>

);

}
