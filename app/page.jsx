import Link from "next/link";
import Script from "next/script";

import Newsletter from "@/components/Newsletter";
import SearchBar from "@/components/SearchBar";

import { tools, categories } from "@/app/data/tools";
import { comparisons } from "@/app/data/comparisons";


export const metadata = {

title:
"NorthSky Reviews | Best AI Tools, Software & Technology Reviews 2026",

description:
"Find the best AI tools, software, VPNs, laptops, travel technology and digital products. NorthSky Reviews provides expert reviews, comparisons, ratings and buying guides.",

keywords:[
"best AI tools 2026",
"AI software reviews",
"ChatGPT alternatives",
"best VPN Canada",
"software comparisons",
"technology reviews",
"best laptops",
"travel technology",
"AI productivity tools",
"business software reviews"
],

openGraph:{

title:
"NorthSky Reviews | AI Tools, Software & Technology",

description:
"Independent reviews, comparisons and buying guides to help you choose better technology.",

url:
"https://northsky-reviews.vercel.app",

siteName:
"NorthSky Reviews",

images:[
{
url:"/og-image.jpg",
width:1200,
height:630,
alt:"NorthSky Reviews"
}
]

}

};



const topTools =
[...tools]
.sort(
(a,b)=>b.rating-a.rating
)
.slice(0,6);



const trendingTools =
tools.slice(0,6);



const editorPicks = [

{
icon:"🤖",
title:"Best AI Assistant",
name:"ChatGPT",
desc:"The leading AI assistant for writing, research and productivity.",
link:"/reviews/chatgpt"
},

{
icon:"🔒",
title:"Best VPN",
name:"NordVPN",
desc:"Fast, secure VPN protection for privacy and streaming.",
link:"/reviews/nordvpn"
},

{
icon:"🌎",
title:"Best Travel eSIM",
name:"Saily",
desc:"Affordable mobile data for international travelers.",
link:"/reviews/saily"
}

];




export default function HomePage(){


return (

<main className="min-h-screen bg-white text-slate-900">


{/* WEBSITE SEO SCHEMA */}

<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify({

"@context":
"https://schema.org",

"@type":
"WebSite",

"name":
"NorthSky Reviews",

"url":
"https://northsky-reviews.vercel.app",

"description":
"AI tools, software, technology and travel reviews.",

"potentialAction":{

"@type":
"SearchAction",

"target":
"https://northsky-reviews.vercel.app/search?q={search_term_string}",

"query-input":
"required name=search_term_string"

}

})

}}

/>



{/* HERO */}


<section className="
bg-gradient-to-br 
from-slate-950 
via-slate-900 
to-blue-900 
px-6 
py-24 
text-center 
text-white
">


<div className="mx-auto max-w-5xl">


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

🚀 Updated Weekly For 2026

</div>



<h1 className="
mt-6 
text-5xl 
font-black 
md:text-7xl
">

Find The Best

<br/>

<span className="
bg-gradient-to-r 
from-blue-400 
to-purple-400 
bg-clip-text 
text-transparent
">

AI Tools, Software & Technology

</span>

</h1>



<p className="
mx-auto 
mt-6 
max-w-3xl 
text-xl 
text-slate-300
">

Independent reviews, comparisons and buying guides
helping you choose the best AI tools, software,
VPNs, laptops, travel technology and digital products.

</p>



<div className="mx-auto mt-10 max-w-3xl">

<SearchBar />

</div>



<div className="
mt-10 
flex 
flex-wrap 
justify-center 
gap-4
">


<Link
href="#tools"
className="
rounded-xl 
bg-blue-600 
px-8 
py-4 
font-bold 
hover:bg-blue-700
"
>

Explore Reviews ↓

</Link>



<Link
href="/comparisons"
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

Compare Products →

</Link>



<Link
href="/guides"
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

Buying Guides →

</Link>



</div>


</div>


</section>





{/* STATS */}


<section className="
border-b 
bg-white 
px-6 
py-10
">


<div className="
mx-auto 
grid 
max-w-5xl 
gap-6 
text-center 
md:grid-cols-4
">


<div>

<h3 className="text-3xl font-black">

