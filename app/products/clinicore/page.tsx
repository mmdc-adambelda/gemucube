import type { Metadata } from 'next'
import ProductLandingPage from '@/components/sections/ProductLandingPage'

export const metadata: Metadata = {
  title: 'CliniCore — Electronic Medical Records for Clinics | GemuCube Solutions',
  description: 'Multi-clinic EMR/EHR system for dental, veterinary, and medical practices with AI assistant, appointment scheduling, and patient management.',
}

export default function CliniCorePage() {
  return (
    <ProductLandingPage
      name="CliniCore"
      tagline="Clinical records, intelligently managed."
      description="A multi-clinic electronic medical record system for dental, veterinary, and medical practices — with AI-powered clinical assistant, appointment scheduling, and prescription management."
      icon="🩺"
      accentColor="#10B981"
      badge="HIPAA-Ready · HealthTech"
      heroHeadline="Every patient record."
      heroHeadlineAccent="Instantly accessible."
      overview="CliniCore is a comprehensive EMR/EHR platform purpose-built for Philippine clinical environments. It supports dental clinics, veterinary practices, general and specialist medical clinics, and multi-location clinic groups — all from a single unified system. With an integrated AI clinical assistant, CliniCore reduces documentation time and helps practitioners focus on patient care."
      features={[
        { icon: "📁", title: "Electronic Medical Records (EMR/EHR)", description: "Complete digital patient records including history, diagnoses, treatments, lab results, X-rays, and progress notes — searchable and audit-ready." },
        { icon: "🤖", title: "AI Clinical Assistant", description: "Suggests diagnoses, auto-drafts clinical notes from voice input, and flags potential drug interactions or allergy conflicts." },
        { icon: "📅", title: "Appointment Scheduling", description: "Online and in-clinic appointment booking with automated SMS/email reminders, waitlist management, and multi-doctor scheduling." },
        { icon: "💊", title: "Prescription & Rx Management", description: "Digital prescription generation, drug formulary lookup, and prescription history tracking per patient." },
        { icon: "🏥", title: "Multi-Clinic Support", description: "Manage multiple clinic branches from one admin panel. Patients can be seen at any location with full record access." },
        { icon: "📊", title: "Clinical Analytics", description: "Patient volume trends, appointment fulfillment rates, revenue per doctor, and treatment outcome dashboards." },
      ]}
      useCases={[
        { industry: "Dental Clinics", description: "Dental chart with tooth mapping, procedure history, treatment plans, and dental X-ray attachment support." },
        { industry: "Veterinary Clinics", description: "Pet patient management with species-specific records, vaccination schedules, and owner contact management." },
        { industry: "General Medical Clinics", description: "SOAP note templates, vital signs tracking, lab request and result management, and referral documentation." },
        { industry: "Specialist Practices", description: "Configurable specialty-specific modules for OB-GYN, pediatrics, dermatology, ophthalmology, and more." },
        { industry: "Multi-Clinic Groups", description: "Centralized patient database across all branches with role-based access control per clinic." },
        { industry: "Telemedicine / Hybrid Clinics", description: "Video consultation integration and remote patient monitoring with full EMR documentation." },
      ]}
      benefits={[
        { metric: "70%", label: "Less documentation time", detail: "AI-assisted note generation and pre-filled templates dramatically reduce the time spent on clinical paperwork." },
        { metric: "0", label: "Lost patient records", detail: "Fully digital, cloud-backed records eliminate the risk of lost, damaged, or misfiled paper charts." },
        { metric: "40%", label: "Fewer missed appointments", detail: "Automated appointment reminders via SMS and email significantly reduce no-show rates." },
      ]}
      whyGemucube={[
        "Experience building HIPAA-compliant health information systems — CliniCore meets Philippine DOH data privacy standards and HIPAA best practices.",
        "Built for the realities of Philippine clinic operations: intermittent internet, multi-specialty workflows, and PhilHealth billing considerations.",
        "Custom specialty modules available for any medical specialty — we build to your clinical workflow, not a generic template.",
        "Direct integration capability with lab systems, pharmacy platforms, and telemedicine tools.",
        "Your patient data is hosted on private, encrypted infrastructure — not shared with third-party health data brokers.",
      ]}
    />
  )
}
