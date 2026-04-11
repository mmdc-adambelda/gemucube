import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, TrendingUp, Clock, CheckCircle, Layers } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Case Studies — Real Work, Real Results',
  description: 'Real case studies from GemuCube Solutions — HIPAA-compliant onboarding systems, IT operations transformation, CRM implementation, and more.',
}

const studies = [
  {
    slug: 'medva-hipaa-onboarding',
    client: 'MEDVA / Deel PH EOR Services',
    industry: 'Healthcare Staffing (U.S.A.)',
    model: 'Fractional Leadership',
    pillar: 'Business Infrastructure',
    founder: 'Adam Raymond Belda',
    period: 'Sept 2024 – Jan 2026',
    challenge: 'MEDVA was onboarding staff for U.S. healthcare clients without a documented IT procedure, formal access control policy, or HIPAA-specific controls. Credentials were delivered via unencrypted email. There was no access revocation procedure and no audit trail for compliance reporting.',
    built: ['12-step ISO & HIPAA-compliant IT onboarding procedure', 'Encrypted BYOD environment: Azure AD Conditional Access, Intune MDM, WireGuard VPN', 'Role-based access matrix — clinical staff vs. administrative staff', 'LastPass Teams with role-specific vaults', 'SharePoint audit log with timestamps and approver identity', 'Automated offboarding: Zapier workflow — Azure AD suspension + LastPass revocation in 15 minutes'],
    outcomes: ['Time-to-productivity: 4.5 days → under 6 hours', 'First HIPAA compliance review: zero access-control findings', 'Zero credential-related security incidents in 16 months', 'Compliance summary documents closed deals previously stalled on compliance questions', 'Offboarding time: undefined → 15 minutes (automated)'],
    stack: 'Microsoft 365 · Azure AD / Entra ID · Microsoft Intune · WireGuard VPN · LastPass Teams · SharePoint Online · Zapier',
  },
  {
    slug: 'nxtgen-it-transformation',
    client: 'NXTGEN Industries',
    industry: 'IT & Business Services (Melbourne, Australia)',
    model: 'Fractional Leadership',
    pillar: 'Managed IT',
    founder: 'Adam Belda + Renz Gutierrez Belda',
    period: 'Nov 2022 – Jul 2024',
    challenge: 'NXTGEN had no formal IT structure. Tickets were managed via email and Slack, there were no documented SLAs, and the IT team had no escalation path. The average time from problem occurrence to IT team awareness was 4.2 hours.',
    built: ['IT operations function established from zero — team structure, hiring, training', 'JIRA Service Management deployed: P1–P4 priority tiers, SLA clocks, automation rules', 'P1–P4 SLA framework with biweekly performance reviews', 'BYOD security: Azure AD Conditional Access + WireGuard VPN for Philippine team', 'Confluence IT knowledge base: 47 documented procedures', 'Full system audit: 23 infrastructure gaps identified and resolved in 6 months'],
    outcomes: ['P1 response time: undefined → under 15 minutes', 'SLA compliance (P2/P3): 94% within first 90 days', 'Knowledge base reduced onboarding support load by ~60%', 'Zero critical infrastructure incidents in year one', 'IT function operated sustainably without founders by month 8'],
    stack: 'JIRA Service Management · Azure AD · WireGuard VPN · Microsoft Intune · Confluence · M365 · TeamViewer · Zapier',
  },
  {
    slug: 'sap-lms-stabilization',
    client: 'SAP Philippines',
    industry: 'Enterprise Software (Learning Management)',
    model: 'Project-Based',
    pillar: 'Systems & Automation',
    founder: 'Adam Raymond Belda',
    period: 'Jun 2020 – Oct 2021',
    challenge: 'SAP Philippines\' LMS had a backlog of complex escalated issues — SCORM content playback failures, database integrity issues affecting learner completion records, and HTML/CSS/JavaScript defects the development team had deferred.',
    built: ['SCORM compliance validation process before any course reached production', 'Database integrity restoration — corrected completion records for 340 affected learners', 'Patched 14 HTML/CSS/JavaScript defects in the LMS UI', 'SPRINT facilitation for the escalation backlog — 2-week delivery cycles', '28 resolution procedures for recurring LMS issue types'],
    outcomes: ['SCORM validation: zero production playback failures in 6 months post-deployment', '340 learners received verifiable completion records for regulatory/employment purposes', 'Ticket age in escalation queue: 11 days → 3.2 days', 'Resolution procedure docs reduced senior engineer involvement in known issues by ~70%'],
    stack: 'SAP LMS · HTML · JavaScript · SCORM 1.2 / 2004 · SQL · SCRUM / SPRINT',
  },
  {
    slug: 'emapta-cloud-support',
    client: 'Emapta Philippines Inc.',
    industry: 'BPO & Staff Leasing',
    model: 'Fractional Leadership',
    pillar: 'Managed IT',
    founder: 'Adam Raymond Belda',
    period: 'Nov 2021 – Nov 2022',
    challenge: 'Escalated cloud application issues had no defined resolution owner. TMS UI defects were affecting client operations. SSL certificates had expired twice in 6 months without warning. SLA reporting was manual and had no standard format.',
    built: ['Formal escalation ownership model with named senior engineer per issue', 'Prioritized TMS UI defect backlog — 2-sprint remediation cycle', '90-day SSL certificate renewal workflow with automated calendar reminders', 'Biweekly SLA sync-up meetings with standard report format', 'SLA report format adopted as company standard across 6 client accounts'],
    outcomes: ['Zero SSL certificate expiry incidents in 12 months following workflow implementation', 'TMS UI defect backlog: 14 → 3 open items within 45 days', 'SLA report format: adopted as company standard across 6 accounts', 'Escalated issue resolution time: 8.4 days → 2.1 days within 90 days'],
    stack: 'Cloud Application Admin · TMS UI · SSL Certificate Management · ServiceNow · Power BI',
  },
  {
    slug: 'intelegencia-ai-annotation',
    client: 'Intelegencia',
    industry: 'AI / Machine Learning Data Operations',
    model: 'Project-Based',
    pillar: 'Systems & Automation',
    founder: 'Renz Gutierrez Belda',
    period: '2021 – 2022',
    challenge: 'Annotation quality was inconsistent across team members. Quality review was post-annotation, catching defects only after a full batch was complete. Inter-annotator disagreement rate was 18%, causing ML training datasets to be rejected by the engineering team.',
    built: ['Annotation decision tree per content category — documented rules for ambiguous cases', 'Spot-check quality review: 15% of daily output reviewed before batch submission', 'Defect classification system — error type tagging with weekly pattern reports', 'Pre-deployment validation protocol against held-out reference sets'],
    outcomes: ['Inter-annotator disagreement: 18% → 5.8% within 45 days', 'Dataset rejection rate by ML engineering: dropped to zero in 3 months', 'Throughput increased 22% — by eliminating rework, not annotating faster', 'Decision tree adopted as standard onboarding material for new annotators'],
    stack: 'Data Annotation QA Systems · ML Training Data Pipeline · Quality Control Frameworks',
  },
  {
    slug: 'taskus-quality-analysis',
    client: 'TaskUs Inc.',
    industry: 'Content Moderation / BPO',
    model: 'Project-Based',
    pillar: 'Business Infrastructure',
    founder: 'Renz Gutierrez Belda',
    period: '2024 – 2025',
    challenge: 'Content moderation quality at scale has one specific failure mode: policy interpretation inconsistency at the edges. Agent scores were tracked but data wasn\'t driving targeted coaching. Calibration sessions ran 45 minutes and still didn\'t resolve recurring disagreements.',
    built: ['Decision reference log for recurring edge cases — content type, correct interpretation, rationale', 'Quality score tracking by content category and agent — weekly trend reports', 'Pre-shift calibration check for top 3 policy areas generating most disagreement', 'Structured coaching protocol tied to category-level quality data'],
    outcomes: ['Agent quality score variance: reduced by 31% within 60 days', 'Edge case escalation rate: decreased by 24% after decision log deployment', 'Calibration session time: 45 minutes → 18 minutes'],
    stack: 'Content Moderation QA · Quality Analytics · JIRA · Calibration Frameworks',
  },
  {
    slug: 'fractional-cto-startup',
    client: 'Philippines-Based Services Startup (Anonymized)',
    industry: 'Professional Services',
    model: 'Fractional Leadership',
    pillar: 'Embedded Partnership',
    founder: 'Adam Raymond Belda',
    period: '90-day engagement',
    challenge: 'A 12-person services startup was making infrastructure and tooling decisions without a framework — three overlapping subscription tools, two CRM platforms with no integration, no security baseline, and PHP 48,000/month in untracked redundant subscriptions.',
    built: ['Full technology stack audit — every tool, its cost, user count, and integration status', 'CRM data migration and deduplication: 4,200 records → 2,800 clean records', 'Google Workspace Business migration with DLP and MFA for all 12 staff', '12-month technology roadmap in business language for investor presentation'],
    outcomes: ['PHP 48,000/month in redundant subscriptions eliminated within 30 days', 'Single CRM with clean pipeline data — first-ever agreed pipeline visibility', 'All 12 staff on Google Workspace with MFA and DLP within 45 days', '12-month technology roadmap included in Series A preparation materials'],
    stack: 'Zoho One · Google Workspace Business · Bitwarden · Azure AD · Zapier · Google Analytics 4',
  },
  {
    slug: 'zoho-crm-implementation',
    client: 'Philippines-Based Professional Services Firm (Anonymized)',
    industry: 'Professional Services',
    model: 'Project-Based',
    pillar: 'Systems & Automation',
    founder: 'Adam Raymond Belda',
    period: '3-week project',
    challenge: 'All client relationship management was being handled through email threads, a shared Google Sheet, and WhatsApp. Two prospects had been lost in the prior quarter from missed follow-up. The two principals disagreed on how many active deals were in the pipeline.',
    built: ['5-stage Zoho CRM pipeline matching actual sales conversation stages', '127 contacts and 43 historical deals migrated from Google Sheet', 'Automated follow-up: 7-day idle deal in "Proposal Sent" triggers email via Zapier + Gmail', 'Gmail integrated — all client emails auto-logged against contact records', '14-page illustrated handover guide for first 90 days of use'],
    outcomes: ['Zero deals lost to missed follow-up in 90 days post-deployment', '"We both look at the same dashboard now" — first-ever agreed pipeline view', '"Timeline mismatch" identified as primary loss reason — qualification adjusted', '2 client referrals in 90-day period from improved follow-up professionalism'],
    stack: 'Zoho CRM · Zapier · Gmail API · Google Workspace',
  },
  {
    slug: 'it-support-infrastructure',
    client: 'Philippines-Based Remote-First Staffing Business (Anonymized)',
    industry: 'Staffing / HR',
    model: 'Retainer-Based',
    pillar: 'Managed IT',
    founder: 'Renz Gutierrez Belda',
    period: 'Ongoing retainer',
    challenge: '25 staff members. Zero formal IT support structure. All IT requests via Slack DMs, WhatsApp, or verbal requests. No ticketing, no documentation, no SLA, no escalation path. Critical system knowledge left the business every time someone resigned.',
    built: ['Zoho Desk provisioned — all requests to single intake email converting to tickets', 'Slack /ticket slash command for in-channel ticket creation', 'P1–P4 auto-triage rules with keyword-based categorization', 'IT knowledge base: 22 articles in non-technical language within 30 days', 'AnyDesk (privacy mode + session confirmation) + TeamViewer Business (2FA) for remote support', 'Monthly IT report: volume by category, resolution time, knowledge base usage'],
    outcomes: ['First-contact resolution rate: 74% within first 60 days', 'Average P2 ticket resolution: 2.3 hours (below 4-hour SLA target)', 'Zero unresolved tickets older than 5 business days in first 6 months', 'Staff satisfaction: 4.6/5 in post-ticket survey at end of month 3'],
    stack: 'Zoho Desk · AnyDesk · TeamViewer Business · M365 Admin Center · Zapier · Slack Integration',
  },
  {
    slug: 'gemucube-website-portfolio',
    client: 'GemuCube Internal + Client Builds',
    industry: 'Website Development / Digital Growth',
    model: 'Project-Based',
    pillar: 'Digital Growth',
    founder: 'Adam Raymond Belda',
    period: '2018 – Present',
    challenge: 'Seven websites built to a consistent technical and SEO standard — each one targeting a 90+ Lighthouse score on desktop at launch, with RankMath Pro schema markup, GA4 custom conversion events, and Cloudflare CDN delivery.',
    built: ['gemucube.com — primary marketing and conversion site', 'nxtgenindustries.com.au — Australian corporate site with AU-targeted SEO', 'taskproleague.com — gaming and content platform', 'travelwithkarla.com — content blog with AdSense integration', 'karlaniiinz.com — personal brand and portfolio site', 'business.gemucube.com — client portal and resource hub'],
    outcomes: ['90+ Lighthouse performance score on desktop at launch — every property', 'Ranked page 1 for brand terms within 14 days on all new properties', 'Ranked page 2 for "IT partnership firm Philippines" within 60 days of gemucube.com launch', '60–70% average page weight reduction per media library via ShortPixel'],
    stack: 'WordPress · Hello Elementor · Elementor Pro · RankMath Pro · WP Rocket · ShortPixel · Cloudflare · GA4 · GTM',
  },
]

