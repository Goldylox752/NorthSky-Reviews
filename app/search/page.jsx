import Link from "next/link";
import { tools, categories } from "@/app/data/tools";


export const metadata = {

  title:
    "Search AI Tools | NorthSky Reviews",

  description:
    "Search and discover the best AI tools, software, and productivity platforms reviewed by NorthSky Reviews."

};



export default async function SearchPage({ searchParams }) {


  const params = await searchParams;


  const query =
    params?.q || "";


  const category =
    params?.category || "";



  let results = [...tools];



  if(query){

    const search =
      query.toLowerCase();


    results =
      results.filter((tool)=>

        tool.name
          .toLowerCase()
          .includes(search)

        ||

        tool.description
          .toLowerCase()
          .includes(search)

        ||

        tool.category
          .toLowerCase()
          .includes(search)

      );

  }





  if(category){

    results =
      results.filter(
        (tool)=>
          tool.category === category
      );

  }





return (

<main className="min-h-screen bg-white px-6 py-16">


<div className="mx-auto max-w-7xl">



<h1 className="text-5xl font-black">

Search AI Tools

</h1>


<p className="mt-4 text-lg text-slate-600">

Find the right AI software for your business,
productivity, coding, and creativity.

</p>





{/* Search Form */}

<form

className="mt-10 flex flex-col gap-4 md:flex-row"

action="/search"

>


<input

name="q"

defaultValue={query}

placeholder="Search ChatGPT, coding tools, VPNs..."

className="flex-1 rounded-xl border px-5 py-4"

/>



<select

name="category"

defaultValue={category}

className="rounded-xl border px-5 py-4"

>


<option value="">

All Categories

</option>


{categories.map((cat)=>(

<option

key={cat.slug}

value={cat.name}

>

{cat.icon} {cat.name}

</option>

))}


</select>



<button

className="rounded-xl bg-blue-600 px-8 py-4 font-bold text-white"

>

Search

</button>



</form>








{/* Results */}

<section className="mt-12">


<h2 className="text-3xl font-black">

{results.length} Tools Found

</h2>





{results.length === 0 ? (

<div className="mt-8 rounded-3xl bg-slate-50 p-10 text-center">


<h3 className="text-xl font-bold">

No tools found

</h3>


<p className="mt-3 text-slate-600">

Try another search term.

</p>


</div>


) : (



<div className="mt-8 grid gap-8 md:grid-cols-3">


{results.map((tool)=>(


<div

key={tool.slug}

className="rounded-3xl border p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"

>




<div className="flex justify-between">


<span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">

{tool.category}

</span>


<span className="font-bold text-green-600">

⭐ {tool.rating}

</span>


</div>





<h3 className="mt-5 text-2xl font-black">

{tool.name}

</h3>





<p className="mt-3 text-slate-600">

{tool.description}

</p>





<p className="mt-4 text-sm font-bold">

Best:
{tool.best}

</p>






<div className="mt-6 flex gap-3">


<Link

href={`/reviews/${tool.slug}`}

className="font-bold text-blue-600"

>

Review →

</Link>



<a

href={tool.link}

target="_blank"

rel="noopener noreferrer sponsored"

className="font-bold text-green-600"

>

Visit →

</a>



</div>



</div>


))}



</div>


)}



</section>






</div>


</main>

);

}