import type { Preview } from '@storybook/web-components';
import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../custom-elements.json';

// Set custom elements manifest for better documentation
setCustomElementsManifest(customElements);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      extractComponentDescription: (_component: any, { notes }: { notes?: any }) => {
        if (notes) {
          return typeof notes === 'string' ? notes : notes.markdown || notes.text;
        }
        return null;
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'white-label-light',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'white-label-light', title: 'White Label Light' },
          { value: 'white-label-dark', title: 'White Label Dark' },
          { value: 'davivienda-light', title: 'Davivienda Light' },
          { value: 'davivienda-dark', title: 'Davivienda Dark' },
          { value: 'seguros-bolivar-light', title: 'Seguros Bolívar Light' },
          { value: 'seguros-bolivar-dark', title: 'Seguros Bolívar Dark' },
          { value: 'cien-cuadras-light', title: 'Cien Cuadras Light' },
          { value: 'cien-cuadras-dark', title: 'Cien Cuadras Dark' },
          { value: 'doctor-aki-light', title: 'Doctor Aki Light' },
          { value: 'doctor-aki-dark', title: 'Doctor Aki Dark' },
          { value: 'jelpit-light', title: 'Jelpit Light' },
          { value: 'jelpit-dark', title: 'Jelpit Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (story, context) => {
      const theme = context.globals.theme || 'white-label-light';
      
      // Parse theme to get brand and mode
      // Handle special cases like "white-label-light" -> brand: "white-label", mode: "light"
      const parts = theme.split('-');
      let brand, themeMode;
      
      if (parts.length === 3 && parts[0] === 'white' && parts[1] === 'label') {
        brand = 'white-label';
        themeMode = parts[2];
      } else if (parts.length === 3 && parts[0] === 'cien' && parts[1] === 'cuadras') {
        brand = 'cien-cuadras';
        themeMode = parts[2];
      } else if (parts.length === 3 && parts[0] === 'doctor' && parts[1] === 'aki') {
        brand = 'doctor-aki';
        themeMode = parts[2];
      } else if (parts.length === 3 && parts[0] === 'seguros' && parts[1] === 'bolivar') {
        brand = 'seguros-bolivar';
        themeMode = parts[2];
      } else {
        // Default case for single-word brands like "davivienda-light"
        brand = parts[0];
        themeMode = parts[parts.length - 1];
      }
      
      // Debug log
      console.log('Theme:', theme, 'Brand:', brand, 'Mode:', themeMode);
      
      // Create a link element for the theme CSS if it doesn't exist
      let themeLink = document.getElementById('theme-css') as HTMLLinkElement;
      if (!themeLink) {
        themeLink = document.createElement('link');
        themeLink.id = 'theme-css';
        themeLink.rel = 'stylesheet';
        document.head.appendChild(themeLink);
      }
      
      // Update the theme CSS file - served from staticDirs
      themeLink.href = `/${theme}.css`;
      
      // Apply theme attributes to document body for CSS selectors
      document.body.setAttribute('data-brand', brand);
      document.body.setAttribute('data-theme', themeMode);
      
      // Also apply to the story root if it exists
      setTimeout(() => {
        const storyRoot = document.getElementById('storybook-root');
        if (storyRoot) {
          storyRoot.setAttribute('data-brand', brand);
          storyRoot.setAttribute('data-theme', themeMode);
        }
      }, 100);
      
      return story();
    },
  ],
};

export default preview;
