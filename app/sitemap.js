import { tools = [], categories = [] } from "@/app/data/tools";
import { comparisons = [] } from "@/app/data/comparisons";

import { guides = [] } from "@/app/data/guides";



const baseUrl =
"https://northsky-reviews.vercel.app";





export default function sitemap(){


const lastModified = new Date();





const staticPages = [


{
url:"",
changeFrequency:"daily",
priority:1
},


{
url:"/ai",
changeFrequency:"weekly",
priority:0.9
},


{
url:"/best",
changeFrequency:"weekly",
priority:0.9
},


{
url:"/all-tools",
changeFrequency:"weekly",
priority:0.9
},


{
url:"/reviews",
changeFrequency:"weekly",
priority:0.8
},


{
url:"/comparisons",
changeFrequency:"weekly",
priority:0.8
},


{
url:"/guides",
changeFrequency:"weekly",
priority:0.8
},


{
url:"/categories",
changeFrequency:"weekly",
priority:0.8
},


{
url:"/about",
changeFrequency:"monthly",
priority:0.5
},


{
url:"/contact",
changeFrequency:"monthly",
priority:0.5
},


{
url:"/privacy",
changeFrequency:"yearly",
priority:0.3
},


{
url:"/terms",
changeFrequency:"yearly",
priority:0.3
},


{
url:"/disclosure",
changeFrequency:"yearly",
priority:0.3
}


];







const pages = staticPages.map((page)=>({


url:
`${baseUrl}${page.url}`,


lastModified,


changeFrequency:
page.changeFrequency,


priority:
page.priority


}));









const reviewPages = tools.map((tool)=>({

url:
`${baseUrl}/reviews/${tool.slug}`,

lastModified,

changeFrequency:
"monthly",

priority:
0.8

}));









const categoryPages = categories.map((category)=>(

{

url:
`${baseUrl}/categories/${category.slug}`,

lastModified,

changeFrequency:
"weekly",

priority:
0.75

}

));









const comparisonPages = comparisons.map((item)=>(

{

url:
`${baseUrl}/comparisons/${item.slug}`,

lastModified,

changeFrequency:
"monthly",

priority:
0.8

}

));









const guidePages = guides.map((guide)=>(

{

url:
`${baseUrl}/guides/${guide.slug}`,

lastModified,

changeFrequency:
"weekly",

priority:
0.85

}

));









return [

...pages,

...reviewPages,

...categoryPages,

...comparisonPages,

...guidePages

];


}
