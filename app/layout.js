import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://your-domain.com"),

  title: {
    default: "NorthSky | AI, Software & Technology Solutions",
    template: "%s | NorthSky",
  },

  description:
    "NorthSky builds AI-powered software, technology platforms, reviews, marketplaces, and digital solutions.",

  keywords: [
    "NorthSky",
    "AI software",
    "technology solutions",
    "SaaS",
    "automation",
    "software reviews",
    "digital products",
  ],

  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },

  openGraph: {
    title: "NorthSky | AI, Software & Technology Solutions",
    description:
      "Explore AI tools, software solutions, automation platforms, and technology products built by NorthSky.",
    url: "https://your-domain.com",
    siteName: "NorthSky",
    locale: "en_CA",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NorthSky | AI & Technology Solutions",
    description:
      "AI software, automation, reviews, and technology platforms.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Replace with verification code if not using metadata.verification */}
        <meta
          name="google-site-verification"
          content="YOUR_GOOGLE_VERIFICATION_CODE"
        />
      </head>

      <body>
        {children}
      </body>
    </html>
  );
}