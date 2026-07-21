import { tools } from "@/app/data/tools";
import { comparisons } from "@/app/data/comparisons";
import { guides } from "@/app/data/guides";
import { categories } from "@/app/data/tools";


export default function sitemap() {

  const baseUrl = "https://northsky-reviews.vercel.app";


  const staticPages = [
    "",
    "/reviews",
    "/comparisons",
    "/guides",
    "/all-tools",
    "/about",
    "/contact",
    "/affiliate-disclosure",
    "/methodology",
    "/newsletter",
  ];



  const pages = staticPages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page === "" ? 1 : 0.8,
  }));



  const reviewPages = tools.map((tool) => ({
    url: `${baseUrl}/reviews/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));



  const comparisonPages = comparisons.map((item) => ({
    url: `${baseUrl}/comparisons/${item.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));



  const guidePages = guides.map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));



  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/categories/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));



  return [
    ...pages,
    ...reviewPages,
    ...comparisonPages,
    ...guidePages,
    ...categoryPages,
  ];

}