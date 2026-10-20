import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.siteUrl,
      lastModified: new Date("2026-10-20"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
