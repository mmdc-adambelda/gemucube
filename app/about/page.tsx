import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, Phone, Linkedin, Award, ArrowRight, Briefcase, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About — Adam Belda & Renz Belda, Co-Founders',
  description: 'Meet the co-founders of GemuCube Solutions. 13+ years enterprise IT experience. Direct access on every engagement. No account managers.',
}

const adamExperience = [
  { period: '2024 – 2026', role: 'IT Client Success Manager', company: 'MEDVA / Deel PH EOR Services', location: 'U.S.A.', highlight: 'Built ISO & HIPAA-compliant onboarding systems. Designed encrypted BYOD environments. Managed IT Implementation Specialists.' },
  { period: '2022 – 2024', role: 'IT Operations Director', company: 'NXTGEN Industries', location: 'Melbourne, Australia', highlight: 'Full IT operations leadership. Led technical teams, managed enterprise systems, ensured client brand delivery across all technology touchpoints.' },
  { period: '2021 – 2022', role: 'Senior Support Engineer Lead / Supervisor', company: 'Emapta Philippines Inc.', location: 'Philippines', highlight: 'Resolved escalated cloud application issues. Led support engineering team. Conducted biweekly SLA stakeholder sync meetings.' },
  { period: '2020 – 2021', role: 'Software Support Engineer', company: 'SAP Philippines', location: 'Philippines', highlight: 'Technical authority for SAP LMS. HTML, JavaScript, SCORM. Database management and SCRUM/SPRINT facilitation.' },
]

const renzExperience = [
  { period: '2024 – 2025', role: 'Quality Analyst', company: 'TaskUs Inc.', location: 'Philippines', highlight: 'Content moderation QA. Policy compliance and quality systems across high-volume content environments.' },
  { period: '2022 – 2024', role: 'IT Support Specialist II', company: 'NXTGEN Industries', location: 'Philippines', highlight: 'Software and web application troubleshooting. JIRA and ServiceNow ticket management. System upgrades and process improvements.' },
  { period: '2021 – 2022', role: 'Lead Data Annotator', company: 'Intelegencia', location: 'Philippines', highlight: 'Led ML/AI data labeling. Reduced inter-annotator disagreement from 18% to 5.8%. AI deployment support.' },
  { period: '2018 – 2021', role: 'IT Support Specialist', company: 'GemuCube Solutions', location: 'Philippines', highlight: 'Hardware, software, OS, and web application support. WordPress and Elementor website assistance. Ticket management.' },
]

const adamCerts = ['Lean Six Sigma Black Belt', 'Project Management Professional (PMP)', 'Cybersecurity & IT Operations Management', 'SAP Engineer & Tech Consultant (LMS/ERP)', 'Top Tech Writer & Male Content Creator — PH']
const renzCerts = ['Certified Digital Marketing Professional (CDMP) — Google 2021', 'Project Management Professional (PMP) — Microsoft 2023', 'Lean Six Sigma White Belt — Six Sigma PH 2023']

const adamStack = ['Salesforce', 'ServiceNow', 'Zoho CRM', 'AgileCRM', 'ClickUp', 'WordPress', 'Elementor Pro', 'Microsoft Azure', 'M365 Admin', 'Google Analytics 4', 'RankMath Pro', 'Zapier', 'Adobe Illustrator', 'HTML / JavaScript', 'SCORM']
const renzStack = ['JIRA', 'ServiceNow', 'Zendesk', 'Monday.com', 'TeamViewer', 'AnyDesk', 'LogMeIn', 'RDP', 'M365 Admin Center', 'Azure IAM', 'Intune', 'Avaya', 'Genesys', 'Zapier', 'LastPass', '1Password']

