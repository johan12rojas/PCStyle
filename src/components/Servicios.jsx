import { m } from 'framer-motion'
import { Wrench, Settings, HardDrive, Shield, Database, Headphones } from 'lucide-react'
import TechBackground from './TechBackground'

const SERVICIOS = [
  {
    icon: Wrench,
    title: 'Reparación de Hardware',
    description:
      'Diagnóstico electrónico avanzado y reparación de computadores, portátiles, placas base, fuentes de poder y tarjetas gráficas con garantía.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Shield,
    title: 'Mantenimiento Preventivo',
    description:
      'Limpieza profunda, cambio de pasta térmica, actualización de software y optimización para máximo rendimiento y vida útil.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Settings,
    title: 'Actualización de Componentes',
    description:
      'Asesoría experta para potenciar tu PC o laptop con discos SSD NVMe, memoria RAM y hardware de alto rendimiento.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: HardDrive,
    title: 'Eliminación de Virus',
    description:
      'Desinfección completa contra malware, ransomware y amenazas, además de formateo limpio e instalación de programas esenciales.',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Database,
    title: 'Recuperación de Datos',
    description:
      'Rescate seguro y confidencial de archivos perdidos en discos duros, SSD, memorias USB y sistemas con fallas críticas.',
    color: 'from-orange-500 to-orange-600',
  },
  {
    icon: Headphones,
    title: 'Soporte Técnico Remoto',
    description:
      'Asistencia inmediata desde cualquier lugar de Norte de Santander, el Nororiente Colombiano y todo el país.',
    color: 'from-cyan-500 to-cyan-600',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

const Servicios = () => {
  return (
    <section
      id="servicios"
      className="section-defer py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
    >
      <TechBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
            Soluciones técnicas integrales para particulares y empresas en Cúcuta, Norte de
            Santander y toda la región
          </p>
        </m.div>

        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
        >
          {SERVICIOS.map((servicio) => {
            const Icon = servicio.icon
            return (
              <m.div
                key={servicio.title}
                variants={itemVariants}
                className="group relative bg-slate-800/90 p-5 sm:p-6 lg:p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10 overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${servicio.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                />

                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${servicio.color} rounded-xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 relative z-10 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3`}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white relative z-10">
                  {servicio.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed relative z-10">
                  {servicio.description}
                </p>

                <div
                  className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${servicio.color} opacity-5 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`}
                />
              </m.div>
            )
          })}
        </m.div>
      </div>
    </section>
  )
}

export default Servicios
