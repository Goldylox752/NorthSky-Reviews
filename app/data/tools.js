import Link from "next/link";
import { tools, categories } from "@/app/data/tools";


export const metadata = {

  title:
    "Best AI Tools Directory 2026 | Reviews, Ratings & Comparisons | NorthSky Reviews",

  description:
    "Discover the best AI tools for writing, coding, business, automation, design, and productivity. Compare AI software with expert reviews.",

  keywords:[
    "best AI tools 2026",
    "AI software reviews",
    "AI productivity tools",
    "AI automation tools",
    "AI coding assistants"
  ]

};



const ITEMS_PER_PAGE = 12;



export default async function AllToolsPage({searchParams}){


const params = await searchParams || {};



const search =
params.search || "";



const category =
params.category || "";



const page =
Number(params.page || 1);





let filtered = tools.filter(tool =>

tool.tags?.includes("ai")

);





if(category){


const selectedCategory =
categories.find(
cat=>cat.slug === category
);



if(selectedCategory){

filtered =
filtered.filter(
tool =>
tool.category === selectedCategory.name
);

}


}




if(search){


const query =
search.toLowerCase();



filtered =
filtered.filter(tool=>

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
(b.rating || 0) -
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



const url =
query.toString();



return `/all-tools${url ? `?${url}` : ""}`;

}





return (

<main className="min-h-screen bg-white text-slate-900">





<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify({

"@context":"https://schema.org",

"@type":"CollectionPage",

"name":
"NorthSky AI Tools Directory",

"description":
"Best AI tools reviewed by NorthSky Reviews.",


"url":
"https://northsky-reviews.vercel.app/all-tools",


mainEntity:{

"@type":"ItemList",

itemListElement:

results.map((tool,index)=>({

"@type":"ListItem",

position:index+1,

name:tool.name,

url:
`https://northsky-reviews.vercel.app/reviews/${tool.slug}`

}))

}

})

}}

/>









<section className="bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-900 px-6 py-24 text-white">


<div className="mx-auto max-w-6xl">


<h1 className="text-5xl font-black md:text-6xl">

AI Tools Directory

</h1>


<p className="mt-6 max-w-3xl text-xl text-slate-300">

Explore top-rated AI software for business,
writing, coding, design, automation,
and productivity.

</p>




<div className="mt-10 grid gap-5 md:grid-cols-3">


<div className="rounded-2xl bg-white/10 p-6">

<p className="text-4xl font-black">

{total}+

</p>

<p className="text-slate-300">

AI Tools

</p>

</div>



<div className="rounded-2xl bg-white/10 p-6">

<p className="text-4xl font-black">

2026

</p>

<p className="text-slate-300">

Updated Rankings

</p>

</div>



<div className="rounded-2xl bg-white/10 p-6">

<p className="text-4xl font-black">

⭐

</p>

<p className="text-slate-300">

Expert Reviews

</p>

</div>


</div>


</div>

</section>








<section className="mx-auto max-w-7xl px-6 py-12">


<div className="flex flex-col gap-5 md:flex-row">



<form

action="/all-tools"

className="flex flex-1 gap-3"

>


<input

name="search"

defaultValue={search}

placeholder="Search AI tools..."

className="flex-1 rounded-xl border px-5 py-3"

/>



<button

className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white"

>

Search

</button>


</form>





<select

defaultValue={category}

onChange={(e)=>

window.location.href =
`/all-tools?category=${e.target.value}`

}

className="rounded-xl border px-5 py-3"

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








<section className="mx-auto max-w-7xl px-6 pb-20">


<div className="grid gap-8 md:grid-cols-3">


{results.map(tool=>(


<article

key={tool.slug}

className="rounded-3xl border p-8 transition hover:-translate-y-2 hover:shadow-xl"

>


<div className="flex justify-between">


<span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-bold text-blue-700">

{tool.category}

</span>



<span className="font-bold text-green-600">

⭐ {tool.rating}/10

</span>


</div>




<h2 className="mt-6 text-3xl font-black">

{tool.name}

</h2>




<p className="mt-4 text-slate-600">

{tool.description}

</p>





<div className="mt-8 space-y-3">


<Link

href={`/reviews/${tool.slug}`}

className="block rounded-xl border px-5 py-3 text-center font-bold"

>

Read Full Review →

</Link>





{tool.link && (

<a

href={tool.link}

target="_blank"

rel="noopener noreferrer sponsored"

className="block rounded-xl bg-blue-600 px-5 py-3 text-center font-bold text-white"

>

Try {tool.name} →

</a>

)}


</div>


</article>


))}


</div>






{results.length === 0 && (

<div className="rounded-3xl bg-slate-50 p-12 text-center">


<h2 className="text-3xl font-black">

No AI tools found

</h2>


<Link

href="/all-tools"

className="mt-5 inline-block font-bold text-blue-600"

>

Clear Filters

</Link>


</div>

)}


</section>








{totalPages > 1 && (

<div className="mb-20 flex justify-center gap-3">


{Array.from(

{length:totalPages},

(_,i)=>i+1

).map(number=>(


<Link

key={number}

href={buildUrl(number)}

className={`rounded-xl px-5 py-3 font-bold ${
number===page
?
"bg-blue-600 text-white"
:
"border"
}`}

>

{number}

</Link>


))}


</div>

)}




</main>

);

}