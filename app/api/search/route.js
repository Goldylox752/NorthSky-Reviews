import { NextResponse } from "next/server";

import { tools } from "@/app/data/tools";
import { guides } from "@/app/data/guides";
import { comparisons } from "@/app/data/comparisons";



export async function GET(request) {


try {


const { searchParams } =
new URL(request.url);



const query =
searchParams.get("q")?.toLowerCase() || "";



const category =
searchParams.get("category") || "";



const limit =
Number(searchParams.get("limit")) || 20;







function searchable(item){


return [

item.name,

item.title,

item.description,

item.category,

item.bestFor,

...(item.tags || []),

...(item.keywords || []),

...(item.features || []),

...(item.pros || [])

]

.filter(Boolean)

.join(" ")

.toLowerCase();


}








function matches(item){


if(!query)
return true;


return searchable(item)
.includes(query);


}







let toolResults =
tools.filter(matches);



let guideResults =
guides.filter(matches);



let comparisonResults =
comparisons.filter(matches);








if(category){


toolResults =
toolResults.filter(

item =>
item.category === category

);



guideResults =
guideResults.filter(

item =>
item.category === category

);



comparisonResults =
comparisonResults.filter(

item =>
item.category === category

);


}









toolResults.sort(

(a,b)=>

Number(b.rating || 0) -
Number(a.rating || 0)

);







return NextResponse.json({


success:true,


query,


category,



count:{


tools:
toolResults.length,


guides:
guideResults.length,


comparisons:
comparisonResults.length


},






results:{


tools:

toolResults
.slice(0,limit)
.map(tool=>({


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



url:
`/reviews/${tool.slug}`


})),





guides:

guideResults
.slice(0,limit)
.map(guide=>({


slug:
guide.slug,


title:
guide.title,


category:
guide.category,


description:
guide.description,


url:
`/guides/${guide.slug}`


})),







comparisons:

comparisonResults
.slice(0,limit)
.map(item=>({


slug:
item.slug,


title:
item.title,


description:
item.description,


url:
`/comparisons/${item.slug}`


}))



}



});





}

catch(error){


return NextResponse.json(

{

success:false,

error:
"Search failed"

},

{

status:500

}

);


}


}
