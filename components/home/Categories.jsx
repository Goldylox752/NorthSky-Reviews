import Link from "next/link";


const categories = [

{
icon:"🤖",
title:"AI Tools",
description:
"Explore AI assistants, automation tools, writing software, coding assistants and productivity platforms.",
link:"/categories/ai"
},


{
icon:"💻",
title:"Software",
description:
"Discover business software, productivity apps, SaaS platforms and digital tools.",
link:"/categories/software"
},


{
icon:"🔐",
title:"VPN & Security",
description:
"Compare VPN providers, privacy tools and online security solutions.",
link:"/categories/vpn"
},


{
icon:"🖥️",
title:"Laptops & Hardware",
description:
"Find the best laptops, computers, accessories and technology products.",
link:"/categories/laptops"
},


{
icon:"🌐",
title:"Web Tools",
description:
"Website builders, hosting, ecommerce platforms and online services.",
link:"/categories/web-tools"
},


{
icon:"✈️",
title:"Travel Technology",
description:
"Travel apps, eSIM providers, booking tools and digital travel services.",
link:"/travel"
}

];



export default function Categories(){


return (

<section className="
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


<h2 className="
text-4xl
font-black
md:text-5xl
">

Explore Technology Categories

</h2>


<p className="
mx-auto
mt-4
max-w-2xl
text-slate-600
">

Browse expert reviews, comparisons and recommendations
across the technology products people use every day.

</p>


</div>







<div className="
mt-12
grid
gap-6
sm:grid-cols-2
lg:grid-cols-3
">



{categories.map((category)=>(


<Link

key={category.title}

href={category.link}

className="
group
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
text-5xl
">

{category.icon}

</div>





<h3 className="
mt-6
text-2xl
font-black
">

{category.title}

</h3>





<p className="
mt-3
leading-7
text-slate-600
">

{category.description}

</p>







<div className="
mt-6
font-black
text-blue-600
group-hover:underline
">

Explore Reviews →

</div>





</Link>


))}


</div>






</div>


</section>

);


}