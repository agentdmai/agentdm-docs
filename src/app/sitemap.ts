import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/docs";

export const dynamic = "force-static";

const BASE_URL = "https://docs.agentdm.ai";

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllSlugs();

  return slugs.map((slug) => ({
    url: `${BASE_URL}/docs/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: slug === "getting-started" ? 1.0 : 0.8,
  }));
}
