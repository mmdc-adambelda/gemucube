import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, Calendar, Tag, TrendingUp } from 'lucide-react'
import { projects } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Projects — Real IT Solutions Delivered | GemuCube Solutions Philippines',
  description: 'Browse GemuCube Solutions project portfolio — payroll systems, employee portals, CRM automation, HIPAA-compliant infrastructure, and digital marketing systems built for Philippine and international businesses.',
  keywords: [
    'IT projects Philippines',
    'payroll system development Philippines',
    'portal development Philippines',
    'CRM implementation case study',
    'business automation Philippines',
    'IT solutions portfolio Philippines',
  ],
  openGraph: {
    title: 'Projects — GemuCube Solutions',
    description: 'Real IT solutions delivered — payroll systems, portals, automation, and digital marketing infrastructure.',
    type: 'website',
  },
}

const categoryColors: Record<string, string> = {
  'Payroll System Development': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Portal Development': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Business Operations & Automation': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Digital Marketing': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
}

const categories = ['All', 'Payroll System Development', 'Portal Development', 'Business Operations & Automation', 'Digital Marketing']

export default function ProjectsPage() {
  return (
    <div className="relative pt-[72px]">

      {/* ── HERO ── */}
      <section className="section-pad relative overflow-hidden grid-bg noise">
        <div className="glow-orb w-[500px] h-[400px] bg-[#FFDB49] opacity-[0.05] -top-20 right-0" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p className="eyebrow mb-6">Project Portfolio</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 max-w-4xl">
            Real solutions.<br />
            <span className="text-gradient">Documented results.</span>
          </h1>
          <p className="text-white/55 text-xl max-w-2xl leading-relaxed mb-10">
            Every project below is drawn from verified work — payroll systems, employee portals, CRM automation, compliance infrastructure, and digital marketing systems built for real businesses.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            {[
              { value: '10+', label: 'Projects Documented' },
              { value: '5', label: 'Solution Categories' },
              { value: 'PHP 48K+', label: 'Monthly Savings Delivered' },
              { value: '0', label: 'Compliance Audit Failures' },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl text-[#FFDB49] mb-1">{s.value}</p>
                <p className="text-white/40 text-xs font-mono">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECT ── */}
      <section className="pb-0 pt-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow mb-6">Featured Project</p>
          <Link
            href={`/projects/${projects[0].slug}`}
            className="glass-card rounded-xl overflow-hidden group grid grid-cols-1 lg:grid-cols-2 hover:border-[rgba(255,219,73,0.2)] transition-all"
          >
            {/* Image */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <Image
                src={projects[0].coverImage}
                alt={projects[0].coverAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#080808]/60 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 to-transparent lg:hidden" />
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className={`text-xs px-2 py-0.5 rounded border font-semibold ${categoryColors[projects[0].category]}`}>
                    {projects[0].category}
                  </span>
                  <span className="chip text-[10px]">{projects[0].engagement}</span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl text-white mb-4 leading-tight group-hover:text-[#FFDB49] transition-colors">
                  {projects[0].title}
                </h2>
                <p className="text-white/55 leading-relaxed mb-6">{projects[0].excerpt}</p>

                {/* Key result */}
                <div className="glass-card rounded-lg p-4 border-[rgba(255,219,73,0.1)] mb-6">
                  <div className="flex items-start gap-3">
                    <TrendingUp size={16} className="text-[#FFDB49] mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[#FFDB49] text-xs font-mono uppercase tracking-wider mb-1">Key Result</p>
                      <p className="text-white text-sm font-semibold">{projects[0].results[0].value}</p>
                      <p className="text-white/40 text-xs">{projects[0].results[0].metric}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-white/30 text-xs font-mono">
                  <span className="flex items-center gap-1.5"><Clock size={11} /> {projects[0].readTime} min read</span>
                  <span className="flex items-center gap-1.5"><Calendar size={11} /> {new Date(projects[0].publishedAt).toLocaleDateString('en-PH', { month: 'short', year: 'numeric' })}</span>
                </div>
                <span className="flex items-center gap-2 text-[#FFDB49] text-sm font-semibold group-hover:gap-3 transition-all">
                  Read case study <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── ALL PROJECTS GRID ── */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="font-display text-3xl text-white">All Projects</h2>
            <p className="text-white/30 text-sm font-mono">{projects.length} projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(1).map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="glass-card rounded-xl overflow-hidden group flex flex-col hover:border-[rgba(255,219,73,0.15)] transition-all"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.coverImage}
                    alt={project.coverAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/80 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className={`text-[10px] px-2 py-0.5 rounded border font-semibold ${categoryColors[project.category] || 'bg-white/5 text-white/40 border-white/10'}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl text-white mb-3 leading-tight group-hover:text-[#FFDB49] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed flex-1 mb-5">
                    {project.excerpt.slice(0, 120)}...
                  </p>

                  {/* Top result */}
                  <div className="bg-[rgba(255,219,73,0.04)] border border-[rgba(255,219,73,0.08)] rounded-md p-3 mb-4">
                    <p className="text-[#FFDB49] text-xs font-mono mb-0.5">{project.results[0].metric}</p>
                    <p className="text-white text-sm font-semibold">{project.results[0].value}</p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                    <span className="text-white/30 text-xs font-mono flex items-center gap-1.5">
                      <Clock size={10} /> {project.readTime} min
                    </span>
                    <span className="flex items-center gap-1.5 text-[#FFDB49] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-6">
            Want results like these<br />
            <span className="text-gradient">for your business?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 leading-relaxed">
            Every project above started with a 30-minute discovery call. No pitch deck. Just a direct conversation about your situation.
          </p>
          <Link href="/contact" className="btn-primary group text-base py-4 px-8">
            Start a Partnership
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
