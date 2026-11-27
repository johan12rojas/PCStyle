import { useState, useEffect, useRef } from 'react'
import { m } from 'framer-motion'
import { ArrowRight, Play, MapPin } from 'lucide-react'
import { useInViewport } from '../hooks/useViewport'

const HERO_PARTICLES = [
  { left: '30%', top: '20%', dur: '2.4s', delay: '0s', tx: '6px' },
  { left: '40%', top: '40%', dur: '2.7s', delay: '0.2s', tx: '-6px' },
  { left: '50%', top: '60%', dur: '3.0s', delay: '0.4s', tx: '5px' },
  { left: '60%', top: '80%', dur: '3.3s', delay: '0.6s', tx: '-5px' },
  { left: '70%', top: '22%', dur: '3.5s', delay: '0.8s', tx: '4px' },
  { left: '80%', top: '42%', dur: '3.8s', delay: '1.0s', tx: '-4px' },
]

const Hero = () => {
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const isHeroVisible = useInViewport(sectionRef, '50px 0px')
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)
  const [videoReady, setVideoReady] = useState(false)

  // Diferir la descarga del video externo para no competir con el LCP (logo y titular)
  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const saveData =
      typeof navigator !== 'undefined' && navigator.connection?.saveData === true

    if (prefersReducedMotion || saveData) return

    const timer = setTimeout(() => setShouldLoadVideo(true), 300)
    return () => clearTimeout(timer)
  }, [])

  // Pausar decodificación del video automáticamente al salir del Hero
  useEffect(() => {
    const video = videoRef.current
    if (!video || !shouldLoadVideo) return

    if (isHeroVisible) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [isHeroVisible, shouldLoadVideo])

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20 bg-slate-950 ${
        isHeroVisible ? '' : 'anim-paused'
      }`}
    >
      {/* Fondo ambiental inmediato + video diferido */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 25% 30%, rgba(37, 99, 235, 0.22), transparent 55%), radial-gradient(ellipse at 75% 65%, rgba(147, 51, 234, 0.2), transparent 55%)',
          }}
        />
        {shouldLoadVideo && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            onCanPlay={() => setVideoReady(true)}
            className={`w-full h-full object-cover brightness-110 contrast-105 transition-opacity duration-700 ${
              videoReady ? 'opacity-90' : 'opacity-0'
            }`}
          >
            <source
              src="https://cdn.pixabay.com/video/2020/03/01/33093-395456662_large.mp4"
              type="video/mp4"
            />
          </video>
        )}
        {/* Overlay suave (el video ya es oscuro de por sí) */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/35 via-slate-900/20 to-slate-900/75" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12 sm:py-16 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content - Visible desde el primer byte (SSR/LCP instantáneo) */}
          <m.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-3 px-3.5 py-2 rounded-2xl bg-slate-900/70 backdrop-blur-sm border border-amber-400/30 shadow-lg shadow-black/25 mb-5 sm:mb-6">
              <img
                src="/IMG/badge-top1.svg"
                alt="Insignia Número 1 en Cúcuta y la Región"
                width="36"
                height="36"
                decoding="sync"
                className="w-9 h-9 flex-shrink-0 drop-shadow-[0_2px_8px_rgba(250,204,21,0.35)]"
              />
              <div className="text-left leading-tight pr-1">
                <span className="block text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-300">
                  El mejor de la región
                </span>
                <span className="block text-xs text-slate-300">
                  Cúcuta y Norte de Santander · 5.0 ★
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold tracking-tight leading-[1.12] mb-4 sm:mb-5">
              <span className="block text-white">Servicio Técnico</span>
              <span className="block text-gradient">de Computadores</span>
              <span className="block text-white/95 text-xl sm:text-2xl lg:text-3xl xl:text-[2.1rem] font-semibold mt-1.5">
                en Cúcuta · Portátiles y PC
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-3 sm:mb-4 max-w-xl mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
              Reparación de portátiles, mantenimiento preventivo de PC a domicilio, recuperación de
              datos y garantía real.
            </p>
            <p className="inline-flex items-center justify-center lg:justify-start gap-1.5 text-xs sm:text-sm md:text-base text-blue-400 mb-7 sm:mb-8 font-medium px-2 sm:px-0">
              <MapPin className="w-4 h-4 flex-shrink-0 text-blue-400" />
              <span>Cúcuta, Norte de Santander y toda la región · Domicilio y remoto</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start px-2 sm:px-0">
              <a
                href="#contacto"
                className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 hover:scale-105 active:scale-95 overflow-hidden whitespace-nowrap"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Solicitar Servicio
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"
                />
              </a>

              <a
                href="#portafolio"
                className="group bg-white/10 hover:bg-white/20 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 border border-white/20 hover:border-white/40 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                Ver Trabajos
              </a>
            </div>
          </m.div>

          {/* Right Content - Logo LCP optimizado con prioridad alta y dimensiones explícitas */}
          <m.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="flex items-center justify-center order-1 lg:order-2 mb-6 lg:mb-0"
          >
            <div className="relative">
              {/* Nebulosa orgánica tipo nube (múltiples lóbulos radiales que llegan a opacidad 0 antes del borde) */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[185%] h-[270%] pointer-events-none select-none"
              >
                <div
                  className="absolute inset-0 animate-nebula-cloud"
                  style={{
                    background: `
                      radial-gradient(34% 32% at 40% 48%, rgba(59, 130, 246, 0.34) 0%, rgba(59, 130, 246, 0.16) 40%, rgba(59, 130, 246, 0.04) 72%, rgba(59, 130, 246, 0) 100%),
                      radial-gradient(34% 32% at 62% 52%, rgba(168, 85, 247, 0.28) 0%, rgba(147, 51, 234, 0.13) 42%, rgba(147, 51, 234, 0.03) 74%, rgba(147, 51, 234, 0) 100%),
                      radial-gradient(28% 24% at 50% 60%, rgba(56, 189, 248, 0.18) 0%, rgba(56, 189, 248, 0.06) 48%, rgba(56, 189, 248, 0) 100%)
                    `,
                  }}
                />
                <div
                  className="absolute inset-0 animate-nebula-cloud-alt"
                  style={{
                    background: `
                      radial-gradient(30% 26% at 56% 42%, rgba(99, 102, 241, 0.24) 0%, rgba(99, 102, 241, 0.09) 46%, rgba(99, 102, 241, 0) 100%),
                      radial-gradient(28% 26% at 38% 58%, rgba(139, 92, 246, 0.20) 0%, rgba(139, 92, 246, 0.07) 48%, rgba(139, 92, 246, 0) 100%)
                    `,
                  }}
                />
              </div>

              {/* Logo principal */}
              <div className="relative">
                <img
                  src="/IMG/pcstyle.png"
                  alt="PCStyle - El mejor servicio técnico de computadores y portátiles en Cúcuta, Norte de Santander y la región"
                  width="602"
                  height="288"
                  decoding="sync"
                  className="w-[200px] sm:w-[280px] md:w-[320px] lg:w-[400px] h-auto object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Partículas flotantes con CSS GPU */}
              {HERO_PARTICLES.map((p, i) => (
                <div
                  key={i}
                  aria-hidden="true"
                  className="absolute w-2 h-2 bg-blue-400 rounded-full animate-tech-particle pointer-events-none"
                  style={{
                    left: p.left,
                    top: p.top,
                    '--dur': p.dur,
                    '--delay': p.delay,
                    '--tx': p.tx,
                  }}
                />
              ))}
            </div>
          </m.div>
        </div>

        {/* Scroll Indicator con CSS GPU */}
        <div
          aria-hidden="true"
          className="absolute bottom-10 left-1/2 hidden lg:block animate-hero-scroll"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-hero-scroll-dot" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

