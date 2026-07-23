import Link from "next/link";
import { categories } from "@/app/data/tools";

export const metadata = {
  title:
    "Software Categories | AI Tools, SaaS, Automation & Technology",

  description:
    "Explore NorthSky Reviews software categories including AI tools, automation platforms, productivity software, cybersecurity, business tools, and developer solutions.",

  keywords: [
    "AI categories",
    "software categories",
    "AI writing tools",
    "AI coding tools",
    "automation software",
    "SaaS tools",
    "technology solutions",
  ],

  alternates: {
    canonical:
      "https://northsky-reviews.vercel.app/categories",
  },
};


export default function CategoriesPage() {


const defaultCategories = [

{
name:"AI Writing Tools",
slug:"ai-writing",
icon:"✍️",
description:
"Explore AI writing assistants, content generators, and copywriting software."
},

{
name:"AI Coding Tools",
slug:"ai-coding",
icon:"💻",
description:
"Discover AI coding assistants, developer tools, and programming platforms."
},

{
name:"AI Image Generators",
slug:"ai-image",
icon:"🎨",
description:
"Compare AI image creation platforms and creative design tools."
},

{
name:"AI Video Tools",
slug:"ai-video",
icon:"🎬",
description:
"Find AI video editors, generators, and content creation software."
},

{
name:"AI Automation",
slug:"automation",
icon:"⚙️",
description:
"Review workflow automation tools that save time and improve productivity."
},

{
name:"Business Software",
slug:"business-software",
icon:"🏢",
description:
"Explore CRM, analytics, communication, and business platforms."
},

{
name:"Cybersecurity",
slug:"cybersecurity",
icon:"🔐",
description:
"Discover security software, privacy tools, and protection solutions."
},

{
name:"Productivity Tools",
slug:"productivity",
icon:"🚀",
description:
"Find software that helps teams and individuals work smarter."
},

{
name:"Developer Tools",
slug:"developer-tools",
icon:"🧑‍💻",
description:
"Explore APIs, developer platforms, and engineering software."
}

];


const displayCategories =
categories?.length
? categories
: defaultCategories;



const schema = {

"@context":"https://schema.org",

"@type":"CollectionPage",

"name":
"NorthSky Software Categories",

"description":
"Browse AI tools, software categories, and technology solutions.",

"url":
"https://northsky-reviews.vercel.app/categories"

};



return (

<main className="min-h-screen bg-white text-slate-900">


<script

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:JSON.stringify(schema)

}}

/>



<section className="bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-900 px-6 py-24 text-center text-white">


<div className="mx-auto max-w-5xl">


<span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-bold text-blue-300">

📚 Software Directory

</span>


<h1 className="mt-8 text-5xl font-black md:text-7xl">

Explore Software Categories

</h1>


<p className="mx-auto mt-8 max-w-3xl text-xl text-slate-300">

Browse thousands of technology solutions organized by category.
Find the right AI tools, SaaS platforms, and software for your needs.

</p>


</div>

</section>





<section className="px-6 py-24">


<div className="mx-auto max-w-7xl">


<h2 className="text-center text-4xl font-black">

Browse Categories

</h2>



<div className="mt-14 grid gap-8 md:grid-cols-3">


{displayCategories.map((category)=>(


<Link

key={category.slug}

href={`/categories/${category.slug}`}

className="group rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"

>


<div className="text-5xl">

{category.icon || "🤖"}

</div>



<h3 className="mt-6 text-2xl font-black">

{category.name}

</h3>



<p className="mt-4 text-slate-600">

{category.description ||
"Explore the best software and technology tools."}

</p>



<span className="mt-8 block font-bold text-blue-600">

Explore Tools →

</span>


</Link>


))}


</div>


</div>


</section>





<section className="bg-slate-50 px-6 py-20">


<div className="mx-auto max-w-5xl text-center">


<h2 className="text-4xl font-black">

Find The Right Technology

</h2>


<p className="mt-6 text-lg text-slate-600">

Whether you need AI automation, business software,
creative tools, or developer solutions, NorthSky Reviews
helps you discover the best platforms available.

</p>


</div>


</section>





<section className="bg-blue-600 px-6 py-20 text-center text-white">


<h2 className="text-4xl font-black">

Discover Your Next Tool

</h2>


<Link

href="/best"

className="mt-8 inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-600"

>

View Best Software →

</Link>


</section>



</main>

);

}