{tools.length}+

</h3>

<p className="text-slate-600">

Reviews

</p>

</div>



<div>

<h3 className="text-3xl font-black">

{comparisons.length}+

</h3>

<p className="text-slate-600">

Comparisons

</p>

</div>



<div>

<h3 className="text-3xl font-black">

50+

</h3
{/* TRENDING SEARCHES */}

<section className="px-6 py-12">

<div className="mx-auto max-w-6xl text-center">


<h2 className="text-3xl font-black">

🔥 Trending Searches

</h2>


<p className="mt-3 text-slate-600">

Popular technology searches from NorthSky readers.

</p>



<div className="
mt-8 
flex 
flex-wrap 
justify-center 
gap-3
">


{[

{
name:"ChatGPT Alternatives",
link:"/search?q=chatgpt"
},

{
name:"Best AI Agents",
link:"/search?q=ai-agents"
},

{
name:"Best VPN Canada",
link:"/search?q=vpn"
},

{
name:"Best eSIM Providers",
link:"/search?q=esim"
},

{
name:"Best AI Writing Tools",
link:"/search?q=ai-writing"
},

{
name:"Best Laptops 2026",
link:"/search?q=laptops"
}

].map((item)=>(


<Link

key={item.name}

href={item.link}

className="
rounded-full 
border 
px-5 
py-3 
font-bold 
transition 
hover:border-blue-600 
hover:text-blue-600
"

>

{item.name}

</Link>


))}


</div>


</div>

</section>





{/* EDITOR PICKS */}


<section className="
bg-slate-50 
px-6 
py-20
">


<div className="mx-auto max-w-6xl">


<div className="text-center">


<h2 className="text-4xl font-black">

⭐ NorthSky Editor's Choice

</h2>


<p className="mt-3 text-slate-600">

Our top recommended technology picks.

</p>


</div>




<div className="
mt-10 
grid 
gap-6 
md:grid-cols-3
">


{editorPicks.map((item)=>(


<Link

key={item.name}

href={item.link}

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


<div className="text-5xl">

{item.icon}

</div>



<div className="
mt-5 
text-sm 
font-bold 
text-blue-600
">

EDITOR PICK

</div>



<h3 className="
mt-3 
text-2xl 
font-black
">

{item.title}

</h3>



<h4 className="
mt-2 
font-bold 
text-slate-700
">

{item.name}

</h4>



<p className="
mt-3 
text-slate-600
">

{item.desc}

</p>



<div className="
mt-6 
rounded-xl 
bg-blue-600 
px-5 
py-3 
text-center 
font-bold 
text-white
">

Read Review →

</div>



</Link>


))}


</div>


</div>


</section>







{/* TECHNOLOGY CATEGORIES */}


<section className="
px-6 
py-20
">


<div className="mx-auto max-w-6xl">


<div className="text-center">


<h2 className="text-4xl font-black">

Explore Technology Categories

</h2>


<p className="mt-3 text-slate-600">

Discover the best tools, software and technology solutions.

</p>


</div>





<div className="
mt-10 
grid 
gap-6 
sm:grid-cols-2 
md:grid-cols-3
">


{[

{
icon:"🤖",
title:"AI Tools",
desc:"AI assistants, agents and automation.",
link:"/categories/ai"
},

{
icon:"💻",
title:"Software",
desc:"Business and productivity software.",
link:"/categories/software"
},

{
icon:"🔐",
title:"VPN & Security",
desc:"Privacy and online protection tools.",
link:"/categories/vpn"
},

{
icon:"🖥️",
title:"Laptops & Hardware",
desc:"Computers, accessories and tech gear.",
link:"/categories/laptops"
},

{
icon:"🌐",
title:"Web Tools",
desc:"Hosting, websites and online platforms.",
link:"/categories/web-tools"
},

{
icon:"✈️",
title:"Travel Technology",
desc:"eSIMs, apps and travel services.",
link:"/travel"
}

].map((item)=>(


<Link

key={item.title}

href={item.link}

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


<div className="text-5xl">

{item.icon}

</div>



<h3 className="
mt-5 
text-xl 
font-black
">

{item.title}

</h3>



<p className="
mt-3 
text-slate-600
">

{item.desc}

</p>



<span className="
mt-5 
inline-block 
font-bold 
text-blue-600
">

Explore →

</span>



</Link>


))}


