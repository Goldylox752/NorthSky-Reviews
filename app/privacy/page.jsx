export const metadata = {

  title:
    "Privacy Policy | NorthSky Reviews",

  description:
    "Read the NorthSky Reviews privacy policy explaining how we collect, use, and protect visitor information.",

  keywords:[
    "NorthSky Reviews privacy policy",
    "website privacy",
    "AI software reviews privacy",
    "data protection"
  ],

  alternates:{
    canonical:
      "https://northsky-reviews.vercel.app/privacy"
  }

};



export default function PrivacyPage(){


const schema = {

"@context":"https://schema.org",

"@type":"PrivacyPolicy",

"name":
"NorthSky Reviews Privacy Policy",

"description":
"Privacy policy explaining how NorthSky Reviews handles visitor information.",

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

🔒 Privacy Policy

</span>



<h1 className="mt-8 text-5xl font-black md:text-6xl">

Your Privacy Matters

</h1>



<p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">

Learn how NorthSky Reviews collects,
uses, and protects information when you
visit our website.

</p>


</div>


</section>







<section className="mx-auto max-w-5xl px-6 py-20 space-y-12">





<div>

<h2 className="text-3xl font-black">

Information We Collect

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

NorthSky Reviews may collect information
provided voluntarily by visitors, including
email addresses submitted through contact
forms, newsletter subscriptions, or business
inquiries.

</p>


<p className="mt-4 text-lg leading-8 text-slate-600">

We may also collect limited technical
information such as browser type, device
information, analytics data, and website
usage patterns.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

How We Use Information

</h2>


<ul className="mt-5 space-y-3 text-lg text-slate-600">


<li>
✓ Respond to questions and inquiries
</li>


<li>
✓ Improve website performance and content
</li>


<li>
✓ Analyze visitor usage and trends
</li>


<li>
✓ Provide software reviews and updates
</li>


</ul>


</div>







<div>

<h2 className="text-3xl font-black">

Cookies & Analytics

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

NorthSky Reviews may use cookies and analytics
services to understand how visitors interact
with our website.

</p>


<p className="mt-4 text-lg leading-8 text-slate-600">

These technologies help us improve user
experience, measure website performance,
and create better content.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

Affiliate Links

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

Some pages may contain affiliate links.
If you purchase a product through these links,
we may earn a commission at no additional cost
to you.

</p>


<p className="mt-4 text-lg leading-8 text-slate-600">

Affiliate relationships do not influence our
editorial opinions or software evaluations.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

Third-Party Services

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

NorthSky Reviews may link to external websites,
software providers, advertising partners,
and third-party services.

</p>


<p className="mt-4 text-lg leading-8 text-slate-600">

We are not responsible for the privacy practices
or policies of external websites.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

Data Security

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

We take reasonable steps to protect information
submitted to NorthSky Reviews. However, no
internet transmission can be guaranteed to be
100% secure.

</p>


</div>







<div>

<h2 className="text-3xl font-black">

Contact Us

</h2>


<p className="mt-4 text-lg leading-8 text-slate-600">

If you have questions about this privacy policy,
contact NorthSky Reviews.

</p>


<a

href="mailto:byronsanche@zohomailcloud.ca"

className="mt-5 inline-block font-bold text-blue-600 hover:underline"

>

byronsanche@zohomailcloud.ca →

</a>


</div>





</section>







<section className="bg-slate-950 px-6 py-16 text-center text-white">


<h2 className="text-3xl font-black">

Explore NorthSky Reviews

</h2>


<p className="mx-auto mt-4 max-w-2xl text-slate-300">

Discover AI tools, software reviews,
comparisons, and technology guides.

</p>


</section>



</main>

);

}
