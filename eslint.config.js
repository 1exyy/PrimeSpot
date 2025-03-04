import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintPluginPrettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
  {ignores: ['dist']},
  prettierConfig,
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'prettier': eslintPluginPrettier,
      '@typescript-eslint': tseslint.plugin
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        {allowConstantExport: true},
      ],
      'linebreak-style': 'off',

      'arrow-parens': 'off',
      'object-curly-newline': 'off',
      'no-mixed-operators': 'off',
      'arrow-body-style': 'off',
      'function-paren-newline': 'off',
      'space-before-function-paren': 0,

      'max-len': ['error', 100, 2, { ignoreUrls: true, }],
      'no-console': 'error',
      'no-alert': 'error',

      'no-param-reassign': 'off',
      "radix": "off",

      'react/require-default-props': 'off',
      'react/forbid-prop-types': 'off',
      'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],

      'prefer-destructuring': 'off',

      'react/no-find-dom-node': 'off',
      'react/no-did-mount-set-state': 'off',
      'react/no-unused-prop-types': 'off',
      'react/jsx-one-expression-per-line': 'off',

      "jsx-a11y/anchor-is-valid": ["error", { "components": ["Link"], "specialLink": ["to"] }],
      "jsx-a11y/label-has-for": [2, {
        "required": {
          "every": ["id"]
        }
      }],
    },
    globals: {
      ...globals.jest,
    },
    'prettier/prettier': ['error'],
  },
)
