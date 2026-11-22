import { m } from 'framer-motion'
import {
  Camera,
  Instagram,
  Facebook,
  Globe,
  ThumbsUp,
  MessageCircle,
  Share2,
  ExternalLink,
} from 'lucide-react'
import TechBackground from './TechBackground'

const FACEBOOK_PAGE_URL = 'https://www.facebook.com/pcstylecol/?locale=es_LA'

// Configuración de la última publicación mostrada en el mockup
const LATEST_POST = {
  author: 'PCStyle - Servicio técnico',
  location: 'Cúcuta',
  date: '28 de julio',
  url: 'https://www.facebook.com/pcstylecol/posts/pfbid02TtXBT8sYzargzJesL78GTxWY6QXND1wJZDyJ5cGHPTiMf5pmeEvW62XqXETuWqJyl',
  image: '/IMG/fb-ultima-publicacion.jpg',
  imageAlt:
    'Última publicación de PCStyle en Facebook: soporte técnico profesional para PC y laptops en Cúcuta',
  caption: [
    '¿Tu computador anda lento o con fallas? ¡Es momento de darle un respiro!',
    'Ofrezco servicio técnico y mantenimiento para que funcione como nuevo ⚙️ No esperes a que muera del todo. Consultas sin compromiso, ¡escríbeme!',
  ],
  shares: '19 veces compartido',
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
}

