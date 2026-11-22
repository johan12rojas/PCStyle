import { useState, useEffect, useRef } from 'react'
import { m } from 'framer-motion'
import { MapPin, Clock, Phone, Mail, CheckCircle, AlertCircle, PhoneCall } from 'lucide-react'
import TechBackground from './TechBackground'
import { useNearViewport } from '../hooks/useViewport'

const SERVICE_NAMES = {
  reparacion: 'Reparación de Hardware',
  mantenimiento: 'Mantenimiento Preventivo',
  actualizacion: 'Actualización de Componentes',
  virus: 'Eliminación de Virus',
  recuperacion: 'Recuperación de Datos',
  remoto: 'Soporte Técnico Remoto',
  'desarrollo-web': 'Creación de Páginas Web y Landings',
  otros: 'Otros',
}

const CONTACT_INFO = [
  {
    icon: MapPin,
    title: 'Ubicación',
    content: 'Urbanización Monterosso, Manzana E casa 28 #AN-60\nCúcuta, Norte de Santander, Colombia',
    color: 'from-blue-500 to-blue-600',
    link: null,
  },
  {
    icon: Clock,
    title: 'Horario',
    content: 'Abierto ⋅ Cierra a las 8 p.m.',
    color: 'from-pink-500 to-pink-600',
    link: null,
  },
  {
    icon: Phone,
    title: 'Teléfono',
    content: '322 5934970',
    color: 'from-green-500 to-green-600',
    link: 'https://wa.me/573225934970',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'pcstyle07@gmail.com',
    color: 'from-orange-500 to-orange-600',
    link: 'mailto:pcstyle07@gmail.com',
  },
]

