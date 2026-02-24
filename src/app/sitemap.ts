import { MetadataRoute } from "next";
import { siteConfig } from "@/config/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://arihant-website-356i.vercel.app";

  // Collect all hrefs from navigation
  const links = siteConfig.flatMap(group =>
    group.children?.map(item => item.href) ?? []
  );

  // Remove duplicates (VERY IMPORTANT)
  const uniqueLinks = Array.from(new Set(links));

  // Add homepage + map routes
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...uniqueLinks.map(path => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
    })),
  ];
}