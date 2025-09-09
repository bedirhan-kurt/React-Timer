import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';

export default [
  // Ignore folders like output directories
  { ignores: ['dist'] },

  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: { version: '18.3' },
    },
    plugins: {
      '@stylistic': stylistic,
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
    },
    rules: {
      // 🔧 Base JS rules (eslint:recommended)
      ...js.configs.recommended.rules,

      // 🔧 React + Hooks + JSX rules
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // 🔧 React Refresh
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // 🔁 Disabled rules
      'react/jsx-no-target-blank': 'off',
      'react/prop-types': 'off', // Enable if not using TypeScript
      'react/jsx-uses-react': 'off', // React 17+
      'react/react-in-jsx-scope': 'off', // React 17+

      // ✅ Core Rules
      'react/no-multi-comp': ['error', { ignoreStateless: false }],

      // ✅ JSX Alignment
      'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
      'react/jsx-closing-tag-location': 'error',

      // ✅ Spacing and style
      '@stylistic/indent': ['error', 2],
      '@stylistic/jsx-quotes': ['error', 'prefer-double'],
      '@stylistic/no-multi-spaces': ['error'],
      'react/jsx-tag-spacing': ['error', {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      }],
      'react/jsx-curly-spacing': ['error', {
        when: 'never',
        children: { when: 'never' },
      }],

      // ✅ Props and Component Rules
      'react/jsx-pascal-case': ['error', { allowAllCaps: false, ignore: [] }],
      'react/jsx-boolean-value': ['error', 'never'],
      'react/self-closing-comp': 'error',
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/aria-role': ['error', { ignoreNonDOM: false }],
      'jsx-a11y/img-redundant-alt': ['error'], // Prevent "image", "photo", "picture" in alt text
      'react/default-props-match-prop-types': 'warn',
      'react/destructuring-assignment': ['error', 'always'],

      // ✅ JSX Parentheses
      'react/jsx-wrap-multilines': ['error'],

      // ✅ Functions
      'prefer-arrow-callback': ['error', { allowNamedFunctions: false }],

      // ✅ Import Order
      'import/order': ['warn', {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      }],
    },
  },
];