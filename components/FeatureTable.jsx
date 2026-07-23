"use client";


export default function FeatureTable({

features = [],

title = "Key Features"

}) {



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

{title}

</h2>



<p className="
mt-2
text-slate-600
">

Important features and capabilities included with this product.

</p>







<div className="
mt-8
overflow-hidden
rounded-2xl
border
">

<table className="
w-full
text-left
">

<thead className="
bg-slate-100
">

<tr>

<th className="
px-6
py-4
text-sm
font-black
uppercase
tracking-wide
text-slate-500
">

Feature

</th>


<th className="
px-6
py-4
text-sm
font-black
uppercase
tracking-wide
text-slate-500
">

Included

</th>


</tr>


</thead>





<tbody
className="
divide-y
"
>


{features.length > 0 ? (


features.map((feature,index)=>(


<tr

key={index}

className="
hover:bg-slate-50
transition
"

>


<td className="
px-6
py-5
font-bold
text-slate-800
">

{feature}

</td>



<td className="
px-6
py-5
text-green-600
font-black
">

✓ Yes

</td>



</tr>


))


) : (


<tr>

<td

colSpan="2"

className="
px-6
py-8
text-center
text-slate-500
"

>

No features available.

</td>


</tr>


)}



</tbody>


</table>


</div>






</section>


);

}
