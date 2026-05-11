export const siteConfig = {
  name: "Wizzaid",
  brand: "Wizzaid®",
  tagline: "Improve Your Health with Wizzaid®",
  description:
    "Wizzaid is a comprehensive healthcare app that empowers individuals to take control of their health and well-being.",
  url: "https://wizzaid.example.com",
  ogImage: "/og.png",
  links: {
    twitter: "https://twitter.com/wizzaid",
    instagram: "https://instagram.com/wizzaid",
    linkedin: "https://linkedin.com/company/wizzaid",
  },
  nav: [
    { label: "Platform", href: "/platform", hasDropdown: true },
    { label: "About", href: "/about", hasDropdown: true },
    { label: "Resources", href: "/resources", hasDropdown: true },
    { label: "Contact", href: "/contact", hasDropdown: false },
    { label: "Features", href: "/features", hasDropdown: false },
  ],
  footer: {
    menu: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" },
    ],
    useful: [
      { label: "Articles", href: "/articles" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Licensing", href: "/licensing" },
    ],
  },
} as const;

export type SiteConfig = typeof siteConfig;
