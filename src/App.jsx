import { useState, useCallback, useEffect, lazy, Suspense } from 'react'
import { LazyMotion, domAnimation, MotionConfig, m, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Beneficios from './components/Beneficios'
import Servicios from './components/Servicios'
import DesarrolloWeb from './components/DesarrolloWeb'
import Portafolio from './components/Portafolio'
import RedesSociales from './components/RedesSociales'
import Opiniones from './components/Opiniones'
import Nosotros from './components/Nosotros'
import PreguntasFrecuentes from './components/PreguntasFrecuentes'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

// Solo el widget interactivo flotante se carga de forma diferida en cliente
const ChatWidget = lazy(() => import('./components/ChatWidget'))

function App() {
  const [preselectedRequest, setPreselectedRequest] = useState(null)
  const [isClient, setIsClient] = useState(false)

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleSelectService = useCallback((request) => {
    setPreselectedRequest({
      ...request,
      timestamp: Date.now(),
    })
  }, [])

  const handleClearPreselected = useCallback(() => {
    setPreselectedRequest(null)
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
        <div className="relative">
          {/* Progress Bar (GPU scaleX) */}
          <m.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 z-50 origin-left will-change-transform pointer-events-none"
            style={{ scaleX }}
          />

          <Navbar />
          <main>
            <Hero />
            <Stats />
            <Beneficios />
            <Servicios />
            <DesarrolloWeb onSelectPlan={handleSelectService} />
            <Portafolio onSelectService={handleSelectService} />
            <RedesSociales />
            <Opiniones />
            <Nosotros />
            <PreguntasFrecuentes />
            <Contacto
              preselectedRequest={preselectedRequest}
              onClearPreselected={handleClearPreselected}
            />
          </main>

          <Footer />

          {isClient && (
            <Suspense fallback={null}>
              <ChatWidget />
            </Suspense>
          )}
        </div>
      </LazyMotion>
    </MotionConfig>
  )
}

export default App
