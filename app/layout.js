export const metadata = {
  title: "NorthSky Reviews",
  description: "NorthSky Reviews test site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
