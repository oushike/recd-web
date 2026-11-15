import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

// Add new public routes here as they're built.
const routes = ["", "/privacy", "/terms/creators", "/terms/businesses", "/data-deletion"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));
}
