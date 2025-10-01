import { TemplateResult, CSSResultGroup } from 'lit';
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
export declare class RbButton extends BaseAtom {
    static styles: CSSResultGroup;
    /**
     * Variante visual del botón
     * @attr
     */
    variant: 'primary' | 'secondary' | 'tertiary' | 'error';
    /**
     * Tipo de estilo del botón
     * @attr type-style
     */
    typeStyle: 'fill' | 'stroke' | 'text';
    /**
     * Tipo de botón (para formularios)
     * @attr
     */
    type: 'button' | 'submit' | 'reset';
    /**
     * Si el botón está deshabilitado
     * @attr
     */
    disabled: boolean;
    /**
     * Si el botón está en estado de carga
     * @attr
     */
    loading: boolean;
    /**
     * Si el botón ocupa todo el ancho disponible
     * @attr full-width
     */
    fullWidth: boolean;
    /**
     * Si el botón es solo ícono (circular)
     * @attr icon-only
     */
    iconOnly: boolean;
    /**
     * Label de accesibilidad (ARIA)
     * @attr aria-label
     */
    ariaLabel: string | null;
    /**
     * Maneja el evento de click
     */
    private _handleClick;
    /**
     * Renderiza el botón
     */
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'rb-button': RbButton;
    }
}
//# sourceMappingURL=RbButton.d.ts.map