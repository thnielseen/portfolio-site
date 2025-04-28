import { defineConfig } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@abstracts': path.resolve(__dirname, './src/scss/abstracts'),
      '@variables': path.resolve(__dirname, './src/scss/abstracts/variables'),
      '@functions': path.resolve(__dirname, './src/scss/abstracts/functions'),
      '@mixins': path.resolve(__dirname, './src/scss/abstracts/mixins'),
      '@placeholder': path.resolve(__dirname, './src/scss/abstracts/placeholders'),
      '@base': path.resolve(__dirname, './src/scss/base'),
      '@components': path.resolve(__dirname, './src/scss/components'),
      '@layout': path.resolve(__dirname, './src/scss/layout'),
    },
  },
});
