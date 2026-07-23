import { tools, categories } from "@/app/data/tools";
import { comparisons } from "@/app/data/comparisons";
import { guides } from "@/app/data/guides";


const baseUrl =
  "https://northsky-reviews.vercel.app";



export default function sitemap() {


  const lastModified =
    new Date();





  const staticPages = [


    {
      url: "/",
      changeFrequency: "daily",
      priority: 1
    },


    {
      url: "/all-tools",
      changeFrequency: "weekly",
      priority: 0.9
    },


    {
      url: "/reviews",
      changeFrequency: "weekly",
      priority: 0.9
    },


    {
      url: "/comparisons",
      changeFrequency: "weekly",
      priority: 0.85
    },


    {
      url: "/guides",
      changeFrequency: "weekly",
      priority: 0.85
    },


    {
      url: "/categories",
      changeFrequency: "weekly",
      priority: 0.8
    },


    {
      url: "/travel",
      changeFrequency: "weekly",
      priority: 0.8
    },


    {
      url: "/about",
      changeFrequency: "monthly",
      priority: 0.5
    },


    {
      url: "/methodology",
      changeFrequency: "monthly",
      priority: 0.6
    },


    {
      url: "/affiliate-disclosure",
      changeFrequency: "monthly",
      priority: 0.4
    },


    {
      url: "/contact",
      changeFrequency: "monthly",
      priority: 0.5
    }


  ];








  const pages = staticPages.map((page)=>({


    url:
    `${baseUrl}${page.url}`,


    lastModified,


    changeFrequency:
    page.changeFrequency,


    priority:
    page.priority


  }));









  // Individual Reviews

  const reviewPages = tools.map((tool)=>({


    url:
    `${baseUrl}/reviews/${tool.slug}`,


    lastModified,


    changeFrequency:
    "monthly",


    priority:
    0.8


  }));









  // Categories

  const categoryPages = categories.map((category)=>({


    url:
    `${baseUrl}/categories/${category.slug}`,


    lastModified,


    changeFrequency:
    "weekly",


    priority:
    0.75


  }));









  // Comparisons

  const comparisonPages = comparisons.map((item)=>({


    url:
    `${baseUrl}/comparisons/${item.slug}`,


    lastModified,


    changeFrequency:
    "monthly",


    priority:
    0.8


  }));









  // Buying Guides

  const guidePages = guides.map((guide)=>({


    url:
    `${baseUrl}/guides/${guide.slug}`,


    lastModified,


    changeFrequency:
    "weekly",


    priority:
    0.85


  }));









  return [

    ...pages,

    ...reviewPages,

    ...categoryPages,

    ...comparisonPages,

    ...guidePages

  ];


}