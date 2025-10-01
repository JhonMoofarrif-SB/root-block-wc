import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: '../../dist/apps/demo',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        app: resolve(__dirname, 'src/main.ts')
      }
    },
    // Copiar archivos estáticos
    copyPublicDir: true
  },
  server: {
    port: 4200,
    open: true,
    fs: {
      // Permitir acceso a archivos fuera del root
      strict: false,
      allow: [
        // Permitir acceso a todo el monorepo
        resolve(__dirname, '../../')
      ]
    }
  },
  resolve: {
    alias: {
      // Alias para tokens (directorio completo)
      '@root-block/tokens': resolve(__dirname, '../../libs/tokens/dist'),
      // Alias para UI (archivo directo)
      '@root-block/ui': resolve(__dirname, '../../libs/ui/dist/index.js'),
      // Alias alternativo
      '@rb/ui': resolve(__dirname, '../../libs/ui/dist/index.js'),
      // Alias para servir tokens CSS
      '/@tokens': resolve(__dirname, '../../libs/tokens/dist')
    }
  },
  optimizeDeps: {
    include: ['lit', 'lit/decorators.js', 'lit/directives/class-map.js']
  }
});
