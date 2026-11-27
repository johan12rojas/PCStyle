import { useState } from 'react'
import {
  BookOpen,
  ArrowRight,
  Clock,
  Calendar,
  Wrench,
  Globe,
  MessageCircle,
  ChevronRight,
  Home,
} from 'lucide-react'
import { BLOG_CATEGORIES, BLOG_POSTS } from '../data/blogPosts'
import TechBackground from './TechBackground'

const WHATSAPP_NUMBER = '573225934970'

const BlogListPage = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos')

  const filteredPosts =
    selectedCategory === 'Todos'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === selectedCategory)

  const handleLinkClick = (e, path) => {
    if (!onNavigate) return
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    onNavigate(path)
  }

  return (
    <main className="min-h-screen bg-slate-900 pt-24 sm:pt-28 pb-16 sm:pb-24 relative overflow-hidden">
      <TechBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb */}
        <nav aria-label="Ruta de navegación" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-400">
            <li>
              <a
                href="/"
                onClick={(e) => handleLinkClick(e, '/')}
                className="inline-flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>Inicio</span>
              </a>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </li>
            <li aria-current="page" className="text-blue-300 font-medium">
              Blog Técnico
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="max-w-3xl mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold mb-4">
            <BookOpen className="w-4 h-4" />
            <span>Guías de Servicio Técnico, Reparación de PC y Desarrollo Web</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Blog Técnico <span className="text-gradient">PCStyle</span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Artículos prácticos redactados por nuestros especialistas en Cúcuta y Norte de Santander
            para ayudarte a mantener tu computador rápido, diagnosticar fallas de hardware y
            posicionar tu negocio en Google.
          </p>
        </header>

        {/* Category Filters */}
        <div
          role="tablist"
          aria-label="Filtrar artículos por categoría"
          className="flex flex-wrap gap-2.5 mb-10"
        >
          {BLOG_CATEGORIES.map((category) => {
            const active = selectedCategory === category
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border ${
                  active
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white border-transparent shadow-lg shadow-blue-500/25'
                    : 'bg-slate-800/80 text-gray-300 border-slate-700 hover:border-blue-500/50 hover:text-white'
                }`}
              >
                {category}
              </button>
            )
          })}
        </div>

        {/* Articles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {filteredPosts.map((post) => {
            const isWeb = post.category === 'Desarrollo Web'
            return (
              <article
                key={post.slug}
                className="group bg-slate-800/90 border border-slate-700/60 hover:border-blue-500/50 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-blue-500/15"
              >
                <a
                  href={`/blog/${post.slug}`}
                  onClick={(e) => handleLinkClick(e, `/blog/${post.slug}`)}
                  className="block relative h-48 overflow-hidden bg-slate-950"
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

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-3">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      {post.publishedAt}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-blue-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors leading-snug mb-3">
                    <a
                      href={`/blog/${post.slug}`}
                      onClick={(e) => handleLinkClick(e, `/blog/${post.slug}`)}
                    >
                      {post.title}
                    </a>
                  </h2>

                  <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        width="32"
                        height="32"
                        loading="lazy"
                        className="w-8 h-8 rounded-full object-cover border border-slate-600 flex-shrink-0"
                      />
                      <span className="text-xs text-gray-300 truncate">{post.author.name}</span>
                    </div>

                    <a
                      href={`/blog/${post.slug}`}
                      onClick={(e) => handleLinkClick(e, `/blog/${post.slug}`)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300 flex-shrink-0"
                    >
                      <span>Leer</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <section className="bg-gradient-to-r from-slate-800/95 via-blue-950/60 to-purple-950/60 border border-blue-500/30 rounded-2xl p-6 sm:p-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            ¿Necesitas diagnóstico para tu computador o cotizar una página web?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6 text-sm sm:text-base">
            Atendemos a domicilio en Cúcuta, Los Patios y Villa del Rosario, y brindamos soporte
            remoto y desarrollo web con SEO para toda la región y Colombia.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                'Hola PCStyle, vengo desde el Blog Técnico y necesito asesoría para mi equipo.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-7 py-3.5 rounded-xl font-semibold shadow-lg shadow-green-500/30 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Escribir por WhatsApp</span>
            </a>
            <a
              href="/#servicios"
              onClick={(e) => handleLinkClick(e, '/#servicios')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 px-7 py-3.5 rounded-xl font-semibold transition-colors"
            >
              <span>Ver todos los servicios</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}

export default BlogListPage
