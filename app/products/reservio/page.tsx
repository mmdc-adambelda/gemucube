import type { Metadata } from 'next'
import ProductLandingPage from '@/components/sections/ProductLandingPage'

export const metadata: Metadata = {
  title: 'Reservio — Booking & Reservation System | GemuCube Solutions',
  description: 'Automated booking and reservation system for hotels, spas, clinics, and consultation firms. Schedule management, revenue reports, and multi-property support.',
}

export default function ReservioPage() {
  return (
    <ProductLandingPage
      name="Reservio"
      tagline="Every booking. Every peso. Tracked."
      description="Automated booking and reservation platform with intelligent schedule management, revenue tracking, and multi-property support — for hospitality, wellness, healthcare, and professional services."
      icon="📅"
      accentColor="#F59E0B"
      badge="Multi-Industry · SaaS"
      heroHeadline="Reservations automated."
      heroHeadlineAccent="Revenue visible."
      overview="Reservio is a full-featured booking and reservation management system that handles the entire customer journey — from online booking to check-out and revenue reporting. Built for businesses where time is inventory: hotels, resorts, spas, clinics, law firms, and consultation offices. Reservio replaces manual booking logs, phone-call confirmations, and spreadsheet calendars with a real-time, self-service system that works around the clock."
      features={[
        { icon: "🌐", title: "Online Booking Portal", description: "Customers book services or rooms online 24/7. Real-time availability, instant confirmation emails, and branded booking pages." },
        { icon: "📆", title: "Intelligent Schedule Management", description: "Visual calendar for managing bookings across staff, rooms, or services. Drag-and-drop rescheduling and conflict detection." },
        { icon: "💰", title: "Revenue & Financial Reports", description: "Daily, weekly, and monthly revenue reports. Booking volume analytics, average revenue per booking, and cancellation rate tracking." },
        { icon: "🔔", title: "Automated Reminders", description: "SMS and email reminders sent to customers before their booking — reducing no-shows by up to 40%." },
        { icon: "🏨", title: "Multi-Property / Multi-Branch", description: "Manage bookings across multiple locations, rooms, or service providers from a single admin dashboard." },
        { icon: "💳", title: "Payment Integration", description: "Online payment collection via GCash, Maya, credit card, and bank transfer. Deposit collection and refund management included." },
      ]}
      useCases={[
        { industry: "Hotels & Resorts", description: "Room inventory management, check-in/check-out tracking, rate management, and occupancy rate reporting." },
        { industry: "Massage & Spa / Wellness", description: "Therapist scheduling, service menu management, package bookings, and membership management." },
        { industry: "Medical & Dental Clinics", description: "Doctor-specific appointment slots, consultation type management, and patient flow coordination." },
        { industry: "Law Firms & Consultancies", description: "Lawyer/consultant availability booking, consultation type billing, and client intake scheduling." },
        { industry: "Event Venues & Function Halls", description: "Multi-space booking, event layout configuration, catering add-ons, and full-day block reservations." },
        { industry: "Coworking Spaces & Offices", description: "Hot desk and meeting room booking, access control integration, and hourly billing management." },
      ]}
      benefits={[
        { metric: "40%", label: "Fewer no-shows", detail: "Automated SMS and email reminders sent 24 hours and 1 hour before each appointment significantly reduce cancellations." },
        { metric: "24/7", label: "Bookings without staff", detail: "Your online booking portal captures reservations at any hour — even while your team is off-duty." },
        { metric: "100%", label: "Revenue visibility", detail: "Every peso booked, paid, and refunded is tracked in real-time with detailed financial reports." },
      ]}
      whyGemucube={[
        "Built for Philippine business contexts, including GCash and Maya payment integration — not a white-label foreign SaaS tool.",
        "Configurable for any service-based business: we have deployed booking systems for clinics, spas, law offices, and resort properties.",
        "Full customization of booking rules, pricing, service menus, and business logic — not limited by a fixed SaaS template.",
        "Direct integration with CliniCore (EMR) for healthcare clients who need both patient records and appointment booking in one system.",
        "Adam and Renz manage onboarding personally — your team is trained and operational within the agreed implementation timeline.",
      ]}
    />
  )
}
