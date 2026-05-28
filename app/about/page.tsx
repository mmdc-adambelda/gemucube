import type { Metadata } from 'next'
import FallbackImage from '@/components/ui/FallbackImage'
import Link from 'next/link'
import { Mail, Phone, Linkedin, ArrowRight, CheckCircle, Users, Globe, Cpu, TrendingUp, Package } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About GemuCube Solutions — Our Story, Mission & Values',
  description: 'GemuCube Solutions started in 2023 as an IT & web development firm. Today we build SaaS products, deliver business automation, and partner with companies across the globe. Learn our story, mission, and values.',
}

// ─── TIMELINE ────────────────────────────────────────────────────────────────
const timeline = [
  {
    year: '2023',
    label: 'Founded',
    title: 'Three clients. One big conviction.',
    body: 'GemuCube Solutions was born in General Trias, Cavite with three pioneer clients: NXTGEN Industries, Impero, and a private e-commerce agency. Our early work was clear and direct — IT solutions, web development, and digital marketing. Small team. Serious output. Every project handled personally by Adam and Renz.',
    icon: '🚀',
    stat: '3 pioneer clients',
  },
  {
    year: '2024',
    label: 'Scaling Up',
    title: 'From IT shop to full business solutions.',
    body: 'Client feedback drove us beyond technical delivery. Businesses needed more than a working website or a configured CRM — they needed operational systems that actually scaled. We expanded into business process automation, CRM implementation, managed IT, and embedded operations support. The market validated every move.',
    icon: '⚡',
    stat: 'Full-stack business ops',
  },
  {
    year: '2025',
    label: 'Building Products',
    title: 'Our own software. Built for Philippine businesses.',
    body: 'We began productizing what we had been building custom for clients — payroll systems, EMR platforms, community management tools, booking engines, LMS platforms, and accounting software. Six SaaS products emerged from real operational problems we had already solved. GemuCube stopped being just a services firm.',
    icon: '🛠',
    stat: '6 SaaS products launched',
  },
  {
    year: '2026',
    label: 'Global Partnerships',
    title: 'Partnerships across the globe.',
    body: 'Today GemuCube Solutions operates as a Business & IT Partnership Firm — delivering embedded IT leadership, software products, and operational systems to clients in the Philippines, Australia, and the United States. We are not a vendor. We build with our clients, as part of their team.',
    icon: '🌍',
    stat: 'PH · AU · US',
  },
]

// ─── PILLARS ─────────────────────────────────────────────────────────────────
const pillars = [
  { icon: Globe, label: 'Web Development & Digital Marketing', desc: 'Where we started. Websites that rank, convert, and represent your business with precision.' },
  { icon: Cpu, label: 'IT Solutions & Managed Operations', desc: 'From helpdesk and Azure to VoIP and BYOD — full IT operational support embedded into your team.' },
  { icon: TrendingUp, label: 'Business Infrastructure & Automation', desc: 'CRM, workflow automation, process design, and the operational backbone every scaling business needs.' },
  { icon: Package, label: 'SaaS Products', desc: 'Six purpose-built platforms: payroll, EMR, community management, booking, LMS, and accounting — deployable or customized.' },
  { icon: Users, label: 'Embedded Partnership Model', desc: 'Fractional CTO and IT Director engagements where Adam or Renz works inside your business, not outside it.' },
]

// ─── VALUES ──────────────────────────────────────────────────────────────────
const values = [
  { title: 'Partnership Over Transactions', body: 'We measure success by how well your business scales, not by how many invoices we send. Every system we build is designed to outlast our direct involvement.' },
  { title: 'Expertise Without Layers', body: 'No account managers. No hand-offs. The people who understand your business are the people working on it — directly, on every engagement.' },
  { title: 'Enterprise Quality for Every Stage', body: 'Whether you are a 3-person startup or a 300-seat operation, you deserve systems built to the same standards that enterprises depend on.' },
]


// ─── CLIENTS ─────────────────────────────────────────────────────────────────
const pioneers = ['NXTGEN Industries', 'Impero', 'Private E-Commerce Agency']
const currentClients = ['NXTGEN Industries', 'MEDVA / Deel PH', 'SAP Philippines', 'Emapta Philippines', 'TaskUs', 'Intelegencia']

