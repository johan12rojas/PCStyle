import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, X } from 'lucide-react'
import TechBackground from './TechBackground'

const Portafolio = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [imageErrors, setImageErrors] = useState({})

  const proyectos = [
    {
      id: 'actualizacion', // Ensamblaje se mapea a actualización de componentes
      title: 'Ensamblaje de PC',
      description: 'Montaje completo de computadoras personalizadas según tus necesidades',
      detailedDescription: 'Ofrecemos servicio completo de ensamblaje de computadoras personalizadas. Nuestro equipo profesional selecciona los mejores componentes para cada necesidad específica, garantizando compatibilidad y máximo rendimiento. Incluye instalación del sistema operativo, drivers actualizados y pruebas de estabilidad completas.',
      category: 'Ensamblaje',
      color: 'from-blue-500 to-blue-700',
      image: '/IMG/ensamblaje.webp',
      collage: false
    },
    {
      id: 'remoto',
      title: 'Asesoría Técnica',
      description: 'Consultoría profesional para elegir los mejores componentes',
      detailedDescription: 'Nuestro servicio de asesoría técnica te ayuda a tomar las mejores decisiones para tu equipo. Evaluamos tus necesidades específicas (gaming, trabajo, diseño, etc.) y recomendamos componentes que se ajusten a tu presupuesto. Análisis de compatibilidad, presupuestos personalizados y guía durante todo el proceso de selección.',
      category: 'Asesoría',
      color: 'from-purple-500 to-purple-700',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      collage: false
    },
    {
      id: 'mantenimiento',
      title: 'Configuración de Sistemas',
      description: 'Setup completo y optimización de equipos nuevos y usados',
      detailedDescription: 'Service de configuración integral para equipos nuevos o usados. Incluye instalación de Windows, configuración de drivers, optimización del rendimiento, eliminación de software innecesario y configuración de seguridad básica. Tu equipo funcionará al máximo desde el primer día.',
      category: 'Configuración',
      color: 'from-green-500 to-green-700',
      images: ['/IMG/conf1.webp', '/IMG/conf2.webp'],
      collage: true
    },
    {
      id: 'actualizacion',
      title: 'Instalación de Programas',
      description: 'Instalación y configuración de software esencial y especializado',
      detailedDescription: 'Instalamos y configuramos todo el software que necesitas. Desde suites ofimáticas (Office, LibreOffice) hasta software especializado de diseño, desarrollo o contabilidad. Activamos licencias, configuramos preferencias iniciales y dejamos todo listo para usar. Servicio remoto o a domicilio.',
      category: 'Instalación',
      color: 'from-orange-500 to-orange-700',
      image: '/IMG/instalacion_programas.webp',
      collage: false
    },
    {
      id: 'reparacion',
      title: 'Reparación de Motherboard',
      description: 'Diagnóstico y reparación de placa base dañada',
      detailedDescription: 'Servicio especializado en reparación de placas base. Diagnosticamos el problema mediante pruebas de componentes, identificación de daños físicos y análisis electrónico. Reparamos daños comunes como capacitores hinchados, circuitos dañados y problemas de conectividad. Ahorra dinero reparando en lugar de reemplazar.',
      category: 'Reparación',
      color: 'from-red-500 to-red-700',
      image: '/IMG/reparacion_mother.webp',
      collage: false
    },
    {
      id: 'recuperacion',
      title: 'Recuperación de Datos',
      description: 'Rescate exitoso de información crítica',
      detailedDescription: 'Rescatamos tus datos importantes cuando todo parece perdido. Servicio especializado de recuperación de información en discos duros, SSDs, USB y tarjetas de memoria. Manejo desde casos simples (archivos borrados accidentalmente) hasta situaciones complejas (discos dañados físicamente). Máxima confidencialidad garantizada.',
      category: 'Recuperación',
      color: 'from-pink-500 to-pink-700',
      image: '/IMG/datos.webp',
      collage: false
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
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <section id="portafolio" className="py-16 sm:py-20 lg:py-24 bg-slate-900 relative overflow-hidden">
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
            Nuestro <span className="text-gradient">Portafolio</span>
          </motion.h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
            Trabajos realizados con excelencia y dedicación
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
        >
          {proyectos.map((proyecto, index) => {
            // Alt text específico según el tipo de proyecto
            const getAltText = () => {
              switch (proyecto.id) {
                case 'mantenimiento':
                  return proyecto.title === 'Ensamblaje de PC' 
                    ? 'Técnico ensamblando computadora personalizada en Cúcuta - PCStyle servicio técnico'
                    : 'Técnico configurando sistema operativo y optimizando PC en Cúcuta - PCStyle servicio técnico';
                case 'actualizacion':
                  return 'Técnico instalando programas y software en computadora en Cúcuta - PCStyle servicio técnico';
                case 'reparacion':
                  return 'Técnico reparando motherboard y placa base dañada en Cúcuta - PCStyle servicio técnico';
                case 'recuperacion':
                  return 'Técnico recuperando datos de disco duro dañado en Cúcuta - PCStyle servicio técnico';
                default:
                  return `Técnico de PCStyle realizando ${proyecto.title.toLowerCase()} en Cúcuta - Servicio técnico profesional`;
              }
            };

            return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              {/* Image background - sin overlay de color */}
              <div className="h-48 relative overflow-hidden bg-slate-700/50">
                {proyecto.collage ? (
                  <div className="grid grid-cols-2 gap-1 h-full">
                    {proyecto.images.map((img, idx) => {
                      const imageKey = `${index}-${idx}`
                      const hasError = imageErrors[imageKey]
                      
                      if (hasError) {
                        return (
                          <div key={idx} className="w-full h-full flex items-center justify-center bg-slate-700 text-gray-400 text-xs p-2 text-center">
                            Imagen no disponible
                          </div>
                        )
                      }
                      
                      return (
                        <img
                          key={idx}
                          src={img}
                          alt={`${getAltText()} - Imagen ${idx + 1}`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          onError={() => {
                            setImageErrors(prev => ({ ...prev, [imageKey]: true }))
                          }}
                        />
                      )
                    })}
                  </div>
                ) : (
                  (() => {
                    const imageKey = `${index}-main`
                    const hasError = imageErrors[imageKey]
                    
                    if (hasError) {
                      return (
                        <div className="w-full h-full flex items-center justify-center bg-slate-700 text-gray-400 text-xs p-2 text-center">
                          Imagen no disponible
                        </div>
                      )
                    }
                    
                    return (
                      <img
                        src={proyecto.image}
                        alt={getAltText()}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={() => {
                          setImageErrors(prev => ({ ...prev, [imageKey]: true }))
                        }}
                      />
                    )
                  })()
                )}
                
                {/* Overlay sutil solo en hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-opacity duration-300"
                  initial={false}
                >
                  <motion.button
                    className="bg-white/90 text-gray-900 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg flex items-center gap-2 font-semibold text-sm sm:text-base shadow-lg whitespace-nowrap"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedProject(proyecto)}
                  >
                    <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    Ver más
                  </motion.button>
                </motion.div>
              </div>
              
              <div className="p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">{proyecto.title}</h3>
                <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">{proyecto.description}</p>
                <span className={`inline-block bg-gradient-to-r ${proyecto.color} text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold`}>
                  {proyecto.category}
                </span>
              </div>
            </motion.div>
          );
          })}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="bg-slate-800 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-4 sm:p-6 border-b border-slate-700 flex items-center justify-between gap-3 sm:gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                  <span className={`inline-block bg-gradient-to-r ${selectedProject.color} text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold`}>
                    {selectedProject.category}
                  </span>
                </div>
                <motion.button
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                  className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center bg-slate-700 hover:bg-slate-600 rounded-full text-white transition-colors flex-shrink-0"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 overflow-y-auto flex-1">
                <div className="mb-4 sm:mb-6 rounded-xl overflow-hidden bg-slate-700/50">
                  {selectedProject.collage ? (
                    <div className="grid grid-cols-2 gap-2">
                      {selectedProject.images.map((img, idx) => {
                        const getModalAltText = () => {
                          switch (selectedProject.id) {
                            case 'mantenimiento':
                              return 'Técnico configurando sistema operativo Windows y optimizando PC en Cúcuta - PCStyle servicio técnico';
                            default:
                              return `Técnico especializado realizando ${selectedProject.title.toLowerCase()} en Cúcuta - PCStyle servicio técnico profesional`;
                          }
                        };
                        const modalImageKey = `modal-${selectedProject.id}-${idx}`
                        const hasError = imageErrors[modalImageKey]
                        
                        if (hasError) {
                          return (
                            <div key={idx} className="w-full h-40 sm:h-48 lg:h-64 flex items-center justify-center bg-slate-700 text-gray-400 text-xs p-2 text-center">
                              Imagen no disponible
                            </div>
                          )
                        }
                        
                        return (
                          <img
                            key={idx}
                            src={img}
                            alt={`${getModalAltText()} - Imagen detalle ${idx + 1}`}
                            className="w-full h-40 sm:h-48 lg:h-64 object-cover"
                            loading="lazy"
                            onError={() => {
                              setImageErrors(prev => ({ ...prev, [modalImageKey]: true }))
                            }}
                          />
                        );
                      })}
                    </div>
                  ) : (
                    (() => {
                      const modalImageKey = `modal-${selectedProject.id}-main`
                      const hasError = imageErrors[modalImageKey]
                      
                      if (hasError) {
                        return (
                          <div className="w-full h-64 sm:h-80 lg:h-96 flex items-center justify-center bg-slate-700 text-gray-400 text-xs p-2 text-center rounded-xl">
                            Imagen no disponible
                          </div>
                        )
                      }
                      
                      return (
                        <img
                          src={selectedProject.image}
                          alt={`Técnico de PCStyle ejecutando ${selectedProject.title.toLowerCase()} en computadora en Cúcuta - Reparación y mantenimiento de portátiles y PC`}
                          className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl"
                          loading="lazy"
                          onError={() => {
                            setImageErrors(prev => ({ ...prev, [modalImageKey]: true }))
                          }}
                        />
                      )
                    })()
                  )}
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">Descripción General</h4>
                    <p className="text-gray-400 text-sm sm:text-base">{selectedProject.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-white mb-1.5 sm:mb-2">Detalles del Servicio</h4>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{selectedProject.detailedDescription}</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 sm:p-6 border-t border-slate-700 flex justify-end">
                <motion.a
                  href="#contacto"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-blue-500/50 whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.preventDefault()
                    localStorage.setItem('selectedService', selectedProject.id)
                    setSelectedProject(null)
                    // Scroll suave después de cerrar el modal
                    setTimeout(() => {
                      document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
                    }, 300)
                  }}
                >
                  Solicitar este Servicio
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Portafolio

