# 🎯 Especificaciones Exactas del Botón Root Block

## ✅ Implementación Actualizada

Se han aplicado las especificaciones exactas de diseño proporcionadas:

---

## 📐 Dimensiones y Espaciado

### **Dimensiones Base**
- **Altura**: `40px` (min-height)
- **Padding**: `8px 16px` (top/bottom left/right)
- **Gap** (ícono-texto): `8px`
- **Border radius**: `50px`
- **Border width**: `1px`

### **Botón Icon Only**
- **Tamaño**: `40×40px` circular
- **Border radius**: `50%` (circular completo)
- **Padding**: `0`

---

## ✏️ Tipografía

### **Estilos de Texto**
```css
font-family: var(--typography-fontFamily); /* Depende de la marca */
font-weight: 700;                          /* Bold */
font-size: 16px;
line-height: 24px;
letter-spacing: 0px;
text-align: center;
vertical-align: middle;
```

### **Text Variant Específico**
Los botones `type-style="text"` incluyen:
```css
text-decoration: underline;
text-decoration-style: solid;
```

---

## 🎨 Colores por Variante

### **PRIMARY**

#### **Fill (Solid)**
- **Fondo**: `var(--color-secondary-base)` ⚠️ *(No primary-base)*
- **Texto**: `var(--color-secondary-base)`
- **Border**: `var(--color-secondary-base)`

**Estados:**
- **Hover**: Fondo `secondary-D100`
- **Pressed**: Fondo `secondary-D200`
- **Focus**: Outline `secondary-base` (2px, offset 2px)
- **Disabled**: Fondo `grayscale-L200`, texto `grayscale-Base`

#### **Stroke (Outline)**
- **Fondo**: Transparente
- **Texto**: `var(--color-secondary-base)`
- **Border**: `var(--color-secondary-base)` (1px solid)

**Estados:**
- **Hover**: Fondo `secondary-L400`, border `secondary-D100`
- **Pressed**: Fondo `secondary-L300`, border `secondary-D200`
- **Focus**: Outline `secondary-base`
- **Disabled**: Border `grayscale-L200`, texto `grayscale-Base`

#### **Text (Ghost)**
- **Fondo**: Transparente
- **Texto**: `var(--color-secondary-base)` + **underline**
- **Border**: Transparente

**Estados:**
- **Hover**: Fondo `secondary-L400`, texto `secondary-D100`
- **Pressed**: Fondo `secondary-L300`, texto `secondary-D200`
- **Focus**: Outline `secondary-base`
- **Disabled**: Texto `grayscale-Base`

---

### **SECONDARY**

#### **Fill (Solid)**
- **Fondo**: `var(--color-primary-base)` ⚠️ *(Invierte: usa primary)*
- **Texto**: `var(--color-secondary-base)`
- **Border**: `var(--color-primary-base)`

**Estados:**
- **Hover**: Fondo `primary-D100`, texto `secondary-base`
- **Pressed**: Fondo `primary-D200`, texto `secondary-base`
- **Focus**: Outline `primary-base`
- **Disabled**: Fondo `grayscale-L200`, texto `grayscale-Base`

#### **Stroke (Outline)**
- **Fondo**: Transparente
- **Texto**: `var(--color-secondary-base)`
- **Border**: `var(--color-primary-base)` (1px solid)

**Estados:**
- **Hover**: Fondo `primary-L400`, border `primary-D100`
- **Pressed**: Fondo `primary-L300`, border `primary-D200`
- **Focus**: Outline `primary-base`
- **Disabled**: Border `grayscale-L200`, texto `grayscale-Base`

#### **Text (Ghost)**
- **Fondo**: Transparente
- **Texto**: `var(--color-secondary-base)` + **underline**
- **Border**: Transparente

**Estados:**
- **Hover**: Fondo `primary-L400`, texto `secondary-base`
- **Pressed**: Fondo `primary-L300`, texto `secondary-base`
- **Focus**: Outline `primary-base`
- **Disabled**: Texto `grayscale-Base`

---

### **TERTIARY**

#### **Fill (Solid)**
- **Fondo**: `var(--color-tertiary-base)`
- **Texto**: `#ffffff` (blanco)
- **Border**: `var(--color-tertiary-base)`

**Estados:**
- **Hover**: Fondo `tertiary-D100`
- **Pressed**: Fondo `tertiary-D200`
- **Focus**: Outline `tertiary-base`
- **Disabled**: Fondo `grayscale-L200`, texto `grayscale-Base`

#### **Stroke (Outline)**
- **Fondo**: Transparente
- **Texto**: `var(--color-tertiary-base)`
- **Border**: `var(--color-tertiary-base)` (1px solid)

**Estados:**
- **Hover**: Fondo `tertiary-L400`, border `tertiary-D100`, texto `tertiary-D100`
- **Pressed**: Fondo `tertiary-L300`, border `tertiary-D200`, texto `tertiary-D200`
- **Focus**: Outline `tertiary-base`
- **Disabled**: Border `grayscale-L200`, texto `grayscale-Base`

#### **Text (Ghost)**
- **Fondo**: Transparente
- **Texto**: `var(--color-tertiary-base)` + **underline**
- **Border**: Transparente

