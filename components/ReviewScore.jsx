"use client";

export default function ReviewScore({
  score = 0,
  label = "Overall Score",
  size = "large",
}) {


const rating =
Number(score).toFixed(1);



const getColor = () => {

if(score >= 9)
return "text-green-600 bg-green-50 border-green-200";


if(score >= 8)
return "text-blue-600 bg-blue-50 border-blue-200";


if(score >= 7)
return "text-yellow-600 bg-yellow-50 border-yellow-200";


return "text-red-600 bg-red-50 border-red-200";

};





return (

<div
className={`
rounded-3xl
border
p-6
${getColor()}
`}
>



<div className="
flex
items-center
justify-between
">


<div>

<p className="
text-sm
font-bold
uppercase
tracking-wide
opacity-70
">

{label}

</p>



<div
className={`
font-black
mt-2
${size === "small"
? "text-3xl"
: "text-5xl"
}
`}
>

{rating}

<span className="
text-xl
opacity-70
">

/10

</span>


</div>


</div>





<div className="
text-5xl
">

⭐

</div>




</div>





<div className="
mt-5
h-3
overflow-hidden
rounded-full
bg-white/60
">


<div

className="
h-full
rounded-full
transition-all
duration-700
bg-current
"

style={{

width:
`${score * 10}%`

}}

/>



</div>






<p className="
mt-4
text-sm
font-medium
opacity-80
">


{

score >= 9

?

"Excellent choice. One of the highest rated options."

:

score >= 8

?

"Strong option with great features and value."

:

score >= 7

?

"Good choice, but alternatives may exist."

:

"Average performance. Consider alternatives."

}


</p>



</div>


);

}
