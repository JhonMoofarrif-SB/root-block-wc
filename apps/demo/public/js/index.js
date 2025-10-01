import { LitElement as s, css as d, html as u } from "lit";
import { LitElement as D, css as S, html as E } from "lit";
import { property as a, customElement as p } from "lit/decorators.js";
import { customElement as w, property as A, query as C, state as R } from "lit/decorators.js";
import { classMap as y } from "lit/directives/class-map.js";
class v extends s {
  /**
   * Método helper para dispatch de eventos personalizados con tipado
   */
  dispatchCustomEvent(o, l, c) {
    return this.dispatchEvent(
      new CustomEvent(o, {
        detail: l,
        bubbles: !0,
        composed: !0,
        ...c
      })
    );
  }
  /**
   * Método para obtener valores de CSS custom properties
   */
  getCSSCustomProperty(o) {
    return getComputedStyle(this).getPropertyValue(o).trim();
  }
  /**
   * Método para establecer valores de CSS custom properties
   */
  setCSSCustomProperty(o, l) {
    this.style.setProperty(o, l);
  }
}
var f = Object.defineProperty, g = Object.getOwnPropertyDescriptor, e = (t, o, l, c) => {
  for (var n = c > 1 ? void 0 : c ? g(o, l) : o, i = t.length - 1, b; i >= 0; i--)
    (b = t[i]) && (n = (c ? b(o, l, n) : b(n)) || n);
  return c && n && f(o, l, n), n;
};
let r = class extends v {
  constructor() {
    super(...arguments), this.variant = "primary", this.typeStyle = "fill", this.type = "button", this.disabled = !1, this.loading = !1, this.fullWidth = !1, this.iconOnly = !1, this.ariaLabel = null;
  }
  /**
   * Maneja el evento de click
   */
  _handleClick(t) {
    if (this.disabled || this.loading) {
      t.preventDefault(), t.stopPropagation();
      return;
    }
    this.dispatchCustomEvent("rb-button-click", {
      originalEvent: t
    });
  }
  /**
   * Renderiza el botón
   */
  render() {
    const t = {
      button: !0,
      [`button--${this.variant}`]: !0,
      [`button--${this.typeStyle}`]: !0,
      "button--loading": this.loading,
      "button--icon-only": this.iconOnly
    };
    return u`
      <button
        class=${y(t)}
        type=${this.type}
        ?disabled=${this.disabled || this.loading}
        aria-label=${this.ariaLabel ?? void 0}
        aria-busy=${this.loading ? "true" : "false"}
        @click=${this._handleClick}
      >
        <slot name="icon-left"></slot>
        <slot></slot>
        <slot name="icon-right"></slot>
      </button>
    `;
  }
};
r.styles = d`
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
e([
  a({ type: String, reflect: !0 })
], r.prototype, "variant", 2);
e([
  a({ type: String, reflect: !0, attribute: "type-style" })
], r.prototype, "typeStyle", 2);
e([
  a({ type: String })
], r.prototype, "type", 2);
e([
  a({ type: Boolean, reflect: !0 })
], r.prototype, "disabled", 2);
e([
  a({ type: Boolean, reflect: !0 })
], r.prototype, "loading", 2);
e([
  a({ type: Boolean, reflect: !0, attribute: "full-width" })
], r.prototype, "fullWidth", 2);
e([
  a({ type: Boolean, reflect: !0, attribute: "icon-only" })
], r.prototype, "iconOnly", 2);
e([
  a({ type: String, attribute: "aria-label" })
], r.prototype, "ariaLabel", 2);
r = e([
  p("rb-button")
], r);
export {
  v as BaseAtom,
  D as LitElement,
  r as RbButton,
  S as css,
  w as customElement,
  E as html,
  A as property,
  C as query,
  R as state
};
//# sourceMappingURL=index.js.map
