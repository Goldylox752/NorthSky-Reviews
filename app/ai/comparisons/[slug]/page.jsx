import Link from "next/link";
import { notFound } from "next/navigation";


const comparisons = {


"chatgpt-vs-claude":{

title:
"ChatGPT vs Claude AI 2026",

description:
"Compare ChatGPT and Claude AI features, pricing, writing ability, coding performance, and best use cases.",


winner:
"ChatGPT",


tools:[
{
name:"ChatGPT",
rating:"9.8/10",
best:
"Best overall AI assistant",
features:[
"Writing",
"Coding",
"Research",
"Business automation"
]
},

{
name:"Claude AI",
rating:"9.5/10",
best:
"Best for writing and analysis",
features:[
"Long documents",
"Reasoning",
"Research",
"Professional writing"
]
}

]

},



"chatgpt-vs-gemini":{

title:
"ChatGPT vs Google Gemini 2026",

description:
"Compare ChatGPT and Google Gemini AI assistants for productivity, research, coding, and business.",


winner:
"ChatGPT",


tools:[

{
name:"ChatGPT",
rating:"9.8/10",
best:
"Best all-around AI tool",
features:[
"Writing",
"Coding",
"Plugins",
"Custom GPTs"
]
},


{
name:"Google Gemini",
rating:"9.3/10",
best:
"Best Google ecosystem AI",
features:[
"Search integration",
"Google Workspace",
"Multimodal AI"
]
}

]

}

};



export async function generateStaticParams(){

return Object.keys(comparisons).map((slug)=>({
slug
}));

}



export async function generateMetadata({params}){

const page = comparisons[params.slug];


if(!page){

return {
title:"AI Comparison | NorthSky Reviews"
};

}


return {

title:
`${page.title} | NorthSky Reviews`,

description:
page.description

};

}



export default function ComparisonPage({params}){


const page = comparisons[params.slug];


if(!page){

notFound();

}



return (

<main className="min-h-screen bg-white text-slate-900">


<section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-6 py-24 text-white">

<div className="mx-auto max-w-5xl text-center">


<span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">
AI Comparison
</span>


<h1 className="mt-8 text-5xl font-black">
{page.title}
</h1>


<p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">
{page.description}
</p>


</div>

</section>




<section className="mx-auto max-w-6xl px-6 py-20">


<h2 className="text-center text-4xl font-black">
Comparison Results
</h2>



<div className="mt-12 grid gap-8 md:grid-cols-2">


{page.tools.map(tool=>(


<div
key={tool.name}
className="rounded-3xl border p-8 shadow-sm"
>


<h3 className="text-3xl font-black">
{tool.name}
</h3>


<p className="mt-3 text-blue-600 font-bold">
⭐ {tool.rating}
</p>


<p className="mt-4 font-bold">
{tool.best}
</p>



<ul className="mt-6 space-y-3">

{tool.features.map(feature=>(

<li key={feature}>
✅ {feature}
</li>

))}

</ul>


</div>


))}


</div>




<div className="mt-12 rounded-3xl bg-blue-600 p-10 text-center text-white">


<h2 className="text-3xl font-black">
Winner: {page.winner}
</h2>


<p className="mt-4">
Based on features, usability, performance, and overall value.
</p>


</div>




<div className="mt-12 text-center">

<Link
href="/ai"
className="font-bold text-blue-600"
>
← Back to AI Hub
</Link>

</div>


</section>


</main>

);

}