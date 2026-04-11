import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Clock, User } from 'lucide-react'
import { allArticles, categories, businessGuides, techOpGuides, caseStudyArticles, projectArticles } from '@/lib/articles'

export const metadata: Metadata = {
  title: 'Articles — Business & IT Guides from GemuCube Solutions',
  description: '40 articles across Business Guides, Tech Operation Guides, Case Studies, and Project Logs — all written from verified enterprise and SMB experience by Adam Belda and Renz Belda.',
}

const featured = [
  allArticles.find(a => a.slug === 'hipaa-client-onboarding-system')!,
  allArticles.find(a => a.slug === 'it-incident-management-not-whatsapp')!,
  allArticles.find(a => a.slug === 'fractional-cto-startup-article')!,
]

const categoryArticles = [
  { ...categories[0], articles: businessGuides.slice(0, 3) },
  { ...categories[1], articles: techOpGuides.slice(0, 3) },
  { ...categories[2], articles: caseStudyArticles.slice(0, 3) },
  { ...categories[3], articles: projectArticles.slice(0, 3) },
]

function ArticleCard({ article, featured = false }: { article: typeof allArticles[0]; featured?: boolean }) {
  return (
    <Link
      href={`/articles/${article.categorySlug}/${article.slug}`}
      className={`glass-card rounded-xl overflow-hidden group flex flex-col h-full ${featured ? 'border-[rgba(255,219,73,0.12)]' : ''}`}
    >
      {/* Top accent */}
      <div className="h-[2px] bg-gradient-to-r from-[#FFDB49] via-[#FFDB49]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="p-6 flex flex-col flex-1">
        {/* Category badge */}
        <span className="chip text-[10px] self-start mb-4">{article.category}</span>

        <h3 className={`font-display text-white leading-tight mb-3 group-hover:text-[#FFDB49] transition-colors ${featured ? 'text-xl' : 'text-lg'}`}>
          {article.title}
        </h3>

        <p className="text-white/45 text-sm leading-relaxed flex-1 mb-5">{article.excerpt}</p>

        <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[rgba(255,219,73,0.1)] flex items-center justify-center">
              <User size={10} className="text-[#FFDB49]" />
            </div>
            <div>
              <p className="text-white/60 text-[11px] font-semibold leading-none">
                {article.author.includes('Adam') && article.author.includes('Renz') ? 'Adam & Renz' : article.author.split(' ').slice(0, 2).join(' ')}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-white/30 text-xs">
            <Clock size={11} />
            <span>{article.readTime} min read</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function ArticlesPage() {
  return (
    <div className="relative pt-[72px]">

      {/* ── HERO ── */}
      <section className="section-pad relative overflow-hidden grid-bg noise">
        <div className="glow-orb w-[500px] h-[400px] bg-[#FFDB49] opacity-[0.04] -top-20 left-1/3" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p className="eyebrow mb-6">Editorial Hub</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 max-w-4xl">
            40 articles.<br />
            <span className="text-gradient">Zero theoretical advice.</span>
          </h1>
          <p className="text-white/55 text-xl max-w-2xl leading-relaxed mb-12">
            Every article is written from inside a real engagement — drawn from verified work Adam and Renz have completed across SAP Philippines, NXTGEN Industries, MEDVA/Deel PH, Emapta, TaskUs, and Intelegencia.
          </p>

          {/* Category cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/articles/${c.slug}`}
                className="glass-card rounded-lg p-5 group hover:border-[rgba(255,219,73,0.2)] transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[#FFDB49] text-2xl font-bold opacity-60">{c.count}</span>
                  <ArrowRight size={14} className="text-white/20 group-hover:text-[#FFDB49] transition-colors" />
                </div>
                <p className="text-white text-sm font-semibold mb-1">{c.label}</p>
                <p className="text-white/35 text-xs leading-relaxed hidden sm:block">{c.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED ── */}
      <section className="section-pad bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="eyebrow mb-2">Featured</p>
              <h2 className="font-display text-3xl text-white">Start here.</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featured.map(a => <ArticleCard key={a.slug} article={a} featured />)}
          </div>
        </div>
      </section>

      {/* ── BY CATEGORY ── */}
      {categoryArticles.map((cat, ci) => (
        <section key={cat.slug} className={`section-pad ${ci % 2 === 0 ? 'bg-[#080808]' : 'bg-[#0a0a0a]'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="eyebrow mb-2">{cat.label}</p>
                <h2 className="font-display text-3xl text-white">{cat.description}</h2>
              </div>
              <Link
                href={`/articles/${cat.slug}`}
                className="hidden sm:flex items-center gap-2 text-[#FFDB49] text-sm font-semibold hover:gap-3 transition-all shrink-0"
              >
                All {cat.count} articles <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {cat.articles.map(a => <ArticleCard key={a.slug} article={a} />)}
            </div>

            <Link
              href={`/articles/${cat.slug}`}
              className="sm:hidden flex items-center gap-2 text-[#FFDB49] text-sm font-semibold"
            >
              View all {cat.count} {cat.label} <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      ))}

      {/* ── CTA ── */}
      <section className="py-24 bg-[#0e0e0e] border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <BookOpen size={32} className="text-[#FFDB49] mx-auto mb-6 opacity-60" />
          <h2 className="font-display text-4xl text-white mb-4">
            Ready to go beyond articles?
          </h2>
          <p className="text-white/50 text-lg mb-10">
            The guides are free. The implementation is where we come in.
          </p>
          <Link href="/contact" className="btn-primary group text-base py-4 px-8">
            Start a Partnership <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
