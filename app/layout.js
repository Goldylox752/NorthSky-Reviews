import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  metadataBase: new URL("https://northsky-reviews.vercel.app"),

  title: {
    default: "NorthSky Reviews | AI Tools, Software & Technology Reviews",
    template: "%s | NorthSky Reviews",
  },

  description:
    "Discover the best AI tools, software, automation platforms, and technology products. Compare expert reviews, rankings, pricing, and alternatives with NorthSky Reviews.",

  keywords: [
    "AI tools",
    "AI software",
    "AI reviews",
    "best AI tools",
    "software reviews",
    "software comparisons",
    "ChatGPT alternatives",
    "automation software",
    "productivity software",
    "SaaS reviews",
    "technology reviews",
    "NorthSky Reviews",
  ],

  authors: [
    {
      name: "NorthSky Reviews",
    },
  ],

  creator: "NorthSky Reviews",

  publisher: "NorthSky Reviews",

  alternates: {
    canonical: "https://northsky-reviews.vercel.app",
  },

  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },

  openGraph: {
    title: "NorthSky Reviews | AI Tools, Software & Technology Reviews",
    description:
      "Expert reviews and comparisons of AI software, automation tools, and technology products.",

    url: "https://northsky-reviews.vercel.app",

    siteName: "NorthSky Reviews",

    locale: "en_CA",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NorthSky Reviews",
    description:
      "Find and compare the best AI tools, software, and technology products.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="fo-verify"
          content="b2dc6c38-a3b8-44d3-b6d1-9d5389957786"
        />

        <meta name="theme-color" content="#2563eb" />
      </head>

      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
