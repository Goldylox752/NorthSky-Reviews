import Link from "next/link";


export const metadata = {

  title:
    "Privacy Policy | NorthSky Reviews",

  description:
    "Privacy policy explaining how NorthSky Reviews collects, uses, and protects visitor information, analytics data, cookies, and affiliate tracking.",

  keywords:[
    "NorthSky Reviews privacy policy",
    "technology website privacy",
    "affiliate tracking policy",
    "analytics privacy"
  ],

  alternates:{
    canonical:
    "https://northsky-reviews.vercel.app/privacy"
  }

};



export default function PrivacyPolicyPage(){


const schema = {

"@context":"https://schema.org",

"@type":"WebPage",

"name":
"NorthSky Reviews Privacy Policy",

"description":
"Privacy policy explaining how NorthSky Reviews handles visitor information, cookies, analytics, and affiliate tracking.",

"url":
"https://northsky-reviews.vercel.app/privacy"

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

🔐 Privacy & Data Protection

</span>



<h1 className="mt-8 text-5xl font-black md:text-6xl">

Privacy Policy

</h1>



<p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">

How NorthSky Reviews handles information,
analytics, cookies, and affiliate tracking.

</p>


</div>


</section>







<section className="mx-auto max-w-5xl px-6 py-20 space-y-12">



<div>

<h2 className="text-3xl font-black">

Overview

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

NorthSky Reviews respects your privacy.
This policy explains how information may be
collected, used, and protected when you visit
our website.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

Information We Collect

</h2>


<p className="mt-4 text-lg text-slate-600">

We may collect limited information including:

</p>


<ul className="mt-5 space-y-3 text-lg text-slate-600">


<li>
✓ Website usage data
</li>


<li>
✓ Analytics information
</li>


<li>
✓ Information submitted through contact forms
</li>


<li>
✓ Email subscription information
</li>


<li>
✓ Device and browser information
</li>


</ul>


</div>







<div>

<h2 className="text-3xl font-black">

Google Analytics

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

NorthSky Reviews may use analytics services to
understand website traffic, visitor behavior,
and improve our content.

Analytics providers may collect information
including pages visited, device information,
and general location data.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

Affiliate Links

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

Some links on NorthSky Reviews may be affiliate
links. If you purchase a product or service
through these links, we may receive a commission
at no additional cost to you.

Affiliate tracking may use cookies or similar
technologies to measure referrals.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

Cookies

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

Cookies may be used by analytics providers,
affiliate partners, and website services to
improve functionality and measure performance.

You can manage cookie preferences through your
browser settings.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

Third-Party Services

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

NorthSky Reviews may link to third-party websites,
including software providers, affiliate partners,
and technology platforms.

We are not responsible for the privacy practices
or content of external websites.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

Data Security

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

We take reasonable steps to protect information
and maintain a secure website environment.

However, no online service can guarantee
complete security.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

Policy Updates

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

This privacy policy may be updated from time
to time to reflect changes to our website,
services, technology, or legal requirements.

</p>


</div>



</section>







<section className="bg-slate-50 px-6 py-20 text-center">


<div className="mx-auto max-w-4xl">


<h2 className="text-4xl font-black">

Questions About Privacy?

</h2>


<p className="mt-5 text-lg text-slate-600">

If you have questions about this policy or
how we handle information, contact us.

</p>



<Link

href="/contact"

className="mt-8 inline-block rounded-xl bg-blue-600 px-8 py-4 font-bold text-white"

>

Contact NorthSky Reviews →

</Link>


</div>


</section>



</main>

);

}
