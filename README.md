# Setup snippets


## Install & config

### basic (dev-updater, eslint 9, stylelint)
```bash
npm i -D @massimo-cassandro/dev-updater && npm i -D eslint@^9 @eslint/js globals && npm i -D @massimo-cassandro/eslint-config@^2 && npm i -D @stylistic/stylelint-plugin stylelint-config-css-modules stylelint-config-twbs-bootstrap stylelint && npm i -D @massimo-cassandro/stylelint-config && echo "import eslint_config from '@massimo-cassandro/eslint-config';\n\nexport default [\n  ...eslint_config,\n  // {\n  //   files: ['src/**/*.js'],\n  //   ignores: [\n  //     'dist/',\n  //     'build/',\n  //     '**/vendor/'\n  //   ],\n  // }\n];\n" > eslint.config.mjs && echo "/* eslint-env node */\n\nmodule.exports = {\n  extends: ['@massimo-cassandro/stylelint-config'],\n  ignoreFiles: ['node_modules/**/*.{css,scss}', 'dist/**/*.css', 'build/**/*.css', 'public/**/*.css', 'test/**/*.css'],\n\n  // tailwind\n  // 'rules': {\n  //   'value-keyword-case': null,\n  //   '@stylistic/number-no-trailing-zeros': null\n  // }\n};\n" > stylelint.config.cjs
```


### basic eslint 8 (dev-updater, eslint 8, stylelint)
```bash
npm i -D @massimo-cassandro/dev-updater && npm i -D eslint@^8 && npm i -D @massimo-cassandro/eslint-config@^1 && npm i -D @stylistic/stylelint-plugin stylelint-config-css-modules stylelint-config-twbs-bootstrap stylelint && npm i -D @massimo-cassandro/stylelint-config && echo "/* eslint-env node */\n\nmodule.exports = {\n  extends: [/* 'react-app',  */'@massimo-cassandro/eslint-config'], \n  ignorePatterns: []\n};" > .eslintrc.cjs && echo "/* eslint-env node */\n\nmodule.exports = {\n  extends: ['@massimo-cassandro/stylelint-config'],\n  ignoreFiles: ['node_modules/**/*.{css,scss}', 'dist/**/*.css', 'build/**/*.css', 'public/**/*.css', 'test/**/*.css'],\n\n  // tailwind\n  // 'rules': {\n  //   'value-keyword-case': null,\n  //   '@stylistic/number-no-trailing-zeros': null\n  // }\n};\n" > stylelint.config.cjs
```


### Crea .editorconfig
```bash
echo "# https://editorconfig.org\n\n# top-most EditorConfig file\nroot = true\n\n[*]\ncharset = utf-8\nend_of_line = lf\nindent_size = 2\nindent_style = space\ninsert_final_newline = true\ntrim_trailing_whitespace = true\n\n[*.md]\nmax_line_length = off\ntrim_trailing_whitespace = false\n\n[*.{yml,yaml}]\nindent_size = 4\n" > .editorconfig
```


### Crea .gitignore
```bash
echo "*~\n.DS_Store\n**/*.mwb.bak\n**/*.mwb.beforefix\n\nnode_modules\nbower_components\nvendor\npackage-lock.json\ncomposer.lock\n\n.env\n.env.local\n.env.development\n.env.test\n.env.development.local\n.env.test.local\n.env.production.local\n\n*.sass-cache\n/@files-repo\n/@db-backup\n/pswd\n/**/.vscode/\n*.code-workspace\n*.sketch\n*.ai\n*.psd\n/progetto\n*TODO*.md\n\n\n" > .gitignore
```


### Crea .browserslistrc
```bash
echo "# https://github.com/browserslist/browserslist\n# https://browsersl.ist/\n\nlast 2 major versions\nsince 2023\nnot dead\n\nnot op_mini all\nnot op_mob > 0\nnot and_uc > 0\nnot and_qq > 0\nnot baidu > 0\nnot kaios > 0\nnot android > 0\nnot ie > 0\nnot ie_mob > 0\nnot bb > 0\n\nsafari >= 16\nios_saf >= 16\nedge >= 109\nchrome >= 109\nfirefox esr\nopera >= 95\nsamsung >= 20\n\n> 3% in IT\n" > .browserslistrc
```


