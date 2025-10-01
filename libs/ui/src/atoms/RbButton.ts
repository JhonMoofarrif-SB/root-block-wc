import { html, css, TemplateResult, CSSResultGroup } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { BaseAtom } from '../base/BaseAtom.js';

/**
 * Evento que se dispara cuando se hace click en el botón
 */
export interface RbButtonClickEvent {
  originalEvent: MouseEvent;
}

/**
 * Web Component: Botón interactivo según Design System Root Block
 * 
 * @element rb-button
 * 
 * @slot - Contenido principal del botón
 * @slot icon-left - Ícono a la izquierda del texto
 * @slot icon-right - Ícono a la derecha del texto
 * 
 * @fires rb-button-click - Se dispara cuando el botón es clickeado
 * 
 * @cssprop --rb-button-bg - Color de fondo del botón
 * @cssprop --rb-button-color - Color del texto del botón
 * @cssprop --rb-button-border - Color del borde del botón
 */
@customElement('rb-button')
export class RbButton extends BaseAtom {
  static override styles: CSSResultGroup = css`
    :host {
      display: inline-block;
      --rb-button-transition: all 0.2s ease;
    }

    :host([hidden]) {
      display: none;
    }

    :host([disabled]) {
      cursor: not-allowed;
    }

    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 8px 16px;
      border: 1px solid transparent;
      border-radius: 50px;
      font-family: var(--typography-fontFamily, 'Roboto', sans-serif);
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      letter-spacing: 0px;
      text-align: center;
      text-decoration: none;
      cursor: pointer;
      user-select: none;
      transition: var(--rb-button-transition);
      position: relative;
      outline: none;
      box-sizing: border-box;
      white-space: nowrap;
      min-height: 40px;
    }

    /* Icon only - circular */
    .button--icon-only {
      width: 40px;
      height: 40px;
      padding: 0;
      border-radius: 50%;
      gap: 0;
    }

    /* ========================================
       PRIMARY VARIANT
       ======================================== */
    
    /* Primary Fill */
    .button--primary.button--fill {
      background-color: var(--color-primary-base);
      color: var(--color-secondary-base);
      border-color: var(--color-primary-base);
    }

    .button--primary.button--fill:hover:not(:disabled) {
      background-color: var(--color-primary-D100);
      color: var(--color-secondary-base);
      border-color: var(--color-primary-D100);
    }

    .button--primary.button--fill:active:not(:disabled) {
      background-color: var(--color-primary-D200);
      color: var(--color-secondary-base);
      border-color: var(--color-primary-D200);
      box-shadow: inset 0px 2px 4px rgba(115, 115, 115, 0.16), inset 0px 0px 6px rgba(115, 115, 115, 0.16);
    }

    .button--primary.button--fill:focus-visible:not(:disabled) {
      background-color: var(--color-primary-base);
      color: var(--color-secondary-base);
      border: 2px solid var(--color-primary-L100);
    }

    .button--primary.button--fill:disabled {
      background-color: var(--color-primary-L400);
      border-color: var(--color-primary-L400);
      color: var(--color-primary-L100);
    }

    .button--primary.button--fill:disabled:hover {
      background-color: var(--color-primary-L300);
      border-color: var(--color-primary-L300);
      color: var(--color-primary-L100);
    }

    /* Primary Stroke */
    .button--primary.button--stroke {
      background-color: transparent;
      color: var(--color-primary-base);
      border-color: var(--color-primary-base);
    }

    .button--primary.button--stroke:hover:not(:disabled) {
      background-color: var(--color-primary-L400);
      border-color: var(--color-primary-base);
      color: var(--color-primary-base);
    }

    .button--primary.button--stroke:active:not(:disabled) {
      background-color: var(--color-primary-L300);
      border-color: var(--color-primary-base);
      color: var(--color-primary-base);
    }

    .button--primary.button--stroke:focus-visible:not(:disabled) {
      outline: 2px solid var(--color-primary-L100);
      outline-offset: 2px;
    }

    .button--primary.button--stroke:disabled {
      background-color: transparent;
      border-color: var(--color-primary-L400);
      color: var(--color-primary-L100);
    }

    .button--primary.button--stroke:disabled:hover {
      background-color: var(--color-primary-L400);
      border-color: var(--color-primary-L400);
      color: var(--color-primary-L100);
    }

    /* Primary Text */
    .button--primary.button--text {
      background-color: transparent;
      color: var(--color-primary-base);
      border-color: transparent;
      text-decoration: underline;
      text-decoration-style: solid;
    }

    .button--primary.button--text:hover:not(:disabled) {
      background-color: var(--color-primary-L400);
      color: var(--color-primary-base);
    }

    .button--primary.button--text:active:not(:disabled) {
      background-color: var(--color-primary-L300);
      color: var(--color-primary-base);
    }

    .button--primary.button--text:focus-visible:not(:disabled) {
      outline: 2px solid var(--color-primary-L100);
      outline-offset: 2px;
    }

    .button--primary.button--text:disabled {
      background-color: transparent;
      color: var(--color-primary-L100);
    }

    .button--primary.button--text:disabled:hover {
      background-color: var(--color-primary-L400);
      color: var(--color-primary-L100);
    }

    /* ========================================
       SECONDARY VARIANT
       ======================================== */
    
    /* Secondary Fill */
    .button--secondary.button--fill {
      background-color: var(--color-secondary-base);
      color: var(--color-primary-base);
      border-color: var(--color-secondary-base);
    }

    .button--secondary.button--fill:hover:not(:disabled) {
      background-color: var(--color-secondary-D100);
      color: var(--color-primary-base);
      border-color: var(--color-secondary-D100);
    }

    .button--secondary.button--fill:active:not(:disabled) {
      background-color: var(--color-secondary-D200);
      color: var(--color-primary-base);
      border-color: var(--color-secondary-D200);
    }

    .button--secondary.button--fill:focus-visible:not(:disabled) {
      outline: 2px solid var(--color-secondary-base);
      outline-offset: 2px;
    }

    .button--secondary.button--fill:disabled {
      background-color: var(--color-grayscale-L200);
      border-color: var(--color-grayscale-L200);
      color: var(--color-grayscale-Base);
    }

    /* Secondary Stroke */
    .button--secondary.button--stroke {
      background-color: transparent;
      color: var(--color-secondary-base);
      border-color: var(--color-secondary-base);
    }

    .button--secondary.button--stroke:hover:not(:disabled) {
      background-color: var(--color-secondary-L400);
      border-color: var(--color-secondary-D100);
      color: var(--color-secondary-base);
    }

    .button--secondary.button--stroke:active:not(:disabled) {
      background-color: var(--color-secondary-L300);
      border-color: var(--color-secondary-D200);
      color: var(--color-secondary-base);
    }

    .button--secondary.button--stroke:focus-visible:not(:disabled) {
      outline: 2px solid var(--color-secondary-base);
      outline-offset: 2px;
    }

    .button--secondary.button--stroke:disabled {
      background-color: transparent;
      border-color: var(--color-grayscale-L200);
      color: var(--color-grayscale-Base);
    }

    /* Secondary Text */
    .button--secondary.button--text {
      background-color: transparent;
      color: var(--color-secondary-base);
      border-color: transparent;
      text-decoration: underline;
      text-decoration-style: solid;
    }

    .button--secondary.button--text:hover:not(:disabled) {
      background-color: var(--color-secondary-L400);
      color: var(--color-secondary-base);
    }

    .button--secondary.button--text:active:not(:disabled) {
      background-color: var(--color-secondary-L300);
      color: var(--color-secondary-base);
    }

    .button--secondary.button--text:focus-visible:not(:disabled) {
      outline: 2px solid var(--color-secondary-base);
      outline-offset: 2px;
    }

    .button--secondary.button--text:disabled {
      background-color: transparent;
      color: var(--color-grayscale-Base);
    }

    /* ========================================
       TERTIARY VARIANT
       ======================================== */
    
    /* Tertiary Fill */
    .button--tertiary.button--fill {
      background-color: var(--color-tertiary-base);
      color: #ffffff;
      border-color: var(--color-tertiary-base);
    }

    .button--tertiary.button--fill:hover:not(:disabled) {
      background-color: var(--color-tertiary-D100);
      border-color: var(--color-tertiary-D100);
    }

    .button--tertiary.button--fill:active:not(:disabled) {
      background-color: var(--color-tertiary-D200);
      border-color: var(--color-tertiary-D200);
    }

    .button--tertiary.button--fill:focus-visible:not(:disabled) {
      outline: 2px solid var(--color-tertiary-base);
      outline-offset: 2px;
    }

    .button--tertiary.button--fill:disabled {
      background-color: var(--color-grayscale-L200);
      border-color: var(--color-grayscale-L200);
      color: var(--color-grayscale-Base);
    }

    /* Tertiary Stroke */
    .button--tertiary.button--stroke {
      background-color: transparent;
      color: var(--color-tertiary-base);
      border-color: var(--color-tertiary-base);
    }

    .button--tertiary.button--stroke:hover:not(:disabled) {
      background-color: var(--color-tertiary-L400);
      border-color: var(--color-tertiary-D100);
      color: var(--color-tertiary-D100);
    }

    .button--tertiary.button--stroke:active:not(:disabled) {
      background-color: var(--color-tertiary-L300);
      border-color: var(--color-tertiary-D200);
      color: var(--color-tertiary-D200);
    }

    .button--tertiary.button--stroke:focus-visible:not(:disabled) {
      outline: 2px solid var(--color-tertiary-base);
      outline-offset: 2px;
    }

    .button--tertiary.button--stroke:disabled {
      background-color: transparent;
      border-color: var(--color-grayscale-L200);
      color: var(--color-grayscale-Base);
    }

    /* Tertiary Text */
    .button--tertiary.button--text {
      background-color: transparent;
      color: var(--color-tertiary-base);
      border-color: transparent;
      text-decoration: underline;
      text-decoration-style: solid;
    }

    .button--tertiary.button--text:hover:not(:disabled) {
      background-color: var(--color-tertiary-L400);
      color: var(--color-tertiary-D100);
    }

    .button--tertiary.button--text:active:not(:disabled) {
      background-color: var(--color-tertiary-L300);
      color: var(--color-tertiary-D200);
    }

    .button--tertiary.button--text:focus-visible:not(:disabled) {
      outline: 2px solid var(--color-tertiary-base);
      outline-offset: 2px;
    }

    .button--tertiary.button--text:disabled {
      background-color: transparent;
      color: var(--color-grayscale-Base);
    }

    /* ========================================
       ERROR VARIANT
       ======================================== */
    
    /* Error Fill */
    .button--error.button--fill {
      background-color: var(--color-error-base);
      color: #ffffff;
      border-color: var(--color-error-base);
    }

    .button--error.button--fill:hover:not(:disabled) {
      background-color: var(--color-error-D100);
      border-color: var(--color-error-D100);
    }

    .button--error.button--fill:active:not(:disabled) {
      background-color: var(--color-error-D200);
      border-color: var(--color-error-D200);
    }

    .button--error.button--fill:focus-visible:not(:disabled) {
      outline: 2px solid var(--color-error-base);
      outline-offset: 2px;
    }

    .button--error.button--fill:disabled {
      background-color: var(--color-error-L300);
      border-color: var(--color-error-L300);
      color: var(--color-error-L100);
    }

    /* Error Stroke */
    .button--error.button--stroke {
      background-color: transparent;
      color: var(--color-error-base);
      border-color: var(--color-error-base);
    }

    .button--error.button--stroke:hover:not(:disabled) {
      background-color: var(--color-error-L400);
      border-color: var(--color-error-D100);
      color: var(--color-error-D100);
    }

    .button--error.button--stroke:active:not(:disabled) {
      background-color: var(--color-error-L300);
      border-color: var(--color-error-D200);
      color: var(--color-error-D200);
    }

    .button--error.button--stroke:focus-visible:not(:disabled) {
      outline: 2px solid var(--color-error-base);
      outline-offset: 2px;
    }

    .button--error.button--stroke:disabled {
      background-color: transparent;
      border-color: var(--color-error-L300);
      color: var(--color-error-L100);
    }

    /* Error Text */
    .button--error.button--text {
      background-color: transparent;
      color: var(--color-error-base);
      border-color: transparent;
      text-decoration: underline;
      text-decoration-style: solid;
    }

    .button--error.button--text:hover:not(:disabled) {
      background-color: var(--color-error-L400);
      color: var(--color-error-D100);
    }

    .button--error.button--text:active:not(:disabled) {
      background-color: var(--color-error-L300);
      color: var(--color-error-D200);
    }

    .button--error.button--text:focus-visible:not(:disabled) {
      outline: 2px solid var(--color-error-base);
      outline-offset: 2px;
    }

    .button--error.button--text:disabled {
      background-color: transparent;
      color: var(--color-error-L100);
    }

    /* ========================================
       LOADING STATE
       ======================================== */
    
    .button--loading {
      position: relative;
      color: transparent !important;
      pointer-events: none;
    }

    .button--loading::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      top: 50%;
      left: 50%;
      margin-left: -8px;
      margin-top: -8px;
      border: 2px solid currentColor;
      border-radius: 50%;
      border-top-color: transparent;
      animation: spinner 0.6s linear infinite;
      color: inherit;
    }

    /* Loading spinner colors */
    .button--loading.button--primary.button--fill::after {
      border-color: var(--color-secondary-base);
      border-top-color: transparent;
    }

    .button--loading.button--primary.button--stroke::after,
    .button--loading.button--primary.button--text::after {
      border-color: var(--color-primary-base);
      border-top-color: transparent;
    }

    .button--loading.button--secondary.button--fill::after {
      border-color: var(--color-primary-base);
      border-top-color: transparent;
    }

    .button--loading.button--secondary.button--stroke::after,
    .button--loading.button--secondary.button--text::after {
      border-color: var(--color-secondary-base);
      border-top-color: transparent;
    }

    .button--loading.button--tertiary.button--fill::after {
      border-color: #ffffff;
      border-top-color: transparent;
    }

    .button--loading.button--tertiary.button--stroke::after,
    .button--loading.button--tertiary.button--text::after {
      border-color: var(--color-tertiary-base);
      border-top-color: transparent;
    }

    .button--loading.button--error.button--fill::after {
      border-color: #ffffff;
      border-top-color: transparent;
    }

    .button--loading.button--error.button--stroke::after,
    .button--loading.button--error.button--text::after {
      border-color: var(--color-error-base);
      border-top-color: transparent;
    }

    @keyframes spinner {
      to {
        transform: rotate(360deg);
      }
    }

    /* ========================================
       FULL WIDTH
       ======================================== */
    
    :host([full-width]) .button {
      width: 100%;
    }

    /* ========================================
       ICONS
       ======================================== */
    
    ::slotted([slot='icon-left']),
    ::slotted([slot='icon-right']) {
      width: 20px;
      height: 20px;
      display: inline-flex;
      flex-shrink: 0;
    }

    .button--icon-only ::slotted([slot='icon-left']) {
      width: 20px;
      height: 20px;
    }
  `;

