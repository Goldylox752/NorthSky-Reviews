export default function robots() {

  const baseUrl = "https://northsky-reviews.vercel.app";


  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],

    sitemap: `${baseUrl}/sitemap.xml`,
  };

}