### stylelint + config
```bash
npm i -D @stylistic/stylelint-plugin stylelint-config-css-modules stylelint-config-twbs-bootstrap stylelint && npm i -D @massimo-cassandro/stylelint-config && echo "/* eslint-env node */\n\nmodule.exports = {\n  extends: ['@massimo-cassandro/stylelint-config'],\n  ignoreFiles: ['node_modules/**/*.{css,scss}', 'dist/**/*.css', 'build/**/*.css', 'public/**/*.css', 'test/**/*.css'],\n\n  // tailwind\n  // 'rules': {\n  //   'value-keyword-case': null,\n  //   '@stylistic/number-no-trailing-zeros': null\n  // }\n};\n" > stylelint.config.cjs
```


### eslint9 + config
```bash
npm i -D eslint@^9 @eslint/js globals && npm i -D @massimo-cassandro/eslint-config@^2 && echo "import eslint_config from '@massimo-cassandro/eslint-config';\n\nexport default [\n  ...eslint_config,\n  // {\n  //   files: ['src/**/*.js'],\n  //   ignores: [\n  //     'dist/',\n  //     'build/',\n  //     '**/vendor/'\n  //   ],\n  // }\n];\n" > eslint.config.mjs
```


### openProps + postcss + config
```bash
npm i -S open-props && npm i -D postcss-jit-props &&  && npm i -D postcss @fullhuman/postcss-purgecss autoprefixer postcss-custom-media postcss-mixins @csstools/postcss-global-data postcss-simple-vars postcss-extend && echo "/* eslint-env node */\n\n// const path = require('path');\n\n// https://github.com/cssnano/cssnano\n// https://purgecss.com/configuration.html\n// https://github.com/GoogleChromeLabs/postcss-jit-props\n// https://github.com/argyleink/open-props\n// https://github.com/postcss/postcss-mixins\n// https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-media\n// https://github.com/postcss/postcss-simple-vars\n\nconst isDevelopment = process.env.NODE_ENV === 'development';\n\nconst postcssConfig = {\n  plugins: [\n\n    require('@csstools/postcss-global-data')({\n      files: [\n        './node_modules/open-props/media.min.css',\n        './frontend/css/custom-properties.css',\n      ]\n    }),\n    require('postcss-extend'),\n    require('postcss-mixins')({\n      mixinsDir: path.resolve(__dirname, './src/css')\n    }),\n    require('postcss-simple-vars'),\n\n    // require('postcss-jit-props')(require('open-props')),\n    require('postcss-jit-props')({\n      ...require('open-props'),\n      custom_selector: ':where(html)'\n    }),\n\n    require('autoprefixer'),\n    \n    require('postcss-custom-media')({\n      preserve: isDevelopment\n    }),\n\n    require('@fullhuman/postcss-purgecss')({\n      content: [\n        // './node_modules/@massimo-cassandro/**/.js',\n        './templates/**/*.html.twig',\n        './public/**/*.html',\n        './src/**/*.{js,jsx}',\n      ],\n      // css: ['./src/css/custom-properties-figma.css'],\n      // output: ['./AppBundle/Resources/public/css/'],\n      // variables: true,\n      // fontFace: true,\n      // keyframes: true,\n      safelist: {\n        standard: [/:focus$/],\n        // deep: [],\n        // greedy: [/yellow$/]\n      }\n    }),\n\n  ]\n};\n\nif (process.env.NODE_ENV === 'production') {\n  postcssConfig.plugins.push(\n    require('cssnano')({\n      // use the safe preset so that it doesn't\n      // mutate or remove code from our css\n      preset: 'default',\n    })\n  );\n}\n\nmodule.exports = postcssConfig;\n\n" > postcss.config.cjs
```


