"use client";


export default function RatingBreakdown({

ratings = {}

}) {



const defaultRatings = {

Performance: 9,

Features: 9,

EaseOfUse: 9,

Value: 9,

Security: 9

};



const scores = {

...defaultRatings,

...ratings

};






return (

<section className="
rounded-3xl
border
bg-white
p-8
">


<h2 className="
text-3xl
font-black
text-slate-900
">

Rating Breakdown

</h2>



<p className="
mt-2
text-slate-600
">

Detailed scoring based on testing, features, usability, and overall value.

</p>







<div className="
mt-8
space-y-6
">



{Object.entries(scores).map(([name,score])=>(



<div

key={name}

>


<div className="
mb-2
flex
items-center
justify-between
"

>


<h3 className="
font-bold
text-slate-800
">

{name}

</h3>



<span className="
font-black
text-blue-600
">

{Number(score).toFixed(1)}

</span>


</div>








<div className="
h-3
overflow-hidden
rounded-full
bg-slate-100
">


<div

className="
h-full
rounded-full
bg-blue-600
transition-all
duration-700
"

style={{

width:
`${score * 10}%`

}}


/>



</div>



</div>



))}



</div>








<div className="
mt-8
rounded-2xl
bg-slate-50
p-5
">


<p className="
text-sm
font-bold
text-slate-700
">

How we score

</p>



<p className="
mt-2
text-sm
text-slate-600
">

NorthSky Reviews evaluates products using real-world usability,
features, performance, reliability, security, and long-term value.

</p>


</div>






</section>


);

}
