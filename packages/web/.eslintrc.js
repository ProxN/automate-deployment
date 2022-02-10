module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  root: true,
  extends: ['next', '../../.eslintrc.js', 'next/core-web-vitals'],
  settings: {
    react: {
      version: 'latest',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    'react/prop-types': 'off',
  },
};
