import Link from "next/link";
import { tools } from "@/app/data/tools";


const siteUrl = "https://northsky-reviews.vercel.app";


export const metadata = {

title:
"Best AI Tools 2026 | AI Software Reviews & Comparisons | NorthSky Reviews",

description:
"Discover the best AI tools in 2026. Compare AI writing tools, productivity software, automation platforms, and ChatGPT alternatives reviewed by NorthSky.",

keywords:[
"best AI tools 2026",
"AI software reviews",
"ChatGPT alternatives",
"AI productivity tools",
"AI automation software"
],

alternates:{
canonical:`${siteUrl}/category/ai`
}

};



export default function AICategoryPage(){


const aiTools = tools.filter(
(tool)=>
tool.category?.toLowerCase().includes("ai")
);



return (

<main className="min-h-screen bg-white text-slate-900">


<section className="
bg-gradient-to-br
from-slate-950
via-blue-950
to-blue-600
px-6
py-24
text-white
">


<div className="mx-auto max-w-6xl">


<span className="
rounded-full
bg-blue-500/20
px-4
py-2
font-bold
">

🤖 AI Tools

</span>


<h1 className="
mt-8
text-5xl
font-black
md:text-7xl
">

Best AI Tools 2026

</h1>


<p className="
mt-6
max-w-3xl
text-xl
text-slate-300
">

Explore the best artificial intelligence tools for business,
productivity, creativity, and automation. NorthSky Reviews
tests and compares AI software to help you choose the right tool.

</p>


</div>

</section>





<section className="
mx-auto
max-w-6xl
px-6
py-20
">


<h2 className="
text-4xl
font-black
">

AI Software Reviews

</h2>


<p className="
mt-4
text-slate-600
">

Expert reviews, ratings, pricing information, and alternatives
for the fastest-growing AI platforms.

</p>




<div className="
mt-10
grid
gap-8
md:grid-cols-2
lg:grid-cols-3
">


{aiTools.map((tool)=>(


<div

key={tool.slug}

className="
rounded-3xl
border
p-8
shadow-sm
"

>


<div className="flex justify-between">


<span className="
rounded-full
bg-blue-50
px-3
py-1
text-sm
font-bold
text-blue-700
">

{tool.category}

</span>


<span>
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
mt-3
text-slate-600
">

{tool.description}

</p>




<Link

href={`/reviews/${tool.slug}`}

className="
mt-6
inline-block
rounded-xl
bg-blue-600
px-6
py-3
font-bold
text-white
"

>

Read Review →

</Link>



</div>


))}



</div>



</section>





<section className="
bg-slate-50
px-6
py-20
">


<div className="mx-auto max-w-5xl text-center">


<h2 className="
text-4xl
font-black
">

How We Review AI Tools

</h2>


<p className="
mt-5
text-slate-600
">

NorthSky Reviews evaluates AI platforms based on features,
performance, usability, pricing, and real-world value.

</p>


</div>


</section>



</main>

);

}