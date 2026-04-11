import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, Zap, Globe, Server, Users, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'GemuCube Solutions — Business & IT Partnership Firm Philippines',
  description: 'GemuCube Solutions partners with startups and growing businesses to build systems, automate operations, and scale technology. We don't work for you. We build with you.',
}

const pillars = [
  {
    id: 'A',
    icon: Shield,
    title: 'Business Infrastructure & Scaling',
    body: 'We design the operational backbone your business runs on — from client onboarding to revenue operations, built to ISO and HIPAA standards.',
    href: '/solutions#infrastructure',
  },
  {
    id: 'B',
    icon: Zap,
    title: 'Systems & Automation Engineering',
    body: 'We connect your tools and eliminate the manual work between them — CRM, automation, cloud architecture, and secure environments.',
    href: '/solutions#systems',
  },
  {
    id: 'C',
    icon: Globe,
    title: 'Digital Growth Infrastructure',
    body: 'We build your digital presence to rank, convert, and represent your business — websites, SEO, analytics, and social media systems.',
    href: '/solutions#digital',
  },
  {
    id: 'D',
    icon: Server,
    title: 'Managed IT & Support Operations',
    body: 'We keep your systems running and your team supported — helpdesk, Microsoft 365, Azure, VoIP, and remote technical support.',
    href: '/solutions#managed-it',
  },
  {
    id: 'E',
    icon: Users,
    title: 'Embedded Partnership Model',
    body: 'We embed as your Fractional CTO or IT Director — making decisions, leading teams, and scaling with your business from the inside.',
    href: '/solutions#embedded',
  },
]

