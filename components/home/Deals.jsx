import Link from "next/link";


const deals = [

{
icon:"🔒",
category:"VPN Deal",
title:"NordVPN",
description:
"Secure your online privacy with a fast VPN built for streaming, browsing and travel.",
badge:"Best VPN Pick",
link:"/reviews/nordvpn"
},


{
icon:"🤖",
category:"AI Software",
title:"AI Productivity Tools",
description:
"Discover AI platforms that help with writing, research, automation and business tasks.",
badge:"Trending AI",
link:"/all-tools"
},


{
icon:"📱",
category:"Travel Tech",
title:"eSIM Providers",
description:
"Compare affordable eSIM services for international travel and staying connected.",
badge:"Travel Essential",
link:"/travel/esims"
},


{
icon:"💻",
category:"Hardware",
title:"Laptop Recommendations",
description:
"Find the best laptops for students, professionals and creators.",
badge:"Top Rated",
link:"/guides/best-laptops-under-1000"
}

];



export default function Deals(){


return (

<section className="
bg-slate-50
px-6
py-20
">


<div className="
mx-auto
max-w-6xl
">





<div className="
text-center
">


<div className="text-5xl">

🔥

</div>



<h2 className="
mt-5
text-4xl
font-black
md:text-5xl
">

Featured Technology Deals

</h2>




<p className="
mx-auto
mt-4
max-w-2xl
text-slate-600
">

Explore recommended technology products,
special offers and tools worth considering.

</p>



</div>









<div className="
mt-12
grid
gap-8
md:grid-cols-2
">





{deals.map((deal)=>(


<Link

key={deal.title}

href={deal.link}

className="
group
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
flex
items-start
justify-between
">


<div className="text-5xl">

{deal.icon}

</div>




<span className="
rounded-full
bg-blue-50
px-4
py-2
text-sm
font-black
text-blue-600
">

{deal.badge}

</span>



</div>







<p className="
mt-6
text-sm
font-bold
uppercase
text-slate-500
">

{deal.category}

</p>






<h3 className="
mt-3
text-3xl
font-black
">

{deal.title}

</h3>






<p className="
mt-4
leading-7
text-slate-600
">

{deal.description}

</p>








<div className="
mt-7
inline-flex
rounded-xl
bg-blue-600
px-6
py-3
font-black
text-white
transition
group-hover:bg-blue-700
">

View Recommendation →

</div>






</Link>


))}


</div>







<div className="
mt-12
rounded-3xl
bg-gradient-to-r
from-blue-600
to-indigo-700
p-10
text-center
text-white
">


<h3 className="
text-3xl
font-black
">

Save Time Finding The Right Technology

</h3>



<p className="
mx-auto
mt-3
max-w-2xl
text-blue-100
">

NorthSky compares features, pricing,
and alternatives so you can make better decisions.

</p>




<Link

href="/guides"

className="
mt-6
inline-block
rounded-xl
bg-white
px-8
py-4
font-black
text-blue-600
"

>

Browse Buying Guides →

</Link>



</div>






</div>


</section>

);


}