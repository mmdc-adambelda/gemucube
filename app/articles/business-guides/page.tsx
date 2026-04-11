import type { Metadata } from 'next'
import CategoryLayout from '@/components/sections/CategoryLayout'
import { businessGuides } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Business Guides — GemuCube Solutions',
  description: 'Practical, experience-grounded guides for founders and business operators — written from inside real enterprise and SMB environments by Adam Belda and Renz Belda.',
}

export default function Page() {
  return (
    <CategoryLayout
      label="Business Guides"
      description="Practical guides for founders and business operators."
      longDescription="Written from inside real enterprise and SMB environments — not theoretical advice. Every guide traces back to a specific engagement where Adam or Renz applied these methods in a live business context."
      articles={businessGuides}
      categorySlug="business-guides"
    />
  )
}
