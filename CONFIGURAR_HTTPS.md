# 🔒 Guía para Activar HTTPS y Conexión Segura

## ✅ **Vercel proporciona SSL automáticamente**

Cuando despliegas en **Vercel** y conectas tu dominio, el certificado SSL se activa automáticamente. No necesitas configurar nada adicional.

---

## 📋 Pasos para Activar HTTPS

### 1. Desplegar tu Proyecto en Vercel

Si aún no lo has hecho:

#### Opción A: Desde la Web de Vercel
1. Ve a **https://vercel.com**
2. Haz clic en **"Add New Project"**
3. Conecta tu repositorio de GitHub: **https://github.com/johan12rojas/PCStyle**
4. Vercel detectará automáticamente que es un proyecto Vite
5. Haz clic en **"Deploy"**

#### Opción B: Desde la Terminal (CLI)
```bash
# Instalar Vercel CLI globalmente
npm install -g vercel

# Iniciar sesión
vercel login

# Desplegar
vercel

# Desplegar en producción
vercel --prod
```

---

### 2. Conectar tu Dominio (pcstyle.com.co)

1. En el dashboard de Vercel, ve a tu proyecto
2. Ve a **Settings** → **Domains**
3. Haz clic en **"Add"**
4. Ingresa: **`pcstyle.com.co`**
5. Vercel te dará instrucciones para configurar DNS en **mi.com.co**

### 3. Configurar DNS en mi.com.co

En el panel de **mi.com.co**, crea un registro:

**Registro Tipo A:**
- **Nombre/Host**: `@` (o vacío)
- **Valor/IP**: El que te dio Vercel (ej: `76.76.21.21`)
- **TTL**: `3600`

---

## 🎯 SSL Automático en Vercel

Una vez que el dominio esté conectado y verificado, Vercel automáticamente:

✅ **Proporciona certificado SSL** (Let's Encrypt)  
✅ **Renueva automáticamente** cada 90 días  
✅ **Redirige HTTP → HTTPS** automáticamente  
✅ **Muestra el candado 🔒** en el navegador  

**Tiempo estimado**: 5-30 minutos después de verificar el dominio

---

## 🔍 Verificar que HTTPS Funciona

### En el Navegador:
1. Abre tu sitio: **https://pcstyle.com.co**
2. Deberías ver el **candado 🔒** en la barra de direcciones
3. Haz clic en el candado para ver detalles del certificado

### Verificar Estado del Certificado:
```bash
# Desde terminal (opcional)
openssl s_client -connect pcstyle.com.co:443 -servername pcstyle.com.co
```

### Herramientas Online:
- **SSL Labs**: https://www.ssllabs.com/ssltest/analyze.html?d=pcstyle.com.co
- **Why No Padlock**: https://www.whynopadlock.com/

---

## 🛠️ Configuración Adicional (Opcional)

### Forzar HTTPS en tu Código

Aunque Vercel lo hace automáticamente, puedes asegurarte con redirecciones:

#### Opción 1: `vercel.json` (Recomendado)
Ya está configurado en tu proyecto ✅

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains"
        }
      ]
    }
  ]
}
```

#### Opción 2: Meta Tag (Ya incluido)
Ya está en tu `index.html` ✅:
```html
<meta http-equiv="X-Content-Type-Options" content="nosniff">
```

---

## 🚨 Solución de Problemas

### ❌ El sitio no muestra el candado

**Causas posibles:**
1. **Contenido mixto**: Archivos cargando por HTTP en lugar de HTTPS
   - **Solución**: Cambia todas las URLs a HTTPS (http:// → https://)

2. **Dominio no verificado**: DNS aún propagándose
   - **Solución**: Espera 24-48 horas, verifica en https://dnschecker.org

3. **Certificado pendiente**: Vercel aún generando el certificado
   - **Solución**: Espera unos minutos y recarga

### ❌ Error "NET::ERR_CERT_AUTHORITY_INVALID"

**Causa**: Certificado no válido o en proceso de generación

**Solución**:
1. Verifica que el dominio esté correctamente conectado en Vercel
2. Espera 5-30 minutos para que se genere el certificado
3. Si persiste, elimina y vuelve a conectar el dominio

---

## 📱 Verificar en Móviles

Una vez activo, verifica que funcione en:
- ✅ Chrome (Android)
- ✅ Safari (iOS)
- ✅ Otros navegadores móviles

El candado debería aparecer en todos.

---

## 🎓 Mejores Prácticas

### 1. **HSTS (HTTP Strict Transport Security)**
Ya está incluido en la configuración recomendada arriba.

### 2. **Redirecciones Automáticas**
Vercel ya redirige HTTP → HTTPS automáticamente.

### 3. **Certificado Válido**
Vercel usa Let's Encrypt, reconocido por todos los navegadores.

### 4. **Renovación Automática**
Vercel renueva el certificado automáticamente, no necesitas hacer nada.

---

## 🔐 Seguridad Adicional

### Headers de Seguridad (Opcional)

Puedes añadir más seguridad en `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "camera=(), microphone=(), geolocation=()"
        }
      ]
    }
  ]
}
```

---

## ✅ Checklist Final

Antes de verificar que todo funciona:

- [ ] Proyecto desplegado en Vercel
- [ ] Dominio conectado en Vercel (Settings → Domains)
- [ ] DNS configurado correctamente en mi.com.co
- [ ] Dominio verificado en Vercel (estado: ✅ Valid)
- [ ] Esperado 5-30 minutos para generación de certificado
- [ ] Abrir https://pcstyle.com.co en el navegador
- [ ] Verificar candado 🔒 en la barra de direcciones

---

## 📞 Soporte

Si tienes problemas:
- **Vercel Docs**: https://vercel.com/docs/security/encryption
- **Vercel Support**: https://vercel.com/support

---

**¡Tu sitio estará seguro con HTTPS automáticamente una vez conectes el dominio en Vercel!** 🔒✅

