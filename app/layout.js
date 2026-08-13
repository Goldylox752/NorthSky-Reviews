import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://north-sky-reviews-f1gr.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "NorthSky Reviews | Best AI Tools, Software & Technology 2026",
    template:
      "%s | NorthSky Reviews",
  },

  description:
    "Discover the best AI tools, software, VPNs, SaaS platforms, cybersecurity products, and technology solutions with reviews, comparisons, rankings, and buying guides.",

  keywords: [
    "best AI tools 2026",
    "AI tools",
    "AI software",
    "AI reviews",
    "software reviews",
    "software comparisons",
    "best software",
    "ChatGPT alternatives",
    "Claude alternatives",
    "automation software",
    "productivity software",
    "SaaS reviews",
    "VPN reviews",
    "cybersecurity tools",
    "technology reviews",
    "technology buying guides",
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
    canonical: siteUrl,
  },

  openGraph: {
    title:
      "NorthSky Reviews | Best AI Tools, Software & Technology 2026",

    description:
      "Reviews, comparisons, rankings, and buying guides covering AI tools, software, VPNs, cybersecurity, SaaS, and technology.",

    url: siteUrl,

    siteName: "NorthSky Reviews",

    locale: "en_CA",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "NorthSky Reviews | Best AI Tools & Software 2026",

    description:
      "Find and compare the best AI tools, software, VPNs, cybersecurity products, and technology services.",
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
    <html lang="en-CA">

      <head>
        {/* Verification */}

        <meta
          name="fo-verify"
          content="b2dc6c38-a3b8-44d3-b6d1-9d5389957786"
        />

        <meta
          name="theme-color"
          content="#2563eb"
        />
      </head>

      <body className="min-h-screen bg-white text-slate-900 antialiased">

        <Navbar />

        <main>
          {children}
        </main>

        <Footer />

      </body>

    </html>
  );
}