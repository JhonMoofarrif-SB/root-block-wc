/**
 * Design Tokens Types
 * Auto-generated from Style Dictionary
 */

export type Brand = 'white-label' | 'jelpit' | 'davivienda' | 'cien-cuadras' | 'doctor-aki' | 'seguros-bolivar';
export type Theme = 'light' | 'dark';

export interface TokenConfig {
  brand: Brand;
  theme: Theme;
}

/**
 * Get CSS file path for a brand/theme combination
 */
export function getTokensPath(config: TokenConfig): string {
  return `@root-block/tokens/${config.brand}-${config.theme}.css`;
}

/**
 * Available brand/theme combinations
 */
export const AVAILABLE_CONFIGS: TokenConfig[] = [
  { brand: 'white-label', theme: 'light' },
  { brand: 'white-label', theme: 'dark' },
  { brand: 'jelpit', theme: 'light' },
  { brand: 'jelpit', theme: 'dark' },
  { brand: 'davivienda', theme: 'light' },
  { brand: 'davivienda', theme: 'dark' },
  { brand: 'cien-cuadras', theme: 'light' },
  { brand: 'cien-cuadras', theme: 'dark' },
  { brand: 'doctor-aki', theme: 'light' },
  { brand: 'doctor-aki', theme: 'dark' },
  { brand: 'seguros-bolivar', theme: 'light' },
  { brand: 'seguros-bolivar', theme: 'dark' }
];
