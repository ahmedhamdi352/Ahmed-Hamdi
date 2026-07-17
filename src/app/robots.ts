import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { siteConfig } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl() ?? new URL(siteConfig.url);

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", siteUrl).toString(),
  };
}
