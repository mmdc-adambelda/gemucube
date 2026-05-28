import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import TeamCard from '@/components/ui/TeamCard'
import TeamBannerPhoto from '@/components/ui/TeamBannerPhoto'

export const metadata: Metadata = {
  title: 'The Team — GemuCube Solutions',
  description: 'Meet the people behind GemuCube Solutions. Every engagement involves direct access to our team — no account managers, no hand-offs.',
  openGraph: {
    title: 'The Team — GemuCube Solutions',
    description: 'Meet the people behind GemuCube Solutions.',
    url: 'https://gemucube.com/team',
    siteName: 'GemuCube Solutions',
    locale: 'en_PH',
    type: 'website',
  },
}

const team = [
  {
    id: 'adam',
    image: '/assets/team/adam-belda.jpg',
    initials: 'AB',
    name: 'Adam Belda',
    role: 'CEO & Founder',
    bio: 'Certified Project Manager and Scrum Master with 13+ years of IT and business operations experience. Career spanning SAP Philippines, Emapta, NXTGEN Industries Melbourne, and MEDVA/Deel PH. Architect of GemuCube's systems, products, and partnership model.',
    email: 'argbelda@gmail.com',
    phone: '+63 947 895 4125',
    linkedin: 'https://linkedin.com/in/adambelda',
    tags: ['PMP Certified', 'Lean Six Sigma Black Belt', 'SAP Engineer', 'Fractional CTO'],
    available: true,
  },
  {
    id: 'renz',
    image: '/assets/team/renz-belda.jpg',
    initials: 'RB',
    name: 'Renz Belda',
    role: 'Product Owner',
    bio: 'IT professional with deep hands-on expertise in enterprise support operations, product quality, and AI data systems. Experienced across NXTGEN Industries, Intelegencia, and TaskUs. Leads product delivery and operational quality at GemuCube.',
    email: 'rgutierrezbelda@gmail.com',
    phone: '+63 960 548 9073',
    linkedin: 'https://linkedin.com/in/renzbelda',
    tags: ['Product Management', 'JIRA & ServiceNow', 'QA & QC', 'AI Data Systems'],
    available: true,
  },
  {
    id: 'villie',
    image: '/assets/team/villie-camilon.jpg',
    initials: 'VC',
    name: 'Villie Camilon',
    role: 'Business Development Officer',
    bio: 'Leads GemuCube's client acquisition, partnership development, and market expansion. Bridges the gap between client needs and technical solutions — ensuring every engagement starts with full clarity and ends with real results.',
    email: null,
    phone: null,
    linkedin: 'https://linkedin.com/in/villiecamilon',
    tags: ['Business Development', 'Partnerships', 'Client Relations', 'Market Expansion'],
    available: true,
  },
  {
    id: 'coming-soon',
    image: null,
    initials: '?',
    name: null,
    role: 'Product Owner',
    bio: null,
    email: null,
    phone: null,
    linkedin: null,
    tags: [],
    available: false,
  },
]

