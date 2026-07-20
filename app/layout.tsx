import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://northsky-reviews.vercel.app";


export const metadata = {
  metadataBase: new URL(siteUrl),

  title:
    "NorthSky Reviews | Best VPNs, AI Tools, Travel Tech & Buying Guides",

  description:
    "Independent technology reviews, comparisons, and buying guides covering VPNs, AI tools, travel technology, software, cybersecurity, and gadgets.",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "NorthSky Reviews",
    description:
      "Independent technology reviews and buying guides.",
    url: siteUrl,
    siteName: "NorthSky Reviews",
    type: "website",
  },
};



export default function RootLayout({ children }) {

return (

<html lang="en">

<body className="bg-white text-slate-900 antialiased">


<Script
src="https://www.googletagmanager.com/gtag/js?id=G-528699336"
strategy="afterInteractive"
/>


<Script
id="google-analytics"
strategy="afterInteractive"
>
{`
window.dataLayer = window.dataLayer || [];

function gtag(){
window.dataLayer.push(arguments);
}

gtag("js", new Date());

gtag(
"config",
"G-528699336"
);
`}
</Script>



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

<Link href="/deals">
Deals
</Link>

</div>


</nav>

</header>



{children}



<footer className="mt-20 border-t bg-slate-50 p-10 text-center">

<p>
© {new Date().getFullYear()} NorthSky Reviews. All rights reserved.
</p>

</footer>


</body>

</html>

);

}