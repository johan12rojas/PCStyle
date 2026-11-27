import { useState, useEffect } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { name: 'Inicio', href: '/#inicio' },
  { name: 'Servicios', href: '/#servicios' },
  { name: 'Diseño Web', href: '/#desarrollo-web' },
  { name: 'Portafolio', href: '/#portafolio' },
  { name: 'Blog', href: '/blog' },
  { name: 'Nosotros', href: '/#nosotros' },
  { name: 'Contacto', href: '/#contacto' },
]

const Navbar = ({ currentPath = '/', onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isBlogRoute = currentPath.startsWith('/blog')

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50
      setIsScrolled((prev) => (prev === scrolled ? prev : scrolled))
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, href) => {
    setIsMobileMenuOpen(false)
    if (!onNavigate) return
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return
    e.preventDefault()
    onNavigate(href)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled || isBlogRoute ? 'glass bg-slate-900/95 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex items-center space-x-3 flex-shrink-0 transition-transform duration-200 hover:scale-105 active:scale-95"
          >
            <img
              src="/IMG/pcstyle.png"
              alt="PCStyle - El mejor servicio técnico de computadores en Cúcuta y la región"
              width="100"
              height="48"
              decoding="async"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {NAV_LINKS.map((link) => {
              const isActive = link.href === '/blog' && isBlogRoute
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`whitespace-nowrap transition-colors duration-200 relative group ${
                    isActive ? 'text-blue-400 font-semibold' : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              )
            })}
            <a
              href="/#contacto"
              onClick={(e) => handleLinkClick(e, '/#contacto')}
              className="whitespace-nowrap flex-shrink-0 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-5 xl:px-6 py-2 rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-blue-500/40 hover:shadow-blue-500/60 hover:scale-105 active:scale-95"
            >
              Agendar ahora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label={isMobileMenuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            aria-expanded={isMobileMenuOpen}
            className="lg:hidden text-gray-300 hover:text-white transition-colors p-2"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <m.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="lg:hidden overflow-hidden bg-slate-900/95 backdrop-blur-md rounded-b-2xl px-2"
            >
              <div className="flex flex-col space-y-3 pb-6 pt-3">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`hover:text-blue-400 hover:translate-x-1 transition-all py-2 px-2 ${
                      link.href === '/blog' && isBlogRoute
                        ? 'text-blue-400 font-semibold'
                        : 'text-gray-300'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="/#contacto"
                  onClick={(e) => handleLinkClick(e, '/#contacto')}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold text-center transition-transform duration-200 active:scale-95"
                >
                  Agendar ahora
                </a>
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
