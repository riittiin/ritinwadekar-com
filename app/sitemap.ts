import type { MetadataRoute } from "next";
import { PROJECTS, SITE } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    ...PROJECTS.map((p) => ({
      url: `${SITE.url}/projects/${p.id}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
  ];
}
