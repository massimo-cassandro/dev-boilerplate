# Setup snippets

## basic (dev-updater, eslint 9, stylelint)

* <https://github.com/massimo-cassandro/dev-updater>

* `"UPD-version": "npx update-version  # --config=./dev-utilities.config.mjs",`
* `"upd@m": "npx upd@m",`

## basic eslint 8 (dev-updater, eslint 8, stylelint)

* <https://github.com/massimo-cassandro/dev-updater>

* `"UPD-version": "npx update-version  # --config=./dev-utilities.config.mjs",`
* `"upd@m": "npx upd@m",`

## Crea .browserslistrc

## Crea .editorconfig

## Crea .gitignore

## Local servers

* `"python server": "python3 -m http.server 8000 # --directory __dirname__ # 8000 = default port",`
* `"php server": "php -S localhost:8000 # -t root_dir/",`
* `"symfony local server": "symfony serve -d",`

## openProps + postcss + config

## postcss + config

## rollup + config

* `"rollup": "npx rollup --config ./config/rollup.config.mjs --watch",`

## stylelint + config

## webpack + postcss

* `"webpack DEV": "NODE_ENV=development webpack serve --config ./webpack-config.cjs",`
* `"webpack PROD": "NODE_ENV=production webpack --config ./webpack-config.cjs",`

## auto-datatables-bs5

* <https://github.com/massimo-cassandro/auto-datatables-bs5>

## autocomplete

* <https://github.com/massimo-cassandro/autocomplete>

## bootstrap

## ckeditor-utilities

* <https://github.com/massimo-cassandro/ckeditor-utilities>

## cookie-consent

* <https://github.com/massimo-cassandro/cookie-consent>

## create-favicons

* <https://github.com/massimo-cassandro/create-favicons>

* `npx create-favicons init`
* `npx create-favicons --dir=./`

## dev-updater

* <https://github.com/massimo-cassandro/dev-updater>

* `"UPD-version": "npx update-version  # --config=./dev-utilities.config.mjs",`
* `"upd@m": "npx upd@m",`

## Downgrade eslint 9 → 8

```bash
rm -f eslint.config.mjs
```


## eslint 8

## eslint 9

## gulp per icone

* `"build_icons": "cd ./path/to/icone && gulp",`

## gulp-jsbeautifier (aggiunta per icone react)

## gulp-wrap (aggiunta per icone react)

## html-react-parser

## js-file-uploader

* <https://massimo-cassandro.github.io/js-file-uploader/demo/>
* <https://github.com/massimo-cassandro/js-file-uploader>

## js-utilities

* <https://github.com/massimo-cassandro/js-utilities>

## json-table

* <https://github.com/massimo-cassandro/json-table>

## layout-tools

* <https://github.com/massimo-cassandro/layout-tools>

## modal-alert

* <https://github.com/massimo-cassandro/modal-alert>

## normalize.css

## open-props + postcss-jit-props + postcss-import

## open-props + postcss-jit-props + postcss-import (per importare il css da node_modules)

## postcss + autoprefixer + purgecss (webpack)

## postcss cli

* Per creare file css di test.
* *postcss-import* è necessario per risolvere le importazioni da cli (con webpack non serve, l’operazione è svolta da *css-loader*)

* `[npx] postcss ./src/source.css -o ./test/test.css --no-map --verbose --env development --config ./ --use postcss-import --watch`

## postcss-banner

## prismjs

## react (NB: richiede eslint 8)

## React utilities

## react-html-comment

## rollup base

* `"rollup": "npx rollup --config ./config/rollup.config.mjs --watch",`

## rollup-plugin-string-html

## sass cli

## scss-utilities

* <https://github.com/massimo-cassandro/scss-utilities>

## sharing-links

* <https://github.com/massimo-cassandro/sharing-links>

## solid-js (webpack)

## styled-components

## stylelint

## twig-utilities

* <https://github.com/massimo-cassandro/twig-utilities>

## typescript per react/webpack

## unsplash-page

* <https://github.com/massimo-cassandro/unsplash-page>

## Update eslint 8 → 9

```bash
rm -f .eslintrc.cjs
```


## Update stylelint config file

```bash
mv -f .stylelintrc.cjs stylelint.config.cjs
```