### rollup + config
```bash
npm i -D rollup@latest @rollup/plugin-terser @rollup/plugin-node-resolve @rollup/plugin-json @rollup/plugin-image @rollup/plugin-replace @rollup/plugin-commonjs && echo "import terser  from '@rollup/plugin-terser';\nimport fs from 'fs';\nimport node_resolve from '@rollup/plugin-node-resolve';\nimport commonjs from '@rollup/plugin-commonjs';\n\n// https://github.com/hyhappy/rollup-plugin-string-html\n// import htmlString from 'rollup-plugin-string-html';\n\n// https://github.com/exuanbo/rollup-plugin-minify-html-template-literals\n// https://github.com/asyncLiz/minify-html-literals\n// https://github.com/kangax/html-minifier#options-quick-reference\n// import minifyHTML from 'rollup-plugin-minify-html-template-literals';\n\nimport p from '../package.json'; // assert { type: 'json' };\n\nconst terserOptions = {\n    compress: {\n      passes: 2\n    }\n  },\n  anno = new Date().getFullYear(),\n  dirs = [\n    {source_dir: './front-end/js', output_dir: './AppBundle/Resources/public/js'}\n  ];\n\nlet config = [];\n\n// lettura subdir apps e aggiunta a `dirs`\nfs.readdirSync('./front-end/apps').forEach(item => {\n  let stats = fs.statSync(`./front-end/apps/${item}`); // stats.isFile() / stats.isDirectory()\n  if(stats.isDirectory()) {\n    dirs.push({\n      source_dir: `./front-end/apps/${item}`,\n      output_dir: `./AppBundle/Resources/public/apps/${item}`\n    });\n  }\n});\n\ndirs.forEach(dir => {\n\n  fs.readdirSync(dir.source_dir)\n    .filter(f => /\.js$/.test(f))\n    .filter(f => /^[^_]/.test(f)) // ignore files starting with _\n    .forEach(file => {\n\n      let format = 'iife',\n        name = null;\n\n      if(/(-umd\.js)$/.test(file)) {\n        format = 'umd';\n        name = file.replace('-umd.js', '').replace(/-/g, '_');\n      }\n\n      config.push(\n        {\n          // preserveEntrySignatures: false,\n          input: `${dir.source_dir}/${file}`,\n          plugins: [\n            // deve essere il primo\n            // minifyHTML({\n            //   options: {\n            //     minifyOptions: {\n            //       html5: true,\n            //       collapseWhitespace: true,\n            //       collapseInlineTagWhitespace: true,\n            //       conservativeCollapse: true,\n            //       decodeEntities: true\n            //     },\n            //     shouldMinify: () => true\n            //   },\n            // }),\n            node_resolve(),\n            commonjs(),\n            terser(terserOptions),\n          ],\n          output: [{\n            file: `${dir.output_dir}/${file.replace('.js', '-min.js')}`,\n            format: format,\n            sourcemap: true,\n            name: name,\n            banner: `/*! xxxx v.${p.version} - Massimo Cassandro ${anno} */`,\n            // footer: `//! Released on ${new Date().toLocaleString('it-IT', { year: 'numeric',  month: 'short', day: '2-digit', hour12: false, hour:'2-digit', minute:'2-digit' })}`\n          }]\n        }\n      );\n\n    });\n});\n\nexport default config;\n\n\n// versione statica\n\n// export default [\n//   {\n//     input: 'input.js',\n//     plugins: [\n//       node_resolve(),\n//       // commonjs(),\n//       terser({ compress: { passes: 2 } }),\n//     ],\n//     output: [\n//       {\n//         file: 'output.min.js',\n//         format: 'iife',\n//         sourcemap: true,\n\n//         banner: `/*! xxxx v.${p.version} - Massimo Cassandro ${anno} */`,\n//         // footer: `//! Released on ${new Date().toLocaleString('it-IT', { year: 'numeric',  month: 'short', day: '2-digit', hour12: false, hour:'2-digit', minute:'2-digit' })}`\n//       }\n//     ]\n//   },\n//   ...\n// ];\n" > rollup.config.mjs
```


### postcss + config
```bash
npm i -D postcss @fullhuman/postcss-purgecss autoprefixer postcss-custom-media postcss-mixins @csstools/postcss-global-data postcss-simple-vars postcss-extend && echo "/* eslint-env node */\n\n// const path = require('path');\n\n// https://github.com/cssnano/cssnano\n// https://purgecss.com/configuration.html\n// https://github.com/GoogleChromeLabs/postcss-jit-props\n// https://github.com/argyleink/open-props\n// https://github.com/postcss/postcss-mixins\n// https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-media\n// https://github.com/postcss/postcss-simple-vars\n\nconst isDevelopment = process.env.NODE_ENV === 'development';\n\nconst postcssConfig = {\n  plugins: [\n\n    require('@csstools/postcss-global-data')({\n      files: [\n        './node_modules/open-props/media.min.css',\n        './frontend/css/custom-properties.css',\n      ]\n    }),\n    require('postcss-extend'),\n    require('postcss-mixins')({\n      mixinsDir: path.resolve(__dirname, './src/css')\n    }),\n    require('postcss-simple-vars'),\n\n    // require('postcss-jit-props')(require('open-props')),\n    require('postcss-jit-props')({\n      ...require('open-props'),\n      custom_selector: ':where(html)'\n    }),\n\n    require('autoprefixer'),\n    \n    require('postcss-custom-media')({\n      preserve: isDevelopment\n    }),\n\n    require('@fullhuman/postcss-purgecss')({\n      content: [\n        // './node_modules/@massimo-cassandro/**/.js',\n        './templates/**/*.html.twig',\n        './public/**/*.html',\n        './src/**/*.{js,jsx}',\n      ],\n      // css: ['./src/css/custom-properties-figma.css'],\n      // output: ['./AppBundle/Resources/public/css/'],\n      // variables: true,\n      // fontFace: true,\n      // keyframes: true,\n      safelist: {\n        standard: [/:focus$/],\n        // deep: [],\n        // greedy: [/yellow$/]\n      }\n    }),\n\n  ]\n};\n\nif (process.env.NODE_ENV === 'production') {\n  postcssConfig.plugins.push(\n    require('cssnano')({\n      // use the safe preset so that it doesn't\n      // mutate or remove code from our css\n      preset: 'default',\n    })\n  );\n}\n\nmodule.exports = postcssConfig;\n\n" > postcss.config.cjs
```


### Local servers

* `"python server": "python3 -m http.server 8000 # --directory __dirname__ # 8000 = default port",`
* `"php server": "php -S localhost:8000 # -t root_dir/",`
* `"symfony local server": "symfony serve -d",`



### Update stylelint config file
```bash
mv -f .stylelintrc.cjs stylelint.config.cjs
```


### Update eslint 8 → 9
```bash
rm -f .eslintrc.cjs && npm uninstall eslint && npm uninstall @massimo-cassandro/eslint-config && npm i -D eslint@^9 @eslint/js globals && npm i -D @massimo-cassandro/eslint-config@^2 && echo "import eslint_config from '@massimo-cassandro/eslint-config';\n\nexport default [\n  ...eslint_config,\n  // {\n  //   files: ['src/**/*.js'],\n  //   ignores: [\n  //     'dist/',\n  //     'build/',\n  //     '**/vendor/'\n  //   ],\n  // }\n];\n" > eslint.config.mjs
```


### Downgrade eslint 9 → 8
```bash
rm -f eslint.config.mjs && npm uninstall eslint @eslint/js globals && npm uninstall @massimo-cassandro/eslint-config && npm i -D eslint@^8 && npm i -D @massimo-cassandro/eslint-config@^1 && echo "/* eslint-env node */\n\nmodule.exports = {\n  extends: [/* 'react-app',  */'@massimo-cassandro/eslint-config'], \n  ignorePatterns: []\n};" > .eslintrc.cjs
```
## Packages
### bootstrap
```bash
npm i -S bootstrap
```
### eslint 8
```bash
npm i -D eslint@^8 && npm i -D @massimo-cassandro/eslint-config@^1
```
### eslint 9
```bash
npm i -D eslint@^9 @eslint/js globals && npm i -D @massimo-cassandro/eslint-config@^2
```
### gulp per icone

* package.json script: `"build_icons": "cd ./path/to/icone && gulp",`

```bash
npm i -D gulp@latest gulp-concat gulp-dom gulp-flatmap gulp-inject-string gulp-rename gulp-replace gulp-svgmin gulp-svgstore gulp-wrap
```
### gulp-jsbeautifier (aggiunta per icone react)
```bash
npm i -D gulp-jsbeautifier
```
### gulp-wrap (aggiunta per icone react)
```bash
npm i -D gulp-wrap
```
### html-react-parser
```bash
npm i -D html-react-parser
```
### normalize.css
```bash
npm i -S normalize.css
```
### open-props + postcss-jit-props + postcss-import
```bash
npm i -S open-props && npm i -D postcss-jit-props
```
### open-props + postcss-jit-props + postcss-import (per importare il css da node_modules)
```bash
npm i -S open-props && npm i -D postcss-jit-props postcss-import
```
### postcss + autoprefixer + purgecss (webpack)
```bash
npm i -D postcss @fullhuman/postcss-purgecss autoprefixer postcss-custom-media postcss-mixins @csstools/postcss-global-data postcss-simple-vars postcss-extend
```
### postcss cli

* Per creare file css di test.
* *postcss-import* è necessario per risolvere le importazioni da cli (con webpack non serve, l’operazione è svolta da *css-loader*)
* `[npx] postcss ./src/source.css -o ./test/test.css --no-map --verbose --env development --config ./ --use postcss-import --watch`

```bash
npm i -D postcss-cli postcss-import
```
### postcss-banner
```bash
npm i -D postcss-banner
```
### prismjs
```bash
npm i -S prismjs
```
### react (NB: richiede eslint 8)
```bash
npm i -D @babel/preset-react babel-plugin-transform-react-remove-prop-types eslint-config-react-app && npm i -D classnames nanoid prop-types && npm i -D react-dom react
```
### React utilities
```bash
npm i -D classnames nanoid prop-types
```
### react-html-comment
```bash
npm i -D react-html-comment
```
### rollup base

* `"rollup": "npx rollup --config ./config/rollup.config.mjs --watch",`

```bash
npm i -D rollup@latest @rollup/plugin-terser @rollup/plugin-node-resolve @rollup/plugin-json @rollup/plugin-image @rollup/plugin-replace @rollup/plugin-commonjs
```
### rollup-plugin-string-html
```bash
npm i -D rollup-plugin-string-html
```
### sass cli
```bash
npm i -D sass
```
### solid-js (webpack)
```bash
npm i -D solid-js babel-loader @babel/preset-env @babel/plugin-syntax-jsx babel-preset-solid
```
### styled-components
```bash
npm i -D babel-plugin-styled-components styled-components
```
### stylelint
```bash
npm i -D @stylistic/stylelint-plugin stylelint-config-css-modules stylelint-config-twbs-bootstrap stylelint && npm i -D @massimo-cassandro/stylelint-config
```
### typescript per react/webpack
```bash
npm i -D @types/react-dom @types/react ts-loader typescript-plugin-css-modules typescript
```
### webpack

* `"webpack DEV": "NODE_ENV=development webpack serve --config ./webpack-config.cjs"`,
* `"webpack PROD": "NODE_ENV=production webpack --config ./webpack-config.cjs",`

```bash
npm i -D @babel/core @babel/preset-env babel-loader copy-webpack-plugin css-loader css-minimizer-webpack-plugin dotenv-webpack file-loader html-loader html-webpack-plugin mini-css-extract-plugin postcss-loader postcss-preset-env sass-loader style-loader terser-webpack-plugin && npm i -D webpack-cli webpack-dev-server webpack-manifest-plugin webpack-remove-empty-scripts webpack
```


## @m
### @massimo-cassandro/auto-datatables-bs5
```bash
npm i -S @massimo-cassandro/auto-datatables-bs5
```
### @massimo-cassandro/autocomplete
```bash
npm i -S @massimo-cassandro/autocomplete
```
### @massimo-cassandro/ckeditor-utilities
```bash
npm i -S @massimo-cassandro/ckeditor-utilities
```
### @massimo-cassandro/cookie-consent
```bash
npm i -S @massimo-cassandro/cookie-consent
```
### @massimo-cassandro/create-favicons

* <https://github.com/massimo-cassandro/create-favicons?tab=readme-ov-file#create-favicons>
* `npx create-favicons init`
* `npx create-favicons --dir=./`

```bash
npm i -D @massimo-cassandro/create-favicons
```
### @massimo-cassandro/dev-updater

* <https://github.com/massimo-cassandro/dev-updater?tab=readme-ov-file#dev-updaters>
* `"UPD-version": "npx update-version  --config=./dev-utilities.config.mjs",`
* `"UPD-version (parametri di default)": "npx update-version # --config=./dev-utilities.config.mjs",`
* `"upd@m": "npx upd@m",`

```bash
npm i -D @massimo-cassandro/dev-updater
```
### @massimo-cassandro/js-file-uploader

* <https://github.com/massimo-cassandro/js-file-uploader?tab=readme-ov-file#fileuploader>
* <https://massimo-cassandro.github.io/js-file-uploader/demo/>

```bash
npm i -S @massimo-cassandro/js-file-uploader
```
### @massimo-cassandro/js-utilities
```bash
npm i -S @massimo-cassandro/js-utilities
```
### @massimo-cassandro/json-table
```bash
npm i -S @massimo-cassandro/json-table
```
### @massimo-cassandro/layout-tools
```bash
npm i -D @massimo-cassandro/layout-tools
```
### @massimo-cassandro/modal-alert
```bash
npm i -S @massimo-cassandro/modal-alert
```
### @massimo-cassandro/scss-utilities
```bash
npm i -S @massimo-cassandro/scss-utilities
```
### @massimo-cassandro/sharing-links
```bash
npm i -S @massimo-cassandro/sharing-links
```
### @massimo-cassandro/twig-utilities
```bash
npm i -S @massimo-cassandro/twig-utilities
```
### @massimo-cassandro/unsplash-page
```bash
npm i -S @massimo-cassandro/unsplash-page
```
