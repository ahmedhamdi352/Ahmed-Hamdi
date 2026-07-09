import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const paths = [
    "/",
    "/work",
    ...projects.map((project) => `/work/${project.slug}`),
    "/about",
    "/stack",
    "/contact",
  ];

  return paths.map((path) => ({
    url: siteUrl ? new URL(path, siteUrl).toString() : path,
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : path === "/work" ? 0.9 : 0.7,
  }));
}
