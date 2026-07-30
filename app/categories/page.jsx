import Link from "next/link";

import { categories, tools } from "@/app/data/tools";


const siteUrl =
  "https://northsky-reviews.vercel.app";



export const metadata = {

  title:
    "Best Software Categories 2026 | AI Tools, SaaS, VPNs & Technology Reviews | NorthSky Reviews",

  description:
    "Explore NorthSky Reviews software categories covering AI tools, SaaS platforms, automation software, cybersecurity, productivity apps, and business technology.",

  keywords: [
    "best software categories 2026",
    "AI software",
    "SaaS reviews",
    "automation tools",
    "business software",
    "technology reviews",
  ],

  alternates: {
    canonical:
      `${siteUrl}/categories`,
  },

  openGraph: {

    title:
      "Software Categories 2026 | NorthSky Reviews",

    description:
      "Browse expert software reviews, rankings, comparisons, and buying guides across leading technology categories.",

    url:
      `${siteUrl}/categories`,

    siteName:
      "NorthSky Reviews",

    type:
      "website",

  },

};





export default function CategoriesPage(){



const schema = {

  "@context":
    "https://schema.org",

  "@type":
    "CollectionPage",

  name:
    "NorthSky Reviews Software Categories",

  description:
    "Browse technology categories including AI software, SaaS, automation, security, and business tools.",

  url:
    `${siteUrl}/categories`,

  publisher: {

    "@type":
      "Organization",

    name:
      "NorthSky Reviews",

    url:
      siteUrl,

  },


  mainEntity: {

    "@type":
      "ItemList",

    itemListElement:

      categories.map((category,index)=>(

        {

          "@type":
            "ListItem",

          position:
            index + 1,

          name:
            category.name,

          url:
            `${siteUrl}/categories/${category.slug}`

        }

      ))

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
text-center
text-white
">


<div className="
mx-auto
max-w-6xl
">


<span className="
rounded-full
bg-blue-500/20
px-5
py-2
text-sm
font-bold
text-blue-300
">

NorthSky Software Directory

</span>





<h1 className="
mt-8
text-5xl
font-black
md:text-7xl
">

Explore Software Categories

</h1>





<p className="
mx-auto
mt-6
max-w-3xl
text-xl
leading-8
text-slate-300
">

Discover the best AI tools, SaaS platforms,
automation software, and technology products
with expert reviews, comparisons, and rankings.

</p>





<div className="
mt-10
flex
flex-wrap
justify-center
gap-5
">


<Link

href="/all-tools"

className="
rounded-xl
bg-blue-500
px-8
py-4
font-black
text-white
hover:bg-blue-600
"

>

Browse All Tools →

</Link>





<Link

href="/reviews"

className="
rounded-xl
border
border-white/30
px-8
py-4
font-bold
hover:bg-white/10
"

>

Read Reviews →

</Link>


</div>



</div>


</section>









<section className="
px-6
py-20
">


<div className="
mx-auto
max-w-7xl
">



<h2 className="
text-center
text-4xl
font-black
">

Browse Technology Categories

</h2>



<p className="
mx-auto
mt-4
max-w-2xl
text-center
text-lg
text-slate-600
">

Find software solutions for productivity,
business, security, creativity, and AI.

</p>







<div className="
mt-12
grid
gap-8
md:grid-cols-3
">





{categories.map((category)=>{


const categoryTools =
tools.filter(

(tool)=>

tool.category?.toLowerCase() ===
category.name.toLowerCase()

);



return (


<Link

key={category.slug}

href={`/categories/${category.slug}`}

className="
group
rounded-3xl
border
bg-white
p-8
transition
hover:-translate-y-2
hover:shadow-xl
hover:border-blue-500
"


>



<div className="
text-5xl
">

{category.icon || "🚀"}

</div>





<h3 className="
mt-6
text-2xl
font-black
">

{category.name}

</h3>





<p className="
mt-4
leading-7
text-slate-600
">

{category.description ||

`Explore the best ${category.name} software, reviews, comparisons, and recommendations.`

}

</p>







<div className="
mt-6
flex
items-center
justify-between
rounded-xl
bg-slate-100
px-4
py-3
font-bold
">


<span>
Tools Reviewed
</span>



<span className="
text-blue-600
">

{categoryTools.length}

</span>


</div>





<div className="
mt-6
font-bold
text-blue-600
group-hover:underline
">

Explore {category.name} →

</div>



</Link>


);


})}



</div>



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
text-center
text-4xl
font-black
">

Why Trust NorthSky Reviews?

</h2>





<div className="
mt-12
grid
gap-6
md:grid-cols-4
">


{[

{
title:"Independent Research",
text:"We analyze software features, pricing, usability, and performance."
},

{
title:"Expert Comparisons",
text:"We compare alternatives to help users choose better tools."
},

{
title:"Updated Rankings",
text:"Our rankings evolve as technology products change."
},

{
title:"Transparent Reviews",
text:"Some links may be affiliate links, but recommendations remain editorial."
}

].map((item)=>(


<div

key={item.title}

className="
rounded-3xl
bg-white
p-7
shadow-sm
"

>


<h3 className="
font-black
">

{item.title}

</h3>



<p className="
mt-3
text-sm
leading-6
text-slate-600
">

{item.text}

</p>


</div>


))}



</div>


</div>


</section>









<section className="
px-6
py-24
">


<div className="
mx-auto
max-w-5xl
rounded-3xl
bg-gradient-to-r
from-blue-600
to-indigo-700
p-12
text-center
text-white
">


<h2 className="
text-4xl
font-black
">

Find The Right Software

</h2>




<p className="
mt-5
text-lg
text-blue-100
">

Explore reviews, comparisons,
and buying guides from NorthSky Reviews.

</p>





<div className="
mt-8
flex
flex-wrap
justify-center
gap-5
">


<Link

href="/guides"

className="
rounded-xl
bg-white
px-8
py-4
font-black
text-blue-600
"

>

View Guides →

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

Compare Tools →

</Link>


</div>



</div>


</section>









<section className="
px-6
pb-16
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

NorthSky Transparency

</h3>



<p className="
mt-3
text-sm
leading-6
text-slate-600
">

NorthSky Reviews publishes independent software
reviews, rankings, and buying guides. Some links
may be affiliate links that help support our work
at no additional cost to readers.

</p>


</div>


</section>





</main>

);

}
