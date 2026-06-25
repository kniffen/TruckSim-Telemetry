import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {},
  assetsInclude: ['**/*.node'],
  optimizeDeps: {
    exclude: ['*.node']
  }
});