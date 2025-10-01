# Demo App - Root Block Design System

Demo simple y estática construida con HTML, CSS y JavaScript minimalista.

## 🚀 Ejecutar

```bash
# Desde la raíz del monorepo
npm run demo

# Se abrirá en http://localhost:4200
```

## 📁 Estructura (Super Simple)

```
apps/demo/
├── index.html              # ⭐ HTML principal con todos los componentes
├── public/
│   ├── demo-app.js         # ~130 líneas de JS (lógica mínima)
│   ├── demo-styles.css     # ~300 líneas de CSS (estilos de la demo)
│   └── tokens/             # CSS de tokens copiados automáticamente
│       ├── jelpit-light.css
│       ├── jelpit-dark.css
│       └── ... (12 archivos)
├── vite.config.ts
└── project.json
```

## 🎯 Características

### 1. HTML Estático
Todo el contenido visible está en `index.html`:
- Header con selectores
- Showcase de botones (variantes, tamaños)
- Ejemplos con íconos
- Estados y accesibilidad
- Event log

### 2. JavaScript Minimalista (`demo-app.js`)
Solo ~130 líneas para:
- Importar `@root-block/ui` (Web Components)
- Cambiar marca/tema dinámicamente
- Event logger

### 3. CSS de Demo (`demo-styles.css`)
Estilos solo para la demo app:
- Layout y grid
- Header y controles
- Cards de showcase
- Event log flotante
- Responsive design

### 4. Tokens Auto-Copiados
Los CSS de tokens se copian automáticamente desde `libs/tokens/dist/` a `public/tokens/`:
```
jelpit-light.css
jelpit-dark.css
davivienda-light.css
... (12 total)
```

## 💻 Uso

### Ver en el Navegador
1. Ejecuta `npm run demo`
2. Abre http://localhost:4200
3. Cambia marca y tema con los selectores
4. Haz click en botones para ver eventos

### Código Mínimo

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="es" data-brand="jelpit" data-theme="light">
<head>
  <link id="theme-css" rel="stylesheet" href="/tokens/jelpit-light.css">
  <link rel="stylesheet" href="/demo-styles.css">
</head>
<body>
  <rb-button variant="primary">Mi Botón</rb-button>
  <script type="module" src="/demo-app.js"></script>
</body>
</html>
```

```javascript
// demo-app.js
import '@root-block/ui';

// Cambiar tema
function loadTheme(brand, theme) {
  document.getElementById('theme-css').href = `/tokens/${brand}-${theme}.css`;
  document.documentElement.setAttribute('data-brand', brand);
  document.documentElement.setAttribute('data-theme', theme);
}
```

## 🎨 Personalizar la Demo

### Agregar Nuevos Componentes
Solo edita `index.html` y agrega tu HTML:

```html
<section class="demo-section">
  <h2>Mi Nuevo Componente</h2>
  <rb-nuevo-componente></rb-nuevo-componente>
</section>
```

### Cambiar Estilos
Edita `public/demo-styles.css`:

```css
.demo-section {
  /* tus estilos */
}
```

### Agregar Funcionalidad JS
Edita `public/demo-app.js`:

```javascript
function miFuncion() {
  // tu código
}
```

## 🏗️ Build para Producción

```bash
npm run demo:build
```

Output en `dist/apps/demo/`:
```
dist/apps/demo/
├── index.html
├── demo-app.js
├── demo-styles.css
└── tokens/
    └── *.css (12 archivos)
```

## 🔧 Configuración Vite

El `vite.config.ts` está configurado para:
- Servir desde `public/` (archivos estáticos)
- Resolver alias `@root-block/ui`
- Permitir acceso a `libs/` fuera del root
- Build optimizado

## 📊 Tamaño

```
index.html       ~10 KB (HTML con componentes)
demo-app.js      ~3 KB (JS minimalista)
demo-styles.css  ~8 KB (estilos demo)
tokens/*.css     ~4-5 KB cada uno
---
Total: ~25 KB (sin contar UI bundle)
```

## ✅ Ventajas de Esta Arquitectura

1. **HTML Legible** - Todo el contenido visible está en HTML
2. **JS Mínimo** - Solo lógica esencial (~130 líneas)
3. **CSS Separado** - Estilos de demo independientes
4. **Fácil de Entender** - Cualquiera puede leer el código
5. **Rápido** - Sin frameworks pesados
6. **Escalable** - Fácil agregar más componentes

## 📚 Más Información

- [README principal](../../README.md)
- [Documentación de @root-block/ui](../../libs/ui/README.md)
- [Configuración de Alias](../../ALIAS_CONFIG.md)

---

**Demo minimalista del Root Block Design System** ✨