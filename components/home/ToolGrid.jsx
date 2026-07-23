import Link from "next/link";
import { tools } from "@/app/data/tools";


export default function ToolGrid(){


const featuredTools = [...tools]
.sort(
(a,b)=>
(b.rating || 0) -
(a.rating || 0)
)
.slice(0,6);



return (

<section className="
px-6
py-20
"
>


<div className="
mx-auto
max-w-7xl
">





<div className="
flex
flex-col
gap-4
md:flex-row
md:items-end
md:justify-between
">


<div>


<div className="
text-4xl
">

🔥

</div>



<h2 className="
mt-3
text-4xl
font-black
md:text-5xl
">

Top Rated Technology Tools

</h2>



<p className="
mt-3
max-w-2xl
text-slate-600
">

Explore the highest-rated AI tools,
software platforms, and technology products
reviewed by NorthSky.

</p>


</div>





<Link

href="/all-tools"

className="
font-black
text-blue-600
hover:underline
"

>

View All Tools →

</Link>




</div>









<div className="
mt-12
grid
gap-8
sm:grid-cols-2
lg:grid-cols-3
">





{featuredTools.map((tool)=>(


<article

key={tool.slug}

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
flex
items-center
justify-between
">


<span className="
rounded-full
bg-blue-50
px-4
py-2
text-sm
font-bold
text-blue-600
">

{tool.category}

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








<h3 className="
mt-6
text-2xl
font-black
">

{tool.name}

</h3>







<p className="
mt-4
line-clamp-3
leading-7
text-slate-600
">

{tool.description}

</p>








<div className="
mt-8
flex
flex-col
gap-3
">


<Link

href={`/reviews/${tool.slug}`}

className="
rounded-xl
border
px-5
py-3
text-center
font-black
transition
hover:bg-slate-50
"

>

Read Review →

</Link>







{tool.link && (

<a

href={tool.link}

target="_blank"

rel="noopener noreferrer sponsored"

className="
rounded-xl
bg-blue-600
px-5
py-3
text-center
font-black
text-white
transition
hover:bg-blue-700
"

>

Try {tool.name} →

</a>

)}




</div>





</article>


))}


</div>







<div className="
mt-12
rounded-3xl
bg-slate-950
p-10
text-center
text-white
">


<h3 className="
text-3xl
font-black
">

Need Help Choosing?

</h3>



<p className="
mx-auto
mt-3
max-w-2xl
text-slate-300
">

Compare AI tools, software and digital products
to find the best option for your needs.

</p>




<Link

href="/comparisons"

className="
mt-6
inline-block
rounded-xl
bg-blue-600
px-8
py-4
font-black
"

>

Compare Tools →

</Link>



</div>







</div>


</section>

);


}