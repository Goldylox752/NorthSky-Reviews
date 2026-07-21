export const affiliates = {
  // VPNs
  nordvpn: {
    name: "NordVPN",
    link: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=12345",
    commission: "40%",
    cookie: "30 days",
    tier: "premium",
  },
  expressvpn: {
    name: "ExpressVPN",
    link: "https://www.expressvpn.com/affiliate?aff=12345",
    commission: "35%",
    cookie: "30 days",
    tier: "premium",
  },
  // AI Tools
  chatgpt: {
    name: "ChatGPT",
    link: "https://chat.openai.com",
    commission: "None (direct)",
    cookie: "N/A",
    tier: "free",
  },
  jasper: {
    name: "Jasper AI",
    link: "https://jasper.ai?fpr=12345",
    commission: "30%",
    cookie: "60 days",
    tier: "premium",
  },
  // Travel Tech
  saily: {
    name: "Saily eSIM",
    link: "https://go.saily.site/aff_c?offer_id=101&aff_id=12345",
    commission: "20%",
    cookie: "30 days",
    tier: "premium",
  },
  // Add more as needed
};

// Helper to get affiliate link with tracking
export function getAffiliateLink(key, utmSource = "northsky") {
  const affiliate = affiliates[key];
  if (!affiliate) return null;
  const separator = affiliate.link.includes("?") ? "&" : "?";
  return `${affiliate.link}${separator}utm_source=${utmSource}&utm_medium=affiliate`;
}