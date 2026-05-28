'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Mail, Phone, Linkedin, MapPin, ArrowRight, CheckCircle, Clock, Send } from 'lucide-react'

const PRODUCTS = [
  'PayrollTrack AI — Payroll & Attendance',
  'CliniCore — Electronic Medical Records',
  'NexusLink — Community Management Platform',
  'Reservio — Booking & Reservation System',
  'LearnFlow — Learning Management System',
  'LedgerIQ — Accounting & Ledger',
  'Custom Software Development',
  'Business IT Consulting / Partnership',
  'Other / Not Sure Yet',
]

const INDUSTRIES = [
  'Healthcare / Medical / Dental / Veterinary',
  'Manufacturing & Production',
  'BPO / Call Center',
  'Retail & E-Commerce',
  'Hospitality / Hotel / Resort',
  'Wellness / Spa / Fitness',
  'Education / Schools / Training',
  'Professional Services / Consultancy',
  'Construction & Real Estate',
  'Food & Restaurant',
  'Government / NGO',
  'Technology / Software',
  'Finance & Accounting',
  'Other',
]

const INTENTS = [
  { value: 'demo', label: 'Request a Demo' },
  { value: 'consultation', label: 'Schedule Consultation' },
  { value: 'partnership', label: 'Start a Partnership' },
  { value: 'quote', label: 'Get a Quote' },
  { value: 'support', label: 'Technical Support' },
  { value: 'other', label: 'General Inquiry' },
]

