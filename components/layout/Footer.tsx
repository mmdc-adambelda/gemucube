import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About — Our Story' },
  { href: '/team', label: 'About — The Team' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/products', label: 'Products' },
  { href: '/partnership', label: 'Partnership Models' },
  { href: '/projects', label: 'Projects' },
  { href: '/blogs', label: 'Blog' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/contact', label: 'Contact' },
]

const productLinks = [
  { href: '/products/payrolltrack-ai', label: 'PayrollTrack AI' },
  { href: '/products/clinicore', label: 'CliniCore' },
  { href: '/products/nexuslink', label: 'NexusLink' },
  { href: '/products/reservio', label: 'Reservio' },
  { href: '/products/learnflow', label: 'LearnFlow' },
  { href: '/products/ledgeriq', label: 'LedgerIQ' },
]

const services = [
  'Business Infrastructure & Scaling',
  'Systems & Automation Engineering',
  'Digital Growth Infrastructure',
  'Managed IT & Support Operations',
  'Embedded Partnership Model',
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#080808]">
      {/* Yellow top accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FFDB49] to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image src="/assets/logo.png" alt="GemuCube Solutions" width={44} height={44} className="rounded-sm" />
              <div>
                <p className="font-display text-white text-lg leading-tight">GemuCube</p>
                <p className="text-[10px] text-white/40 tracking-widest uppercase font-mono">Solutions</p>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Business & IT Partnership Firm. We build with you — not for you.
            </p>
            <p className="text-white/30 text-xs leading-relaxed">
              We don't work for you. We build with you. Every engagement involves direct access to Adam and Renz — no account managers, no hand-offs.
            </p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <p className="eyebrow mb-5">Navigation</p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-white/50 text-sm hover:text-[#FFDB49] transition-colors flex items-center gap-1 group"
                  >
                    {l.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <p className="eyebrow mb-5">Solutions</p>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <Link
                    href="/solutions"
                    className="text-white/50 text-sm hover:text-[#FFDB49] transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Products */}
          <div>
            <p className="eyebrow mb-5">Products</p>
            <ul className="flex flex-col gap-3">
              {productLinks.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-white/50 text-sm hover:text-[#FFDB49] transition-colors flex items-center gap-1 group"
                  >
                    {p.label}
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/products" className="text-[#FFDB49] text-xs font-mono hover:underline">
                  View all →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5 — Contact */}
          <div>
            <p className="eyebrow mb-5">Direct Contact</p>
            <div className="space-y-6">
              {/* Adam */}
              <div>
                <p className="text-white text-sm font-semibold mb-2">Adam Raymond Belda</p>
                <p className="text-white/40 text-xs mb-3 font-mono">IT Operations Director / Co-Founder</p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:argbelda@gmail.com" className="flex items-center gap-2 text-white/50 text-xs hover:text-[#FFDB49] transition-colors">
                    <Mail size={12} /> argbelda@gmail.com
                  </a>
                  <a href="tel:+639478954125" className="flex items-center gap-2 text-white/50 text-xs hover:text-[#FFDB49] transition-colors">
                    <Phone size={12} /> +63 947 895 4125
                  </a>
                  <a href="https://linkedin.com/in/adambelda" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/50 text-xs hover:text-[#FFDB49] transition-colors">
                    <Linkedin size={12} /> linkedin.com/in/adambelda
                  </a>
                </div>
              </div>
              {/* Renz */}
              <div>
                <p className="text-white text-sm font-semibold mb-2">Renz Gutierrez Belda</p>
                <p className="text-white/40 text-xs mb-3 font-mono">IT Support Specialist / Co-Founder</p>
                <div className="flex flex-col gap-2">
                  <a href="mailto:rgutierrezbelda@gmail.com" className="flex items-center gap-2 text-white/50 text-xs hover:text-[#FFDB49] transition-colors">
                    <Mail size={12} /> rgutierrezbelda@gmail.com
                  </a>
                  <a href="tel:+639605489073" className="flex items-center gap-2 text-white/50 text-xs hover:text-[#FFDB49] transition-colors">
                    <Phone size={12} /> +63 960 5489 073
                  </a>
                </div>
              </div>
              {/* Location */}
              <div className="flex items-start gap-2 text-white/30 text-xs">
                <MapPin size={12} className="mt-0.5 shrink-0" />
                <span>General Trias City, Cavite 4107, Philippines</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider mt-16 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-white/25 text-xs">
          <p>© {new Date().getFullYear()} GemuCube Solutions · General Trias City, Cavite 4107, Philippines</p>
          <p className="font-mono">We Don't Work For You. We Build With You.</p>
        </div>
      </div>
    </footer>
  )
}
