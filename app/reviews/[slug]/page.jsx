import Link from "next/link";
import { notFound } from "next/navigation";

import { tools } from "@/app/data/tools";


const siteUrl = "https://northsky-reviews.vercel.app";



export async function generateStaticParams(){

  return tools.map((tool)=>({

    slug: tool.slug

  }));

}





export async function generateMetadata({params}){


const {slug} = await params;


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
`${tool.name} Review 2026 | Features, Pricing & Alternatives`,


description:
`NorthSky Reviews tests ${tool.name}. Explore features, pricing, pros, cons, alternatives, and whether it is worth using in 2026.`,


keywords:[

`${tool.name} review`,

`${tool.name} pricing`,

`${tool.name} alternatives`,

`${tool.category} software`

],


alternates:{

canonical:
`${siteUrl}/reviews/${tool.slug}`

},


openGraph:{

title:
`${tool.name} Review 2026`,

description:
`Expert ${tool.name} analysis from NorthSky Reviews.`,

url:
`${siteUrl}/reviews/${tool.slug}`,

siteName:
"NorthSky Reviews",

type:
"article"

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



const rating = tool.rating || 0;



const scoreData=[

{
name:"Features",
score:tool.featureScore || 9
},

{
name:"Ease Of Use",
score:tool.easeScore || 9
},

{
name:"Performance",
score:tool.performanceScore || 9
},

{
name:"Value",
score:tool.valueScore || 8
}

];





return (

<main className="min-h-screen bg-white text-slate-900">







<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify({

"@context":"https://schema.org",

"@type":"Review",

"name":
`${tool.name} Review 2026`,

"datePublished":
"2026-07-23",

"dateModified":
"2026-07-23",


"url":
`${siteUrl}/reviews/${tool.slug}`,



"author":{

"@type":"Organization",

"name":"NorthSky Reviews"

},



"reviewRating":{

"@type":"Rating",

"ratingValue":rating,

"bestRating":10

},



"itemReviewed":{

"@type":"SoftwareApplication",

"name":tool.name,

"applicationCategory":tool.category,

"description":tool.description

}


})

}}

/>









<div className="mx-auto max-w-6xl px-6 pt-8 text-sm text-slate-500">


<Link href="/">
Home
</Link>


<span className="mx-2">
/
</span>


<Link href="/reviews">
Reviews
</Link>


<span className="mx-2">
/
</span>


{tool.name}


</div>









<section className="
mt-8
bg-gradient-to-br
from-slate-950
via-indigo-950
to-blue-900
px-6
py-24
text-white
">


<div className="mx-auto max-w-6xl">


<div className="flex gap-3 flex-wrap">


<span className="
rounded-full
bg-blue-500/20
px-4
py-2
font-bold
text-blue-300
">

{tool.category}

</span>



<span className="
rounded-full
bg-green-500/20
px-4
py-2
font-bold
text-green-300
">

⭐ {rating}/10

</span>


</div>





<h1 className="
mt-8
text-5xl
font-black
md:text-7xl
">

{tool.name}

Review 2026

</h1>




<p className="
mt-6
max-w-3xl
text-xl
text-slate-300
">

{tool.description}

</p>





<div className="mt-10 flex gap-4 flex-wrap">


{tool.link && (

<a

href={tool.link}

target="_blank"

rel="nofollow sponsored noopener"

className="
rounded-xl
bg-blue-600
px-8
py-4
font-bold
"

>

Visit {tool.name}

</a>

)}





<Link

href="/comparisons"

className="
rounded-xl
border
border-white/30
px-8
py-4
font-bold
"

>

Compare Alternatives

</Link>


</div>


</div>


</section>









<section className="mx-auto max-w-6xl px-6 py-20">


<div className="grid gap-10 lg:grid-cols-3">



<article className="lg:col-span-2">


<h2 className="text-4xl font-black">

What Is {tool.name}?

</h2>


<p className="mt-5 leading-8 text-slate-600">

NorthSky Reviews evaluates {tool.name}
based on features, pricing, performance,
security, usability, and overall value.

</p>









<h2 className="
mt-12
text-3xl
font-black
">

NorthSky Score

</h2>



<div className="mt-6 grid gap-5 md:grid-cols-2">


{scoreData.map((item)=>(


<div

key={item.name}

className="
rounded-2xl
bg-slate-50
p-6
"

>


<div className="
flex
justify-between
font-bold
">


<span>

{item.name}

</span>


<span className="text-blue-600">

{item.score}/10

</span>


</div>



<div className="
mt-3
h-2
rounded-full
bg-slate-200
">


<div

className="
h-2
rounded-full
bg-blue-600
"

style={{

width:`${item.score*10}%`

}}

/>


</div>


</div>


))}



</div>









<div className="mt-12 grid gap-6 md:grid-cols-2">



<div className="
rounded-3xl
bg-green-50
p-6
">


<h3 className="font-black text-green-700">

Pros

</h3>



<ul className="mt-4 space-y-2">

{tool.pros?.map(item=>(

<li key={item}>
✓ {item}
</li>

))}

</ul>


</div>





<div className="
rounded-3xl
bg-red-50
p-6
">


<h3 className="font-black text-red-700">

Cons

</h3>



<ul className="mt-4 space-y-2">

{tool.cons?.map(item=>(

<li key={item}>
• {item}
</li>

))}

</ul>


</div>


</div>







<h2 className="
mt-12
text-3xl
font-black
">

Key Features

</h2>



<ul className="mt-5 space-y-3 text-slate-600">


{tool.features?.map(feature=>(

<li key={feature}>

✓ {feature}

</li>

))}


</ul>



</article>









<aside className="
h-fit
rounded-3xl
bg-slate-50
p-8
">


<h3 className="text-2xl font-black">

Quick Facts

</h3>



<div className="mt-6 space-y-5">


<div>

<b>Category</b>

<p>{tool.category}</p>

</div>



<div>

<b>Rating</b>

<p>⭐ {rating}/10</p>

</div>



<div>

<b>Best For</b>

<p>
{tool.bestFor || "General users"}
</p>

</div>



<div>

<b>Pricing</b>

<p>
{tool.price || "Varies"}
</p>

</div>



</div>


</aside>



</div>


</section>









<section className="bg-slate-50 px-6 py-20">


<div className="mx-auto max-w-5xl text-center">


<h2 className="text-4xl font-black">

Ready To Try {tool.name}?

</h2>



{tool.link && (

<a

href={tool.link}

target="_blank"

rel="nofollow sponsored noopener"

className="
mt-8
inline-block
rounded-xl
bg-blue-600
px-8
py-4
font-bold
text-white
"

>

Visit Official Website →

</a>

)}



<p className="
mt-6
text-sm
text-slate-500
">

NorthSky Reviews may earn commissions
from qualifying purchases.

</p>


</div>


</section>







</main>

);

}
