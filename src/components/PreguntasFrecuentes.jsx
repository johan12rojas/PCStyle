import { useState } from 'react'
import { m } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import TechBackground from './TechBackground'

export const FAQ_ITEMS = [
  {
    question:
      '¿Por qué PCStyle es reconocido como el mejor servicio técnico de computadores en la región?',
    answer:
      'Contamos con más de 6 años de experiencia, más de 1.200 reparaciones exitosas y calificación de 5.0 estrellas respaldada por más de 480 clientes en Cúcuta, Norte de Santander y toda la región. Combinamos diagnóstico electrónico avanzado, técnicos certificados, garantía real y atención a domicilio.',
  },
  {
    question: '¿En qué zonas de Cúcuta y el Área Metropolitana ofrecen servicio técnico?',
    answer:
      'Ofrecemos servicio técnico de computadores y portátiles a domicilio en los principales sectores de Cúcuta (Centro, Caobos, La Ceiba, La Riviera, Niza, Atalaya, Prados del Este, Quinta Oriental, Colsag y Guaimaral), además de Los Patios y Villa del Rosario, junto con soporte remoto y creación de páginas web para toda la región.',
  },
  {
    question: '¿Ofrecen servicio técnico a domicilio en Cúcuta?',
    answer:
      'Sí, ofrecemos servicio técnico a domicilio en todos los sectores de Cúcuta y municipios cercanos. Nuestros técnicos certificados se desplazan hasta tu hogar u oficina para diagnóstico, mantenimiento preventivo y reparación.',
  },
  {
    question: '¿Cuánto tiempo tarda una reparación o mantenimiento de computador?',
    answer:
      'El tiempo depende de la falla. Mantenimientos preventivos, instalación de programas y reparaciones simples se resuelven el mismo día; reparaciones complejas de placa base o hardware especializado toman entre 2 y 3 días hábiles.',
  },
  {
    question: '¿Todas las reparaciones incluyen garantía?',
    answer:
      'Sí, todas nuestras reparaciones y mantenimientos cuentan con garantía real por escrito. Según el tipo de servicio o repuesto instalado, la garantía es de 30 a 90 días.',
  },
  {
    question:
      '¿Cuánto cuesta crear una página web o landing page con posicionamiento SEO en PCStyle?',
    answer:
      'Ofrecemos planes base referenciales desde $300.000 COP para landing pages, $550.000 COP para sitios web corporativos y $800.000+ COP para proyectos a medida. Todos se entregan optimizados con SEO técnico para posicionar tu negocio en Google en Cúcuta, Norte de Santander y toda la región.',
  },
]

const PreguntasFrecuentes = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleItem = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index))
  }

  return (
    <section
      id="preguntas-frecuentes"
      aria-labelledby="faq-heading"
      className="section-defer py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-900 via-slate-800/95 to-slate-900 relative overflow-hidden"
    >
      <TechBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs sm:text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Resolvemos tus dudas</span>
          </div>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-white"
          >
            Preguntas <span className="text-gradient">Frecuentes</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
            Todo lo que necesitas saber sobre nuestro servicio técnico de computadores a domicilio y
            diseño web en Cúcuta, Norte de Santander y la región
          </p>
        </m.div>

        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`

            return (
              <div
                key={item.question}
                className={`rounded-2xl border transition-colors duration-200 ${
                  isOpen
                    ? 'bg-slate-800/95 border-blue-500/50 shadow-lg shadow-blue-500/10'
                    : 'bg-slate-800/75 border-slate-700/60 hover:border-slate-600'
                }`}
              >
                <h3 className="m-0">
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
                  >
                    <span className="text-base sm:text-lg font-semibold text-white leading-snug">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-blue-400 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>

                {/* Contenido siempre presente en el DOM para indexación SEO completa */}
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 pt-0 text-gray-300 text-sm sm:text-base leading-relaxed border-t border-slate-700/40 mt-1 pt-4">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default PreguntasFrecuentes
