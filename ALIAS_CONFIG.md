# 🔗 Configuración de Alias - Root Block Design System

Este documento explica cómo están configurados los alias para importar los paquetes `@root-block/tokens` y `@root-block/ui` dentro del monorepo.

## 📦 Estructura de Paquetes

```
root-block-wc/
├── libs/
│   ├── tokens/
│   │   └── dist/
│   │       ├── jelpit-light.css
│   │       ├── jelpit-dark.css
│   │       ├── ... (12 CSS total)
│   │       └── index.js (types)
│   │
│   └── ui/
│       └── dist/
│           ├── index.js        ⭐ UN SOLO ARCHIVO (como Bootstrap)
│           ├── index.js.map    (source map)
│           └── ui/             (TypeScript definitions)
│               └── *.d.ts
│
└── apps/
    └── demo/
        ├── vite.config.ts     (configuración de alias)
        ├── tsconfig.json      (paths para TS)
        └── src/
            └── main.ts        (usa los alias)
```

## ⚙️ Configuración en Vite

**Archivo:** `apps/demo/vite.config.ts`

```typescript
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: {
    alias: {
      // Tokens: directorio completo
      '@root-block/tokens': resolve(__dirname, '../../libs/tokens/dist'),
      
      // UI: archivo único (bundle completo)
      '@root-block/ui': resolve(__dirname, '../../libs/ui/dist/index.js')
    }
  },
  
  server: {
    fs: {
      strict: false  // Permite acceso a libs/ fuera del root
    }
  },
  
  optimizeDeps: {
    // Pre-bundle Lit para mejor performance
    include: ['lit', 'lit/decorators.js', 'lit/directives/class-map.js']
  }
});
```

## 📝 Configuración en TypeScript

**Archivo:** `apps/demo/tsconfig.json`

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@root-block/tokens": ["../../libs/tokens/dist"],
      "@root-block/ui": ["../../libs/ui/dist/index.js"]
    }
  }
}
```

## 💻 Uso en el Código

### 1. Importar Web Components (JavaScript/TypeScript)

```typescript
// apps/demo/src/main.ts

// Importa el bundle completo de Web Components
import '@root-block/ui';

// ✅ Ahora todos los componentes están disponibles:
// <rb-button>, <rb-input>, <rb-card>, etc.
```

**Nota:** Gracias al alias, `@root-block/ui` se resuelve a `../../libs/ui/dist/index.js`

### 2. Cargar Tokens CSS Dinámicamente

```typescript
// Cargar tokens según marca y tema
function loadTheme(brand: string, theme: string) {
  const link = document.getElementById('theme-css');
  
  // El alias permite usar rutas relativas al dist/
  link.href = `../../libs/tokens/dist/${brand}-${theme}.css`;
  
  // O en producción con npm:
  // link.href = `@root-block/tokens/${brand}-${theme}.css`;
}

loadTheme('jelpit', 'light');
```

### 3. Uso en HTML (Producción)

```html
<!DOCTYPE html>
<html lang="es" data-brand="jelpit" data-theme="light">
<head>
  <!-- CSS de tokens -->
  <link rel="stylesheet" href="node_modules/@root-block/tokens/jelpit-light.css">
  
  <!-- JS de componentes (UN SOLO ARCHIVO) -->
  <script type="module" src="node_modules/@root-block/ui/dist/index.js"></script>
</head>
<body>
  <rb-button variant="primary">Mi Botón</rb-button>
</body>
</html>
```

## 🎯 Ventajas de Esta Configuración

### ✅ Bundle Único
- **Un solo archivo JS** para todos los componentes
- Similar a Bootstrap: `<script src="bootstrap.min.js">`
- Fácil de distribuir y usar

### ✅ Alias Limpios
```typescript
// ❌ Sin alias
import '../../../libs/ui/dist/index.js';

// ✅ Con alias
import '@root-block/ui';
```

### ✅ Consistencia
- Mismo nombre en desarrollo (`@root-block/ui`) que en producción (npm)
- Fácil refactorización cuando se publique a npm

### ✅ TypeScript Support
- Autocompletado funciona correctamente
- Los types se resuelven automáticamente desde `dist/ui/*.d.ts`

### ✅ Tree-Shaking (Futuro)
Aunque ahora es un bundle único, la configuración permite:
```typescript
// Importación selectiva (cuando se implemente)
import { RbButton } from '@root-block/ui';
```

## 🔄 Comparación: Desarrollo vs Producción

### En Desarrollo (Monorepo Nx + Vite)

```typescript
// Alias configurado en vite.config.ts
import '@root-block/ui';

// Se resuelve a:
// ../../libs/ui/dist/index.js
```

### En Producción (npm install)

```typescript
// Mismo código, pero npm resuelve el paquete
import '@root-block/ui';

// Se resuelve a:
// node_modules/@root-block/ui/dist/index.js
```

**¡Sin cambios en el código!** 🎉

## 📊 Resumen Visual

```
┌─────────────────────────────────────────────────────────────┐
│  apps/demo/src/main.ts                                      │
│                                                             │
│  import '@root-block/ui';  ← Alias limpio                  │
│         │                                                   │
│         ├─ Vite resuelve ─────────────────┐                │
│         │                                  │                │
│         ↓                                  ↓                │
│  libs/ui/dist/index.js            (7.5 KB, 2.35 KB gzip)   │
│         │                                                   │
│         ├─ Incluye:                                        │
│         │  • RbButton                                      │
│         │  • BaseAtom                                      │
│         │  • Todos los componentes                         │
│         │                                                   │
│         └─ Auto-registra como:                             │
│            <rb-button>, <rb-input>, etc.                   │
└─────────────────────────────────────────────────────────────┘
```

## 🛠️ Troubleshooting

### Error: "Cannot find module '@root-block/ui'"

**Causa:** Vite no encuentra el alias.

**Solución:**
1. Verifica que `libs/ui/dist/index.js` exista: `npm run build:ui`
2. Reinicia el dev server: `npm run demo`
3. Limpia cache: `rm -rf node_modules/.vite`

### Error: "Failed to resolve import"

**Causa:** El archivo de destino no existe.

**Solución:**
```bash
# Rebuild la librería UI
cd libs/ui
npm run build

# Verifica que exista
ls -lh dist/index.js
```

### TypeScript no encuentra los types

**Causa:** Los paths no están correctamente configurados.

**Solución:**
Verifica `tsconfig.json`:
```json
"paths": {
  "@root-block/ui": ["../../libs/ui/dist/index.js"]
}
```

## 📚 Referencias

- [Vite Alias Configuration](https://vitejs.dev/config/shared-options.html#resolve-alias)
- [TypeScript Path Mapping](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping)
- [Nx Workspace Configuration](https://nx.dev/concepts/more-concepts/workspace-layouts)

---

**Configuración diseñada para máxima simplicidad y compatibilidad con npm** ✨
