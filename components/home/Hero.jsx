import Link from "next/link";
import SearchBar from "@/components/SearchBar";


export default function Hero(){


return (

<section className="
relative
overflow-hidden
bg-gradient-to-br
from-slate-950
via-indigo-950
to-blue-900
px-6
py-24
text-white
">


<div className="
mx-auto
max-w-6xl
text-center
">


<div className="
inline-flex
items-center
rounded-full
border
border-blue-400/30
bg-blue-400/10
px-5
py-2
text-sm
font-bold
text-blue-300
">

🚀 Updated Weekly • Expert Technology Reviews 2026

</div>





<h1 className="
mt-8
text-5xl
font-black
leading-tight
md:text-7xl
">


Find The Best


<br/>


<span className="
bg-gradient-to-r
from-blue-400
via-cyan-300
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
leading-8
text-slate-300
">


NorthSky Reviews helps you discover the best
AI tools, software, VPNs, laptops, travel technology
and digital products through expert reviews,
comparisons and buying guides.


</p>






<div className="
mx-auto
mt-10
max-w-3xl
">

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

href="/all-tools"

className="
rounded-xl
bg-blue-600
px-8
py-4
font-black
transition
hover:bg-blue-700
"

>

Explore AI Tools →

</Link>






<Link

href="/comparisons"

className="
rounded-xl
border
border-white/30
px-8
py-4
font-black
transition
hover:bg-white/10
"

>

Compare Software →

</Link>






<Link

href="/guides"

className="
rounded-xl
border
border-white/30
px-8
py-4
font-black
transition
hover:bg-white/10
"

>

Buying Guides →

</Link>



</div>







<div className="
mt-16
grid
gap-5
md:grid-cols-3
">





<div className="
rounded-3xl
border
border-white/10
bg-white/10
p-6
backdrop-blur
">


<div className="text-3xl">

🤖

</div>


<h3 className="
mt-4
text-xl
font-black
">

AI Reviews

</h3>


<p className="
mt-2
text-sm
text-slate-300
">

Find the best AI assistants,
automation tools and productivity software.

</p>


</div>







<div className="
rounded-3xl
border
border-white/10
bg-white/10
p-6
backdrop-blur
">


<div className="text-3xl">

⚖️

</div>


<h3 className="
mt-4
text-xl
font-black
">

Compare Products

</h3>


<p className="
mt-2
text-sm
text-slate-300
">

Side-by-side comparisons
to choose the right technology.

</p>


</div>








<div className="
rounded-3xl
border
border-white/10
bg-white/10
p-6
backdrop-blur
">


<div className="text-3xl">

⭐

</div>


<h3 className="
mt-4
text-xl
font-black
">

Expert Recommendations

</h3>


<p className="
mt-2
text-sm
text-slate-300
">

Research-backed reviews focused
on value and performance.

</p>


</div>





</div>







</div>


</section>

);


}