const Contacto = ({ preselectedRequest, onClearPreselected }) => {
  const mapContainerRef = useRef(null)
  const shouldMountMap = useNearViewport(mapContainerRef, '400px 0px')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [isPreSelected, setIsPreSelected] = useState(false)
  const [preSelectedMeta, setPreSelectedMeta] = useState({ source: 'el portafolio', label: '' })
  const [contactMethod, setContactMethod] = useState('whatsapp')

  useEffect(() => {
    if (!preselectedRequest?.service) return

    setFormData((prev) => ({
      ...prev,
      service: preselectedRequest.service,
      message: preselectedRequest.message ? preselectedRequest.message : prev.message,
    }))
    setPreSelectedMeta({
      source: preselectedRequest.source || 'el sitio',
      label: preselectedRequest.label || SERVICE_NAMES[preselectedRequest.service] || '',
    })
    setIsPreSelected(true)
  }, [preselectedRequest])

  useEffect(() => {
    const selectedService = localStorage.getItem('selectedService')
    if (selectedService) {
      setFormData((prev) => ({ ...prev, service: selectedService }))
      setPreSelectedMeta({
        source: 'el portafolio',
        label: SERVICE_NAMES[selectedService] || '',
      })
      setIsPreSelected(true)

      const timeout = setTimeout(() => {
        localStorage.removeItem('selectedService')
        setIsPreSelected(false)
      }, 60000)

      return () => clearTimeout(timeout)
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailPattern.test(formData.email)) {
      setFormStatus({ type: 'error', message: 'Por favor, ingresa un email válido.' })
      return
    }
    if (contactMethod === 'email' && !formData.email) {
      setFormStatus({
        type: 'error',
        message: 'El email es obligatorio para este método de contacto.',
      })
      return
    }

    const serviceName = SERVICE_NAMES[formData.service] || formData.service

    if (contactMethod === 'whatsapp') {
      const whatsappMessage = `¡Hola PCStyle! Me interesa su servicio:\n\n👤 *Nombre:* ${formData.name}${formData.email ? `\n📧 *Email:* ${formData.email}` : ''}\n📱 *Teléfono:* ${formData.phone}\n🔧 *Servicio:* ${serviceName}\n💬 *Mensaje:* ${formData.message}\n\n¡Gracias!`
      const encodedMessage = encodeURIComponent(whatsappMessage)
      const whatsappUrl = `https://wa.me/573225934970?text=${encodedMessage}`

      setFormStatus({ type: 'success', message: '¡Redirigiendo a WhatsApp...' })

      setTimeout(() => {
        window.location.href = whatsappUrl
      }, 300)
    } else {
      const emailSubject = encodeURIComponent(
        `Solicitud de Servicio: ${serviceName} - ${formData.name}`
      )
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

      setFormStatus({ type: 'success', message: '¡Abriendo cliente de correo...' })

      setTimeout(() => {
        window.location.href = emailUrl
      }, 300)
    }

    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      setFormStatus({ type: '', message: '' })
      setContactMethod('whatsapp')
      setIsPreSelected(false)
      setPreSelectedMeta({ source: 'el portafolio', label: '' })
      localStorage.removeItem('selectedService')
      if (onClearPreselected) onClearPreselected()
    }, 2000)
  }

  return (
    <section
      id="contacto"
      className="section-defer py-16 sm:py-20 lg:py-24 bg-slate-900 relative overflow-hidden"
    >
      <TechBackground />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
            <span className="text-gradient">Contáctanos</span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-2 sm:px-0">
            Estamos aquí para ayudarte. ¡Agenda tu servicio ahora!
          </p>
        </m.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          {/* Contact Form */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="bg-slate-800/90 p-5 sm:p-6 lg:p-8 rounded-2xl border border-slate-700/50"
          >
            {isPreSelected && (
              <m.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/40 rounded-lg"
              >
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-blue-300 font-semibold text-sm sm:text-base mb-1">
                      ✓ Servicio pre-seleccionado desde {preSelectedMeta.source}
                    </p>
                    <p className="text-blue-400/80 text-xs sm:text-sm">
                      {preSelectedMeta.label
                        ? `Selección: ${preSelectedMeta.label}`
                        : formData.service && SERVICE_NAMES[formData.service]
                          ? `Servicio: ${SERVICE_NAMES[formData.service]}`
                          : 'Completa los datos restantes para continuar.'}
                    </p>
                  </div>
                </div>
              </m.div>
            )}

            {/* Botón de Llamada Directa */}
            <a
              href="tel:+573225934970"
              className="mb-4 sm:mb-6 w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 sm:py-3.5 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-blue-500/40 hover:shadow-xl hover:shadow-blue-500/60 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Llamar ahora</span>
            </a>

            {/* Selector de método de contacto */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-xs sm:text-sm font-medium text-gray-300 mb-2">
                Método de contacto
              </label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setContactMethod('whatsapp')}
                  className={`flex-1 px-4 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 ${
                    contactMethod === 'whatsapp'
                      ? 'bg-green-500/90 text-white shadow-lg shadow-green-500/40'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  📱 WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => setContactMethod('email')}
                  className={`flex-1 px-4 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 ${
                    contactMethod === 'email'
                      ? 'bg-orange-500/90 text-white shadow-lg shadow-orange-500/40'
                      : 'bg-slate-700/50 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  ✉️ Email
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 lg:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2"
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2"
                >
                  Email{' '}
                  {contactMethod === 'whatsapp' && (
                    <span className="text-gray-500 text-xs">(Opcional)</span>
                  )}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required={contactMethod === 'email'}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Ingresa tu número"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2"
                >
                  Servicio
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="">Selecciona un servicio</option>
                  <option value="reparacion">Reparación de Hardware</option>
                  <option value="mantenimiento">Mantenimiento Preventivo</option>
                  <option value="actualizacion">Actualización de Componentes</option>
                  <option value="virus">Eliminación de Virus</option>
                  <option value="recuperacion">Recuperación de Datos</option>
                  <option value="remoto">Soporte Técnico Remoto</option>
                  <option value="desarrollo-web">Creación de Páginas Web y Landings</option>
                  <option value="otros">Otros</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate-900 border border-slate-600 rounded-lg text-white text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-colors"
                  placeholder="Describe tu problema o solicitud..."
                />
              </div>

              {formStatus.message && (
                <m.div
                  initial={{ opacity: 0, y: -8 }}
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
                </m.div>
              )}

              <button
                type="submit"
                className={`w-full px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-200 shadow-lg hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 ${
                  contactMethod === 'whatsapp'
                    ? 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-green-500/40 hover:shadow-green-500/60'
                    : 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-orange-500/40 hover:shadow-orange-500/60'
                }`}
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
              </button>
            </form>
          </m.div>

          {/* Contact Info */}
          <m.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
            className="space-y-4 sm:space-y-5 lg:space-y-6"
          >
            {CONTACT_INFO.map((info) => {
              const Icon = info.icon
              const content = (
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1.5 sm:mb-2 text-sm sm:text-base">
                      {info.title}
                    </h3>
                    <p
                      className={`whitespace-pre-line text-xs sm:text-sm ${
                        info.link
                          ? 'text-blue-400 hover:text-blue-300 transition-colors'
                          : 'text-gray-400'
                      }`}
                    >
                      {info.content}
                    </p>
                    {info.link && (
                      <p className="text-xs text-gray-500 mt-1">
                        {info.link.includes('mailto')
                          ? 'Haz clic para escribir'
                          : 'Haz clic para contactar'}
                      </p>
                    )}
                  </div>
                </div>
              )

              return info.link ? (
                <a
                  key={info.title}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800/90 p-4 sm:p-5 lg:p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:translate-x-2 group cursor-pointer block"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={info.title}
                  className="bg-slate-800/90 p-4 sm:p-5 lg:p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:translate-x-2 group"
                >
                  {content}
                </div>
              )
            })}
          </m.div>
        </div>

        {/* Google Maps (montaje diferido al acercarse al viewport) */}
        <div ref={mapContainerRef} className="max-w-6xl mx-auto mt-8 sm:mt-10 lg:mt-12">
          <div className="bg-slate-800/90 rounded-2xl border border-slate-700/50 overflow-hidden h-[300px] sm:h-[350px] lg:h-[450px]">
            {shouldMountMap ? (
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3951.457637421174!2d-72.50682212542341!3d7.951568704923795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6645bfd93b47ed%3A0x6d2d74af0c20ccdf!2sPCStyle%20-%20Servicio%20t%C3%A9cnico%20en%20computadores%20y%20port%C3%A1tiles%20a%20domicilio!5e0!3m2!1ses-419!2sco!4v1762020627275!5m2!1ses-419!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación PCStyle - Urbanización Monterosso, Manzana E casa 28 #AN-60, Cúcuta"
                className="w-full h-full"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 gap-2">
                <MapPin className="w-8 h-8 text-blue-400/70" />
                <p className="text-sm">Cargando mapa de ubicación...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
