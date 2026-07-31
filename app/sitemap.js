import { tools } from "@/app/data/tools";
import { comparisons } from "@/app/data/comparisons";
import { guides } from "@/app/data/guides";


const baseUrl =
  "https://northsky-reviews.vercel.app";



export default function sitemap(){


const lastModified =
new Date();





const staticPages = [

{
url:"",
changeFrequency:"daily",
priority:1
},


{
url:"/all-tools",
changeFrequency:"weekly",
priority:0.9
},


{
url:"/reviews",
changeFrequency:"weekly",
priority:0.9
},


{
url:"/comparisons",
changeFrequency:"weekly",
priority:0.9
},


{
url:"/guides",
changeFrequency:"weekly",
priority:0.9
},


{
url:"/deals",
changeFrequency:"weekly",
priority:0.85
},


{
url:"/categories",
changeFrequency:"weekly",
priority:0.85
},


{
url:"/about",
changeFrequency:"monthly",
priority:0.6
},


{
url:"/authors/northsky-team",
changeFrequency:"monthly",
priority:0.6
},


{
url:"/methodology",
changeFrequency:"monthly",
priority:0.7
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
url:"/affiliate-disclosure",
changeFrequency:"yearly",
priority:0.3
}

];








const categoryPages = [

"ai",

"vpn",

"hosting",

"business",

"travel",

"cybersecurity",

"password-managers",

"productivity",

"saas",

"marketing",

"developer-tools",

"finance-software"

].map((slug)=>({

url:
`${baseUrl}/category/${slug}`,

lastModified,

changeFrequency:
"weekly",

priority:
0.85

}));









const reviewPages =

(tools ?? []).map((tool)=>({

url:
`${baseUrl}/reviews/${tool.slug}`,

lastModified,

changeFrequency:
"monthly",

priority:
0.85

}));









const comparisonPages =

(comparisons ?? []).map((comparison)=>({

url:
`${baseUrl}/comparisons/${comparison.slug}`,

lastModified,

changeFrequency:
"monthly",

priority:
0.8

}));









const guidePages =

(guides ?? []).map((guide)=>({

url:
`${baseUrl}/guides/${guide.slug}`,

lastModified,

changeFrequency:
"weekly",

priority:
0.85

}));









const staticUrls =

staticPages.map((page)=>({

url:
`${baseUrl}${page.url}`,

lastModified,

changeFrequency:
page.changeFrequency,

priority:
page.priority

}));









return [

...staticUrls,

...categoryPages,

...reviewPages,

...comparisonPages,

...guidePages

];


}
