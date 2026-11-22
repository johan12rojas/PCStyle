import { useState } from 'react'
import { m } from 'framer-motion'
import { ChevronDown, ChevronUp, Award, User } from 'lucide-react'
import TechBackground from './TechBackground'

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Alexander Rodriguez',
    role: 'CEO y Fundador de PCStyle',
    title: 'Electrónico – Tecnólogo en mantenimiento de equipos y redes',
    image: '/IMG/rodri_CEO.png',
    fullDescription:
      'Especialista en diagnóstico, reparación y mantenimiento avanzado de computadores y equipos electrónicos. Amplia experiencia en solución de fallas a nivel de hardware, placas electrónicas, fuentes de poder y tarjetas gráficas, enfocado en ofrecer soluciones eficientes, confiables y orientadas a resultados para clientes corporativos y particulares.',
    expertise: [
      'Diagnóstico avanzado de equipos',
      'Reparación de hardware y placas electrónicas',
      'Solución de fallas en fuentes de poder',
      'Reparación de tarjetas gráficas',
      'Mantenimiento preventivo y correctivo',
    ],
  },
  {
    id: 2,
    name: 'Sebastian Rojas',
    role: 'Ingeniero de Sistemas',
    title: 'Especialista en Desarrollo y Soporte Técnico',
    image: '/IMG/sebas_ing.png',
    fullDescription:
      'Sebastian aporta una perspectiva moderna y tecnológica al equipo de PCStyle. Como Ingeniero de Sistemas con 3 años de experiencia, combina sus conocimientos en desarrollo de software con experiencia práctica en soporte técnico, permitiendo ofrecer soluciones integrales que van desde la reparación física hasta la optimización de software y desarrollo web.',
    expertise: [
      'Desarrollo web full-stack',
      'Soporte técnico remoto',
      'Instalación y configuración de software',
      'Optimización de sistemas',
      'Desarrollo de soluciones personalizadas',
    ],
  },
]

const Nosotros = () => {
  const [expandedCard, setExpandedCard] = useState(null)

  const toggleCard = (id) => {
    setExpandedCard((prev) => (prev === id ? null : id))
  }

  return (
    <section
      id="nosotros"
      className="section-defer py-16 sm:py-20 lg:py-24 bg-slate-900 relative overflow-hidden"
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
            <span className="text-gradient">Nuestro Equipo</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
            Conoce a los profesionales detrás de PCStyle
          </p>
        </m.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto items-start">
          {TEAM_MEMBERS.map((member, index) => (
            <m.div
              key={member.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.12, ease: 'easeOut' }}
              className="bg-slate-800/90 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-blue-500/50 transition-colors duration-300"
            >
              {/* Card Header */}
              <div className="p-6 sm:p-8">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 mb-4 rounded-full overflow-hidden border-4 border-blue-500/30 hover:border-blue-500/60 shadow-xl transition-all duration-300 hover:scale-105">
                    <img
                      src={member.image}
                      alt={member.name}
                      width="160"
                      height="160"
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 font-semibold text-sm sm:text-base mb-1">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-xs sm:text-sm">{member.title}</p>
                </div>

                {/* Ver más button */}
                <button
                  type="button"
                  onClick={() => toggleCard(member.id)}
                  aria-expanded={expandedCard === member.id}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-blue-500/30 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
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
                </button>
              </div>

              {/* Expanded Content — siempre montado en el DOM para SEO (E-E-A-T) */}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                  expandedCard === member.id
                    ? 'grid-rows-[1fr] opacity-100 border-t border-slate-700/50'
                    : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-6 sm:p-8 space-y-6">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <User className="w-5 h-5 text-blue-400" />
                        <h4 className="text-lg font-semibold text-white">Perfil Profesional</h4>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {member.fullDescription}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <Award className="w-5 h-5 text-blue-400" />
                        <h4 className="text-lg font-semibold text-white">Áreas de Expertise</h4>
                      </div>
                      <ul className="grid grid-cols-1 gap-2">
                        {member.expertise.map((skill, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0" />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Nosotros
