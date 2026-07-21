"use client";

import { useState, useEffect } from "react";
import Link from "next/link";


export default function SearchBar() {


  const [query, setQuery] = useState("");

  const [results, setResults] = useState([]);

  const [open, setOpen] = useState(false);



  useEffect(() => {


    if (!query.trim()) {

      setResults([]);

      setOpen(false);

      return;

    }



    const timer = setTimeout(async () => {


      try {


        const res =
          await fetch(
            `/api/search?q=${encodeURIComponent(query)}`
          );


        const data =
          await res.json();



        setResults(
          data.results || []
        );


        setOpen(true);



      } catch(error) {


        console.error(
          "Search error:",
          error
        );


      }



    },300);



    return () =>
      clearTimeout(timer);



  }, [query]);






  return (

<div className="relative w-full max-w-md">


<form action="/search">


<input

name="q"

value={query}

onChange={(e)=>setQuery(e.target.value)}

onFocus={()=>{

if(results.length)
setOpen(true);

}}

placeholder="Search AI tools..."

className="w-full rounded-xl border px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500"

/>


</form>





{open && results.length > 0 && (

<div className="absolute z-50 mt-2 w-full overflow-hidden rounded-2xl border bg-white shadow-xl">


{results.map((tool)=>(


<Link

key={tool.slug}

href={tool.url}

onClick={()=>setOpen(false)}

className="flex items-center gap-4 border-b p-4 hover:bg-slate-50"

>



{tool.logo && (

<img

src={tool.logo}

alt={tool.name}

className="h-10 w-10 rounded-lg object-contain"

/>

)}



<div>


<h3 className="font-bold">

{tool.name}

</h3>


<p className="text-sm text-slate-500">

{tool.category}

 · ⭐ {tool.rating}

</p>


</div>



</Link>


))}


</div>

)}





</div>

  );

}