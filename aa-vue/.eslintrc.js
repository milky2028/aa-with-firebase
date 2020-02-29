module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "@vue/prettier/@typescript-eslint"
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always'
        }
      }
    ],
    '@typescript-eslint/semi': [
      'error',
      'always',
      { omitLastInOneLineBlock: true }
    ],
    'prettier/prettier': [
      'error',
      { singleQuote: true, arrowParens: 'always' }
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-shadow': ['error', { builtinGlobals: true, hoist: 'all' }],
    'no-useless-catch': 'error',
    'arrow-parens': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
};