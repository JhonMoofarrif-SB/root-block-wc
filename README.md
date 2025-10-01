# 🎨 Root Block Design System

Sistema de diseño empresarial con Web Components multi-marca construido con Nx, Lit y TypeScript.

## 🚀 Quick Start

### **Desarrollo**
```bash
npm install
npm run dev
```
Abre [http://localhost:4200](http://localhost:4200) para ver el demo.

### **Producción**
```bash
npm run build:demo
```
Output en `dist/apps/demo/` listo para desplegar.

---

## 📦 Estructura del Proyecto

```
root-block-wc/
├── libs/
│   ├── tokens/          # Design Tokens (CSS Variables)
│   │   ├── src/
│   │   │   ├── primitives/brands/  # 6 marcas
│   │   │   ├── semantic/           # Light/Dark
│   │   │   └── builder.ts          # Style Dictionary
│   │   └── dist/                   # 12 CSS files generados
│   │
│   └── ui/              # Web Components (Lit)
│       ├── src/
│       │   ├── atoms/              # <rb-button>
│       │   └── base/               # BaseAtom
│       └── dist/                   # index.js (19KB, 3KB gzip)
│
└── apps/
    └── demo/            # Demo Interactivo
        ├── src/
        │   └── main.ts             # Generador de matriz
        ├── public/
        │   ├── tokens/             # CSS copiados aquí
        │   └── js/                 # rb-ui.js copiado aquí
        └── index.html
```

---

## 🎯 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Desarrollo completo (build + serve) |
| `npm run build` | Build para producción |
| `npm run test` | Ejecutar tests |
| `npm run lint` | Ejecutar linter |

**Detalle completo en [SCRIPTS.md](./SCRIPTS.md)**

---

## 🎨 Sistema de Tokens

### **6 Marcas Soportadas:**
- 🏷️ **White Label** (default)
- 🟣 **Jelpit** - Morado + Verde
- 🔴 **Davivienda** - Rojo + Azul oscuro
- 🔵 **Cien Cuadras** - Azul + Naranja
- 🟢 **Doctor Aki** - Verde natural
- 🟡 **Seguros Bolívar** - Verde + Amarillo

### **2 Temas por Marca:**
- ☀️ Light
- 🌙 Dark

### **Output:**
12 archivos CSS (6 marcas × 2 temas):
```
dist/tokens/
├── white-label-light.css
├── white-label-dark.css
├── jelpit-light.css
├── jelpit-dark.css
└── ...
```

---

## 🧩 Web Components

### **Componente: `<rb-button>`**

#### **4 Variantes:**
- `primary` - Acción principal
- `secondary` - Acción secundaria
- `tertiary` - Acción terciaria
- `error` - Acción destructiva

#### **3 Tipos de Estilo:**
- `fill` - Botón sólido (default)
- `stroke` - Botón outline
- `text` - Botón ghost con underline

#### **7 Estados:**
- Default
- Hover
- Pressed
- Focus
- Loading
- Disabled
- Disabled Hover

#### **Ejemplos de Uso:**

```html
<!-- Primary Fill -->
<rb-button variant="primary" type-style="fill">
  Button
</rb-button>

<!-- Secondary Stroke con ícono -->
<rb-button variant="secondary" type-style="stroke">
  <svg slot="icon-left">...</svg>
  Button
</rb-button>

<!-- Tertiary Text -->
<rb-button variant="tertiary" type-style="text">
  Button
</rb-button>

<!-- Icon Only (circular) -->
<rb-button variant="error" type-style="fill" icon-only>
  <svg slot="icon-left">...</svg>
</rb-button>

<!-- Loading State -->
<rb-button variant="primary" loading>
  Processing...
</rb-button>

<!-- Disabled -->
<rb-button variant="secondary" disabled>
  Cannot Click
</rb-button>
```

---

## 🌐 Demo Interactivo

El demo muestra **336 casos** de botones:
- 4 variantes × 3 tipos × 7 estados × 4 configuraciones de íconos

**Características:**
- ✅ Selector de 6 marcas
- ✅ Toggle Light/Dark
- ✅ Headers jerárquicos (FILL | STROKE | TEXT)
- ✅ Matriz visual completa
- ✅ Iconos de plus en círculo (18px)
- ✅ Cambio dinámico de temas

---

## 🚀 Deployment

### **Vercel (Recomendado)**

#### **Opción 1: CLI**
```bash
npm install -g vercel
vercel login
vercel --prod
```

#### **Opción 2: GitHub**
1. Push a GitHub
2. Importa en [vercel.com](https://vercel.com)
3. Deploy automático ✨

**Configuración en `vercel.json`:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist/apps/demo"
}
```

**Más detalles en [DEPLOYMENT.md](./DEPLOYMENT.md)**

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **Nx** | 21.6+ | Monorepo toolkit |
| **Lit** | 3.1+ | Web Components |
| **TypeScript** | 5.4+ | Type safety |
| **Vite** | 5.4+ | Build tool |
| **Style Dictionary** | 4.0+ | Design Tokens |
| **Vitest** | 1.5+ | Testing |

---

## 📐 Especificaciones de Diseño

### **Dimensiones del Botón:**
- **Altura**: 40px
- **Padding**: 8px 16px
- **Gap** (ícono-texto): 8px
- **Border**: 1px solid
- **Border radius**: 50px (fully rounded)

### **Tipografía:**
- **Font family**: Variable por marca
- **Font weight**: 700 (bold)
- **Font size**: 16px
- **Line height**: 24px

### **Iconos:**
- **Tamaño normal**: 20×20px
- **Icon only**: 40×40px (circular)
- **Plus en círculo**: 18×18px (demo)

---

## 🧪 Testing

```bash
# Unit tests
npm run test

# Linting
npm run lint
```

---

## 📚 Documentación Adicional

- [SCRIPTS.md](./SCRIPTS.md) - Guía completa de scripts
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Guía de deployment a Vercel
- [libs/tokens/README.md](./libs/tokens/README.md) - Sistema de tokens
- [libs/ui/README.md](./libs/ui/README.md) - Web Components

---

## 🎯 Roadmap

### **Completado ✅**
- [x] Sistema de tokens multi-marca (6 marcas × 2 temas)
- [x] Componente `<rb-button>` completo (336 casos)
- [x] Demo interactivo con matriz visual
- [x] Build optimizado para producción
- [x] Deployment a Vercel configurado

### **Pendiente 🚧**
- [ ] PRIMARY STROKE estados completos
- [ ] PRIMARY TEXT estados completos
- [ ] SECONDARY variante completa
- [ ] TERTIARY variante completa
- [ ] ERROR variante completa
- [ ] Más componentes (input, card, modal, etc.)
- [ ] Storybook para documentación
- [ ] Testing visual con Playwright
- [ ] CI/CD con GitHub Actions

---

## 🤝 Contribuir

Este es un proyecto empresarial interno. Para continuar el desarrollo:

1. **Clonar el proyecto:**
   ```bash
   git clone <repo-url>
   cd root-block-wc
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Iniciar desarrollo:**
   ```bash
   npm run dev
   ```

4. **Hacer cambios** y seguir la guía en [SCRIPTS.md](./SCRIPTS.md)

---

## 📝 Prompt para Continuar

Para retomar el desarrollo donde se quedó:

```
Continúo con Root Block Design System (Nx + Lit).

Ya completamos PRIMARY FILL con todos sus estados mapeados a tokens semánticos.

Pendiente: PRIMARY STROKE, PRIMARY TEXT, SECONDARY, TERTIARY, ERROR.

Dame los colores de White Label para PRIMARY STROKE (7 estados: default, hover, pressed, focus, loading, disabled, disabled-hover) y los mapeo a variables semánticas.

Archivos clave: libs/ui/src/atoms/RbButton.ts
```

---

## 📄 Licencia

Proyecto privado - Todos los derechos reservados.

---

**Versión:** 1.0.0  
**Última actualización:** 1 de Octubre, 2025  
**Autor:** Root Block Design System Team
