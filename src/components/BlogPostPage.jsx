import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Clock,
  Globe,
  HelpCircle,
  Home,
  Lightbulb,
  MessageCircle,
  Wrench,
} from 'lucide-react'
import { getRelatedPosts } from '../data/blogPosts'
import TechBackground from './TechBackground'

const WHATSAPP_NUMBER = '573225934970'

const BlogPostPage = ({ post, onNavigate }) => {
  const relatedPosts = getRelatedPosts(post.slug, 3)
  const isWeb = post.category === 'Desarrollo Web'

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
        {/* Breadcrumbs */}
        <nav aria-label="Ruta de navegación" className="max-w-4xl mx-auto mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-400">
            <li>
              <a
                href="/"
                onClick={(e) => handleLinkClick(e, '/')}
                className="inline-flex items-center gap-1 hover:text-blue-400 transition-colors"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Inicio</span>
              </a>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            </li>
            <li>
              <a
                href="/blog"
                onClick={(e) => handleLinkClick(e, '/blog')}
                className="hover:text-blue-400 transition-colors"
              >
                Blog Técnico
              </a>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
            </li>
            <li aria-current="page" className="text-blue-300 font-medium truncate max-w-[260px] sm:max-w-md">
              {post.title}
            </li>
          </ol>
        </nav>

        <article className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                  isWeb
                    ? 'bg-purple-500/15 border-purple-400/40 text-purple-200'
                    : 'bg-blue-500/15 border-blue-400/40 text-blue-200'
                }`}
              >
                {isWeb ? <Globe className="w-3.5 h-3.5" /> : <Wrench className="w-3.5 h-3.5" />}
                {post.category}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-400">
                <Calendar className="w-4 h-4 text-blue-400" />
                <time dateTime={post.publishedAt}>Actualizado: {post.updatedAt}</time>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-gray-400">
                <Clock className="w-4 h-4 text-blue-400" />
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              {post.title}
            </h1>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
              {post.excerpt}
            </p>

            {/* Author Card */}
            <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-slate-800/80 border border-slate-700/60">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                width="48"
                height="48"
                className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/50 flex-shrink-0"
              />
              <div>
                <p className="text-white font-semibold text-sm sm:text-base">{post.author.name}</p>
                <p className="text-gray-400 text-xs sm:text-sm">{post.author.role}</p>
              </div>
            </div>
          </header>

          {/* Cover Image */}
          <figure className="mb-8 rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-950 shadow-2xl">
            <img
              src={post.coverImage}
              alt={post.coverAlt}
              className="w-full h-60 sm:h-80 lg:h-96 object-cover"
            />
          </figure>

          {/* Table of Contents */}
          <aside
            aria-label="Índice del artículo"
            className="mb-10 p-5 sm:p-6 rounded-2xl bg-slate-800/75 border border-slate-700/60"
          >
            <h2 className="text-sm font-bold uppercase tracking-wider text-blue-300 mb-3">
              En esta guía verás
            </h2>
            <ul className="space-y-2">
              {post.sections.map((section, idx) => (
                <li key={section.heading}>
                  <a
                    href={`#seccion-${idx + 1}`}
                    className="text-sm text-gray-300 hover:text-blue-400 transition-colors inline-flex items-start gap-2"
                  >
                    <span className="text-blue-400 font-semibold">{idx + 1}.</span>
                    <span>{section.heading}</span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Article Body */}
          <div className="space-y-10 mb-12">
            {post.sections.map((section, idx) => (
              <section key={section.heading} id={`seccion-${idx + 1}`} className="scroll-mt-28">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                  {section.heading}
                </h2>

                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4"
                  >
                    {paragraph}
                  </p>
                ))}

                {section.bullets && (
                  <ul className="space-y-3 my-5">
                    {section.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-800/75 border border-slate-700/50 text-gray-200 text-sm sm:text-base leading-relaxed"
                      >
                        <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.tip && (
                  <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-start gap-3.5">
                    <Lightbulb className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                      {section.tip}
                    </p>
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* Post FAQs */}
          {post.faqs?.length > 0 && (
            <section
              aria-labelledby="post-faq-heading"
              className="mb-12 p-6 sm:p-8 rounded-2xl bg-slate-800/80 border border-slate-700/60"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <HelpCircle className="w-6 h-6 text-blue-400" />
                <h2 id="post-faq-heading" className="text-xl sm:text-2xl font-bold text-white">
                  Preguntas frecuentes sobre este tema
                </h2>
              </div>
              <div className="space-y-5">
                {post.faqs.map((faq) => (
                  <div key={faq.question} className="border-b border-slate-700/60 pb-4 last:border-0 last:pb-0">
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Direct WhatsApp CTA */}
          <section className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-800 via-blue-950/70 to-purple-950/70 border border-blue-500/40 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              {isWeb
                ? '¿Listo para lanzar tu página web con posicionamiento SEO?'
                : '¿Necesitas ayuda profesional con tu computador en Cúcuta?'}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
              {isWeb
                ? 'En PCStyle diseñamos landing pages, sitios corporativos y proyectos a medida optimizados para posicionar tu negocio en Google.'
                : 'En PCStyle ofrecemos diagnóstico honesto, servicio técnico a domicilio en Cúcuta y el Área Metropolitana, más de 1.200 equipos reparados y garantía por escrito.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(post.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3.5 rounded-xl font-semibold shadow-lg shadow-green-500/30 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Consultar por WhatsApp (322 5934970)</span>
              </a>
              <a
                href={isWeb ? '/#desarrollo-web' : '/#contacto'}
                onClick={(e) => handleLinkClick(e, isWeb ? '/#desarrollo-web' : '/#contacto')}
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 px-6 py-3.5 rounded-xl font-semibold transition-colors"
              >
                <span>{isWeb ? 'Ver planes web' : 'Agendar servicio'}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </section>

          {/* Related Articles */}
          <section aria-labelledby="related-posts-heading" className="mb-10">
            <div className="flex items-center justify-between gap-4 mb-6">
              <h2 id="related-posts-heading" className="text-2xl font-bold text-white">
                Otras guías recomendadas
              </h2>
              <a
                href="/blog"
                onClick={(e) => handleLinkClick(e, '/blog')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-400 hover:text-blue-300"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Ver todo el blog</span>
              </a>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              {relatedPosts.map((related) => (
                <article
                  key={related.slug}
                  className="group bg-slate-800/85 border border-slate-700/60 hover:border-blue-500/50 rounded-2xl overflow-hidden flex flex-col transition-all hover:-translate-y-1"
                >
                  <a
                    href={`/blog/${related.slug}`}
                    onClick={(e) => handleLinkClick(e, `/blog/${related.slug}`)}
                    className="block h-36 overflow-hidden bg-slate-950"
                  >
                    <img
                      src={related.coverImage}
                      alt={related.coverAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </a>
                  <div className="p-4 flex flex-col flex-1">
                    <span className="text-xs font-semibold text-blue-400 mb-1.5">
                      {related.category}
                    </span>
                    <h3 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors leading-snug mb-3 flex-1">
                      <a
                        href={`/blog/${related.slug}`}
                        onClick={(e) => handleLinkClick(e, `/blog/${related.slug}`)}
                      >
                        {related.title}
                      </a>
                    </h3>
                    <a
                      href={`/blog/${related.slug}`}
                      onClick={(e) => handleLinkClick(e, `/blog/${related.slug}`)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300"
                    >
                      <span>Leer artículo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}

export default BlogPostPage
