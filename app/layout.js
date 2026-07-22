import Link from "next/link";
import Script from "next/script";
import "./globals.css";


const siteUrl = "https://northsky-reviews.vercel.app";


export const metadata = {

  metadataBase:new URL(siteUrl),

  title:{
    default:
    "NorthSky Reviews | AI Tools, VPNs, Travel Tech & Software Reviews",

    template:
    "%s | NorthSky Reviews",
  },


  description:
  "Independent technology reviews, AI tool comparisons, VPN guides, travel tech recommendations, software reviews, and buying guides.",


  keywords:[
    "AI tools",
    "AI software reviews",
    "VPN reviews",
    "travel tech",
    "software comparisons",
    "technology buying guides",
    "cybersecurity"
  ],


  robots:{
    index:true,
    follow:true
  },


  openGraph:{

    title:
    "NorthSky Reviews",

    description:
    "Technology reviews, AI tools, software comparisons and buying guides.",

    url:siteUrl,

    siteName:
    "NorthSky Reviews",

    type:"website",

    locale:"en_CA",

    images:[
      {
        url:`${siteUrl}/og-image.jpg`,
        width:1200,
        height:630,
        alt:"NorthSky Reviews"
      }
    ]

  },


  twitter:{
    card:"summary_large_image",
    title:"NorthSky Reviews",
    description:
    "Independent technology reviews and buying guides.",
    images:[
      `${siteUrl}/og-image.jpg`
    ]
  },


  alternates:{
    canonical:siteUrl
  }

};



export default function RootLayout({children}){


return (

<html lang="en">


<body className="bg-white text-slate-900 antialiased flex min-h-screen flex-col">



{/* Google Analytics */}

<Script
src="https://www.googletagmanager.com/gtag/js?id=G-528699336"
strategy="afterInteractive"
/>


<Script
id="google-analytics"
strategy="afterInteractive"
dangerouslySetInnerHTML={{
__html:`

window.dataLayer = window.dataLayer || [];

function gtag(){
dataLayer.push(arguments);
}

gtag('js', new Date());

gtag('config','G-528699336');

`
}}
/>



{/* Website Schema */}

<Script
id="website-schema"
type="application/ld+json"
dangerouslySetInnerHTML={{
__html:JSON.stringify({

"@context":"https://schema.org",

"@type":"WebSite",

"name":"NorthSky Reviews",

"url":siteUrl,


"potentialAction":{

"@type":"SearchAction",

"target":
`${siteUrl}/search?q={search_term_string}`,

"query-input":
"required name=search_term_string"

},


"publisher":{

"@type":"Organization",

"name":"NorthSky Reviews",

"url":siteUrl

}


})
}}
/>





<header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">


<nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">


<Link
href="/"
className="text-2xl font-black"
>

NorthSky
<span className="text-blue-600">
Reviews
</span>

</Link>




<div className="hidden gap-8 md:flex">


<Link href="/reviews">
Reviews
</Link>


<Link href="/comparisons">
Comparisons
</Link>


<Link href="/ai">
AI Hub
</Link>


<Link href="/deals">
Deals
</Link>


<Link
href="/search"
className="rounded-full bg-slate-100 px-4 py-2"
>
🔍 Search
</Link>


</div>



</nav>

</header>






<main className="flex-1">

{children}

</main>






<footer className="border-t bg-slate-50">


<div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-4">


<div>

<h3 className="font-black text-xl">
NorthSky Reviews
</h3>

<p className="mt-3 text-sm text-slate-600">

AI tools, software reviews,
technology comparisons and buying guides.

</p>

</div>




<div>

<h4 className="font-bold">
Explore
</h4>


<div className="mt-4 space-y-2 text-sm">


<Link href="/reviews">
Reviews
</Link>


<br/>

<Link href="/ai">
AI Tools
</Link>


<br/>

<Link href="/comparisons">
Comparisons
</Link>


<br/>

<Link href="/deals">
Deals
</Link>


</div>

</div>





<div>

<h4 className="font-bold">
Topics
</h4>


<div className="mt-4 space-y-2 text-sm">


<Link href="/categories/vpn">
VPN
</Link>

<br/>

<Link href="/categories/ai-tools">
AI Tools
</Link>


<br/>

<Link href="/categories/software">
Software
</Link>


<br/>

<Link href="/categories/travel-tech">
Travel Tech
</Link>


</div>


</div>





<div>

<h4 className="font-bold">
Company
</h4>


<div className="mt-4 space-y-2 text-sm">


<Link href="/about">
About
</Link>


<br/>


<Link href="/contact">
Contact
</Link>


<br/>


<Link href="/privacy">
Privacy
</Link>


<br/>


<Link href="/terms">
Terms
</Link>


</div>


</div>



</div>





<div className="border-t py-6 text-center text-sm text-slate-500">


© {new Date().getFullYear()} NorthSky Reviews.

<br/>

Affiliate links may earn us a commission at no extra cost.

</div>



</footer>




</body>


</html>

);

}