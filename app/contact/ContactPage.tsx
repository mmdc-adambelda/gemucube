'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, Linkedin, MapPin, ArrowRight, CheckCircle, Clock, Send } from 'lucide-react'

const models = ['Project-Based Engagement', 'Retainer-Based Scaling', 'Fractional Leadership', 'Not Sure Yet']
const sources = ['LinkedIn', 'Google Search', 'Referral', 'Social Media', 'Other']

type FormState = {
  name: string
  email: string
  company: string
  website: string
  message: string
  model: string
  source: string
}

const empty: FormState = { name: '', email: '', company: '', website: '', message: '', model: '', source: '' }

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(empty)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const set = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Replace with your Zapier webhook or form endpoint
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <div className="relative pt-[72px]">

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-16 overflow-hidden grid-bg noise">
        <div className="glow-orb w-[500px] h-[400px] bg-[#FFDB49] opacity-[0.05] -top-20 right-0" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p className="eyebrow mb-6">Start a Partnership</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6 max-w-4xl">
            No pitch decks.<br />
            No generic proposals.<br />
            <span className="text-gradient">Just a real conversation.</span>
          </h1>
          <p className="text-white/55 text-xl max-w-xl leading-relaxed">
            Tell us where you are and where you want to go. We'll tell you exactly how we'd build it.
          </p>
        </div>
      </section>

      {/* ── MAIN GRID ── */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* ── FORM ── */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="glass-card rounded-xl p-12 text-center border-[rgba(255,219,73,0.15)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFDB49] via-[#FFDB49]/60 to-transparent" />
                  <div className="glow-orb w-48 h-48 bg-[#FFDB49] opacity-[0.08] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  <CheckCircle size={48} className="text-[#FFDB49] mx-auto mb-6 relative" />
                  <h2 className="font-display text-3xl text-white mb-4 relative">We've received your inquiry.</h2>
                  <p className="text-white/55 text-lg mb-6 relative leading-relaxed">
                    You'll hear directly from Adam or Renz within 24 hours — not an assistant, not a coordinator.
                  </p>
                  <p className="text-white/30 text-sm mb-8 relative">In the meantime, explore how we work.</p>
                  <Link href="/solutions" className="btn-ghost">
                    View Our Solutions <ArrowRight size={15} />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card rounded-xl overflow-hidden">
                  <div className="px-8 pt-8 pb-6 border-b border-white/[0.06]">
                    <h2 className="font-display text-2xl text-white mb-1">Send Your Inquiry</h2>
                    <p className="text-white/40 text-sm">All fields marked * are required.</p>
                  </div>

                  <div className="p-8 space-y-5">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-white/50 text-xs font-mono mb-2 uppercase tracking-wider">
                          Your Name *
                        </label>
                        <input
                          required
                          type="text"
                          value={form.name}
                          onChange={set('name')}
                          placeholder="Juan dela Cruz"
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-sm px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[rgba(255,219,73,0.4)] focus:bg-white/[0.06] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-white/50 text-xs font-mono mb-2 uppercase tracking-wider">
                          Email Address *
                        </label>
                        <input
                          required
                          type="email"
                          value={form.email}
                          onChange={set('email')}
                          placeholder="you@company.com"
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-sm px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[rgba(255,219,73,0.4)] focus:bg-white/[0.06] transition-all"
                        />
                      </div>
                    </div>

                    {/* Company + Website */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-white/50 text-xs font-mono mb-2 uppercase tracking-wider">
                          Company / Organization *
                        </label>
                        <input
                          required
                          type="text"
                          value={form.company}
                          onChange={set('company')}
                          placeholder="Acme Corp"
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-sm px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[rgba(255,219,73,0.4)] focus:bg-white/[0.06] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-white/50 text-xs font-mono mb-2 uppercase tracking-wider">
                          Website URL <span className="text-white/20">(optional)</span>
                        </label>
                        <input
                          type="url"
                          value={form.website}
                          onChange={set('website')}
                          placeholder="https://yourcompany.com"
                          className="w-full bg-white/[0.04] border border-white/[0.08] rounded-sm px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[rgba(255,219,73,0.4)] focus:bg-white/[0.06] transition-all"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-white/50 text-xs font-mono mb-2 uppercase tracking-wider">
                        What do you need to build or solve? *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={set('message')}
                        placeholder="Describe your situation — what's broken, what you're trying to build, or what stage your business is at. The more specific, the more useful our response."
                        className="w-full bg-white/[0.04] border border-white/[0.08] rounded-sm px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-[rgba(255,219,73,0.4)] focus:bg-white/[0.06] transition-all resize-none"
                      />
                    </div>

                    {/* Model + Source */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-white/50 text-xs font-mono mb-2 uppercase tracking-wider">
                          Partnership Model *
                        </label>
                        <select
                          required
                          value={form.model}
                          onChange={set('model')}
                          className="w-full bg-[#111] border border-white/[0.08] rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[rgba(255,219,73,0.4)] transition-all appearance-none"
                        >
                          <option value="" disabled>Select a model...</option>
                          {models.map(m => <option key={m} value={m}>{m}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-white/50 text-xs font-mono mb-2 uppercase tracking-wider">
                          How did you find us? <span className="text-white/20">(optional)</span>
                        </label>
                        <select
                          value={form.source}
                          onChange={set('source')}
                          className="w-full bg-[#111] border border-white/[0.08] rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[rgba(255,219,73,0.4)] transition-all appearance-none"
                        >
                          <option value="">Select source...</option>
                          {sources.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full justify-center py-4 text-base group disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send My Inquiry
                          <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <p className="text-white/25 text-xs text-center">
                      Your information is kept confidential and never shared with third parties.
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* ── SIDEBAR ── */}
            <div className="lg:col-span-2 space-y-6">

              {/* Response commitment */}
              <div className="glass-card rounded-xl p-6 border-[rgba(255,219,73,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#FFDB49] to-transparent" />
                <div className="flex items-start gap-4">
                  <Clock size={18} className="text-[#FFDB49] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-2">24-hour response commitment</p>
                    <p className="text-white/45 text-sm leading-relaxed">
                      We respond to every inquiry within 24 hours. You will hear directly from Adam or Renz — not an assistant, not a coordinator.
                    </p>
                  </div>
                </div>
              </div>

              {/* Adam */}
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-lg bg-[rgba(255,219,73,0.08)] border border-[rgba(255,219,73,0.12)] flex items-center justify-center font-display text-lg text-[#FFDB49]">
                    AR
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Adam Raymond Belda</p>
                    <p className="text-white/40 text-xs font-mono">IT Operations Director / Co-Founder</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <a href="mailto:argbelda@gmail.com" className="flex items-center gap-3 text-white/50 text-sm hover:text-[#FFDB49] transition-colors group">
                    <Mail size={14} className="shrink-0" />
                    <span>argbelda@gmail.com</span>
                  </a>
                  <a href="tel:+639478954125" className="flex items-center gap-3 text-white/50 text-sm hover:text-[#FFDB49] transition-colors">
                    <Phone size={14} className="shrink-0" />
                    <span>+63 947 895 4125</span>
                  </a>
                  <a href="https://linkedin.com/in/adambelda" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/50 text-sm hover:text-[#FFDB49] transition-colors">
                    <Linkedin size={14} className="shrink-0" />
                    <span>linkedin.com/in/adambelda</span>
                  </a>
                </div>
              </div>

              {/* Renz */}
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-lg bg-[rgba(255,219,73,0.08)] border border-[rgba(255,219,73,0.12)] flex items-center justify-center font-display text-lg text-[#FFDB49]">
                    RG
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Renz Gutierrez Belda</p>
                    <p className="text-white/40 text-xs font-mono">IT Support Specialist / Co-Founder</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <a href="mailto:rgutierrezbelda@gmail.com" className="flex items-center gap-3 text-white/50 text-sm hover:text-[#FFDB49] transition-colors">
                    <Mail size={14} className="shrink-0" />
                    <span>rgutierrezbelda@gmail.com</span>
                  </a>
                  <a href="tel:+639605489073" className="flex items-center gap-3 text-white/50 text-sm hover:text-[#FFDB49] transition-colors">
                    <Phone size={14} className="shrink-0" />
                    <span>+63 960 5489 073</span>
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#FFDB49] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white text-sm font-semibold mb-1">Office Location</p>
                    <p className="text-white/45 text-sm">General Trias City</p>
                    <p className="text-white/45 text-sm">Cavite 4107, Philippines</p>
                  </div>
                </div>
              </div>

              {/* What happens next */}
              <div className="glass-card rounded-xl p-6">
                <p className="eyebrow text-[10px] mb-5">What happens after you submit</p>
                <ol className="space-y-4">
                  {[
                    { n: '1', t: 'We read your inquiry in full', b: 'Not skimmed — read. We want to understand your situation before we respond.' },
                    { n: '2', t: 'We respond within 24 hours', b: 'Directly from Adam or Renz. Sometimes sooner.' },
                    { n: '3', t: 'We schedule a discovery call', b: 'A direct 30-minute conversation about your business, systems, and what needs to be built.' },
                  ].map(step => (
                    <li key={step.n} className="flex items-start gap-4">
                      <span className="w-6 h-6 rounded-full bg-[rgba(255,219,73,0.1)] border border-[rgba(255,219,73,0.2)] flex items-center justify-center text-[#FFDB49] text-xs font-mono font-semibold shrink-0 mt-0.5">
                        {step.n}
                      </span>
                      <div>
                        <p className="text-white text-sm font-semibold mb-0.5">{step.t}</p>
                        <p className="text-white/40 text-xs leading-relaxed">{step.b}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
