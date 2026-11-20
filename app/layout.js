import "./globals.css";

export const metadata = {
  title: {
    default: "NorthSky Reviews | Honest Tech, AI, VPN & Travel Gear Reviews",
    template: "%s | NorthSky Reviews",
  },
  description:
    "Independent reviews, side-by-side comparisons, and real-world benchmarks for AI tools, VPN providers, and modern travel tech.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
