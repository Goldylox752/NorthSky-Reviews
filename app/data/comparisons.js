import { tools } from "./tools";

const getTool = (slug) =>
  tools.find((tool) => tool.slug === slug);

const chatgpt = getTool("chatgpt");
const claude = getTool("claude");
const gemini = getTool("gemini");
const perplexity = getTool("perplexity");
const nordvpn = getTool("nordvpn");
const saily = getTool("saily");
const shopify = getTool("shopify");

export const comparisons = [
  {
    slug: "chatgpt-vs-claude",

    title:
      "ChatGPT vs Claude 2026 – Which AI Assistant Is Better?",

    description:
      "Compare ChatGPT and Claude for writing, coding, research, productivity, features, pricing, and overall value.",

    category: "AI Tools",

    productA: chatgpt,
    productB: claude,

    winner: "ChatGPT",

    features: [
      {
        name: "Overall Rating",
        a: `${chatgpt?.rating || 0}/10`,
        b: `${claude?.rating || 0}/10`,
      },
      {
        name: "Writing",
        a: "Excellent",
        b: "Excellent",
      },
      {
        name: "Coding",
        a: "Excellent",
        b: "Excellent",
      },
      {
        name: "Research",
        a: "Excellent",
        b: "Excellent",
      },
      {
        name: "Ease of Use",
        a: "Excellent",
        b: "Excellent",
      },
      {
        name: "Business Use",
        a: "Excellent",
        b: "Excellent",
      },
    ],
  },

  {
    slug: "chatgpt-vs-gemini",

    title:
      "ChatGPT vs Gemini 2026 – Which AI Tool Is Better?",

    description:
      "Compare ChatGPT and Google Gemini for AI assistance, writing, coding, research, productivity, and business use.",

    category: "AI Tools",

    productA: chatgpt,
    productB: gemini,

    winner: "ChatGPT",

    features: [
      {
        name: "Overall Rating",
        a: `${chatgpt?.rating || 0}/10`,
        b: `${gemini?.rating || 0}/10`,
      },
      {
        name: "Writing",
        a: "Excellent",
        b: "Very Good",
      },
      {
        name: "Coding",
        a: "Excellent",
        b: "Excellent",
      },
      {
        name: "Research",
        a: "Excellent",
        b: "Excellent",
      },
      {
        name: "Productivity",
        a: "Excellent",
        b: "Excellent",
      },
      {
        name: "Google Integration",
        a: "Good",
        b: "Excellent",
      },
    ],
  },

  {
    slug: "chatgpt-vs-perplexity",

    title:
      "ChatGPT vs Perplexity 2026 – Which AI Tool Is Better?",

    description:
      "Compare ChatGPT and Perplexity for research, writing, search, productivity, features, and overall AI performance.",

    category: "AI Tools",

    productA: chatgpt,
    productB: perplexity,

    winner: "ChatGPT",

    features: [
      {
        name: "Overall Rating",
        a: `${chatgpt?.rating || 0}/10`,
        b: `${perplexity?.rating || 0}/10`,
      },
      {
        name: "AI Writing",
        a: "Excellent",
        b: "Very Good",
      },
      {
        name: "AI Search",
        a: "Excellent",
        b: "Excellent",
      },
      {
        name: "Research",
        a: "Excellent",
        b: "Excellent",
      },
      {
        name: "Coding",
        a: "Excellent",
        b: "Good",
      },
      {
        name: "Source Citations",
        a: "Good",
        b: "Excellent",
      },
    ],
  },

  {
    slug: "claude-vs-gemini",

    title:
      "Claude vs Gemini 2026 – Which AI Assistant Is Better?",

    description:
      "Compare Claude and Google Gemini for writing, research, coding, productivity, features, and business use.",

    category: "AI Tools",

    productA: claude,
    productB: gemini,

    winner: "Claude",

    features: [
      {
        name: "Overall Rating",
        a: `${claude?.rating || 0}/10`,
        b: `${gemini?.rating || 0}/10`,
      },
      {
        name: "Writing",
        a: "Excellent",
        b: "Very Good",
      },
      {
        name: "Coding",
        a: "Excellent",
        b: "Excellent",
      },
      {
        name: "Research",
        a: "Excellent",
        b: "Excellent",
      },
      {
        name: "Long-Form Analysis",
        a: "Excellent",
        b: "Very Good",
      },
      {
        name: "Google Integration",
        a: "Good",
        b: "Excellent",
      },
    ],
  },

  {
    slug: "nordvpn-vs-surfshark",

    title:
      "NordVPN vs Surfshark 2026 – Best VPN Comparison",

    description:
      "Compare NordVPN and Surfshark for privacy, security, speed, streaming, device support, and pricing.",

    category: "VPN",

    productA: nordvpn,

    /*
     * Surfshark is not currently in tools.js.
     * Keeping a complete comparison object here allows
     * the comparison page to work without a broken review link.
     */

    productB: {
      slug: "surfshark",
      name: "Surfshark",
      category: "VPN & Privacy",
      rating: 9.2,
      price: "Subscription plans available",
      link: "https://surfshark.com",

      description:
        "Surfshark is a VPN service offering privacy, security, and multi-device connectivity.",

      pros: [
        "Competitive pricing",
        "Unlimited device connections",
        "Strong privacy features",
        "Good overall performance",
      ],

      cons: [
        "Some advanced features require higher plans",
        "Renewal pricing can vary",
      ],
    },

    winner: "NordVPN",

    features: [
      {
        name: "Overall Rating",
        a: `${nordvpn?.rating || 0}/10`,
        b: "9.2/10",
      },
      {
        name: "Speed",
        a: "Excellent",
        b: "Very Good",
      },
      {
        name: "Security",
        a: "Excellent",
        b: "Excellent",
      },
      {
        name: "Privacy",
        a: "Excellent",
        b: "Excellent",
      },
      {
        name: "Device Support",
        a: "10+",
        b: "Unlimited",
      },
      {
        name: "Value",
        a: "Excellent",
        b: "Very Good",
      },
    ],
  },

  {
    slug: "saily-vs-airalo",

    title:
      "Saily vs Airalo 2026 – Best Travel eSIM Comparison",

    description:
      "Compare Saily and Airalo for international mobile data, coverage, pricing, setup, and travel connectivity.",

    category: "Travel Technology",

    productA: saily,

    productB: {
      slug: "airalo",
      name: "Airalo",
      category: "Travel eSIM",
      rating: 9.0,
      price: "Plans vary by destination",
      link: "https://www.airalo.com",

      description:
        "Airalo is a travel eSIM platform offering international mobile data plans across many destinations.",

      pros: [
        "Wide destination coverage",
        "Large selection of plans",
        "Popular travel eSIM platform",
        "Easy digital activation",
      ],

      cons: [
        "Pricing varies by destination",
        "Device must support eSIM",
      ],
    },

    winner: "Saily",

    features: [
      {
        name: "Overall Rating",
        a: `${saily?.rating || 0}/10`,
        b: "9.0/10",
      },
      {
        name: "Setup",
        a: "Very Easy",
        b: "Easy",
      },
      {
        name: "Coverage",
        a: "Excellent",
        b: "Excellent",
      },
      {
        name: "Pricing",
        a: "Affordable",
        b: "Affordable",
      },
      {
        name: "App Experience",
        a: "Excellent",
        b: "Good",
      },
    ],
  },

  {
    slug: "shopify-vs-webflow",

    title:
      "Shopify vs Webflow 2026 – Which Website Platform Is Better?",

    description:
      "Compare Shopify and Webflow for ecommerce, website design, business websites, pricing, flexibility, and growth.",

    category: "Website Tools",

    productA: shopify,

    productB: {
      slug: "webflow",
      name: "Webflow",
      category: "Website Tools",
      rating: 9.0,
      price: "Paid plans available",
      link: "https://webflow.com",

      description:
        "Webflow is a visual website development platform designed for creating highly customizable websites.",

      pros: [
        "Advanced design control",
        "Professional website tools",
        "Strong visual development system",
        "Excellent creative flexibility",
      ],

      cons: [
        "Steeper learning curve",
        "Not primarily focused on ecommerce",
      ],
    },

    winner: "Shopify",

    features: [
      {
        name: "Overall Rating",
        a: `${shopify?.rating || 0}/10`,
        b: "9.0/10",
      },
      {
        name: "Ecommerce",
        a: "Excellent",
        b: "Limited",
      },
      {
        name: "Design Flexibility",
        a: "Very Good",
        b: "Excellent",
      },
      {
        name: "Beginners",
        a: "Excellent",
        b: "Good",
      },
      {
        name: "Business Growth",
        a: "Excellent",
        b: "Very Good",
      },
    ],
  },
];

export default comparisons;