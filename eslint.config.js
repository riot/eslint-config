import { defineConfig } from 'eslint/config'
import jsdoc from 'eslint-plugin-jsdoc'
import fp from 'eslint-plugin-fp'
import globals from 'globals'
import js from '@eslint/js'
import prettier from 'eslint-config-prettier'

export default defineConfig([
  jsdoc.configs['flat/recommended'],
  js.configs.recommended,
  prettier,
  {
    plugins: {
      jsdoc,
      fp,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.mocha,
        ...globals.node,
      },
      ecmaVersion: 2025,
      sourceType: 'module',
    },
    rules: {
      'jsdoc/require-jsdoc': 'off',
      'fp/no-arguments': 'error',
      'fp/no-class': 'error',
      'fp/no-delete': 'error',
      'fp/no-events': 'error',
      'fp/no-get-set': 'error',
      'fp/no-let': 'error',
      'fp/no-loops': 'error',
      'fp/no-mutating-methods': 'error',
      'fp/no-proxy': 'error',
      'fp/no-rest-parameters': 'error',
      'fp/no-valueof-field': 'error',
    },
  },
])
