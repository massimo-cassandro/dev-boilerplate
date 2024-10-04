# Setup snippets

## .browserslistrc
*.browserslistrc*:

```bash
echo "# https://github.com/browserslist/browserslist\n# https://browsersl.ist/\n\nlast 2 major versions\nsince 2023\nnot dead\n\nnot op_mini all\nnot op_mob > 0\nnot and_uc > 0\nnot and_qq > 0\nnot baidu > 0\nnot kaios > 0\nnot android > 0\nnot ie > 0\nnot ie_mob > 0\nnot bb > 0\n\nsafari >= 16\nios_saf >= 16\nedge >= 109\nchrome >= 109\nfirefox esr\nopera >= 95\nsamsung >= 20\n\n> 3% in IT\n" > .browserslistrc
```



## .editorconfig
*.editorconfig*:

```bash
echo "# https://editorconfig.org\n\n# top-most EditorConfig file\nroot = true\n\n[*]\ncharset = utf-8\nend_of_line = lf\nindent_size = 2\nindent_style = space\ninsert_final_newline = true\ntrim_trailing_whitespace = true\n\n[*.md]\nmax_line_length = off\ntrim_trailing_whitespace = false\n\n[*.{yml,yaml}]\nindent_size = 4\n" > .editorconfig
```



## .gitignore
*.gitignore*:

```bash
echo "*~\n.DS_Store\n**/*.mwb.bak\n**/*.mwb.beforefix\n\nnode_modules\nbower_components\nvendor\npackage-lock.json\ncomposer.lock\n\n.env\n.env.local\n.env.development\n.env.test\n.env.development.local\n.env.test.local\n.env.production.local\n\n*.sass-cache\n/@files-repo\n/@db-backup\n/pswd\n/**/.vscode/\n*.code-workspace\n*.sketch\n*.ai\n*.psd\n/progetto\n*TODO*.md\n\n\n" > .gitignore
```



## dev-updater
* <https://github.com/massimo-cassandro/dev-updater>
* `"UPD-version": "npx update-version  # --config=./dev-utilities.config.mjs",`
* `"upd@m": "npx upd@m",`
```bash
npm i -D @massimo-cassandro/dev-updater
```



## eslint9 (+ uninstall eslint8)
```bash
npm uninstall eslint @massimo-cassandro/eslint-config
```


```bash
npm i -D eslint@^9 @eslint/js globals && npm i -D @massimo-cassandro/eslint-config@^2
```


*eslint.config.mjs*:

```bash
echo "import eslint_config from '@massimo-cassandro/eslint-config';\n\nexport default [\n  ...eslint_config,\n  // {\n  //   files: ['src/**/*.js'],\n  //   ignores: [\n  //     'dist/',\n  //     'build/',\n  //     '**/vendor/'\n  //   ],\n  // }\n];\n" > eslint.config.mjs
```



## Local servers
* `"python server": "python3 -m http.server 8000 # --directory __dirname__ # 8000 = default port",`
* `"php server": "php -S localhost:8000 # -t root_dir/",`
* `"symfony local server": "symfony serve -d",`

## open-props + postcss-jit-props
```bash
npm i -S open-props && npm i -D postcss-jit-props
```



## sass cli
```bash
npm i -D sass
```



## stylelint
* `## upd config file:`
* `mv -f .stylelintrc.cjs stylelint.config.cjs`
* `## uunistall versione prec.:`
* `npm uninstall @massimo-cassandro/stylelint-config stylelint stylelint-config-css-modules stylelint-config-twbs-bootstrap`
```bash
npm i -D @stylistic/stylelint-plugin stylelint-config-css-modules stylelint-config-twbs-bootstrap stylelint && npm i -D @massimo-cassandro/stylelint-config
```


*stylelint.config.cjs*:

```bash
echo "/* eslint-env node */\n\nmodule.exports = {\n  extends: ['@massimo-cassandro/stylelint-config'],\n  ignoreFiles: ['node_modules/**/*.{css,scss}', 'dist/**/*.css', 'build/**/*.css', 'public/**/*.css', 'test/**/*.css'],\n\n  // tailwind\n  // 'rules': {\n  //   'value-keyword-case': null,\n  //   '@stylistic/number-no-trailing-zeros': null\n  // }\n};\n" > stylelint.config.cjs
```



