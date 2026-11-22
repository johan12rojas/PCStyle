import { m } from 'framer-motion'
import { Shield, Clock, DollarSign, CheckCircle, Truck, Headphones, MapPin } from 'lucide-react'
import TechBackground from './TechBackground'

const ZONAS_COBERTURA = [
  'Centro',
  'Caobos',
  'La Ceiba',
  'La Riviera',
  'Niza',
  'Atalaya',
  'Prados del Este',
  'Quinta Oriental',
  'Colsag',
  'Guaimaral',
  'Los Patios',
  'Villa del Rosario',
]

const BENEFICIOS = [
  {
    icon: Shield,
    title: 'Garantía Total',
    description: 'En cada reparación y mantenimiento',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
  },
  {
    icon: Clock,
    title: 'Respuesta Inmediata',
    description: 'Atención rápida y eficiente',
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: DollarSign,
    title: 'Precios Justos',
    description: 'Sin sorpresas ni costos ocultos',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
  },
  {
    icon: CheckCircle,
    title: 'Técnicos Expertos',
    description: 'Certificados y con experiencia',
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: Truck,
    title: 'A Domicilio en la Región',
    description: 'Cobertura en Cúcuta, Área Metropolitana y Norte de Santander',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
  },
  {
    icon: Headphones,
    title: 'Soporte 24/7',
    description: 'Asesoría cuando la necesites',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
  },
]

const Beneficios = () => {
  return (
    <section className="section-defer py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <TechBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            ¿Por qué elegir <span className="text-gradient">PCStyle?</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
            Reconocidos como el mejor servicio técnico de la región: más de 480 clientes en Cúcuta y
            Norte de Santander nos respaldan
          </p>
        </m.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {BENEFICIOS.map((beneficio, index) => {
              const Icon = beneficio.icon
              return (
                <m.div
                  key={beneficio.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
                  className="group relative"
                >
                  <div className="relative h-full p-5 sm:p-6 rounded-2xl bg-slate-800/80 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1">
                    <div className="absolute top-0 left-5 sm:left-6 right-5 sm:right-6 h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div
                      className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${beneficio.bgColor} mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${beneficio.color}`} />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {beneficio.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {beneficio.description}
                    </p>

                    <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {index < BENEFICIOS.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-slate-700 to-transparent z-0"
                    />
                  )}
                </m.div>
              )
            })}
          </div>

          {/* Cobertura Regional visible para SEO local y regional */}
          <div className="mt-8 sm:mt-10 p-5 sm:p-7 rounded-2xl bg-slate-800/75 border border-slate-700/60">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-blue-500/15 text-blue-400 flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Cobertura en Cúcuta, Norte de Santander y toda la Región
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  Servicio técnico presencial a domicilio, recepción de equipos, soporte remoto y
                  desarrollo web con SEO
                </p>
              </div>
            </div>
            <ul className="flex flex-wrap gap-2">
              {ZONAS_COBERTURA.map((zona) => (
                <li
                  key={zona}
                  className="text-xs sm:text-sm text-gray-300 bg-slate-900/80 border border-slate-700/60 px-3 py-1.5 rounded-lg"
                >
                  {zona}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA destacado */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="mt-8 sm:mt-10 lg:mt-12 text-center px-4 sm:px-0"
          >
            <div className="inline-flex flex-col items-center gap-3 sm:gap-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 border border-blue-500/20 w-full sm:w-auto">
              <p className="text-gray-300 text-base sm:text-lg">
                ¿Listo para mejorar tu equipo?
              </p>
              <a
                href="#contacto"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 hover:scale-105 active:scale-95 whitespace-nowrap"
              >
                Contáctanos Ahora
              </a>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  )
}

export default Beneficios
