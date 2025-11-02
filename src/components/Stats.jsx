import { motion } from 'framer-motion'
import { Wrench, Users, Award } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

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
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  const Counter = ({ value, isVisible, delay }) => {
    if (!isVisible) return value
    
    // Si es un número, animarlo
    if (value.includes('+')) {
      const num = parseInt(value.replace('+', ''))
      return (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay, duration: 0.5 }}
        >
          {value}
        </motion.span>
      )
    }
    return value
  }

  return (
    <section ref={ref} className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Tech Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        {/* Líneas de circuito */}
        <svg className="absolute inset-0 w-full h-full" style={{ filter: 'blur(1px)' }}>
          {Array.from({ length: 10 }, (_, i) => (
            <motion.line
              key={i}
              x1={`${Math.random() * 100}%`}
              y1={`${Math.random() * 100}%`}
              x2={`${Math.random() * 100}%`}
              y2={`${Math.random() * 100}%`}
              stroke="url(#statsGradient)"
              strokeWidth="1"
              opacity={0.3}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}
            />
          ))}
          <defs>
            <linearGradient id="statsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-3 gap-5 sm:gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative bg-slate-800/80 backdrop-blur-sm p-5 sm:p-6 lg:p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                whileHover={{ y: -10, scale: 1.05 }}
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 relative z-10 shadow-lg`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </motion.div>
                
                {/* Value */}
                <motion.h3
                  className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-white relative z-10"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: stat.delay, type: 'spring', stiffness: 200 }}
                >
                  <Counter value={stat.value} isVisible={isInView} delay={stat.delay} />
                </motion.h3>
                
                {/* Label */}
                <p className="text-gray-400 text-base sm:text-lg font-medium relative z-10">
                  {stat.label}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Stats

