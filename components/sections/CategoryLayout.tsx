import Link from 'next/link'
import { ArrowRight, Clock, User, ArrowLeft } from 'lucide-react'
import type { Article } from '@/lib/articles'

interface CategoryPageProps {
  label: string
  description: string
  longDescription: string
  articles: Article[]
  categorySlug: string
}

function ArticleRow({ article }: { article: Article }) {
  return (
    <Link
      href={`/articles/${article.categorySlug}/${article.slug}`}
      className="glass-card rounded-xl p-6 group flex flex-col sm:flex-row gap-6 hover:border-[rgba(255,219,73,0.15)] transition-all"
    >
      <div className="flex-1 min-w-0">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <span className="chip text-[10px]">{article.category}</span>
          <span className="text-white/25 text-xs font-mono flex items-center gap-1">
            <Clock size={10} /> {article.readTime} min
          </span>
          <span className="text-white/20 text-xs font-mono hidden sm:block">·</span>
          <span className="text-white/25 text-xs font-mono hidden sm:block">{article.wordCount} words</span>
        </div>

        <h3 className="font-display text-xl text-white group-hover:text-[#FFDB49] transition-colors leading-tight mb-3">
          {article.title}
        </h3>
        <p className="text-white/45 text-sm leading-relaxed mb-4">{article.excerpt}</p>

        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full bg-[rgba(255,219,73,0.1)] flex items-center justify-center">
            <User size={10} className="text-[#FFDB49]" />
          </div>
          <p className="text-white/50 text-xs font-semibold">{article.author}</p>
          <span className="text-white/20 text-xs">·</span>
          <p className="text-white/30 text-xs italic">{article.experienceBasis}</p>
        </div>
      </div>

      <div className="flex items-center self-start sm:self-center shrink-0">
        <div className="w-9 h-9 rounded-sm bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover:bg-[rgba(255,219,73,0.1)] group-hover:border-[rgba(255,219,73,0.2)] transition-all">
          <ArrowRight size={15} className="text-white/30 group-hover:text-[#FFDB49] transition-colors" />
        </div>
      </div>
    </Link>
  )
}

export default function CategoryLayout({ label, description, longDescription, articles, categorySlug }: CategoryPageProps) {
  return (
    <div className="relative pt-[72px]">
      {/* ── HERO ── */}
      <section className="section-pad relative overflow-hidden grid-bg noise">
        <div className="glow-orb w-[400px] h-[400px] bg-[#FFDB49] opacity-[0.04] -top-20 right-0" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <Link href="/articles" className="inline-flex items-center gap-2 text-white/40 text-sm hover:text-[#FFDB49] transition-colors mb-8">
            <ArrowLeft size={14} /> All Articles
          </Link>
          <p className="eyebrow mb-4">{label}</p>
          <h1 className="font-display text-5xl sm:text-6xl text-white leading-[1.05] mb-6 max-w-3xl">
            {description}
          </h1>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed mb-4">{longDescription}</p>
          <p className="text-white/30 text-sm font-mono">{articles.length} articles published</p>
        </div>
      </section>

      {/* ── ARTICLE LIST ── */}
      <section className="section-pad">
        <div className="max-w-5xl mx-auto px-6 space-y-5">
          {articles.map((a, i) => (
            <div key={a.slug} className="relative">
              <span className="absolute -left-8 top-6 font-mono text-[11px] text-white/15 hidden lg:block">
                {String(i + 1).padStart(2, '0')}
              </span>
              <ArticleRow article={a} />
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl text-white mb-4">
            Ready to implement any of this?
          </h2>
          <p className="text-white/45 text-base mb-8">The guides are free. The implementation is where we come in.</p>
          <Link href="/contact" className="btn-primary group">
            Start a Partnership <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
