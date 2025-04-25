// vite.config.ts
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use '@/scss/abstract/variables' as var;
          @use '@/scss/abstract/functions' as fn;
          @use '@/scss/abstract/mixins' as mix;
        `,
      },
    },
  },
});
