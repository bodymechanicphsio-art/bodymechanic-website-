import type { MetadataRoute } from "next";
import { CLINIC, SERVICES, TECHNIQUES } from "@/lib/constants";
import { SITEMAP_ROUTES } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = SITEMAP_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${CLINIC.domain}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const serviceRoutes = SERVICES.map((service) => ({
    url: `${CLINIC.domain}/services/${service.id}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const techniqueRoutes = TECHNIQUES.map((technique) => ({
    url: `${CLINIC.domain}/techniques/${technique.id}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes, ...techniqueRoutes];
}
