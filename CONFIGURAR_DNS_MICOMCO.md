# 🔧 Guía: Configurar DNS en mi.com.co para Vercel

## 📋 Pasos para Configurar DNS

### 1. Obtener los Valores de Vercel

En Vercel:
1. Ve a **Settings** → **Domains**
2. Haz clic en `www.pcstyle.com.co` o en **"Edit"**
3. Busca la sección **"DNS Configuration"** o **"Records"**
4. Verás algo como:

**Para www.pcstyle.com.co (CNAME):**
- Tipo: `CNAME`
- Nombre: `www`
- Valor: `cname.vercel-dns.com.` (o similar)

**Para pcstyle.com.co (A Record):**
- Tipo: `A`
- Nombre: `@` (o vacío)
- Valor: `76.76.21.21` (IP que te da Vercel)

---

## 2. Configurar en mi.com.co

### Paso 1: Acceder a DNS
1. Ve a **https://mi.com.co**
2. Inicia sesión
3. Busca **"Dominios"** en el menú
4. Haz clic en **`pcstyle.com.co`**
5. Busca la sección **"DNS"** o **"Zona DNS"** o **"Manage DNS"**

### Paso 2: Agregar Registro A (para pcstyle.com.co)

1. Haz clic en **"Agregar Registro"** o **"Añadir"**
2. Completa:
   - **Tipo**: Selecciona **"A"**
   - **Nombre/Host**: `@` (o déjalo vacío, o escribe `pcstyle.com.co`)
   - **Valor/IP**: La IP que te dio Vercel (ejemplo: `76.76.21.21`)
   - **TTL**: `3600` (o el valor por defecto)
3. Haz clic en **"Guardar"** o **"Aplicar"**

### Paso 3: Agregar Registro CNAME (para www.pcstyle.com.co)

1. Haz clic en **"Agregar Registro"** nuevamente
2. Completa:
   - **Tipo**: Selecciona **"CNAME"**
   - **Nombre/Host**: `www`
   - **Valor**: El CNAME que te dio Vercel (ejemplo: `cname.vercel-dns.com.`)
   - **TTL**: `3600` (o el valor por defecto)
3. Haz clic en **"Guardar"** o **"Aplicar"**

---

## 3. Verificar en Vercel

Después de guardar los DNS en mi.com.co:

1. Espera 2-5 minutos
2. Ve a Vercel → **Settings** → **Domains**
3. Haz clic en **"Refresh"** en ambos dominios
4. El estado debería cambiar a:
   - ✅ **Valid Configuration** (ambos dominios)
   - ✅ **SSL Certificate** generado (verás el candado verde)

---

## 4. Tiempos de Propagación

- ⏱️ **Mínimo**: 5-15 minutos
- ⏱️ **Típico**: 30 minutos - 2 horas
- ⏱️ **Máximo**: 24-48 horas

Puedes verificar la propagación en:
- https://dnschecker.org/#A/pcstyle.com.co
- https://dnschecker.org/#CNAME/www.pcstyle.com.co

---

## 🚨 Solución de Problemas

### ❌ El dominio sigue en "Generating SSL Certificate"

**Causas:**
1. DNS aún no propagados → Espera más tiempo
2. DNS configurados incorrectamente → Verifica los valores

**Solución:**
1. Verifica que los valores en mi.com.co sean EXACTAMENTE los que te dio Vercel
2. Asegúrate de que el CNAME termine con punto (`.`): `cname.vercel-dns.com.`
3. Espera 15-30 minutos y haz clic en **"Refresh"** en Vercel

### ❌ El dominio muestra "Invalid Configuration"

**Causas:**
- Valores DNS incorrectos
- Conflicto con otros registros

**Solución:**
1. Verifica que no haya otros registros A o CNAME para estos dominios
2. Elimina registros duplicados
3. Asegúrate de usar los valores exactos de Vercel

---

## ✅ Checklist

Antes de considerar que está completo:

- [ ] Registro A creado para `@` o `pcstyle.com.co` en mi.com.co
- [ ] Registro CNAME creado para `www` en mi.com.co
- [ ] Valores guardados en mi.com.co
- [ ] Esperado 5-15 minutos
- [ ] Clic en "Refresh" en Vercel
- [ ] Ambos dominios muestran "Valid Configuration"
- [ ] Certificado SSL generado (candado verde)
- [ ] Sitio accesible en https://pcstyle.com.co
- [ ] Sitio accesible en https://www.pcstyle.com.co

---

## 📞 Si Necesitas Ayuda

Si los valores no aparecen en Vercel, puedes intentar:
1. Eliminar y volver a agregar el dominio en Vercel
2. O contactar a Vercel: https://vercel.com/support

---

**¡Una vez configurado, tu sitio estará disponible con HTTPS automático!** 🔒✅

