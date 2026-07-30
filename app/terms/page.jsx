import Link from "next/link";


export const metadata = {

  title:
    "Terms of Service | NorthSky Reviews",

  description:
    "Read the NorthSky Reviews terms of service covering website usage, software reviews, affiliate relationships, and user responsibilities.",

  keywords:[
    "NorthSky Reviews terms",
    "website terms of service",
    "software review terms",
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
"https://northsky-reviews.vercel.app/terms"

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

The terms and conditions for using
NorthSky Reviews.

</p>


</div>


</section>







<section className="mx-auto max-w-5xl px-6 py-20 space-y-12">





<div>

<h2 className="text-3xl font-black">

Acceptance of Terms

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

By accessing or using NorthSky Reviews,
you agree to these Terms of Service and
our website policies.

</p>


<p className="mt-4 text-lg leading-8 text-slate-600">

If you do not agree with these terms,
please discontinue use of the website.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

Website Purpose

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

NorthSky Reviews provides educational
content including AI software reviews,
technology comparisons, rankings, and
buying guides.

</p>


<p className="mt-4 text-lg leading-8 text-slate-600">

Our content is intended for informational
purposes only and should not be considered
professional, financial, or purchasing advice.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

Reviews & Recommendations

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

NorthSky Reviews evaluates software based
on available features, usability, pricing,
performance, value, and intended audience.

</p>


<p className="mt-4 text-lg leading-8 text-slate-600">

Software products change frequently.
Pricing, features, availability, and services
may change after publication.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

Affiliate Relationships

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

Some links on NorthSky Reviews may be
affiliate links. We may earn commissions
when users purchase products through these
links.

</p>


<p className="mt-4 text-lg leading-8 text-slate-600">

Affiliate partnerships do not guarantee
positive reviews or rankings. Editorial
opinions remain independent.

</p>


<Link

href="/affiliate-disclosure"

className="mt-5 inline-block font-bold text-blue-600 hover:underline"

>

Read Affiliate Disclosure →

</Link>


</div>







<div>

<h2 className="text-3xl font-black">

Third-Party Websites

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

NorthSky Reviews may contain links to
external websites, software providers,
and services.

</p>


<p className="mt-4 text-lg leading-8 text-slate-600">

We are not responsible for third-party
content, pricing, availability, security,
or privacy practices.

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
✓ Do not attempt to disrupt website security
</li>


<li>
✓ Do not misuse website content
</li>


<li>
✓ Verify product information before purchasing
</li>


</ul>


</div>







<div>

<h2 className="text-3xl font-black">

Intellectual Property

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

All original content, branding, graphics,
design elements, and materials published
by NorthSky Reviews are protected by
applicable intellectual property laws.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

Limitation of Liability

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

NorthSky Reviews provides information on
an "as available" basis.

We do not guarantee that all information
is always complete, accurate, current,
or error-free.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

Changes To These Terms

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

We may update these Terms of Service as
the website grows, technology changes,
or new requirements are introduced.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

Contact NorthSky Reviews

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

Questions about these terms can be sent to:

</p>


<a

href="mailto:byronsanche@zohomailcloud.ca"

className="mt-4 inline-block font-bold text-blue-600 hover:underline"

>

byronsanche@zohomailcloud.ca →

</a>


</div>



</section>







<section className="bg-slate-50 px-6 py-16 text-center">


<h2 className="text-3xl font-black">

Explore NorthSky Reviews

</h2>


<p className="mt-4 text-slate-600">

Discover AI tools, reviews, comparisons,
and technology guides.

</p>


<Link

href="/reviews"

className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 font-bold text-white"

>

Read Reviews →

</Link>


</section>



</main>

);

}
