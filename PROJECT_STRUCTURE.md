# Root Block WC - Design System Empresarial

## 🏗️ Estructura del Monorepo

```
root-block-wc/
├── libs/
│   ├── tokens/                    # Sistema de design tokens
│   │   ├── src/
│   │   │   ├── primitives/        # Nivel 1: Valores puros
│   │   │   ├── semantic/          # Nivel 2: Roles abstractos
│   │   │   ├── components/        # Nivel 3: Tokens de componentes
│   │   │   ├── brands/            # Configuraciones por marca
│   │   │   └── builder.ts         # Script de build
│   │   └── dist/                  # CSS generado por marca/tema
│   │
│   └── ui/                        # Librería de Web Components
│       ├── src/
│       │   ├── atoms/             # Componentes atómicos
│       │   ├── molecules/         # Componentes moleculares
│       │   ├── organisms/         # Componentes organismo
│       │   ├── base/              # Clases base
│       │   └── index.ts           # Punto de entrada
│       └── dist/                  # Bundle optimizado
│
├── apps/
│   ├── storybook/                 # Documentación del DS
│   │   ├── .storybook/
│   │   └── stories/
│   │
│   └── theme-builder/             # Demo interactiva
│       ├── src/
│       └── public/
│
├── tools/                         # Scripts y utilidades
│   └── scripts/
│
└── dist/                          # Output de publicación
    └── packages/
        ├── tokens/
        └── ui/
```

## 📦 Paquetes NPM

- `@root-block/tokens` - Sistema de design tokens
- `@root-block/ui` - Web Components con Lit

## 🎨 Marcas Soportadas

1. **White Label** (default/fallback)
2. **Jelpit** - #2e0063 (morado) + #82e778 (verde)
3. **Davivienda** - #e1111c (rojo)
4. **Cien Cuadras** - Verde azulado
5. **Doctor Aki** - #42671a (verde natural)
6. **Seguros Bolivar** - Azul corporativo

## 🌓 Temas

- Light (default)
- Dark

## 🧩 Componentes

Prefijo: `rb-` (Root Block)

### Átomos
- `<rb-button>` ✅
- `<rb-input>`
- `<rb-icon>`
- `<rb-badge>`
- `<rb-avatar>`

### Moléculas
- `<rb-card>`
- `<rb-search-box>`
- `<rb-form-field>`

### Organismos
- `<rb-header>`
- `<rb-navigation>`
- `<rb-product-catalog>`

## 🚀 Flujo de Desarrollo

1. **Definir tokens** en `libs/tokens`
2. **Crear componente** en `libs/ui`
3. **Documentar** en Storybook
4. **Probar** con Vitest y Playwright
5. **Publicar** a npm

## 📊 Pipeline de Build

```
tokens → CSS por marca/tema
ui → Bundle JS único
storybook → Documentación estática
theme-builder → Demo HTML puro
```

## 🎯 Próximos Pasos

1. ✅ Crear estructura de monorepo
2. ⏳ Implementar sistema de tokens
3. ⏳ Crear componentes base
4. ⏳ Configurar Storybook
5. ⏳ Configurar Theme Builder
6. ⏳ Setup de testing
7. ⏳ Configurar publicación npm
8. ⏳ Documentación completa