</div>


</div>


</section>





{/* AI ADVISOR CTA */}


<section className="
px-6 
py-20
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


<div className="text-5xl">

🤖

</div>



<h2 className="
mt-5 
text-4xl 
font-black
">

Not Sure What Tool You Need?

</h2>



<p className="
mx-auto 
mt-4 
max-w-2xl 
text-lg 
text-slate-300
">

Ask NorthSky AI to find the best software,
AI tools, and technology solutions for your needs.

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
{/* TRENDING AI TOOLS */}

<section
id="tools"
className="
px-6 
py-20
">


<div className="mx-auto max-w-7xl">


<div className="
flex 
items-end 
justify-between
">


<div>


<h2 className="
text-4xl 
font-black
">

🔥 Trending AI Tools

</h2>


<p className="
mt-2 
text-slate-600
">

Popular AI software and productivity tools people are exploring.

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

View All →

</Link>



</div>





<div className="
mt-10 
grid 
gap-6 
sm:grid-cols-2 
lg:grid-cols-3
">


{trendingTools.map((tool)=>(


<Link

key={tool.slug}

href={`/reviews/${tool.slug}`}

className="
rounded-3xl 
border 
bg-white 
p-7 
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
bg-blue-50 
px-3 
py-1 
text-sm 
font-bold 
text-blue-600
">

{tool.category}

</span>



<span className="
font-black 
text-green-600
">

⭐ {tool.rating}

</span>


</div>




<h3 className="
mt-5 
text-2xl 
font-black
">

{tool.name}

</h3>




<p className="
mt-3 
line-clamp-3 
text-slate-600
">

{tool.description}

</p>




<div className="
mt-6 
flex 
gap-3
">


<span className="
rounded-xl 
bg-slate-100 
px-4 
py-2 
text-sm 
font-bold
">

Read Review

</span>



<span className="
rounded-xl 
bg-blue-600 
px-4 
py-2 
text-sm 
font-bold 
text-white
">

Try Tool →

</span>


</div>



</Link>


))}


</div>


</div>


</section>








{/* FEATURED REVIEWS */}


<section className="
bg-slate-50 
px-6 
py-20
">


<div className="mx-auto max-w-7xl">


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

📝 Latest Reviews

</h2>



<p className="
mt-2 
text-slate-600
">

Expert analysis of AI tools, software and technology products.

</p>



</div>




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







<div className="
mt-10 
grid 
gap-6 
md:grid-cols-3
">


{topTools.slice(0,3).map((tool)=>(


<Link

key={tool.slug}

href={`/reviews/${tool.slug}`}

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
text-sm 
font-black 
text-blue-600
">

FEATURED REVIEW

</div>





<h3 className="
mt-4 
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





<div className="
mt-6 
flex 
items-center 
justify-between
">


<span className="font-bold">

Rating

</span>



<span className="
rounded-full 
bg-green-50 
px-4 
py-2 
font-black 
text-green-600
">

⭐ {tool.rating}/10

</span>



</div>




<div className="
mt-6 
rounded-xl 
bg-blue-600 
px-5 
py-3 
text-center 
font-bold 
text-white
">

Read Full Review →

</div>



</Link>


))}


</div>


</div>


</section>








{/* COMPARISONS */}


<section className="
px-6 
py-20
">


<div className="mx-auto max-w-6xl">


<div className="
flex 
items-center 
justify-between
">


<h2 className="
text-4xl 
font-black
">

⚖️ Compare Technology

</h2>



<Link

href="/comparisons"

className="
font-bold 
text-blue-600
"

>

View All →

</Link>


</div>







<div className="
mt-10 
grid 
gap-6 
md:grid-cols-2
">


{comparisons.slice(0,4).map((item)=>(


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


<h3 className="
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
mt-6 
font-bold 
text-blue-600
">

Compare Now →

</div>



</Link>


))}


</div>


</div>


</section>
{/* TRAVEL HUB */}

