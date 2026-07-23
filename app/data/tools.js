import Link from "next/link";

import { tools, categories } from "@/app/data/tools";


export const metadata = {

  title:
    "Best AI Tools Directory 2026 | Reviews, Ratings & Comparisons | NorthSky Reviews",

  description:
    "Explore the best AI tools for business, writing, coding, automation, design, marketing and productivity. Compare AI software with expert reviews and ratings.",

  keywords:[
    "best AI tools 2026",
    "AI software directory",
    "AI productivity tools",
    "AI automation software",
    "AI coding assistants",
    "AI writing tools",
    "ChatGPT alternatives"
  ],

  openGraph:{

    title:
      "Best AI Tools Directory 2026 | NorthSky Reviews",

    description:
      "Find and compare the top AI tools with ratings, reviews and recommendations.",

    url:
      "https://northsky-reviews.vercel.app/all-tools",

    siteName:
      "NorthSky Reviews"

  }

};



const ITEMS_PER_PAGE = 12;



export default async function AllToolsPage({
searchParams
}){


const params =
await searchParams || {};



const search =
params.search || "";



const category =
params.category || "";



const page =
Number(params.page || 1);





let filtered =
tools.filter(tool =>

tool.tags?.includes("ai")

);





if(category){


filtered =
filtered.filter(tool =>

tool.category?.toLowerCase()
===
category.toLowerCase()

);


}





if(search){


const query =
search.toLowerCase();



filtered =
filtered.filter(tool =>

tool.name
.toLowerCase()
.includes(query)

||

tool.description
.toLowerCase()
.includes(query)

||

tool.category
.toLowerCase()
.includes(query)

);

}





filtered.sort(

(a,b)=>

(b.rating || 0)
-
(a.rating || 0)

);





const total =
filtered.length;



const totalPages =
Math.ceil(
total / ITEMS_PER_PAGE
);



const start =
(page - 1) * ITEMS_PER_PAGE;



const results =
filtered.slice(
start,
start + ITEMS_PER_PAGE
);







function buildUrl(number){


const query =
new URLSearchParams();



if(search)

query.set(
"search",
search
);



if(category)

query.set(
"category",
category
);



if(number > 1)

query.set(
"page",
number
);



return `/all-tools${
query.toString()
?
`?${query.toString()}`
:
""
}`;


}
return (

<main className="
min-h-screen 
bg-white 
text-slate-900
">



{/* DIRECTORY SEO SCHEMA */}


<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify({

"@context":
"https://schema.org",

"@type":
"CollectionPage",

"name":
"NorthSky AI Tools Directory",

"description":
"Best AI tools reviewed and compared by NorthSky Reviews.",

"url":
"https://northsky-reviews.vercel.app/all-tools",


mainEntity:{

"@type":
"ItemList",

itemListElement:

results.map((tool,index)=>(

{

"@type":
"ListItem",

position:index+1,

name:
tool.name,

url:
`https://northsky-reviews.vercel.app/reviews/${tool.slug}`

}

))

}

})

}}

/>









{/* HERO SECTION */}


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
">


<div className="
inline-flex
rounded-full
bg-blue-500/20
px-5
py-2
text-sm
font-bold
text-blue-300
">

🤖 Updated AI Rankings 2026

</div>





<h1 className="
mt-6
text-5xl
font-black
md:text-6xl
">

AI Tools Directory

</h1>





<p className="
mt-6
max-w-3xl
text-xl
text-slate-300
">

Discover and compare the best AI software
for business, writing, coding, automation,
design and productivity.

</p>







<div className="
mt-10
grid
gap-5
md:grid-cols-3
">



<div className="
rounded-2xl
bg-white/10
p-6
">


<h3 className="
text-4xl
font-black
">

{total}+

</h3>



<p className="text-slate-300">

AI Tools Reviewed

</p>


</div>







<div className="
rounded-2xl
bg-white/10
p-6
">


<h3 className="
text-4xl
font-black
">

2026

</h3>



<p className="text-slate-300">

Updated Rankings

</p>


</div>







<div className="
rounded-2xl
bg-white/10
p-6
">


<h3 className="
text-4xl
font-black
">

⭐

</h3>



<p className="text-slate-300">

Expert Ratings

</p>


</div>




</div>





</div>


</section>









{/* SEARCH + FILTER */}


