import { memo, useId, useRef } from 'react'
import { useInViewport } from '../hooks/useViewport'

// Coordenadas deterministas precalculadas (evita Math.random en render y re-cálculos)
const CIRCUIT_LINES = [
  { id: 0, x1: 8, y1: 14, dur: '4.2s', delay: '0s', desktopOnly: false },
  { id: 1, x1: 24, y1: 68, dur: '3.8s', delay: '0.7s', desktopOnly: false },
  { id: 2, x1: 48, y1: 22, dur: '4.6s', delay: '1.2s', desktopOnly: false },
  { id: 3, x1: 72, y1: 58, dur: '4.0s', delay: '0.4s', desktopOnly: false },
  { id: 4, x1: 86, y1: 18, dur: '4.8s', delay: '1.6s', desktopOnly: true },
  { id: 5, x1: 60, y1: 80, dur: '3.6s', delay: '0.9s', desktopOnly: true },
]

const PARTICLES = [
  { id: 0, left: '12%', top: '24%', dur: '4.2s', delay: '0s', tx: '8px', desktopOnly: false },
  { id: 1, left: '34%', top: '76%', dur: '3.8s', delay: '0.8s', tx: '-8px', desktopOnly: false },
  { id: 2, left: '58%', top: '32%', dur: '4.6s', delay: '1.4s', tx: '6px', desktopOnly: false },
  { id: 3, left: '82%', top: '68%', dur: '4.0s', delay: '0.4s', tx: '-6px', desktopOnly: false },
  { id: 4, left: '22%', top: '48%', dur: '4.5s', delay: '1.1s', tx: '7px', desktopOnly: true },
  { id: 5, left: '74%', top: '20%', dur: '3.9s', delay: '1.8s', tx: '-7px', desktopOnly: true },
]

const TechBackground = memo(() => {
  const containerRef = useRef(null)
  const isVisible = useInViewport(containerRef, '120px 0px')
  const gradientId = useId()

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none opacity-20 ${
        isVisible ? '' : 'anim-paused'
      }`}
    >
      {/* Líneas de circuito con animación GPU pura (opacity) sin blur SVG costoso */}
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        {CIRCUIT_LINES.map((line) => (
          <line
            key={line.id}
            x1={`${line.x1}%`}
            y1={`${line.y1}%`}
            x2={`${line.x1 + 10}%`}
            y2={`${line.y1 + 10}%`}
            stroke={`url(#${gradientId})`}
            strokeWidth="1"
            className={`animate-tech-line ${line.desktopOnly ? 'hidden md:block' : ''}`}
            style={{ '--dur': line.dur, '--delay': line.delay }}
          />
        ))}
      </svg>

      {/* Partículas flotantes con CSS transform/opacity (compositor GPU, 0 JS RAF) */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className={`absolute w-1 h-1 bg-blue-400 rounded-full animate-tech-particle ${
            p.desktopOnly ? 'hidden md:block' : ''
          }`}
          style={{
            left: p.left,
            top: p.top,
            '--dur': p.dur,
            '--delay': p.delay,
            '--tx': p.tx,
          }}
        />
      ))}

      {/* Grid de puntos estático (sin repintado de backgroundPosition) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(59, 130, 246, 0.12) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      {/* Resplandores ambientales con gradientes radiales (más ligeros que filter: blur-3xl) */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-tech-glow"
        style={{
          background:
            'radial-gradient(circle, rgba(59,130,246,0.22) 0%, rgba(59,130,246,0) 70%)',
        }}
      />
      <div
        className="hidden md:block absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full animate-tech-glow-slow"
        style={{
          background:
            'radial-gradient(circle, rgba(168,85,247,0.22) 0%, rgba(168,85,247,0) 70%)',
        }}
      />
    </div>
  )
})

TechBackground.displayName = 'TechBackground'

export default TechBackground
