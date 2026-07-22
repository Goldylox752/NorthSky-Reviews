"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function GlobalSearch(){

  const router = useRouter();

  const [query,setQuery] = useState("");


  function handleSearch(e){

    e.preventDefault();

    if(!query.trim()) return;

    router.push(
      `/search?q=${encodeURIComponent(query)}`
    );

  }


  return (

    <form
      onSubmit={handleSearch}
      className="flex items-center"
    >

      <input

        type="search"

        value={query}

        onChange={(e)=>setQuery(e.target.value)}

        placeholder="Search AI tools..."

        className="
        w-44
        rounded-l-full
        border
        border-slate-200
        bg-white
        px-4
        py-2
        text-sm
        outline-none
        focus:border-blue-600
        md:w-60
        "

      />


      <button

        type="submit"

        className="
        rounded-r-full
        bg-blue-600
        px-4
        py-2
        text-white
        hover:bg-blue-700
        "

      >

        🔍

      </button>


    </form>

  );

}