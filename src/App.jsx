import { useState, useEffect } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Beneficios from './components/Beneficios'
import Servicios from './components/Servicios'
import Portafolio from './components/Portafolio'
import RedesSociales from './components/RedesSociales'
import Opiniones from './components/Opiniones'
import Nosotros from './components/Nosotros'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import ChatWidget from './components/ChatWidget'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="relative">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 z-50 origin-left"
        style={{ scaleX }}
      />
      
      <Navbar />
      <Hero />
      <Stats />
      <Beneficios />
      <Servicios />
      <Portafolio />
      <RedesSociales />
      <Opiniones />
      <Nosotros />
      <Contacto />
      <Footer />
      <ChatWidget />
    </div>
  )
}

export default App

