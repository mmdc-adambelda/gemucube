import type { Metadata } from 'next'
import ProductLandingPage from '@/components/sections/ProductLandingPage'

export const metadata: Metadata = {
  title: 'NexusLink — Community Management Platform | GemuCube Solutions',
  description: 'Private social networking and community management platform for homeowners associations, subdivisions, and organizations.',
}

export default function NexusLinkPage() {
  return (
    <ProductLandingPage
      name="NexusLink"
      tagline="Your community, connected."
      description="A private social networking and community management platform for homeowners associations, subdivisions, alumni groups, and organizations — with feeds, announcements, messaging, and dues management."
      icon="🏘"
      accentColor="#8B5CF6"
      badge="Community Platform"
      heroHeadline="One platform for your"
      heroHeadlineAccent="entire community."
      overview="NexusLink is a private, branded community management application that replaces scattered Facebook groups, email chains, and manual HOA spreadsheets. It gives communities a secure, organized digital home — with social feeds, official announcements, direct messaging, event management, dues tracking, and community governance tools all in one platform."
      features={[
        { icon: "📢", title: "Community Feed & Announcements", description: "Admins post official announcements pinned at top; residents post to a moderated community feed. Priority levels for emergency vs. general notices." },
        { icon: "💬", title: "Direct & Group Messaging", description: "Private resident-to-resident messaging and official admin broadcast channels. Emergency alert push notifications." },
        { icon: "🏠", title: "Homeowner Management", description: "Digital resident directory, unit/lot ownership records, vehicle registration, household members, and gate pass management." },
        { icon: "💳", title: "Dues & Payment Tracking", description: "Monthly dues billing, payment recording, outstanding balance reports, and official receipts — with optional online payment gateway integration." },
        { icon: "📅", title: "Events & Facility Booking", description: "Community event calendar, clubhouse/amenity reservation system, and RSVP management." },
        { icon: "🗳", title: "Community Governance", description: "Digital voting for HOA elections and proposals, meeting minute documentation, and board resolution records." },
      ]}
      useCases={[
        { industry: "Homeowners Associations (HOA)", description: "Complete HOA management: dues collection, rule enforcement, resident communication, and board governance." },
        { industry: "Subdivision Villages", description: "Gate management integration, visitor logs, community security coordination, and neighborhood watch coordination." },
        { industry: "Condominium Corporations", description: "Unit owner management, amenity booking, maintenance requests, and association dues billing." },
        { industry: "Alumni Associations", description: "Member directory, batch grouping, event coordination, and alumni engagement campaigns." },
        { industry: "Corporate Communities", description: "Employee community hubs for internal announcements, team social feeds, and company-wide engagement." },
        { industry: "Religious Organizations", description: "Member management, event coordination, ministry grouping, and community giving tracking." },
      ]}
      benefits={[
        { metric: "80%", label: "Fewer missed announcements", detail: "Push notifications and pinned announcements ensure critical information reaches every resident." },
        { metric: "3x", label: "Faster dues collection", detail: "Digital billing with payment reminders and online payment options accelerates HOA fee collection." },
        { metric: "100%", label: "Audit trail on all records", detail: "Every action — payment, announcement, vote — is logged with timestamps for full governance accountability." },
      ]}
      whyGemucube={[
        "Built specifically for the Philippine HOA and subdivision context — RA 9904 compliance considerations built in.",
        "Private and secure: unlike Facebook groups, your community data stays within your own platform with no ad targeting.",
        "White-label branding available — launch NexusLink under your subdivision or HOA's own name and colors.",
        "Scalable from a 50-unit village to a 2,000-unit township — same platform, right-sized for your community.",
        "Ongoing support from GemuCube directly — not a chatbot ticketing system.",
      ]}
    />
  )
}
