import Link from "next/link";
import { tools, categories } from "@/app/data/tools";


export const metadata = {
  title:
    "All AI Tools – Complete List | NorthSky Reviews",

  description:
    "Browse the best AI tools, software reviews, ratings, comparisons, and expert recommendations."
};



const ITEMS_PER_PAGE = 12;



export default async function AllToolsPage({ searchParams }) {


  const params = await searchParams;


  const search =
    params?.search || "";


  const category =
    params?.category || "";


  const page =
    Number(params?.page) || 1;




  let filtered = [...tools];



  // Category filter

  if(category){

    const selectedCategory =
      categories.find(
        (cat)=>cat.slug === category
      );


    if(selectedCategory){

      filtered =
        filtered.filter(
          (tool)=>
            tool.category === selectedCategory.name
        );

    }

  }



  // Search filter

  if(search){

    const query =
      search.toLowerCase();


    filtered =
      filtered.filter(
        (tool)=>

          tool.name
          .toLowerCase()
          .includes(query)

          ||

          tool.description
          .toLowerCase()
          .includes(query)

          ||

          tool.category
          .toLowerCase()
          .includes(query)

      );

  }




  const total =
    filtered.length;


  const totalPages =
    Math.ceil(total / ITEMS_PER_PAGE);



  const start =
    (page - 1) * ITEMS_PER_PAGE;



  const paginated =
    filtered.slice(
      start,
      start + ITEMS_PER_PAGE
    );





  function getUrl(pageNumber = 1){

    const query =
      new URLSearchParams();


    if(search)
      query.set("search", search);


    if(category)
      query.set("category", category);


    if(pageNumber > 1)
      query.set("page", pageNumber);



    return `/all-tools?${query.toString()}`;

  }





return (

<main className="min-h-screen bg-white px-6 py-16">


<div className="mx-auto max-w-7xl">


<h1 className="text-5xl font-black">

All AI Tools

</h1>


<p className="mt-4 text-lg text-slate-600">

Explore expert reviews, ratings,
comparisons, and recommendations.

</p>





{/* Search + Filter */}

<div className="mt-10 flex flex-wrap gap-4">


<form
action="/all-tools"
className="flex flex-1 gap-3"
>


<input

name="search"

defaultValue={search}

placeholder="Search AI tools..."

className="flex-1 rounded-xl border px-5 py-3"

/>


<button

className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white"

>

Search

</button>


</form>




<select

defaultValue={category}

onChange={(e)=>{

window.location.href =
`/all-tools?category=${e.target.value}`

}}

className="rounded-xl border px-5 py-3"

>


<option value="">

All Categories

</option>


{categories.map((cat)=>(

<option
key={cat.slug}
value={cat.slug}
>

{cat.icon} {cat.name}

</option>

))}


</select>


</div>





<p className="mt-8 text-slate-600">

Showing {paginated.length} of {total} tools

</p>






{/* Tools */}

<div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">


{paginated.map((tool)=>(


<div

key={tool.slug}

className="rounded-3xl border p-6 shadow-sm hover:shadow-xl transition"

>



<div className="flex justify-between">


<span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">

{tool.category}

</span>


<span className="font-bold text-green-600">

⭐ {tool.rating}

</span>


</div>





<h2 className="mt-5 text-2xl font-black">

{tool.name}

</h2>




<p className="mt-3 text-slate-600">

{tool.description}

</p>




<p className="mt-4 text-sm font-bold">

Best:
{tool.best}

</p>





<div className="mt-6 flex flex-col gap-3">


<Link

href={`/reviews/${tool.slug}`}

className="font-bold text-blue-600"

>

Read Full Review →

</Link>



<a

href={tool.link}

target="_blank"

rel="noopener noreferrer sponsored"

className="rounded-xl bg-green-600 px-4 py-3 text-center font-bold text-white"

>

Visit {tool.name}

</a>


</div>


</div>


))}


</div>





{/* Empty */}

{paginated.length === 0 && (

<div className="mt-10 rounded-3xl bg-slate-50 p-10 text-center">

<h2 className="text-2xl font-black">

No tools found

</h2>


<Link

href="/all-tools"

className="mt-4 inline-block font-bold text-blue-600"

>

Reset Filters

</Link>


</div>

)}







{/* Pagination */}

{totalPages > 1 && (

<div className="mt-12 flex justify-center gap-3">


{Array.from(
{length:totalPages},
(_,i)=>i+1
).map((p)=>(


<Link

key={p}

href={getUrl(p)}

className={`rounded-xl px-5 py-3 font-bold ${
p===page
?
"bg-blue-600 text-white"
:
"border"
}`}

>

{p}

</Link>


))}


</div>

)}



</div>


</main>

);


}