# 🔍 Configurar Google Analytics y Search Console

## 📊 Google Analytics 4 (GA4)

### Pasos:

1. **Crear cuenta:**
   - Ve a https://analytics.google.com
   - Crea una cuenta o inicia sesión
   - Crea una "Propiedad" para pcstyle.com.co

2. **Obtener código de seguimiento:**
   - En tu propiedad, ve a "Administrar" → "Flujos de datos"
   - Clic en tu sitio web
   - Copia el "ID de medición" (formato: G-XXXXXXXXXX)

3. **Agregar a tu sitio:**
   - Agrega este código antes de `</head>` en `index.html`:
   
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-TU-ID-AQUI"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-TU-ID-AQUI');
</script>
```

4. **Eventos personalizados (opcional):**
   - Rastrear clics en WhatsApp
   - Rastrear envíos de formulario
   - Rastrear llamadas telefónicas

---

## 🔍 Google Search Console

### Pasos:

1. **Verificar propiedad:**
   - Ve a https://search.google.com/search-console
   - Agrega "Prefijo de URL": `https://pcstyle.com.co`
   - Elige método de verificación:
     - **Recomendado:** Etiqueta HTML (más fácil)
     - Copia el código de verificación

2. **Agregar etiqueta de verificación:**
   - Agrega esta línea en `<head>` de `index.html`:
   
```html
<meta name="google-site-verification" content="TU-CODIGO-DE-VERIFICACION" />
```

3. **Enviar sitemap:**
   - Una vez verificado, ve a "Sitemaps"
   - Ingresa: `https://pcstyle.com.co/sitemap.xml`
   - Clic en "Enviar"

4. **Revisar reportes:**
   - **Rendimiento:** Ver qué palabras clave te encuentran
   - **Cobertura:** Errores de indexación
   - **Mejoras:** Sugerencias de SEO

---

## ⭐ Google My Business (Crítico para SEO Local)

### Pasos:

1. **Crear/Reclamar perfil:**
   - Ve a https://www.google.com/business
   - Busca "PCStyle" o crea nuevo negocio
   - Selecciona categoría: "Servicio de reparación de computadoras"

2. **Completar información:**
   - ✅ Nombre: PCStyle
   - ✅ Dirección: Urbanización Monterosso, Manzana E casa 28 #An-60, Cúcuta
   - ✅ Teléfono: 322 5934970
   - ✅ Horarios: Lunes-Domingo 8:00 AM - 8:00 PM
   - ✅ Sitio web: https://pcstyle.com.co
   - ✅ Descripción con palabras clave locales

3. **Verificar negocio:**
   - Google te enviará código por correo o SMS
   - Ingresa el código para verificar

4. **Optimizar perfil:**
   - Agregar fotos (mínimo 10):
     - Logo
     - Interior del taller/oficina
     - Trabajos realizados
     - Equipamiento
   - Agregar servicios que ofreces
   - Responder preguntas frecuentes
   - Crear publicaciones regulares

5. **Solicitar reseñas:**
   - Pide a clientes satisfechos que dejen reseña
   - Objetivo: Mínimo 10 reseñas (5 estrellas)
   - Responde TODAS las reseñas (buenas y malas)

---

## 📈 Beneficios de Cada Herramienta

### Google Analytics:
- ✅ Saber de dónde vienen tus visitantes
- ✅ Qué páginas son más populares
- ✅ Cuántos contactos/llamadas generas
- ✅ Tiempo en sitio, tasa de rebote

### Google Search Console:
- ✅ Ver qué palabras clave te encuentran
- ✅ Errores que impiden indexación
- ✅ Mejoras sugeridas por Google
- ✅ Velocidad de indexación

### Google My Business:
- ✅ Aparecer en "Mapas" de Google
- ✅ Aparecer en búsquedas "cerca de mí"
- ✅ Mostrar reseñas en búsqueda
- ✅ Llamadas directas desde Google

---

## 🎯 Próximos Pasos (Esta Semana)

1. ✅ Crear cuenta Google Analytics → Obtener ID
2. ✅ Verificar en Search Console → Enviar sitemap
3. ✅ Crear/Optimizar Google My Business → Solicitar 5 reseñas

**Tiempo estimado:** 1-2 horas

**Impacto:** Alto - Estas son las herramientas más importantes para SEO local

---

¿Necesitas ayuda para agregar el código de Google Analytics a tu sitio? Puedo ayudarte cuando tengas el ID.

