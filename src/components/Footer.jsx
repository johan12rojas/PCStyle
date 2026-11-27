import { m } from 'framer-motion'
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react'
import TechBackground from './TechBackground'

const SOCIAL_LINKS = [
  { icon: Facebook, href: 'https://www.facebook.com/pcstylecol/?locale=es_LA', name: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/pcstylecol/', name: 'Instagram' },
]

const FOOTER_LINKS = {
  servicios: [
    { name: 'Reparación de Hardware', href: '/#servicios' },
    { name: 'Mantenimiento Preventivo', href: '/#servicios' },
    { name: 'Actualización de Componentes', href: '/#servicios' },
    { name: 'Eliminación de Virus', href: '/#servicios' },
    { name: 'Diseño y Desarrollo Web', href: '/#desarrollo-web' },
  ],
  empresa: [
    { name: 'Blog Técnico', href: '/blog' },
    { name: 'Diseño Web', href: '/#desarrollo-web' },
    { name: 'Portafolio', href: '/#portafolio' },
    { name: 'Opiniones', href: '/#opiniones' },
    { name: 'Nosotros', href: '/#nosotros' },
    { name: 'Preguntas Frecuentes', href: '/#preguntas-frecuentes' },
    { name: 'Contacto', href: '/#contacto' },
  ],
}

const Footer = ({ onNavigate }) => {
  const handleLinkClick = (e, href) => {
    if (!onNavigate) return
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    onNavigate(href)
  }
  return (
    <footer className="section-defer bg-slate-950 py-12 border-t border-slate-800 relative overflow-hidden">
      <TechBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <m.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
        >
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="/IMG/pcstyle.png"
                alt="PCStyle Logo"
                width="84"
                height="40"
                loading="lazy"
                decoding="async"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              El mejor servicio técnico de computadores, portátiles y diseño web con SEO en Cúcuta,
              Norte de Santander y toda la región.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 text-gray-400 hover:text-white"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h2 className="text-white font-semibold mb-4 text-base">Servicios</h2>
            <ul className="space-y-2">
              {FOOTER_LINKS.servicios.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h2 className="text-white font-semibold mb-4 text-base">Empresa</h2>
            <ul className="space-y-2">
              {FOOTER_LINKS.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h2 className="text-white font-semibold mb-4 text-base">Contacto</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  Urbanización Monterosso, Manzana E casa 28 #AN-60, Cúcuta, Norte de Santander
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="tel:+573225934970"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  322 5934970
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:pcstyle07@gmail.com"
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  pcstyle07@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </m.div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} PCStyle. Todos los derechos reservados. | Cúcuta, Norte
            de Santander · Líderes en la Región
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