<section className="
bg-gradient-to-br
from-cyan-700
via-blue-700
to-sky-900
px-6
py-20
text-white
">


<div className="mx-auto max-w-6xl">


<div className="text-center">


<h2 className="
text-4xl
font-black
md:text-5xl
">

✈️ NorthSky Travel Hub

</h2>



<p className="
mx-auto
mt-5
max-w-3xl
text-lg
text-blue-100
">

Compare travel technology, flights, hotels,
eSIMs and travel tools with NorthSky recommendations.

</p>


</div>





<div className="
mt-12
grid
gap-6
md:grid-cols-4
">


{[

{
icon:"✈️",
title:"Flights",
desc:"Find flight deals worldwide.",
link:"/travel/flights"
},

{
icon:"🏨",
title:"Hotels",
desc:"Compare accommodations and stays.",
link:"/travel/hotels"
},

{
icon:"📱",
title:"eSIMs",
desc:"Stay connected while traveling.",
link:"/travel/esims"
},

{
icon:"🌎",
title:"Travel Guides",
desc:"Apps, destinations and travel tips.",
link:"/travel/guides"
}

].map((item)=>(


<Link

key={item.title}

href={item.link}

className="
rounded-3xl
bg-white/10
p-7
backdrop-blur
transition
hover:-translate-y-2
hover:bg-white/20
"

>


<div className="text-4xl">

{item.icon}

</div>



<h3 className="
mt-4
text-xl
font-black
">

{item.title}

</h3>



<p className="
mt-2
text-sm
text-blue-100
">

{item.desc}

</p>



<div className="
mt-4
font-bold
">

Explore →

</div>


</Link>


))}


</div>






<div className="
mt-12
rounded-3xl
bg-white
p-8
text-slate-900
">


<h3 className="
text-center
text-3xl
font-black
">

Travel Deals Search

</h3>



<div
id="travel-widget"
className="
mt-8
min-h-[250px]
flex
items-center
justify-center
"
>


<p className="text-slate-500">

Travel search coming soon...

</p>


</div>


</div>



</div>


</section>









{/* BUYING GUIDES */}


<section className="
px-6
py-20
">


<div className="mx-auto max-w-6xl">


<div className="text-center">


<h2 className="
text-4xl
font-black
">

📚 Popular Buying Guides

</h2>



<p className="
mt-3
text-slate-600
">

Expert recommendations to help you choose better technology.

</p>


</div>







<div className="
mt-10
grid
gap-6
md:grid-cols-3
">


