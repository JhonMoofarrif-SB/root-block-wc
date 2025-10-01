# Root Block Design System 🎨

Design System empresarial multi-marca construido con **Nx**, **Lit 3**, **TypeScript 5** y **Style Dictionary**.

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
npm install

# Build tokens (genera CSS para 6 marcas × 2 temas = 12 archivos)
npm run build:tokens

# Build UI components
npm run build:ui

# Ejecutar demo app (Nx + Vite)
npm run demo
# Abre automáticamente en http://localhost:4200

# Build demo para producción
npm run demo:build
```

## 📦 Estructura del Proyecto

```
root-block-wc/
├── libs/
│   ├── tokens/              # Sistema de Design Tokens
│   │   ├── src/
│   │   │   ├── primitives/brands/  # 6 marcas en JSON W3C
│   │   │   ├── semantic/           # Light/Dark themes
│   │   │   ├── components/         # Tokens de componentes
│   │   │   └── builder.ts          # Build con Style Dictionary
│   │   └── dist/            # 12 CSS generados
│   │
│   └── ui/                  # Librería de Web Components
│       ├── src/
│       │   ├── atoms/       # rb-button, rb-input, etc.
│       │   ├── molecules/   # Componentes compuestos
│       │   ├── organisms/   # Componentes complejos
│       │   └── base/        # Clases base
│       └── dist/            # Bundle JS optimizado
│
├── apps/
│   ├── demo/                # App demo (Nx + Vite + TypeScript) ✅
│   │   ├── src/
│   │   │   ├── main.ts      # App principal
│   │   │   └── styles/      # CSS de la demo
│   │   ├── index.html
│   │   └── vite.config.ts
│   ├── storybook/           # Documentación (TODO)
│   └── theme-builder/       # Theme builder avanzado (TODO)
```

## 🎨 Marcas Disponibles

| Marca | Colores Principal | Font Family |
|-------|-------------------|-------------|
| **Jelpit** | #2e0063 (morado) + #82e778 (verde) | Bolivar Condensed |
| **Davivienda** | #e1111c (rojo) | Davivienda, Roboto |
| **Cien Cuadras** | #006098 (azul) + #ffa533 (naranja) | Ciencuadras, Montserrat |
| **Doctor Aki** | #42671a (verde natural) | Dosis, Roboto |
| **Seguros Bolívar** | #009056 (verde) + #ffe16f (amarillo) | Bolivar, Roboto |
| **White Label** | Neutro (grises) | Roboto |

Cada marca tiene **2 temas**: Light y Dark

## 🧩 Componentes Disponibles

### ✅ Átomos

#### `<rb-button>`

Botón interactivo con Shadow DOM, slots para íconos y WCAG AA compliant.

```html
<!-- Básico -->
<rb-button variant="primary" size="medium">Click me</rb-button>

<!-- Con íconos (slots) -->
<rb-button variant="secondary">
  <svg slot="icon-left">...</svg>
  Descargar
  <svg slot="icon-right">...</svg>
</rb-button>

<!-- Estados -->
<rb-button disabled>Disabled</rb-button>
<rb-button loading>Loading...</rb-button>
<rb-button full-width>Full Width</rb-button>
```

**Propiedades:**
- `variant`: `primary` | `secondary` | `outline` | `ghost` | `danger`
- `size`: `small` | `medium` | `large`
- `disabled`: boolean
- `loading`: boolean
- `full-width`: boolean
- `type`: `button` | `submit` | `reset`
- `aria-label`: string (accesibilidad)

**Eventos:**
- `rb-button-click`: Se dispara al hacer click

**Slots:**
- Default: Contenido principal
- `icon-left`: Ícono izquierdo
- `icon-right`: Ícono derecho

## 💻 Uso del Sistema

### 1. Instalación

```bash
npm install @root-block/tokens @root-block/ui
```

### 2. HTML básico

```html
<!DOCTYPE html>
<html lang="es" data-brand="jelpit" data-theme="light">
<head>
  <!-- CSS de la marca -->
  <link rel="stylesheet" href="@root-block/tokens/jelpit-light.css">
  
  <!-- JS de componentes (UN SOLO ARCHIVO, como Bootstrap) -->
  <script type="module" src="@root-block/ui/dist/index.js"></script>
