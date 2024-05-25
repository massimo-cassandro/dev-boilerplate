# Personal boilerplate

## Snippets

### Base
----------------------------------------
#### basic (updater, eslint, stylelint)
npm i -D @massimo-cassandro/dev-updater eslint@latest @eslint/js globals && npm i -D @massimo-cassandro/eslint-config@latest && npm i -D @stylistic/stylelint-plugin stylelint-config-css-modules stylelint-config-twbs-bootstrap stylelint @massimo-cassandro/stylelint-config

#### updater
npm i -D @massimo-cassandro/dev-updater

#### eslint@8
npm i -D eslint@^8 && npm i -D @massimo-cassandro/eslint-config

#### eslint
npm i -D eslint@latest @eslint/js globals && npm i -D @massimo-cassandro/eslint-config@latest

#### stylelint
npm i -D @stylistic/stylelint-plugin stylelint-config-css-modules stylelint-config-twbs-bootstrap stylelint @massimo-cassandro/stylelint-config && npm i -D @massimo-cassandro/stylelint-config

#### create-favicons
npm i -D @massimo-cassandro/create-favicons

#### layout-tools
npm i -D @massimo-cassandro/layout-tools



### Standard
----------------------------------------
#### bootstrap
npm i -S bootstrap

#### gulp per icone
npm i -D gulp@latest gulp-concat gulp-dom gulp-flatmap gulp-inject-string gulp-jsbeautifier gulp-rename gulp-replace gulp-svgmin gulp-svgstore

#### gulp-wrap (aggiunta per icone react)
npm i -D gulp-wrap

#### html-react-parser
npm i -D html-react-parser

#### normalize.css
npm i -S normalize.css

#### open-props
npm i -S open-props postcss-jit-props

#### postcss + autoprefixer + purgecss (webpack)
npm i -D postcss @fullhuman/postcss-purgecss autoprefixer

#### postcss-banner
npm i -D postcss-banner

#### prismjs
npm i -S prismjs

#### react
npm i -D @babel/preset-react babel-plugin-transform-react-remove-prop-types classnames dotenv-webpack eslint-config-react-app && npm i -D nanoid prop-types && npm i -D react-dom react

#### react-html-comment
npm i -D react-html-comment

#### rollup base
npm i -D rollup@latest @rollup/plugin-terser @rollup/plugin-node-resolve @rollup/plugin-json @rollup/plugin-image @rollup/plugin-replace @rollup/plugin-commonjs

#### rollup-plugin-string-html
npm i -D rollup-plugin-string-html

#### sass cli
npm i -D sass

#### styled-components
npm i -D babel-plugin-styled-components styled-components

#### typescript per react/webpack
npm i -D @types/react-dom @types/react ts-loader typescript-plugin-css-modules typescript

#### webpack
npm i -D @babel/core @babel/preset-env babel-loader copy-webpack-plugin css-loader css-minimizer-webpack-plugin dotenv-webpack file-loader html-loader html-webpack-plugin mini-css-extract-plugin postcss-loader postcss-preset-env sass-loader style-loader terser-webpack-plugin && npm i -D webpack-cli webpack-dev-server webpack-manifest-plugin webpack-remove-empty-scripts webpack



### @m
----------------------------------------
#### @massimo-cassandro/auto-datatables-bs5
npm i -S @massimo-cassandro/auto-datatables-bs5

#### @massimo-cassandro/autocomplete
npm i -S @massimo-cassandro/autocomplete

#### @massimo-cassandro/ckeditor-utilities
npm i -S @massimo-cassandro/ckeditor-utilities

#### @massimo-cassandro/cookie-consent
npm i -S @massimo-cassandro/cookie-consent

#### @massimo-cassandro/js-file-uploader
npm i -S @massimo-cassandro/js-file-uploader

#### @massimo-cassandro/js-utilities
npm i -S @massimo-cassandro/js-utilities

#### @massimo-cassandro/json-table
npm i -S @massimo-cassandro/json-table

#### @massimo-cassandro/modal-alert
npm i -S @massimo-cassandro/modal-alert

#### @massimo-cassandro/scss-utilities
npm i -S @massimo-cassandro/scss-utilities

#### @massimo-cassandro/sharing-links
npm i -S @massimo-cassandro/sharing-links

#### @massimo-cassandro/unsplash-page
npm i -S @massimo-cassandro/unsplash-page



### Cmds
----------------------------------------
#### Update stylelint config file
mv -f .stylelintrc.cjs stylelint.config.cjs

#### Update eslint
rm -f .eslintrc.cjs && npm uninstall @massimo-cassandro/eslint-config eslint && npm i -D eslint@latest @eslint/js globals && npm i -D @massimo-cassandro/eslint-config@latest && echo "import eslint_config from '@massimo-cassandro/eslint-config';\n\nexport default [\n  ...eslint_config,\n  // {\n  //   files: ['src/**/*.js'],\n  //   ignores: [\n  //     'dist/',\n  //     'build/',\n  //     '**/vendor/'\n  //   ],\n  // }\n];\n" > eslint.config.mjs

#### editorconfig
echo "# https://editorconfig.org\n\n# top-most EditorConfig file\nroot = true\n\n[*]\ncharset = utf-8\nend_of_line = lf\nindent_size = 2\nindent_style = space\ninsert_final_newline = true\ntrim_trailing_whitespace = true\n\n[*.md]\nmax_line_length = off\ntrim_trailing_whitespace = false\n\n[*.{yml,yaml}]\nindent_size = 4\n" > .editorconfig
