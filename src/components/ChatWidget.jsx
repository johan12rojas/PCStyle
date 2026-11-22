import { useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { X, Send } from 'lucide-react'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleWhatsAppClick = () => {
    const textToSend =
      message.trim() ||
      'Hola, me interesa sus servicios de reparación y mantenimiento de computadoras'
    const encodedMessage = encodeURIComponent(textToSend)
    window.open(
      `https://wa.me/573225934970?text=${encodedMessage}`,
      '_blank',
      'noopener,noreferrer'
    )
    setMessage('')
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
        {/* Mensaje flotante con CSS GPU en lugar de bucle Framer Motion */}
        <AnimatePresence>
          {!isOpen && (
            <m.div
              initial={{ opacity: 0, x: 16, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 16, scale: 0.92 }}
              transition={{ duration: 0.25 }}
              className="hidden sm:block"
            >
              <div className="animate-chat-float bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-3 rounded-2xl shadow-xl font-bold text-sm relative flex items-center gap-2 border border-white/20">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
                </span>
                ¡Escríbenos, estamos en línea!
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-8 border-transparent border-l-purple-600" />
              </div>
            </m.div>
          )}
        </AnimatePresence>

        {/* Botón de Chat */}
        <button
          type="button"
          aria-label={isOpen ? 'Cerrar chat de WhatsApp' : 'Abrir chat de WhatsApp'}
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 relative group bg-white p-0.5 transition-transform duration-200 hover:scale-110 active:scale-95"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {/* Notification badge con CSS GPU */}
          <span className="animate-badge-pulse absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold z-20 border-2 border-slate-900 shadow-sm">
            1
          </span>

          <div className="w-full h-full rounded-full overflow-hidden border-2 border-green-500 hover:border-green-400 transition-colors bg-white">
            <img
              src="/IMG/wpI.webp"
              alt="Chat WhatsApp"
              width="64"
              height="64"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </button>
      </div>

      {/* Ventana de Chat */}
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed bottom-24 right-6 w-80 h-[450px] bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 z-40 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center overflow-hidden">
                  <img
                    src="/IMG/wpI.webp"
                    alt="Soporte"
                    width="40"
                    height="40"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Soporte PCStyle</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse" />
                    <p className="text-white/90 text-xs">En línea</p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                aria-label="Cerrar ventana de chat"
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-900/50">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-slate-600">
                  <img
                    src="/IMG/wpI.webp"
                    alt="Soporte"
                    width="32"
                    height="32"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-slate-700 rounded-2xl rounded-tl-none p-3 max-w-[85%] shadow-md">
                  <p className="text-white text-sm leading-relaxed">
                    ¡Hola! 👋 <br />
                    Respondemos en <strong>menos de 5 minutos</strong>. <br />
                    Te brindamos atención totalmente personalizada. ¿En qué podemos ayudarte hoy?
                  </p>
                  <span className="text-xs text-slate-400 mt-1 block text-right">Justo ahora</span>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-4 bg-slate-800 border-t border-slate-700">
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  placeholder="Escribe tu mensaje..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleWhatsAppClick()
                    }
                  }}
                  className="flex-1 px-4 py-2 bg-slate-900 border border-slate-600 rounded-full text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="button"
                  aria-label="Enviar mensaje por WhatsApp"
                  className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full flex items-center justify-center w-10 h-10 shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95"
                  onClick={handleWhatsAppClick}
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </div>
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              >
                Contactar por WhatsApp
              </button>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatWidget
