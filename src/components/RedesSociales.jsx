import { motion } from 'framer-motion'
import { Camera, Instagram, Facebook } from 'lucide-react'
import TechBackground from './TechBackground'

const RedesSociales = () => {
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-900 relative overflow-hidden">
      {/* Tech Background */}
      <TechBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Lado Izquierdo - Texto y Botones */}
            <motion.div variants={itemVariants} className="text-center lg:text-left order-2 lg:order-1">
              {/* Camera Icon */}
              <motion.div
                className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto lg:mx-0 mb-4 sm:mb-6 shadow-lg"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <Camera className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </motion.div>

              {/* Title */}
              <motion.h2
                variants={itemVariants}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-2 sm:px-0"
              >
                ¿Quieres ver más trabajos?
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed px-2 sm:px-0 max-w-xl mx-auto lg:mx-0"
              >
                Síguenos en nuestras redes sociales para ver actualizaciones constantes de nuestros mantenimientos
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-2 sm:px-0"
              >
                {/* Instagram Button */}
                <motion.a
                  href="https://www.instagram.com/pcstylecol/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 hover:from-pink-600 hover:via-purple-600 hover:to-pink-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-pink-500/50 flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(236, 72, 153, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Ver en Instagram</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>

                {/* Facebook Button */}
                <motion.a
                  href="https://www.facebook.com/pcstylecol/?locale=es_LA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-blue-600 hover:bg-blue-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-blue-500/50 flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap"
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(59, 130, 246, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Ver en Facebook</span>
                  <motion.div
                    className="absolute inset-0 bg-blue-700"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Lado Derecho - iPhone Mockup con Facebook */}
            <motion.div variants={itemVariants} className="lg:h-full flex items-center justify-center w-full order-1 lg:order-2 mb-6 lg:mb-0">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 blur-3xl rounded-full -z-10" />
                
                {/* iPhone Frame */}
                <div className="relative w-full max-w-[320px] sm:max-w-[360px] mx-auto">
                  {/* iPhone Outer Frame */}
                  <div className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 rounded-[3rem] p-2 shadow-2xl">
                    {/* iPhone Screen Border */}
                    <div className="bg-black rounded-[2.5rem] p-2 shadow-inner">
                      {/* Notch */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-[120px] h-7 bg-black rounded-full z-20" />
                      
                      {/* Screen Content */}
                      <div className="bg-white rounded-[2rem] overflow-hidden relative">
                        {/* Status Bar */}
                        <div className="bg-white pt-8 pb-2 px-6 flex items-center justify-between text-black text-xs font-semibold">
                          <span>9:41</span>
                          <div className="flex items-center gap-1">
                            <div className="flex gap-0.5">
                              <div className="w-1 h-1 bg-black rounded-full" />
                              <div className="w-1 h-1 bg-black rounded-full" />
                              <div className="w-1 h-1 bg-black/30 rounded-full" />
                            </div>
                            <div className="w-6 h-3 border border-black rounded-sm">
                              <div className="w-[70%] h-full bg-green-500 rounded-sm" />
                            </div>
                          </div>
                        </div>

                        {/* Facebook Widget */}
                        <div className="bg-gray-50 min-h-[530px] overflow-hidden">
                          {/* Facebook Header */}
                          <div className="bg-blue-600 px-3 py-2 flex items-center justify-between shadow-sm">
                            <div className="flex items-center gap-2">
                              <Facebook className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                              <span className="text-white font-semibold text-xs sm:text-sm">Facebook</span>
                            </div>
                          </div>

                          {/* Facebook Content Area */}
                          <div className="p-0 h-[480px] sm:h-[500px] overflow-hidden">
                            <iframe
                              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpcstylecol&tabs=timeline&width=320&height=480&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                              width="100%"
                              height="480"
                              style={{ border: 'none', overflow: 'hidden' }}
                              scrolling="no"
                              frameBorder="0"
                              allowFullScreen={true}
                              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                              title="Facebook PCStyle"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Call to Action */}
                <motion.div
                  className="text-center mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.a
                    href="https://www.facebook.com/pcstylecol/?locale=es_LA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Ver más en Facebook →
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RedesSociales

