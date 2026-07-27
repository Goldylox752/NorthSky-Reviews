export const affiliates = {

  nordvpn: {
    name: "NordVPN",
    link:
      "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=12345",
    commission: "40%",
    cookie: "30 days",
    tier: "premium",
    category: "VPN",
  },


  expressvpn: {
    name: "ExpressVPN",
    link:
      "https://www.expressvpn.com/affiliate?aff=12345",
    commission: "35%",
    cookie: "30 days",
    tier: "premium",
    category: "VPN",
  },


  chatgpt: {
    name: "ChatGPT",
    link:
      "https://chat.openai.com",
    commission: "None",
    cookie: "N/A",
    tier: "free",
    category: "AI",
  },


  jasper: {
    name: "Jasper AI",
    link:
      "https://jasper.ai?fpr=12345",
    commission: "30%",
    cookie: "60 days",
    tier: "premium",
    category: "AI",
  },


  saily: {
    name: "Saily",
    link:
      "https://go.saily.site/aff_c?offer_id=101&aff_id=12345",
    commission: "20%",
    cookie: "30 days",
    tier: "premium",
    category: "Travel",
  },


};




export function getAffiliateLink(
  key,
  utmSource = "northsky"
){

  const affiliate = affiliates[key];


  if(!affiliate){

    return null;

  }


  const separator = affiliate.link.includes("?")
    ? "&"
    : "?";


  return `${affiliate.link}${separator}utm_source=${utmSource}&utm_medium=affiliate`;

}