</head>
<body>
  <rb-button variant="primary" size="large">
    Mi Botón
  </rb-button>
</body>
</html>
```

### 3. Cambio dinámico de marca/tema

```javascript
const html = document.documentElement;
const themeLink = document.querySelector('link[rel="stylesheet"]');

function changeBrand(brand, theme) {
  // Actualizar CSS
  themeLink.href = `@root-block/tokens/${brand}-${theme}.css`;
  
  // Actualizar atributos
  html.setAttribute('data-brand', brand);
  html.setAttribute('data-theme', theme);
}

changeBrand('davivienda', 'dark');
```

## 🎯 CSS Custom Properties

Todos los tokens están disponibles como CSS variables:

```css
/* Colores por marca */
--{brand}-color-primary-base
--{brand}-color-primary-D100, D200, D300, D400
--{brand}-color-primary-L100, L200, L300, L400

/* Semánticos (adaptan según tema) */
--semantic-{theme}-background-primary
--semantic-{theme}-text-primary
--semantic-{theme}-border-default

/* Tipografía */
--{brand}-typography-fontFamily
--{brand}-typography-fontSize-h1 a h6, body, label, caption

/* Shadows */
--{brand}-shadow-xs, s, m, l, xl

/* Gradientes */
--{brand}-gradient-primary-dark, base, light
```

## 🛠️ Desarrollo

### Agregar un nuevo componente

1. Crear el archivo en `libs/ui/src/atoms/MiComponente.ts`
2. Extender de `BaseAtom`
3. Usar decoradores `@customElement` y `@property`
4. Exportar en `libs/ui/src/index.ts`
5. Build: `npm run build:ui`

### Agregar una nueva marca

1. Crear `libs/tokens/src/primitives/brands/mi-marca.json`
2. Definir colores, typography, shadows, etc.
3. Agregar marca al array en `builder.ts`
4. Build: `npm run build:tokens`

## 📊 Tamaños de Bundles

- **Tokens CSS**: ~3.7-5.2 KB por archivo (12 archivos total)
- **UI Bundle JS**: ~7.5 KB (sin minificar) / ~2.35 KB (gzipped)
- **Estructura**: ⭐ **UN SOLO ARCHIVO** `dist/index.js` (como Bootstrap)
- **Total para una marca**: ~6-8 KB (CSS + JS gzipped)

## 🧪 Testing

```bash
# Unit tests
npm run test

# Visual testing (TODO: Playwright + Chromatic)
npm run test:visual
```

## 📖 Documentación Adicional

- **[ALIAS_CONFIG.md](ALIAS_CONFIG.md)** - Configuración detallada de alias y paths
- **[SUMMARY.md](SUMMARY.md)** - Resumen completo del proyecto
- **[apps/demo/README.md](apps/demo/README.md)** - Documentación de la demo app
- **[libs/ui/README.md](libs/ui/README.md)** - Documentación de Web Components
- **[libs/tokens/README.md](libs/tokens/README.md)** - Documentación de tokens (TODO)

## 📝 Próximos Pasos

- [ ] Storybook con addons de accesibilidad
- [ ] Theme Builder app
- [ ] Más componentes (input, select, card, modal)
- [ ] Testing visual automático
- [ ] Publicación a npm
- [ ] CI/CD con GitHub Actions

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit (`git commit -am 'Add: nueva funcionalidad'`)
4. Push (`git push origin feature/nueva-funcionalidad`)
5. Crea un Pull Request

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE) para más detalles.

---

**Hecho con ❤️ para Root Block**