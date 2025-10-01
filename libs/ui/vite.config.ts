import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'RootBlockUI',
      formats: ['es'],
      fileName: 'index'
    },
    rollupOptions: {
      external: ['lit', 'lit/decorators.js', 'lit/directives/class-map.js'],
      output: {
        // Bundle único plano
        entryFileNames: 'index.js',
        // Sin chunks adicionales, todo en un archivo
        inlineDynamicImports: true,
        exports: 'named',
        globals: {
          lit: 'Lit',
          'lit/decorators.js': 'Lit.decorators',
          'lit/directives/class-map.js': 'Lit.directives.classMap'
        }
      }
    },
    target: 'esnext',
    minify: 'esbuild',
    sourcemap: true
  }
});
