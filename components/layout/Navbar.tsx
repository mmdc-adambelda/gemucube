'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, Users, BookOpen } from 'lucide-react'

// ── Nav structure ─────────────────────────────────────────────────────────────
// Items with `children` render as a hover dropdown on desktop,
// tap-to-expand accordion on mobile.
const links = [
  { href: '/', label: 'Home' },
  {
    href: '/about',
    label: 'About',
    children: [
      { href: '/about', label: 'Our Story', icon: BookOpen, desc: 'Mission, values & history' },
      { href: '/team',  label: 'The Team',  icon: Users,    desc: 'Meet the people behind GemuCube' },
    ],
  },
  { href: '/solutions',   label: 'Solutions'   },
  { href: '/products',    label: 'Products'    },
  { href: '/partnership', label: 'Partnership' },
  { href: '/projects',    label: 'Projects'    },
  { href: '/blogs',       label: 'Blog'        },
  { href: '/case-studies',label: 'Case Studies'},
]

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false)
  const [mobileOpen,   setMobileOpen]   = useState(false)
  const [aboutOpen,    setAboutOpen]    = useState(false)   // desktop dropdown
  const [mobileAbout,  setMobileAbout]  = useState(false)   // mobile accordion
  const pathname  = usePathname()
  const dropRef   = useRef<HTMLDivElement>(null)

  // scroll shadow
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setAboutOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setMobileAbout(false)
    setAboutOpen(false)
  }, [pathname])

  const isAboutActive = pathname.startsWith('/about') || pathname.startsWith('/team')

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(8,8,8,0.85)] backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_32px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/assets/logo.png"
            alt="GemuCube Solutions"
            width={40}
            height={40}
            className="rounded-sm"
          />
          <div className="hidden sm:block">
            <p className="font-display text-[15px] leading-tight text-white group-hover:text-[#FFDB49] transition-colors">
              GemuCube
            </p>
            <p className="text-[10px] text-white/40 tracking-widest uppercase font-mono">
              Solutions
            </p>
          </div>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => {
            if (l.children) {
              // ── Dropdown item ──
              return (
                <div
                  key={l.href}
                  ref={dropRef}
                  className="relative"
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 px-3 py-2 text-[13px] font-medium rounded-sm transition-all ${
                      isAboutActive ? 'text-[#FFDB49]' : 'text-white/60 hover:text-white/90'
                    }`}
                  >
                    {l.label}
                    <ChevronDown
                      size={13}
                      className={`transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {/* Active underline */}
                  {isAboutActive && (
                    <div className="h-[2px] bg-[#FFDB49] mt-0.5 rounded-full mx-3" />
                  )}

                  {/* Dropdown panel */}
                  <div
                    className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                      aboutOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
                    }`}
                  >
                    <div className="w-56 rounded-lg border border-white/[0.08] bg-[rgba(8,8,8,0.96)] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden">
                      {/* Top accent */}
                      <div className="h-[2px] bg-gradient-to-r from-[#FFDB49] via-[#FFDB49]/40 to-transparent" />
                      <div className="p-1.5">
                        {l.children.map((child) => {
                          const Icon = child.icon
                          const childActive = pathname === child.href
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`flex items-start gap-3 px-3 py-2.5 rounded-sm transition-all group/item ${
                                childActive
                                  ? 'bg-[rgba(255,219,73,0.08)] text-[#FFDB49]'
                                  : 'text-white/70 hover:bg-white/[0.05] hover:text-white'
                              }`}
                            >
                              <div className={`mt-0.5 shrink-0 transition-colors ${
                                childActive ? 'text-[#FFDB49]' : 'text-white/30 group-hover/item:text-[#FFDB49]'
                              }`}>
                                <Icon size={14} />
                              </div>
                              <div>
                                <p className="text-[13px] font-medium leading-tight">{child.label}</p>
                                <p className="text-[11px] text-white/35 mt-0.5 leading-tight">{child.desc}</p>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )
            }

            // ── Regular link ──
            const active = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href))
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-2 text-[13px] font-medium rounded-sm transition-all ${
                  active ? 'text-[#FFDB49]' : 'text-white/60 hover:text-white/90'
                }`}
              >
                {l.label}
                {active && <div className="h-[2px] bg-[#FFDB49] mt-0.5 rounded-full" />}
              </Link>
            )
          })}
        </nav>

        {/* ── CTA ── */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
            Start a Partnership
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="lg:hidden text-white/70 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0'
        } bg-[rgba(8,8,8,0.95)] backdrop-blur-xl border-b border-white/[0.06]`}
      >
        <nav className="px-6 py-6 flex flex-col gap-1">
          {links.map((l) => {
            if (l.children) {
              // ── Mobile accordion for About ──
              return (
                <div key={l.href}>
                  <button
                    onClick={() => setMobileAbout(!mobileAbout)}
                    className={`w-full flex items-center justify-between py-3 text-[15px] font-medium border-b border-white/[0.05] ${
                      isAboutActive ? 'text-[#FFDB49]' : 'text-white/70'
                    }`}
                  >
                    {l.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 text-white/40 ${mobileAbout ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileAbout ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {l.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-3 py-2.5 pl-4 text-[14px] border-b border-white/[0.04] ${
                          pathname === child.href ? 'text-[#FFDB49]' : 'text-white/50 hover:text-white/80'
                        }`}
                      >
                        <child.icon size={13} className="shrink-0 text-white/30" />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            }

            const active = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href))
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className={`py-3 text-[15px] font-medium border-b border-white/[0.05] ${
                  active ? 'text-[#FFDB49]' : 'text-white/70'
                }`}
              >
                {l.label}
              </Link>
            )
          })}

          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary mt-4 justify-center"
          >
            Start a Partnership
          </Link>
        </nav>
      </div>
    </header>
  )
}
