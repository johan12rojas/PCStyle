# 🌐 Guía para Configurar pcstyle.com.co en Vercel

## 📋 Pasos para Implementar tu Dominio

### Paso 1: Comprar el Dominio en mi.com.co

1. Ve a **https://mi.com.co**
2. Busca y compra el dominio **`pcstyle.com.co`**
3. Una vez comprado, accede al panel de administración del dominio
4. Busca la sección de **"DNS"** o **"Zona DNS"**

---

### Paso 2: Conectar Dominio en Vercel

#### 2.1 Desde el Dashboard de Vercel

1. Ve a **https://vercel.com/dashboard**
2. Selecciona tu proyecto **PCStyleLP**
3. Ve a **Settings** → **Domains**
4. Haz clic en **"Add"** o **"Añadir"**
5. Ingresa: **`pcstyle.com.co`**
6. Haz clic en **"Add"**

#### 2.2 Vercel te mostrará los registros DNS necesarios

Vercel te dará algo como esto:
- **Tipo A**: `76.76.21.21` (o similar)
- **Tipo CNAME**: `cname.vercel-dns.com.` (para www)

**⚠️ IMPORTANTE**: Copia estos valores, los necesitarás en el próximo paso.

---

### Paso 3: Configurar DNS en mi.com.co

#### Opción A: Usando Registro A (Recomendado para dominio principal)

1. En el panel de **mi.com.co**, ve a **DNS** o **Zona DNS**
2. Busca o crea un registro **Tipo A** para:
   - **Nombre/Host**: `@` o `pcstyle.com.co` (vacío también funciona)
   - **Valor/IP**: El valor que te dio Vercel (ej: `76.76.21.21`)
   - **TTL**: `3600` (o el valor por defecto)

#### Opción B: Usando Registro CNAME (Para subdominios)

Si quieres también `www.pcstyle.com.co`:

1. Crea un registro **Tipo CNAME**:
   - **Nombre/Host**: `www`
   - **Valor**: `cname.vercel-dns.com.` (el que te dio Vercel)
   - **TTL**: `3600`

---

### Paso 4: Verificar la Configuración

#### 4.1 En Vercel

1. Vuelve a **Settings** → **Domains** en Vercel
2. Verás el estado del dominio:
   - **🟡 Validating**: Verificando configuración
   - **🟢 Valid**: Dominio conectado correctamente
   - **🔴 Error**: Revisa los registros DNS

#### 4.2 Tiempo de Propagación

- ⏱️ **Tiempo estimado**: 24-48 horas (a veces solo minutos)
- 🔍 Puedes verificar el progreso con herramientas como:
  - https://www.whatsmydns.net/#A/pcstyle.com.co
  - https://dnschecker.org/#A/pcstyle.com.co

---

### Paso 5: Configurar SSL (Automático)

✅ **Vercel configura SSL automáticamente** cuando detecta que el dominio está correctamente conectado.

En unos minutos después de la verificación, tu sitio estará disponible en:
- ✅ **https://pcstyle.com.co**
- ✅ **https://www.pcstyle.com.co** (si configuraste el CNAME)

---

## 🔧 Solución de Problemas

### ❌ El dominio no se verifica

1. **Verifica los registros DNS**:
   - Asegúrate de que el Tipo A tenga el IP correcto de Vercel
   - No deben haber otros registros A o CNAME que entren en conflicto

2. **Espera más tiempo**:
   - La propagación DNS puede tardar hasta 48 horas

3. **Revisa en mi.com.co**:
   - Confirma que los cambios se guardaron correctamente
   - Algunos proveedores requieren "Aplicar" o "Guardar" cambios

### ❌ El sitio carga pero muestra error

1. **Verifica que el proyecto esté desplegado**:
   - Ve a **Deployments** en Vercel
   - Asegúrate de que haya un deployment activo

2. **Verifica el vercel.json**:
   - Ya está configurado correctamente ✅

---

## 📝 Notas Importantes

### Dominio vs Subdominio

- **`pcstyle.com.co`** → Configura con **Registro A**
- **`www.pcstyle.com.co`** → Configura con **Registro CNAME**

### Vercel Pro (Plan Gratuito)

✅ El plan gratuito de Vercel incluye:
- Dominios personalizados
- SSL automático
- CDN global
- Sin costo adicional

### Renovación del Dominio

⚠️ **Recuerda renovar el dominio** anualmente en mi.com.co para mantenerlo activo.

---

## 🚀 Después de Configurar

Una vez que el dominio esté funcionando:

1. ✅ Actualiza tus redes sociales con el nuevo dominio
2. ✅ Actualiza el formulario de contacto si es necesario
3. ✅ Verifica que todos los enlaces internos funcionen
4. ✅ Prueba en diferentes navegadores y dispositivos

---

## 📞 Soporte

Si tienes problemas:
- **Vercel**: https://vercel.com/support
- **mi.com.co**: Contacta su soporte técnico
- **Herramientas de diagnóstico**: https://dnschecker.org

---

**¡Listo! Tu sitio estará disponible en pcstyle.com.co** 🎉

