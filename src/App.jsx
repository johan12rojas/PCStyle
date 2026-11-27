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
import BlogPreview from './components/BlogPreview'
import PreguntasFrecuentes from './components/PreguntasFrecuentes'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import BlogListPage from './components/BlogListPage'
import BlogPostPage from './components/BlogPostPage'
import { getPostBySlug } from './data/blogPosts'

// Solo el widget interactivo flotante se carga de forma diferida en cliente
const ChatWidget = lazy(() => import('./components/ChatWidget'))

const HOME_TITLE =
  'PCStyle - Servicio Técnico de Computadores en Cúcuta | Reparación de Portátiles y PC'
const BLOG_LIST_TITLE = 'Blog Técnico PCStyle | Reparación de PC, Mantenimiento y Diseño Web'

function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/'
  return pathname.replace(/\/+$/, '') || '/'
}

function App({ initialPath }) {
  const [preselectedRequest, setPreselectedRequest] = useState(null)
  const [isClient, setIsClient] = useState(false)
  const [currentPath, setCurrentPath] = useState(() => {
    if (initialPath) return normalizePath(initialPath)
    if (typeof window !== 'undefined') return normalizePath(window.location.pathname)
    return '/'
  })

  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    setIsClient(true)
    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname))
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  const scrollToHash = useCallback((hash) => {
    if (!hash || typeof document === 'undefined') return
    const id = hash.replace(/^#/, '')
    if (!id) return
    requestAnimationFrame(() => {
      const target = document.getElementById(id)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    })
  }, [])

  const navigate = useCallback(
    (to) => {
      if (typeof window === 'undefined') return

      const [rawPath, hashPart] = to.split('#')
      const nextPath = normalizePath(rawPath || '/')
      const hash = hashPart ? `#${hashPart}` : ''

      if (nextPath !== currentPath) {
        window.history.pushState({}, '', `${nextPath}${hash}`)
        setCurrentPath(nextPath)
        if (hash) {
          setTimeout(() => scrollToHash(hash), 60)
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      } else if (hash) {
        window.history.replaceState({}, '', `${nextPath}${hash}`)
        scrollToHash(hash)
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    },
    [currentPath, scrollToHash]
  )

  const blogSlugMatch = currentPath.match(/^\/blog\/([^/]+)$/)
  const activePost = blogSlugMatch ? getPostBySlug(blogSlugMatch[1]) : null
  const isBlogList = currentPath === '/blog' || (Boolean(blogSlugMatch) && !activePost)

  useEffect(() => {
    if (typeof document === 'undefined') return
    if (activePost) {
      document.title = activePost.metaTitle || activePost.title
    } else if (isBlogList) {
      document.title = BLOG_LIST_TITLE
    } else {
      document.title = HOME_TITLE
    }
  }, [activePost, isBlogList])

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

          <Navbar currentPath={currentPath} onNavigate={navigate} />

          {activePost ? (
            <BlogPostPage post={activePost} onNavigate={navigate} />
          ) : isBlogList ? (
            <BlogListPage onNavigate={navigate} />
          ) : (
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
              <BlogPreview onNavigate={navigate} />
              <PreguntasFrecuentes />
              <Contacto
                preselectedRequest={preselectedRequest}
                onClearPreselected={handleClearPreselected}
              />
            </main>
          )}

          <Footer onNavigate={navigate} />

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
