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



  const guide =
  guides.find(
    (item)=>item.slug === slug
  );




  if(!guide){


    return {

      title:
      "Guide Not Found | NorthSky Reviews"

    };


  }






  return {


    title:

    `${guide.title} 2026 | Expert Buying Guide | NorthSky Reviews`,





    description:

    guide.description ||

    `Find the best products, software, and technology recommendations with NorthSky Reviews expert buying guides.`,





    keywords:[


      guide.title,

      "best products 2026",

      "technology buying guides",

      "expert reviews",

      "product comparisons",

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






return (

<main className="
min-h-screen
bg-white
text-slate-900
">







{/* ARTICLE + PRODUCT SCHEMA */}



<script

type="application/ld+json"

dangerouslySetInnerHTML={{


__html:JSON.stringify({

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

"name":
"NorthSky Reviews"

},






publisher:{

"@type":
"Organization",

"name":
"NorthSky Reviews"

},






mainEntity:{


"@type":
"ItemList",




itemListElement:

products.map((product,index)=>(


{

"@type":
"ListItem",



"position":
index + 1,



"name":
product.name

}


))


}



})

}}

/>









{/* BREADCRUMBS */}



<div className="
mx-auto
max-w-6xl
px-6
pt-8
text-sm
text-slate-500
">



<Link

href="/"

className="
hover:text-blue-600
"

>

Home

</Link>



<span className="
mx-2
">

/

</span>





<Link

href="/guides"

className="
hover:text-blue-600
"

>

Guides

</Link>





<span className="
mx-2
">

/

</span>





<span>

{guide.title}

</span>



</div>









{/* HERO */}



<section className="
mt-8
bg-gradient-to-br
from-slate-950
via-indigo-950
to-blue-900
px-6
py-20
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
mt-5
text-5xl
font-black
md:text-6xl
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
{/* INTRODUCTION */}


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
leading-8
text-slate-600
">

Choosing the right technology can be
overwhelming. NorthSky Reviews researches
features, pricing, performance, reliability,
and real-world value to help you make a
better decision.

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
hover:underline
"

>

View Reviews →

</Link>




</div>









<div className="
mt-10
grid
gap-8
md:grid-cols-3
">





{guide.products?.map((product,index)=>(


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




<p className="
font-black
text-green-700
">

Why We Recommend It

</p>




<p className="
mt-2
text-sm
text-slate-600
">

Strong features, competitive value,
and reliable performance.

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

Check Price →

</a>


)}





</div>





</article>



))}





</div>





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
text:"We analyze features, specifications, and real-world performance."
},


{
icon:"💰",
title:"Value",
text:"We compare pricing, benefits, and long-term value."
},


{
icon:"⚡",
title:"Performance",
text:"We evaluate speed, reliability, and usability."
},


{
icon:"⭐",
title:"Ratings",
text:"We rank products based on overall user value."
}


].map((item)=>(


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



{comparisons.length > 0 && (


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

See detailed comparisons to help choose
the right option.

</p>








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
shadow-sm
transition
hover:-translate-y-2
hover:shadow-lg
"

>


<div className="
font-bold
text-blue-600
">

⚖️ Comparison

</div>




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


)}









{/* AFFILIATE CTA */}



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
to-purple-600
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

Explore recommended products and
find the best solution for your needs.

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
"

>

Browse Reviews

</Link>





<Link

href="/comparisons"

className="
rounded-xl
border
border-white
px-8
py-4
font-black
"

>

Compare Options

</Link>



</div>





</div>



</section>
{/* FAQ SECTION */}



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





{[

{

q:
`What is the best choice from this ${guide.title} guide?`,

a:
`NorthSky recommends products based on features, pricing, performance, reliability, and overall value.`

},



{

q:
`How does NorthSky create buying guides?`,

a:
`We research products, compare alternatives, analyze user value, and update recommendations regularly.`

},



{

q:
`Are NorthSky recommendations independent?`,

a:
`Yes. Some links may be affiliate links, but recommendations are based on product quality and usefulness.`

}



].map((item)=>(



<div

key={item.q}

className="
rounded-3xl
border
p-6
"


>


<h3 className="
font-black
text-lg
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




mainEntity:[

{

"@type":
"Question",

"name":
`What is the best choice from this ${guide.title} guide?`,



acceptedAnswer:{

"@type":
"Answer",

text:
"NorthSky recommends products based on features, pricing, performance, reliability, and value."

}

},




{

"@type":
"Question",

"name":
"How does NorthSky create buying guides?",


acceptedAnswer:{

"@type":
"Answer",

text:
"NorthSky researches products, compares alternatives, and updates recommendations regularly."

}

}



]

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
We evaluate products based on quality,
features, and value.

</p>




</div>


</section>






</main>

);

}