{[

{
title:"Best AI Tools For Business 2026",
slug:"best-ai-tools-business-2026"
},

{
title:"Best VPNs In Canada 2026",
slug:"best-vpn-canada-2026"
},

{
title:"Best AI Writing Software",
slug:"best-ai-writing-software"
},

{
title:"Best Laptops Under $1000",
slug:"best-laptops-under-1000"
},

{
title:"Best Website Builders",
slug:"best-website-builders"
},

{
title:"Best Travel Apps 2026",
slug:"best-travel-apps-2026"
}

].map((guide)=>(


<Link

key={guide.slug}

href={`/guides/${guide.slug}`}

className="
rounded-3xl
border
bg-white
p-7
transition
hover:-translate-y-2
hover:shadow-xl
"

>


<h3 className="
font-black
text-xl
">

{guide.title}

</h3>



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








{/* NEWSLETTER */}


<section className="
bg-slate-50
px-6
py-20
">


<div className="mx-auto max-w-5xl">


<Newsletter variant="hero" />


</div>


</section>








{/* AFFILIATE DISCLOSURE */}


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
text-xl
font-black
">

Affiliate Disclosure

</h3>



<p className="
mt-3
text-sm
text-slate-600
">

NorthSky Reviews may earn commissions from affiliate links.
This helps support our research and does not increase the price you pay.

</p>



<p className="
mt-3
text-sm
text-slate-500
">

Our recommendations are based on research,
features, pricing, usability and overall value.

</p>


</div>


</section>
{/* EDITORIAL TRUST */}

<section className="
px-6
py-20
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


<div className="text-5xl">

🔬

</div>



<h2 className="
mt-6
text-4xl
font-black
">

How NorthSky Reviews Works

</h2>



<p className="
mx-auto
mt-5
max-w-3xl
text-lg
text-slate-300
">

We research, compare and analyze AI tools,
software, technology products and travel services
to help people make smarter buying decisions.

</p>





<div className="
mt-10
grid
gap-8
md:grid-cols-3
">



<div>

<h3 className="
text-xl
font-black
">

Independent Research

</h3>


<p className="
mt-3
text-sm
text-slate-400
">

We evaluate features, pricing,
performance and real-world usefulness.

</p>


</div>





<div>

<h3 className="
text-xl
font-black
">

Detailed Comparisons

</h3>


<p className="
mt-3
text-sm
text-slate-400
">

We compare alternatives so readers
can find the right solution faster.

</p>


</div>





<div>

<h3 className="
text-xl
font-black
">

Transparent Reviews

</h3>


<p className="
mt-3
text-sm
text-slate-400
">

Affiliate partnerships are disclosed.
Recommendations focus on value.

</p>


</div>



</div>



</div>


</section>









{/* FOOTER */}

<footer className="
border-t
bg-slate-950
px-6
py-16
text-white
">


<div className="
mx-auto
grid
max-w-7xl
gap-10
md:grid-cols-5
">





{/* BRAND */}


<div>


<h2 className="
text-3xl
font-black
">

NorthSky

<span className="text-blue-400">

.

</span>

</h2>



<p className="
mt-4
text-sm
text-slate-400
">

AI, software, technology and travel reviews
helping people choose better products.

</p>


</div>







{/* REVIEWS */}


<div>


<h3 className="font-black">

Reviews

</h3>



<ul className="
mt-4
space-y-3
text-sm
text-slate-400
">


<li>

<Link href="/reviews">

Latest Reviews

</Link>

</li>


<li>

<Link href="/comparisons">

Comparisons

</Link>

</li>


<li>

<Link href="/guides">

Buying Guides

</Link>

</li>


<li>

<Link href="/all-tools">

All Tools

</Link>

</li>


</ul>


</div>








{/* CATEGORIES */}


<div>


<h3 className="font-black">

Categories

</h3>



<ul className="
mt-4
space-y-3
text-sm
text-slate-400
">


<li>

<Link href="/categories/ai">

AI Tools

</Link>

</li>



<li>

<Link href="/categories/software">

Software

</Link>

</li>



<li>

<Link href="/categories/vpn">

VPN

</Link>

</li>



<li>

<Link href="/categories/laptops">

Technology

</Link>

</li>


</ul>


</div>








{/* TRAVEL */}


<div>


<h3 className="font-black">

Travel

</h3>



<ul className="
mt-4
space-y-3
text-sm
text-slate-400
">


<li>

<Link href="/travel">

Travel Hub

</Link>

</li>



<li>

<Link href="/travel/flights">

Flights

</Link>

</li>



<li>

<Link href="/travel/hotels">

Hotels

</Link>

</li>



<li>

<Link href="/travel/guides">

Guides

</Link>

</li>


</ul>


</div>








{/* COMPANY */}


<div>


<h3 className="font-black">

Company

</h3>



<ul className="
mt-4
space-y-3
text-sm
text-slate-400
">


<li>

<Link href="/about">

About

</Link>

</li>



<li>

<Link href="/methodology">

Methodology

</Link>

</li>



<li>

<Link href="/affiliate-disclosure">

Affiliate Disclosure

</Link>

</li>



<li>

<Link href="/contact">

Contact

</Link>

</li>


</ul>


</div>



</div>







<div className="
mx-auto
mt-12
max-w-7xl
border-t
border-white/10
pt-8
">


<div className="
flex
flex-col
justify-between
gap-4
text-sm
text-slate-400
md:flex-row
">


<p>

© 2026 NorthSky Reviews. All rights reserved.

</p>



<p>

Some links may be affiliate links.
We may earn commissions at no additional cost to you.

</p>



</div>


</div>



</footer>








{/* TRAVEL SCRIPT */}

<Script

id="travel-script"

strategy="afterInteractive"

src="YOUR_OFFICIAL_TRAVEL_SCRIPT"

 />



</main>

);

}