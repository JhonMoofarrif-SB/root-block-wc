/**
 * Root Block Design System - Demo App
 * Generador de matriz completa de botones
 *
 * Los Web Components se cargan desde <script> en index.html
 */

// Tipos
type Brand =
  | "jelpit"
  | "davivienda"
  | "cien-cuadras"
  | "doctor-aki"
  | "seguros-bolivar"
  | "white-label";
type Theme = "light" | "dark";
type Variant = "primary" | "secondary" | "tertiary" | "error";
type TypeStyle = "fill" | "stroke" | "text";
type State =
  | "default"
  | "hover"
  | "pressed"
  | "focus"
  | "loading"
  | "disabled"
  | "disabled-hover";

// Configuración de la matriz
const VARIANTS: Variant[] = ["primary", "secondary", "tertiary", "error"];
const STATES: State[] = [
  "default",
  "hover",
  "pressed",
  "focus",
  "loading",
  "disabled",
  "disabled-hover",
];

// Columnas: 4 tipos por typeStyle = 12 columnas
// 1. Fill Icon Left
// 2. Fill Icon Right
// 3. Fill No Icon
// 4. Fill Icon Only
// 5. Stroke Icon Left
// 6. Stroke Icon Right
// 7. Stroke No Icon
// 8. Stroke Icon Only
// 9. Text Icon Left
// 10. Text Icon Right
// 11. Text No Icon
// 12. Text Icon Only

interface ColumnConfig {
  typeStyle: TypeStyle;
  iconLeft: boolean;
  iconRight: boolean;
  iconOnly: boolean;
  label: string;
}

const COLUMNS: ColumnConfig[] = [
  // Fill
  {
    typeStyle: "fill",
    iconLeft: true,
    iconRight: false,
    iconOnly: false,
    label: "Fill<br/>Icon Left",
  },
  {
    typeStyle: "fill",
    iconLeft: false,
    iconRight: true,
    iconOnly: false,
    label: "Fill<br/>Icon Right",
  },
  {
    typeStyle: "fill",
    iconLeft: false,
    iconRight: false,
    iconOnly: false,
    label: "Fill<br/>No Icon",
  },
  {
    typeStyle: "fill",
    iconLeft: true,
    iconRight: false,
    iconOnly: true,
    label: "Fill<br/>Icon Only",
  },
  // Stroke
  {
    typeStyle: "stroke",
    iconLeft: true,
    iconRight: false,
    iconOnly: false,
    label: "Stroke<br/>Icon Left",
  },
  {
    typeStyle: "stroke",
    iconLeft: false,
    iconRight: true,
    iconOnly: false,
    label: "Stroke<br/>Icon Right",
  },
  {
    typeStyle: "stroke",
    iconLeft: false,
    iconRight: false,
    iconOnly: false,
    label: "Stroke<br/>No Icon",
  },
  {
    typeStyle: "stroke",
    iconLeft: true,
    iconRight: false,
    iconOnly: true,
    label: "Stroke<br/>Icon Only",
  },
  // Text
  {
    typeStyle: "text",
    iconLeft: true,
    iconRight: false,
    iconOnly: false,
    label: "Text<br/>Icon Left",
  },
  {
    typeStyle: "text",
    iconLeft: false,
    iconRight: true,
    iconOnly: false,
    label: "Text<br/>Icon Right",
  },
  {
    typeStyle: "text",
    iconLeft: false,
    iconRight: false,
    iconOnly: false,
    label: "Text<br/>No Icon",
  },
  {
    typeStyle: "text",
    iconLeft: true,
    iconRight: false,
    iconOnly: true,
    label: "Text<br/>Icon Only",
  },
];

/**
 * Genera un ícono SVG - Plus dentro de un círculo (18px)
 */
function createIcon(): string {
  return `<svg viewBox="0 0 24 24" width="18" height="18">
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="1.5"/>
    <line x1="12" y1="7" x2="12" y2="17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="7" y1="12" x2="17" y2="12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`;
}

/**
 * Crea un botón basado en la configuración
 */
function createButton(
  variant: Variant,
  column: ColumnConfig,
  state: State,
): string {
  const { typeStyle, iconLeft, iconRight, iconOnly } = column;

  const attrs: string[] = [`variant="${variant}"`, `type-style="${typeStyle}"`];

  if (iconOnly) {
    attrs.push("icon-only");
  }

  if (state === "loading") {
    attrs.push("loading");
  }

  if (state === "disabled" || state === "disabled-hover") {
    attrs.push("disabled");
  }

  const iconHtml = createIcon();
  let content = "";

  if (iconOnly) {
    content = `<span slot="icon-left">${iconHtml}</span>`;
  } else {
    if (iconLeft) {
      content = `<span slot="icon-left">${iconHtml}</span>Button`;
    } else if (iconRight) {
      content = `Button<span slot="icon-right">${iconHtml}</span>`;
    } else {
      content = "Button";
    }
  }

  return `<rb-button ${attrs.join(" ")}>${content}</rb-button>`;
}