## webpack
* Non include Postcss
* `"webpack DEV": "NODE_ENV=development webpack serve --config ./webpack.config.cjs",`
* `"webpack PROD": "NODE_ENV=production webpack --config ./webpack.config.cjs",`
```bash
npm i -D @babel/core @babel/preset-env babel-loader copy-webpack-plugin css-loader css-minimizer-webpack-plugin dotenv-webpack file-loader html-loader html-webpack-plugin mini-css-extract-plugin postcss-loader postcss-preset-env sass-loader style-loader raw-loader terser-webpack-plugin && npm i -D webpack-cli webpack-dev-server webpack-manifest-plugin webpack-remove-empty-scripts webpack
```


*webpack.config.cjs*:

```bash
echo "/* eslint-env node */\n\nconst webpack = require('webpack');\nconst HtmlWebpackPlugin = require('html-webpack-plugin');\nconst CopyWebpackPlugin = require('copy-webpack-plugin');\nconst MiniCssExtractPlugin = require('mini-css-extract-plugin');\nconst { WebpackManifestPlugin } = require('webpack-manifest-plugin');\nconst TerserPlugin = require('terser-webpack-plugin');\n\nconst CssMinimizerPlugin = require('css-minimizer-webpack-plugin');\n\nconst {BannerPlugin} = require('webpack');\nconst PACKAGE = require('./package.json');\nconst path = require('path');\n\n\n\n// const Dotenv = require('dotenv-webpack');\nconst isDevelopment = process.env.NODE_ENV === 'development'\n  ,buildSourcemaps = isDevelopment\n  // ,output_dir = isDevelopment? 'dev' : 'build'\n\n  // https://medium.com/@technoblogueur/webpack-one-manifest-json-from-multiple-configurations-output-fee48578eb92\n  // ,manifest_shared_seed = {};\n;\n\nconst config = {\n  mode: isDevelopment? 'development' : 'production',\n\n  // watch: isDevelopment,\n\n  // Control how source maps are generated\n  // devtool: isDevelopment? 'inline-source-map' : 'source-map', // false, <== false non aggiunge la sourcemap ,\n  devtool: isDevelopment? 'inline-source-map' : false,\n  // devtool: 'source-map',\n\n  // Where webpack looks to start building the bundle\n  entry: {\n    'my-app-name': './src/index.tsx',\n  },\n  // Where webpack outputs the assets and bundles\n\n  output: {\n    path: path.resolve(__dirname, './build'), // path.resolve(__dirname, `./public/${output_dir}` ),\n    // filename: '[name].js',\n    filename: '[name].[contenthash].js',\n    publicPath: '/', // `/${output_dir}/`, // usato per i percorsi degli elementi importati nei js\n    clean: !isDevelopment,\n  },\n\n\n  optimization: {\n    minimize: !isDevelopment,\n    minimizer: [\n      new CssMinimizerPlugin(),\n      new TerserPlugin({\n        // terserOptions: {\n        //   format: {\n        //     comments: false,\n        //   },\n        // },\n        extractComments: false,\n      }),\n    ],\n    // splitChunks: { chunks: 'all', },\n    runtimeChunk: 'single',\n    // runtimeChunk: false,\n    // runtimeChunk: { name: entrypoint => `runtime~${entrypoint.name}`,\n    usedExports: true,\n  },\n  performance: {\n    hints: false,\n    maxEntrypointSize: 512000,\n    maxAssetSize: 512000,\n  },\n\n  // Spin up a server for quick development\n  devServer: {\n    historyApiFallback: true,\n    static: {\n      directory: path.join(__dirname, '/'),\n      serveIndex: true,\n    },\n\n    open: true,\n    compress: true,\n    hot: true,\n    // host: '0.0.0.0',\n    port: 5500,\n    // devMiddleware: { writeToDisk: true } // forza la scrittura su disco anche in modalità dev\n  },\n\n  plugins: [\n\n    // new Dotenv({\n    //   path: isDevelopment? './.env.development' : './.env',\n    //   expand: true,\n    //   ignoreStub: true\n    // }),\n\n    // Removes/cleans build folders and unused assets when rebuilding\n    // non necessario con opzione `clean` di output\n    // new CleanWebpackPlugin(),\n\n    // Extracts CSS into separate files\n    new MiniCssExtractPlugin({\n      // filename: isDevelopment? '[name].css' : '[name].[contenthash].css',\n      // chunkFilename: isDevelopment? '[id].css' : '[id].[contenthash].css'\n      filename: '[name].[contenthash].css',\n      chunkFilename: '[id].[contenthash].css'\n    }),\n\n    // favicons\n    new CopyWebpackPlugin({\n      patterns: [\n        {\n          from: 'public/**/*.{ico,png,svg,webmanifest}',\n          to: '[name][ext]',\n          globOptions: {\n            dot: true,\n            gitignore: true,\n            ignore: ['**/index.html', '**/.DS_Store'],\n          },\n        },\n      ],\n    }),\n\n    // Only update what has changed on hot reload\n    // new webpack.HotModuleReplacementPlugin(), (non necessario con devServer.hot === true)\n\n    // https://github.com/jantimon/html-webpack-plugin#readme\n    new HtmlWebpackPlugin({\n      filename: '[name]-head.html.twig',\n      // template: path.resolve(__dirname, './public/index.html'),\n      inject: 'body',\n      title: 'My App',\n\n      // inject: false,\n      // templateContent: ({htmlWebpackPlugin}) => {\n      //   let tpl = '';\n\n      //   const js_files = typeof htmlWebpackPlugin.files.js === 'object'?\n      //     htmlWebpackPlugin.files.js : [htmlWebpackPlugin.files.js];\n      //   const css_files = typeof htmlWebpackPlugin.files.css === 'object'?\n      //     htmlWebpackPlugin.files.css : [htmlWebpackPlugin.files.css];\n\n      //   if(css_files.length) {\n      //     tpl += css_files.map(item =>\n      //       `<link rel=\"preload\" href=\"${item}\" as=\"style\">` + (isDevelopment? '\n' : '') +\n      //       `<link rel=\"stylesheet\" href=\"${item}\" type=\"text/css\" media=\"all\">`\n      //     ).join(isDevelopment? '\n' : '');\n      //   }\n\n      //   tpl += (css_files.length && js_files.length && isDevelopment)? '\n\n' : '';\n\n      //   if(js_files.length) {\n      //     tpl += js_files.map(item =>\n      //       `<link rel=\"preload\" href=\"${item}\" as=\"script\">` + (isDevelopment? '\n' : '') +\n      //       `<script src=\"${item}\" defer></script>`\n      //     ).join(isDevelopment? '\n' : '');\n      //   }\n\n      //   return tpl;\n      // },\n    }),\n\n    new WebpackManifestPlugin(/* {seed: manifest_shared_seed} */),\n\n    new BannerPlugin({\n      banner: () => {\n        const date = new Date().toLocaleString('it-IT', { year: 'numeric', month: 'long' });\n\n        // version = /(-alpha|-beta|-rc)/.test(PACKAGE.version)? PACKAGE.version :\n        //   PACKAGE.version.replace(/(\d+\.\d+)\.\d+/, '$1.x');\n\n        return '/*!\n' +\n          ` * My App v.${PACKAGE.version} - Massimo Cassandro ${date}\n` +\n          ' */\n';\n      },\n      raw: true\n    })\n  ],\n\n  // Determine how modules within the project are treated\n  module: {\n    rules: [\n\n      // html files\n      // {\n      //   test: /\.html$/,\n      //   loader: 'html-loader'\n      // },\n\n      // markdown / plain text / raw svg\n      // {\n      //   test: /\.(txt|md|raw\.svg)$/,\n      //   loader: 'raw-loader'\n      // },\n\n      // typescript\n      // {\n      //   test: /\.tsx?$/,\n      //   use: 'ts-loader',\n      //   exclude: /node_modules/,\n      // },\n\n      // JavaScript/JSX: Use Babel to transpile JavaScript files\n      {\n        test: /\.jsx?$/,\n        exclude: /node_modules/,\n        use: {\n          loader: 'babel-loader',\n          options: {\n            presets: [\n              ['@babel/preset-env', { targets: 'defaults' }]\n            ]\n          },\n        },\n      },\n\n      // inline svg\n      // {\n      //   test: /\.svg$/i, // /\.inline\.svg$/i,\n      //   type: 'asset/inline', // inline as base 64\n      //   type: 'asset/source', // inline as svg\n      //   loader: 'raw-loader'\n      // },\n\n      // Images / svg: Copy image files to build folder\n      {\n        test: /\.(?:ico|gif|png|jpg|jpeg|webp|avif|(?<!inline\.)svg)$/i,\n        // type: 'asset/resource',\n        type: 'javascript/auto',\n        use: [\n          {\n            loader: 'file-loader',\n            options: {\n              name: '[name].[contenthash].[ext]',\n              outputPath: 'imgs/',\n              esModule: false,\n            }\n          }\n        ]\n      },\n\n      // Fonts\n      {\n        test: /\.(woff2?|eot|ttf|otf)$/,\n        //type: 'asset/resource',\n        type: 'javascript/auto',\n        use: [\n          {\n            loader: 'file-loader',\n            options: {\n              hmr: isDevelopment,\n              name: '[name].[contenthash].[ext]',\n              outputPath: 'fonts', // usato nel manifest\n              // publicPath: `/${output_dir}/fonts`, // usato nel css\n              esModule: false,\n            }\n          }\n        ]\n      },\n\n      // css/scss modules\n      {\n        test: /(\.module\.(sass|scss|css))$/,\n        use: [\n          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,\n          {\n            loader: 'css-loader',\n            options: {\n              // importLoaders: 1,\n              // modules: true,\n              modules: {\n                // esModule: false, // abilita importazione in cjs\n                auto: true, // /\.module\.scss$/i.test(filename),\n                // localIdentName: Encore.isProduction()? '[hash:base64]' : '[local]_[hash:base64:6]' // '[name]__[local]_[hash:base64:5]'\n                localIdentName: '[local]_[hash:base64:6]' // '[name]__[local]_[hash:base64:5]'\n              },\n              sourceMap: isDevelopment\n            }\n          },\n          {\n            loader: 'sass-loader',\n            options: {\n              sourceMap: isDevelopment\n            }\n          }\n        ]\n      },\n\n      // css / scss\n      {\n        test: /\.(sass|scss|css)$/,\n        exclude: /(\.module\.s?(a|c)ss)$/,\n        use: [\n          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,\n          {\n            loader: 'css-loader',\n            options: {\n              sourceMap: buildSourcemaps,\n              importLoaders: isDevelopment? 1 : 2,\n              modules: false\n            },\n          },\n          {\n            loader: 'postcss-loader',\n            options: {\n              postcssOptions: {\n                sourceMap: buildSourcemaps\n              },\n            },\n          },\n          {\n            loader: 'sass-loader',\n            options: {\n              sourceMap: buildSourcemaps\n            }\n          },\n        ],\n      },\n    ],\n  },\n\n  resolve: {\n    fallback: {\n      'fs': false,\n      'util': false\n    },\n    modules: ['./', 'node_modules'],\n    extensions: ['.tsx', '.ts', '.js', '.mjs', '.cjs', '.jsx', '.json', '.scss', '.css'],\n    alias: {\n      '@': './',\n      assets:'./build',\n    },\n  }\n\n};\n\n\nmodule.exports = config;\n" > webpack.config.cjs
```



## auto-datatables-bs5
* <https://github.com/massimo-cassandro/auto-datatables-bs5>
```bash
npm i -S @massimo-cassandro/auto-datatables-bs5
```



## autocomplete
* <https://github.com/massimo-cassandro/autocomplete>
```bash
npm i -S @massimo-cassandro/autocomplete
```



## bootstrap
```bash
npm i -S bootstrap
```



## ckeditor-utilities
* <https://github.com/massimo-cassandro/ckeditor-utilities>
```bash
npm i -S @massimo-cassandro/ckeditor-utilities
```



## cookie-consent
* <https://github.com/massimo-cassandro/cookie-consent>
```bash
npm i -S @massimo-cassandro/cookie-consent
```



## create-favicons
* <https://github.com/massimo-cassandro/create-favicons>
* `npx create-favicons init`
* `npx create-favicons --dir=./`
```bash
npm i -D @massimo-cassandro/create-favicons
```



## eslint 8
```bash
npm i -D eslint@^8 && npm i -D @massimo-cassandro/eslint-config@^1
```



## gulp per icone
* `"build_icons": "cd ./path/to/icone && gulp",`
```bash
npm i -D gulp@latest gulp-concat gulp-dom gulp-flatmap gulp-inject-string gulp-rename gulp-replace gulp-svgmin gulp-svgstore gulp-wrap
```



## gulp-jsbeautifier (aggiunta per icone react)
```bash
npm i -D gulp-jsbeautifier
```



## gulp-wrap (aggiunta per icone react)
```bash
npm i -D gulp-wrap
```



## html-react-parser
```bash
npm i -D html-react-parser
```



## js-file-uploader
* <https://massimo-cassandro.github.io/js-file-uploader/demo/>
* <https://github.com/massimo-cassandro/js-file-uploader>
```bash
npm i -S @massimo-cassandro/js-file-uploader
```



## js-utilities
* <https://github.com/massimo-cassandro/js-utilities>
```bash
npm i -S @massimo-cassandro/js-utilities
```



## json-table
* <https://github.com/massimo-cassandro/json-table>
```bash
npm i -S @massimo-cassandro/json-table
```



## layout-tools
* <https://github.com/massimo-cassandro/layout-tools>
```bash
npm i -D @massimo-cassandro/layout-tools
```



## modal-alert
* <https://github.com/massimo-cassandro/modal-alert>
```bash
npm i -S @massimo-cassandro/modal-alert
```



## normalize.css
```bash
npm i -S normalize.css
```



## postcss + autoprefixer + purgecss (webpack)
```bash
npm i -D postcss postcss-preset-env @fullhuman/postcss-purgecss autoprefixer postcss-custom-media @csstools/postcss-global-data
```


*postcss.config.cjs*:

```bash
echo "/* eslint-env node */\n\n// const path = require('path');\n\n// https://github.com/cssnano/cssnano\n// https://purgecss.com/configuration.html\n// https://github.com/GoogleChromeLabs/postcss-jit-props\n// https://github.com/argyleink/open-props\n// https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-media\n\nconst isDevelopment = process.env.NODE_ENV === 'development';\n\nconst postcssConfig = {\n  plugins: [\n\n    require('@csstools/postcss-global-data')({\n      files: [\n        './node_modules/open-props/media.min.css',\n        './frontend/css/custom-properties.css',\n      ]\n    }),\n\n    // require('postcss-jit-props')(require('open-props')),\n    require('postcss-jit-props')({\n      ...require('open-props'),\n      custom_selector: ':where(html)'\n    }),\n\n    require('autoprefixer'),\n\n    require('postcss-custom-media')({\n      preserve: isDevelopment\n    }),\n\n    require('@fullhuman/postcss-purgecss')({\n      content: [\n        // './node_modules/@massimo-cassandro/**/.js',\n        './templates/**/*.html.twig',\n        './public/**/*.html',\n        './src/**/*.{js,jsx}',\n      ],\n      // css: ['./src/css/custom-properties-figma.css'],\n      // output: ['./AppBundle/Resources/public/css/'],\n      // variables: true,\n      // fontFace: true,\n      // keyframes: true,\n      safelist: {\n        standard: [/:focus$/],\n        // deep: [],\n        // greedy: [/yellow$/]\n      }\n    }),\n\n  ]\n};\n\nif (process.env.NODE_ENV === 'production') {\n  postcssConfig.plugins.push(\n    require('cssnano')({\n      // use the safe preset so that it doesn't\n      // mutate or remove code from our css\n      preset: 'default',\n    })\n  );\n}\n\nmodule.exports = postcssConfig;\n\n" > postcss.config.cjs
```



## postcss cli
* Per creare file css di test.
* *postcss-import* è necessario per risolvere le importazioni da cli (con webpack non serve, l’operazione è svolta da *css-loader*)
* `[npx] postcss ./src/source.css -o ./test/test.css --no-map --verbose --env development --config ./ --use postcss-import --watch`
```bash
npm i -D postcss-cli postcss-import
```



## postcss-banner
```bash
npm i -D postcss-banner
```



## prismjs
```bash
npm i -S prismjs
```



## react (NB: richiede eslint 8)
```bash
npm i -D @babel/preset-react babel-plugin-transform-react-remove-prop-types eslint-config-react-app && npm i -D classnames nanoid prop-types && npm i -D react-dom react
```



## React utilities
```bash
npm i -D classnames nanoid prop-types
```



## react-html-comment
```bash
npm i -D react-html-comment
```



## rollup base
* `"rollup": "npx rollup --config ./config/rollup.config.mjs --watch",`
```bash
npm i -D rollup@latest @rollup/plugin-terser @rollup/plugin-node-resolve @rollup/plugin-json @rollup/plugin-image @rollup/plugin-replace @rollup/plugin-commonjs
```


*rollup.config.mjs*:

```bash
echo "import terser  from '@rollup/plugin-terser';\nimport fs from 'fs';\nimport node_resolve from '@rollup/plugin-node-resolve';\nimport commonjs from '@rollup/plugin-commonjs';\n\n// https://github.com/hyhappy/rollup-plugin-string-html\n// import htmlString from 'rollup-plugin-string-html';\n\n// https://github.com/exuanbo/rollup-plugin-minify-html-template-literals\n// https://github.com/asyncLiz/minify-html-literals\n// https://github.com/kangax/html-minifier#options-quick-reference\n// import minifyHTML from 'rollup-plugin-minify-html-template-literals';\n\nimport p from '../package.json'; // assert { type: 'json' };\n\nconst terserOptions = {\n    compress: {\n      passes: 2\n    }\n  },\n  anno = new Date().getFullYear(),\n  dirs = [\n    {source_dir: './front-end/js', output_dir: './AppBundle/Resources/public/js'}\n  ];\n\nlet config = [];\n\n// lettura subdir apps e aggiunta a `dirs`\nfs.readdirSync('./front-end/apps').forEach(item => {\n  let stats = fs.statSync(`./front-end/apps/${item}`); // stats.isFile() / stats.isDirectory()\n  if(stats.isDirectory()) {\n    dirs.push({\n      source_dir: `./front-end/apps/${item}`,\n      output_dir: `./AppBundle/Resources/public/apps/${item}`\n    });\n  }\n});\n\ndirs.forEach(dir => {\n\n  fs.readdirSync(dir.source_dir)\n    .filter(f => /\.js$/.test(f))\n    .filter(f => /^[^_]/.test(f)) // ignore files starting with _\n    .forEach(file => {\n\n      let format = 'iife',\n        name = null;\n\n      if(/(-umd\.js)$/.test(file)) {\n        format = 'umd';\n        name = file.replace('-umd.js', '').replace(/-/g, '_');\n      }\n\n      config.push(\n        {\n          // preserveEntrySignatures: false,\n          input: `${dir.source_dir}/${file}`,\n          plugins: [\n            // deve essere il primo\n            // minifyHTML({\n            //   options: {\n            //     minifyOptions: {\n            //       html5: true,\n            //       collapseWhitespace: true,\n            //       collapseInlineTagWhitespace: true,\n            //       conservativeCollapse: true,\n            //       decodeEntities: true\n            //     },\n            //     shouldMinify: () => true\n            //   },\n            // }),\n            node_resolve(),\n            commonjs(),\n            terser(terserOptions),\n          ],\n          output: [{\n            file: `${dir.output_dir}/${file.replace('.js', '-min.js')}`,\n            format: format,\n            sourcemap: true,\n            name: name,\n            banner: `/*! xxxx v.${p.version} - Massimo Cassandro ${anno} */`,\n            // footer: `//! Released on ${new Date().toLocaleString('it-IT', { year: 'numeric',  month: 'short', day: '2-digit', hour12: false, hour:'2-digit', minute:'2-digit' })}`\n          }]\n        }\n      );\n\n    });\n});\n\nexport default config;\n\n\n// versione statica\n\n// export default [\n//   {\n//     input: 'input.js',\n//     plugins: [\n//       node_resolve(),\n//       // commonjs(),\n//       terser({ compress: { passes: 2 } }),\n//     ],\n//     output: [\n//       {\n//         file: 'output.min.js',\n//         format: 'iife',\n//         sourcemap: true,\n\n//         banner: `/*! xxxx v.${p.version} - Massimo Cassandro ${anno} */`,\n//         // footer: `//! Released on ${new Date().toLocaleString('it-IT', { year: 'numeric',  month: 'short', day: '2-digit', hour12: false, hour:'2-digit', minute:'2-digit' })}`\n//       }\n//     ]\n//   },\n//   ...\n// ];\n" > rollup.config.mjs
```



## rollup-plugin-string-html
```bash
npm i -D rollup-plugin-string-html
```



## scss-utilities
* <https://github.com/massimo-cassandro/scss-utilities>
```bash
npm i -S @massimo-cassandro/scss-utilities
```



## sharing-links
* <https://github.com/massimo-cassandro/sharing-links>
```bash
npm i -S @massimo-cassandro/sharing-links
```



## solid-js (webpack)
```bash
npm i -D solid-js babel-loader @babel/preset-env @babel/plugin-syntax-jsx babel-preset-solid
```



## styled-components
```bash
npm i -D babel-plugin-styled-components styled-components
```



## twig-utilities
* <https://github.com/massimo-cassandro/twig-utilities>
```bash
npm i -S @massimo-cassandro/twig-utilities
```



## typescript per react/webpack
```bash
npm i -D @types/react-dom @types/react ts-loader typescript-plugin-css-modules typescript
```



## unsplash-page
* <https://github.com/massimo-cassandro/unsplash-page>
```bash
npm i -S @massimo-cassandro/unsplash-page
```

