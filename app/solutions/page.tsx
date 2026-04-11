import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, Zap, Globe, Server, Users, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Solutions — Five Disciplines, One Embedded Partner',
  description: 'CRM implementation, ISO & HIPAA system design, WordPress development, managed IT support, and fractional CTO services. Built from real enterprise experience by Adam Belda and Renz Belda.',
}

const pillars = [
  {
    id: 'A',
    anchor: 'infrastructure',
    icon: Shield,
    label: 'Pillar A',
    title: 'Business Infrastructure & Scaling',
    headline: 'We design the systems your business runs on.',
    body: 'From client onboarding to revenue operations, we architect the operational backbone that lets your business grow without breaking. Every process we design is grounded in Lean Six Sigma methodology and verified enterprise deployment experience.',
    founder: 'Adam Raymond Belda',
    services: [
      { name: 'Business Process Design & Optimization', detail: 'Mapping and redesigning how your business operates using Lean Six Sigma methodology to eliminate waste, reduce friction, and improve throughput. Adam: Lean Six Sigma Black Belt certified.' },
      { name: 'Client Onboarding Systems (ISO & HIPAA Aligned)', detail: 'Structured, compliant onboarding flows with automation, documentation, and access control. Built and deployed at MEDVA/Deel PH for U.S. healthcare clients — staff time-to-productivity reduced from 4.5 days to under 6 hours.' },
      { name: 'SLA & Support Structure Design', detail: 'Building P1–P4 service-level frameworks that define response standards, escalation paths, and accountability. Deployed at Emapta Philippines and NXTGEN Industries.' },
      { name: 'Remote Workforce Systems & Security', detail: 'Secure BYOD environments, WireGuard VPN, Azure AD Conditional Access, and Intune MDM for distributed teams. Designed and deployed at NXTGEN Industries and MEDVA.' },
      { name: 'Revenue Operations & Lead Generation Systems', detail: 'CRM-driven pipelines, lead source tracking, automated follow-up sequences, and win-loss analysis dashboards. Adam: deployed across Salesforce, Zoho CRM, ClickUp, and OrangeCRM.' },
      { name: 'Project & Scrum Management', detail: 'SPRINT planning, backlog management, and delivery tracking using Agile/SCRUM methodology. Adam: PMP and Scrum Master certified. SPRINT facilitation at SAP Philippines and Emapta.' },
    ],
  },
  {
    id: 'B',
    anchor: 'systems',
    icon: Zap,
    label: 'Pillar B',
    title: 'Systems & Automation Engineering',
    headline: 'We connect your tools and eliminate the manual work between them.',
    body: 'We configure CRM platforms, build Zapier automation stacks, design cloud environments, and deploy secure IT systems — from procurement to go-live. Both founders have direct hands-on experience across multiple enterprise environments.',
    founder: 'Adam Belda + Renz Gutierrez Belda',
    services: [
      { name: 'CRM Implementation', detail: 'Salesforce, ServiceNow, Zoho CRM, AgileCRM, ClickUp, OrangeCRM, Atlassian. Full configuration including pipelines, custom fields, automation workflows, and reporting dashboards.' },
      { name: 'Workflow Automation (Zapier)', detail: 'Trigger → Notify, Trigger → Create, and Trigger → Update patterns connecting CRM, email, helpdesk, HR systems, and business tools. Renz: deployed across NXTGEN Industries and GemuCube client environments.' },
      { name: 'Cloud & System Architecture', detail: 'Microsoft Azure environment design and management — identity and access management, resource monitoring, Conditional Access, and Azure Bastion. Renz: Azure IAM and resource monitoring.' },
      { name: 'Secure IT Environment Setup', detail: 'Encrypted working environments, BYOD lockdown, ISO and HIPAA compliance architecture. Adam: designed and deployed at MEDVA/Deel PH — zero credential-related security incidents in 16 months post-deployment.' },
      { name: 'IT Implementation & Deployment', detail: 'End-to-end deployment of business IT systems from procurement to configuration to go-live. Both founders: multi-environment deployment experience across Philippines and Australia.' },
    ],
  },
  {
    id: 'C',
    anchor: 'digital',
    icon: Globe,
    label: 'Pillar C',
    title: 'Digital Growth Infrastructure',
    headline: 'We build your digital presence to work as hard as you do.',
    body: 'Every website we build targets a 90+ Lighthouse score before launch. Every SEO configuration is done in parallel with the build — not retrofitted after. Adam has built and ranked seven properties and managed organic lead generation systems that produce results without paid advertising.',
    founder: 'Adam Raymond Belda',
    services: [
      { name: 'Website Development (WordPress / Elementor Pro)', detail: 'Hello Elementor theme, Elementor Pro, WP Rocket, ShortPixel, Cloudflare CDN. Properties built: gemucube.com, nxtgenindustries.com.au, taskproleague.com, travelwithkarla.com, karlaniiinz.com, and more. Target: 90+ Lighthouse score on every build.' },
      { name: 'SEO & Analytics Optimization', detail: 'Google Analytics 4 with custom conversion events (form_submission, cta_click, phone_tap) via Google Tag Manager. RankMath Pro configuration, schema markup per page type, and Google Search Console integration. Adam: ranked page 1 for brand terms within 14 days of launch.' },
      { name: 'Branding & Content Systems', detail: 'Visual identity direction, content calendar design, and cross-platform content production. Adobe Illustrator and Photoshop for visual assets.' },
      { name: 'Social Media Growth Systems', detail: 'LinkedIn, Facebook, Instagram, YouTube, and TikTok strategy and execution. Adam: recognized Top Tech Writer and Male Content Creator in the Philippines. Organic lead generation: 6 discovery calls in first 60 days at zero ad spend.' },
    ],
  },
  {
    id: 'D',
    anchor: 'managed-it',
    icon: Server,
    label: 'Pillar D',
    title: 'Managed IT & Support Operations',
    headline: 'We keep your systems running so you can focus on your business.',
    body: 'Renz has managed IT support operations across JIRA, ServiceNow, Zendesk, and Monday.com in enterprise environments. He provides remote support via TeamViewer, AnyDesk, LogMeIn, and RDP with security controls that meet enterprise standards.',
    founder: 'Renz Gutierrez Belda',
    services: [
      { name: 'IT Helpdesk & Ticketing Systems', detail: 'JIRA, ServiceNow, Zendesk, Monday.com. Ticket triage, SLA configuration, automation rules, and knowledge base setup. Renz: first-contact resolution rate of 74% in GemuCube helpdesk deployments.' },
      { name: 'Remote Technical Support', detail: 'TeamViewer, AnyDesk, LogMeIn, RDP. Hardware, software, OS, network, and web application troubleshooting. 2FA enforced on all remote access tools. Session recording where applicable.' },
      { name: 'Microsoft 365 & Azure Administration', detail: 'User account provisioning, licensing, shared mailboxes, Exchange management, MFA enforcement, Conditional Access policies, Azure IAM, and Intune MDM. Renz: M365 Admin Center and Azure across multiple enterprise environments.' },
      { name: 'VoIP & Phone Systems', detail: 'Avaya, Genesys Cloud, and Salesforce Built-in Phone support and administration. Pre-go-live QoS configuration, codec optimization, failover testing, and recording compliance. Renz: enterprise phone system experience.' },
      { name: 'AI & Data Support', detail: 'Data annotation for ML training datasets, quality assurance across large annotation pipelines, and AI deployment support. Renz: Lead Data Annotator at Intelegencia — reduced inter-annotator disagreement from 18% to 5.8%.' },
      { name: 'System Monitoring & Incident Management', detail: 'Proactive monitoring, P1–P4 incident management, root cause documentation, and weekly SLA reporting to stakeholders.' },
    ],
  },
  {
    id: 'E',
    anchor: 'embedded',
    icon: Users,
    label: 'Pillar E',
    title: 'Embedded Partnership Model',
    headline: "We don't send a proposal and disappear. We embed, operate, and grow with you.",
    body: "GemuCube's embedded model is its most powerful offering and its clearest differentiator. Adam has served in fractional-equivalent senior leadership roles at NXTGEN Industries Melbourne and MEDVA/Deel PH — both engagements where he operated inside client business operations, not outside of them.",
    founder: 'Adam Raymond Belda',
    services: [
      { name: 'Fractional CTO Services', detail: 'Strategic technology leadership without a full-time hire — system architecture decisions, technology roadmap ownership, vendor management, and stakeholder reporting. Minimum 3-month engagement.' },
      { name: 'Fractional IT Operations Leadership', detail: 'Day-to-day IT operations management, team leadership, SLA oversight, and escalation management embedded in your business. Adam: served as IT Operations Director at NXTGEN Industries Melbourne (2022–2024) and IT Client Success Manager at MEDVA/Deel PH (2024–2026).' },
      { name: 'Project-Based Engagement', detail: 'Defined scope, fixed deliverables, and direct founder involvement for one-time builds or transformations. Delivered on 2-week SPRINT cycles with biweekly live delivery reviews.' },
      { name: 'Retainer-Based Business Scaling', detail: 'Ongoing dedicated capacity for continuous growth, support, and development. Monthly dedicated hours with strategic advisory access and managed IT support.' },
    ],
  },
]