<section className="
mx-auto
max-w-7xl
px-6
py-12
">


<div className="
flex
flex-col
gap-5
md:flex-row
">





<form

action="/all-tools"

className="
flex
flex-1
gap-3
"

>


<input

name="search"

defaultValue={search}

placeholder="Search AI tools..."

className="
flex-1
rounded-xl
border
px-5
py-3
outline-none
focus:border-blue-600
"

/>




<button

className="
rounded-xl
bg-blue-600
px-6
py-3
font-bold
text-white
hover:bg-blue-700
"

>

Search

</button>


</form>








<select

defaultValue={category}

onChange={(e)=>{

window.location.href =
e.target.value
?
`/all-tools?category=${e.target.value}`
:
"/all-tools";

}}

className="
rounded-xl
border
px-5
py-3
"

>


<option value="">

All Categories

</option>



{categories.map(cat=>(


<option

key={cat.slug}

value={cat.slug}

>

{cat.icon} {cat.name}

</option>


))}



</select>





</div>


</section>
{/* AI TOOL DIRECTORY GRID */}


<section className="
mx-auto
max-w-7xl
px-6
pb-20
">


<div className="
grid
gap-8
md:grid-cols-3
">





{results.map(tool=>(


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





{/* BADGES */}


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

{tool.category}

</span>





<span className="
font-black
text-green-600
">

⭐ {tool.rating}/10

</span>



</div>








{/* TOOL NAME */}


<h2 className="
mt-6
text-3xl
font-black
">

{tool.name}

</h2>







<p className="
mt-4
text-slate-600
">

{tool.description}

</p>







{/* FEATURES */}


{tool.features && (

<div className="
mt-6
">

<h4 className="
font-black
">

Key Features

</h4>



<ul className="
mt-3
space-y-2
text-sm
text-slate-600
">


{tool.features
.slice(0,3)
.map(feature=>(


<li key={feature}>

✓ {feature}

</li>


))}


</ul>


</div>

)}








{/* PRICING */}


{tool.price && (

<div className="
mt-6
rounded-xl
bg-slate-50
p-4
">


<p className="
text-sm
font-bold
text-slate-500
">

Pricing

</p>


<p className="
mt-1
font-black
">

{tool.price}

</p>


</div>

)}









{/* ACTION BUTTONS */}


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
transition
hover:bg-slate-50
"

>

Read Full Review →

</Link>







{tool.link && (

<a

href={tool.link}

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
transition
hover:bg-blue-700
"

>

Try {tool.name} →

</a>


)}




</div>





</article>


))}






</div>









{/* EMPTY STATE */}


{results.length === 0 && (


<div className="
rounded-3xl
bg-slate-50
p-12
text-center
">


<h2 className="
text-3xl
font-black
">

No AI tools found

</h2>



<p className="
mt-3
text-slate-600
">

Try another search or remove filters.

</p>




<Link

href="/all-tools"

className="
mt-6
inline-block
font-bold
text-blue-600
"

>

Clear Filters →

</Link>



</div>


)}





</section>
{/* PAGINATION */}


{totalPages > 1 && (

<section className="
mb-20
flex
justify-center
gap-3
px-6
">


{Array.from(

{
length: totalPages
},

(_,index)=>

index + 1

)

.map(number=>(


<Link

key={number}

href={buildUrl(number)}

className={`

rounded-xl

px-5

py-3

font-bold

transition

${
number === page

?

"bg-blue-600 text-white"

:

"border hover:bg-slate-50"

}

`}

>

{number}

</Link>


))}



</section>


)}







{/* DIRECTORY CTA */}


<section className="
px-6
pb-20
">


<div className="
mx-auto
max-w-5xl
rounded-3xl
bg-slate-950
p-12
text-center
text-white
">


<h2 className="
text-4xl
font-black
">

Need Help Choosing AI Software?

</h2>



<p className="
mx-auto
mt-4
max-w-2xl
text-slate-300
">

Use NorthSky Reviews to compare AI tools,
software features, pricing and alternatives.

</p>




<Link

href="/ai-advisor"

className="
mt-8
inline-block
rounded-xl
bg-blue-600
px-8
py-4
font-bold
hover:bg-blue-700
"

>

Ask NorthSky AI →

</Link>



</div>


</section>







</main>

);

}