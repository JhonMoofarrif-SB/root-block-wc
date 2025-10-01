import { LitElement } from 'lit';

/**
 * Clase base para todos los componentes atómicos
 * 
 * Los átomos son los componentes más básicos de la interfaz de usuario.
 * Siguiendo Atomic Design, estos son elementos fundamentales como botones, inputs, labels, etc.
 * 
 * @abstract
 */
export abstract class BaseAtom extends LitElement {
  /**
   * Método helper para dispatch de eventos personalizados con tipado
   */
  protected dispatchCustomEvent<T = any>(
    eventName: string,
    detail?: T,
    options?: CustomEventInit
  ): boolean {
    return this.dispatchEvent(
      new CustomEvent(eventName, {
        detail,
        bubbles: true,
        composed: true,
        ...options
      })
    );
  }

  /**
   * Método para obtener valores de CSS custom properties
   */
  protected getCSSCustomProperty(propertyName: string): string {
    return getComputedStyle(this).getPropertyValue(propertyName).trim();
  }

  /**
   * Método para establecer valores de CSS custom properties
   */
  protected setCSSCustomProperty(propertyName: string, value: string): void {
    this.style.setProperty(propertyName, value);
  }
}
