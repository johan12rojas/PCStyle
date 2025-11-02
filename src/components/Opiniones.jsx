import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import TechBackground from './TechBackground'

const Opiniones = () => {
  // Imágenes de fondo de mantenimientos
  const maintenanceImages = [
    '/IMG/i1.webp',
    '/IMG/i2.webp',
    '/IMG/i3.webp',
    '/IMG/i4.webp',
    '/IMG/i5.webp',
    '/IMG/i6.webp',
    '/IMG/i7.webp',
  ]

  // Estado para el carrusel de imágenes de fondo
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Cambiar imagen cada 4 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % maintenanceImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [maintenanceImages.length])

  const testimonios = [
    {
      name: 'María Camila',
      location: 'Cúcuta',
      rating: 5,
      comment: 'Excelente servicio, muy profesionales. Mi computadora quedó como nueva después del mantenimiento. Totalmente recomendado.',
      avatar: 'MC',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Juan Sebastián',
      location: 'Cúcuta',
      rating: 5,
      comment: 'Rápido, eficiente y con excelente atención al cliente. Solucionaron mi problema en el mismo día.',
      avatar: 'JS',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Ana Rodríguez',
      location: 'Cúcuta',
      rating: 5,
      comment: 'Profesionales de verdad. Me ayudaron a actualizar mi PC y ahora funciona perfectamente. Muchas gracias.',
      avatar: 'AR',
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Carlos González',
      location: 'Cúcuta',
      rating: 5,
      comment: 'El mejor servicio técnico de la ciudad. Precios justos y trabajo de calidad. Definitivamente volveré.',
      avatar: 'CG',
      color: 'from-orange-500 to-orange-600'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section id="opiniones" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Fondo con imágenes de mantenimientos */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          {maintenanceImages.map((img, index) => (
            index === currentImageIndex && (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="absolute inset-0"
              >
                <img
                  src={img}
                  alt={`Mantenimiento de computadora realizado por PCStyle en Cúcuta ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Overlay oscuro para mantener legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/80 to-slate-900/85" />
                {/* Overlay adicional con patrón sutil */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10" />
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* Tech Background (más sutil cuando hay imágenes) */}
      <div className="absolute inset-0 z-[1] opacity-30">
        <TechBackground />
      </div>

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
            Lo que dicen <span className="text-gradient">nuestros clientes</span>
          </motion.h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
            La satisfacción de nuestros clientes es nuestra prioridad
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8"
        >
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-slate-900/90 backdrop-blur-md p-5 sm:p-6 lg:p-8 rounded-2xl border border-slate-700/60 hover:border-yellow-500/50 transition-all duration-300 shadow-xl"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Quote icon */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-yellow-400" />
              </div>

              {/* Stars */}
              <div className="flex items-center mb-3 sm:mb-4 gap-1">
                {[...Array(testimonio.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + i * 0.1 }}
                  >
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-yellow-400" />
                  </motion.div>
                ))}
              </div>

              <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed relative z-10 text-sm sm:text-base">
                "{testimonio.comment}"
              </p>

              <div className="flex items-center gap-3 sm:gap-4">
                <motion.div
                  className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${testimonio.color} rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {testimonio.avatar}
                </motion.div>
                <div>
                  <p className="font-semibold text-white text-sm sm:text-base">{testimonio.name}</p>
                  <p className="text-xs sm:text-sm text-gray-400">{testimonio.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Google Reviews Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 sm:mt-12 lg:mt-16 max-w-2xl mx-auto bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-600/60 text-center px-4 sm:px-6 shadow-xl"
        >
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="text-3xl sm:text-4xl font-bold">G</div>
            <div>
              <p className="text-base sm:text-lg font-semibold text-white">Calificación en Google Reviews</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mb-2 flex-wrap">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-2xl sm:text-3xl font-bold text-white ml-2">4.9</span>
            <span className="text-gray-400 text-sm sm:text-base">de 5 estrellas</span>
          </div>
          <p className="text-gray-400 text-sm sm:text-base">Más de 200+ reseñas verificadas</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Opiniones

