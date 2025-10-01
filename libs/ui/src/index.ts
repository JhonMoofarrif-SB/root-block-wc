/**
 * @root-block/ui
 * Web Components library built with Lit following Atomic Design
 * 
 * @packageDocumentation
 */

// ============================================================================
// BASE CLASSES
// ============================================================================
export { BaseAtom } from './base/BaseAtom.js';

// ============================================================================
// ATOMS - Componentes básicos e indivisibles
// ============================================================================
export { RbButton } from './atoms/RbButton.js';
export type { RbButtonClickEvent } from './atoms/RbButton.js';

// ============================================================================
// MOLECULES - Combinaciones simples de átomos
// ============================================================================
// TODO: Export molecules here

// ============================================================================
// ORGANISMS - Combinaciones complejas
// ============================================================================
// TODO: Export organisms here

// ============================================================================
// LIT RE-EXPORTS (para conveniencia)
// ============================================================================
export { html, css, LitElement } from 'lit';
export type { TemplateResult, CSSResultGroup } from 'lit';
export { customElement, property, state, query } from 'lit/decorators.js';
