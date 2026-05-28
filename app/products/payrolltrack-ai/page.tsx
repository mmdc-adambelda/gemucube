import type { Metadata } from 'next'
import ProductLandingPage from '@/components/sections/ProductLandingPage'

export const metadata: Metadata = {
  title: 'PayrollTrack AI — Automated Payroll & Attendance | GemuCube Solutions',
  description: 'AI-powered face recognition attendance and fully automated payroll processing built for Philippine labor law compliance.',
}

export default function PayrollTrackPage() {
  return (
    <ProductLandingPage
      name="PayrollTrack AI"
      tagline="Attendance automated. Payroll done."
      description="AI-powered face recognition attendance and fully automated payroll processing — built for Philippine labor law compliance and multi-department workforce management."
      icon="⏱"
      accentColor="#3B82F6"
      badge="AI-Powered · HR Tech"
      heroHeadline="Stop computing payroll"
      heroHeadlineAccent="by hand."
      overview="PayrollTrack AI is an end-to-end workforce management platform combining biometric face recognition attendance with automated payroll computation, tax filing compliance, and HR analytics — in a single dashboard. Designed specifically for Philippine businesses with DOLE, BIR, SSS, PhilHealth, and Pag-IBIG compliance built in. Say goodbye to spreadsheet payroll and manual timekeeping forever."
      features={[
        { icon: "🤖", title: "AI Face Recognition Attendance", description: "Employees clock in and out via facial recognition — no punch cards, no buddy punching. Works on standard webcams and IP cameras." },
        { icon: "💰", title: "Automated Payroll Computation", description: "Automatically calculates basic pay, overtime, holidays, night differentials, deductions, and net pay based on Philippine labor standards." },
        { icon: "📋", title: "Government Compliance Engine", description: "Built-in SSS, PhilHealth, Pag-IBIG, and BIR withholding tax computation. Generates monthly and annual government contribution reports." },
        { icon: "🕐", title: "Flexible Scheduling", description: "Support for shifting schedules, compressed workweeks, flexi-time, and field employee tracking across multiple branches." },
        { icon: "📊", title: "HR Analytics Dashboard", description: "Real-time workforce analytics: absenteeism rates, overtime trends, department headcount costs, and productivity metrics." },
        { icon: "📱", title: "Employee Self-Service Portal", description: "Employees view payslips, apply for leaves, check attendance records, and raise concerns — from a mobile-friendly portal." },
      ]}
      useCases={[
        { industry: "Manufacturing & Production", description: "Multi-shift scheduling, shop floor headcount, overtime management, and 13th month pay automation." },
        { industry: "BPO & Call Centers", description: "Night differential computation, agent scheduling, and performance-linked bonus computation." },
        { industry: "Retail & Restaurants", description: "Multi-branch employee tracking, part-time and casual worker management, and daily attendance reports." },
        { industry: "Corporate / Professional Services", description: "Office-based payroll with leave management, manager approval workflows, and audit-ready payroll records." },
        { industry: "Hospitals & Clinics", description: "Nurse and doctor scheduling, duty rotation, and healthcare industry-specific allowances." },
        { industry: "Construction & Contracting", description: "Project-based workforce billing, site attendance tracking, and sub-contractor payment management." },
      ]}
      benefits={[
        { metric: "90%", label: "Reduction in payroll errors", detail: "Automated computation eliminates manual calculation mistakes that cost businesses thousands per pay cycle." },
        { metric: "12 hrs", label: "Saved per payroll cycle", detail: "HR managers reclaim an average of 12 hours per semi-monthly pay period previously spent on manual encoding." },
        { metric: "100%", label: "Philippine compliance coverage", detail: "SSS, PhilHealth, Pag-IBIG, BIR withholding, and DOLE labor standards — all computed automatically." },
      ]}
      whyGemucube={[
        "Built by a team with enterprise-grade HR systems experience across SAP Philippines and Emapta — we understand Philippine payroll inside out.",
        "Unlike generic SaaS payroll tools, PayrollTrack AI is customized to your exact pay structure, schedule rules, and organizational hierarchy.",
        "We integrate with your existing tools: accounting software, HRM platforms, biometric hardware, and bank disbursement APIs.",
        "Direct support from Adam and Renz — no tiered support queues, no 5-business-day response times.",
        "Deployed on your infrastructure or private cloud — your employee data never lives on shared servers.",
      ]}
    />
  )
}
