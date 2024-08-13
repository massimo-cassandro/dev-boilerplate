
const m_packages = [
  {p: 'auto-datatables-bs5', dev: false},
  {p: 'autocomplete', dev: false},
  {p: 'ckeditor-utilities', dev: false},
  {p: 'cookie-consent', dev: false},
  {p: 'create-favicons', dev: true},
  {p: 'dev-updater', dev: true},
  {p: 'js-file-uploader', dev: false},
  {p: 'js-utilities', dev: false},
  {p: 'json-table', dev: false},
  {p: 'layout-tools', dev: true},
  {p: 'modal-alert', dev: false},
  {p: 'scss-utilities', dev: false},
  {p: 'sharing-links', dev: false},
  {p: 'unsplash-page', dev: false},
  {p: 'twig-utilities', dev: false},
].map(item =>{

  const p ={
    id: `@massimo-cassandro/${item.p}`,
    label: `@massimo-cassandro/${item.p}`,
  };

  if(item.dev) {
    p.dev_packages = [`@massimo-cassandro/${item.p}`];
  } else {
    p.packages = [`@massimo-cassandro/${item.p}`];

  }
  return p;
});


// dev_packages e packages devono contenere solo stringhe o solo array di stringhe

const std_packages = [

  {
    id: 'eslint8',
    label: 'eslint 8',
    dev_packages: [['eslint@^8'], ['@massimo-cassandro/eslint-config@^1']],
  },
  {
    id: 'eslint9',
    label: 'eslint 9',
    dev_packages: [['eslint@^9', '@eslint/js', 'globals'], ['@massimo-cassandro/eslint-config@^2']],
  },
  {
    id: 'stylelint',
    label: 'stylelint',
    dev_packages: [
      [
        '@stylistic/stylelint-plugin',
        'stylelint-config-css-modules',
        'stylelint-config-twbs-bootstrap',
        'stylelint'
      ],
      ['@massimo-cassandro/stylelint-config'],
    ],
  },

  {
    id: 'rollup',
    label: 'rollup base',
    dev_packages: [
      'rollup@latest',
      '@rollup/plugin-terser',
      '@rollup/plugin-node-resolve',
      '@rollup/plugin-json',
      '@rollup/plugin-image',
      '@rollup/plugin-replace',
      '@rollup/plugin-commonjs',
    ],
  },
  {
    id: 'rollup-plugin-string-html',
    label: 'rollup-plugin-string-html',
    dev_packages: ['rollup-plugin-string-html'],
  },

  // 'npm i --save-dev rollup-plugin-minify-html-template-literals',

  {
    id: 'sass',
    label: 'sass cli',
    dev_packages: ['sass'],
  },
  {
    id: 'postcss',
    label: 'postcss + autoprefixer + purgecss (webpack)',
    dev_packages: [
      'postcss',
      '@fullhuman/postcss-purgecss',
      'autoprefixer',
      // 'postcss-csso',
    ],
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
    dev_packages: ['postcss-banner'],
  },

  {
    id: 'bootstrap',
    label: 'bootstrap',
    packages: ['bootstrap'],
  },
  {
    id: 'gulp_icone',
    label: 'gulp per icone',
    dev_packages: [
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
  },
  {
    id: 'gulp_wrap',
    label: 'gulp-wrap (aggiunta per icone react)',
    dev_packages: ['gulp-wrap'],
  },
  {
    id: 'prismjs',
    label: 'prismjs',
    packages: ['prismjs'],
  },
  {
    id: 'normalize',
    label: 'normalize.css',
    packages: ['normalize.css'],
  },
  {
    id: 'open-props',
    label: 'open-props + postcss-jit-props + postcss-import',
    packages: ['open-props'],
    dev_packages: ['postcss-jit-props'],
  },
  {
    id: 'open-props-full',
    label: 'open-props + postcss-jit-props + postcss-import (per importare il css da node_modules)',
    packages: ['open-props'],
    dev_packages: ['postcss-jit-props', 'postcss-import'],
  },

  {
    id: 'react',
    label: 'react (NB: richiede eslint 8)',
    dev_packages: [
      [
        '@babel/preset-react',
        'babel-plugin-transform-react-remove-prop-types',
        'eslint-config-react-app'
      ],
      [
        'classnames',
        'nanoid',
        'prop-types'
      ],
      [
        'react-dom',
        'react'
      ]
    ],
  },

  {
    id: 'react_utilities',
    label: 'React utilities',
    dev_packages: [
      'classnames',
      'nanoid',
      'prop-types'
    ],
  },
  {
    id: 'styled-components',
    label: 'styled-components',
    dev_packages: [
      'babel-plugin-styled-components',
      'styled-components'
    ],
  },
  {
    id: 'react-html-comment',
    label: 'react-html-comment',
    dev_packages: ['react-html-comment'],
  },
  {
    id: 'html-react-parser',
    label: 'html-react-parser',
    dev_packages: ['html-react-parser'],
  },
  {
    id: 'solid-js-webpack',
    label: 'solid-js (webpack)',
    dev_packages: ['solid-js', 'babel-loader', '@babel/preset-env', '@babel/plugin-syntax-jsx', 'babel-preset-solid'],
  },
  {
    id: 'webpack',
    label: 'webpack',
    dev_packages: [
      [
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
        'terser-webpack-plugin'
      ],
      [
        'webpack-cli',
        'webpack-dev-server',
        'webpack-manifest-plugin',
        'webpack-remove-empty-scripts',
        'webpack'
      ]
    ],
  },
  {
    id: 'typescript',
    label: 'typescript per react/webpack',
    dev_packages: [
      '@types/react-dom',
      '@types/react',
      'ts-loader',
      'typescript-plugin-css-modules',
      'typescript'
    ],
  },

];

std_packages.sort((a,b) => a.label < b.label? -1 : (a.label > b.label? 1 : 0));


const cmds = [

  {
    label: 'basic (dev-updater, eslint 9, stylelint)',
    packages: ['@massimo-cassandro/dev-updater', 'eslint9', 'stylelint'],
  },

  {
    label: 'basic eslint 8 (dev-updater, eslint 8, stylelint)',
    packages: ['@massimo-cassandro/dev-updater', 'eslint8', 'stylelint']
  },
  {
    label: 'create-favicon',
    packages: ['@massimo-cassandro/create-favicons'],
  },
  {
    label: 'layout-tools',
    packages: ['@massimo-cassandro/layout-tools'],
  },

  {
    label: 'Crea editorconfig',
    addConfigFile: ['_editorconfig']
  },

  {
    label: 'Crea browserslistrc',
    addConfigFile: ['_browserslistrc']
  },

  {
    label: 'stylelint + config',
    packages: ['stylelint'],
    addConfigFile: ['stylelint.config.cjs']
  },
  {
    label: 'openProps + postcss + config',
    packages: ['open-props','postcss-jit-props', 'postcss'],
    addConfigFile: ['postcss.config.cjs']
  },
  {
    label: 'rollup + config',
    packages: ['rollup'],
    addConfigFile: ['rollup.config.mjs']
  },
  {
    label: 'postcss + config',
    packages: ['postcss'],
    addConfigFile: ['postcss.config.cjs']
  },
  {
    label: 'Update stylelint config file',
    cmd: 'mv -f .stylelintrc.cjs stylelint.config.cjs'
  },
  {
    label: 'Update eslint 8 → 9',
    cmd: 'rm -f .eslintrc.cjs',
    uninstall: ['eslint8'],
    packages: ['eslint9'],
    addConfigFile: ['eslint.config.mjs']
  },
  {
    label: 'Downgrade eslint 9 → 8',
    cmd: 'rm -f eslint.config.mjs',
    uninstall: ['eslint9'],
    packages: ['eslint8'],
    addConfigFile: ['_eslintrc.cjs']
  },
];


export {std_packages, m_packages, cmds};
