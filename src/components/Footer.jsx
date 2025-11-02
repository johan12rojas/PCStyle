import { motion } from 'framer-motion'
import { Facebook, Instagram, Phone, Mail, MapPin } from 'lucide-react'
import TechBackground from './TechBackground'

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/pcstylecol/?locale=es_LA', name: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/pcstylecol/', name: 'Instagram' },
  ]

  const footerLinks = {
    servicios: [
      'Reparación de Hardware',
      'Mantenimiento Preventivo',
      'Actualización de Componentes',
      'Eliminación de Virus',
    ],
    empresa: [
      'Portafolio',
      'Opiniones',
      'Contacto',
    ],
  }

  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800 relative overflow-hidden">
      {/* Tech Background */}
      <TechBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/IMG/pcstyle.png" 
                alt="PCStyle Logo" 
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Expertos en reparación y mantenimiento de computadoras en Cúcuta, Colombia.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.href !== '#' ? "_blank" : undefined}
                    rel={social.href !== '#' ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 bg-slate-800 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 rounded-lg flex items-center justify-center transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* Servicios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a
                    href="#servicios"
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Empresa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">Urbanización Monterosso, Manzana E casa 28 #An-60, Cúcuta, Norte de Santander</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="tel:+573225934970" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  322 5934970
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                <a href="mailto:pcstyle07@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                  pcstyle07@gmail.com
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-slate-800 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} PCStyle. Todos los derechos reservados. | Cúcuta, Colombia
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

