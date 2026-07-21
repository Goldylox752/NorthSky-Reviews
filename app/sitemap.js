import { tools, categories } from "@/app/data/tools";
import { comparisons } from "@/app/data/comparisons";
import { guides } from "@/app/data/guides";


const baseUrl =
  "https://northsky-reviews.vercel.app";



export default function sitemap() {


  const lastModified =
    new Date();



  const staticPages = [

    "",

    "/all-tools",

    "/reviews",

    "/comparisons",

    "/guides",

    "/about",

    "/contact",

    "/affiliate-disclosure",

    "/methodology",

    "/newsletter"

  ];




  const staticUrls =
    staticPages.map((page)=>({

      url:
        `${baseUrl}${page}`,

      lastModified,

      changeFrequency:
        page === ""
        ? "daily"
        : "weekly",

      priority:
        page === ""
        ? 1
        : 0.8

    }));







  const reviewUrls =
    tools.map((tool)=>({

      url:
        `${baseUrl}/reviews/${tool.slug}`,

      lastModified,

      changeFrequency:
        "monthly",

      priority:
        0.8

    }));








  const comparisonUrls =
    comparisons.map((item)=>({

      url:
        `${baseUrl}/comparisons/${item.slug}`,

      lastModified,

      changeFrequency:
        "monthly",

      priority:
        0.8

    }));








  const guideUrls =
    guides.map((guide)=>({

      url:
        `${baseUrl}/guides/${guide.slug}`,

      lastModified,

      changeFrequency:
        "weekly",

      priority:
        0.9

    }));








  const categoryUrls =
    categories.map((category)=>({

      url:
        `${baseUrl}/categories/${category.slug}`,

      lastModified,

      changeFrequency:
        "weekly",

      priority:
        0.7

    }));







  return [

    ...staticUrls,

    ...reviewUrls,

    ...comparisonUrls,

    ...guideUrls,

    ...categoryUrls

  ];

}