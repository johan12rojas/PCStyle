import { motion } from 'framer-motion'
import { Wrench, Users, Award } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import TechBackground from './TechBackground'

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    {
      icon: Wrench,
      value: '1200+',
      label: 'Reparaciones',
      color: 'from-blue-500 to-blue-600',
      delay: 0.1
    },
    {
      icon: Users,
      value: '300+',
      label: 'Clientes Felices',
      color: 'from-purple-500 to-purple-600',
      delay: 0.2
    },
    {
      icon: Award,
      value: '5 años',
      label: 'Experiencia',
      color: 'from-green-500 to-green-600',
      delay: 0.3
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94] // easing más suave
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] // easing más suave y lento
      }
    }
  }

  const Counter = ({ value, isVisible, delay }) => {
    if (!isVisible) return value
    
    // Si es un número, animarlo con transición más suave
    if (value.includes('+')) {
      const num = parseInt(value.replace('+', ''))
      return (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: delay + 0.2, 
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          {value}
        </motion.span>
      )
    }
    return (
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: delay + 0.2, 
          duration: 0.8,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
      >
        {value}
      </motion.span>
    )
  }

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Tech Background */}
      <TechBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative bg-slate-800/80 backdrop-blur-sm p-5 sm:p-6 lg:p-7 rounded-2xl border border-slate-700/50 hover:border-blue-500/40 transition-all duration-500 ease-out group shadow-lg hover:shadow-xl hover:shadow-blue-500/10 flex flex-col items-center text-center"
                whileHover={{ y: -4, scale: 1.01 }}
              >
                {/* Glow effect on hover - más sutil */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 blur-2xl`} />
                
                {/* Icon - Centrado, más pequeño */}
                <motion.div
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 sm:mb-5 relative z-10 shadow-lg`}
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.08 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </motion.div>
                
                {/* Value - Centrado, más pequeño */}
                <motion.h3
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 text-white relative z-10 tracking-tight"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ 
                    duration: 1, 
                    delay: stat.delay, 
                    ease: [0.25, 0.46, 0.45, 0.94] 
                  }}
                >
                  <span className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    <Counter value={stat.value} isVisible={isInView} delay={stat.delay} />
                  </span>
                </motion.h3>
                
                {/* Label - Centrado, más pequeño */}
                <p className="text-gray-300 text-sm sm:text-base lg:text-lg font-medium relative z-10">
                  {stat.label}
                </p>
                
                {/* Decorative line - más sutil */}
                <div className={`mt-4 h-0.5 w-12 bg-gradient-to-r ${stat.color} rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500`} />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Stats

