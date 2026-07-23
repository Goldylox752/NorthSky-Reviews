import Link from "next/link";
import { tools } from "@/app/data/tools";


export const metadata = {

  title:
    "All AI Tools & Software Reviews 2026 | NorthSky Reviews",

  description:
    "Browse all NorthSky Reviews software reviews including AI tools, automation platforms, VPNs, productivity software, and technology solutions.",

  keywords:[
    "AI tools directory",
    "software reviews",
    "best AI software",
    "automation tools",
    "technology reviews"
  ],

  alternates:{
    canonical:
    "https://northsky-reviews.vercel.app/all-tools"
  }

};





export default function AllToolsPage(){


const sortedTools = [...tools].sort(

(a,b)=>

(b.rating || 0) - (a.rating || 0)

);





const schema = {

"@context":"https://schema.org",

"@type":"CollectionPage",

"name":
"All AI Tools & Software Reviews",

"description":
"Complete directory of technology software reviews from NorthSky Reviews.",

"url":
"https://northsky-reviews.vercel.app/all-tools",


"mainEntity":{

"@type":"ItemList",

"itemListElement":

sortedTools.map((tool,index)=>({

"@type":"ListItem",

"position":index + 1,

"name":tool.name,

"url":
`https://northsky-reviews.vercel.app/reviews/${tool.slug}`

}))

}

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
text-center
text-white
">


<div className="mx-auto max-w-6xl">


<span className="
rounded-full
bg-blue-500/20
px-5
py-2
font-bold
text-blue-300
">

🚀 Software Directory

</span>



<h1 className="
mt-8
text-5xl
font-black
md:text-7xl
">

Explore All Tools

</h1>




<p className="
mx-auto
mt-6
max-w-3xl
text-xl
text-slate-300
">

Discover AI software, automation platforms,
VPNs, productivity tools, and technology
solutions reviewed by NorthSky.

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

All Reviews

</h2>



<div className="
rounded-full
bg-blue-50
px-5
py-3
font-bold
text-blue-600
">

{sortedTools.length} Tools Reviewed

</div>


</div>









<div className="
mt-12
grid
gap-8
md:grid-cols-3
">


{sortedTools.map((tool)=>(



<Link

key={tool.slug}

href={`/reviews/${tool.slug}`}

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

{tool.category || "Software"}

</span>



<span className="
font-black
text-green-600
">

⭐ {tool.rating || "N/A"}

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
line-clamp-3
">

{tool.description}

</p>







<div className="
mt-6
font-bold
text-blue-600
">

Read Full Review →

</div>



</Link>



))}



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

Browse By Category

</h2>





<div className="
mt-10
grid
gap-6
md:grid-cols-4
">



[

["🤖 AI Tools","/ai"],

["⚙️ Automation","/categories/automation"],

["🔒 VPNs","/categories/vpn"],

["💻 Software","/reviews"]

].map(item=>(


<Link

key={item[0]}

href={item[1]}

className="
rounded-2xl
bg-white
p-6
text-center
font-bold
shadow
hover:shadow-xl
"

>

{item[0]}

</Link>


))



</div>


</div>


</section>









<section className="
bg-blue-600
px-6
py-20
text-center
text-white
">


<h2 className="
text-4xl
font-black
">

Find The Right Technology

</h2>


<p className="
mt-5
text-lg
text-blue-100
">

Compare tools, read expert reviews,
and choose software with confidence.

</p>



<Link

href="/comparisons"

className="
mt-8
inline-block
rounded-xl
bg-white
px-8
py-4
font-bold
text-blue-600
"

>

Compare Software →

</Link>


</section>





</main>

);

}