/**
 * Genera la matriz completa
 */
function generateMatrix(): string {
  let html = "";

  // ====== HEADER NIVEL 1: TIPOS (FILL, STROKE, TEXT) ======
  html += '<div class="matrix-header"></div>'; // Esquina
  html +=
    '<div class="matrix-header-type" style="grid-column: span 4;">FILL</div>';
  html +=
    '<div class="matrix-header-type" style="grid-column: span 4;">STROKE</div>';
  html +=
    '<div class="matrix-header-type" style="grid-column: span 4;">TEXT</div>';

  // ====== HEADER NIVEL 2: CONFIGURACIONES DE ICONOS ======
  html += '<div class="matrix-header"></div>'; // Esquina
  html += '<div class="matrix-header-config">Icon Left</div>';
  html += '<div class="matrix-header-config">Icon Right</div>';
  html += '<div class="matrix-header-config">No Icon</div>';
  html += '<div class="matrix-header-config">Icon Only</div>';
  html += '<div class="matrix-header-config">Icon Left</div>';
  html += '<div class="matrix-header-config">Icon Right</div>';
  html += '<div class="matrix-header-config">No Icon</div>';
  html += '<div class="matrix-header-config">Icon Only</div>';
  html += '<div class="matrix-header-config">Icon Left</div>';
  html += '<div class="matrix-header-config">Icon Right</div>';
  html += '<div class="matrix-header-config">No Icon</div>';
  html += '<div class="matrix-header-config">Icon Only</div>';

  // Para cada variante
  VARIANTS.forEach((variant) => {
    // Sección header
    html += `<div class="matrix-section-header">${variant.charAt(0).toUpperCase() + variant.slice(1)}</div>`;

    // Para cada estado
    STATES.forEach((state) => {
      // Row label
      const stateLabel = state
        .split("-")
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
        .join(" ");
      html += `<div class="matrix-row-label">${stateLabel}</div>`;

      // Para cada columna
      COLUMNS.forEach((column) => {
        const button = createButton(variant, column, state);
        html += `<div class="matrix-cell">${button}</div>`;
      });
    });
  });

  return html;
}

/**
 * Clase principal de la demo
 */
class DemoApp {
  private currentBrand: Brand = "jelpit";
  private currentTheme: Theme = "light";

  constructor() {
    this.init();
  }

  private init(): void {
    // Generar matriz
    const matrixContainer = document.getElementById("matrix");
    if (matrixContainer) {
      matrixContainer.innerHTML = generateMatrix();
    }

    // Setup event listeners
    this.setupControls();

    // Load initial theme
    this.loadTheme();
  }

  private setupControls(): void {
    const brandSelect = document.getElementById(
      "brand-select",
    ) as HTMLSelectElement;
    const themeSelect = document.getElementById(
      "theme-select",
    ) as HTMLSelectElement;

    if (brandSelect) {
      brandSelect.value = this.currentBrand;
      brandSelect.addEventListener("change", () => {
        this.currentBrand = brandSelect.value as Brand;
        this.loadTheme();
      });
    }

    if (themeSelect) {
      themeSelect.value = this.currentTheme;
      themeSelect.addEventListener("change", () => {
        this.currentTheme = themeSelect.value as Theme;
        this.loadTheme();
      });
    }
  }

  private loadTheme(): void {
    // Remover link anterior si existe
    const oldLink = document.getElementById("theme-css");
    if (oldLink) {
      oldLink.remove();
    }

    // Crear nuevo link con el CSS correcto
    const newLink = document.createElement("link");
    newLink.id = "theme-css";
    newLink.rel = "stylesheet";
    newLink.href = `/tokens/${this.currentBrand}-${this.currentTheme}.css`;
    document.head.appendChild(newLink);

    // Update HTML attributes
    document.documentElement.setAttribute("data-brand", this.currentBrand);
    document.documentElement.setAttribute("data-theme", this.currentTheme);

    console.log(`🎨 Loaded theme: ${this.currentBrand}-${this.currentTheme}`);
  }
}

// Initialize app when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  new DemoApp();
});
