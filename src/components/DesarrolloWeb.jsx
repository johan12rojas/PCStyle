import { useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import {
  Search,
  Smartphone,
  Zap,
  Check,
  ArrowRight,
  MessageCircle,
  TrendingUp,
  X,
  Maximize2,
} from 'lucide-react'

const PLANES = [
  {
    id: 'landing-basica',
    name: 'Landing Page',
    tag: 'Esencial',
    price: '$300.000',
    priceLabel: 'Desde',
    subtitle: 'Ideal para captar clientes y validar campañas rápidamente.',
    image: '/IMG/web-plan-landing.jpg?v=3',
    imageAlt: 'Referencia visual de diseño Landing Page responsive PC y móvil - PCStyle',
    featured: false,
    features: [
      'Diseño 100% responsive (móvil, tablet y PC)',
      'Secciones clave: Hero, Servicios, Beneficios y Contacto',
      'Botón directo de WhatsApp y formulario de contacto',
      'SEO técnico inicial (meta tags, títulos y Open Graph)',
      'Velocidad optimizada e indexación inicial en Google',
    ],
  },
  {
    id: 'web-corporativa',
    name: 'Sitio Web Profesional',
    tag: 'Recomendado',
    price: '$550.000',
    priceLabel: 'Desde',
    subtitle: 'Para empresas y negocios que buscan autoridad y posicionamiento en Google.',
    image: '/IMG/web-plan-corporativo.jpg?v=3',
    imageAlt: 'Referencia visual de sitio web corporativo con posicionamiento SEO en Google - PCStyle',
    featured: true,
    features: [
      'Múltiples secciones o páginas orientadas a conversión',
      'SEO On-Page avanzado + Datos estructurados (Schema.org)',
      'Google Maps, redes sociales y WhatsApp integrados',
      'Configuración de sitemap.xml, robots.txt y Search Console',
      'Asesoría en dominio, hosting y certificado SSL (HTTPS)',
      'Diseño editorial personalizado y carga ultrarrápida',
    ],
  },
  {
    id: 'web-medida',
    name: 'Proyecto a Medida',
    tag: 'Avanzado',
    price: '$800.000+',
    priceLabel: 'Desde',
    subtitle: 'Catálogos interactivos, tiendas online o funcionalidades personalizadas.',
    image: '/IMG/web-plan-medida.jpg?v=3',
    imageAlt: 'Referencia visual de plataforma web a medida con catálogo y panel de analítica - PCStyle',
    featured: false,
    features: [
      'Arquitectura escalable adaptada a tus requerimientos',
      'Catálogo administrable, e-commerce o módulos a medida',
      'SEO local y técnico optimizado para Core Web Vitals',
      'Integraciones personalizadas (APIs, reservas o analítica)',
      'Seguridad reforzada, rendimiento y soporte post-entrega',
    ],
  },
]

const PILARES_SEO = [
  {
    icon: Search,
    title: 'SEO Técnico en Google',
    description: 'HTML semántico, Schema.org y metaetiquetas para posicionar tu negocio.',
  },
  {
    icon: Zap,
    title: 'Rendimiento Real',
    description: 'Carga rápida y recursos optimizados para destacar en Core Web Vitals.',
  },
  {
    icon: Smartphone,
    title: 'Diseño Mobile-First',
    description: 'Experiencia cuidada y legible desde cualquier celular o computador.',
  },
  {
    icon: TrendingUp,
    title: 'Enfoque en Conversión',
    description: 'Estructura clara con WhatsApp y formularios pensados para vender.',
  },
]

const DesarrolloWeb = ({ onSelectPlan }) => {
  const [previewImage, setPreviewImage] = useState(null)

  const handleCotizar = (plan) => {
    const prefilledMessage = `Hola PCStyle, me interesa cotizar el plan "${plan.name}" (${plan.priceLabel} ${plan.price} COP). Me gustaría recibir una propuesta según los requerimientos de mi proyecto.`

    if (onSelectPlan) {
      onSelectPlan({
        service: 'desarrollo-web',
        source: 'Diseño y Desarrollo Web',
        label: `${plan.name} (${plan.price} COP)`,
        message: prefilledMessage,
      })
    } else {
      localStorage.setItem('selectedService', 'desarrollo-web')
    }

    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleWhatsAppDirecto = () => {
    const text =
      'Hola PCStyle, me interesa cotizar la creación de una página web o landing page con posicionamiento SEO.'
    window.open(
      `https://wa.me/573225934970?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <section
      id="desarrollo-web"
      aria-labelledby="desarrollo-web-heading"
      className="section-defer py-20 sm:py-24 bg-[#0b1120] border-y border-slate-800/80 relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header limpio y sobrio */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="max-w-3xl mx-auto text-center mb-12 sm:mb-16"
        >
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-slate-400 mb-3">
            Diseño y Desarrollo Web · SEO en Buscadores
          </p>
          <h2
            id="desarrollo-web-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4"
          >
            Creación de Páginas Web y Landing Pages con SEO
          </h2>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Como líderes #1 en posicionamiento orgánico en Cúcuta, Norte de Santander y la región,
            creamos sitios web profesionales, rápidos y estructurados para posicionar tu negocio en
            Google. El valor final varía según el alcance y requerimientos de tu proyecto.
          </p>
        </m.div>

        {/* Pricing horizontal de 3 columnas */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7 items-stretch mb-10">
          {PLANES.map((plan, index) => (
            <m.article
              key={plan.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
              className={`flex flex-col rounded-2xl overflow-hidden transition-colors duration-300 ${
                plan.featured
                  ? 'bg-slate-900 border border-slate-500/80 ring-1 ring-white/10 shadow-xl shadow-black/40'
                  : 'bg-slate-900/80 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Imagen de referencia del plan */}
              <button
                type="button"
                onClick={() => setPreviewImage(plan)}
                className="group relative w-full aspect-[16/10] overflow-hidden bg-slate-950 border-b border-slate-800/90 text-left focus:outline-none"
                aria-label={`Ampliar referencia visual de ${plan.name}`}
              >
                <img
                  src={plan.image}
                  alt={plan.imageAlt}
                  width="1024"
                  height="572"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/25 transition-colors duration-300 flex items-end justify-between p-3">
                  <span className="text-[11px] font-medium text-slate-200 bg-slate-950/85 px-2.5 py-1 rounded-md border border-white/10">
                    Referencia · {plan.name}
                  </span>
                  <span className="w-7 h-7 rounded-md bg-slate-950/85 border border-white/10 flex items-center justify-center text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
              </button>

              {/* Contenido del plan */}
              <div className="p-6 lg:p-7 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-white tracking-tight">{plan.name}</h3>
                  <span
                    className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                      plan.featured
                        ? 'bg-white text-slate-950 font-semibold'
                        : 'bg-slate-800 text-slate-300 border border-slate-700'
                    }`}
                  >
                    {plan.tag}
                  </span>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed min-h-[42px] mb-6">
                  {plan.subtitle}
                </p>

                <div className="mb-6">
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    {plan.priceLabel}
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span className="text-3xl lg:text-4xl font-bold text-white tracking-tight tabular-nums">
                      {plan.price}
                    </span>
                    <span className="text-xs font-medium text-slate-400">COP</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Precio base sujeto a requerimientos
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => handleCotizar(plan)}
                  className={`w-full py-2.5 px-4 rounded-lg font-semibold text-sm flex items-center justify-center gap-2 transition-colors duration-200 mb-6 ${
                    plan.featured
                      ? 'bg-white hover:bg-slate-200 text-slate-950'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  <span>Cotizar plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="border-t border-slate-800 pt-5 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3.5">
                    Qué incluye
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <Check className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </m.article>
          ))}
        </div>

        {/* Nota de transparencia y rango de precios */}
        <div className="max-w-7xl mx-auto mb-12 px-5 py-4 rounded-xl bg-slate-900/70 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            <strong className="text-slate-200 font-medium">Inversión referencial:</strong> Planes
            base entre <span className="text-white font-medium">$300.000 y $800.000+ COP</span>.
            Cotizamos a la medida según secciones, integraciones, diseño y objetivos SEO de cada
            proyecto.
          </p>
          <button
            type="button"
            onClick={handleWhatsAppDirecto}
            className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium border border-slate-700 transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Cotizar por WhatsApp</span>
          </button>
        </div>

        {/* Franja sobria de pilares SEO */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-800/80 rounded-xl overflow-hidden border border-slate-800">
          {PILARES_SEO.map((pilar) => {
            const Icon = pilar.icon
            return (
              <div key={pilar.title} className="bg-slate-900/90 p-5 sm:p-6">
                <Icon className="w-5 h-5 text-slate-300 mb-3" />
                <h3 className="text-sm font-semibold text-white mb-1">{pilar.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{pilar.description}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Modal ligero para ampliar la imagen de referencia */}
      <AnimatePresence>
        {previewImage && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setPreviewImage(null)}
          >
            <m.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl w-full bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800">
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-white">
                    Referencia visual · {previewImage.name}
                  </h4>
                  <p className="text-xs text-slate-400">
                    {previewImage.priceLabel} {previewImage.price} COP
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setPreviewImage(null)}
                  className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Cerrar vista previa"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="bg-slate-950">
                <img
                  src={previewImage.image}
                  alt={previewImage.imageAlt}
                  width="1024"
                  height="572"
                  decoding="async"
                  className="w-full h-auto max-h-[75vh] object-contain"
                />
              </div>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default DesarrolloWeb