export default function AboutPage() {
  return (
    <div className="relative pt-[72px]">

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-20 overflow-hidden grid-bg noise">
        <div className="glow-orb w-[700px] h-[500px] bg-[#FFDB49] opacity-[0.05] -top-40 -right-40" />
        <div className="glow-orb w-[400px] h-[400px] bg-[#FFDB49] opacity-[0.03] bottom-0 -left-20" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p className="eyebrow mb-6">About GemuCube Solutions</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl text-white leading-[1.02] mb-8 max-w-5xl">
            We started small.<br />
            We built real.<br />
            <span className="text-gradient">We scaled with purpose.</span>
          </h1>
          <p className="text-white/55 text-xl max-w-2xl leading-relaxed mb-12">
            From three pioneer clients in 2023 to a global Business & IT Partnership Firm — this is the story
            of GemuCube Solutions.
          </p>

          {/* Hero stats strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/[0.06]">
            {[
              { value: '2023', label: 'Year Founded' },
              { value: '3', label: 'Pioneer Clients' },
              { value: '6', label: 'SaaS Products' },
              { value: 'PH · AU · US', label: 'Clients Across' },
            ].map(s => (
              <div key={s.label}>
                <p className="font-display text-2xl sm:text-3xl text-[#FFDB49] mb-1">{s.value}</p>
                <p className="text-white/40 text-xs font-mono">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPANY OVERVIEW VISUAL ── */}
      <section className="section-pad bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-5">Who We Are</p>
              <h2 className="font-display text-4xl sm:text-5xl text-white mb-6 leading-tight">
                A firm that builds<br />
                <span className="text-white/40">from the inside out.</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-5">
                GemuCube Solutions is a Business & IT Partnership Firm based in General Trias, Cavite,
                Philippines. We partner with startups, growing businesses, and enterprises to design, build,
                and operate their technology and operational systems — as a genuine extension of their team.
              </p>
              <p className="text-white/45 leading-relaxed mb-5">
                We are not a vendor. We are not an outsourced agency. We embed directly into your operations —
                solving problems with the same urgency and ownership as if we were on your payroll.
              </p>
              <p className="text-white/45 leading-relaxed">
                From web development and IT managed services to custom SaaS software and embedded fractional
                leadership — GemuCube delivers across the full spectrum of what a growing business needs to
                operate, scale, and compete.
              </p>
            </div>

            {/* Company image placeholder */}
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden border border-white/[0.08] aspect-[4/3] bg-[#111] flex items-center justify-center">
                <FallbackImage
                  src="/assets/about/company-photo.jpg"
                  alt="GemuCube Solutions team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <p className="eyebrow text-[10px] mb-3">Company Photo</p>
                  <p className="text-white/20 text-xs font-mono leading-relaxed">
                    Upload your image to:<br />
                    <span className="text-[#FFDB49]/60">public/assets/about/company-photo.jpg</span>
                  </p>
                </div>
              </div>
              {/* Decorative corner */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-lg bg-[#FFDB49]/10 border border-[#FFDB49]/20 flex items-center justify-center">
                <span className="font-display text-[#FFDB49] text-2xl font-bold">GC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE / ORIGIN STORY ── */}
      <section className="section-pad relative overflow-hidden">
        <div className="glow-orb w-[500px] h-[500px] bg-[#FFDB49] opacity-[0.03] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p className="eyebrow mb-5">Our Story</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-20 max-w-2xl">
            How GemuCube went from<br />
            <span className="text-gradient">three clients to a global firm.</span>
          </h2>

          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={item.year} className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-0 lg:gap-12 relative">
                {/* Vertical line */}
                {i < timeline.length - 1 && (
                  <div className="hidden lg:block absolute left-[82px] top-16 bottom-0 w-px bg-gradient-to-b from-[rgba(255,219,73,0.3)] to-transparent" />
                )}

                {/* Year column */}
                <div className="flex lg:flex-col items-center lg:items-start gap-4 lg:gap-3 mb-6 lg:mb-0 pt-0 lg:pt-2">
                  <div className="w-14 h-14 rounded-lg bg-[rgba(255,219,73,0.08)] border border-[rgba(255,219,73,0.15)] flex items-center justify-center text-2xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-display text-3xl text-[#FFDB49]">{item.year}</p>
                    <p className="text-white/30 text-xs font-mono tracking-widest uppercase">{item.label}</p>
                  </div>
                </div>

                {/* Content column */}
                <div className="glass-card rounded-xl p-8 mb-6 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFDB49]/50 via-[#FFDB49]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                    <h3 className="font-display text-2xl sm:text-3xl text-white leading-tight">{item.title}</h3>
                    <span className="chip shrink-0 self-start">{item.stat}</span>
                  </div>
                  <p className="text-white/55 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PIONEER CLIENTS ── */}
      <section className="py-16 bg-[#0e0e0e] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center eyebrow mb-3">Where It All Started</p>
          <p className="text-center text-white/30 text-sm font-mono mb-10">Our 2023 pioneer clients</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-5">
            {pioneers.map(c => (
              <span key={c} className="text-white/40 font-semibold text-base hover:text-[#FFDB49] transition-colors cursor-default">{c}</span>
            ))}
          </div>
          <div className="divider my-10" />
          <p className="text-center text-white/20 text-xs font-mono mb-8 tracking-widest uppercase">Work history & client engagements include</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {currentClients.map(c => (
              <span key={c} className="text-white/25 font-semibold text-sm hover:text-white/50 transition-colors cursor-default">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow mb-5">What We Do</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-16 max-w-2xl">
            Five disciplines.<br />
            <span className="text-white/40">One embedded partner.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {pillars.map((p, i) => {
              const Icon = p.icon
              return (
                <div key={p.label} className="glass-card rounded-xl p-7 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FFDB49] via-[#FFDB49]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="pillar-bar rounded-l-xl opacity-30 group-hover:opacity-80 transition-opacity" />
                  <div className="pl-4">
                    <div className="w-10 h-10 rounded-sm bg-[rgba(255,219,73,0.08)] border border-[rgba(255,219,73,0.12)] flex items-center justify-center mb-5">
                      <Icon size={18} className="text-[#FFDB49]" />
                    </div>
                    <p className="font-mono text-[10px] text-[#FFDB49]/60 tracking-widest uppercase mb-2">0{i + 1}</p>
                    <h3 className="font-display text-xl text-white mb-3 leading-tight">{p.label}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              )
            })}
            <Link href="/contact" className="glass-card rounded-xl p-7 border-[rgba(255,219,73,0.12)] flex flex-col justify-between group">
              <div>
                <p className="eyebrow text-[10px] mb-3">Not sure which fits?</p>
                <h3 className="font-display text-2xl text-white mb-3">Let us figure it out together.</h3>
                <p className="text-white/40 text-sm">Tell us where you are. We will tell you exactly what you need.</p>
              </div>
              <div className="flex items-center gap-2 mt-6 text-[#FFDB49] text-sm font-semibold group-hover:gap-3 transition-all">
                Start a conversation <ArrowRight size={14} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section-pad bg-[#0a0a0a] grid-bg">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow mb-5">What We Believe</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-16">
            Three beliefs that shape<br />every engagement.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={v.title} className="glass-card rounded-xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFDB49]/60 to-transparent" />
                <p className="font-display text-6xl text-[#FFDB49] opacity-10 absolute top-4 right-6 leading-none select-none">{i + 1}</p>
                <h3 className="font-display text-xl text-white mb-4 relative">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed relative">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-[#0e0e0e] border-t border-white/[0.06] relative overflow-hidden">
        <div className="glow-orb w-[500px] h-[300px] bg-[#FFDB49] opacity-[0.05] top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <p className="eyebrow mb-6">Work With Us</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-6">
            Ready to build something real<br />
            <span className="text-gradient">with a team that actually shows up?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 leading-relaxed">
            Every inquiry goes directly to Adam, Renz, or Villie — not a sales team, not a coordinator.
            You will hear back within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary group text-base py-4 px-8">
              Start a Partnership
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/products" className="btn-ghost">
              View Our Products
            </Link>
            <Link href="/team" className="btn-ghost">
              Meet the Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