**Estados:**
- **Hover**: Fondo `tertiary-L400`, texto `tertiary-D100`
- **Pressed**: Fondo `tertiary-L300`, texto `tertiary-D200`
- **Focus**: Outline `tertiary-base`
- **Disabled**: Texto `grayscale-Base`

---

### **ERROR**

#### **Fill (Solid)**
- **Fondo**: `var(--color-error-base)`
- **Texto**: `#ffffff` (blanco)
- **Border**: `var(--color-error-base)`

**Estados:**
- **Hover**: Fondo `error-D100`
- **Pressed**: Fondo `error-D200`
- **Focus**: Outline `error-base`
- **Disabled**: Fondo `error-L300`, texto `error-L100`

#### **Stroke (Outline)**
- **Fondo**: Transparente
- **Texto**: `var(--color-error-base)`
- **Border**: `var(--color-error-base)` (1px solid)

**Estados:**
- **Hover**: Fondo `error-L400`, border `error-D100`, texto `error-D100`
- **Pressed**: Fondo `error-L300`, border `error-D200`, texto `error-D200`
- **Focus**: Outline `error-base`
- **Disabled**: Border `error-L300`, texto `error-L100`

#### **Text (Ghost)**
- **Fondo**: Transparente
- **Texto**: `var(--color-error-base)` + **underline**
- **Border**: Transparente

**Estados:**
- **Hover**: Fondo `error-L400`, texto `error-D100`
- **Pressed**: Fondo `error-L300`, texto `error-D200`
- **Focus**: Outline `error-base`
- **Disabled**: Texto `error-L100`

---

## 🔄 Estado Loading (Spinner)

### **Spinner Base**
- **Tamaño**: `16×16px`
- **Border**: `2px solid`
- **Animación**: Rotación continua (0.6s)
- **Color**: Depende del tipo

### **Colores del Spinner por Tipo**

#### **Fill Buttons**
- **Primary**: `secondary-base`
- **Secondary**: `secondary-base`
- **Tertiary**: `#ffffff` (blanco)
- **Error**: `#ffffff` (blanco)

#### **Stroke/Text Buttons**
- **Primary**: `secondary-base`
- **Secondary**: `secondary-base`
- **Tertiary**: `tertiary-base`
- **Error**: `error-base`

---

## 🎨 Paleta de Colores Usada

### **Variables CSS Requeridas**

```css
/* Primary */
--color-primary-base
--color-primary-D100
--color-primary-D200
--color-primary-L300
--color-primary-L400

/* Secondary */
--color-secondary-base
--color-secondary-D100
--color-secondary-D200
--color-secondary-L300
--color-secondary-L400

/* Tertiary */
--color-tertiary-base
--color-tertiary-D100
--color-tertiary-D200
--color-tertiary-L300
--color-tertiary-L400

/* Error */
--color-error-base
--color-error-D100
--color-error-D200
--color-error-L100
--color-error-L300
--color-error-L400

/* Grayscale (Disabled) */
--color-grayscale-Base
--color-grayscale-L200

/* Typography */
--typography-fontFamily
```

---

## ⚠️ Notas Importantes

### **1. Inversión Primary/Secondary**
Los botones **PRIMARY** usan `secondary-base` como color principal (fondo en Fill, texto/border en todos).
Los botones **SECONDARY** usan `primary-base` como color principal (fondo en Fill, border en Stroke).

Esto es contra-intuitivo pero es exactamente como está especificado en el diseño.

### **2. Text Decoration**
Todos los botones con `type-style="text"` tienen `text-decoration: underline`.

### **3. Border Width**
El borde es siempre `1px` (no 2px).

### **4. Border Radius**
- Botones normales: `50px` (fully rounded)
- Botones icon-only: `50%` (circular)

### **5. Font Weight**
Todos los botones usan `font-weight: 700` (bold).

---

## 📝 Ejemplos de Uso

### **Primary Fill**
```html
<rb-button variant="primary" type-style="fill">
  Button
</rb-button>
<!-- Fondo: secondary-base, Texto: secondary-base -->
```

### **Secondary Stroke**
```html
<rb-button variant="secondary" type-style="stroke">
  Button
</rb-button>
<!-- Border: primary-base, Texto: secondary-base -->
```

### **Tertiary Text**
```html
<rb-button variant="tertiary" type-style="text">
  Button
</rb-button>
<!-- Texto: tertiary-base + underline -->
```

### **Error con Ícono**
```html
<rb-button variant="error" type-style="fill">
  <svg slot="icon-left" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
  </svg>
  Delete
</rb-button>
<!-- Fondo: error-base, Texto: blanco -->
```

### **Icon Only**
```html
<rb-button variant="primary" type-style="stroke" icon-only>
  <svg slot="icon-left" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/>
  </svg>
</rb-button>
<!-- Circular 40×40px, border: secondary-base -->
```

---

## ✅ Validación

Todos los cambios están implementados y se pueden verificar en:
- **Demo**: `http://localhost:4201/`
- **Componente**: `libs/ui/src/atoms/RbButton.ts`

La matriz muestra los **336 casos** con las especificaciones exactas aplicadas.

---

**Fecha de actualización**: 1 de Octubre, 2025  
**Versión**: 1.0.1  
**Status**: ✅ Especificaciones exactas aplicadas

