# 📜 Scripts del Proyecto Root Block

## 🚀 Scripts Principales (Uso Diario)

### **Desarrollo**
```bash
npm run dev
```
**Hace automáticamente:**
1. ✅ Build tokens (`libs/tokens/dist/*.css`)
2. ✅ Build UI (`libs/ui/dist/index.js`)
3. ✅ Copia tokens a `apps/demo/public/tokens/`
4. ✅ Copia UI a `apps/demo/public/js/rb-ui.js`
5. ✅ Inicia dev server en `http://localhost:4200`

**Usa este siempre para desarrollo** - Todo está sincronizado automáticamente.

---

### **Build para Producción**
```bash
npm run build:demo
```
**Hace automáticamente:**
1. ✅ Build tokens
2. ✅ Build UI
3. ✅ Copia assets a public
4. ✅ Build de producción en `apps/demo/dist/`

**Usa este para desplegar a Vercel o producción.**

---

## 🔧 Scripts de Build Individuales

### **Build Tokens**
```bash
npm run build:tokens
```
- Genera 12 archivos CSS (6 marcas × 2 temas)
- Output: `libs/tokens/dist/*.css`

### **Build UI Components**
```bash
npm run build:ui
```
- Compila Web Components con Lit
- Output: `libs/ui/dist/index.js` (19KB gzip: 3KB)

### **Build Todo**
```bash
npm run build:all
```
- Build tokens + Build UI en secuencia

---

## 📦 Scripts de Copia de Assets

### **Copiar Tokens al Demo**
```bash
npm run demo:copy-tokens
```
- Copia CSS tokens a `apps/demo/public/tokens/`

### **Copiar UI al Demo**
```bash
npm run demo:copy-ui
```
- Copia bundle JS a `apps/demo/public/js/rb-ui.js`

### **Copiar Todos los Assets**
```bash
npm run demo:copy-assets
```
- Ejecuta `demo:copy-tokens` + `demo:copy-ui`

### **Preparar Demo (Build + Copy)**
```bash
npm run demo:prepare
```
- Ejecuta `build:all` + `demo:copy-assets`
- **Usa este si solo quieres preparar sin iniciar el servidor**

---

---

## 🧪 Scripts de Testing y Linting

### **Tests**
```bash
npm run test
```
- Ejecuta tests de todos los proyectos con Nx

### **Linting**
```bash
npm run lint
```
- Ejecuta ESLint en todos los proyectos

---

## 🔄 Flujo de Trabajo Típico

### **1. Iniciar Desarrollo**
```bash
npm run dev
```
✅ Todo se prepara automáticamente

### **2. Hacer Cambios**

**Si cambias tokens** (`libs/tokens/src/`):
```bash
npm run build:tokens
npm run demo:copy-tokens
```
El dev server detectará el cambio en `public/tokens/` y recargará

**Si cambias componentes** (`libs/ui/src/`):
```bash
npm run build:ui
npm run demo:copy-ui
```
Recarga la página para ver cambios

**Si cambias el demo** (`apps/demo/src/`):
- Vite HMR recarga automáticamente ✨

### **3. Build para Producción**
```bash
npm run build:demo
```
Output en `apps/demo/dist/` listo para deploy

### **4. Deploy a Vercel**
```bash
vercel --prod
```
O push a GitHub si tienes CI/CD configurado

---

## 📊 Tiempos de Build

| Script | Tiempo | Output |
|--------|--------|--------|
| `build:tokens` | ~2s | 12 CSS files (~8KB cada uno) |
| `build:ui` | ~1s | 1 JS file (19KB, 3KB gzip) |
| `demo:copy-assets` | <1s | Copia a public/ |
| **Total `demo:prepare`** | **~3s** | Todo listo |

---

## 🎨 Vercel Build Command

El comando configurado en `vercel.json`:
```bash
npx nx run tokens:build && 
npx nx run ui:build && 
npm run demo:copy-assets && 
npx nx run demo:build
```

Esto es equivalente a:
```bash
npm run demo:prepare && nx run demo:build
```

---

## 💡 Tips

### **Desarrollo rápido sin rebuild:**
Si solo cambias HTML/CSS del demo y ya hiciste el build inicial:
```bash
nx run demo:serve
```
⚠️ Asegúrate de que `public/js/rb-ui.js` y `public/tokens/*.css` existan

### **Watch mode para desarrollo:**
Actualmente no hay watch mode. Para cambios iterativos:
1. Mantén `npm run dev` corriendo
2. En otra terminal, ejecuta builds según necesites:
   ```bash
   npm run build:ui && npm run demo:copy-ui
   ```
3. Recarga el navegador

### **Clean build:**
Si algo no funciona:
```bash
rm -rf dist/
rm -rf apps/demo/public/js/
rm -rf apps/demo/public/tokens/
npm run dev
```

---

## 🔗 Scripts Encadenados

Los scripts están diseñados para encadenarse automáticamente:

```
dev (desarrollo)
├── demo:prepare
│   ├── build:all
│   │   ├── build:tokens
│   │   └── build:ui
│   └── demo:copy-assets
│       ├── demo:copy-tokens
│       └── demo:copy-ui
└── nx run demo:serve

build:demo (producción)
├── demo:prepare (igual que arriba)
└── nx run demo:build
```

**Conclusión**: Solo necesitas recordar `npm run dev` para desarrollo y `npm run build:demo` para producción. 🚀

