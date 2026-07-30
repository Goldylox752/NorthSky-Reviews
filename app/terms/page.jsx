import Link from "next/link";


export const metadata = {

  title:
    "Terms of Service | NorthSky Reviews",

  description:
    "Read the NorthSky Reviews terms of service outlining website usage, reviews, affiliate relationships, and user responsibilities.",

  keywords:[
    "NorthSky Reviews terms",
    "website terms of service",
    "technology reviews terms",
    "affiliate website terms"
  ],

  alternates:{
    canonical:
    "https://northsky-reviews.vercel.app/terms"
  }

};



export default function TermsPage(){


const schema = {

"@context":"https://schema.org",

"@type":"WebPage",

"name":
"NorthSky Reviews Terms of Service",

"description":
"Terms and conditions for using NorthSky Reviews.",

"url":
"https://northsky-reviews.vercel.app/terms",

"publisher":{

"@type":"Organization",

"name":
"NorthSky Reviews",

"url":
"https://northsky-reviews.vercel.app"

}

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

📄 Website Terms

</span>



<h1 className="mt-8 text-5xl font-black md:text-6xl">

Terms of Service

</h1>



<p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">

The rules and conditions that apply when
using NorthSky Reviews.

</p>


</div>


</section>







<section className="mx-auto max-w-5xl px-6 py-20 space-y-12">





<div>

<h2 className="text-3xl font-black">
Acceptance of Terms
</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

By accessing or using NorthSky Reviews, you agree
to these Terms of Service and related policies.
If you do not agree with these terms, please
discontinue use of this website.

</p>

</div>







<div>

<h2 className="text-3xl font-black">
Website Purpose
</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

NorthSky Reviews provides technology reviews,
AI software comparisons, rankings, educational
content, and product research.

</p>


<p className="mt-4 text-lg leading-8 text-slate-600">

Our content is provided for informational purposes
only and should not be considered professional,
financial, legal, or purchasing advice.

</p>

</div>







<div>

<h2 className="text-3xl font-black">
Reviews & Rankings
</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

Reviews and rankings are created using editorial
research, available product information, features,
pricing, usability, performance, and overall value.

</p>


<p className="mt-4 text-lg leading-8 text-slate-600">

Software products change frequently. Features,
pricing, availability, and services may change
after publication.

</p>

</div>







<div>

<h2 className="text-3xl font-black">
Affiliate Links & Partnerships
</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

Some pages may contain affiliate links. NorthSky
Reviews may earn a commission when users purchase
products through certain links.

</p>


<p className="mt-4 text-lg leading-8 text-slate-600">

Affiliate relationships do not influence our
ratings, rankings, or editorial opinions.

Learn more through our{" "}

<Link

href="/affiliate-disclosure"

className="font-bold text-blue-600 hover:underline"

>

Affiliate Disclosure

</Link>.

</p>

</div>







<div>

<h2 className="text-3xl font-black">
Third-Party Websites
</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

NorthSky Reviews may link to external websites,
software providers, and services.

</p>


<p className="mt-4 text-lg leading-8 text-slate-600">

We are not responsible for third-party content,
pricing changes, availability, privacy policies,
or terms of external websites.

</p>

</div>







<div>

<h2 className="text-3xl font-black">
User Responsibilities
</h2>


<ul className="mt-5 space-y-3 text-lg text-slate-600">

<li>
✓ Use the website responsibly
</li>

<li>
✓ Do not attempt to compromise website security
</li>

<li>
✓ Do not misuse website content
</li>

<li>
✓ Verify software information before purchasing
</li>

</ul>

</div>







<div>

<h2 className="text-3xl font-black">
Intellectual Property
</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

Original content, branding, graphics, design,
and materials published by NorthSky Reviews are
protected by applicable intellectual property laws.

</p>

</div>







<div>

<h2 className="text-3xl font-black">
Limitation of Liability
</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

NorthSky Reviews provides information on an
"as available" basis.

We do not guarantee that all information will
always be complete, accurate, current, or error-free.

</p>

</div>







<div>

<h2 className="text-3xl font-black">
Privacy
</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

Your privacy is important to us.

Please review our{" "}

<Link

href="/privacy"

className="font-bold text-blue-600 hover:underline"

>

Privacy Policy

</Link>

to understand how information is handled.

</p>

</div>







<div>

<h2 className="text-3xl font-black">
Changes To These Terms
</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

NorthSky Reviews may update these Terms of Service
as the website grows, features change, or legal
requirements evolve.

</p>

</div>



<p className="text-sm text-slate-500">

Last updated: July 2026

</p>



</section>







<section className="bg-slate-50 px-6 py-20 text-center">


<div className="mx-auto max-w-4xl">


<h2 className="text-4xl font-black">

Questions About These Terms?

</h2>


<p className="mt-5 text-lg text-slate-600">

If you have questions about our terms,
privacy practices, or website policies,
contact the NorthSky Reviews team.

</p>



<Link

href="/contact"

className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 font-bold text-white hover:bg-blue-700"

>

Contact Us →

</Link>


</div>


</section>



</main>

);

}
