import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { getSiteUrl } from "@/lib/site-url";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl() ?? new URL(siteConfig.url);
  const paths = [
    "/",
    "/work",
    ...projects.map((project) => `/work/${project.slug}`),
    "/about",
    "/stack",
    "/contact",
  ];

  return paths.map((path) => ({
    url: new URL(path, siteUrl).toString(),
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path === "/work" ? 0.9 : 0.7,
  }));
}