export default function SolutionsPage() {
  return (
    <div className="relative pt-[72px]">

      {/* ── HERO ── */}
      <section className="section-pad relative overflow-hidden grid-bg noise">
        <div className="glow-orb w-[600px] h-[400px] bg-[#FFDB49] opacity-[0.05] -top-20 left-1/2 -translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p className="eyebrow mb-6">Solutions</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 max-w-4xl">
            We don't hand you a catalogue.<br />
            <span className="text-gradient">We build exactly what your business needs.</span>
          </h1>
          <p className="text-white/55 text-xl max-w-2xl leading-relaxed mb-10">
            Every solution GemuCube delivers is built from direct, hands-on experience — not templated service packages or subcontracted delivery.
          </p>
          {/* Pillar nav */}
          <div className="flex flex-wrap gap-3">
            {pillars.map((p) => (
              <a key={p.id} href={`#${p.anchor}`} className="chip hover:bg-[rgba(255,219,73,0.2)] transition-colors cursor-pointer">
                {p.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── PILLARS ── */}
      {pillars.map((p, pi) => {
        const Icon = p.icon
        const dark = pi % 2 === 1
        return (
          <section
            key={p.id}
            id={p.anchor}
            className={`section-pad relative overflow-hidden ${dark ? 'bg-[#0a0a0a]' : 'bg-[#080808]'}`}
          >
            <div className="max-w-7xl mx-auto px-6">
              {/* Header */}
              <div className="flex flex-col lg:flex-row gap-12 mb-16">
                <div className="lg:w-2/5">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-sm bg-[rgba(255,219,73,0.08)] border border-[rgba(255,219,73,0.15)] flex items-center justify-center">
                      <Icon size={18} className="text-[#FFDB49]" />
                    </div>
                    <span className="chip">{p.label}</span>
                  </div>
                  <h2 className="font-display text-4xl sm:text-5xl text-white mb-5">{p.title}</h2>
                  <p className="text-[#FFDB49] text-lg font-display mb-4 italic">{p.headline}</p>
                  <p className="text-white/50 leading-relaxed text-sm mb-6">{p.body}</p>
                  <p className="text-white/25 text-xs font-mono">
                    Lead: {p.founder}
                  </p>
                </div>

                {/* Services grid */}
                <div className="lg:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {p.services.map((s) => (
                    <div key={s.name} className="glass-card rounded-lg p-5 group relative overflow-hidden">
                      <div className="pillar-bar opacity-20 group-hover:opacity-100 transition-opacity" />
                      <div className="pl-3">
                        <div className="flex items-start gap-2 mb-2">
                          <CheckCircle size={13} className="text-[#FFDB49] mt-0.5 shrink-0" />
                          <h4 className="text-white text-sm font-semibold leading-tight">{s.name}</h4>
                        </div>
                        <p className="text-white/40 text-xs leading-relaxed pl-5">{s.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end">
                <Link href="/contact" className="btn-ghost group">
                  Let's build this together <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {pi < pillars.length - 1 && <div className="divider mt-16" />}
            </div>
          </section>
        )
      })}

      {/* ── BOTTOM CTA ── */}
      <section className="py-24 bg-[#0e0e0e] border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-6">
            See exactly what we'd<br />
            <span className="text-gradient">build for your business.</span>
          </h2>
          <p className="text-white/50 text-lg mb-10">Schedule a solutions call and we'll map the specific systems your business needs — with zero obligation.</p>
          <Link href="/contact" className="btn-primary group text-base py-4 px-8">
            Schedule a Solutions Call
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
