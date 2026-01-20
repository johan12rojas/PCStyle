import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, Award, User } from 'lucide-react'
import TechBackground from './TechBackground'

const Nosotros = () => {
  const [expandedCard, setExpandedCard] = useState(null)

  const teamMembers = [
    {
      id: 1,
      name: 'Alexander Rodriguez',
      role: 'CEO y Fundador de PCStyle',
      title: 'Electrónico – Tecnólogo en mantenimiento de equipos y redes',
      image: '/IMG/rodri_CEO.png',
      shortDescription: 'Especialista en diagnóstico, reparación y mantenimiento avanzado de computadores y equipos electrónicos.',
      fullDescription: 'Especialista en diagnóstico, reparación y mantenimiento avanzado de computadores y equipos electrónicos. Amplia experiencia en solución de fallas a nivel de hardware, placas electrónicas, fuentes de poder y tarjetas gráficas, enfocado en ofrecer soluciones eficientes, confiables y orientadas a resultados para clientes corporativos y particulares.',
      expertise: [
        'Diagnóstico avanzado de equipos',
        'Reparación de hardware y placas electrónicas',
        'Solución de fallas en fuentes de poder',
        'Reparación de tarjetas gráficas',
        'Mantenimiento preventivo y correctivo'
      ]
    },
    {
      id: 2,
      name: 'Sebastian Rojas',
      role: 'Ingeniero de Sistemas',
      title: 'Especialista en Desarrollo y Soporte Técnico',
      image: '/IMG/sebas_ing.png',
      shortDescription: 'Ingeniero de sistemas con 3 años de experiencia, especializado en desarrollo web y soporte técnico integral.',
      fullDescription: 'Sebastian aporta una perspectiva moderna y tecnológica al equipo de PCStyle. Como Ingeniero de Sistemas con 3 años de experiencia, combina sus conocimientos en desarrollo de software con experiencia práctica en soporte técnico, permitiendo ofrecer soluciones integrales que van desde la reparación física hasta la optimización de software y desarrollo web.',
      expertise: [
        'Desarrollo web full-stack',
        'Soporte técnico remoto',
        'Instalación y configuración de software',
        'Optimización de sistemas',
        'Desarrollo de soluciones personalizadas'
      ]
    }
  ]

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <section id="nosotros" className="py-16 sm:py-20 lg:py-24 bg-slate-900 relative overflow-hidden">
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
            <span className="text-gradient">Nuestro Equipo</span>
          </motion.h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
            Conoce a los profesionales detrás de PCStyle
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Card Header */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col items-center text-center mb-6">
                  <motion.div
                    className="w-32 h-32 sm:w-40 sm:h-40 mb-4 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-xl"
                    whileHover={{ scale: 1.05, borderColor: 'rgba(59, 130, 246, 0.6)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-semibold text-sm sm:text-base mb-1">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm">
                    {member.title}
                  </p>
                </div>



                {/* Ver más button */}
                <motion.button
                  onClick={() => toggleCard(member.id)}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-blue-500/30 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {expandedCard === member.id ? (
                    <>
                      Ver menos
                      <ChevronUp className="w-5 h-5" />
                    </>
                  ) : (
                    <>
                      Ver más
                      <ChevronDown className="w-5 h-5" />
                    </>
                  )}
                </motion.button>
              </div>

              {/* Expanded Content */}
              <AnimatePresence mode="wait">
                {expandedCard === member.id && (
                  <motion.div
                    key={`expanded-${member.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="border-t border-slate-700/50 overflow-hidden"
                  >
                    <div className="p-6 sm:p-8 space-y-6">
                      {/* Full Description */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <User className="w-5 h-5 text-blue-400" />
                          <h4 className="text-lg font-semibold text-white">Perfil Profesional</h4>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {member.fullDescription}
                        </p>
                      </div>

                      {/* Expertise */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Award className="w-5 h-5 text-blue-400" />
                          <h4 className="text-lg font-semibold text-white">Áreas de Expertise</h4>
                        </div>
                        <ul className="grid grid-cols-1 gap-2">
                          {member.expertise.map((skill, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 }}
                              className="flex items-center gap-2 text-gray-300 text-sm"
                            >
                              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                              {skill}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Nosotros
