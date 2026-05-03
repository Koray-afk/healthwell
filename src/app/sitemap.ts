import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { articles } from "@/lib/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const routes = [
    "",
    "/about",
    "/features",
    "/pricing",
    "/articles",
    "/contact",
    "/privacy-policy",
    "/cookie-policy",
    "/licensing",
  ];
  return [
    ...routes.map((r) => ({
      url: `${base}${r}`,
      lastModified: new Date(),
    })),
    ...articles.map((a) => ({
      url: `${base}/articles/${a.slug}`,
      lastModified: new Date(),
    })),
  ];
}
