export const siteConfig = {
  name: "HealthWell",
  brand: "HealthWell®",
  tagline: "Improve Your Health with HealthWell®",
  description:
    "HealthWell is a comprehensive healthcare app that empowers individuals to take control of their health and well-being.",
  url: "https://healthwell.example.com",
  ogImage: "/og.png",
  links: {
    twitter: "https://twitter.com/healthwell",
    instagram: "https://instagram.com/healthwell",
    linkedin: "https://linkedin.com/company/healthwell",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Articles", href: "/articles" },
    { label: "Contact", href: "/contact" },
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
