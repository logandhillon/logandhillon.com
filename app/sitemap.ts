import type { MetadataRoute } from 'next'

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://logandhillon.com',
      lastModified: new Date(),
    },
    {
      url: 'https://logandhillon.com/projects/',
      lastModified: new Date(),
    },
    {
      url: 'https://logandhillon.com/type-of-war/',
      lastModified: new Date(),
    },
    {
      url: 'https://logandhillon.com/frc-checkmate/',
      lastModified: new Date(),
    },
  ]
}