const pillarColors: Record<string, string> = {
  'Business Infrastructure': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Managed IT': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Systems & Automation': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Digital Growth': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'Embedded Partnership': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
}

export default function CaseStudiesPage() {
  return (
    <div className="relative pt-[72px]">

      {/* ── HERO ── */}
      <section className="section-pad relative overflow-hidden grid-bg noise">
        <div className="glow-orb w-[500px] h-[400px] bg-[#FFDB49] opacity-[0.04] -top-20 -right-20" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p className="eyebrow mb-6">Case Studies</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 max-w-4xl">
            We don't just tell you<br />
            what we can do.<br />
            <span className="text-gradient">Here's what we've done.</span>
          </h1>
          <p className="text-white/55 text-xl max-w-2xl leading-relaxed">
            Every case study below comes from verified work completed by Adam or Renz — real clients, real challenges, real outcomes. No anonymized generic examples.
          </p>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            {studies.map((s, i) => (
              <div key={s.slug} className="glass-card rounded-xl overflow-hidden group">
                {/* Header bar */}
                <div className="flex flex-wrap items-center gap-3 px-8 py-5 border-b border-white/[0.06] bg-[rgba(255,255,255,0.01)]">
                  <span className="font-mono text-[#FFDB49] text-xs opacity-50">0{i + 1}</span>
                  <div className="w-px h-4 bg-white/10" />
                  <span className={`text-xs px-2 py-0.5 rounded border font-semibold ${pillarColors[s.pillar] || 'bg-white/5 text-white/40 border-white/10'}`}>
                    {s.pillar}
                  </span>
                  <span className="chip">{s.model}</span>
                  <span className="text-white/30 text-xs font-mono ml-auto hidden sm:block">{s.founder} · {s.period}</span>
                </div>

                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Left */}
                    <div className="lg:col-span-1">
                      <h2 className="font-display text-2xl text-white mb-2">{s.client}</h2>
                      <p className="text-white/40 text-sm font-mono mb-6">{s.industry}</p>

                      <div className="mb-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Layers size={12} className="text-[#FFDB49]" />
                          <p className="eyebrow text-[10px]">The Challenge</p>
                        </div>
                        <p className="text-white/55 text-sm leading-relaxed">{s.challenge}</p>
                      </div>

                      <div className="glass-card rounded-lg p-4 border-[rgba(255,219,73,0.08)]">
                        <p className="eyebrow text-[10px] mb-3">Technology Stack</p>
                        <p className="text-white/40 text-xs leading-relaxed">{s.stack}</p>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {/* Built */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <CheckCircle size={12} className="text-[#FFDB49]" />
                          <p className="eyebrow text-[10px]">What GemuCube Built</p>
                        </div>
                        <ul className="space-y-3">
                          {s.built.map((b) => (
                            <li key={b} className="flex items-start gap-2.5">
                              <div className="w-1 h-1 rounded-full bg-[#FFDB49] mt-2 shrink-0" />
                              <span className="text-white/55 text-sm leading-relaxed">{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Outcomes */}
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <TrendingUp size={12} className="text-[#FFDB49]" />
                          <p className="eyebrow text-[10px]">The Outcome</p>
                        </div>
                        <ul className="space-y-3">
                          {s.outcomes.map((o) => (
                            <li key={o} className="glass-card rounded-md p-3 border-[rgba(255,219,73,0.06)]">
                              <span className="text-white/70 text-sm leading-relaxed">{o}</span>
                            </li>
                          ))}
                        </ul>

                        <Link href="/contact" className="flex items-center gap-2 mt-6 text-[#FFDB49] text-sm font-semibold hover:gap-3 transition-all group/link">
                          Start a similar partnership <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-24 bg-[#0e0e0e] border-t border-white/[0.06]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-6">
            Want results like these<br />
            <span className="text-gradient">for your business?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10">Let's build your case study together.</p>
          <Link href="/contact" className="btn-primary group text-base py-4 px-8">
            Start a Partnership
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
