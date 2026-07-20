import Link from "next/link";


export const metadata = {

title:
"Best AI Tools 2026 | NorthSky Reviews",

description:
"Discover the best AI tools for business, productivity, coding, creativity, and automation.",

keywords:[
"best AI tools",
"AI software",
"ChatGPT alternatives",
"AI productivity tools",
"AI automation"
]

};



const tools = [

{
name:"ChatGPT",
category:"AI Assistant",
description:
"Powerful AI assistant for writing, research, coding, brainstorming, and productivity.",
link:"https://chat.openai.com"
},


{
name:"Claude AI",
category:"AI Assistant",
description:
"Advanced AI assistant focused on reasoning, writing, and document analysis.",
link:"https://claude.ai"
},


{
name:"Midjourney",
category:"AI Image Generation",
description:
"Create high-quality AI images, designs, and creative artwork.",
link:"https://www.midjourney.com"
},


{
name:"GitHub Copilot",
category:"AI Coding",
description:
"AI coding assistant helping developers write software faster.",
link:"https://github.com/features/copilot"
},


{
name:"Jasper AI",
category:"AI Marketing",
description:
"AI writing platform for marketing teams and businesses.",
link:"https://www.jasper.ai"
},


{
name:"Perplexity AI",
category:"AI Search",
description:
"AI-powered search engine for research and information discovery.",
link:"https://www.perplexity.ai"
}

];



export default function AIToolsPage(){


return (

<main className="min-h-screen bg-white text-slate-900">


<section className="bg-slate-950 px-6 py-24 text-center text-white">

<h1 className="text-5xl font-black md:text-6xl">

Best AI Tools 2026

</h1>


<p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">

Explore the best AI software for productivity,
business, creativity, coding, and automation.

</p>


</section>




<section className="mx-auto max-w-7xl px-6 py-20">


<h2 className="text-4xl font-black mb-10">

Top AI Recommendations

</h2>



<div className="grid gap-8 md:grid-cols-3">


{tools.map((tool)=>(


<div

key={tool.name}

className="rounded-3xl border p-8 shadow-sm hover:shadow-xl transition"

>


<span className="text-sm font-bold text-blue-600">

{tool.category}

</span>



<h3 className="mt-4 text-2xl font-black">

{tool.name}

</h3>



<p className="mt-4 text-slate-600">

{tool.description}

</p>



<a

href={tool.link}

target="_blank"

rel="noopener noreferrer"

className="mt-6 inline-block rounded-xl bg-blue-600 px-6 py-3 font-bold text-white"

>

Visit Tool →

</a>


</div>


))}


</div>


</section>





<section className="bg-slate-50 px-6 py-20">


<div className="mx-auto max-w-4xl text-center">


<h2 className="text-4xl font-black">

How We Evaluate AI Tools

</h2>


<p className="mt-5 text-lg text-slate-600">

We compare AI tools based on features,
pricing, usability, performance, security,
and real-world value.

</p>


<Link

href="/reviews"

className="mt-8 inline-block rounded-xl bg-black px-8 py-4 font-bold text-white"

>

Read More Reviews →

</Link>


</div>


</section>



</main>

);

}