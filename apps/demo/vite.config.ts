import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: __dirname,
  publicDir: 'public',
  build: {
    outDir: '../../dist/apps/demo',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
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
  // No necesitamos alias, todo se carga desde public/
  optimizeDeps: {
    include: ['lit', 'lit/decorators.js', 'lit/directives/class-map.js']
  }
});
