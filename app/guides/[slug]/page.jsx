import Link from "next/link";
import { notFound } from "next/navigation";

import { guides } from "@/app/data/guides";
import { comparisons } from "@/app/data/comparisons";


const siteUrl =
"https://northsky-reviews.vercel.app";



export async function generateStaticParams(){

return guides.map((guide)=>({

slug: guide.slug

}));

}





export async function generateMetadata({params}){


const {slug} = await params;


const guide = guides.find(
(item)=>item.slug === slug
);



if(!guide){

return {

title:"Guide Not Found | NorthSky Reviews"

};

}



return {


title:
`${guide.title} 2026 | Buying Guide | NorthSky Reviews`,



description:
guide.description ||
"NorthSky Reviews expert technology buying guides and recommendations.",



keywords:[

guide.title,

"best technology products 2026",

"software buying guides",

"technology comparisons",

"NorthSky Reviews"

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







export default async function GuidePage({params}){


const {slug}=await params;



const guide =
guides.find(
(item)=>item.slug === slug
);



if(!guide){

notFound();

}



const products =
guide.products || [];





const faq = [

{

q:
`What is the best choice from this ${guide.title} guide?`,

a:
"NorthSky recommends products based on features, pricing, performance, reliability, and overall value."

},

{

q:
"How does NorthSky create buying guides?",

a:
"We research products, compare alternatives, analyze features, pricing, usability, and update recommendations regularly."

},

{

q:
"Are NorthSky recommendations independent?",

a:
"Yes. Affiliate partnerships do not influence our rankings or recommendations."

}

];





return (

<main className="min-h-screen bg-white text-slate-900">





<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify({

"@context":"https://schema.org",

"@type":"Article",

headline:
guide.title,

description:
guide.description,


author:{

"@type":"Organization",

name:
"NorthSky Reviews"

},


publisher:{

"@type":"Organization",

name:
"NorthSky Reviews"

},


mainEntity:{

"@type":"ItemList",

itemListElement:

products.map((product,index)=>(

{

"@type":"ListItem",

position:index+1,

name:
product.name

}

))

}


})

}}

/>






<div className="
mx-auto
max-w-6xl
px-6
pt-8
text-sm
text-slate-500
">


<Link href="/">
Home
</Link>


<span className="mx-2">
/
</span>


<Link href="/guides">
Guides
</Link>


<span className="mx-2">
/
</span>


<span>
{guide.title}
</span>


</div>







<section className="
mt-8
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




<div className="
mt-8
flex
flex-wrap
gap-4
">


<div className="
rounded-xl
bg-white/10
px-6
py-3
font-bold
">

⭐ Expert Recommendations

</div>


<div className="
rounded-xl
bg-white/10
px-6
py-3
font-bold
">

Updated 2026

</div>


</div>


</div>


</section>
  {/* INTRO */}

<section className="
mx-auto
max-w-5xl
px-6
py-16
">


<h2 className="
text-3xl
font-black
">

What We Recommend

</h2>



<p className="
mt-5
text-lg
leading-8
text-slate-600
">

Choosing the right technology product can be
challenging. NorthSky Reviews analyzes
features, pricing, performance, reliability,
security, and overall value to help you make
better buying decisions.

</p>


</section>








{/* TOP PICKS */}


<section className="
bg-slate-50
px-6
py-20
">


<div className="
mx-auto
max-w-7xl
">


<div className="
flex
items-center
justify-between
">


<h2 className="
text-4xl
font-black
">

🏆 Top Picks

</h2>



<Link

href="/reviews"

className="
font-bold
text-blue-600
"

>

View All Reviews →

</Link>


</div>






{products.length === 0 ? (


<div className="
mt-10
rounded-3xl
border
bg-white
p-10
text-center
">


<h3 className="
text-2xl
font-black
">

More recommendations coming soon

</h3>


<p className="
mt-3
text-slate-600
">

NorthSky is currently researching products
for this category.

</p>


</div>


):(



<div className="
mt-10
grid
gap-8
md:grid-cols-3
">



{products.map((product,index)=>(


<article

key={product.name}

className="
rounded-3xl
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

#{index + 1} Pick

</span>



<span className="
font-black
text-green-600
">

⭐ {product.rating || 9}/10

</span>


</div>






<h3 className="
mt-6
text-2xl
font-black
">

{product.name}

</h3>





<p className="
mt-4
text-slate-600
">

{product.description}

</p>







<div className="
mt-6
rounded-2xl
bg-green-50
p-5
">


<h4 className="
font-black
text-green-700
">

Why We Recommend It

</h4>


<p className="
mt-2
text-sm
text-slate-600
">

Strong features, competitive pricing,
and excellent overall value.

</p>


</div>








<div className="
mt-6
space-y-3
">


{product.review && (

<Link

href={`/reviews/${product.review}`}

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

Read Full Review →

</Link>

)}





{product.link && (

<a

href={product.link}

target="_blank"

rel="nofollow sponsored noopener"

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


)}


</div>


</section>









{/* HOW WE CHOOSE */}



<section className="
mx-auto
max-w-6xl
px-6
py-20
">


<h2 className="
text-center
text-4xl
font-black
">

How NorthSky Chooses Products

</h2>






<div className="
mt-10
grid
gap-6
md:grid-cols-4
">



{[

{
icon:"🔬",
title:"Research",
text:"We analyze specifications, features, and real-world performance."
},


{
icon:"💰",
title:"Value",
text:"We compare pricing, features, and long-term benefits."
},


{
icon:"⚡",
title:"Performance",
text:"We evaluate speed, reliability, and usability."
},


{
icon:"⭐",
title:"Ratings",
text:"Products receive scores based on overall user value."
}


].map(item=>(


<div

key={item.title}

className="
rounded-3xl
bg-slate-50
p-7
text-center
"


>


<div className="
text-4xl
">

{item.icon}

</div>



<h3 className="
mt-4
font-black
">

{item.title}

</h3>



<p className="
mt-3
text-sm
text-slate-600
">

{item.text}

</p>



</div>


))}



</div>


</section>









{/* RELATED COMPARISONS */}


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



<p className="
mt-3
text-slate-600
">

Explore detailed comparisons to find
the right technology solution.

</p>





<div className="
mt-10
grid
gap-6
md:grid-cols-3
">



{comparisons.slice(0,3).map(item=>(


<Link

key={item.slug}

href={`/comparisons/${item.slug}`}

className="
rounded-3xl
bg-white
p-7
shadow-sm
transition
hover:-translate-y-2
hover:shadow-lg
"

>


<span className="
font-bold
text-blue-600
">

⚖️ Comparison

</span>




<h3 className="
mt-4
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



<span className="
mt-5
block
font-bold
text-blue-600
">

Compare Now →

</span>


</Link>


))}



</div>


</div>


</section>
  {/* CTA SECTION */}


<section className="
px-6
py-20
">


<div className="
mx-auto
max-w-5xl
rounded-3xl
bg-gradient-to-r
from-blue-600
to-indigo-600
p-12
text-center
text-white
">


<h2 className="
text-4xl
font-black
">

Ready To Choose?

</h2>



<p className="
mx-auto
mt-4
max-w-2xl
text-blue-100
">

Explore NorthSky recommendations,
reviews, and comparisons to find
the best option for your needs.

</p>





<div className="
mt-8
flex
flex-col
justify-center
gap-4
md:flex-row
">



<Link

href="/reviews"

className="
rounded-xl
bg-white
px-8
py-4
font-black
text-blue-600
hover:bg-slate-100
"

>

Browse Reviews

</Link>





<Link

href="/comparisons"

className="
rounded-xl
border
border-white/40
px-8
py-4
font-black
"

>

Compare Products

</Link>


</div>


</div>


</section>









{/* FAQ */}



<section className="
mx-auto
max-w-5xl
px-6
pb-20
">


<h2 className="
text-center
text-4xl
font-black
">

Frequently Asked Questions

</h2>





<div className="
mt-10
space-y-5
">



{faq.map((item)=>(


<div

key={item.q}

className="
rounded-3xl
border
p-6
"

>


<h3 className="
text-lg
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









{/* FAQ SCHEMA */}



<script

type="application/ld+json"

dangerouslySetInnerHTML={{


__html:JSON.stringify({

"@context":
"https://schema.org",


"@type":
"FAQPage",



mainEntity:

faq.map(item=>(


{

"@type":
"Question",


"name":
item.q,



acceptedAnswer:{

"@type":
"Answer",

text:
item.a

}


}

))


})


}}

/>









{/* TRANSPARENCY */}



<section className="
px-6
pb-20
">


<div className="
mx-auto
max-w-4xl
rounded-3xl
bg-slate-100
p-8
text-center
">


<h3 className="
font-black
">

Affiliate Disclosure

</h3>




<p className="
mt-3
text-sm
text-slate-600
">

NorthSky Reviews may earn commissions
from affiliate links. This does not affect
our rankings or recommendations.

We evaluate products based on features,
performance, pricing, security, and overall
value.

</p>


</div>


</section>






</main>

);

}
