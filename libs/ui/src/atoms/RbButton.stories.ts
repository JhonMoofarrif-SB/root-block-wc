import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';

// Import the component - this will auto-register it due to @customElement decorator
import './RbButton';

const meta: Meta = {
  title: 'Atoms/RbButton',
  component: 'rb-button',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Botón interactivo según Design System Root Block. Soporta múltiples variantes, estados y configuraciones.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'error'],
      description: 'Variante visual del botón',
      defaultValue: 'primary',
    },
    typeStyle: {
      control: { type: 'select' },
      options: ['fill', 'stroke', 'text'],
      description: 'Tipo de estilo del botón',
      defaultValue: 'fill',
      name: 'type-style',
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'Tipo de botón (para formularios)',
      defaultValue: 'button',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Si el botón está deshabilitado',
      defaultValue: false,
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Si el botón está en estado de carga',
      defaultValue: false,
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Si el botón ocupa todo el ancho disponible',
      defaultValue: false,
      name: 'full-width',
    },
    iconOnly: {
      control: { type: 'boolean' },
      description: 'Si el botón es solo ícono (circular)',
      defaultValue: false,
      name: 'icon-only',
    },
    ariaLabel: {
      control: { type: 'text' },
      description: 'Label de accesibilidad (ARIA)',
      name: 'aria-label',
    },
    text: {
      control: { type: 'text' },
      description: 'Texto del botón',
      defaultValue: 'Button',
    },
  },
  args: {
    variant: 'primary',
    typeStyle: 'fill',
    type: 'button',
    disabled: false,
    loading: false,
    fullWidth: false,
    iconOnly: false,
    text: 'Button',
  },
};

export default meta;
type Story = StoryObj;

// Template function for creating stories
const Template = (args: any) => {
  const handleClick = action('rb-button-click');
  
  return html`
    <rb-button
      variant="${args.variant}"
      type-style="${args.typeStyle}"
      type="${args.type}"
      ?disabled="${args.disabled}"
      ?loading="${args.loading}"
      ?full-width="${args.fullWidth}"
      ?icon-only="${args.iconOnly}"
      aria-label="${args.ariaLabel || ''}"
      @rb-button-click="${handleClick}"
    >
      ${args.iconOnly ? '' : args.text}
      ${args.iconLeft ? html`<span slot="icon-left">${args.iconLeft}</span>` : ''}
      ${args.iconRight ? html`<span slot="icon-right">${args.iconRight}</span>` : ''}
    </rb-button>
  `;
};

// Basic stories
export const Default: Story = {
  render: Template,
};

export const Secondary: Story = {
  render: Template,
  args: {
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  render: Template,
  args: {
    variant: 'tertiary',
  },
};

export const Error: Story = {
  render: Template,
  args: {
    variant: 'error',
  },
};

// Type styles
export const Stroke: Story = {
  render: Template,
  args: {
    typeStyle: 'stroke',
  },
};

export const TextStyle: Story = {
  render: Template,
  args: {
    typeStyle: 'text',
  },
};

// States
export const Disabled: Story = {
  render: Template,
  args: {
    disabled: true,
  },
};

export const Loading: Story = {
  render: Template,
  args: {
    loading: true,
  },
};

// Sizes and layouts
export const FullWidth: Story = {
  render: Template,
  args: {
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const IconOnly: Story = {
  render: (args: any) => {
    const handleClick = action('rb-button-click');
    
    return html`
      <rb-button
        variant="${args.variant}"
        type-style="${args.typeStyle}"
        ?disabled="${args.disabled}"
        ?loading="${args.loading}"
        ?icon-only="${args.iconOnly}"
        aria-label="Icon button"
        @rb-button-click="${handleClick}"
      >
        <span slot="icon-left">🚀</span>
      </rb-button>
    `;
  },
  args: {
    iconOnly: true,
  },
};

// Interactive playground
export const Playground: Story = {
  render: Template,
  args: {
    variant: 'primary',
    typeStyle: 'fill',
    text: 'Interactive Button',
    disabled: false,
    loading: false,
    fullWidth: false,
    iconOnly: false,
  },
};