import { defineConfig } from 'eslint/config'
import jsdoc from 'eslint-plugin-jsdoc'
import fp from 'eslint-plugin-fp'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  jsdoc.configs['flat/recommended'],
  {
    extends: compat.extends('eslint:recommended', 'prettier'),

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
      parserOptions: {},
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
