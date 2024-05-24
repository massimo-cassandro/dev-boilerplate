const std_packages = [
  {
    label: 'rollup base',
    packages: [
      'rollup@latest',
      '@rollup/plugin-terser',
      '@rollup/plugin-node-resolve',
      '@rollup/plugin-json',
      '@rollup/plugin-image',
      '@rollup/plugin-replace',
      '@rollup/plugin-commonjs',
    ],
    dev: true
  },
  {
    label: 'rollup-plugin-string-html',
    packages: ['rollup-plugin-string-html'],
    dev: true,
  },

  // 'npm i --save-dev rollup-plugin-minify-html-template-literals',

  {
    label: 'sass cli',
    packages: ['sass'],
    dev: true,
  },
  {
    label: 'postcss + autoprefixer + purgecss (webpack)',
    packages: [
      'postcss',
      '@fullhuman/postcss-purgecss',
      'autoprefixer',
      // 'postcss-csso',
    ],
    dev: true,
  },
  // {
  //   label: 'postcss cli',
  //   packages: ['postcss-cli'],
  //   dev: true
  // },
  {
    label: 'postcss-banner',
    packages: ['postcss-banner'],
    dev: true
  },

  {
    label: 'bootstrap',
    packages: ['bootstrap'],
    dev: false
  },
  {
    label: 'gulp per icone',
    packages: [
      'gulp@latest',
      'gulp-concat',
      'gulp-dom',
      'gulp-flatmap',
      'gulp-inject-string',
      'gulp-jsbeautifier',
      'gulp-rename',
      'gulp-replace',
      'gulp-svgmin',
      'gulp-svgstore',
    ],
    dev: true
  },
  {
    label: 'gulp-wrap (aggiunta per icone react)',
    packages: ['gulp-wrap'],
    dev: true
  },
  {
    label: 'prismjs',
    packages: ['prismjs'],
    dev: false,
  },
  {
    label: 'normalize.css',
    packages: ['normalize.css'],
    dev: false,
  },
  {
    label: 'open-props',
    packages: ['open-props', 'postcss-jit-props'],
    dev: false,
  },
  {
    label: 'react',
    packages: [
      '@babel/preset-react',
      'babel-plugin-transform-react-remove-prop-types',
      'classnames',
      'dotenv-webpack',
      'eslint-config-react-app',
      'nanoid',
      'prop-types',
      'react-dom',
      'react',
    ],
    dev: true,
  },
  {
    label: 'styled-components',
    packages: [
      'babel-plugin-styled-components',
      'styled-components'
    ],
    dev: true,
  },
  {
    label: 'react-html-comment',
    packages: ['react-html-comment'],
    dev: true,
  },
  {
    label: 'html-react-parser',
    packages: ['html-react-parser'],
    dev: true,
  },
  {
    label: 'webpack',
    packages: [
      '@babel/core',
      '@babel/preset-env',
      'babel-loader',
      // 'clean-webpack-plugin',
      'copy-webpack-plugin',
      'css-loader',
      'css-minimizer-webpack-plugin',
      // 'csso-webpack-plugin',
      'dotenv-webpack',
      'file-loader',
      'html-loader',
      'html-webpack-plugin',
      'mini-css-extract-plugin',
      'postcss-loader',
      'postcss-preset-env',
      'sass-loader',
      'style-loader',
      'terser-webpack-plugin',
      'webpack-cli',
      'webpack-dev-server',
      'webpack-manifest-plugin',
      'webpack-remove-empty-scripts',
      'webpack'
    ],
    dev: true
  },
  {
    label: 'typescript per react/webpack',
    packages: [
      '@types/react-dom',
      '@types/react',
      'ts-loader',
      'typescript-plugin-css-modules',
      'typescript'
    ],
    dev: true,
  },

];

std_packages.sort((a,b) => a.label < b.label? -1 : (a.label > b.label? 1 : 0));

const basic_packages = [
  {
    label: 'updater',
    packages: [
      '@massimo-cassandro/dev-updater'
    ],
    dev: true,
  },
  {
    label: 'eslint@8',
    packages: ['@massimo-cassandro/eslint-config', 'eslint@^8'],
    dev: true,
  },
  {
    label: 'eslint',
    packages: ['eslint@latest', '@eslint/js', 'globals', '@massimo-cassandro/eslint-config@latest'],
    dev: true,
  },
  {
    label: 'stylelint',
    packages: [
      '@massimo-cassandro/stylelint-config',
      '@stylistic/stylelint-plugin',
      'stylelint-config-css-modules',
      'stylelint-config-twbs-bootstrap',
      'stylelint',
    ],
    dev: true,
  },
  {
    label: 'create-favicons',
    packages: ['@massimo-cassandro/create-favicons'],
    dev: true,
  },
  {
    label: 'layout-tools',
    packages: ['@massimo-cassandro/layout-tools'],
    dev: true,
  }
];

basic_packages.unshift({
  label: 'basic (updater, eslint, stylelint)',
  packages: basic_packages.filter(i => ['updater', 'eslint', 'stylelint'].indexOf(i.label) !== -1).map(i => i.packages).flat(),
  dev: true,
});


const m_packages = [
  'auto-datatables-bs5',
  'autocomplete',
  'ckeditor-utilities',
  'cookie-consent',
  'js-file-uploader',
  'js-utilities',
  'json-table',
  'modal-alert',
  'scss-utilities',
  'sharing-links',
  'unsplash-page'
].map(item =>({
  label: `@massimo-cassandro/${item}`,
  packages: [`@massimo-cassandro/${item}`],
  dev: false,
}));


const cmds = [
  {
    label: 'Update stylelint config file',
    cmd: 'mv -f .stylelintrc.cjs stylelint.config.cjs'
  },
  // TODO[epic=dev-boilerplate] inserire riferimenti ai record di snippets-list.mjs nei cmds e farli risolvere al momento di scrivere il file snippets

  {
    label: 'Update eslint',
    cmd: 'rm -f .eslintrc.cjs && npm uninstall @massimo-cassandro/eslint-config eslint ' +
      '&& npm i -D eslint@latest @eslint/js globals @massimo-cassandro/eslint-config@latest'
  }
];


export {basic_packages, std_packages, m_packages, cmds};
