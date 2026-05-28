'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/team', label: 'Team' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/products', label: 'Products' },
  { href: '/partnership', label: 'Partnership' },
  { href: '/projects', label: 'Projects' },
  { href: '/blogs', label: 'Blog' },
  { href: '/case-studies', label: 'Case Studies' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(8,8,8,0.85)] backdrop-blur-xl border-b border-white/[0.06] shadow-[0_4px_32px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
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

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {links.map((l) => {
            const active = pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href))
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-2 text-[13px] font-medium rounded-sm transition-all ${
                  active
                    ? 'text-[#FFDB49]'
                    : 'text-white/60 hover:text-white/90'
                }`}
              >
                {l.label}
                {active && (
                  <div className="h-[2px] bg-[#FFDB49] mt-0.5 rounded-full" />
                )}
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact" className="btn-primary text-sm py-2.5 px-5">
            Start a Partnership
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          open ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        } bg-[rgba(8,8,8,0.95)] backdrop-blur-xl border-b border-white/[0.06]`}
      >
        <nav className="px-6 py-6 flex flex-col gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`py-3 text-[15px] font-medium border-b border-white/[0.05] ${
                pathname === l.href || (l.href !== '/' && pathname.startsWith(l.href))
                  ? 'text-[#FFDB49]'
                  : 'text-white/70'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 justify-center"
          >
            Start a Partnership
          </Link>
        </nav>
      </div>
    </header>
  )
}
