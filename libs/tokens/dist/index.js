/**
 * Root Block Design Tokens
 * @root-block/tokens
 */

export const BRANDS = [
  "white-label",
  "jelpit",
  "davivienda",
  "cien-cuadras",
  "doctor-aki",
  "seguros-bolivar"
];
export const THEMES = [
  "light",
  "dark"
];

export function getTokensPath(brand, theme) {
  return `@root-block/tokens/${brand}-${theme}.css`;
}

export const AVAILABLE_CONFIGS = [
  {
    "brand": "white-label",
    "theme": "light"
  },
  {
    "brand": "white-label",
    "theme": "dark"
  },
  {
    "brand": "jelpit",
    "theme": "light"
  },
  {
    "brand": "jelpit",
    "theme": "dark"
  },
  {
    "brand": "davivienda",
    "theme": "light"
  },
  {
    "brand": "davivienda",
    "theme": "dark"
  },
  {
    "brand": "cien-cuadras",
    "theme": "light"
  },
  {
    "brand": "cien-cuadras",
    "theme": "dark"
  },
  {
    "brand": "doctor-aki",
    "theme": "light"
  },
  {
    "brand": "doctor-aki",
    "theme": "dark"
  },
  {
    "brand": "seguros-bolivar",
    "theme": "light"
  },
  {
    "brand": "seguros-bolivar",
    "theme": "dark"
  }
];
