import { motion } from 'framer-motion'
import { Shield, Clock, DollarSign, CheckCircle, Truck, Headphones } from 'lucide-react'
import TechBackground from './TechBackground'

const Beneficios = () => {
  const beneficios = [
    {
      icon: Shield,
      title: 'Garantía Total',
      description: 'En cada reparación y mantenimiento',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    },
    {
      icon: Clock,
      title: 'Respuesta Inmediata',
      description: 'Atención rápida y eficiente',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: DollarSign,
      title: 'Precios Justos',
      description: 'Sin sorpresas ni costos ocultos',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10'
    },
    {
      icon: CheckCircle,
      title: 'Técnicos Expertos',
      description: 'Certificados y con experiencia',
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Truck,
      title: 'A Domicilio',
      description: 'En toda Cúcuta y alrededores',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10'
    },
    {
      icon: Headphones,
      title: 'Soporte 24/7',
      description: 'Asesoría cuando la necesites',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10'
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Tech Background */}
      <TechBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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
            ¿Por qué elegir <span className="text-gradient">PCStyle?</span>
          </motion.h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
            La confianza de más de 300 clientes en Cúcuta nos respalda
          </p>
        </motion.div>

        {/* Diseño innovador con líneas conectoras */}
        <div className="max-w-6xl mx-auto">
          {/* Grid de beneficios con diseño especial */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {beneficios.map((beneficio, index) => {
              const Icon = beneficio.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Card con diseño limpio */}
                  <div className="relative h-full p-5 sm:p-6 rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                    {/* Línea decorativa superior */}
                    <div className="absolute top-0 left-5 sm:left-6 right-5 sm:right-6 h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Icono minimalista */}
                    <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${beneficio.bgColor} mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${beneficio.color}`} />
                    </div>
                    
                    {/* Contenido */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {beneficio.title}
                    </h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                      {beneficio.description}
                    </p>
                    
                    {/* Indicador de hover */}
                    <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Línea conectora animada (solo en desktop y para elementos conectados) */}
                  {index < beneficios.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-slate-700 to-transparent z-0"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.5 }}
                    />
                  )}
                </motion.div>
              )
            })}
          </div>

          {/* CTA destacado al final */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-8 sm:mt-10 lg:mt-12 text-center px-4 sm:px-0"
          >
            <div className="inline-flex flex-col items-center gap-3 sm:gap-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 border border-blue-500/20 backdrop-blur-sm w-full sm:w-auto">
              <p className="text-gray-300 text-base sm:text-lg">
                ¿Listo para mejorar tu equipo?
              </p>
              <motion.a
                href="#contacto"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-blue-500/50 whitespace-nowrap"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Contáctanos Ahora
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Beneficios
