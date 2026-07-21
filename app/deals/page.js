export const deals = [
  {
    id: "nordvpn-deal",
    name: "NordVPN",
    category: "VPN",
    slug: "nordvpn",
    description: "Industry‑leading VPN with advanced security features.",
    discount: "Save 68% on 2‑year plan",
    code: null, // no code needed – auto-applied via link
    link: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=12345",
    image: "/logos/nordvpn.png",
    expiry: "2026-12-31",
    featured: true,
    rating: 4.8,
    commission: "40%",
  },
  {
    id: "expressvpn-deal",
    name: "ExpressVPN",
    category: "VPN",
    slug: "expressvpn",
    description: "Blazing fast VPN, ideal for streaming and gaming.",
    discount: "Save 49% + 3 months free",
    code: "NORTHSKY49",
    link: "https://www.expressvpn.com/affiliate?aff=12345",
    image: "/logos/expressvpn.png",
    expiry: "2026-08-15",
    featured: false,
    rating: 4.7,
    commission: "35%",
  },
  {
    id: "surfshark-deal",
    name: "Surfshark VPN",
    category: "VPN",
    slug: "surfshark",
    description: "Unlimited devices on a single subscription.",
    discount: "Save 82% + 2 months free",
    code: "NORTHSKY82",
    link: "https://surfshark.deals/northsky",
    image: "/logos/surfshark.png",
    expiry: "2026-09-30",
    featured: false,
    rating: 4.5,
    commission: "35%",
  },
  {
    id: "saily-deal",
    name: "Saily eSIM",
    category: "Travel Tech",
    slug: "saily",
    description: "Affordable international travel data with eSIM.",
    discount: "Save 20% on your first purchase",
    code: null,
    link: "https://go.saily.site/aff_c?offer_id=101&aff_id=12345",
    image: "/logos/saily.png",
    expiry: "2026-10-01",
    featured: true,
    rating: 4.8,
    commission: "20%",
  },
  {
    id: "jasper-deal",
    name: "Jasper AI",
    category: "AI Tools",
    slug: "jasper",
    description: "AI writing assistant for marketing teams.",
    discount: "Save 30% on annual plan",
    code: "NORTHSKY30",
    link: "https://jasper.ai?fpr=12345",
    image: "/logos/jasper.png",
    expiry: "2026-07-31",
    featured: false,
    rating: 4.5,
    commission: "30%",
  },
  {
    id: "midjourney-deal",
    name: "Midjourney",
    category: "AI Tools",
    slug: "midjourney",
    description: "Create stunning AI images with a powerful generative model.",
    discount: "10% off first month",
    code: "MJ10",
    link: "https://www.midjourney.com",
    image: "/logos/midjourney.png",
    expiry: "2026-12-31",
    featured: false,
    rating: 4.9,
    commission: null,
  },
  // Add more deals as you find them
];

// Helper to get featured deal
export function getFeaturedDeal() {
  return deals.find((d) => d.featured) || deals[0];
}

// Helper to get categories from deals
export function getDealCategories() {
  return [...new Set(deals.map((d) => d.category))];
}