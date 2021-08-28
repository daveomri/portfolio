module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['warn', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-trailing-spaces': 'warn',
    'no-console': 'warn',
    'no-underscore-dangle': 0,
    'no-alert': 0,
    'no-lone-blocks': 0,
    'jsx-quotes': 1,
    'react/display-name': [
      1,
      {
        ignoreTranspilerName: false,
      },
    ],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        singleQuote: true,
        'object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': ['error', 'always'],
        'computed-property-spacing': ['error', 'always'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
};
