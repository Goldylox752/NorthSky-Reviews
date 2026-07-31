/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/category",
        destination: "/category/ai",
        permanent: true,
      },
      {
        source: "/categories",
        destination: "/category/ai",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
