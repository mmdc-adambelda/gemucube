import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { blogs } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Blog — IT Solutions & Business Guides | GemuCube Solutions Philippines',
  description: 'Practical guides and insights on payroll systems, portal development, business automation, digital marketing, and IT operations for Philippine businesses — written from direct enterprise experience.',
  keywords: [
    'IT blog Philippines',
    'payroll system guide Philippines',
    'business automation blog',
    'digital marketing Philippines blog',
    'IT solutions guide Philippines',
    'CRM implementation guide',
  ],
  openGraph: {
    title: 'Blog — GemuCube Solutions',
    description: 'Practical IT and business operations guides for Philippine businesses.',
    type: 'website',
  },
}

const categoryColors: Record<string, string> = {
  'Payroll Systems': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Portal Development': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  'Business Operations & Automation': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Digital Marketing': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
}

const categories = [...new Set(blogs.map((b) => b.category))]

export default function BlogsPage() {
  const featured = blogs[0]
  const rest = blogs.slice(1)

  return (
    <div className="relative pt-[72px]">

      {/* ── HERO ── */}
      <section className="section-pad relative overflow-hidden grid-bg noise">
        <div className="glow-orb w-[500px] h-[400px] bg-[#FFDB49] opacity-[0.04] -top-20 left-1/3" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <p className="eyebrow mb-6">Insights & Guides</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.05] mb-8 max-w-4xl">
            No theory.<br />
            <span className="text-gradient">Only what we have done.</span>
          </h1>
          <p className="text-white/55 text-xl max-w-2xl leading-relaxed mb-10">
            Practical guides on payroll systems, portal development, business automation, digital marketing, and IT operations — written from verified enterprise experience, not textbook knowledge.
          </p>

          {/* Category filter display */}
          <div className="flex flex-wrap gap-3">
            <span className="chip">All Topics</span>
            {categories.map((c) => (
              <span key={c} className={`text-xs px-3 py-1 rounded border font-semibold ${categoryColors[c] || 'bg-white/5 text-white/50 border-white/10'}`}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED POST ── */}
      <section className="pb-0 pt-10">
        <div className="max-w-7xl mx-auto px-6">
          <p className="eyebrow mb-6">Featured Article</p>
          <Link
            href={`/blogs/${featured.slug}`}
            className="glass-card rounded-xl overflow-hidden group grid grid-cols-1 lg:grid-cols-5 hover:border-[rgba(255,219,73,0.2)] transition-all"
          >
            {/* Image */}
            <div className="relative h-64 lg:h-auto lg:col-span-2 overflow-hidden">
              <Image
                src={featured.coverImage}
                alt={featured.coverAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#080808]/50 hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/80 to-transparent lg:hidden" />
            </div>

            {/* Content */}
            <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className={`text-xs px-2 py-0.5 rounded border font-semibold ${categoryColors[featured.category] || ''}`}>
                    {featured.category}
                  </span>
                  <span className="text-white/30 text-xs font-mono flex items-center gap-1.5">
                    <Clock size={10} /> {featured.readTime} min read
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl text-white mb-4 leading-tight group-hover:text-[#FFDB49] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-white/55 leading-relaxed mb-6 text-lg">{featured.excerpt}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[rgba(255,219,73,0.1)] flex items-center justify-center font-display text-xs text-[#FFDB49]">
                    {featured.author.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">{featured.author.split(' ').slice(0, 2).join(' ')}</p>
                    <p className="text-white/30 text-[10px] font-mono">
                      {new Date(featured.publishedAt).toLocaleDateString('en-PH', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </p>
                  </div>
                </div>
                <span className="flex items-center gap-2 text-[#FFDB49] text-sm font-semibold group-hover:gap-3 transition-all">
                  Read article <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── ALL BLOG POSTS ── */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl text-white mb-10">All Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((blog) => (
              <Link
                key={blog.slug}
                href={`/blogs/${blog.slug}`}
                className="glass-card rounded-xl overflow-hidden group flex flex-col hover:border-[rgba(255,219,73,0.15)] transition-all"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={blog.coverImage}
                    alt={blog.coverAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e]/80 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className={`text-[10px] px-2 py-0.5 rounded border font-semibold ${categoryColors[blog.category] || 'bg-white/5 text-white/40 border-white/10'}`}>
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display text-xl text-white mb-3 leading-tight group-hover:text-[#FFDB49] transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed flex-1 mb-5">
                    {blog.excerpt.slice(0, 110)}...
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/[0.06]">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[rgba(255,219,73,0.1)] flex items-center justify-center font-display text-[10px] text-[#FFDB49]">
                        {blog.author.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                      </div>
                      <div>
                        <p className="text-white/60 text-[11px] font-semibold">{blog.author.split(' ').slice(0, 2).join(' ')}</p>
                      </div>
                    </div>
                    <span className="text-white/30 text-xs font-mono flex items-center gap-1">
                      <Clock size={10} /> {blog.readTime} min
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER / CTA ── */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="glass-card rounded-xl p-10 border-[rgba(255,219,73,0.1)] relative overflow-hidden text-center">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#FFDB49] via-[#FFDB49]/50 to-transparent" />
            <p className="eyebrow mb-4">Ready to go further?</p>
            <h2 className="font-display text-3xl sm:text-4xl text-white mb-4">
              The guides are free.<br />
              <span className="text-gradient">The implementation is where we come in.</span>
            </h2>
            <p className="text-white/50 mb-8 max-w-xl mx-auto leading-relaxed">
              Every article on this blog is drawn from a real engagement. If your business needs any of this built — payroll systems, portals, automation, or digital marketing infrastructure — let us talk.
            </p>
            <Link href="/contact" className="btn-primary group text-base py-4 px-8">
              Start a Partnership
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
