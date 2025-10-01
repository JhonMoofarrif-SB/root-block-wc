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
      // No external dependencies - bundle everything para standalone
      output: {
        // Bundle único plano
        entryFileNames: 'index.js',
        // Sin chunks adicionales, todo en un archivo
        inlineDynamicImports: true,
        exports: 'named',
        // Optimizaciones adicionales siguiendo Lit docs
        compact: true,
        generatedCode: 'es2015' // Máximo soportado por Rollup
      },
      // Tree shaking agresivo
      treeshake: {
        preset: 'smallest',
        moduleSideEffects: false,
        propertyReadSideEffects: false,
        unknownGlobalSideEffects: false
      }
    },
    target: 'es2021', // Como recomienda la documentación de Lit
    minify: 'terser', // Terser es mejor que esbuild para Lit
    sourcemap: false, // Sin sourcemap en producción
    // Optimizaciones adicionales
    cssCodeSplit: false,
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 30, // Warning si supera 30kb (más estricto)
    // Configuración de Terser para máxima minificación
    terserOptions: {
      ecma: 2021,
      module: true,
      compress: {
        // Eliminación agresiva
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 3, // Más pasadas para mejor compresión
        
        // Optimizaciones agresivas
        unsafe: true,
        unsafe_arrows: true,
        unsafe_comps: true,
        unsafe_Function: true,
        unsafe_math: true,
        unsafe_methods: true,
        unsafe_proto: true,
        unsafe_regexp: true,
        unsafe_undefined: true,
        
        // Eliminación de código
        dead_code: true,
        unused: true,
        collapse_vars: true,
        reduce_vars: true,
        reduce_funcs: true,
        
        // Específico para Lit
        keep_fargs: false,
        toplevel: true,
        
        // Más optimizaciones
        conditionals: true,
        evaluate: true,
        booleans: true,
        loops: true,
        hoist_funs: true,
        hoist_props: true,
        hoist_vars: false,
        if_return: true,
        join_vars: true,
        sequences: true,
        properties: true
      },
      mangle: {
        toplevel: true, // Renombrar variables globales
        properties: {
          regex: /^_/ // Solo propiedades privadas
        }
      },
      format: {
        comments: /^!/, // Solo comentarios que empiecen con ! (ninguno)
        beautify: false, // Sin formateo
        indent_level: 0,
        ecma: 2021,
        // Máxima compresión
        ascii_only: false,
        braces: false,
        semicolons: true,
        shebang: false,
        wrap_iife: false,
        wrap_func_args: false
      }
    }
  }
});
