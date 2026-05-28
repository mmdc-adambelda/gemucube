import type { Metadata } from 'next'
import ProductLandingPage from '@/components/sections/ProductLandingPage'

export const metadata: Metadata = {
  title: 'LearnFlow — Learning Management System with AI Chatbot | GemuCube Solutions',
  description: 'LMS with student portal, online classes, assignments, AI chatbot assistant, attendance tracking, and academic management for schools, training centers, and corporate learning.',
}

export default function LearnFlowPage() {
  return (
    <ProductLandingPage
      name="LearnFlow"
      tagline="Education, elevated by AI."
      description="A modern learning management system with student portal, live and recorded classes, assignment management, AI chatbot assistant, and academic analytics — for schools, training centers, and corporate L&D programs."
      icon="🎓"
      accentColor="#EC4899"
      badge="AI-Powered · EduTech"
      heroHeadline="Learning that works"
      heroHeadlineAccent="for every student."
      overview="LearnFlow is a comprehensive learning management system designed for the full academic lifecycle — from course creation and online class delivery to assignment submission, grading, attendance tracking, and academic reporting. The built-in AI chatbot provides students with instant answers to course questions and administrative inquiries, reducing teacher workload while improving student engagement."
      features={[
        { icon: "🎓", title: "Student Portal", description: "Personalized student dashboard showing enrolled courses, pending assignments, grades, schedule, and announcements — mobile-friendly." },
        { icon: "🎥", title: "Live & Recorded Classes", description: "Host live video sessions directly in LearnFlow or link Google Meet/Zoom. Record and archive all sessions for student review." },
        { icon: "📝", title: "Assignment & Quiz Management", description: "Create, distribute, and grade assignments and quizzes. Support for file submissions, multiple choice, essays, and auto-grading." },
        { icon: "🤖", title: "AI Chatbot Assistant", description: "Students ask the AI chatbot for course explanations, deadline reminders, administrative help, and study guidance — available 24/7." },
        { icon: "✅", title: "Attendance Tracking", description: "Automated attendance recording for live sessions. Manual and QR-code attendance for in-person classes. Attendance analytics per student." },
        { icon: "📊", title: "Academic Analytics", description: "Grade book, GPA computation, class performance reports, at-risk student flagging, and instructor effectiveness dashboards." },
      ]}
      useCases={[
        { industry: "K-12 Schools", description: "Blended and fully online learning, parent portal access, class management, and student grade reporting." },
        { industry: "Colleges & Universities", description: "Course enrollment, credit unit management, thesis tracking, and faculty performance monitoring." },
        { industry: "Vocational & Technical Training", description: "Skills-based module delivery, certification tracking, and assessment-based completion certificates." },
        { industry: "Corporate Learning & Development", description: "Employee onboarding training, compliance training tracking, skills development programs, and completion certificates." },
        { industry: "Review & Tutorial Centers", description: "Subject-specific course libraries, mock exam delivery, performance analytics, and parent-student progress sharing." },
        { industry: "Government Training Programs", description: "Agency-specific training delivery, completion reporting, and civil service learning record management." },
      ]}
      benefits={[
        { metric: "60%", label: "Reduction in admin workload", detail: "AI chatbot handles repetitive student inquiries; automated grading and attendance reduce manual teacher tasks." },
        { metric: "3x", label: "Faster course delivery", detail: "Pre-built course templates and bulk content upload mean new programs go live in days, not weeks." },
        { metric: "100%", label: "Learner progress visibility", detail: "Real-time dashboards give administrators, teachers, and parents full visibility into each student's academic progress." },
      ]}
      whyGemucube={[
        "LearnFlow is built for Philippine educational institutions — CHED, DepEd, and TESDA compliance considerations are part of the design.",
        "The AI chatbot is trained on your course content and institutional policies — not a generic AI assistant.",
        "Supports blended, online-only, and in-person hybrid learning models in a single deployment.",
        "Scalable from a 10-student tutorial center to a 10,000-student university — same platform, right-sized architecture.",
        "Full white-label capability: launch LearnFlow under your institution's brand with your domain and logo.",
      ]}
    />
  )
}