  /**
   * Variante visual del botón
   * @attr
   */
  @property({ type: String, reflect: true })
  variant: 'primary' | 'secondary' | 'tertiary' | 'error' = 'primary';

  /**
   * Tipo de estilo del botón
   * @attr type-style
   */
  @property({ type: String, reflect: true, attribute: 'type-style' })
  typeStyle: 'fill' | 'stroke' | 'text' = 'fill';

  /**
   * Tipo de botón (para formularios)
   * @attr
   */
  @property({ type: String })
  type: 'button' | 'submit' | 'reset' = 'button';

  /**
   * Si el botón está deshabilitado
   * @attr
   */
  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  /**
   * Si el botón está en estado de carga
   * @attr
   */
  @property({ type: Boolean, reflect: true })
  loading: boolean = false;

  /**
   * Si el botón ocupa todo el ancho disponible
   * @attr full-width
   */
  @property({ type: Boolean, reflect: true, attribute: 'full-width' })
  fullWidth: boolean = false;

  /**
   * Si el botón es solo ícono (circular)
   * @attr icon-only
   */
  @property({ type: Boolean, reflect: true, attribute: 'icon-only' })
  iconOnly: boolean = false;

  /**
   * Label de accesibilidad (ARIA)
   * @attr aria-label
   */
  @property({ type: String, attribute: 'aria-label' })
  ariaLabel: string | null = null;

  /**
   * Maneja el evento de click
   */
  private _handleClick(event: MouseEvent): void {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.dispatchCustomEvent<RbButtonClickEvent>('rb-button-click', {
      originalEvent: event
    });
  }

  /**
   * Renderiza el botón
   */
  override render(): TemplateResult {
    const classes = {
      button: true,
      [`button--${this.variant}`]: true,
      [`button--${this.typeStyle}`]: true,
      'button--loading': this.loading,
      'button--icon-only': this.iconOnly
    };

    const nothing = undefined;

    return html`
      <button
        class=${classMap(classes)}
        type=${this.type}
        ?disabled=${this.disabled || this.loading}
        aria-label=${this.ariaLabel ?? nothing}
        aria-busy=${this.loading ? 'true' : 'false'}
        @click=${this._handleClick}
      >
        <slot name="icon-left"></slot>
        <slot></slot>
        <slot name="icon-right"></slot>
      </button>
    `;
  }
}

// Declaración de tipos para TypeScript
declare global {
  interface HTMLElementTagNameMap {
    'rb-button': RbButton;
  }
}
