import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Package, RefreshCw, Crown, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partnership Models — Project, Retainer & Fractional Leadership',
  description: 'Three engagement models for every business stage — project-based, retainer, and fractional IT leadership. GemuCube Solutions, Philippines.',
}

const models = [
  {
    id: 'project',
    icon: Package,
    badge: 'Project-Based',
    headline: 'A defined need. A fixed outcome. Direct founder involvement.',
    bestFor: 'Businesses with a specific system, platform, or transformation to execute — where the scope is clear and the deliverable is concrete.',
    includes: [
      'Scoped deliverables with written acceptance criteria',
      'Fixed timeline with 2-week SPRINT delivery cycles',
      'Direct engagement with Adam and/or Renz throughout',
      'Handover documentation for every system built',
      'Post-launch support window included',
    ],
    examples: [
      'Build and launch a Zoho CRM with automated pipeline and follow-up workflows',
      'Design and deploy an ISO & HIPAA-compliant staff onboarding system',
      'WordPress website redesign with full SEO configuration and GA4 setup',
      'IT environment setup — Microsoft 365 tenant, Conditional Access, password management',
    ],
    pricing: 'Fixed-scope pricing quoted per project after a scoping call',
    cta: 'Start a Project Conversation',
  },
  {
    id: 'retainer',
    icon: RefreshCw,
    badge: 'Retainer-Based',
    headline: 'Consistent, dedicated capacity as you grow.',
    bestFor: 'Businesses in active growth that need ongoing system development, IT support, and strategic access without hiring a full-time team.',
    includes: [
      'Monthly dedicated hours — scoped to your growth stage',
      'Ongoing CRM development and workflow automation',
      'Managed IT helpdesk and support operations',
      'Monthly strategy review — what we built, what\'s next',
      'Priority response on all support requests',
    ],
    examples: [
      'Ongoing IT operations management for a distributed team',
      'Continuous CRM development and sales automation',
      'Managed helpdesk operations — ticketing, resolution, SLA reporting',
      'Monthly SEO execution and GA4 performance review',
    ],
    pricing: 'Monthly retainer — custom-scoped per client after discovery call',
    cta: 'Explore a Retainer Partnership',
    featured: true,
  },
  {
    id: 'fractional',
    icon: Crown,
    badge: 'Fractional Leadership',
    headline: 'Senior leadership inside your business — without the full-time cost.',
    bestFor: 'Businesses that need a Fractional CTO or IT Operations Director embedded in their operations — making technology decisions and leading the IT function.',
    includes: [
      'Fractional CTO or IT Operations Director embedded in your business',
      'Technology roadmap ownership and quarterly updates',
      'IT team leadership, vendor management, procurement oversight',
      'Stakeholder reporting in business language — not technical jargon',
      'Escalation availability for critical incidents',
    ],
    examples: [
      'Full technology stack audit and rationalization',
      'ISO & HIPAA compliance architecture and documentation',
      '12-month technology roadmap for investor or board reporting',
      'IT team hiring, training, and operations structure',
    ],
    pricing: 'Monthly engagement — minimum 3-month commitment',
    cta: 'Discuss Fractional Leadership',
    note: 'Adam served as IT Operations Director at NXTGEN Industries Melbourne (2022–2024) and IT Client Success Manager at MEDVA/Deel PH (2024–2026). This is not a new model — it is exactly how Adam has operated for the past 4 years.',
  },
]

const comparison = [
  { label: 'Engagement length', project: 'Weeks to months (scoped)', retainer: 'Ongoing monthly', fractional: '3-month minimum' },
  { label: 'Deliverables', project: 'Fixed scope, defined outcomes', retainer: 'Continuous development + support', fractional: 'Leadership + systems + docs' },
  { label: 'Founder access', project: 'Adam and/or Renz throughout', retainer: 'Regular + priority support', fractional: 'Adam embedded as director' },
  { label: 'Best for', project: 'One-time builds & transformations', retainer: 'Growing businesses needing consistent IT', fractional: 'Businesses needing senior IT leadership' },
  { label: 'Pricing structure', project: 'Fixed-scope per project', retainer: 'Monthly retainer', fractional: 'Monthly engagement fee' },
]

