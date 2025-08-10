/* eslint-env node */

module.exports = {
  extends: ['@massimo-cassandro/stylelint-config'],
  ignoreFiles: [
    'node_modules/**/*.{css,scss}',
    'vendor/**/*.{css,scss}',
    'templates/**/*.{css,scss}',
    'dist/**/*.css',
    'build/**/*.css',
    'public/**/*.css',
    'test/**/*.css'
  ],

  // tailwind
  // 'rules': {
  //   'value-keyword-case': null,
  //   '@stylistic/number-no-trailing-zeros': null
  // }
};
