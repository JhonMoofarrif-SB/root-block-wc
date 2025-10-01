# 🎨 Variables CSS Estándar - Root Block Design System

## Concepto Clave

**Todas las marcas usan las mismas variables CSS, solo cambian los valores.**

### ❌ Problema Anterior
Cada marca tenía sus propias variables con prefijo:
```css
/* Jelpit */
--jelpit-color-primary-base: #2e0063;

/* Davivienda */
--davivienda-color-primary-base: #e1111c;
```

**Problema:** Los componentes no podían usar variables estándar, todo era específico por marca.

### ✅ Solución Actual
Variables estándar sin prefijo de marca:
```css
/* Jelpit */
[data-brand="jelpit"][data-theme="light"] {
  --color-primary-base: #2e0063;  /* Morado */
}

/* Davivienda */
[data-brand="davivienda"][data-theme="light"] {
  --color-primary-base: #e1111c;  /* Rojo */
}
```

**Beneficio:** Componentes usan `var(--color-primary-base)` y automáticamente toman el color de la marca activa.

---

## 🎯 Cómo Funciona

### 1. HTML con Atributos Data
```html
<html data-brand="jelpit" data-theme="light">
```

### 2. CSS con Selectores Específicos
```css
/* jelpit-light.css */
[data-brand="jelpit"][data-theme="light"] {
  --color-primary-base: #2e0063;
  --color-secondary-base: #82e778;
  /* ... más variables */
}

/* davivienda-light.css */
[data-brand="davivienda"][data-theme="light"] {
  --color-primary-base: #e1111c;
  --color-secondary-base: #4b5c6f;
  /* ... mismas variables, diferentes valores */
}
```

### 3. Componentes Usan Variables Estándar
```css
.button--primary {
  background-color: var(--color-primary-base);
  color: #ffffff;
}
```

### 4. Cambio Dinámico
```javascript
// Cambiar a Davivienda
document.documentElement.setAttribute('data-brand', 'davivienda');

// ¡Automáticamente se aplican los colores de Davivienda!
```

---

## 📋 Variables Estándar Disponibles

### Colores Primarios
```css
--color-primary-D400    /* Darkest */
--color-primary-D300
--color-primary-D200
--color-primary-D100
--color-primary-base    /* Base color */
--color-primary-L100
--color-primary-L200
--color-primary-L300
--color-primary-L400    /* Lightest */
```

### Colores Secundarios
```css
--color-secondary-D400
--color-secondary-D300
--color-secondary-D200
--color-secondary-D100
--color-secondary-base
--color-secondary-L100
--color-secondary-L200
--color-secondary-L300
--color-secondary-L400
```

### Colores Terciarios
```css
--color-tertiary-D400
--color-tertiary-D300
--color-tertiary-D200
--color-tertiary-D100
--color-tertiary-base
--color-tertiary-L100
--color-tertiary-L200
--color-tertiary-L300
--color-tertiary-L400
```

### Grayscale
```css
--color-grayscale-Black
--color-grayscale-D400
--color-grayscale-D300
--color-grayscale-D200
--color-grayscale-D100
--color-grayscale-Base
--color-grayscale-L100
--color-grayscale-L200
--color-grayscale-L300
--color-grayscale-L400
--color-grayscale-White
```

### Feedback Colors
```css
--color-error-base
--color-error-D100, D200, D300, D400
--color-error-L100, L200, L300, L400

--color-warning-base
--color-warning-D100, D200, D300, D400
--color-warning-L100, L200, L300, L400

--color-info-base
--color-info-D100, D200, D300, D400
--color-info-L100, L200, L300, L400

--color-success-base
--color-success-D100, D200, D300, D400
--color-success-L100, L200, L300, L400
```

### Typography
```css
--typography-fontFamily

/* Desktop Headings */
--typography-H1, H2, H3, H4, H5, H6

/* Mobile Headings */
--typography-MobileH1, MobileH2, MobileH3, MobileH4, MobileH5, MobileH6

/* Text */
--typography-Body
--typography-Label
--typography-Caption
--typography-Button
```

### Shadows
```css
--shadow-XS
--shadow-S
--shadow-M
--shadow-L
--shadow-XL
```

### Gradients
```css
--gradient-primary-D400D200
--gradient-primary-D200Base
--gradient-primary-L200L400

--gradient-secondary-D400D200
--gradient-secondary-D200Base
--gradient-secondary-L200L400

--gradient-tertiary-D400D200
--gradient-tertiary-D200Base
--gradient-tertiary-L200L400
```

---

## 💻 Ejemplos de Uso

### En Componentes Lit
```typescript
static override styles = css`
  :host {
    --button-bg: var(--color-primary-base);
    --button-color: #ffffff;
  }

  .button {
    background-color: var(--button-bg);
    color: var(--button-color);
    font-family: var(--typography-fontFamily);
    box-shadow: var(--shadow-M);
  }

  .button:hover {
    background-color: var(--color-primary-D100);
  }
