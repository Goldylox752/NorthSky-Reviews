import Link from "next/link";

import { tools, categories } from "@/app/data/tools";
import { comparisons } from "@/app/data/comparisons";
import { guides } from "@/app/data/guides";


export const metadata = {

title:
"Search AI Tools, Reviews & Software | NorthSky Reviews",

description:
"Search NorthSky Reviews for AI tools, software reviews, comparisons, guides, and technology recommendations.",

alternates:{
canonical:
"https://northsky-reviews.vercel.app/search"
}

};





export default async function SearchPage({searchParams}){


const params =
await searchParams;


const query =
params?.q || "";


const category =
params?.category || "";



const search =
query.toLowerCase();





function matches(item){


if(!search)
return true;


return [

item.name,

item.title,

item.description,

item.category,

...(item.tags || []),

...(item.keywords || [])

]

.filter(Boolean)

.join(" ")

.toLowerCase()

.includes(search);


}







let toolResults =
tools.filter(matches);



if(category){


toolResults =
toolResults.filter(

tool =>
tool.category === category

);

}





toolResults =
toolResults.sort(

(a,b)=>

(b.rating || 0) -
(a.rating || 0)

);







const comparisonResults =
comparisons.filter(matches);





const guideResults =
guides.filter(matches);







const schema = {


"@context":
"https://schema.org",


"@type":
"SearchResultsPage",


name:
"NorthSky Reviews Search",


url:
"https://northsky-reviews.vercel.app/search"


};







return (

<main className="
min-h-screen
bg-white
px-6
py-16
">


<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:
JSON.stringify(schema)

}}

/>






<div className="
mx-auto
max-w-7xl
">





<h1 className="
text-5xl
font-black
">

Search NorthSky Reviews

</h1>





<p className="
mt-4
text-lg
text-slate-600
">

Find AI tools, software,
reviews, comparisons, and guides.

</p>







<form

action="/search"

className="
mt-10
grid
gap-4
md:grid-cols-3
"


>


<input

name="q"

defaultValue={query}

placeholder="Search ChatGPT, VPN, Shopify..."

className="
rounded-xl
border
px-5
py-4
"

/>





<select

name="category"

defaultValue={category}

className="
rounded-xl
border
px-5
py-4
"

>


<option value="">

All Categories

</option>



{categories.map(cat=>(

<option

key={cat.slug}

value={cat.name}

>

{cat.icon || "🚀"} {cat.name}

</option>

))}


</select>






<button

className="
rounded-xl
bg-blue-600
px-8
py-4
font-black
text-white
"

>

Search

</button>



</form>









{/* TOOLS */}


<ResultSection

title={`Tools (${toolResults.length})`}

>


<div className="
grid
gap-8
md:grid-cols-3
">


{toolResults.map(tool=>(


<article

key={tool.slug}

className="
rounded-3xl
border
p-8
transition
hover:-translate-y-2
hover:shadow-xl
"

>


<div className="
flex
justify-between
">


<span className="
rounded-full
bg-blue-100
px-3
py-1
text-xs
font-bold
text-blue-700
">

{tool.category}

</span>



<span className="
font-black
text-green-600
">

⭐ {tool.rating}

</span>



</div>





<h3 className="
mt-5
text-2xl
font-black
">

{tool.name}

</h3>





<p className="
mt-3
text-slate-600
">

{tool.description}

</p>






<Link

href={`/reviews/${tool.slug}`}

className="
mt-6
block
font-bold
text-blue-600
"

>

Read Review →

</Link>



</article>


))}


</div>


</ResultSection>









{/* GUIDES */}


<ResultSection

title={`Guides (${guideResults.length})`}

>


<div className="
grid
gap-6
md:grid-cols-3
">


{guideResults.map(guide=>(


<Link

key={guide.slug}

href={`/guides/${guide.slug}`}

className="
rounded-3xl
border
p-7
hover:shadow-xl
"

>


<h3 className="
text-xl
font-black
">

{guide.title}

</h3>



<p className="
mt-3
text-slate-600
">

{guide.description}

</p>



</Link>


))}


</div>


</ResultSection>









{/* COMPARISONS */}


<ResultSection

title={`Comparisons (${comparisonResults.length})`}

>


<div className="
grid
gap-6
md:grid-cols-2
">


{comparisonResults.map(item=>(


<Link

key={item.slug}

href={`/comparisons/${item.slug}`}

className="
rounded-3xl
border
p-7
hover:shadow-xl
"

>


<h3 className="
text-xl
font-black
">

{item.title}

</h3>



<p className="
mt-3
text-slate-600
">

{item.description}

</p>


</Link>


))}


</div>


</ResultSection>









{toolResults.length === 0 &&
guideResults.length === 0 &&
comparisonResults.length === 0 && (


<div className="
mt-16
rounded-3xl
bg-slate-50
p-10
text-center
">


<h2 className="
text-3xl
font-black
">

No Results Found

</h2>



<p className="
mt-3
text-slate-600
">

Try searching another tool, category,
or technology.

</p>


</div>


)}





</div>


</main>

);

}





function ResultSection({title,children}){


return (

<section className="
mt-16
">


<h2 className="
mb-8
text-3xl
font-black
">

{title}

</h2>


{children}


</section>

)

}
