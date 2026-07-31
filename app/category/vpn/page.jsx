import Link from "next/link";

import { tools } from "@/app/data/tools";


const siteUrl =
  "https://northsky-reviews.vercel.app";



export const metadata = {

  title:
    "Best VPNs 2026 | VPN Reviews, Rankings & Comparisons | NorthSky Reviews",

  description:
    "Discover the best VPN services in 2026. Compare NordVPN, ExpressVPN, Surfshark, Proton VPN, and more with expert reviews covering privacy, security, speed, streaming, and value.",

  keywords: [

    "best VPNs 2026",
    "VPN reviews",
    "best VPN Canada",
    "VPN comparison",
    "best privacy VPN",
    "best streaming VPN",
    "NordVPN review",
    "ExpressVPN review",
    "Surfshark review",
    "VPN software"

  ],


  alternates: {

    canonical:
      `${siteUrl}/category/vpn`

  },


  openGraph: {

    title:
      "Best VPN Services 2026 | NorthSky Reviews",

    description:
      "Compare the highest-rated VPN providers for privacy, security, streaming, and online protection.",

    url:
      `${siteUrl}/category/vpn`,

    siteName:
      "NorthSky Reviews",

    type:
      "website"

  }

};







export default function VPNPage(){



const vpnTools =

tools.filter(

(tool)=>

tool.category?.toLowerCase()
===
"vpn"

);







const schema = {


"@context":
"https://schema.org",


"@type":
"CollectionPage",


name:
"Best VPN Services 2026",


description:
"VPN reviews, comparisons, rankings, and buying guides.",


url:
`${siteUrl}/category/vpn`,



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

vpnTools.map((tool,index)=>(

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

🔒 NorthSky VPN Directory

</span>








<h1 className="
mt-8
text-5xl
font-black
leading-tight
md:text-7xl
">

Best VPN Services
& Reviews 2026

</h1>







<p className="
mx-auto
mt-6
max-w-3xl
text-xl
leading-8
text-slate-300
">

Find the best VPN software for privacy,
security, streaming, gaming, travel,
and everyday online protection.

NorthSky Reviews tests and compares
VPN providers based on speed,
features, security, pricing, and value.

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

Explore VPNs →

</Link>






<Link

href="/comparisons/best-vpns"

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

Compare VPNs →

</Link>


</div>
