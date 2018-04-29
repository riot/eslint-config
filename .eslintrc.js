module.exports = {
  "root": true,
  "plugins": [
    "fp"
  ],
  "env": {
    "browser": true,
    "es6": true,
    "mocha": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "comma-dangle": ["error", "never"],
    "space-before-function-paren": [
      "error",
      "never"
    ],
    "space-in-parens": [
      "error",
      "never"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "never"
    ],
    "valid-jsdoc": [
      "warn",
      {
        "preferType": {
          "array": "Array",
          "Boolean": "boolean",
          "function": "Function",
          "Number": "number",
          "object": "Object",
          "String": "string"
        }
      }
    ],
    // Es6
    "arrow-spacing": [
      "error",
      {
        "before": true,
        "after": true
      }
    ],
    "no-duplicate-imports": [
      "error",
      {
        "includeExports": true
      }
    ],
    "no-useless-computed-key": "error",
    "no-useless-rename": "error",
    "prefer-const": "error",
    "prefer-rest-params": "warn",
    "prefer-template": "warn",
    "rest-spread-spacing": [
      "warn",
      "never"
    ],
    "template-curly-spacing": [
      "warn",
      "never"
    ],
    "sort-imports": "warn",
    "no-var": "error",

    // FP options
    "fp/no-arguments": "error",
    "fp/no-class": "error",
    "fp/no-delete": "error",
    "fp/no-events": "error",
    "fp/no-get-set": "error",
    "fp/no-let": "error",
    "fp/no-loops": "error",
    "fp/no-mutating-methods": "error",
    "fp/no-proxy": "error",
    "fp/no-rest-parameters": "error",
    "fp/no-valueof-field": "error"
  }
}

