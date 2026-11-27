import { m } from 'framer-motion'
import { BookOpen, ArrowRight, Clock, Wrench, Globe } from 'lucide-react'
import { BLOG_POSTS } from '../data/blogPosts'
import TechBackground from './TechBackground'

const BlogPreview = ({ onNavigate }) => {
  const handleLinkClick = (e, path) => {
    if (!onNavigate) return
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    onNavigate(path)
  }

  return (
    <section
      id="blog"
      aria-labelledby="blog-preview-heading"
      className="section-defer py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      <TechBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Guías Técnicas y Consejos Reales</span>
          </div>
          <h2
            id="blog-preview-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white"
          >
            Blog Técnico <span className="text-gradient">PCStyle</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
            Aprende a cuidar tu computador, identificar fallas a tiempo y potenciar tu negocio con
            guías escritas por nuestros técnicos en Cúcuta
          </p>
        </m.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-10">
          {BLOG_POSTS.map((post, index) => {
            const isWeb = post.category === 'Desarrollo Web'
            return (
              <m.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.06, 0.25) }}
                className="group bg-slate-800/90 border border-slate-700/60 hover:border-blue-500/50 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/15"
              >
                <a
                  href={`/blog/${post.slug}`}
                  onClick={(e) => handleLinkClick(e, `/blog/${post.slug}`)}
                  className="block relative h-44 sm:h-48 overflow-hidden bg-slate-900"
                >
                  <img
                    src={post.coverImage}
                    alt={post.coverAlt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent" />
                  <span
                    className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border ${
                      isWeb
                        ? 'bg-purple-500/20 border-purple-400/40 text-purple-200'
                        : 'bg-blue-500/20 border-blue-400/40 text-blue-200'
                    }`}
                  >
                    {isWeb ? <Globe className="w-3.5 h-3.5" /> : <Wrench className="w-3.5 h-3.5" />}
                    {post.category}
                  </span>
                </a>

                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                    <span>{post.readTime}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.author.name}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors leading-snug mb-3">
                    <a
                      href={`/blog/${post.slug}`}
                      onClick={(e) => handleLinkClick(e, `/blog/${post.slug}`)}
                    >
                      {post.title}
                    </a>
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>

                  <a
                    href={`/blog/${post.slug}`}
                    onClick={(e) => handleLinkClick(e, `/blog/${post.slug}`)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors mt-auto"
                  >
                    <span>Leer guía completa</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </m.article>
            )
          })}
        </div>

        <div className="text-center">
          <a
            href="/blog"
            onClick={(e) => handleLinkClick(e, '/blog')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98]"
          >
            <BookOpen className="w-5 h-5" />
            <span>Ver todo el Blog Técnico</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default BlogPreview
