import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    ignores: [
      'dist/',
      'node_modules/',
      'apps/*/dist/',
      'libs/*/dist/',
      '**/*.d.ts',
      '.nx/',
    ],
  },
];

