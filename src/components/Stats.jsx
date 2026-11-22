import { m } from 'framer-motion'
import { Wrench, Users, Award } from 'lucide-react'
import TechBackground from './TechBackground'

const STATS = [
  {
    icon: Wrench,
    value: '1200+',
    label: 'Reparaciones',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Users,
    value: '480+',
    label: 'Clientes en la Región',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Award,
    value: '6+ años',
    label: 'Experiencia · Top #1',
    color: 'from-green-500 to-green-600',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
}

const Stats = () => {
  return (
    <section className="section-defer py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <TechBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <m.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-5xl mx-auto"
        >
          {STATS.map((stat) => {
            const Icon = stat.icon
            return (
              <m.div
                key={stat.label}
                variants={itemVariants}
                className="relative bg-slate-800/90 p-5 sm:p-6 lg:p-7 rounded-2xl border border-slate-700/50 hover:border-blue-500/40 transition-all duration-300 ease-out group shadow-lg hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1 flex flex-col items-center text-center"
              >
                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none`}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 sm:mb-5 relative z-10 shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </div>

                {/* Value */}
                <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-white relative z-10 tracking-tight">
                  <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </span>
                </p>

                {/* Label */}
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg font-medium relative z-10">
                  {stat.label}
                </p>

                {/* Decorative line */}
                <div
                  className={`mt-4 h-0.5 w-12 bg-gradient-to-r ${stat.color} rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300`}
                />
              </m.div>
            )
          })}
        </m.div>
      </div>
    </section>
  )
}

export default Stats
