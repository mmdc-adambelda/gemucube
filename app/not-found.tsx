import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="relative pt-[72px] min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 grid-bg" />
      <div className="glow-orb w-[500px] h-[400px] bg-[#FFDB49] opacity-[0.05] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="max-w-2xl mx-auto px-6 text-center relative">
        <p className="font-display text-[120px] sm:text-[180px] text-[#FFDB49] opacity-10 leading-none select-none mb-0">
          404
        </p>
        <div className="-mt-8">
          <h1 className="font-display text-4xl sm:text-5xl text-white mb-4">
            This page doesn't exist.
          </h1>
          <p className="text-white/50 text-lg mb-10 leading-relaxed">
            We build systems that work — but this URL isn't one of them. Let's get you back somewhere useful.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/" className="btn-primary group">
              Back to Home <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="btn-ghost">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
