module.exports = {
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 2017
  },
  env: {
    es6: true,
    browser: true
  },
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-shadow': ['error', { builtinGlobals: true, hoist: 'all' }],
    'no-useless-catch': 'error',
    'arrow-parens': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 1, maxBOF: 0 }],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
};
