import type { Metadata } from 'next'
import CategoryLayout from '@/components/sections/CategoryLayout'
import { projectArticles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Project Articles — GemuCube Solutions',
  description: 'Behind-the-scenes project logs from real GemuCube engagements — including what didn\'t work, what we changed, and what the numbers looked like.',
}

export default function Page() {
  return (
    <CategoryLayout
      label="Project Articles"
      description="Behind-the-scenes logs from real engagements."
      longDescription="Honest project logs — including what didn't work on the first attempt and what we changed. Written from live deployments at NXTGEN Industries, MEDVA/Deel PH, SAP Philippines, and GemuCube client engagements."
      articles={projectArticles}
      categorySlug="project-articles"
    />
  )
}
