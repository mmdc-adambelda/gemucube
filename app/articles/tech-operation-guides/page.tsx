import type { Metadata } from 'next'
import CategoryLayout from '@/components/sections/CategoryLayout'
import { techOpGuides } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Tech Operation Guides — GemuCube Solutions',
  description: 'Hands-on technical guides drawn from real enterprise deployments — Microsoft 365, Azure, JIRA, Zapier, VoIP, WordPress, and more.',
}

export default function Page() {
  return (
    <CategoryLayout
      label="Tech Operation Guides"
      description="Hands-on technical guides from real enterprise deployments."
      longDescription="Configuration guides, comparison articles, and deployment walkthroughs — all written from direct hands-on experience across Microsoft 365, Azure, JIRA, ServiceNow, Zendesk, Zapier, WordPress, and enterprise VoIP systems."
      articles={techOpGuides}
      categorySlug="tech-operation-guides"
    />
  )
}
