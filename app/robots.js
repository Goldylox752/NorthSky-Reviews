const baseUrl =
  "https://northsky-reviews.vercel.app";


export default function robots() {


  return {


    rules: [

      {

        userAgent: "*",

        allow: "/",


        disallow: [

          "/api/",

          "/admin/",

          "/dashboard/",

          "/private/",

        ],

      },

    ],



    sitemap:
      `${baseUrl}/sitemap.xml`,



    host:
      baseUrl,


  };


}