const process = [
  { num: '01', title: 'Discovery Call', body: 'We understand your business, systems, and goals — and tell you exactly what we'd build and how.' },
  { num: '02', title: 'Partnership Blueprint', body: 'We map the full architecture of what needs to be built — systems, tools, sequence, and timeline.' },
  { num: '03', title: 'Build & Embed', body: 'We execute as your internal team — directly, not through hand-offs or account managers.' },
  { num: '04', title: 'Scale & Operate', body: 'We grow with you. As your business scales, the systems we built scale with it.' },
]

const differentiators = [
  {
    title: 'Enterprise + Startup Fluency',
    body: 'Adam's career spans SAP Philippines, Emapta, NXTGEN Industries Melbourne, and MEDVA/Deel PH. Renz's spans NXTGEN, Intelegencia, and TaskUs. We understand enterprise systems and startup urgency equally.',
  },
  {
    title: 'Full-Stack Capabilities',
    body: 'Business operations, systems engineering, digital growth, managed IT, and embedded leadership — across one partnership. No fragmented vendors.',
  },
  {
    title: 'Direct Senior Access',
    body: 'Every engagement involves Adam and/or Renz directly. No account managers. No junior consultants on discovery calls. The people with enterprise credentials do the work.',
  },
  {
    title: 'Embedded, Not Outsourced',
    body: 'GemuCube does not hand off and disappear. We are present in operations, aligned to your goals, and accountable to your outcomes.',
  },
]

const clients = [
  'NXTGEN Industries', 'MEDVA / Deel PH', 'SAP Philippines', 'Emapta Philippines', 'TaskUs', 'Intelegencia',
]

const stats = [
  { value: '13+', label: 'Years Combined Experience' },
  { value: '5', label: 'Enterprise Platforms Deployed' },
  { value: 'ISO & HIPAA', label: 'Compliant Systems Built' },
  { value: '7', label: 'Websites Built & Ranked' },
]

export default function HomePage() {
  return (
    <div className="relative">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden grid-bg noise">
        {/* Glow orbs */}
        <div className="glow-orb w-[600px] h-[600px] bg-[#FFDB49] opacity-[0.06] -top-40 -left-40 animate-glow-pulse" />
        <div className="glow-orb w-[400px] h-[400px] bg-[#FFDB49] opacity-[0.04] bottom-0 right-0 animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

        {/* GEMU quad graphic — top right */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:grid grid-cols-2 gap-2 opacity-[0.07] animate-float select-none pointer-events-none" aria-hidden>
          {['G','E','M','U'].map((l, i) => (
            <div
              key={l}
              className={`w-28 h-28 flex items-center justify-center text-5xl font-display font-bold ${
                i % 2 === 0 ? 'bg-[#FFDB49] text-black' : 'bg-white/10 text-white'
              } rounded-sm`}
            >
              {l}
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 py-28">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8 animate-enter animate-fade-up">
            <div className="w-8 h-[1px] bg-[#FFDB49]" />
            <p className="eyebrow">Business & IT Partnership Firm · Philippines</p>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] mb-8 max-w-5xl animate-enter animate-fade-up stagger-1">
            We Don't Work
            <br />
            <span className="text-gradient">For You.</span>
            <br />
            We Build With You.
          </h1>

          {/* Sub */}
          <p className="text-white/60 text-lg sm:text-xl max-w-2xl leading-relaxed mb-12 animate-enter animate-fade-up stagger-2">
            GemuCube Solutions partners with startups and scaling businesses to design, build, and operate their systems, operations, and technology — as a genuine extension of their team.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-enter animate-fade-up stagger-3">
            <Link href="/contact" className="btn-primary group">
              Start a Partnership
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/solutions" className="btn-ghost">
              See Our Solutions
            </Link>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 pt-12 border-t border-white/[0.06] animate-enter animate-fade-up stagger-4">
            {stats.map((s) => (
              <div key={s.value}>
                <p className="font-display text-2xl sm:text-3xl text-[#FFDB49] mb-1">{s.value}</p>
                <p className="text-white/40 text-xs font-mono">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE BUILD WITH ── */}
      <section className="section-pad bg-[#0e0e0e] relative">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow mb-4">Who We Work With</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-4">
            Built for businesses ready to grow —<br />
            <span className="text-white/40">not just buy a service.</span>
          </h2>
          <p className="text-white/50 text-lg mb-16 max-w-2xl">
            Three types of businesses engage GemuCube. If you're in one of these categories, we already know what you need.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                tag: 'Startups',
                title: 'Building From Zero',
                body: 'You're building your operational foundation — systems, processes, and infrastructure. You need a technical partner who has done this inside enterprise environments and can apply that knowledge at your speed.',
              },
              {
                tag: 'Growing SMBs',
                title: 'Scaling Operations',
                body: 'Your team is growing and your manual processes are breaking. You need systems that scale with you, not against you — and a team that can build and operate them without you managing the details.',
              },
              {
                tag: 'Enterprises',
                title: 'Modernizing Systems',
                body: 'You have legacy infrastructure and a mandate to modernize without disrupting operations. You need someone who has been inside enterprise systems at SAP, Emapta, and NXTGEN level — not someone learning on your budget.',
              },
            ].map((c) => (
              <div key={c.tag} className="glass-card rounded-lg p-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FFDB49] via-[#FFDB49]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="chip mb-5 inline-block">{c.tag}</span>
                <h3 className="font-display text-2xl text-white mb-4">{c.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{c.body}</p>
                <Link href="/contact" className="text-[#FFDB49] text-sm font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  This is you <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIVE PILLARS ── */}
      <section className="section-pad relative overflow-hidden" id="pillars">
        <div className="glow-orb w-[500px] h-[500px] bg-[#FFDB49] opacity-[0.04] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p className="eyebrow mb-4">What We Build</p>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <h2 className="font-display text-4xl sm:text-5xl text-white max-w-xl">
              Five disciplines.<br />
              <span className="text-gradient">One embedded partner.</span>
            </h2>
            <Link href="/solutions" className="btn-ghost self-start lg:self-auto shrink-0">
              View all solutions <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillars.map((p) => {
              const Icon = p.icon
              return (
                <Link
                  key={p.id}
                  href={p.href}
                  className="glass-card rounded-lg p-6 relative overflow-hidden group block"
                >
                  <div className="pillar-bar rounded-l-lg opacity-40 group-hover:opacity-100 transition-opacity" />
                  <div className="pl-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-9 h-9 rounded-sm bg-[rgba(255,219,73,0.08)] border border-[rgba(255,219,73,0.12)] flex items-center justify-center">
                        <Icon size={16} className="text-[#FFDB49]" />
                      </div>
                      <span className="font-mono text-[11px] text-[#FFDB49] opacity-60">Pillar {p.id}</span>
                    </div>
                    <h3 className="font-display text-xl text-white mb-3 leading-tight">{p.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{p.body}</p>
                    <div className="flex items-center gap-2 mt-5 text-[#FFDB49] text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              )
            })}
            {/* Wide CTA tile */}
            <Link href="/partnership" className="glass-card rounded-lg p-6 border-[rgba(255,219,73,0.12)] md:col-span-2 lg:col-span-1 flex flex-col justify-between group">
              <div>
                <p className="eyebrow mb-3">Not sure where to start?</p>
                <h3 className="font-display text-2xl text-white mb-3">See how we engage</h3>
                <p className="text-white/45 text-sm">Three engagement models — Project, Retainer, or Fractional Leadership. Choose what fits your stage.</p>
              </div>
              <div className="flex items-center gap-2 mt-6 text-[#FFDB49] text-sm font-semibold group-hover:gap-3 transition-all">
                View partnership models <ArrowRight size={14} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="section-pad bg-[#0a0a0a] grid-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow mb-4">How We Work</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-16">
            How a real partnership begins.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div key={step.num} className="relative">
                {/* Connector line */}
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-[1px] bg-gradient-to-r from-[rgba(255,219,73,0.3)] to-transparent" style={{ width: 'calc(100% - 2rem)', left: '2rem' }} />
                )}
                <p className="font-display text-5xl text-[#FFDB49] mb-4 opacity-80">{step.num}</p>
                <h3 className="font-display text-xl text-white mb-3">{step.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFFERENTIATORS ── */}
      <section className="section-pad relative">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow mb-4">Why GemuCube</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-16 max-w-2xl">
            What makes us different from every other firm.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {differentiators.map((d) => (
              <div key={d.title} className="glass-card rounded-lg p-8 group">
                <div className="flex items-start gap-4">
                  <CheckCircle size={20} className="text-[#FFDB49] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-display text-xl text-white mb-3">{d.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{d.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="py-16 border-y border-white/[0.06] bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-white/30 text-xs font-mono tracking-widest uppercase mb-10">
            Work history includes
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-5">
            {clients.map((c) => (
              <span key={c} className="text-white/25 font-semibold text-sm hover:text-white/50 transition-colors cursor-default">
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="section-pad relative overflow-hidden">
        <div className="glow-orb w-[600px] h-[300px] bg-[#FFDB49] opacity-[0.06] top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <p className="eyebrow mb-6">Ready?</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
            Ready to build<br />
            <span className="text-gradient">something real?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 leading-relaxed">
            Let's start with a conversation. No pitch decks. No generic proposals. Just a direct talk about your business.
          </p>
          <Link href="/contact" className="btn-primary group text-base py-4 px-8">
            Schedule a Discovery Call
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="text-white/25 text-xs mt-6 font-mono">
            You'll hear directly from Adam or Renz within 24 hours.
          </p>
        </div>
      </section>
    </div>
  )
}
