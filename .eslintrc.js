module.exports = {
  root: true,
  env: {
    node: true
  },
<<<<<<< HEAD
  extends: ['plugin:vue/essential', '@vue/standard'],
=======
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
>>>>>>> 9bc2009a39ea964c4105f5cf99532a5864840ed8
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0,
<<<<<<< HEAD
    indent: 0,
    'eol-last': 0,
    'spaced-comment': 0
=======
    'indent': 0,
    'spaced-comment': 0,
    'eol-last': 0
>>>>>>> 9bc2009a39ea964c4105f5cf99532a5864840ed8
  }
}