type FormState = {
  fullName: string
  companyName: string
  email: string
  contactNumber: string
  industry: string
  product: string
  intent: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>
type Status = 'idle' | 'loading' | 'success' | 'error'

const empty: FormState = {
  fullName: '', companyName: '', email: '', contactNumber: '',
  industry: '', product: '', intent: '', message: '',
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>(empty)
  const [errors, setErrors] = useState<FormErrors>({})
  const [touched, setTouched] = useState<Partial<Record<keyof FormState, boolean>>>({})
  const [status, setStatus] = useState<Status>('idle')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const intent = params.get('intent')
    const product = params.get('product')
    if (intent) setForm(f => ({ ...f, intent }))
    if (product) setForm(f => ({ ...f, product }))
  }, [])

  function validate(data: FormState): FormErrors {
    const e: FormErrors = {}
    if (!data.fullName.trim()) e.fullName = 'Full name is required.'
    if (!data.email.trim()) e.email = 'Email address is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = 'Please enter a valid email.'
    if (!data.contactNumber.trim()) e.contactNumber = 'Contact number is required.'
    if (!data.industry) e.industry = 'Please select your industry.'
    if (!data.product) e.product = 'Please select a product or service.'
    if (!data.intent) e.intent = 'Please select the purpose of your inquiry.'
    if (!data.message.trim()) e.message = 'Please describe your needs.'
    else if (data.message.trim().length < 20) e.message = 'Please provide at least 20 characters.'
    return e
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setForm(f => ({ ...f, [name]: value }))
    if (touched[name as keyof FormState]) {
      const newErrs = validate({ ...form, [name]: value })
      setErrors(prev => ({ ...prev, [name]: newErrs[name as keyof FormState] }))
    }
  }

  function handleBlur(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name } = e.target
    setTouched(t => ({ ...t, [name]: true }))
    setErrors(prev => ({ ...prev, [name]: validate(form)[name as keyof FormState] }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const allTouched = Object.keys(form).reduce((a, k) => ({ ...a, [k]: true }), {})
    setTouched(allTouched)
    const errs = validate(form)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return
    setStatus('loading')
    try {
      // ── TO CONNECT EMAIL: replace the line below with one of these options ──
      //
      // OPTION A — Formspree (recommended, free, no install):
      // 1. Go to formspree.io → create account → New Form → point to argbelda@gmail.com
      // 2. Copy your form ID (e.g. "xyzabcde")
      // 3. Replace the await below with:
      //    const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      //      method: 'POST',
      //      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      //      body: JSON.stringify({ ...form, _replyto: form.email, _subject: `GemuCube inquiry — ${form.product}` }),
      //    })
      //    if (!res.ok) throw new Error('failed')
      //
      // OPTION B — EmailJS (more template control):
      // 1. npm install @emailjs/browser
      // 2. Sign up at emailjs.com → create Service + Template → get keys
      // 3. Replace the await below with:
      //    const emailjs = (await import('@emailjs/browser')).default
      //    await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', { ...form, to_email: 'argbelda@gmail.com' }, 'PUBLIC_KEY')
      //
      await new Promise(r => setTimeout(r, 1400)) // ← remove this line when using real integration
      setStatus('success')
      setForm(empty)
      setTouched({})
      setErrors({})
    } catch {
      setStatus('error')
    }
  }

  const inputClass = (name: keyof FormErrors) =>
    `w-full bg-white/[0.04] border rounded-sm px-4 py-3 text-white text-sm placeholder-white/20
     focus:outline-none transition-all ${
      errors[name] && touched[name]
        ? 'border-red-500/50 focus:border-red-500/70 bg-red-500/5'
        : 'border-white/[0.08] focus:border-[rgba(255,219,73,0.4)] focus:bg-white/[0.06]'
    }`

  return (
    <div className="relative pt-[72px]">

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-16 overflow-hidden grid-bg noise">
        <div className="glow-orb w-[500px] h-[400px] bg-[#FFDB49] opacity-[0.05] -top-20 right-0" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p className="eyebrow mb-6">Get in Touch</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-6 max-w-4xl">
            No pitch decks.<br />
            No generic proposals.<br />
            <span className="text-gradient">Just a real conversation.</span>
          </h1>
          <p className="text-white/55 text-xl max-w-xl leading-relaxed">
            Tell us where you are and where you want to go. We will tell you exactly how we would build it.
          </p>
        </div>
      </section>

      {/* ── MAIN GRID ── */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* ── FORM ── */}
            <div className="lg:col-span-3">
              {status === 'success' ? (
                <div className="glass-card rounded-xl p-12 text-center border-[rgba(255,219,73,0.15)] relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFDB49] via-[#FFDB49]/60 to-transparent" />
                  <div className="glow-orb w-48 h-48 bg-[#FFDB49] opacity-[0.08] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  <CheckCircle size={48} className="text-[#FFDB49] mx-auto mb-6 relative" />
                  <h2 className="font-display text-3xl text-white mb-4 relative">Message sent successfully.</h2>
                  <p className="text-white/55 text-lg mb-6 relative leading-relaxed">
                    You will hear directly from Adam or Renz within 24 hours — not an assistant, not a coordinator.
                  </p>
                  <Link href="/products" className="btn-ghost">
                    Explore Our Products <ArrowRight size={15} />
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="glass-card rounded-xl overflow-hidden">
                  <div className="px-8 pt-8 pb-6 border-b border-white/[0.06]">
                    <h2 className="font-display text-2xl text-white mb-1">Send Your Inquiry</h2>
                    <p className="text-white/40 text-sm">Fields marked * are required.</p>
                  </div>

                  <div className="p-8 space-y-5">

                    {status === 'error' && (
                      <div className="rounded-sm border border-red-500/30 bg-red-500/10 px-5 py-4">
                        <p className="text-red-400 text-sm">Something went wrong. Please try again or email <a href="mailto:argbelda@gmail.com" className="underline">argbelda@gmail.com</a> directly.</p>
                      </div>
                    )}

                    {/* Full Name + Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-white/50 text-xs font-mono mb-2 uppercase tracking-wider">Full Name *</label>
                        <input type="text" name="fullName" value={form.fullName} onChange={handleChange} onBlur={handleBlur} placeholder="Juan dela Cruz" className={inputClass('fullName')} />
                        {errors.fullName && touched.fullName && <p className="text-red-400 text-xs mt-1.5">{errors.fullName}</p>}
                      </div>
                      <div>
                        <label className="block text-white/50 text-xs font-mono mb-2 uppercase tracking-wider">Company Name</label>
                        <input type="text" name="companyName" value={form.companyName} onChange={handleChange} onBlur={handleBlur} placeholder="Acme Corp (optional)" className={inputClass('companyName')} />
                      </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-white/50 text-xs font-mono mb-2 uppercase tracking-wider">Email Address *</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} onBlur={handleBlur} placeholder="juan@company.com" className={inputClass('email')} />
                        {errors.email && touched.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-white/50 text-xs font-mono mb-2 uppercase tracking-wider">Contact Number *</label>
                        <input type="tel" name="contactNumber" value={form.contactNumber} onChange={handleChange} onBlur={handleBlur} placeholder="+63 9XX XXX XXXX" className={inputClass('contactNumber')} />
                        {errors.contactNumber && touched.contactNumber && <p className="text-red-400 text-xs mt-1.5">{errors.contactNumber}</p>}
                      </div>
                    </div>

                    {/* Industry */}
                    <div>
                      <label className="block text-white/50 text-xs font-mono mb-2 uppercase tracking-wider">Industry *</label>
                      <select name="industry" value={form.industry} onChange={handleChange} onBlur={handleBlur} className={`${inputClass('industry')} bg-[#111] appearance-none cursor-pointer`}>
                        <option value="" disabled>Select your industry</option>
                        {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
                      </select>
                      {errors.industry && touched.industry && <p className="text-red-400 text-xs mt-1.5">{errors.industry}</p>}
                    </div>

                    {/* Product */}
                    <div>
                      <label className="block text-white/50 text-xs font-mono mb-2 uppercase tracking-wider">Product / Service Interested In *</label>
                      <select name="product" value={form.product} onChange={handleChange} onBlur={handleBlur} className={`${inputClass('product')} bg-[#111] appearance-none cursor-pointer`}>
                        <option value="" disabled>Select a product or service</option>
                        {PRODUCTS.map(p => <option key={p} value={p}>{p}</option>)}
                      </select>
                      {errors.product && touched.product && <p className="text-red-400 text-xs mt-1.5">{errors.product}</p>}
                    </div>

                    {/* Intent buttons */}
                    <div>
                      <label className="block text-white/50 text-xs font-mono mb-3 uppercase tracking-wider">Purpose of Inquiry *</label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {INTENTS.map(intent => (
                          <button
                            key={intent.value}
                            type="button"
                            onClick={() => { setForm(f => ({ ...f, intent: intent.value })); setTouched(t => ({ ...t, intent: true })); setErrors(prev => ({ ...prev, intent: undefined })) }}
                            className={`text-xs py-2.5 px-3 rounded-sm border text-left transition-all leading-snug ${
                              form.intent === intent.value
                                ? 'border-[rgba(255,219,73,0.5)] bg-[rgba(255,219,73,0.08)] text-[#FFDB49]'
                                : 'border-white/[0.08] text-white/50 hover:border-white/20 hover:text-white/70'
                            }`}
                          >
                            {intent.label}
                          </button>
                        ))}
                      </div>
                      {errors.intent && touched.intent && <p className="text-red-400 text-xs mt-1.5">{errors.intent}</p>}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-white/50 text-xs font-mono mb-2 uppercase tracking-wider">Message — Tell Us About Your Needs *</label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        rows={5}
                        placeholder="Describe your business situation, what you are trying to solve, and any specific requirements. The more detail, the better our response."
                        className={`${inputClass('message')} resize-none`}
                      />
                      <div className="flex justify-between mt-1.5">
                        {errors.message && touched.message ? <p className="text-red-400 text-xs">{errors.message}</p> : <span />}
                        <span className="text-white/20 text-xs font-mono">{form.message.length}</span>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="btn-primary w-full justify-center py-4 text-base group disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'loading' ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <>Send My Inquiry <Send size={16} className="group-hover:translate-x-1 transition-transform" /></>
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

              <div className="glass-card rounded-xl p-6 border-[rgba(255,219,73,0.1)] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#FFDB49] to-transparent" />
                <div className="flex items-start gap-4">
                  <Clock size={18} className="text-[#FFDB49] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white font-semibold mb-2">24-hour response commitment</p>
                    <p className="text-white/45 text-sm leading-relaxed">You will hear directly from Adam or Renz — not an assistant, not a coordinator.</p>
                  </div>
                </div>
              </div>

              {[
                { initials: 'AR', name: 'Adam Raymond Belda', role: 'IT Operations Director / Co-Founder', email: 'argbelda@gmail.com', phone: '+63 947 895 4125', linkedin: 'linkedin.com/in/adambelda' },
                { initials: 'RG', name: 'Renz Gutierrez Belda', role: 'IT Support Specialist / Co-Founder', email: 'rgutierrezbelda@gmail.com', phone: '+63 960 548 9073', linkedin: null },
              ].map(p => (
                <div key={p.initials} className="glass-card rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-lg bg-[rgba(255,219,73,0.08)] border border-[rgba(255,219,73,0.12)] flex items-center justify-center font-display text-lg text-[#FFDB49]">{p.initials}</div>
                    <div>
                      <p className="text-white font-semibold text-sm">{p.name}</p>
                      <p className="text-white/40 text-xs font-mono">{p.role}</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <a href={`mailto:${p.email}`} className="flex items-center gap-3 text-white/50 text-sm hover:text-[#FFDB49] transition-colors"><Mail size={14} />{p.email}</a>
                    <a href={`tel:${p.phone.replace(/\s/g,'')}`} className="flex items-center gap-3 text-white/50 text-sm hover:text-[#FFDB49] transition-colors"><Phone size={14} />{p.phone}</a>
                    {p.linkedin && <a href={`https://${p.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/50 text-sm hover:text-[#FFDB49] transition-colors"><Linkedin size={14} />{p.linkedin}</a>}
                  </div>
                </div>
              ))}

              <div className="glass-card rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-[#FFDB49] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-white text-sm font-semibold mb-1">Office Location</p>
                    <p className="text-white/45 text-sm">General Trias City, Cavite 4107, Philippines</p>
                    <p className="text-white/30 text-xs mt-2">Remote-first. We serve clients across the Philippines and internationally.</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6">
                <p className="eyebrow text-[10px] mb-5">What happens after you submit</p>
                <ol className="space-y-4">
                  {[
                    { n: '1', t: 'We read your inquiry in full', b: 'Not skimmed — read. We want to understand your situation before we respond.' },
                    { n: '2', t: 'We respond within 24 hours', b: 'Directly from Adam or Renz. Sometimes sooner.' },
                    { n: '3', t: 'We schedule a discovery call', b: 'A direct 30-minute conversation about your business, systems, and what needs to be built.' },
                  ].map(step => (
                    <li key={step.n} className="flex items-start gap-4">
                      <span className="w-6 h-6 rounded-full bg-[rgba(255,219,73,0.1)] border border-[rgba(255,219,73,0.2)] flex items-center justify-center text-[#FFDB49] text-xs font-mono font-semibold shrink-0 mt-0.5">{step.n}</span>
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
