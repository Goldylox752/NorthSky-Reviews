export default function robots() {

  const baseUrl = "https://northsky-reviews.vercel.app";


  return {

    rules: [
      {
        userAgent: "*",
        allow: "/",

        disallow: [
          "/api/",
          "/admin/",
        ],
      },
    ],


    sitemap:
      `${baseUrl}/sitemap.xml`,


    host:
      baseUrl,

  };

}