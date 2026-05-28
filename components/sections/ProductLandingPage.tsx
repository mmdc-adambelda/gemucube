'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowRight, ArrowLeft } from 'lucide-react'

export interface Feature {
  icon: string
  title: string
  description: string
}

export interface UseCase {
  industry: string
  description: string
}

export interface Benefit {
  metric: string
  label: string
  detail: string
}

export interface ProductLandingPageProps {
  name: string
  tagline: string
  description: string
  icon: string
  accentColor: string
  badge: string
  heroHeadline: string
  heroHeadlineAccent: string
  overview: string
  features: Feature[]
  useCases: UseCase[]
  benefits: Benefit[]
  whyGemucube: string[]
}

export default function ProductLandingPage({
  name,
  tagline,
  description,
  icon,
  accentColor,
  badge,
  heroHeadline,
  heroHeadlineAccent,
  overview,
  features,
  useCases,
  benefits,
  whyGemucube,
}: ProductLandingPageProps) {
  const [activeFeature, setActiveFeature] = useState(0)

  return (
    <div className="relative pt-[72px]">

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-20 overflow-hidden grid-bg noise">
        <div
          className="glow-orb w-[600px] h-[500px] opacity-[0.06] -top-20 -right-40"
          style={{ background: accentColor }}
        />
        <div
          className="glow-orb w-[300px] h-[300px] opacity-[0.04] bottom-0 -left-20"
          style={{ background: accentColor }}
        />

        <div className="max-w-7xl mx-auto px-6 relative">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10">
            <Link
              href="/products"
              className="flex items-center gap-1.5 text-white/40 text-xs font-mono hover:text-[#FFDB49] transition-colors uppercase tracking-widest"
            >
              <ArrowLeft size={12} /> Products
            </Link>
            <span className="text-white/20 text-xs">/</span>
            <span className="text-white/40 text-xs font-mono uppercase tracking-widest">{name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px]" style={{ background: accentColor }} />
                <span className="chip" style={{ background: `${accentColor}18`, color: accentColor, borderColor: `${accentColor}40` }}>
                  {badge}
                </span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6 text-white">
                {heroHeadline}<br />
                <span className="text-gradient">{heroHeadlineAccent}</span>
              </h1>

              <p className="text-white/55 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
                {description}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact?intent=demo" className="btn-primary group">
                  Request Demo
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="/contact?intent=consultation" className="btn-ghost">
                  Schedule Consultation
                </Link>
              </div>
            </div>

            {/* Hero visual placeholder */}
            <div
              className="relative rounded-lg border aspect-[4/3] flex items-center justify-center overflow-hidden"
              style={{ borderColor: `${accentColor}25`, background: `${accentColor}06` }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg" style={{ borderColor: accentColor }} />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 rounded-tr-lg" style={{ borderColor: accentColor }} />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 rounded-bl-lg" style={{ borderColor: accentColor }} />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-lg" style={{ borderColor: accentColor }} />
              <div className="text-center relative">
                <div className="text-8xl mb-5">{icon}</div>
                <p className="eyebrow text-[10px]">{name}</p>
                <p className="text-white/20 text-xs font-mono mt-1">Dashboard Preview · Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className="section-pad bg-[#0e0e0e]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="eyebrow mb-6">Product Overview</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-8 leading-tight">
            What {name} does<br />
            <span className="text-white/40">for your business</span>
          </h2>
          <p className="text-white/55 text-lg leading-relaxed">{overview}</p>
        </div>
      </section>

      {/* ── KEY FEATURES ── */}
      <section className="section-pad relative overflow-hidden">
        <div
          className="glow-orb w-[400px] h-[400px] opacity-[0.04] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ background: accentColor }}
        />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p className="eyebrow mb-4">Key Features</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-16 max-w-2xl">
            Everything your team needs.<br />
            <span className="text-white/40">Nothing they don&apos;t.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div
                key={i}
                className="glass-card rounded-lg p-6 cursor-pointer relative overflow-hidden"
                style={activeFeature === i ? {
                  borderColor: `${accentColor}40`,
                  background: `${accentColor}08`,
                } : {}}
                onClick={() => setActiveFeature(i)}
              >
                {activeFeature === i && (
                  <div className="pillar-bar rounded-l-lg opacity-70" style={{ background: `linear-gradient(180deg, ${accentColor} 0%, transparent 100%)` }} />
                )}
                <div className="flex items-start gap-4 pl-4">
                  <div
                    className="w-10 h-10 rounded-sm flex items-center justify-center text-xl shrink-0"
                    style={{
                      background: `${accentColor}15`,
                      border: `1px solid ${accentColor}30`,
                    }}
                  >
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-white mb-2">{f.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{f.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SCREENSHOTS / MOCKUP PLACEHOLDERS ── */}
      <section className="section-pad bg-[#0a0a0a] grid-bg">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow mb-4">Platform Preview</p>
          <h2 className="font-display text-4xl text-white mb-12">A look inside {name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {['Main Dashboard', 'Reports & Analytics', 'Management Panel'].map((label, i) => (
              <div
                key={i}
                className="rounded-lg border aspect-video flex items-center justify-center relative overflow-hidden"
                style={{ borderColor: `${accentColor}20`, background: `${accentColor}05` }}
              >
                <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: accentColor, opacity: 0.3 }} />
                <div className="text-center">
                  <p className="eyebrow text-[10px] mb-1">{label}</p>
                  <p className="text-white/20 text-[10px] font-mono">Screenshot · Coming Soon</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES / USE CASES ── */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow mb-4">Industries & Use Cases</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-16">
            Built for these businesses.<br />
            <span className="text-white/40">Ready for yours.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((uc, i) => (
              <div key={i} className="glass-card rounded-lg p-6 relative overflow-hidden group">
                <div
                  className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, ${accentColor}, transparent)` }}
                />
                <h3 className="font-display text-lg text-white mb-3 flex items-center gap-2">
                  <span style={{ color: accentColor }}>▸</span>
                  {uc.industry}
                </h3>
                <p className="text-white/45 text-sm leading-relaxed">{uc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS / ROI ── */}
      <section className="section-pad bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow mb-4">Benefits & ROI</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-16">
            The business impact<br />
            <span className="text-white/40">you will actually feel.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <div key={i} className="glass-card rounded-lg p-8 text-center relative overflow-hidden group">
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{ background: accentColor }}
                />
                <p className="font-display text-5xl sm:text-6xl mb-3" style={{ color: accentColor }}>
                  {b.metric}
                </p>
                <p className="font-display text-xl text-white mb-3">{b.label}</p>
                <p className="text-white/40 text-sm leading-relaxed">{b.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY GEMUCUBE ── */}
      <section className="section-pad">
        <div className="max-w-4xl mx-auto px-6">
          <p className="eyebrow mb-4">Why GemuCube</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-16">
            Why choose us<br />
            <span className="text-white/40">to build this for you.</span>
          </h2>
          <div className="space-y-4">
            {whyGemucube.map((item, i) => (
              <div key={i} className="glass-card rounded-lg p-6 flex items-start gap-5">
                <div
                  className="w-8 h-8 rounded-sm flex items-center justify-center text-sm font-bold font-mono shrink-0 mt-0.5 text-black"
                  style={{ background: accentColor }}
                >
                  {i + 1}
                </div>
                <p className="text-white/60 text-sm leading-relaxed pt-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOMIZATION ── */}
      <section className="section-pad bg-[#0a0a0a] grid-bg">
        <div className="max-w-4xl mx-auto px-6">
          <div
            className="glass-card rounded-lg p-10 sm:p-14 text-center relative overflow-hidden"
            style={{ borderColor: `${accentColor}25` }}
          >
            <div
              className="glow-orb w-64 h-64 opacity-[0.07] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ background: accentColor }}
            />
            <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: accentColor, opacity: 0.4 }} />
            <div className="relative">
              <p className="text-4xl mb-6">🛠</p>
              <p className="eyebrow mb-4">Built For You</p>
              <h2 className="font-display text-3xl sm:text-4xl text-white mb-5">
                Your business. Your rules.<br />
                <span className="text-white/40">Our build.</span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed max-w-xl mx-auto mb-3">
                We can customize {name} based on your industry, operational workflows, compliance
                requirements, and existing tools. You don&apos;t adapt to our software — the software adapts to you.
              </p>
              <p className="text-white/30 text-sm mb-10 font-mono">
                Scope: branding · workflows · integrations · reporting · user roles · language localization
              </p>
              <Link href="/contact" className="btn-primary group" style={{ background: accentColor, color: '#000' }}>
                Discuss Customization
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="section-pad relative overflow-hidden">
        <div
          className="glow-orb w-[600px] h-[300px] opacity-[0.05] top-0 left-1/2 -translate-x-1/2"
          style={{ background: accentColor }}
        />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <p className="eyebrow mb-6">Get Started</p>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            Ready to deploy<br />
            <span className="text-gradient">{name}?</span>
          </h2>
          <p className="text-white/50 text-lg mb-12 leading-relaxed">
            Talk directly to Adam or Renz. No account managers, no generic proposals — just an honest
            conversation about your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?intent=demo" className="btn-primary group text-base py-4 px-8">
              Request Demo
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact?intent=consultation" className="btn-ghost">
              Schedule Consultation
            </Link>
            <Link href="/contact?intent=contact" className="btn-ghost">
              Contact Us
            </Link>
          </div>
          <p className="text-white/25 text-xs mt-8 font-mono">You will hear directly from Adam or Renz within 24 hours.</p>
        </div>
      </section>
    </div>
  )
}
