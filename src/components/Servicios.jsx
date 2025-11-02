import { motion } from 'framer-motion'
import { Wrench, Settings, HardDrive, Shield, Database, Headphones } from 'lucide-react'
import TechBackground from './TechBackground'

const Servicios = () => {
  const servicios = [
    {
      icon: Wrench,
      title: 'Reparación de Hardware',
      description: 'Diagnóstico y reparación de componentes dañados. Reemplazo de piezas con garantía.',
      color: 'from-blue-500 to-blue-600',
      delay: 0.1
    },
    {
      icon: Shield,
      title: 'Mantenimiento Preventivo',
      description: 'Limpieza profunda, actualización de software y optimización para máximo rendimiento.',
      color: 'from-green-500 to-green-600',
      delay: 0.2
    },
    {
      icon: Settings,
      title: 'Actualización de Componentes',
      description: 'Asesoría profesional para mejorar el rendimiento con los mejores componentes.',
      color: 'from-purple-500 to-purple-600',
      delay: 0.3
    },
    {
      icon: HardDrive,
      title: 'Eliminación de Virus',
      description: 'Protección completa contra malware, virus y amenazas de seguridad.',
      color: 'from-red-500 to-red-600',
      delay: 0.4
    },
    {
      icon: Database,
      title: 'Recuperación de Datos',
      description: 'Recuperación segura de archivos perdidos o eliminados accidentalmente.',
      color: 'from-orange-500 to-orange-600',
      delay: 0.5
    },
    {
      icon: Headphones,
      title: 'Soporte Técnico Remoto',
      description: 'Asistencia inmediata desde la comodidad de tu hogar o oficina.',
      color: 'from-cyan-500 to-cyan-600',
      delay: 0.6
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section id="servicios" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Tech Background */}
      <TechBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nuestros <span className="text-gradient">Servicios</span>
          </motion.h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
            Soluciones completas para mantener tu equipo en perfecto estado
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
        >
          {servicios.map((servicio, index) => {
            const Icon = servicio.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-slate-800/80 backdrop-blur-sm p-5 sm:p-6 lg:p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Glowing background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${servicio.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <motion.div
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${servicio.color} rounded-xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 relative z-10 shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </motion.div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white relative z-10">
                  {servicio.title}
                </h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed relative z-10">
                  {servicio.description}
                </p>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${servicio.color} opacity-5 group-hover:opacity-20 transition-opacity duration-300`} />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Servicios

