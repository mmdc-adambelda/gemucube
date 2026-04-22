import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Clock, Calendar, User, TrendingUp, Layers, CheckCircle, Tag } from 'lucide-react'
import { projects } from '@/lib/content'

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return {}
  return {
    title: project.metaTitle,
    description: project.metaDescription,
    keywords: project.tags,
    openGraph: {
      title: project.metaTitle,
      description: project.metaDescription,
      images: [{ url: project.coverImage, width: 1200, height: 630, alt: project.coverAlt }],
      type: 'article',
      publishedTime: project.publishedAt,
    },
  }
}

const categoryColors: Record<string, string> = {
  'Payroll System Development': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Portal Development': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Business Operations & Automation': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Digital Marketing': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const related = projects.filter((p) => p.slug !== project.slug && p.category === project.category).slice(0, 2)
  const otherRelated = projects.filter((p) => p.slug !== project.slug && p.category !== project.category).slice(0, 2)
  const relatedProjects = [...related, ...otherRelated].slice(0, 3)

  return (
    <div className="relative pt-[72px]">

      {/* ── HERO IMAGE ── */}
      <div className="relative h-[45vh] min-h-[300px] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.coverAlt}
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-[#080808]/20" />

        {/* Breadcrumb */}
        <div className="absolute top-6 left-6">
          <Link href="/projects" className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-[#FFDB49] transition-colors bg-[rgba(0,0,0,0.4)] backdrop-blur-sm px-3 py-1.5 rounded-sm">
            <ArrowLeft size={13} /> All Projects
          </Link>
        </div>

        {/* Category badge */}
        <div className="absolute bottom-6 left-6">
          <span className={`text-xs px-3 py-1 rounded border font-semibold ${categoryColors[project.category] || 'bg-white/5 text-white/50 border-white/10'}`}>
            {project.category}
          </span>
        </div>
      </div>

      {/* ── ARTICLE HEADER ── */}
      <section className="pt-10 pb-0">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="font-display text-4xl sm:text-5xl text-white leading-[1.08] mb-6">{project.title}</h1>
          <p className="text-white/60 text-xl leading-relaxed mb-8">{project.excerpt}</p>

          {/* Meta bar */}
          <div className="flex flex-wrap items-center gap-6 py-5 border-y border-white/[0.06] mb-10">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[rgba(255,219,73,0.08)] border border-[rgba(255,219,73,0.12)] flex items-center justify-center font-display text-sm text-[#FFDB49]">
                {project.author.split(' ').map((n) => n[0]).slice(0, 2).join('')}
              </div>
              <div>
                <p className="text-white text-sm font-semibold">{project.author}</p>
                <p className="text-white/40 text-xs font-mono">{project.authorRole}</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-white/30 text-sm"><Clock size={13} />{project.readTime} min read</div>
            <div className="flex items-center gap-1.5 text-white/30 text-sm"><Calendar size={13} />{new Date(project.publishedAt).toLocaleDateString('en-PH', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
          </div>

          {/* Engagement details */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { label: 'Client', value: project.client },
              { label: 'Industry', value: project.industry },
              { label: 'Duration', value: project.duration },
              { label: 'Engagement', value: project.engagement },
            ].map((d) => (
              <div key={d.label} className="glass-card rounded-lg p-4">
                <p className="text-white/30 text-[10px] font-mono uppercase tracking-wider mb-1">{d.label}</p>
                <p className="text-white text-sm font-semibold leading-tight">{d.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY ── */}
      <section className="pb-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-10">
            {project.sections.map((section, i) => (
              <div key={i}>
                <h2 className="font-display text-2xl sm:text-3xl text-white mb-4">{section.heading}</h2>
                <p className="text-white/60 leading-relaxed text-lg">{section.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESULTS ── */}
      <section className="py-16 bg-[#0a0a0a] border-y border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp size={18} className="text-[#FFDB49]" />
            <h2 className="font-display text-3xl text-white">The Results</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.results.map((r) => (
              <div key={r.metric} className="glass-card rounded-xl p-6 border-[rgba(255,219,73,0.08)] relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFDB49]/60 to-transparent" />
                <p className="text-[#FFDB49] text-xs font-mono mb-2 uppercase tracking-wider">{r.metric}</p>
                <p className="font-display text-xl text-white leading-tight">{r.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <Layers size={16} className="text-[#FFDB49]" />
            <h2 className="font-display text-2xl text-white">Technology Stack</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span key={s} className="text-sm px-3 py-1.5 bg-white/[0.04] border border-white/[0.08] rounded text-white/60 hover:text-white/90 hover:border-white/20 transition-colors">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TAGS ── */}
      <section className="pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-xs px-3 py-1 bg-white/[0.03] border border-white/[0.06] rounded-full text-white/40">
                <Tag size={10} /> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="eyebrow mb-4">Start a Similar Project</p>
          <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">
            Ready to build this<br />
            <span className="text-gradient">for your business?</span>
          </h2>
          <p className="text-white/50 mb-8 leading-relaxed">
            Schedule a discovery call and we will map exactly what we would build for your specific situation — no generic proposals.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary group">
              Start a Partnership <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/projects" className="btn-ghost">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* ── RELATED PROJECTS ── */}
      {relatedProjects.length > 0 && (
        <section className="section-pad border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-3xl text-white mb-10">More Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`} className="glass-card rounded-xl overflow-hidden group hover:border-[rgba(255,219,73,0.15)] transition-all">
                  <div className="relative h-40 overflow-hidden">
                    <Image src={p.coverImage} alt={p.coverAlt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" unoptimized />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/80 to-transparent" />
                  </div>
                  <div className="p-5">
                    <span className={`text-[10px] px-2 py-0.5 rounded border font-semibold mb-3 inline-block ${categoryColors[p.category] || ''}`}>{p.category}</span>
                    <h3 className="font-display text-lg text-white group-hover:text-[#FFDB49] transition-colors leading-tight mb-2">{p.title}</h3>
                    <p className="text-white/35 text-xs flex items-center gap-1.5"><Clock size={10} /> {p.readTime} min read</p>
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
