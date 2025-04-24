// eslint.config.ts
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig({
  languageOptions: {
    globals: globals.browser,
    parser: tseslint.parser,
    parserOptions: {
      sourceType: 'module',
    },
  },
  plugins: {
    js,
    '@typescript-eslint': tseslint.plugin,
  },
  settings: {},
  rules: {
    ...js.configs.recommended.rules,
    ...tseslint.configs.recommended.rules,
    'no-console': 'warn',
    'no-unused-vars': 'warn',
    eqeqeq: ['error', 'always'],
    curly: ['error', 'all'],
    'no-var': 'error',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-inferrable-types': 'off',
  },
});
