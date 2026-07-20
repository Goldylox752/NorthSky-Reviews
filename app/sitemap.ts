import type { MetadataRoute } from "next";


const baseUrl = "https://northsky-reviews.vercel.app";


export default function sitemap(): MetadataRoute.Sitemap {

return [

{
url: baseUrl,
lastModified: new Date(),
changeFrequency: "weekly",
priority: 1,
},


{
url: `${baseUrl}/reviews`,
lastModified: new Date(),
changeFrequency: "weekly",
priority: 0.9,
},


{
url: `${baseUrl}/comparisons`,
lastModified: new Date(),
changeFrequency: "weekly",
priority: 0.9,
},


{
url: `${baseUrl}/comparisons/best-vpns-canada`,
lastModified: new Date(),
changeFrequency: "weekly",
priority: 0.9,
},


{
url: `${baseUrl}/comparisons/nordvpn-vs-expressvpn`,
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.8,
},


{
url: `${baseUrl}/reviews/nordvpn`,
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.9,
},


{
url: `${baseUrl}/reviews/saily`,
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.9,
},


{
url: `${baseUrl}/travel/best-esim-canada`,
lastModified: new Date(),
changeFrequency: "monthly",
priority: 0.8,
},


{
url: `${baseUrl}/deals`,
lastModified: new Date(),
changeFrequency: "weekly",
priority: 0.8,
},


{
url: `${baseUrl}/ai`,
lastModified: new Date(),
changeFrequency: "weekly",
priority: 0.8,
},


{
url: `${baseUrl}/privacy-policy`,
lastModified: new Date(),
changeFrequency: "yearly",
priority: 0.3,
},


{
url: `${baseUrl}/affiliate-disclosure`,
lastModified: new Date(),
changeFrequency: "yearly",
priority: 0.3,
},


{
url: `${baseUrl}/editorial-policy`,
lastModified: new Date(),
changeFrequency: "yearly",
priority: 0.3,
},


{
url: `${baseUrl}/contact`,
lastModified: new Date(),
changeFrequency: "yearly",
priority: 0.3,
},

];

}