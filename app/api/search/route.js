import { NextResponse } from "next/server";
import { tools } from "@/app/data/tools";


export async function GET(request) {


  const { searchParams } =
    new URL(request.url);



  const query =
    searchParams.get("q")?.toLowerCase() || "";


  const category =
    searchParams.get("category") || "";



  let results = [...tools];



  // Search filter

  if(query){

    results =
      results.filter((tool)=>{


        const searchable = [

          tool.name,

          tool.description,

          tool.category,

          ...(tool.tags || [])

        ]
        .join(" ")
        .toLowerCase();



        return searchable.includes(query);


      });

  }





  // Category filter

  if(category){

    results =
      results.filter(
        (tool)=>
          tool.category === category
      );

  }






  // Sort highest rated first

  results.sort(
    (a,b)=>
      Number(b.rating || 0) -
      Number(a.rating || 0)
  );






  const formatted =
    results.map((tool)=>({


      slug:
        tool.slug,


      name:
        tool.name,


      category:
        tool.category,


      rating:
        tool.rating,


      description:
        tool.description,


      logo:
        tool.logo || "/icon-512.png",


      best:
        tool.best || "",


      url:
        `/reviews/${tool.slug}`


    }));






  return NextResponse.json({

    success:true,

    query,

    count:
      formatted.length,

    results:
      formatted


  });


}