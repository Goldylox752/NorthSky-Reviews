import Link from "next/link";

import { tools } from "@/app/data/tools";


const siteUrl =
  "https://northsky-reviews.vercel.app";



export const metadata = {

  title:
    "Best Business Software 2026 | Business Tools Reviews & Rankings | NorthSky Reviews",


  description:
    "Discover the best business software in 2026. Compare AI tools, CRM platforms, automation software, project management tools, and productivity solutions for companies.",


  keywords: [

    "best business software 2026",
    "business tools reviews",
    "SaaS software",
    "business automation tools",
    "CRM software",
    "project management software",
    "AI business tools",
    "productivity software",
    "software for companies"

  ],


  alternates: {

    canonical:
      `${siteUrl}/category/business`

  },


  openGraph: {

    title:
      "Best Business Software 2026 | NorthSky Reviews",


    description:
      "Find the best software platforms for businesses, teams, startups, and entrepreneurs.",


    url:
      `${siteUrl}/category/business`,


    siteName:
      "NorthSky Reviews",


    type:
      "website"

  }

};








export default function BusinessPage(){



const businessTools =

tools.filter(

(tool)=>

tool.category?.toLowerCase()
===
"business"

);








const schema = {


"@context":
"https://schema.org",


"@type":
"CollectionPage",


name:
"Best Business Software 2026",


description:
"Business software reviews, rankings, comparisons, and buying guides.",


url:
`${siteUrl}/category/business`,



publisher: {

"@type":
"Organization",

name:
"NorthSky Reviews",

url:
siteUrl

},




mainEntity: {


"@type":
"ItemList",


itemListElement:

businessTools.map((tool,index)=>(

{

"@type":
"ListItem",

position:
index + 1,

name:
tool.name,

url:
`${siteUrl}/reviews/${tool.slug}`

}

))


}


};







return (

<main className="
min-h-screen
bg-white
text-slate-900
">



<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:
JSON.stringify(schema)

}}

/>







{/* HERO */}


<section className="
bg-gradient-to-br
from-slate-950
via-blue-950
to-indigo-950
px-6
py-24
text-white
">


<div className="
mx-auto
max-w-6xl
text-center
">





<span className="
inline-flex
rounded-full
bg-blue-500/20
px-5
py-2
text-sm
font-bold
text-blue-300
">

💼 NorthSky Business Software Directory

</span>







<h1 className="
mt-8
text-5xl
font-black
leading-tight
md:text-7xl
">

Best Business Software
2026

</h1>







<p className="
mx-auto
mt-6
max-w-3xl
text-xl
leading-8
text-slate-300
">

Discover the best software platforms
for businesses, startups, and teams.

Compare AI tools, CRM systems,
automation platforms, collaboration
software, and productivity solutions.

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
hover:bg-blue-600
"

>

Explore Business Tools →

</Link>





<Link

href="/comparisons/business"

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

Compare Software →

</Link>


</div>
