module.exports = {
  root: true,
  env: {
    jest: true,
    es6: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks', 'prettier', '@typescript-eslint'],
  rules: {
    'no-debugger': 'warn',
    'react/prop-types': 'off',
    'import/no-unresolved': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'no-empty-function': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'linebreak-style': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/order': 'warn',
    'react/jsx-props-no-spreading': 'off',
    'arrow-parens': ['warn', 'as-needed'],
    'implicit-arrow-linebreak': 'off',
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      2,
      {
        labelAttributes: ['label'],
        controlComponents: ['Field'],
        depth: 3,
      },
    ],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parserOptions: {
        // suggested way to use eslint with TS monorepo takes too long to run
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/MONOREPO.md#one-tsconfigjson-per-package-and-an-optional-one-in-the-root
        // instead we run eslint from each package, so eslint knows nothing about monorepo
        project: ['./tsconfig.json'],
        tsconfigRootDir: process.cwd(),
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/ban-types': 'off',
      },
    },
  ],
};