const RedesSociales = () => {
  return (
    <section className="section-defer py-16 sm:py-20 lg:py-24 bg-slate-900 relative overflow-hidden">
      <TechBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Lado Izquierdo - Texto y Botones */}
            <m.div variants={itemVariants} className="text-center lg:text-left order-2 lg:order-1">
              {/* Camera Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4 sm:mb-6 shadow-lg transition-transform duration-500 hover:rotate-12 hover:scale-110">
                <Camera className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0">
                ¿Quieres ver más trabajos?
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0 max-w-xl mx-auto lg:mx-0">
                Síguenos en nuestras redes sociales para ver actualizaciones constantes de nuestros
                mantenimientos
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-2 sm:px-0">
                <a
                  href="https://www.instagram.com/pcstylecol/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-pink-500/40 hover:shadow-pink-500/60 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>Ver en Instagram</span>
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                  />
                </a>

                <a
                  href={FACEBOOK_PAGE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Ver en Facebook</span>
                </a>
              </div>
            </m.div>

            {/* Lado Derecho - Mockup de celular con la última publicación limpia */}
            <m.div
              variants={itemVariants}
              className="lg:h-full flex items-center justify-center w-full order-1 lg:order-2 mb-6 lg:mb-0"
            >
              <div className="relative transition-transform duration-300 hover:scale-[1.01] hover:-translate-y-1">
                {/* Glow radial sutil */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-8 rounded-full -z-10 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(59,130,246,0.16) 0%, rgba(139,92,246,0.12) 45%, transparent 72%)',
                  }}
                />

                {/* Phone Frame */}
                <div className="relative w-[310px] sm:w-[344px] mx-auto">
                  <div className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 rounded-[2.8rem] p-2 shadow-2xl">
                    <div className="bg-black rounded-[2.3rem] p-2 shadow-inner">
                      {/* Cámara superior discreta */}
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[96px] h-5 bg-black rounded-full z-20" />

                      <div className="bg-white rounded-[1.85rem] overflow-hidden relative text-gray-900">
                        {/* Barra de estado */}
                        <div className="bg-white pt-6 pb-1.5 px-5 flex items-center justify-between text-black text-[11px] font-semibold">
                          <span>9:41</span>
                          <div className="flex items-center gap-1.5">
                            <div className="flex gap-0.5">
                              <div className="w-1 h-1 bg-black rounded-full" />
                              <div className="w-1 h-1 bg-black rounded-full" />
                              <div className="w-1 h-1 bg-black/30 rounded-full" />
                            </div>
                            <div className="w-5 h-2.5 border border-black rounded-sm p-[1px]">
                              <div className="w-[75%] h-full bg-green-500 rounded-[1px]" />
                            </div>
                          </div>
                        </div>

                        {/* Barra superior Facebook */}
                        <div className="bg-[#1877F2] px-3.5 py-2 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Facebook className="w-4 h-4 text-white fill-white/10" />
                            <span className="text-white font-semibold text-xs tracking-wide">
                              Facebook
                            </span>
                          </div>
                          <a
                            href={FACEBOOK_PAGE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-semibold text-white bg-white/15 hover:bg-white/25 px-2.5 py-0.5 rounded-full transition-colors"
                          >
                            Seguir página
                          </a>
                        </div>

                        {/* Tarjeta nativa de publicación (encabezado, texto e imagen separados sin montarse) */}
                        <article className="bg-white">
                          {/* Encabezado de la publicación */}
                          <div className="px-3.5 pt-3 pb-2 flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2.5 min-w-0">
                              <img
                                src="/IMG/iconO.jpeg"
                                alt="PCStyle"
                                className="w-9 h-9 rounded-full object-cover border border-gray-200 flex-shrink-0"
                              />
                              <div className="min-w-0">
                                <a
                                  href={FACEBOOK_PAGE_URL}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="block text-xs font-bold text-gray-900 hover:underline truncate"
                                >
                                  {LATEST_POST.author}
                                </a>
                                <div className="flex items-center gap-1 text-[11px] text-gray-500">
                                  <span>{LATEST_POST.date}</span>
                                  <span>·</span>
                                  <span>{LATEST_POST.location}</span>
                                  <span>·</span>
                                  <Globe className="w-3 h-3 text-gray-400" />
                                </div>
                              </div>
                            </div>
                            <a
                              href={LATEST_POST.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label="Abrir publicación en Facebook"
                              className="text-gray-400 hover:text-[#1877F2] p-1 transition-colors flex-shrink-0"
                            >
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </div>

                          {/* Texto de la publicación */}
                          <div className="px-3.5 pb-2.5 space-y-1 text-[12px] leading-snug text-gray-800">
                            {LATEST_POST.caption.map((line, idx) => (
                              <p key={idx}>{line}</p>
                            ))}
                          </div>

                          {/* Imagen limpia sin textos montados encima */}
                          <a
                            href={LATEST_POST.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative block bg-slate-950 overflow-hidden border-y border-gray-100"
                          >
                            <img
                              src={LATEST_POST.image}
                              alt={LATEST_POST.imageAlt}
                              loading="lazy"
                              className="w-full h-auto block object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                            />
                          </a>

                          {/* Contador y barra de acciones */}
                          <div className="px-3.5 py-1.5 flex items-center justify-between text-[11px] text-gray-500 border-b border-gray-100">
                            <span>171 seguidores</span>
                            <span>{LATEST_POST.shares}</span>
                          </div>

                          <div className="grid grid-cols-3 divide-x divide-gray-100 text-[11px] font-semibold text-gray-600">
                            <a
                              href={LATEST_POST.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="py-2.5 flex items-center justify-center gap-1.5 hover:bg-gray-50 hover:text-[#1877F2] transition-colors"
                            >
                              <ThumbsUp className="w-3.5 h-3.5" />
                              <span>Me gusta</span>
                            </a>
                            <a
                              href={LATEST_POST.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="py-2.5 flex items-center justify-center gap-1.5 hover:bg-gray-50 hover:text-[#1877F2] transition-colors"
                            >
                              <MessageCircle className="w-3.5 h-3.5" />
                              <span>Comentar</span>
                            </a>
                            <a
                              href={LATEST_POST.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="py-2.5 flex items-center justify-center gap-1.5 hover:bg-gray-50 hover:text-[#1877F2] transition-colors"
                            >
                              <Share2 className="w-3.5 h-3.5" />
                              <span>Compartir</span>
                            </a>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center mt-5">
                  <a
                    href={LATEST_POST.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-400 hover:text-blue-300 text-sm font-semibold transition-all duration-200 hover:scale-105"
                  >
                    Ver publicación en Facebook →
                  </a>
                </div>
              </div>
            </m.div>
          </div>
        </m.div>
      </div>
    </section>
  )
}

export default RedesSociales
