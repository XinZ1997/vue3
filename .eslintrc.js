/* eslint-disable no-undef */
module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
    '@typescript-eslint/eslint-plugin'
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': 'error'
  }
}

