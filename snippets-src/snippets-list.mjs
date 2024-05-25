const basic_packages = [
  {
    id: 'updater',
    label: 'updater',
    packages: [
      '@massimo-cassandro/dev-updater'
    ],
    dev: true,
  },
  {
    id: 'eslint@8',
    label: 'eslint@8',
    packages: ['eslint@^8', ['@massimo-cassandro/eslint-config@^1']],
    dev: true,
  },
  {
    id: 'eslint',
    label: 'eslint',
    packages: ['eslint@latest', '@eslint/js', 'globals', ['@massimo-cassandro/eslint-config@latest']],
    dev: true,
  },
  {
    id: 'stylelint',
    label: 'stylelint',
    packages: [
      [
        '@stylistic/stylelint-plugin',
        'stylelint-config-css-modules',
        'stylelint-config-twbs-bootstrap',
        'stylelint'
      ],
      '@massimo-cassandro/stylelint-config',
    ],
    dev: true,
  },
  {
    id: 'create-favicons',
    label: 'create-favicons',
    packages: ['@massimo-cassandro/create-favicons'],
    dev: true,
  },
  {
    id: 'layout-tools',
    label: 'layout-tools',
    packages: ['@massimo-cassandro/layout-tools'],
    dev: true,
  }
];

basic_packages.unshift({
  id: 'basic',
  label: 'basic (updater, eslint, stylelint)',
  packages: basic_packages.filter(i => ['updater', 'eslint', 'stylelint'].indexOf(i.id) !== -1).map(i => i.packages).flat(),
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
  id: `@massimo-cassandro/${item}`,
  label: `@massimo-cassandro/${item}`,
  packages: [`@massimo-cassandro/${item}`],
  dev: false,
}));


const std_packages = [
  {
    id: 'rollup',
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
    id: 'rollup-plugin-string-html',
    label: 'rollup-plugin-string-html',
    packages: ['rollup-plugin-string-html'],
    dev: true,
  },

  // 'npm i --save-dev rollup-plugin-minify-html-template-literals',

  {
    id: 'sass',
    label: 'sass cli',
    packages: ['sass'],
    dev: true,
  },
  {
    id: 'postcss',
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
  //   id: 'postcss_cli',
  //   label: 'postcss cli',
  //   packages: ['postcss-cli'],
  //   dev: true
  // },
  {
    id: 'postcss-banner',
    label: 'postcss-banner',
    packages: ['postcss-banner'],
    dev: true
  },

  {
    id: 'bootstrap',
    label: 'bootstrap',
    packages: ['bootstrap'],
    dev: false
  },
  {
    id: 'gulp_icone',
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
    id: 'gulp_wrap',
    label: 'gulp-wrap (aggiunta per icone react)',
    packages: ['gulp-wrap'],
    dev: true
  },
  {
    id: 'prismjs',
    label: 'prismjs',
    packages: ['prismjs'],
    dev: false,
  },
  {
    id: 'normalize',
    label: 'normalize.css',
    packages: ['normalize.css'],
    dev: false,
  },
  {
    id: 'open-props',
    label: 'open-props',
    packages: ['open-props', 'postcss-jit-props'],
    dev: false,
  },
  {
    id: 'react',
    label: 'react',
    packages: [
      [
        '@babel/preset-react',
        'babel-plugin-transform-react-remove-prop-types',
        'classnames',
        'dotenv-webpack',
        'eslint-config-react-app'
      ],
      [
        'nanoid',
        'prop-types'
      ],
      'react-dom',
      'react',
    ],
    dev: true,
  },
  {
    id: 'styled-components',
    label: 'styled-components',
    packages: [
      'babel-plugin-styled-components',
      'styled-components'
    ],
    dev: true,
  },
  {
    id: 'react-html-comment',
    label: 'react-html-comment',
    packages: ['react-html-comment'],
    dev: true,
  },
  {
    id: 'html-react-parser',
    label: 'html-react-parser',
    packages: ['html-react-parser'],
    dev: true,
  },
  {
    id: 'webpack',
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
      [
        'webpack-cli',
        'webpack-dev-server',
        'webpack-manifest-plugin',
        'webpack-remove-empty-scripts',
        'webpack'
      ]
    ],
    dev: true
  },
  {
    id: 'typescript',
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


const cmds = [
  {
    label: 'Update stylelint config file',
    cmd: 'mv -f .stylelintrc.cjs stylelint.config.cjs'
  },
  // TODO[epic=dev-boilerplate] inserire riferimenti ai record di snippets-list.mjs nei cmds e farli risolvere al momento di scrivere il file snippets

  {
    label: 'Update eslint',
    cmd: 'rm -f .eslintrc.cjs && npm uninstall @massimo-cassandro/eslint-config eslint',
    packages: ['eslint'],
    addConfigFile: ['eslint.config.mjs']
  },
  {
    label: 'editorconfig',
    addConfigFile: ['_editorconfig']
  },

  // {
  //   label: 'eslint + stylelint + config files',
  //   packages: ['eslint', 'stylelint'],
  //   addConfigFile: ['eslint.config.mjs', 'stylelint.config.cjs']
  // },

  // {
  //   label: 'rollup + config files',
  //   packages: ['rollup base'],
  //   addConfigFile: ['rollup.config.mjs']
  // },

  // {
  //   label: 'postcss + config files',
  //   packages: ['postcss + autoprefixer + purgecss (webpack)'],
  //   addConfigFile: ['postcss.config.cjs']
  // }
];


export {basic_packages, std_packages, m_packages, cmds};
