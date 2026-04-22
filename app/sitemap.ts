import { MetadataRoute } from 'next'
import { allArticles } from '@/lib/articles'
import { projects, blogs } from '@/lib/content'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://home.gemucubesolutions.com'

  const staticPages = [
    { url: base, priority: 1.0, changeFrequency: 'weekly' as const },
    { url: `${base}/about`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/solutions`, priority: 0.9, changeFrequency: 'monthly' as const },
    { url: `${base}/partnership`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/case-studies`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/projects`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/blogs`, priority: 0.9, changeFrequency: 'weekly' as const },
    { url: `${base}/contact`, priority: 0.8, changeFrequency: 'monthly' as const },
    { url: `${base}/articles`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${base}/articles/business-guides`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${base}/articles/tech-operation-guides`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${base}/articles/case-studies`, priority: 0.7, changeFrequency: 'weekly' as const },
    { url: `${base}/articles/project-articles`, priority: 0.7, changeFrequency: 'weekly' as const },
  ]

  const articlePages = allArticles.map(a => ({
    url: `${base}/articles/${a.categorySlug}/${a.slug}`,
    priority: 0.6,
    changeFrequency: 'monthly' as const,
  }))

  const projectPages = projects.map(p => ({
    url: `${base}/projects/${p.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }))

  const blogPages = blogs.map(b => ({
    url: `${base}/blogs/${b.slug}`,
    priority: 0.8,
    changeFrequency: 'monthly' as const,
  }))

  return [...staticPages, ...articlePages, ...projectPages, ...blogPages]
}
