import type { Metadata } from 'next'
import CategoryLayout from '@/components/sections/CategoryLayout'
import { caseStudyArticles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Case Studies — GemuCube Solutions',
  description: 'Real clients, real challenges, real outcomes — case studies drawn from verified work history at MEDVA, NXTGEN Industries, SAP Philippines, Emapta, TaskUs, and Intelegencia.',
}

export default function Page() {
  return (
    <CategoryLayout
      label="Case Studies"
      description="Real clients, real challenges, real outcomes."
      longDescription="No anonymized generics. Every case study traces back to verified work Adam or Renz completed at MEDVA/Deel PH, NXTGEN Industries Melbourne, SAP Philippines, Emapta Philippines, TaskUs, and Intelegencia."
      articles={caseStudyArticles}
      categorySlug="case-studies"
    />
  )
}