`;
```

### En CSS Regular
```css
.card {
  background: var(--color-grayscale-White);
  border: 1px solid var(--color-grayscale-L200);
  border-radius: 8px;
  box-shadow: var(--shadow-S);
}

.card-title {
  color: var(--color-primary-base);
  font-family: var(--typography-fontFamily);
  font-size: var(--typography-H3);
}

.card:hover {
  border-color: var(--color-primary-base);
  box-shadow: var(--shadow-M);
}
```

### Con Gradientes
```css
.hero {
  background: var(--gradient-primary-D200Base);
}

.badge {
  background: var(--gradient-secondary-L200L400);
}
```

---

## 🔄 Cambio Dinámico de Marca/Tema

### JavaScript
```javascript
function changeBrand(brand, theme) {
  // Cambiar CSS file
  document.getElementById('theme-css').href = `/tokens/${brand}-${theme}.css`;
  
  // Actualizar atributos HTML
  document.documentElement.setAttribute('data-brand', brand);
  document.documentElement.setAttribute('data-theme', theme);
}

// Cambiar a Davivienda Light
changeBrand('davivienda', 'light');

// Cambiar a Jelpit Dark
changeBrand('jelpit', 'dark');
```

### React/Vue
```jsx
function App() {
  const [brand, setBrand] = useState('jelpit');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-brand', brand);
    document.documentElement.setAttribute('data-theme', theme);
  }, [brand, theme]);

  return (
    <>
      <link rel="stylesheet" href={`/tokens/${brand}-${theme}.css`} />
      <MyComponents />
    </>
  );
}
```

---

## ✅ Ventajas del Sistema

### 1. **Código Universal**
```css
/* Este código funciona para TODAS las marcas */
.button {
  background: var(--color-primary-base);
}
```

### 2. **Sin Lógica Condicional**
```typescript
// ❌ ANTES: Lógica condicional
const buttonColor = brand === 'jelpit' 
  ? '#2e0063' 
  : brand === 'davivienda' 
  ? '#e1111c' 
  : '#007acc';

// ✅ AHORA: Variables automáticas
background: var(--color-primary-base);
```

### 3. **Fácil Agregar Marcas**
Solo crea un nuevo archivo JSON con los valores:
```json
{
  "color": {
    "primary": {
      "base": { "$value": "#nueva-marca" }
    }
  }
}
```

### 4. **Mantenimiento Simple**
Cambiar colores de una marca = editar 1 archivo JSON

### 5. **Performance**
CSS nativo = sin JavaScript overhead

---

## 📊 Comparación

| Aspecto | Antes (con prefijo) | Ahora (estándar) |
|---------|---------------------|------------------|
| **Variables** | `--jelpit-color-primary-base` | `--color-primary-base` |
| **Componentes** | Necesitan saber la marca | Marca agnósticos |
| **Cambio de marca** | Difícil, requiere lógica | Automático |
| **Agregar marca** | Actualizar todos los componentes | Solo crear JSON |
| **Mantenimiento** | Complejo | Simple |
| **Performance** | Overhead JS | CSS nativo |

---

## 🎓 Mejores Prácticas

### ✅ Usar Variables Semánticas
```css
/* BUENO */
.button {
  background: var(--color-primary-base);
  color: #ffffff;
}

/* EVITAR */
.button {
  background: #2e0063;  /* Color hardcoded */
}
```

### ✅ Usar Fallbacks
```css
/* Con fallback para desarrollo */
.button {
  background: var(--color-primary-base, #007acc);
}
```

### ✅ Usar Variaciones de Color
```css
.button {
  background: var(--color-primary-base);
}

.button:hover {
  background: var(--color-primary-D100);  /* Más oscuro */
}

.button:active {
  background: var(--color-primary-D200);  /* Aún más oscuro */
}
```

### ❌ NO Hardcodear Colores
```css
/* MAL */
.button {
  background: #2e0063;  /* Específico de Jelpit */
}

/* BIEN */
.button {
  background: var(--color-primary-base);  /* Universal */
}
```

---

## 🔍 Debug

### Ver Variables Activas
```javascript
// En DevTools Console
const root = document.documentElement;
const styles = getComputedStyle(root);

console.log('Primary:', styles.getPropertyValue('--color-primary-base'));
console.log('Secondary:', styles.getPropertyValue('--color-secondary-base'));
```

### Verificar Selector
```javascript
// Ver qué marca/tema está activo
console.log('Brand:', document.documentElement.getAttribute('data-brand'));
console.log('Theme:', document.documentElement.getAttribute('data-theme'));
```

---

**Sistema de variables estándar para máxima flexibilidad y mantenibilidad** ✨
