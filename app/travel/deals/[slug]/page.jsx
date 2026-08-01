import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";


const siteUrl = "https://northsky-reviews.vercel.app";


const deals = {

"saily-esim-discount": {

title:
"Saily eSIM Travel Deals 2026",

category:
"Travel Connectivity",

icon:
"📱",

description:
"Save money on international mobile data with Saily eSIM travel plans. Stay connected worldwide without expensive roaming fees.",

features:[

"Global mobile data coverage",

"No physical SIM card required",

"Easy activation before travel",

"Affordable international plans"

],

cta:
"Get Saily eSIM Deal"

},



"nordvpn-travel-offer": {

title:
"NordVPN Travel Deal 2026",

category:
"Travel Security",

icon:
"🔒",

description:
"Protect your online privacy while traveling with secure VPN access for airports, hotels, cafes, and public WiFi networks.",

features:[

"Secure public WiFi connections",

"Privacy protection worldwide",

"Multiple device support",

"Fast global servers"

],

cta:
"View NordVPN Offer"

},



"cheap-flight-deals": {

title:
"Cheap Flight Deals 2026",

category:
"Flights",

icon:
"✈️",

description:
"Discover strategies, tools, and services to help travelers find cheaper airfare and better flight prices.",

features:[

"Compare flight prices",

"Find booking discounts",

"Travel planning tools",

"Save on airfare"

],

cta:
"Find Flight Deals"

},



"hotel-discounts": {

title:
"Hotel Deals & Discounts 2026",

category:
"Hotels",

icon:
"🏨",

description:
"Find hotel promotions, accommodation discounts, and booking strategies for your next trip.",

features:[

"Hotel price comparisons",

"Rewards programs",

"Vacation stays",

"Travel savings"

],

cta:
"Find Hotel Deals"

}

};



export async function generateMetadata({params}) {

const deal = deals[params.slug];


if(!deal){

return {

title:
"Travel Deal Not Found"

};

}


return {

title:
`${deal.title} | NorthSky Reviews`,

description:
deal.description,

alternates:{

canonical:
`${siteUrl}/travel/deals/${params.slug}`

}

};

}



export default function DealPage({params}){


const deal = deals[params.slug];


if(!deal){

notFound();

}



return (

<main className="
min-h-screen
bg-white
text-slate-900
">


<section className="
bg-gradient-to-br
from-sky-950
via-blue-700
to-cyan-500
px-6
py-28
text-white
">


<div className="
mx-auto
max-w-5xl
text-center
">


<div className="text-7xl">

{deal.icon}

</div>


<span className="
mt-6
inline-block
rounded-full
bg-white/20
px-5
py-2
font-bold
">

{deal.category}

</span>



<h1 className="
mt-8
text-5xl
font-black
md:text-6xl
">

{deal.title}

</h1>


<p className="
mx-auto
mt-8
max-w-3xl
text-xl
leading-9
text-blue-100
">

{deal.description}

</p>



<button className="
mt-10
rounded-xl
bg-white
px-10
py-4
font-black
text-blue-700
">

{deal.cta}

</button>



</div>


</section>




<section className="
px-6
py-24
">

<div className="
mx-auto
max-w-5xl
">


<h2 className="
text-4xl
font-black
">

Why This Travel Deal Is Worth Considering

</h2>



<div className="
mt-10
grid
gap-6
md:grid-cols-2
">


{deal.features.map((feature)=>(


<div
key={feature}
className="
rounded-3xl
border
p-7
font-bold
"
>

✅ {feature}

</div>


))}


</div>


</div>


</section>





<section className="
bg-slate-950
px-6
py-20
text-white
">


<div className="
mx-auto
max-w-5xl
text-center
">


<h2 className="
text-4xl
font-black
">

Explore More Travel Deals

</h2>


<p className="
mt-5
text-slate-300
">

Compare more travel savings, technology,
and services from NorthSky Reviews.

</p>



<Link

href="/travel/deals"

className="
mt-8
inline-flex
rounded-xl
bg-cyan-500
px-8
py-4
font-black
text-white
"

>

View All Deals →

</Link>


</div>


</section>





<section className="
border-t
px-6
py-10
">

<div className="
mx-auto
max-w-4xl
text-center
text-sm
text-slate-500
">

NorthSky Reviews may earn commissions through
affiliate partnerships. Our recommendations
are based on research including pricing,
features, reliability, and value.

</div>


</section>




<Script
id="deal-schema"
type="application/ld+json"
>

{JSON.stringify({

"@context":"https://schema.org",

"@type":"Product",

"name":deal.title,

"description":deal.description,

"brand":{

"@type":"Brand",

"name":"NorthSky Reviews"

}

})}

</Script>



</main>

);

}