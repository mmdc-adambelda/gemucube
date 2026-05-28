'use client'

import { useState } from 'react'
import { Mail, Phone, Linkedin } from 'lucide-react'

interface TeamMember {
  id: string
  image: string | null
  initials: string
  name: string | null
  role: string
  bio: string | null
  email: string | null
  phone: string | null
  linkedin: string | null
  tags: string[]
  available: boolean
}

export default function TeamCard({ member }: { member: TeamMember }) {
  const [imgErrored, setImgErrored] = useState(false)

  /* ── Coming Soon card ─────────────────────────────────────────────────── */
  if (!member.available) {
    return (
      <div className="glass-card rounded-xl overflow-hidden relative flex flex-col border-dashed border-white/[0.06]">
        <div className="aspect-square bg-[#0a0a0a] flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full border-2 border-dashed border-white/10 flex items-center justify-center mx-auto mb-3">
              <span className="text-white/20 text-2xl">+</span>
            </div>
            <p className="text-white/20 text-xs font-mono">Photo coming soon</p>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="h-6 w-32 bg-white/[0.04] rounded mb-2" />
          <p className="text-[#FFDB49]/40 text-xs font-mono tracking-widest uppercase mb-4">{member.role}</p>
          <div className="space-y-2 flex-1">
            <div className="h-3 bg-white/[0.03] rounded w-full" />
            <div className="h-3 bg-white/[0.03] rounded w-4/5" />
            <div className="h-3 bg-white/[0.03] rounded w-3/5" />
          </div>
          <div className="mt-5 pt-4 border-t border-white/[0.04]">
            <span className="chip text-[10px]">Coming Soon</span>
          </div>
        </div>
      </div>
    )
  }

  /* ── Active member card ───────────────────────────────────────────────── */
  return (
    <div className="glass-card rounded-xl overflow-hidden group relative flex flex-col">
      {/* Top hover accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFDB49] via-[#FFDB49]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10" />

      {/* Photo */}
      <div className="relative aspect-square bg-[#111] overflow-hidden">

        {/* Only show initials when image has failed to load */}
        {imgErrored && (
          <div className="absolute inset-0 flex items-center justify-center bg-[rgba(255,219,73,0.04)]">
            <span className="font-display text-5xl text-[#FFDB49]/30">{member.initials}</span>
          </div>
        )}

        {/* Photo — renders on top, no background bleed-through */}
        {member.image && !imgErrored && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={member.image}
            alt={member.name ?? member.role}
            className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
            onError={() => setImgErrored(true)}
          />
        )}

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#0e0e0e] to-transparent" />
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl text-white mb-1">{member.name}</h3>
        <p className="text-[#FFDB49] text-xs font-mono tracking-widest uppercase mb-4">{member.role}</p>
        <p className="text-white/45 text-sm leading-relaxed mb-5 flex-1">{member.bio}</p>

        {member.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {member.tags.map(tag => (
              <span
                key={tag}
                className="text-[10px] px-2 py-0.5 bg-white/[0.04] border border-white/[0.07] rounded text-white/40"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Contact links */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              className="text-white/30 hover:text-[#FFDB49] transition-colors"
              aria-label={`Email ${member.name}`}
            >
              <Mail size={15} />
            </a>
          )}
          {member.phone && (
            <a
              href={`tel:${member.phone.replace(/\s/g, '')}`}
              className="text-white/30 hover:text-[#FFDB49] transition-colors"
              aria-label={`Call ${member.name}`}
            >
              <Phone size={15} />
            </a>
          )}
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-[#FFDB49] transition-colors"
              aria-label={`${member.name} on LinkedIn`}
            >
              <Linkedin size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