export default function PartnershipPage() {
  return (
    <div className="relative pt-[72px]">

      {/* ── HERO ── */}
      <section className="section-pad relative overflow-hidden grid-bg noise">
        <div className="glow-orb w-[500px] h-[400px] bg-[#FFDB49] opacity-[0.05] top-0 right-0" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p className="eyebrow mb-6">How We Engage</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 max-w-4xl">
            Every partnership starts with<br />
            understanding <span className="text-gradient">where you are</span><br />
            — and where you need to go.
          </h1>
          <p className="text-white/55 text-xl max-w-2xl leading-relaxed">
            GemuCube offers three engagement models designed for different stages of business growth. Choose the one that fits, or let us figure it out together.
          </p>
        </div>
      </section>

      {/* ── MODELS ── */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {models.map((m) => {
              const Icon = m.icon
              return (
                <div
                  key={m.id}
                  className={`glass-card rounded-xl overflow-hidden flex flex-col relative ${m.featured ? 'border-[rgba(255,219,73,0.2)] shadow-yellow-glow' : ''}`}
                >
                  {m.featured && (
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFDB49] via-[#FFDB49]/60 to-transparent" />
                  )}
                  {m.featured && (
                    <div className="bg-[rgba(255,219,73,0.08)] border-b border-[rgba(255,219,73,0.12)] px-6 py-2 text-center">
                      <p className="text-[#FFDB49] text-xs font-mono font-semibold tracking-widest uppercase">Most Popular</p>
                    </div>
                  )}

                  <div className="p-8 flex flex-col flex-1">
                    {/* Icon + badge */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-sm bg-[rgba(255,219,73,0.08)] border border-[rgba(255,219,73,0.15)] flex items-center justify-center">
                        <Icon size={18} className="text-[#FFDB49]" />
                      </div>
                      <span className="chip">{m.badge}</span>
                    </div>

                    <h2 className="font-display text-2xl text-white mb-4 leading-tight">{m.headline}</h2>
                    <p className="text-white/45 text-sm leading-relaxed mb-6 pb-6 border-b border-white/[0.06]">
                      <span className="text-white/25 text-xs font-mono uppercase tracking-wider">Best for: </span>
                      {m.bestFor}
                    </p>

                    {/* Includes */}
                    <div className="mb-6">
                      <p className="eyebrow text-[10px] mb-4">What's included</p>
                      <ul className="space-y-3">
                        {m.includes.map((inc) => (
                          <li key={inc} className="flex items-start gap-3">
                            <Check size={13} className="text-[#FFDB49] mt-0.5 shrink-0" />
                            <span className="text-white/55 text-sm">{inc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Examples */}
                    <div className="mb-6">
                      <p className="eyebrow text-[10px] mb-4">Example engagements</p>
                      <ul className="space-y-2">
                        {m.examples.map((ex) => (
                          <li key={ex} className="text-white/35 text-xs leading-relaxed pl-3 border-l border-white/10">
                            {ex}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {m.note && (
                      <div className="glass-card rounded-lg p-4 mb-6 border-[rgba(255,219,73,0.1)]">
                        <p className="text-[#FFDB49] text-xs leading-relaxed opacity-80">{m.note}</p>
                      </div>
                    )}

                    <div className="mt-auto">
                      <p className="text-white/25 text-xs font-mono mb-4">{m.pricing}</p>
                      <Link href="/contact" className={`flex items-center justify-center gap-2 py-3 px-5 rounded-sm text-sm font-semibold transition-all group ${m.featured ? 'btn-primary' : 'btn-ghost'}`}>
                        {m.cta} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section className="section-pad bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow mb-4">Side by Side</p>
          <h2 className="font-display text-4xl text-white mb-12">Compare the three models.</h2>

          <div className="glass-card rounded-xl overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-4 border-b border-white/[0.08] bg-[rgba(255,219,73,0.04)]">
              <div className="p-5 text-white/30 text-xs font-mono uppercase tracking-wider" />
              {['Project-Based', 'Retainer-Based', 'Fractional Leadership'].map((h) => (
                <div key={h} className="p-5 border-l border-white/[0.06]">
                  <p className="text-[#FFDB49] text-sm font-semibold">{h}</p>
                </div>
              ))}
            </div>
            {comparison.map((row, i) => (
              <div key={row.label} className={`grid grid-cols-4 border-b border-white/[0.04] ${i % 2 === 0 ? '' : 'bg-white/[0.01]'}`}>
                <div className="p-5">
                  <p className="text-white/40 text-xs font-mono">{row.label}</p>
                </div>
                {[row.project, row.retainer, row.fractional].map((val, vi) => (
                  <div key={vi} className="p-5 border-l border-white/[0.04]">
                    <p className="text-white/65 text-sm">{val}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="glow-orb w-[500px] h-[300px] bg-[#FFDB49] opacity-[0.05] top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-6">
            Not sure which model fits?<br />
            <span className="text-gradient">Let's figure it out together.</span>
          </h2>
          <p className="text-white/50 text-lg mb-10">Book a free 30-minute discovery call. We'll tell you exactly which model makes sense for your situation.</p>
          <Link href="/contact" className="btn-primary group text-base py-4 px-8">
            Book a Free Discovery Call
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