const values = [
  { num: '01', title: 'Direct Access', body: 'Every client engagement involves the team directly. No account managers sitting between you and the people doing the work.' },
  { num: '02', title: 'Enterprise Credentials', body: 'Our team's experience spans SAP, Emapta, NXTGEN Industries Melbourne, MEDVA/Deel PH, TaskUs, and Intelegencia.' },
  { num: '03', title: 'Full-Stack Capability', body: 'From business operations to software engineering to digital growth — one team covers the full spectrum.' },
  { num: '04', title: 'Embedded, Not Outsourced', body: 'We work as part of your team, not as a vendor standing outside billing by the hour.' },
]

export default function TeamPage() {
  return (
    <div className="relative pt-[72px]">

      {/* ── HERO ── */}
      <section className="relative pt-24 pb-20 overflow-hidden grid-bg noise">
        <div className="glow-orb w-[600px] h-[500px] bg-[#FFDB49] opacity-[0.05] -top-40 -right-40" />
        <div className="glow-orb w-[350px] h-[350px] bg-[#FFDB49] opacity-[0.03] bottom-0 -left-20" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p className="eyebrow mb-6">The Team</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl text-white leading-[1.02] mb-8 max-w-4xl">
            The people you will<br />
            <span className="text-gradient">actually work with.</span>
          </h1>
          <p className="text-white/55 text-xl max-w-2xl leading-relaxed mb-12">
            When you engage GemuCube, you engage the team directly — no account managers,
            no hand-offs, no coordinators. The people with the expertise do the work.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-white/[0.06]">
            {[
              { value: '4', label: 'Team Members' },
              { value: '13+', label: 'Years Combined Experience' },
              { value: 'PH · AU · US', label: 'Clients Served' },
              { value: '24 hrs', label: 'Response Commitment' },
            ].map(s => (
              <div key={s.label}>
                <p className="font-display text-2xl sm:text-3xl text-[#FFDB49] mb-1">{s.value}</p>
                <p className="text-white/40 text-xs font-mono">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM CARDS ── */}
      <section className="section-pad bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {team.map(member => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>

          {/* Team banner photo */}
          <div className="rounded-xl border border-white/[0.06] bg-[#0a0a0a] overflow-hidden" style={{ aspectRatio: '21/5', minHeight: '160px' }}>
            <div className="relative w-full h-full min-h-[160px]">
              {/* Placeholder text — underneath */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <p className="eyebrow text-[10px] mb-2">Team Photo Banner</p>
                <p className="text-white/20 text-xs font-mono leading-relaxed">
                  Upload to: <span className="text-[#FFDB49]/50">public/assets/about/team-photo.jpg</span>
                  <span className="block mt-1">Recommended: 1400×400px, wide group photo</span>
                </p>
              </div>
              {/* Actual photo layer via TeamBannerImage */}
              <TeamBannerPhoto />
            </div>
          </div>
        </div>
      </section>

      {/* ── IMAGE UPLOAD GUIDE (dev-only info, hidden on prod) ── */}

      {/* ── HOW WE WORK ── */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow mb-5">How We Engage</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-16 max-w-2xl">
            Four things that make<br />
            <span className="text-white/40">every engagement different.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map(v => (
              <div key={v.num} className="glass-card rounded-xl p-7 relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFDB49]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="font-display text-5xl text-[#FFDB49] opacity-10 mb-4 leading-none select-none">{v.num}</p>
                <h3 className="font-display text-xl text-white mb-3">{v.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN THE TEAM ── */}
      <section className="section-pad bg-[#0a0a0a] grid-bg">
        <div className="max-w-5xl mx-auto px-6">
          <div className="glass-card rounded-xl p-10 sm:p-14 text-center relative overflow-hidden border-[rgba(255,219,73,0.1)]">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFDB49] to-transparent opacity-40" />
            <div className="glow-orb w-48 h-48 bg-[#FFDB49] opacity-[0.06] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="relative">
              <p className="eyebrow mb-4">We Are Growing</p>
              <h2 className="font-display text-3xl sm:text-4xl text-white mb-5">
                Interested in joining<br />
                <span className="text-gradient">the GemuCube team?</span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed max-w-xl mx-auto mb-8">
                We are always looking for sharp, self-driven people who care about doing excellent work.
                If that sounds like you, reach out directly — no formal job posts, no HR gatekeeping.
              </p>
              <Link href="/contact" className="btn-primary group">
                Reach Out to Adam
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 border-t border-white/[0.06] relative overflow-hidden">
        <div className="glow-orb w-[500px] h-[300px] bg-[#FFDB49] opacity-[0.05] top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-3xl mx-auto px-6 text-center relative">
          <p className="eyebrow mb-6">Start a Partnership</p>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-6">
            Ready to work with a team<br />
            <span className="text-gradient">that actually shows up?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 leading-relaxed">
            Every inquiry goes directly to Adam, Renz, or Villie. You will hear back within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary group text-base py-4 px-8">
              Start a Partnership
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/about" className="btn-ghost">
              Our Story
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

