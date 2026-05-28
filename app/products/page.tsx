import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Software Products — GemuCube Solutions',
  description:
    'Explore GemuCube Solutions\' portfolio of AI-powered business software: payroll & attendance, EMR, community platforms, booking systems, LMS, and accounting — built for Philippine SMEs and enterprises.',
  openGraph: {
    title: 'Software Products — GemuCube Solutions',
    description:
      'AI-powered business software built for Philippine SMEs and enterprises.',
    url: 'https://gemucube.com/products',
    siteName: 'GemuCube Solutions',
    locale: 'en_PH',
    type: 'website',
  },
}

const products = [
  {
    slug: 'payrolltrack-ai',
    name: 'PayrollTrack AI',
    tagline: 'Attendance automated. Payroll done.',
    description:
      'AI-powered face recognition attendance and fully automated payroll processing — built for Philippine labor compliance.',
    icon: '⏱',
    color: '#3B82F6',
    colorName: 'blue',
    industries: ['Manufacturing', 'BPO', 'Retail', 'Corporate'],
    badge: 'AI-Powered',
  },
  {
    slug: 'clinicore',
    name: 'CliniCore',
    tagline: 'Clinical records, intelligently managed.',
    description:
      'Multi-clinic electronic medical record system for dental, veterinary, and medical practices — with built-in AI assistant.',
    icon: '🩺',
    color: '#10B981',
    colorName: 'emerald',
    industries: ['Dental', 'Veterinary', 'General Medical', 'Multi-Clinic'],
    badge: 'HIPAA-Ready',
  },
  {
    slug: 'nexuslink',
    name: 'NexusLink',
    tagline: 'Your community, connected.',
    description:
      'Private social networking and community management platform — built for homeowners associations, villages, and organizations.',
    icon: '🏘',
    color: '#8B5CF6',
    colorName: 'violet',
    industries: ['HOA', 'Subdivisions', 'Corporate Communities', 'Alumni'],
    badge: 'Community Platform',
  },
  {
    slug: 'reservio',
    name: 'Reservio',
    tagline: 'Every booking. Every peso. Tracked.',
    description:
      'Automated booking and reservation system with schedule management, revenue reports, and multi-property support.',
    icon: '📅',
    color: '#F59E0B',
    colorName: 'amber',
    industries: ['Hotels', 'Spa & Wellness', 'Clinics', 'Consultancy'],
    badge: 'Multi-Industry',
  },
  {
    slug: 'learnflow',
    name: 'LearnFlow',
    tagline: 'Education, elevated by AI.',
    description:
      'Learning management system with student portal, online classes, AI chatbot assistant, and academic analytics.',
    icon: '🎓',
    color: '#EC4899',
    colorName: 'pink',
    industries: ['Schools', 'Training Centers', 'Corporates', 'e-Learning'],
    badge: 'AI Chatbot',
  },
  {
    slug: 'ledgeriq',
    name: 'LedgerIQ',
    tagline: 'Modern accounting for modern businesses.',
    description:
      'Digital ledger and accounting platform with expense tracking, financial reports, and analytics dashboard — built for Philippine SMEs.',
    icon: '📊',
    color: '#14B8A6',
    colorName: 'teal',
    industries: ['SMEs', 'Startups', 'Retail', 'Service Businesses'],
    badge: 'SME-Ready',
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#080808]">
      {/* ── Hero ── */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background orbs */}
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #FFDB49 0%, transparent 70%)' }}
        />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <span className="inline-block font-mono text-xs tracking-[0.2em] text-[#FFDB49] uppercase mb-6">
            Software Products
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight mb-6">
            Purpose-built software<br />
            <span className="text-[#FFDB49]">for every operation.</span>
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Six AI-powered platforms crafted by GemuCube Solutions — deployable out of the box or
            customized to your exact operational needs.
          </p>
        </div>
      </section>

      {/* ── Naming rationale badge ── */}
      <section className="px-6 pb-8">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card border border-white/10 rounded-2xl px-6 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <span className="font-mono text-[#FFDB49] text-xs tracking-widest uppercase shrink-0">
              Why "Products"?
            </span>
            <p className="text-white/50 text-sm leading-relaxed">
              For a B2B tech company deploying discrete, licensable software, <strong className="text-white/80">Products</strong> communicates
              clear ownership, tangible value, and individual purchase intent — outperforming vague terms like
              "Solutions" or "Systems" in search intent and buyer cognition.
            </p>
          </div>
        </div>
      </section>

      {/* ── Products Grid ── */}
      <section className="px-6 pb-32">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link
              key={p.slug}
              href={`/products/${p.slug}`}
              className="group relative block rounded-2xl border border-white/10 bg-[#0e0e0e] overflow-hidden
                         hover:border-white/25 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-70 group-hover:opacity-100 transition-opacity"
                style={{ background: p.color }}
              />

              <div className="p-7">
                {/* Icon + badge */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: `${p.color}18`, border: `1px solid ${p.color}35` }}
                  >
                    {p.icon}
                  </div>
                  <span
                    className="font-mono text-[10px] tracking-widest uppercase px-3 py-1 rounded-full border"
                    style={{ color: p.color, borderColor: `${p.color}50`, background: `${p.color}12` }}
                  >
                    {p.badge}
                  </span>
                </div>

                {/* Name & tagline */}
                <h2 className="text-white text-xl font-semibold mb-1 group-hover:text-[#FFDB49] transition-colors">
                  {p.name}
                </h2>
                <p className="font-mono text-xs text-white/40 mb-4">{p.tagline}</p>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-6">{p.description}</p>

                {/* Industries */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.industries.map((ind) => (
                    <span
                      key={ind}
                      className="text-[11px] font-mono text-white/40 border border-white/10 rounded-full px-2.5 py-0.5"
                    >
                      {ind}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-medium" style={{ color: p.color }}>
                  Explore Product
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <div className="glass-card border border-[#FFDB49]/20 rounded-2xl px-8 py-10 bg-[#0e0e0e]">
            <h3 className="font-serif text-3xl text-white mb-3">
              Need something custom?
            </h3>
            <p className="text-white/50 mb-7 text-sm leading-relaxed max-w-md mx-auto">
              Every product above can be customized to your industry, workflows, and branding.
              Talk to Adam or Renz directly — no account managers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#FFDB49] text-black font-semibold
                           px-6 py-3 rounded-xl hover:bg-[#ffe870] transition-colors text-sm"
              >
                Request a Demo
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white
                           px-6 py-3 rounded-xl hover:border-white/40 transition-colors text-sm"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
