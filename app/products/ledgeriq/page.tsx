import type { Metadata } from 'next'
import ProductLandingPage from '@/components/sections/ProductLandingPage'

export const metadata: Metadata = {
  title: 'LedgerIQ — Modern Accounting & Ledger for SMEs | GemuCube Solutions',
  description: 'Digital ledger and accounting platform with expense tracking, financial reports, and analytics dashboard — built for Philippine SMEs, startups, and growing businesses.',
}

export default function LedgerIQPage() {
  return (
    <ProductLandingPage
      name="LedgerIQ"
      tagline="Modern accounting for modern businesses."
      description="A digital ledger and accounting platform with expense tracking, financial reports, and analytics dashboard — built for Philippine SMEs that have outgrown spreadsheets but do not need enterprise ERP complexity."
      icon="📊"
      accentColor="#14B8A6"
      badge="SME-Ready · FinTech"
      heroHeadline="Your finances,"
      heroHeadlineAccent="finally clear."
      overview="LedgerIQ is a modern, cloud-based accounting and financial management platform designed for the operational realities of Philippine SMEs. It replaces manual ledger books, disconnected spreadsheets, and expensive legacy accounting software with a clean, intuitive platform that gives business owners real-time visibility into their finances — without needing an accounting degree to operate it."
      features={[
        { icon: "📒", title: "Digital Ledger & Chart of Accounts", description: "Full double-entry bookkeeping with a customizable chart of accounts — assets, liabilities, equity, income, and expenses — all in a clean digital interface." },
        { icon: "💸", title: "Expense & Income Tracking", description: "Log every transaction with category tagging, receipt attachment, and vendor management. Bank reconciliation with imported bank statements." },
        { icon: "📈", title: "Financial Reports", description: "Income statement, balance sheet, cash flow statement, trial balance, and general ledger — generated on-demand or scheduled for delivery." },
        { icon: "📊", title: "Analytics Dashboard", description: "Visual financial overview: revenue trends, expense breakdown, profit margins, and cash position at a glance." },
        { icon: "🧾", title: "Invoice & Billing", description: "Create and send professional invoices to clients, track payment status, and manage accounts receivable aging reports." },
        { icon: "🏛", title: "BIR Tax Compliance", description: "Philippine BIR-ready: VAT computation, ORs and invoices in BIR format, withholding tax tracking, and annual ITR-ready reports." },
      ]}
      useCases={[
        { industry: "Retail & E-Commerce", description: "Sales reconciliation, COGS tracking, inventory costing, and multi-channel revenue consolidation." },
        { industry: "Professional Services", description: "Project-based billing, retainer invoicing, professional fee tracking, and client accounts receivable management." },
        { industry: "Restaurants & Food Service", description: "Daily sales recording, ingredient cost tracking, supplier payment management, and margin analysis." },
        { industry: "Construction & Contracting", description: "Project cost accounting, progress billing, subcontractor payment tracking, and materials expense management." },
        { industry: "Startups & Tech Companies", description: "Investor-ready financial statements, burn rate tracking, runway calculations, and cap table-linked equity accounting." },
        { industry: "Healthcare & Clinics", description: "Patient billing reconciliation, supply expense tracking, insurance reimbursement monitoring, and clinic revenue analytics." },
      ]}
      benefits={[
        { metric: "5 hrs", label: "Saved per month on bookkeeping", detail: "Automated categorization, bank import, and report generation eliminate hours of manual encoding every month." },
        { metric: "Real-time", label: "Financial visibility", detail: "Business owners see their exact cash position, revenue, and expenses at any moment — not just at month-end." },
        { metric: "100%", label: "BIR-ready reporting", detail: "All financial reports are structured for Philippine BIR compliance, reducing the stress of tax season." },
      ]}
      whyGemucube={[
        "Built for Philippine tax and accounting standards — BIR-compliant report formats, VAT computation, and withholding tax tracking are native features.",
        "Unlike QuickBooks or Xero, LedgerIQ is customized to your chart of accounts, business structure, and reporting requirements.",
        "Integration-ready: connects with PayrollTrack AI for labor cost accounting, Reservio for revenue reconciliation, and Philippine bank statement imports.",
        "We handle the onboarding and chart of accounts setup — your team does not need to configure the system from scratch.",
        "Designed for business owners, not accountants — clean, jargon-minimized interface that anyone can learn in a day.",
      ]}
    />
  )
}
