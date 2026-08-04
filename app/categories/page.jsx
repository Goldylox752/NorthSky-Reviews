import Link from "next/link";
import { categories } from "@/app/data/tools";

const siteUrl = "https://northsky-reviews.vercel.app";

export const metadata = {
  title:
    "Best Software Categories 2026 | AI, SaaS, VPN, Security & Business Tools | NorthSky Reviews",

  description:
    "Explore the best software categories in 2026. Discover AI tools, SaaS platforms, VPNs, cybersecurity software, productivity apps, business tools, developer software, and expert technology reviews.",

  keywords: [
    "software categories",
    "best software 2026",
    "AI software",
    "SaaS tools",
    "VPN software",
    "cybersecurity tools",
    "business software",
    "productivity apps",
    "developer tools",
    "software reviews"
  ],

  metadataBase: new URL(siteUrl),

  alternates: {
    canonical: `${siteUrl}/categories`,
  },

  openGraph: {
    title:
      "Best Software Categories 2026 | NorthSky Reviews",

    description:
      "Find expert software reviews, comparisons, rankings, and buying guides across today's leading technology categories.",

    url: `${siteUrl}/categories`,

    siteName: "NorthSky Reviews",

    type: "website",

    locale: "en_CA",

    images: [
      {
        url: `${siteUrl}/og/categories.jpg`,
        width: 1200,
        height: 630,
        alt: "NorthSky Reviews Software Categories",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best Software Categories 2026 | NorthSky Reviews",
    description:
      "Explore AI tools, SaaS platforms, cybersecurity software, VPNs, business tools, and more.",
  },
};


const stats = [
  {
    number: "100+",
    label: "Software Reviews",
  },
  {
    number: "50+",
    label: "Comparisons",
  },
  {
    number: "25+",
    label: "Buying Guides",
  },
  {
    number: "15+",
    label: "Technology Categories",
  },
];


export default function CategoriesPage() {

return (

<main>

<section className="
bg-slate-950
px-6
py-24
text-white
">

<div className="
mx-auto
max-w-6xl
text-center
">

<span className="
rounded-full
bg-blue-500/20
px-5
py-2
text-sm
font-bold
text-blue-300
">
Software Discovery Hub
</span>


<h1 className="
mt-8
text-5xl
font-black
">
Explore The Best Software Categories
</h1>


<p className="
mx-auto
mt-6
max-w-4xl
text-xl
leading-8
text-slate-300
">

NorthSky Reviews helps you discover, compare, and choose the best
software solutions for work, business, security, creativity, and
everyday productivity.

Explore expert reviews, rankings, comparisons, and buying guides
covering the most important technology categories in 2026.

</p>

</div>

</section>



<section className="
px-6
py-16
">

<div className="
mx-auto
grid
max-w-6xl
gap-6
md:grid-cols-4
">

{stats.map((item)=>(

<div
key={item.label}
className="
rounded-3xl
border
bg-white
p-8
text-center
shadow-sm
"
>

<div className="
text-4xl
font-black
text-blue-600
">
{item.number}
</div>

<p className="
mt-3
font-semibold
text-slate-600
">
{item.label}
</p>

</div>

))}

</div>

</section>



<section className="
px-6
py-20
bg-slate-50
">

<div className="
mx-auto
max-w-7xl
">

<h2 className="
text-center
text-4xl
font-black
">

Browse Software Categories

</h2>


<p className="
mx-auto
mt-5
max-w-3xl
text-center
text-lg
text-slate-600
">

Find the right tools faster by exploring software organized by
industry, purpose, and use case.

</p>


<div className="
mt-12
grid
gap-8
md:grid-cols-3
">

{categories.map((category)=>(

<Link
key={category.slug}
href={`/category/${category.slug}`}
className="
rounded-3xl
border
bg-white
p-8
transition
hover:-translate-y-1
hover:shadow-xl
"
>

<div className="text-5xl">
{category.icon || "💻"}
</div>


<h3 className="
mt-5
text-2xl
font-black
">

{category.name}

</h3>


<p className="
mt-3
leading-7
text-slate-600
">

Explore reviews, comparisons, rankings,
and recommendations.

</p>


<span className="
mt-5
inline-block
font-bold
text-blue-600
">

Explore Category →

</span>


</Link>

))}

</div>

</div>

</section>



<section className="
px-6
py-24
">

<div className="
mx-auto
max-w-6xl
">

<h2 className="
text-4xl
font-black
text-center
">

How We Review Software

</h2>


<div className="
mt-12
grid
gap-8
md:grid-cols-3
">


{[
[
"🔍",
"Independent Research",
"We analyze features, pricing, integrations, security, and market reputation."
],

[
"⚙️",
"Real Evaluation",
"We compare software using consistent criteria including usability and value."
],

[
"📈",
"Updated Rankings",
"We update reviews as products change, launch features, and adjust pricing."
]

].map((item)=>(

<div
key={item[1]}
className="
rounded-3xl
border
p-8
"
>

<div className="text-5xl">
{item[0]}
</div>

<h3 className="
mt-5
text-2xl
font-black
">
{item[1]}
</h3>

<p className="
mt-4
leading-7
text-slate-600
">
{item[2]}
</p>

</div>

))}


</div>

</div>

</section>



<section className="
bg-blue-600
px-6
py-20
text-white
">

<div className="
mx-auto
max-w-5xl
text-center
">

<h2 className="
text-4xl
font-black
">

Find Better Software Faster

</h2>


<p className="
mt-6
text-xl
leading-8
text-blue-100
">

Compare leading software platforms, discover trusted
recommendations, and make smarter technology decisions.

</p>


<div className="
mt-8
flex
justify-center
gap-5
flex-wrap
">

<Link
href="/reviews"
className="
rounded-xl
bg-white
px-8
py-4
font-black
text-blue-700
"
>

Read Reviews →

</Link>


<Link
href="/comparisons"
className="
rounded-xl
border
border-white/40
px-8
py-4
font-black
"
>

Compare Software →

</Link>

</div>

</div>

</section>


</main>

);

}