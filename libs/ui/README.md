# @root-block/ui

Librería de Web Components construida con **Lit 3** siguiendo **Atomic Design**.

## 📦 Instalación

```bash
npm install @root-block/ui
```

## 🚀 Uso

### Importación Simple (como Bootstrap)

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Mi App</title>
</head>
<body>
  <!-- Usar componentes -->
  <rb-button variant="primary" size="large">
    Mi Botón
  </rb-button>

  <!-- Importar el bundle único -->
  <script type="module">
    import '@root-block/ui';
    // ¡Listo! Todos los componentes están registrados
  </script>
</body>
</html>
```

### Importación Directa del Bundle

```html
<!-- Un solo archivo, como Bootstrap -->
<script type="module" src="node_modules/@root-block/ui/dist/index.js"></script>
```

### Con CDN (cuando esté publicado)

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@root-block/ui/dist/index.js"></script>
```

## 🧩 Componentes Disponibles

### `<rb-button>`

Botón interactivo con múltiples variantes, tamaños y estados.

```html
<!-- Básico -->
<rb-button variant="primary" size="medium">Click me</rb-button>

<!-- Con íconos (slots) -->
<rb-button variant="secondary">
  <svg slot="icon-left" width="20" height="20">...</svg>
  Descargar
</rb-button>

<!-- Estados -->
<rb-button disabled>Disabled</rb-button>
<rb-button loading>Loading...</rb-button>
<rb-button full-width>Full Width</rb-button>
```

#### Propiedades

| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'danger'` | `'primary'` | Variante visual |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Tamaño del botón |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | Tipo HTML |
| `disabled` | `boolean` | `false` | Si está deshabilitado |
| `loading` | `boolean` | `false` | Estado de carga |
| `full-width` | `boolean` | `false` | Ancho completo |
| `aria-label` | `string` | - | Label de accesibilidad |

#### Eventos

| Evento | Detalle | Descripción |
|--------|---------|-------------|
| `rb-button-click` | `{ originalEvent: MouseEvent }` | Se dispara al hacer click |

```javascript
document.addEventListener('rb-button-click', (e) => {
  console.log('Button clicked:', e.detail);
});
```

#### Slots

| Slot | Descripción |
|------|-------------|
| (default) | Contenido principal del botón |
| `icon-left` | Ícono a la izquierda |
| `icon-right` | Ícono a la derecha |

#### CSS Custom Properties

Puedes personalizar el botón con CSS variables:

```css
rb-button {
  --rb-button-bg: #custom-color;
  --rb-button-color: #text-color;
  --rb-button-border: #border-color;
  --rb-button-padding: 1rem 2rem;
  --rb-button-font-size: 1rem;
  --rb-button-border-radius: 8px;
  --rb-button-transition: all 0.3s ease;
}
```

## 🎨 Integración con Tokens

Para usar con el sistema de tokens multi-marca:

```html
<!DOCTYPE html>
<html lang="es" data-brand="jelpit" data-theme="light">
<head>
  <!-- 1. Cargar tokens de la marca -->
  <link rel="stylesheet" href="@root-block/tokens/jelpit-light.css">
  
  <!-- 2. Cargar componentes (un solo archivo) -->
  <script type="module" src="@root-block/ui/dist/index.js"></script>
</head>
<body>
  <rb-button variant="primary">Mi Botón</rb-button>
</body>
</html>
```

## 📊 Tamaño del Bundle

```
dist/index.js      7.5 KB (sin minificar)
dist/index.js      2.35 KB (gzipped)
```

**Un solo archivo, como Bootstrap** ✨

**Nota:** Lit es una dependencia externa (`peer dependency`), debes incluirla por separado:

```html
<script type="module">
  import 'lit';
  import '@root-block/ui';
</script>
```

## 🏗️ Estructura del Bundle

```
dist/
├── index.js           # ⭐ Bundle principal (UN SOLO ARCHIVO)
├── index.js.map       # Source map
└── ui/                # TypeScript definitions
    ├── index.d.ts
    ├── atoms/
    │   ├── RbButton.d.ts
    │   └── index.d.ts
    └── base/
        └── BaseAtom.d.ts
```

**Solo necesitas importar `dist/index.js` - como Bootstrap** 🚀

## 🔧 Desarrollo

```bash
# Build
npm run build

# Watch mode
npm run dev

# Tests
npm run test

# Lint
npm run lint
```

## 📝 TypeScript

El paquete incluye tipos completos de TypeScript:

```typescript
import { RbButton, RbButtonClickEvent } from '@root-block/ui';

// Tipos disponibles
const button = document.querySelector('rb-button') as RbButton;
button.variant = 'primary';
button.size = 'large';

// Event typing
document.addEventListener('rb-button-click', (e: CustomEvent<RbButtonClickEvent>) => {
  console.log(e.detail.originalEvent);
});
```

## 🌐 Soporte de Navegadores

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 📄 Licencia

MIT

---

**Parte del Root Block Design System**
