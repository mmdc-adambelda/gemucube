import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Clock, User, Briefcase, BookOpen } from 'lucide-react'
import { allArticles } from '@/lib/articles'

interface Props {
  params: { category: string; slug: string }
}

export async function generateStaticParams() {
  return allArticles.map(a => ({ category: a.categorySlug, slug: a.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = allArticles.find(a => a.categorySlug === params.category && a.slug === params.slug)
  if (!article) return {}
  return {
    title: article.title,
    description: article.excerpt,
    keywords: [article.keyword],
  }
}

export default function ArticlePage({ params }: Props) {
  const article = allArticles.find(a => a.categorySlug === params.category && a.slug === params.slug)
  if (!article) notFound()

  const categoryArticles = allArticles.filter(a => a.categorySlug === params.category && a.slug !== params.slug)
  const related = categoryArticles.slice(0, 3)

  return (
    <div className="relative pt-[72px]">
      {/* ── HEADER ── */}
      <section className="pt-16 pb-12 relative overflow-hidden border-b border-white/[0.06]">
        <div className="glow-orb w-[400px] h-[300px] bg-[#FFDB49] opacity-[0.04] -top-10 right-0" />
        <div className="max-w-4xl mx-auto px-6 relative">
          <Link
            href={`/articles/${article.categorySlug}`}
            className="inline-flex items-center gap-2 text-white/40 text-sm hover:text-[#FFDB49] transition-colors mb-8"
          >
            <ArrowLeft size={14} /> {article.category}
          </Link>

          <span className="chip text-[10px] mb-6 inline-block">{article.category}</span>

          <h1 className="font-display text-4xl sm:text-5xl text-white leading-[1.08] mb-8">
            {article.title}
          </h1>

          <p className="text-white/55 text-xl leading-relaxed mb-8">{article.excerpt}</p>

          {/* Author + meta bar */}
          <div className="flex flex-wrap items-center gap-6 py-5 border-t border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[rgba(255,219,73,0.08)] border border-[rgba(255,219,73,0.12)] flex items-center justify-center font-display text-sm text-[#FFDB49]">
                {article.author.includes('Adam') && article.author.includes('Renz') ? 'A+R' : article.author.split(' ').map(n => n[0]).slice(0, 2).join('')}
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{article.author}</p>
                <p className="text-white/40 text-xs font-mono">{article.authorRole}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-white/30 text-sm">
              <Clock size={13} />
              <span>{article.readTime} min read</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/30 text-sm">
              <BookOpen size={13} />
              <span>{article.wordCount} words</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE BASIS CALLOUT ── */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="glass-card rounded-xl p-5 border-[rgba(255,219,73,0.1)] flex items-start gap-4">
          <Briefcase size={16} className="text-[#FFDB49] mt-0.5 shrink-0" />
          <div>
            <p className="text-[#FFDB49] text-xs font-mono font-semibold mb-1 uppercase tracking-wider">Experience Basis</p>
            <p className="text-white/55 text-sm leading-relaxed">{article.experienceBasis}</p>
          </div>
        </div>
      </div>

      {/* ── ARTICLE BODY (coming soon placeholder) ── */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="prose-gemucube space-y-8">

          {/* Placeholder content block — replace with full article content or CMS-driven content */}
          <div className="glass-card rounded-xl p-10 text-center border-dashed border-[rgba(255,219,73,0.15)]">
            <BookOpen size={32} className="text-[#FFDB49] mx-auto mb-4 opacity-40" />
            <p className="text-white/50 text-lg font-display mb-3">Full article content goes here.</p>
            <p className="text-white/30 text-sm leading-relaxed max-w-md mx-auto">
              This article is part of GemuCube's 40-article editorial plan. Connect a CMS (Contentful, Sanity, or Markdown files in <code className="text-[#FFDB49]/70 font-mono text-xs">/content/articles/</code>) to populate this section with full article body content.
            </p>
          </div>

          {/* ── AUTHOR BOX ── */}
          <div className="glass-card rounded-xl p-8 border-[rgba(255,219,73,0.1)]">
            <p className="eyebrow text-[10px] mb-5">About the Author</p>
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-lg bg-[rgba(255,219,73,0.08)] border border-[rgba(255,219,73,0.12)] flex items-center justify-center font-display text-xl text-[#FFDB49] shrink-0">
                {article.author.includes('Adam') && article.author.includes('Renz') ? 'A+R' : article.author.split(' ').map(n => n[0]).slice(0, 2).join('')}
              </div>
              <div>
                <p className="text-white font-semibold mb-0.5">{article.author}</p>
                <p className="text-white/40 text-xs font-mono mb-3">{article.authorRole} · GemuCube Solutions</p>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {article.author.includes('Adam')
                    ? 'Certified Project Manager and Scrum Master with 13+ years of IT experience. Deep expertise in software architecture, enterprise IT operations, CRM systems, ISO/HIPAA compliance, and digital infrastructure.'
                    : 'IT Support professional with hands-on experience in enterprise ITSM platforms, quality analysis, AI data annotation, and remote technical support across NXTGEN Industries, TaskUs, and Intelegencia.'}
                </p>
                <Link href="/about" className="text-[#FFDB49] text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  View full profile <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="glass-card rounded-xl p-8 text-center border-[rgba(255,219,73,0.12)] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFDB49] via-[#FFDB49]/50 to-transparent" />
            <p className="eyebrow text-[10px] mb-4">Ready to implement this?</p>
            <h3 className="font-display text-2xl text-white mb-3">
              The guides are free.<br />The implementation is where we come in.
            </h3>
            <p className="text-white/45 text-sm mb-6 leading-relaxed">
              Schedule a discovery call and we'll map exactly what we'd build for your specific situation.
            </p>
            <Link href="/contact" className="btn-primary group">
              Start a Partnership <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── RELATED ARTICLES ── */}
      {related.length > 0 && (
        <section className="section-pad bg-[#0a0a0a] border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6">
            <p className="eyebrow mb-4">More in {article.category}</p>
            <h2 className="font-display text-3xl text-white mb-10">Continue reading.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map(a => (
                <Link
                  key={a.slug}
                  href={`/articles/${a.categorySlug}/${a.slug}`}
                  className="glass-card rounded-xl p-6 group hover:border-[rgba(255,219,73,0.15)] transition-all"
                >
                  <span className="chip text-[10px] mb-4 inline-block">{a.category}</span>
                  <h3 className="font-display text-lg text-white group-hover:text-[#FFDB49] transition-colors leading-tight mb-3">
                    {a.title}
                  </h3>
                  <p className="text-white/40 text-xs flex items-center gap-2">
                    <Clock size={10} /> {a.readTime} min read
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
