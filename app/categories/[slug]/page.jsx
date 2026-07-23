import Link from "next/link";
import { notFound } from "next/navigation";

import {
  categories,
  tools
} from "@/app/data/tools";

import {
  comparisons
} from "@/app/data/comparisons";

import {
  guides
} from "@/app/data/guides";



const siteUrl =
"https://northsky-reviews.vercel.app";







export async function generateStaticParams(){

  return categories.map((category)=>({

    slug: category.slug

  }));

}







export async function generateMetadata({params}){


const {slug} =
await params;



const category =
categories.find(
(item)=>item.slug === slug
);





if(!category){


return {

title:
"Category Not Found | NorthSky Reviews"

};


}







return {



title:

`Best ${category.name} Tools 2026 | Reviews, Comparisons & Rankings | NorthSky Reviews`,






description:

`Find the best ${category.name} tools in 2026. Compare features, pricing, ratings, reviews, alternatives, and expert recommendations from NorthSky Reviews.`,






keywords:[


`best ${category.name} tools 2026`,

`${category.name} reviews`,

`${category.name} software`,

`${category.name} comparison`,

`top ${category.name} apps`


],






alternates:{


canonical:

`${siteUrl}/categories/${category.slug}`


},







openGraph:{


title:

`Best ${category.name} Tools 2026`,




description:

`Expert reviews and comparisons of the best ${category.name} tools.`,




url:

`${siteUrl}/categories/${category.slug}`,




siteName:

"NorthSky Reviews"



}



};


}
export default async function CategoryPage({params}){


const {slug}=await params;




const category =
categories.find(
(item)=>item.slug === slug
);




if(!category){

notFound();

}





const categoryTools =
tools.filter(

(tool)=>

tool.category?.toLowerCase() ===
category.name.toLowerCase()

);






const categoryGuides =
guides.filter(

(guide)=>

guide.category?.toLowerCase() ===
category.name.toLowerCase()

);






const categoryComparisons =
comparisons.filter(

(comparison)=>

comparison.category?.toLowerCase() ===
category.name.toLowerCase()

);






const featuredTools =
[...categoryTools]

.sort(

(a,b)=>

(b.rating || 0) -
(a.rating || 0)

)

.slice(0,6);







return (


<main className="
min-h-screen
bg-white
text-slate-900
">






{/* CATEGORY SCHEMA */}



<script

type="application/ld+json"

dangerouslySetInnerHTML={{


__html:JSON.stringify({

"@context":
"https://schema.org",


"@type":
"CollectionPage",




"name":

`Best ${category.name} Tools 2026`,





"description":

`NorthSky Reviews rankings and reviews for the best ${category.name} tools.`,






"url":

`${siteUrl}/categories/${category.slug}`,







"mainEntity":{


"@type":
"ItemList",



"itemListElement":

featuredTools.map((tool,index)=>(

{

"@type":
"ListItem",


"position":
index+1,



"name":
tool.name,



"url":

`${siteUrl}/reviews/${tool.slug}`

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



<span className="mx-2">

/

</span>



<Link

href="/categories"

className="
hover:text-blue-600
"

>

Categories

</Link>



<span className="mx-2">

/

</span>



<span>

{category.name}

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
text-6xl
">

{category.icon}

</div>







<h1 className="
mt-6
text-5xl
font-black
md:text-6xl
">

Best {category.name} Tools 2026

</h1>







<p className="
mt-6
max-w-3xl
text-xl
text-slate-300
">

Explore expert reviews, rankings,
comparisons, and buying guides for
the best {category.name.toLowerCase()}
tools available today.

</p>








<div className="
mt-10
grid
gap-5
md:grid-cols-3
">





<div className="
rounded-3xl
bg-white/10
p-6
">


<p className="
text-4xl
font-black
">

{categoryTools.length}+

</p>


<p className="
text-slate-300
">

Tools Reviewed

</p>


</div>







<div className="
rounded-3xl
bg-white/10
p-6
">


<p className="
text-4xl
font-black
">

2026

</p>


<p className="
text-slate-300
">

Updated Rankings

</p>


</div>







<div className="
rounded-3xl
bg-white/10
p-6
">


<p className="
text-4xl
font-black
">

⭐

</p>


<p className="
text-slate-300
">

Expert Ratings

</p>


</div>





</div>





</div>


</section>
{/* FEATURED TOOLS */}


<section className="
mx-auto
max-w-7xl
px-6
py-16
">


<div className="
flex
items-center
justify-between
">




<div>

<h2 className="
text-4xl
font-black
">

Top Rated {category.name} Tools

</h2>



<p className="
mt-3
text-slate-600
">

Our highest-rated {category.name.toLowerCase()}
tools based on features, usability,
and value.

</p>


</div>




<Link

href="/all-tools"

className="
font-bold
text-blue-600
hover:underline
"

>

View All Tools →

</Link>




</div>








<div className="
mt-10
grid
gap-8
md:grid-cols-3
">






{featuredTools.map((tool,index)=>(


<article

key={tool.slug}

className="
rounded-3xl
border
bg-white
p-8
transition
hover:-translate-y-2
hover:shadow-xl
"

>




<div className="
flex
items-center
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

#{index + 1}

</span>




<span className="
font-black
text-green-600
">

⭐ {tool.rating}/10

</span>



</div>








<h3 className="
mt-6
text-2xl
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
mt-6
flex
gap-3
">


<Link

href={`/reviews/${tool.slug}`}

className="
flex-1
rounded-xl
border
px-4
py-3
text-center
font-bold
hover:bg-slate-50
"

>

Review

</Link>





{tool.link && (

<a

href={tool.link}

target="_blank"

rel="nofollow sponsored noopener"

className="
flex-1
rounded-xl
bg-blue-600
px-4
py-3
text-center
font-bold
text-white
"

>

Try →

</a>


)}



</div>




</article>



))}





</div>


</section>









{/* GUIDES */}



{categoryGuides.length > 0 && (


<section className="
bg-slate-50
px-6
py-16
">



<div className="
mx-auto
max-w-6xl
">





<h2 className="
text-4xl
font-black
">

Best {category.name} Guides

</h2>






<p className="
mt-3
text-slate-600
">

Learn how to choose the right
tools with NorthSky buying guides.

</p>








<div className="
mt-10
grid
gap-6
md:grid-cols-3
">





{categoryGuides.map((guide)=>(


<Link

key={guide.slug}

href={`/guides/${guide.slug}`}

className="
rounded-3xl
bg-white
p-7
shadow-sm
transition
hover:-translate-y-1
hover:shadow-lg
"

>



<h3 className="
text-xl
font-black
">

{guide.title}

</h3>




<p className="
mt-3
text-slate-600
">

{guide.description}

</p>





<div className="
mt-5
font-bold
text-blue-600
">

Read Guide →

</div>




</Link>



))}



</div>





</div>



</section>


)}
{/* COMPARISONS */}


{categoryComparisons.length > 0 && (


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
">


<div>


<h2 className="
text-4xl
font-black
">

Compare {category.name} Tools

</h2>



<p className="
mt-3
text-slate-600
">

See differences in features,
pricing, performance, and value.

</p>



</div>





<Link

href="/comparisons"

className="
font-bold
text-blue-600
hover:underline
"

>

View All Comparisons →

</Link>




</div>









<div className="
mt-10
grid
gap-6
md:grid-cols-2
">





{categoryComparisons.slice(0,6).map((item)=>(


<Link

key={item.slug}

href={`/comparisons/${item.slug}`}

className="
rounded-3xl
border
bg-white
p-8
transition
hover:-translate-y-2
hover:shadow-xl
"

>



<div className="
text-blue-600
font-bold
">

⚖️ Comparison

</div>





<h3 className="
mt-4
text-2xl
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




<div className="
mt-5
font-bold
text-blue-600
">

Compare Now →

</div>



</Link>



))}



</div>



</section>


)}









{/* CATEGORY CTA */}



<section className="
px-6
pb-20
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

Find The Best {category.name} Tools

</h2>





<p className="
mx-auto
mt-4
max-w-2xl
text-blue-100
">

Explore recommended tools,
compare options, and choose
the right solution for your needs.

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

href="/all-tools"

className="
rounded-xl
bg-white
px-8
py-4
font-black
text-blue-600
"

>

Browse All Tools

</Link>





<Link

href="/newsletter"

className="
rounded-xl
border
border-white
px-8
py-4
font-black
"

>

Get Weekly Updates

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
`What are the best ${category.name} tools in 2026?`,

a:
`NorthSky Reviews ranks the best ${category.name.toLowerCase()} tools based on features, pricing, usability, performance, and overall value.`

},



{

q:
`How does NorthSky review ${category.name} tools?`,

a:
`We analyze product features, pricing, user experience, integrations, and real-world usefulness before creating recommendations.`

},



{

q:
`Are these ${category.name} recommendations independent?`,

a:
`Yes. NorthSky Reviews provides independent research and comparisons. Some links may be affiliate links that help support the site.`

}



].map(item=>(


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



mainEntity:[

{

"@type":
"Question",

"name":
`What are the best ${category.name} tools in 2026?`,

acceptedAnswer:{

"@type":
"Answer",

text:
`NorthSky ranks the best ${category.name.toLowerCase()} tools based on features, pricing, usability and value.`

}

},



{

"@type":
"Question",

"name":
`How does NorthSky review ${category.name} tools?`,

acceptedAnswer:{

"@type":
"Answer",

text:
"NorthSky analyzes features, pricing, performance and user experience."

}

}



]

})

}}

/>









{/* TRANSPARENCY */}



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
text-slate-600
">

NorthSky Reviews creates independent rankings,
reviews, and buying guides. Some links may be
affiliate links, meaning we may earn a commission
at no additional cost to you.

</p>



</div>


</section>







</main>

);

}