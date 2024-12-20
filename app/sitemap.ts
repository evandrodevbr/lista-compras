import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://resenhaitapoa.com.br',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        }
    ]
}