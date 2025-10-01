Estoy trabajando en el Design System "Root Block" con Web Components usando Nx + Lit.

CONTEXTO ACTUAL:
- ✅ Monorepo Nx configurado en: /Users/moofarrif/Documents/sb/front/dev/web-components/nx-wc/root-block-wc
- ✅ Sistema de tokens multi-marca (6 marcas: White Label, Jelpit, Davivienda, Cien Cuadras, Doctor Aki, Seguros Bolívar)
- ✅ Componente <rb-button> implementado con Atomic Design
- ✅ Demo con matriz de 336 casos (4 variantes × 3 tipos × 7 estados × 4 configs de íconos)

ÚLTIMO TRABAJO COMPLETADO:
- ✅ PRIMARY FILL mapeado con todos sus estados según especificaciones de White Label:
  * Default: fondo #48555B (primary-base), texto #AFC4CC (secondary-base)
  * Hover: fondo #3B4448 (primary-D100)
  * Pressed: fondo #32383B (primary-D200) + shadow XS inset
  * Focus: border 2px solid #7F888C (primary-L100)
  * Loading: spinner color secondary-base
  * Disabled: fondo #EDEEEF (primary-L400), texto #7F888C (primary-L100)
  * Disabled Hover: fondo #C8CCCE (primary-L300)

- ✅ Headers jerárquicos mejorados en el demo:
  * Nivel 1: FILL | STROKE | TEXT
  * Nivel 2: Icon Left | Icon Right | No Icon | Icon Only
  * Nivel 3: Primary, Secondary, Tertiary, Error

- ✅ Ícono actualizado a plus (+) dentro de círculo de 18px

PENDIENTE:
1. Mapear estados de PRIMARY STROKE (7 estados) según colores de White Label
2. Mapear estados de PRIMARY TEXT (7 estados) según colores de White Label
3. Mapear SECONDARY (Fill, Stroke, Text) con todos sus estados
4. Mapear TERTIARY (Fill, Stroke, Text) con todos sus estados
5. Mapear ERROR (Fill, Stroke, Text) con todos sus estados

METODOLOGÍA DE TRABAJO:
- Me das los colores HEX de White Label para cada estado
- Yo los mapeo a variables semánticas del sistema de tokens
- Actualizamos el componente RbButton.ts
- Rebuildeamos y testeamos en el demo

ARCHIVOS CLAVE:
- Componente: libs/ui/src/atoms/RbButton.ts
- Tokens White Label: libs/tokens/src/primitives/brands/white-label.json
- Demo: apps/demo/src/main.ts
- Demo HTML: apps/demo/index.html

¿Continuamos con PRIMARY STROKE? Dame los colores para los 7 estados.