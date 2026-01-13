import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send } from 'lucide-react'

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleWhatsAppClick = () => {
    const textToSend = message.trim() || 'Hola, me interesa sus servicios de reparación y mantenimiento de computadoras'
    const encodedMessage = encodeURIComponent(textToSend)
    window.open(`https://wa.me/573225934970?text=${encodedMessage}`, '_blank')
    setMessage('') // Limpiar el mensaje después de enviar
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-4">
        {/* Contactanos ahora Message - Hidden when open */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-white text-slate-900 px-4 py-2 rounded-xl shadow-lg font-semibold text-sm relative hidden sm:block"
            >
              ¡Contáctanos ahora!
              {/* Arrow pointing to button */}
              <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 border-8 border-transparent border-l-white" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Button with Image */}
        <motion.button
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-50 relative group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Notification badge with blinking */}
          <motion.span
            className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs text-white font-bold z-20 border-2 border-slate-900"
            animate={{ 
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            1
          </motion.span>
          
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-green-500 hover:border-green-400 transition-colors">
            <img 
              src="/IMG/wpI.webp" 
              alt="WhatsApp y Soporte" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.button>
      </div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3, type: 'spring' }}
            className="fixed bottom-24 right-6 w-80 h-[450px] bg-slate-800 rounded-2xl shadow-2xl border border-slate-700 z-40 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center overflow-hidden">
                  <img src="/IMG/wpI.webp" alt="Soporte" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Soporte PCStyle</h3>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                    <p className="text-white/90 text-xs">En línea</p>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-900/50">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-slate-600">
                  <img src="/IMG/wpI.webp" alt="Soporte" className="w-full h-full object-cover" />
                </div>
                <div className="bg-slate-700 rounded-2xl rounded-tl-none p-3 max-w-[85%] shadow-md">
                  <p className="text-white text-sm leading-relaxed">
                    ¡Hola! 👋 <br/>
                    Respondemos en <strong>menos de 5 minutos</strong>. <br/>
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
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleWhatsAppClick()
                    }
                  }}
                  className="flex-1 px-4 py-2 bg-slate-900 border border-slate-600 rounded-full text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <motion.button
                  className="bg-green-500 text-white p-2 rounded-full flex items-center justify-center w-10 h-10 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleWhatsAppClick}
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </motion.button>
              </div>
              <motion.button
                onClick={handleWhatsAppClick}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Contactar por WhatsApp
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ChatWidget
