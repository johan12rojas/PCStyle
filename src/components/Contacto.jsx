import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Send, MapPin, Clock, Phone, Mail, CheckCircle, AlertCircle, PhoneCall } from 'lucide-react'
import TechBackground from './TechBackground'

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isPreSelected, setIsPreSelected] = useState(false)
  const [contactMethod, setContactMethod] = useState('whatsapp') // 'whatsapp' o 'email'

  // Mapeo de servicios (usado en múltiples lugares)
  const serviceNames = {
    'reparacion': 'Reparación de Hardware',
    'mantenimiento': 'Mantenimiento Preventivo',
    'actualizacion': 'Actualización de Componentes',
    'virus': 'Eliminación de Virus',
    'recuperacion': 'Recuperación de Datos',
    'remoto': 'Soporte Técnico Remoto',
    'otros': 'Otros'
  }

  // Leer el servicio seleccionado del portafolio
  useEffect(() => {
    const selectedService = localStorage.getItem('selectedService')
    if (selectedService) {
      // El ID viene directamente del portafolio, lo usamos tal cual
      // Los IDs ya están mapeados correctamente: 'mantenimiento', 'actualizacion', 'reparacion', 'recuperacion', 'remoto'
      setFormData(prev => ({ ...prev, service: selectedService }))
      setIsPreSelected(true)
      
      // Remover después de enviar el formulario o después de 60 segundos
      const timeout = setTimeout(() => {
        localStorage.removeItem('selectedService')
        setIsPreSelected(false)
      }, 60000) // 60 segundos
      
      return () => clearTimeout(timeout)
    }
  }, [])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validación básica
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // Validar email solo si está lleno o si el método de contacto es email
    if (formData.email && !emailPattern.test(formData.email)) {
      setFormStatus({ type: 'error', message: 'Por favor, ingresa un email válido.' })
      return
    }
    // Si el método es email, el email es obligatorio
    if (contactMethod === 'email' && !formData.email) {
      setFormStatus({ type: 'error', message: 'El email es obligatorio para este método de contacto.' })
      return
    }

    const serviceName = serviceNames[formData.service] || formData.service

    if (contactMethod === 'whatsapp') {
      // Envío por WhatsApp
      const whatsappMessage = `¡Hola PCStyle! Me interesa su servicio:\n\n👤 *Nombre:* ${formData.name}${formData.email ? `\n📧 *Email:* ${formData.email}` : ''}\n📱 *Teléfono:* ${formData.phone}\n🔧 *Servicio:* ${serviceName}\n💬 *Mensaje:* ${formData.message}\n\n¡Gracias!`

      // Codificar el mensaje para URL
      const encodedMessage = encodeURIComponent(whatsappMessage)
      const whatsappUrl = `https://wa.me/573225934970?text=${encodedMessage}`

      // Mostrar mensaje de éxito primero
      setFormStatus({ type: 'success', message: '¡Redirigiendo a WhatsApp...' })
      
      // Abrir WhatsApp después de un pequeño delay para mostrar el mensaje
      setTimeout(() => {
        window.location.href = whatsappUrl
      }, 300)
    } else {
      // Envío por Email
      const emailSubject = encodeURIComponent(`Solicitud de Servicio: ${serviceName} - ${formData.name}`)
      const emailBody = encodeURIComponent(`Hola PCStyle,

Me interesa su servicio y me gustaría recibir más información.

Información de contacto:
👤 Nombre: ${formData.name}
📧 Email: ${formData.email}
📱 Teléfono: ${formData.phone}
🔧 Servicio solicitado: ${serviceName}

Mensaje:
${formData.message}

¡Gracias por su atención!

Saludos,
${formData.name}`)

      const emailUrl = `mailto:pcstyle07@gmail.com?subject=${emailSubject}&body=${emailBody}`

      // Mostrar mensaje de éxito primero
      setFormStatus({ type: 'success', message: '¡Abriendo cliente de correo...' })
      
      // Abrir cliente de correo después de un pequeño delay
      setTimeout(() => {
        window.location.href = emailUrl
      }, 300)
    }
    
    // Limpiar formulario después de un breve delay
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      setFormStatus({ type: '', message: '' })
      setContactMethod('whatsapp') // Resetear a WhatsApp por defecto
      setIsPreSelected(false) // Resetear el estado de pre-selección
      localStorage.removeItem('selectedService') // Limpiar el servicio del localStorage
    }, 2000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Ubicación',
      content: 'Urbanización Monterosso, Manzana E casa 28 #AN-60\nCúcuta, Norte de Santander, Colombia',
      color: 'from-blue-500 to-blue-600',
      link: null
    },
    {
      icon: Clock,
      title: 'Horario',
      content: 'Abierto ⋅ Cierra a las 8 p.m.',
      color: 'from-pink-500 to-pink-600',
      link: null
    },
    {
      icon: Phone,
      title: 'Teléfono',
      content: '322 5934970',
      color: 'from-green-500 to-green-600',
      link: 'https://wa.me/573225934970'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'pcstyle07@gmail.com',
      color: 'from-orange-500 to-orange-600',
      link: 'mailto:pcstyle07@gmail.com'
    },
  ]

  return (
    <section id="contacto" className="py-16 sm:py-20 lg:py-24 bg-slate-900 relative overflow-hidden">
      {/* Tech Background */}
      <TechBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gradient">Contáctanos</span>
          </motion.h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
            Estamos aquí para ayudarte. ¡Agenda tu servicio ahora!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-800/80 backdrop-blur-sm p-5 sm:p-6 lg:p-8 rounded-2xl border border-slate-700/50"
          >
              {isPreSelected && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/40 rounded-lg"
              >
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-blue-300 font-semibold text-sm sm:text-base mb-1">
                      ✓ Servicio pre-seleccionado desde el portafolio
                    </p>
                    <p className="text-blue-400/80 text-xs sm:text-sm">
                      {formData.service && serviceNames[formData.service] 
                        ? `Servicio: ${serviceNames[formData.service]}` 
                        : 'Completa los datos restantes para continuar.'}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
            
            {/* Botón de Llamada Directa */}
            <motion.a
              href="tel:+573225934970"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="mb-4 sm:mb-6 w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 sm:py-3.5 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg shadow-blue-500/50 flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-blue-500/70"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Llamar ahora</span>
            </motion.a>
            
            {/* Selector de método de contacto */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                Método de contacto
              </label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setContactMethod('whatsapp')}
                  className={`flex-1 px-4 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
                    contactMethod === 'whatsapp'
                      ? 'bg-green-500/90 text-white shadow-lg shadow-green-500/50'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  📱 WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => setContactMethod('email')}
                  className={`flex-1 px-4 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 ${
                    contactMethod === 'email'
                      ? 'bg-orange-500/90 text-white shadow-lg shadow-orange-500/50'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  ✉️ Email
                </button>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 lg:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                  Email {contactMethod === 'whatsapp' && <span className="text-gray-500 text-xs">(Opcional)</span>}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required={contactMethod === 'email'}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Ingresa tu número"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                  Servicio
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="reparacion">Reparación de Hardware</option>
                  <option value="mantenimiento">Mantenimiento Preventivo</option>
                  <option value="actualizacion">Actualización de Componentes</option>
                  <option value="virus">Eliminación de Virus</option>
                  <option value="recuperacion">Recuperación de Datos</option>
                  <option value="remoto">Soporte Técnico Remoto</option>
                  <option value="otros">Otros</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                  placeholder="Describe tu problema o solicitud..."
                />
              </div>

              {formStatus.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg flex items-center gap-3 ${
                    formStatus.type === 'success'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                      : 'bg-red-500/20 text-red-400 border border-red-500/50'
                  }`}
                >
                  {formStatus.type === 'success' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <p>{formStatus.message}</p>
                </motion.div>
              )}

              <motion.button
                type="submit"
                className={`w-full px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 shadow-lg flex items-center justify-center gap-2 ${
                  contactMethod === 'whatsapp'
                    ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-green-500/50'
                    : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-orange-500/50'
                }`}
                whileHover={{ scale: 1.02, boxShadow: contactMethod === 'whatsapp' ? '0 10px 30px rgba(34, 197, 94, 0.5)' : '0 10px 30px rgba(249, 115, 22, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                {contactMethod === 'whatsapp' ? (
                  <>
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                    Enviar por WhatsApp
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                    Enviar por Email
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-5 lg:space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return info.link ? (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/80 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer block"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <motion.div
                      className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1.5 sm:mb-2 text-sm sm:text-base">{info.title}</h3>
                      <p className="whitespace-pre-line text-xs sm:text-sm text-blue-400 hover:text-blue-300 transition-colors">
                        {info.content}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        {info.link.includes('mailto') ? 'Haz clic para escribir' : 'Haz clic para contactar'}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ) : (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800/80 backdrop-blur-sm p-4 sm:p-5 lg:p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 group"
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <motion.div
                      className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1.5 sm:mb-2 text-sm sm:text-base">{info.title}</h3>
                      <p className="text-gray-400 whitespace-pre-line text-xs sm:text-sm">
                        {info.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mt-8 sm:mt-10 lg:mt-12"
        >
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.457637421174!2d-72.50682212542341!3d7.951568704923795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6645bfd93b47ed%3A0x6d2d74af0c20ccdf!2sPCStyle%20-%20Servicio%20t%C3%A9cnico%20en%20computadores%20y%20port%C3%A1tiles%20a%20domicilio!5e0!3m2!1ses-419!2sco!4v1762020627275!5m2!1ses-419!2sco"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación PCStyle - Urbanización Monterosso, Manzana E casa 28 #AN-60, Cúcuta"
              className="w-full sm:h-[350px] lg:h-[450px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contacto