const values = [
  { title: 'Partnership Over Transactions', body: 'We measure success by how well your business scales, not by how many invoices we send. Every system we build is designed to outlast our direct involvement.' },
  { title: 'Expertise Without Layers', body: 'No account managers. No hand-offs. The people who understand your business are the people working on it — Adam and Renz, directly, on every engagement.' },
  { title: 'Enterprise Quality for Every Stage', body: 'Whether you're a 3-person startup or a 300-seat operation, you deserve systems built to the same standards that enterprises depend on.' },
]

function FounderCard({ name, title, period, email, phone, linkedin, experience, certs, stack, summary }: {
  name: string, title: string, period: string, email: string, phone: string, linkedin?: string,
  experience: typeof adamExperience, certs: string[], stack: string[], summary: string
}) {
  return (
    <div className="glass-card rounded-xl overflow-hidden">
      {/* Header */}
      <div className="relative p-8 border-b border-white/[0.06] bg-gradient-to-br from-[rgba(255,219,73,0.04)] to-transparent">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FFDB49] via-[#FFDB49]/40 to-transparent" />

        {/* Avatar placeholder */}
        <div className="w-20 h-20 rounded-lg bg-[rgba(255,219,73,0.08)] border border-[rgba(255,219,73,0.15)] flex items-center justify-center mb-5 font-display text-3xl text-[#FFDB49]">
          {name.split(' ').map(n => n[0]).slice(0,2).join('')}
        </div>

        <h3 className="font-display text-3xl text-white mb-1">{name}</h3>
        <p className="text-white/50 text-sm font-mono mb-4">{title}</p>
        <p className="text-white/60 text-sm leading-relaxed max-w-xl mb-6">{summary}</p>

        <div className="flex flex-wrap gap-3">
          <a href={`mailto:${email}`} className="flex items-center gap-2 text-white/50 text-xs hover:text-[#FFDB49] transition-colors glass-card px-3 py-2 rounded-sm border-0">
            <Mail size={12} /> {email}
          </a>
          <a href={`tel:${phone.replace(/\s/g,'')}`} className="flex items-center gap-2 text-white/50 text-xs hover:text-[#FFDB49] transition-colors glass-card px-3 py-2 rounded-sm border-0">
            <Phone size={12} /> {phone}
          </a>
          {linkedin && (
            <a href={`https://${linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 text-xs hover:text-[#FFDB49] transition-colors glass-card px-3 py-2 rounded-sm border-0">
              <Linkedin size={12} /> {linkedin}
            </a>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/[0.06]">
        {/* Experience */}
        <div className="lg:col-span-2 p-8">
          <div className="flex items-center gap-2 mb-6">
            <Briefcase size={14} className="text-[#FFDB49]" />
            <p className="eyebrow text-[10px]">Work History</p>
          </div>
          <div className="space-y-6">
            {experience.map((e) => (
              <div key={e.role} className="relative pl-4 border-l border-white/[0.08] hover:border-[rgba(255,219,73,0.3)] transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                  <p className="font-mono text-[10px] text-[#FFDB49]/60">{e.period}</p>
                  <span className="hidden sm:block text-white/20 text-xs">·</span>
                  <p className="text-white/30 text-xs">{e.location}</p>
                </div>
                <p className="text-white text-sm font-semibold mb-0.5">{e.role}</p>
                <p className="text-white/50 text-xs mb-2">{e.company}</p>
                <p className="text-white/35 text-xs leading-relaxed">{e.highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certs + Stack */}
        <div className="p-8 space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Award size={14} className="text-[#FFDB49]" />
              <p className="eyebrow text-[10px]">Certifications</p>
            </div>
            <ul className="space-y-2">
              {certs.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <CheckCircle size={10} className="text-[#FFDB49] mt-1 shrink-0" />
                  <span className="text-white/55 text-xs leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-[10px] mb-5">Tech Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {stack.map((s) => (
                <span key={s} className="text-[10px] px-2 py-1 bg-white/[0.04] border border-white/[0.07] rounded text-white/45 hover:text-white/70 hover:border-white/20 transition-colors cursor-default">{s}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="relative pt-[72px]">

      {/* ── HERO ── */}
      <section className="section-pad relative overflow-hidden grid-bg">
        <div className="glow-orb w-[500px] h-[500px] bg-[#FFDB49] opacity-[0.05] -top-20 right-0" />
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow mb-6">About GemuCube</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 max-w-4xl">
            You won't deal with<br />
            account managers.<br />
            <span className="text-gradient">You'll work directly with us.</span>
          </h1>
          <p className="text-white/55 text-xl max-w-2xl leading-relaxed">
            GemuCube was built on one belief: the people with the expertise should be the ones doing the work — and talking to you.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* ── ORIGIN STORY ── */}
      <section className="section-pad bg-[#0e0e0e]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-5">Our Story</p>
              <h2 className="font-display text-4xl sm:text-5xl text-white mb-6">
                Built from the inside<br />
                of enterprise systems.
              </h2>
              <p className="text-white/55 text-lg leading-relaxed mb-6">
                GemuCube Solutions was founded by Adam and Renz Belda — two professionals who spent years inside enterprise IT and operations environments at SAP Philippines, Emapta, NXTGEN Industries Melbourne, MEDVA/Deel PH, TaskUs, and Intelegencia.
              </p>
              <p className="text-white/40 leading-relaxed">
                We built GemuCube on a single conviction: that startups and growing businesses deserve the same quality of systems and thinking as large corporations — and they deserve a partner who is genuinely embedded in their success, not standing outside billing by the hour.
              </p>
            </div>

            {/* Quote card */}
            <div className="glass-card rounded-xl p-8 border-[rgba(255,219,73,0.1)] relative">
              <div className="absolute top-0 left-0 w-[2px] h-full bg-gradient-to-b from-[#FFDB49] to-transparent rounded-l-xl" />
              <p className="font-display text-2xl text-white leading-relaxed mb-6 italic">
                "The people with the expertise should be the ones doing the work — and talking to you."
              </p>
              <div className="flex gap-6">
                <div>
                  <p className="text-white text-sm font-semibold">Adam Raymond Belda</p>
                  <p className="text-white/40 text-xs font-mono">IT Operations Director / Co-Founder</p>
                </div>
                <div className="w-px bg-white/10" />
                <div>
                  <p className="text-white text-sm font-semibold">Renz Gutierrez Belda</p>
                  <p className="text-white/40 text-xs font-mono">IT Support Specialist / Co-Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ADAM PROFILE ── */}
      <section className="section-pad" id="adam">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow mb-8">Co-Founder</p>
          <FounderCard
            name="Adam Raymond Belda"
            title="IT Operations Director / Co-Founder"
            period="2018 – Present"
            email="argbelda@gmail.com"
            phone="+63 947 895 4125"
            linkedin="linkedin.com/in/adambelda"
            summary="Certified Project Manager and Scrum Master with 13+ years of IT experience. Deep expertise in software architecture, enterprise IT operations, CRM configuration, ISO/HIPAA compliance, and digital infrastructure. Proven ability to bridge technical and non-technical stakeholders across enterprise and startup environments."
            experience={adamExperience}
            certs={adamCerts}
            stack={adamStack}
          />
        </div>
      </section>

      {/* ── RENZ PROFILE ── */}
      <section className="section-pad bg-[#0a0a0a]" id="renz">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow mb-8">Co-Founder</p>
          <FounderCard
            name="Renz Gutierrez Belda"
            title="IT Support Specialist / Co-Founder"
            period="2018 – Present"
            email="rgutierrezbelda@gmail.com"
            phone="+63 960 5489 073"
            summary="IT Support professional with hands-on experience in hardware and software troubleshooting, IT ticket management across enterprise ITSM platforms, quality analysis, AI data annotation at scale, and remote technical support. Detail-oriented and consistently high in service delivery across distributed enterprise environments."
            experience={renzExperience}
            certs={renzCerts}
            stack={renzStack}
          />
        </div>
      </section>

      {/* ── VALUES ── */}
      <section className="section-pad relative overflow-hidden">
        <div className="glow-orb w-[600px] h-[300px] bg-[#FFDB49] opacity-[0.04] top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative">
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
      <section className="py-24 bg-[#0e0e0e] border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-6">
            Ready to work with<br />
            <span className="text-gradient">Adam & Renz directly?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10">Every inquiry goes to one of us — not a sales team, not a coordinator.</p>
          <Link href="/contact" className="btn-primary group text-base py-4 px-8">
            Work With Adam & Renz
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
