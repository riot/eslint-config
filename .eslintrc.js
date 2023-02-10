module.exports = {
  root: true,
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['fp'],
  env: {
    browser: true,
    es6: true,
    mocha: true,
    node: true,
  },
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    'valid-jsdoc': [
      'warn',
      {
        preferType: {
          array: 'array',
          Boolean: 'boolean',
          function: 'function',
          Number: 'number',
          object: 'object',
          String: 'string',
        },
      },
    ],
    // FP options
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
}
