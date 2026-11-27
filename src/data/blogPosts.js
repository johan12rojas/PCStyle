export const BLOG_CATEGORIES = [
  'Todos',
  'Servicio Técnico',
  'Reparación y Mejoras',
  'Desarrollo Web',
]

const AUTHORS = {
  alexander: {
    name: 'Alexander Rodríguez',
    role: 'CEO y Fundador · Especialista en Electrónica y Hardware',
    avatar: '/IMG/rodri_CEO.png',
  },
  sebastian: {
    name: 'Sebastian Rojas',
    role: 'Ingeniero de Sistemas · Desarrollo Web y SEO',
    avatar: '/IMG/sebas_ing.png',
  },
}

export const BLOG_POSTS = [
  {
    slug: 'mantenimiento-preventivo-computadores-cucuta',
    title: 'Mantenimiento preventivo de computadores y portátiles en Cúcuta: cada cuánto hacerlo y qué incluye',
    metaTitle: 'Mantenimiento Preventivo de Computadores en Cúcuta | Guía PCStyle',
    excerpt:
      'El calor y el polvo de Cúcuta aceleran el desgaste de tu PC o portátil. Aprende cada cuántos meses hacer mantenimiento preventivo, las señales de alerta y qué incluye un servicio profesional.',
    metaDescription:
      'Guía práctica sobre mantenimiento preventivo de computadores y portátiles en Cúcuta: señales de sobrecalentamiento, cambio de pasta térmica, frecuencia ideal y servicio a domicilio.',
    keywords:
      'mantenimiento preventivo computadores Cúcuta, limpieza de portátiles Cúcuta, cambio de pasta térmica PC, servicio técnico a domicilio Cúcuta, sobrecalentamiento portátil',
    category: 'Servicio Técnico',
    publishedAt: '2026-11-22',
    updatedAt: '2026-11-26',
    readTime: '5 min de lectura',
    author: AUTHORS.alexander,
    coverImage: '/IMG/i7.webp',
    coverAlt:
      'Técnico realizando mantenimiento preventivo y limpieza interna de computador en Cúcuta - PCStyle',
    whatsappMessage:
      'Hola PCStyle, leí su guía sobre mantenimiento preventivo de computadores y quiero agendar un mantenimiento para mi equipo.',
    sections: [
      {
        heading: '¿Por qué en Cúcuta los computadores necesitan mantenimiento más frecuente?',
        paragraphs: [
          'En ciudades de clima cálido como Cúcuta, Los Patios y Villa del Rosario, la temperatura ambiente suele superar los 32 °C. Cuando el polvo se acumula en los disipadores y ventiladores de un portátil o PC de escritorio, el aire caliente no logra salir y el procesador alcanza fácilmente los 90–100 °C.',
          'Cuando esto sucede, el equipo activa un mecanismo llamado thermal throttling (reduce su velocidad para no quemarse), causando lentitud repentina, apagados inesperados y desgaste prematuro de la placa base, la batería y el disco.',
        ],
      },
      {
        heading: 'Cada cuánto tiempo hacer mantenimiento preventivo',
        paragraphs: [
          'No todos los equipos se ensucian al mismo ritmo. Como regla práctica en Norte de Santander recomendamos esta frecuencia:',
        ],
        bullets: [
          'Uso de oficina, estudio o teletrabajo diario: cada 6 a 8 meses.',
          'PC gamer, diseño gráfico, arquitectura o edición de video: cada 4 a 6 meses.',
          'Equipos en oficinas con alto polvo, talleres o casas con mascotas: cada 4 a 5 meses.',
          'Uso ocasional en ambiente con aire acondicionado constante: cada 9 a 12 meses.',
        ],
      },
      {
        heading: '6 señales de que tu PC o portátil pide mantenimiento urgente',
        paragraphs: [
          'Si notas dos o más de estos síntomas, no esperes a que el equipo deje de encender:',
        ],
        bullets: [
          'El ventilador suena fuerte todo el tiempo, incluso solo navegando en Chrome.',
          'El teclado o la parte inferior del portátil se sienten demasiado calientes al tacto.',
          'El equipo se apaga de golpe cuando abres programas exigentes o juegos.',
          'El sistema se congela o tarda varios minutos en iniciar Windows.',
          'Aparecen pantallazos azules frecuentes sin haber instalado nada nuevo.',
          'Llevas más de un año sin limpiar internamente el equipo ni cambiar la pasta térmica.',
        ],
      },
      {
        heading: 'Qué incluye un mantenimiento preventivo profesional (y no solo "soplar el polvo")',
        paragraphs: [
          'Muchos daños ocurren cuando solo se usa aire comprimido desde afuera, empujando pelusa hacia las aspas del ventilador. Un mantenimiento técnico profesional en PCStyle incluye tanto hardware como software:',
        ],
        bullets: [
          'Desarme controlado y limpieza profunda de ventiladores, rejillas y disipadores de cobre.',
          'Limpieza de placa base con alcohol isopropílico y revisión visual de conectores y bisagras.',
          'Retiro completo de la pasta térmica seca y aplicación de pasta térmica de alta conductividad.',
          'Diagnóstico del estado real del disco (SSD/HDD), memoria RAM y salud de batería.',
          'Optimización de Windows, limpieza de archivos temporales, revisión de malware y actualización de drivers clave.',
          'Pruebas de temperatura bajo carga para confirmar que el equipo trabaja fresco y estable.',
        ],
        tip: 'Consejo técnico: nunca uses el portátil directamente sobre la cama, cojines o cobijas. Bloquear las entradas de aire inferiores puede duplicar la temperatura interna en pocos minutos.',
      },
    ],
    faqs: [
      {
        question: '¿Cuánto tarda un mantenimiento preventivo de computador o portátil?',
        answer:
          'En la mayoría de equipos el mantenimiento preventivo completo (limpieza interna, cambio de pasta térmica y optimización) se realiza el mismo día, en aproximadamente 1 a 2 horas.',
      },
      {
        question: '¿Se pierden mis archivos durante el mantenimiento preventivo?',
        answer:
          'No. El mantenimiento preventivo no formatea tu equipo ni borra tus documentos, fotos ni programas instalados.',
      },
      {
        question: '¿Pueden hacer el mantenimiento a domicilio en Cúcuta?',
        answer:
          'Sí, ofrecemos servicio técnico a domicilio en todos los sectores de Cúcuta, Los Patios y Villa del Rosario con garantía escrita.',
      },
    ],
  },
  {
    slug: 'computador-lento-actualizar-ssd-ram-o-comprar-nuevo',
    title: '¿Tu computador está lento? Cuándo conviene actualizar a SSD y RAM en vez de comprar uno nuevo',
    metaTitle: 'Computador Lento: Actualizar a SSD y RAM vs Comprar Nuevo | PCStyle',
    excerpt:
      'Antes de gastar millones en un computador nuevo, descubre cómo saber si cambiar el disco duro por un SSD y ampliar la RAM puede dejar tu equipo hasta 5 veces más rápido.',
    metaDescription:
      '¿Tu portátil o PC va muy lento? Aprende cuándo actualizar a SSD y memoria RAM vale la pena en Cúcuta y cómo identificar el cuello de botella real de tu equipo.',
    keywords:
      'computador lento solución Cúcuta, cambiar disco duro por SSD Cúcuta, aumentar memoria RAM portátil, actualización de computadores Norte de Santander',
    category: 'Reparación y Mejoras',
    publishedAt: '2026-11-22',
    updatedAt: '2026-11-26',
    readTime: '6 min de lectura',
    author: AUTHORS.alexander,
    coverImage: '/IMG/ensamblaje.webp',
    coverAlt:
      'Actualización de memoria RAM y disco SSD en computador por técnico de PCStyle en Cúcuta',
    whatsappMessage:
      'Hola PCStyle, mi computador está lento y quiero cotizar una actualización a disco SSD y memoria RAM.',
    sections: [
      {
        heading: 'El verdadero culpable del 80% de los computadores lentos',
        paragraphs: [
          'En nuestro taller en Cúcuta recibimos a diario equipos con procesadores Intel Core i3, i5 o Ryzen perfectamente capaces que tardan 3 o 4 minutos en arrancar. En casi todos esos casos el problema no es el procesador: es un disco duro mecánico (HDD) al 100% de uso o tener solo 4 GB de memoria RAM.',
          'Windows 10 y Windows 11 junto con navegadores modernos como Chrome consumen muchos recursos de lectura/escritura. Un disco mecánico tradicional lee alrededor de 100 MB/s, mientras que un SSD SATA supera los 500 MB/s y un SSD NVMe puede pasar de 3.000 MB/s.',
        ],
      },
      {
        heading: '¿Cuándo SÍ vale la pena actualizar tu PC actual?',
        paragraphs: [
          'Invertir en una actualización suele costar una fracción mínima de un computador nuevo y extiende la vida útil del equipo entre 3 y 5 años adicionales si se cumple lo siguiente:',
        ],
        bullets: [
          'Tu equipo tiene procesador Intel Core i3/i5/i7 (de 4.ª generación en adelante) o AMD Ryzen.',
          'Todavía usa disco duro mecánico (HDD) y en el Administrador de Tareas el Disco aparece al 100%.',
          'Tiene 4 GB u 8 GB de RAM y cuenta con ranura disponible para subir a 8 GB o 16 GB.',
          'La pantalla, el teclado, el cargador y la placa base funcionan correctamente.',
        ],
      },
      {
        heading: '¿Qué mejora primero: disco SSD o memoria RAM?',
        paragraphs: [
          'Si tu presupuesto es ajustado, este es el orden que produce mayor diferencia inmediata en velocidad:',
        ],
        bullets: [
          '1. Cambiar HDD a SSD (SATA o M.2 NVMe): reduce el arranque de Windows de 3 minutos a 15–20 segundos y hace que Word, Excel y Chrome abran casi al instante.',
          '2. Ampliar la RAM a 8 GB o 16 GB (idealmente en Dual Channel): evita que el computador se trabe cuando tienes muchas pestañas abiertas, videollamadas o programas de diseño.',
          '3. Mantenimiento térmico + instalación limpia o clonación profesional: asegura que tu sistema no cargue virus ni basura del disco anterior.',
        ],
      },
      {
        heading: '¿Cuándo es mejor NO invertir y pensar en un equipo nuevo?',
        paragraphs: [
          'La honestidad técnica ahorra dinero. Te recomendamos evaluar un computador nuevo en lugar de mejorar el actual cuando:',
        ],
        bullets: [
          'El procesador es un Celeron/Atom muy antiguo con RAM soldada sin ranuras de expansión.',
          'La suma de reparaciones necesarias (pantalla rota + batería muerta + bisagras + SSD) supera el 50–60% del valor de un equipo nuevo equivalente.',
          'Necesitas tarjetas gráficas dedicadas modernas para renderizado 3D o IA y tu portátil no permite GPU externa.',
        ],
        tip: 'En PCStyle revisamos tu modelo exacto antes de comprar cualquier repuesto para confirmar compatibilidad real (tipo de SSD SATA/NVMe, frecuencia DDR3/DDR4/DDR5 y límite máximo de RAM) y podemos migrar todos tus archivos sin perder información.',
      },
    ],
    faqs: [
      {
        question: '¿Pierdo mis archivos y programas si cambio mi disco duro por un SSD?',
        answer:
          'No es necesario perder nada. Podemos clonar tu sistema o hacer un respaldo completo de tus documentos, fotos y bases de datos antes de instalar el SSD.',
      },
      {
        question: '¿Qué pasa con mi disco duro viejo después de instalar el SSD?',
        answer:
          'Si tu disco anterior está en buen estado, podemos convertirlo en un disco duro externo con un case USB para que lo uses como memoria de respaldo.',
      },
    ],
  },
  {
    slug: 'portatil-no-enciende-reparacion-placa-base-motherboard',
    title: 'Mi portátil o PC no enciende: 6 causas comunes y cuándo necesita reparación de placa base',
    metaTitle: 'Portátil o PC No Enciende: Causas y Reparación de Placa Base | PCStyle',
    excerpt:
      '¿Presionas el botón de encendido y tu computador no responde o prende pero no da imagen? Conoce las 6 fallas más frecuentes y cómo diagnosticamos fallas electrónicas de motherboard.',
    metaDescription:
      'Descubre por qué tu portátil o PC no enciende o no da video. Guía técnica de PCStyle en Cúcuta sobre cargadores, RAM, cortocircuitos y reparación electrónica de placa base.',
    keywords:
      'portátil no enciende Cúcuta, computador prende pero no da video, reparación placa base Cúcuta, reparación motherboard Norte de Santander, microelectrónica PC',
    category: 'Servicio Técnico',
    publishedAt: '2026-11-22',
    updatedAt: '2026-11-26',
    readTime: '6 min de lectura',
    author: AUTHORS.alexander,
    coverImage: '/IMG/reparacion_mother.webp',
    coverAlt:
      'Diagnóstico y reparación electrónica de placa base motherboard en laboratorio PCStyle Cúcuta',
    whatsappMessage:
      'Hola PCStyle, mi portátil/PC no enciende o no da video y necesito un diagnóstico técnico.',
    sections: [
      {
        heading: 'Antes de entrar en pánico: diferencia entre "no hace nada" y "enciende sin video"',
        paragraphs: [
          'Cuando un cliente nos escribe diciendo "mi portátil murió", el primer paso del diagnóstico consiste en observar las señales eléctricas: ¿prende el LED del cargador?, ¿gira el ventilador?, ¿parpadea la luz de Bloq Mayús?, ¿se escucha algún pitido?',
          'Cada una de esas señales apunta a una etapa diferente del arranque y evita cambiar piezas costosas que en realidad estaban buenas.',
        ],
      },
      {
        heading: 'Las 6 causas más comunes cuando un computador no enciende',
        paragraphs: [
          'Según las más de 1.200 reparaciones que hemos realizado en Cúcuta y la región, estas son las fallas que aparecen con mayor frecuencia:',
        ],
        bullets: [
          '1. Cargador, fuente de poder o pin de carga dañado: picos de voltaje en la red eléctrica dañan primero el cargador o el conector DC Jack.',
          '2. Carga estática acumulada en la placa: a veces una descarga residual bloquea el circuito de encendido (EC/Super I/O).',
          '3. Memoria RAM sucia o defectuosa: el equipo enciende luces y ventilador, pero la pantalla queda completamente negra.',
          '4. Cortocircuito en capacitores o MOSFETs de la motherboard: impide que entren los 19V principales; suele ocurrir tras caídas, humedad o cargadores genéricos de mala calidad.',
          '5. BIOS corrupta: frecuente tras cortes de luz durante una actualización automática de Windows.',
          '6. Falla de pantalla, flex de video o chip gráfico: el equipo arranca por dentro (se ve imagen si conectas un monitor externo por HDMI), pero el panel integrado no ilumina.',
        ],
      },
      {
        heading: 'Qué puedes probar en casa de forma segura (y qué NO debes hacer)',
        paragraphs: [
          'Antes de llevar tu equipo a taller puedes hacer dos comprobaciones seguras: probar el cargador en otro tomacorriente sin multitomas dañadas y conectar el portátil a un televisor o monitor por cable HDMI para verificar si da imagen externa.',
          'Lo que NUNCA recomendamos hacer es abrir el portátil con objetos metálicos sin desconectar la batería, aplicar calor con secador a la placa o insistir conectando un cargador que echa chispas o huele a quemado: eso puede convertir una reparación económica de un componente en una placa irrecuperable.',
        ],
      },
      {
        heading: 'Cómo realizamos la reparación electrónica de placa base en PCStyle',
        paragraphs: [
          'En muchos sitios te dicen directamente "hay que cambiar toda la tarjeta madre", lo que suele costar casi lo mismo que un portátil nuevo. Con diagnóstico electrónico real medimos voltajes, líneas de alimentación (19V, 5V, 3.3V), cortos con fuente de laboratorio y reprogramación de BIOS para reparar el componente exacto dañado.',
        ],
        tip: 'Si tu equipo sufrió derrame de agua, café o gaseosa: apágalo de inmediato, desconecta el cargador, NO lo pongas en arroz ni intentes encenderlo "para probar". Tráelo cuanto antes para hacer limpieza ultrasónica/isopropílica antes de que la corrosión destruya las pistas.',
      },
    ],
    faqs: [
      {
        question: '¿Cuánto tarda la reparación de una placa base o falla electrónica?',
        answer:
          'Las fallas simples (RAM, BIOS, fuente, pin de carga) suelen quedar listas el mismo día o en 24 horas; reparaciones de microelectrónica en motherboard toman normalmente entre 2 y 3 días hábiles.',
      },
      {
        question: '¿Las reparaciones de hardware y placa base tienen garantía?',
        answer:
          'Sí, todas nuestras reparaciones incluyen garantía escrita de 30 a 90 días según el tipo de intervención o repuesto instalado.',
      },
    ],
  },
  {
    slug: 'recuperacion-datos-disco-duro-danado-que-hacer',
    title: 'Qué hacer si tu disco duro o USB falló: guía para recuperar tus archivos sin perderlos',
    metaTitle: 'Recuperación de Datos en Disco Duro Dañado o USB en Cúcuta | PCStyle',
    excerpt:
      '¿Tu disco duro pide formatear, desaparecieron tus carpetas o el PC ya no lo reconoce? Sigue estos pasos clave para no sobrescribir tu información y aumentar al máximo las probabilidades de recuperación.',
    metaDescription:
      'Aprende qué hacer y qué evitar si tu disco duro, SSD o memoria USB falló en Cúcuta. Guía práctica de recuperación de datos y archivos borrados por PCStyle.',
    keywords:
      'recuperación de datos Cúcuta, disco duro pide formatear solución, recuperar archivos borrados PC, disco duro no reconoce Norte de Santander, soporte técnico recuperación información',
    category: 'Reparación y Mejoras',
    publishedAt: '2026-11-22',
    updatedAt: '2026-11-26',
    readTime: '5 min de lectura',
    author: AUTHORS.alexander,
    coverImage: '/IMG/datos.webp',
    coverAlt:
      'Servicio técnico profesional de recuperación de datos y respaldo de discos duros en Cúcuta - PCStyle',
    whatsappMessage:
      'Hola PCStyle, necesito ayuda urgente con recuperación de datos de un disco duro / memoria USB.',
    sections: [
      {
        heading: 'La regla de oro: deja de escribir en la unidad afectada inmediatamente',
        paragraphs: [
          'Cuando un archivo se borra por accidente o una partición se vuelve RAW ("necesita formatear el disco para poder usarlo"), la información casi siempre sigue físicamente allí, marcada como espacio disponible.',
          'El mayor peligro ocurre cuando sigues usando el computador, instalas programas gratuitos de recuperación en el mismo disco o aceptas el aviso de Windows de "Formatear disco": cada archivo nuevo que se escribe encima destruye los sectores originales de tus fotos, documentos contables o tesis.',
        ],
      },
      {
        heading: 'Tipos de fallas en discos duros, SSD y memorias USB',
        paragraphs: [
          'Identificar si el problema es lógico o físico define el procedimiento correcto:',
        ],
        bullets: [
          'Falla lógica: archivos borrados accidentalmente, formateo rápido, partición en formato RAW, virus que ocultan carpetas o errores de Windows tras un apagón.',
          'Falla por sectores defectuosos: el disco tarda muchísimo en abrir, congela el Explorador de Windows y algunas carpetas no dejan copiar.',
          'Falla electrónica o mecánica: el disco duro externo hace un sonido repetitivo de "clic-clic", no gira o se cayó al suelo. Aquí NO se debe seguir conectando porque los cabezales pueden rayar el plato magnético.',
        ],
      },
      {
        heading: '4 errores comunes que arruinan una recuperación de datos',
        paragraphs: [
          'Evita estas acciones si tus archivos son importantes:',
        ],
        bullets: [
          'Ejecutar CHKDSK /f repetidamente sobre un disco con sectores dañados (puede mutilar tablas de archivos y empeorar el desgaste).',
          'Descargar programas "milagrosos" crackeados que además traen virus o ransomware.',
          'Abrir un disco duro mecánico en casa: una sola partícula de polvo sobre el plato puede dañar miles de archivos.',
          'Guardar los archivos recuperados dentro del mismo disco averiado en lugar de otra unidad sana.',
        ],
      },
      {
        heading: 'Cómo trabajamos la recuperación segura en PCStyle',
        paragraphs: [
          'Primero evaluamos la salud SMART y el comportamiento eléctrico de la unidad. En discos inestables realizamos lectura sector por sector hacia una unidad destino limpia para proteger los datos antes de extraer carpetas, garantizando total confidencialidad sobre tu información personal o empresarial.',
        ],
        tip: 'Prevención real (regla 3-2-1): mantén tus archivos críticos en 3 copias, en 2 medios distintos (por ejemplo tu PC + un disco externo) y al menos 1 copia en la nube (Google Drive o OneDrive).',
      },
    ],
    faqs: [
      {
        question: '¿Se pueden recuperar archivos si Windows dice "necesita formatear el disco"?',
        answer:
          'Sí, en la gran mayoría de los casos el sistema de archivos se dañó por una desconexión brusca, pero los datos siguen intactos si no formateas ni sobreescribes la unidad.',
      },
      {
        question: '¿Mi información personal o contable se maneja con privacidad?',
        answer:
          'Totalmente. Entregamos los archivos recuperados directamente en tu unidad de destino o almacenamiento acordado y no conservamos copias privadas de tus documentos.',
      },
    ],
  },
  {
    slug: 'cuanto-cuesta-crear-pagina-web-con-seo-cucuta-colombia',
    title: '¿Cuánto cuesta crear una página web profesional con SEO en Cúcuta y Colombia?',
    metaTitle: 'Cuánto Cuesta Crear una Página Web con SEO en Cúcuta y Colombia | PCStyle',
    excerpt:
      'Conoce los rangos reales de precios en pesos colombianos (COP) para landing pages, sitios corporativos y desarrollos a medida, qué debe incluir tu web para aparecer en Google y cómo evitar errores costosos.',
    metaDescription:
      'Guía transparente de precios para crear una página web profesional con posicionamiento SEO en Cúcuta, Norte de Santander y Colombia: qué incluye cada plan y cómo elegir bien.',
    keywords:
      'cuánto cuesta crear una página web en Colombia, creación de páginas web Cúcuta precios, diseño web con SEO Cúcuta, landing page económica Colombia, desarrollo web Norte de Santander',
    category: 'Desarrollo Web',
    publishedAt: '2026-11-22',
    updatedAt: '2026-11-26',
    readTime: '6 min de lectura',
    author: AUTHORS.sebastian,
    coverImage: '/IMG/web-plan-corporativo.jpg',
    coverAlt:
      'Diseño y creación de páginas web profesionales con posicionamiento SEO en Cúcuta y Colombia - PCStyle',
    whatsappMessage:
      'Hola PCStyle, leí su artículo sobre cuánto cuesta crear una página web con SEO y quiero cotizar un proyecto para mi negocio.',
    sections: [
      {
        heading: 'Por qué una página web barata sin SEO termina saliendo cara',
        paragraphs: [
          'Muchos emprendedores y empresas en Cúcuta y Norte de Santander contratan una página web rápida solo por "tener presencia", pero meses después nadie los encuentra en Google ni llegan mensajes a WhatsApp.',
          'El problema casi siempre es técnico: sitios lentos en celular, sin estructura de encabezados, sin datos estructurados Schema.org, sin HTTPS o sin indexación correcta en Google Search Console. Una web profesional no es un adorno: es un vendedor activo 24/7.',
        ],
      },
      {
        heading: 'Precios referenciales de páginas web en Cúcuta y Colombia (2026)',
        paragraphs: [
          'El valor depende del alcance, el diseño y el nivel de optimización SEO. Como referencia transparente en PCStyle manejamos tres rangos principales:',
        ],
        bullets: [
          'Landing Page profesional con SEO inicial (desde $300.000 COP): ideal para emprendedores, servicios locales o campañas de WhatsApp/Meta Ads que buscan convertir visitas en clientes rápido.',
          'Sitio Web Corporativo con SEO avanzado (desde $550.000 COP): perfecto para empresas consolidadas que necesitan varias secciones, portafolio, reseñas, Schema.org, Google Search Console y velocidad optimizada.',
          'Proyecto Web a Medida (desde $800.000+ COP): para catálogos interactivos, tiendas online, reservas o integraciones personalizadas con arquitectura escalable.',
        ],
      },
      {
        heading: 'Checklist: qué DEBE incluir tu página web para posicionar en Google',
        paragraphs: [
          'Antes de contratar cualquier agencia o desarrollador, exige que tu sitio entregue como mínimo estos puntos técnicos:',
        ],
        bullets: [
          'Diseño 100% adaptable a celulares (más del 75% del tráfico local entra desde smartphones).',
          'Carga rápida (imágenes optimizadas en WebP, código limpio y pre-renderizado/HTML indexable).',
          'Certificado SSL (candado HTTPS), dominio propio (.com o .com.co) y redirección limpia sin duplicados.',
          'SEO técnico on-page: títulos únicos, meta descripciones persuasivas, sitemap.xml, robots.txt y Schema.org.',
          'Alta y verificación en Google Search Console para asegurar que Google indexe tu negocio desde el día uno.',
          'Botones claros de conversión hacia WhatsApp, llamada directa o formulario de cotización.',
        ],
      },
      {
        heading: '¿Cuánto tiempo tarda estar en línea y empezar a recibir clientes?',
        paragraphs: [
          'Una landing page profesional suele entregarse en 5 a 8 días hábiles, mientras que un sitio corporativo completo toma entre 1 y 3 semanas dependiendo del material y revisiones.',
          'Desde el primer día puedes recibir clientes compartiendo el enlace en Instagram, Facebook, Google Maps y campañas; y al combinarlo con SEO técnico bien hecho y contenido relevante, el tráfico orgánico en Google crece mes a mes sin pagar por cada clic.',
        ],
        tip: 'Si ya tienes perfil en Google Maps (Google Business Profile), enlazar tu nueva página web optimizada con tu ficha local potencia ambos canales al mismo tiempo y te ayuda a aparecer en el top de búsquedas de tu ciudad.',
      },
    ],
    faqs: [
      {
        question: '¿El precio incluye dominio y hosting?',
        answer:
          'Te asesoramos y configuramos todo (dominio .com o .com.co, DNS, certificado SSL y despliegue de alta velocidad). El costo anual del dominio y hosting se cotiza de forma transparente según tu proyecto para que el dominio siempre quede a tu nombre.',
      },
      {
        question: '¿Crean páginas web solo para Cúcuta o para toda Colombia?',
        answer:
          'Atendemos presencialmente en Cúcuta y Norte de Santander, y de forma 100% remota para negocios y profesionales en toda Colombia y el exterior.',
      },
    ],
  },
]

export function getPostBySlug(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug) || null
}

export function getRelatedPosts(currentSlug, limit = 3) {
  const current = getPostBySlug(currentSlug)
  const others = BLOG_POSTS.filter((post) => post.slug !== currentSlug)
  if (!current) return others.slice(0, limit)

  const sameCategory = others.filter((post) => post.category === current.category)
  const differentCategory = others.filter((post) => post.category !== current.category)
  return [...sameCategory, ...differentCategory].slice(0, limit)
}
