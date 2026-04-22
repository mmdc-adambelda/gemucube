import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Clock, Calendar, Tag } from 'lucide-react'
import { blogs } from '@/lib/content'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = blogs.find((b) => b.slug === params.slug)
  if (!blog) return {}
  return {
    title: blog.metaTitle,
    description: blog.metaDescription,
    keywords: blog.tags,
    openGraph: {
      title: blog.metaTitle,
      description: blog.metaDescription,
      images: [{ url: blog.coverImage, width: 1200, height: 630, alt: blog.coverAlt }],
      type: 'article',
      publishedTime: blog.publishedAt,
    },
  }
}

const categoryColors: Record<string, string> = {
  'Payroll Systems': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Portal Development': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Business Operations & Automation': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Digital Marketing': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
}

export default function BlogPage({ params }: Props) {
  const blog = blogs.find((b) => b.slug === params.slug)
  if (!blog) notFound()

  const related = blogs.filter((b) => b.slug !== blog.slug).slice(0, 3)

  return (
    <div className="relative pt-[72px]">

      {/* ── COVER IMAGE ── */}
      <div className="relative h-[50vh] min-h-[320px] overflow-hidden">
        <Image
          src={blog.coverImage}
          alt={blog.coverAlt}
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-[#080808]/10" />
        <div className="absolute top-6 left-6">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-[#FFDB49] transition-colors bg-[rgba(0,0,0,0.4)] backdrop-blur-sm px-3 py-1.5 rounded-sm">
            <ArrowLeft size={13} /> All Articles
          </Link>
        </div>
      </div>

      {/* ── ARTICLE HEADER ── */}
      <section className="pt-10 pb-0">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`text-xs px-3 py-1 rounded border font-semibold ${categoryColors[blog.category] || 'bg-white/5 text-white/50 border-white/10'}`}>
              {blog.category}
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl text-white leading-[1.08] mb-6">{blog.title}</h1>
          <p className="text-white/60 text-xl leading-relaxed mb-8">{blog.excerpt}</p>

          {/* Author + Meta */}
          <div className="flex flex-wrap items-center gap-6 py-5 border-y border-white/[0.06] mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[rgba(255,219,73,0.08)] border border-[rgba(255,219,73,0.12)] flex items-center justify-center font-display text-sm text-[#FFDB49]">
                {blog.author.split(' ').map((n) => n[0]).slice(0, 2).join('')}
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{blog.author}</p>
                <p className="text-white/40 text-xs font-mono">{blog.authorRole}</p>
              </div>
            </div>
            <span className="text-white/30 text-sm flex items-center gap-1.5"><Clock size={13} /> {blog.readTime} min read</span>
            <span className="text-white/30 text-sm flex items-center gap-1.5">
              <Calendar size={13} />
              {new Date(blog.publishedAt).toLocaleDateString('en-PH', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <section className="pb-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="space-y-12">
            {blog.sections.map((section, i) => (
              <div key={i}>
                <h2 className="font-display text-2xl sm:text-3xl text-white mb-5 leading-tight">
                  {section.heading}
                </h2>
                <p className="text-white/65 leading-relaxed text-lg">{section.body}</p>

                {/* Mid-article image for long articles */}
                {i === 1 && (
                  <div className="mt-8 relative h-56 rounded-xl overflow-hidden border border-white/[0.06]">
                    <Image src={blog.coverImage} alt={blog.coverAlt} fill className="object-cover opacity-60" unoptimized />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TAGS ── */}
      <section className="pb-10">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-xs px-3 py-1 bg-white/[0.03] border border-white/[0.06] rounded-full text-white/40">
                <Tag size={10} /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── AUTHOR BOX ── */}
      <section className="py-10 border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="glass-card rounded-xl p-8 border-[rgba(255,219,73,0.08)]">
            <p className="eyebrow text-[10px] mb-5">About the Author</p>
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-lg bg-[rgba(255,219,73,0.08)] border border-[rgba(255,219,73,0.12)] flex items-center justify-center font-display text-xl text-[#FFDB49] shrink-0">
                {blog.author.split(' ').map((n) => n[0]).slice(0, 2).join('')}
              </div>
              <div>
                <p className="text-white font-semibold mb-0.5">{blog.author}</p>
                <p className="text-white/40 text-xs font-mono mb-3">{blog.authorRole} &middot; GemuCube Solutions</p>
                <p className="text-white/50 text-sm leading-relaxed mb-4">
                  {blog.author.includes('Adam')
                    ? "Certified Project Manager and Scrum Master with 13+ years of IT experience across SAP Philippines, Emapta, NXTGEN Industries Melbourne, and MEDVA/Deel PH. Lean Six Sigma Black Belt. Top Tech Writer in the Philippines."
                    : "IT Support professional with enterprise ITSM experience at NXTGEN Industries, TaskUs, and Intelegencia. PMP certified. Specialist in Microsoft 365, Azure AD, and AI data operations."}
                </p>
                <Link href="/about" className="text-[#FFDB49] text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  View full profile <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="eyebrow mb-4">Ready to implement this?</p>
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">
            {blog.cta}
          </h2>
          <p className="text-white/45 text-base mb-8 leading-relaxed max-w-xl mx-auto">
            Schedule a discovery call and we will tell you exactly what we would build for your specific situation — no generic proposals, no pitch decks.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary group">
              Start a Partnership <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/blogs" className="btn-ghost">Read More Articles</Link>
          </div>
        </div>
      </section>

      {/* ── RELATED POSTS ── */}
      {related.length > 0 && (
        <section className="section-pad border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-3xl text-white mb-10">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((b) => (
                <Link key={b.slug} href={`/blogs/${b.slug}`} className="glass-card rounded-xl overflow-hidden group hover:border-[rgba(255,219,73,0.15)] transition-all">
                  <div className="relative h-40 overflow-hidden">
                    <Image src={b.coverImage} alt={b.coverAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/80 to-transparent" />
                  </div>
                  <div className="p-5">
                    <span className={`text-[10px] px-2 py-0.5 rounded border font-semibold mb-3 inline-block ${categoryColors[b.category] || ''}`}>{b.category}</span>
                    <h3 className="font-display text-lg text-white group-hover:text-[#FFDB49] transition-colors leading-tight mb-2">{b.title}</h3>
                    <p className="text-white/30 text-xs flex items-center gap-1.5"><Clock size={10} /> {b.readTime} min read</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
