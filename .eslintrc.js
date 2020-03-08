  module.exports = {
    root: true,
    env: {
      browser: true,
      node: true
    },
    parserOptions: {
      parser: 'babel-eslint'
    },
    extends: [
      'plugin:vue/strongly-recommended',
      'eslint:recommended',
      'prettier/vue',
      'plugin:prettier/recommended'
    ],
    // required to lint *.vue files
    plugins: [
      'vue',
      'prettier'
    ],
    // add your custom rules here
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
      'no-nested-ternary': 0,
      'import/no-unresolved': 0,
      'import/no-named-as-default': 0,
      'no-unused-expressions': 0,
      'id-length': 0,
      'no-script-url': 0,
      'import/no-extraneous-dependencies': 0,
      'no-underscore-dangle': 0,
      'global-require': 0,
      'import/newline-after-import': 0,
      'import/extensions': 0,
      'prefer-template': 0,
      'max-len': 0,
      'function-paren-newline': 0,
      'react/no-typos': 0,
      'arrow-parens': 0,
      'linebreak-style': 0
    }
}
