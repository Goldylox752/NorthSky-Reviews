export default function manifest() {

  return {

    name: "NorthSky Reviews",

    short_name: "NorthSky",

    description:
      "Independent technology reviews, AI tool comparisons, software guides, VPN reviews, and buying recommendations.",

    start_url: "/",

    display: "standalone",

    background_color:
      "#ffffff",

    theme_color:
      "#2563eb",

    icons: [

      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },

      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      }

    ]

  };

}