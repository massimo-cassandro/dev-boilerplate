/* eslint-env node */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInjectPreload = require('@principalstudio/html-webpack-inject-preload');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');

const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const {BannerPlugin} = require('webpack');
const PACKAGE = require('./package.json');
const path = require('path');

/*
// aliases from jsconfig
const jsConfig = require(path.join(__dirname, '/jsconfig.json'));
const aliases = {};
for(const item in jsConfig.compilerOptions.paths) {

  const key = item.replace(/(\/\*)$/, ''),
    value = path.resolve(__dirname, jsConfig.compilerOptions.paths[item][0].replace(/(\/\*)$/, ''));

  aliases[key] = value;
}
// console.log(aliases);
*/

// const Dotenv = require('dotenv-webpack');
const isDevelopment = process.env.NODE_ENV === 'development'
  // ,output_dir = isDevelopment? 'dev' : 'build'
  ,favicons_path = /src\/favicons\/output/

  // https://medium.com/@technoblogueur/webpack-one-manifest-json-from-multiple-configurations-output-fee48578eb92
  // ,manifest_shared_seed = {};
;

const config = {
  mode: isDevelopment? 'development' : 'production',

  // watch: isDevelopment,

  // Control how source maps are generated
  // devtool: isDevelopment? 'inline-source-map' : 'source-map', // false, <== false non aggiunge la sourcemap ,
  devtool: isDevelopment? 'inline-source-map' : false,
  // devtool: 'source-map',

  // =>> entry
  // https://webpack.js.org/configuration/entry-context/
  entry: {
    'my-app-name': './src/index.tsx',

    // 'app-2': {
    //   import: './app.js',
    //   filename: 'path/to/app2.js', // output
    //   dependOn: 'shared',
    //   chunkLoading: false, // Disable chunks that are loaded on demand and put everything in the main chunk.
    // },
  },

  // =>> output
  // https://webpack.js.org/configuration/output/
  output: {
    path: path.resolve(__dirname, './build'), // path.resolve(__dirname, `./public/${output_dir}` ),
    // filename: '[name].js',
    filename: '[name].[contenthash].js',
    publicPath: '/', // `/${output_dir}/`, // usato per i percorsi degli elementi importati nei js
    clean: !isDevelopment,
  },

  // =>> optimization
  // https://webpack.js.org/configuration/optimization/
  optimization: {
    minimize: !isDevelopment,
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        // terserOptions: {
        //   format: {
        //     comments: false,
        //   },
        // },
        extractComments: false,
      }),
    ],
    runtimeChunk: 'single',
    // runtimeChunk: false,
    // runtimeChunk: { name: entrypoint => `runtime~${entrypoint.name}`,
    // splitChunks: { chunks: 'all', },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    usedExports: true,
  }, // end optimization

  // =>> performance
  // https://webpack.js.org/configuration/performance/
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  }, // end perfomance


  // =>> devServer
  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, '/'),
      serveIndex: true,
    },

    open: true, // oppure nel comando cli: --open | --no-open, cambia browser: --open-app-name 'Google Chrome'
    // aletrnative a `open: true`
    // open: ['/my-page', '/another-page'],
    // open: {
    //   app: {
    //     name: 'Google Chrome',
    //   },
    // },
    compress: true,
    hot: true,
    // host: '0.0.0.0',
    port: 5500,
    // devMiddleware: { writeToDisk: true } // forza la scrittura su disco anche in modalità dev
  },

  // =>> plugins
  plugins: [

    // =>> Dotenv
    // richiede `npm install -D dotenv-webpack`
    // new Dotenv({
    //   path: isDevelopment? './.env.development' : './.env',
    //   expand: true,
    //   ignoreStub: true,
    //   allowEmptyValues: true,
    // }),
    // permette di accedere a process da script eseguiti nel browser
    // richiede dotenv-webpack e `npm install -D process`
    // new webpack.ProvidePlugin({
    //   process: 'process/browser',
    // }),

    //=>> numero di versione
    // new webpack.DefinePlugin({
    //   'APP_VERSION': `'${PACKAGE.version}'`,
    // }),

    // Removes/cleans build folders and unused assets when rebuilding
    // non necessario con opzione `clean` di output
    // new CleanWebpackPlugin(),

    // =>> RemoveEmptyScriptsPlugin
    // https://github.com/webdiscus/webpack-remove-empty-scripts
    // new RemoveEmptyScriptsPlugin({
    //   enabled: !isDevelopment,
    //   verbose: true
    // }),

    // =>> MiniCssExtractPlugin
    // Extracts CSS into separate files
    new MiniCssExtractPlugin({
      // filename: isDevelopment? '[name].css' : '[name].[contenthash].css',
      // chunkFilename: isDevelopment? '[id].css' : '[id].[contenthash].css'
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),

    // =>> CopyWebpackPlugin
    new CopyWebpackPlugin({
      patterns: [
        {
          from: 'public/**/*.{ico,png,svg,webmanifest}',
          to: '[name][ext]',
          globOptions: {
            dot: true,
            gitignore: true,
            ignore: ['**/index.html', '**/.DS_Store'],
          },
        },

        // {
        //   from: 'src/assets/**/_{htaccess,htpasswd}',
        //   to: ({ context, absoluteFilename }) => {
        //     return path.join(output_dir,  path.basename(absoluteFilename).replace(/^_/, '.'));
        //   },
        //   toType: 'file',
        // },
      ],
    }), // end CopyWebpackPlugin

    // =>> HotModuleReplacementPlugin
    // Only update what has changed on hot reload
    // new webpack.HotModuleReplacementPlugin(), (non necessario con devServer.hot === true)

    // =>> WebpackManifestPlugin
    new WebpackManifestPlugin(/* {seed: manifest_shared_seed} */),

    // =>> HtmlWebpackPlugin
    // https://github.com/jantimon/html-webpack-plugin#readme
    // new HtmlWebpackPlugin({
    //   filename: '[name]-head.html.twig',
    //   inject: 'body',
    //   title: 'My App',

    //   inject: false,
    //   templateContent: ({htmlWebpackPlugin}) => {
    //     let tpl = '';

    //     const js_files = typeof htmlWebpackPlugin.files.js === 'object'?
    //       htmlWebpackPlugin.files.js : [htmlWebpackPlugin.files.js];
    //     const css_files = typeof htmlWebpackPlugin.files.css === 'object'?
    //       htmlWebpackPlugin.files.css : [htmlWebpackPlugin.files.css];

    //     if(css_files.length) {
    //       tpl += css_files.map(item =>
    //         `<link rel="preload" href="${item}" as="style">` + (isDevelopment? '\n' : '') +
    //         `<link rel="stylesheet" href="${item}" type="text/css" media="all">`
    //       ).join(isDevelopment? '\n' : '');
    //     }

    //     tpl += (css_files.length && js_files.length && isDevelopment)? '\n\n' : '';

    //     if(js_files.length) {
    //       tpl += js_files.map(item =>
    //         `<link rel="preload" href="${item}" as="script">` + (isDevelopment? '\n' : '') +
    //         `<script src="${item}" defer></script>`
    //       ).join(isDevelopment? '\n' : '');
    //     }

    //     return tpl;
    //   },
    // }), // HtmlWebpackPlugin

    // new HtmlWebpackPlugin({
    //   templateContent: `<!DOCTYPE html>
    //     <html lang="it">
    //       <head>
    //         <meta charset="utf-8">
    //         <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    //         <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    //         <link rel="icon" href="./favicon.ico" sizes="32x32">
    //         <link rel="icon" href="./favicon.svg" type="image/svg+xml">
    //         <link rel="apple-touch-icon" href="./apple-touch-icon.png">
    //         <link rel="manifest" href="./manifest.webmanifest">
    //         <title__TITLE__</title>
    //       </head>
    //       <body>
    //         <div id="root" class="wrapper"></div>
    //       </body>
    //     </html>`,
    //   filename: 'index.html',
    //   inject: 'body',
    // }), // end HtmlWebpackPlugin

    new HtmlWebpackPlugin({
      filename: 'index.html',
        template: path.resolve(__dirname, './src/public/index.ejs'),
        inject: 'body',
        title: 'XXXX',
        // chunks: ['app'],
        // templateParameters: {
        //   mdContent: getMarkdownFiles(),
        // }
    }), // end HtmlWebpackPlugin

    new HtmlWebpackInjectPreload({
      files: [
        {
          match: /.*-latin-(?!(ext-)).*\.woff2$/,
          // match: /.*\.woff2$/,
          attributes: {as: 'font', type: 'font/woff2', crossorigin: true },
        },
        {
          match: /.*\.css$/,
          attributes: {as: 'style' },
        },
      ]
    }), // end HtmlWebpackInjectPreload

    // (isDevelopment && new HtmlWebpackPlugin({
    //   filename: '.gitkeep',
    //   inject: false,
    //   templateContent: () => { return ''}
    // })),

    // =>> BannerPlugin
    new BannerPlugin({
      banner: () => {
        const date = new Date().toLocaleString('it-IT', { year: 'numeric', month: 'long' });

        // version = /(-alpha|-beta|-rc)/.test(PACKAGE.version)? PACKAGE.version :
        //   PACKAGE.version.replace(/(\d+\.\d+)\.\d+/, '$1.x');

        return '/*!\n' +
          ` * My App v.${PACKAGE.version} - Massimo Cassandro ${date}\n` +
          ' */\n';
      },
      raw: true
    }) // end BannerPlugin
  ],

  module: {

    // =>> rules
    // Determine how modules within the project are treated
    rules: [

      // =>> rules: html files
      // {
      // test: /(\.html?)$/i,
      //   oneOf: [

      //     // copy files to output folder
      //     {
      //       type: 'javascript/auto',
      //       resourceQuery: /as_asset/,
      //       use: [
      //         {
      //           loader: 'file-loader',
      //           options: {
      //             name: '[name].[contenthash].[ext]',
      //             // outputPath: 'imgs/',
      //             esModule: false,
      //           }
      //         }
      //       ]
      //     },
      //     // get html content
      //     {
      //       loader: 'html-loader'
      //     },
      //   ]
      // }, // end html files

      // =>> rules: plain text
      // {
      //   test: /\.(txt|md)$/i,
      //   type: 'asset/source'
      // },

      // =>> rules: markdown (marked + html-loader)
      // aggiungere negli import iniziali:
      // const DOMPurify = require('isomorphic-dompurify');
      // const { marked } = require('marked');
      // https://github.com/webpack-contrib/html-loader
      // https://marked.js.org/
      // https://github.com/cure53/DOMPurify
      {
        test: /(\.md)$/i,
        // type: 'asset/source',
        use: [
          {
            loader: "html-loader",
            options: {
              preprocessor: (content, loaderContext) => {
                console.log( content);
                try {
                  console.log( DOMPurify.sanitize(marked.parse(content)));
                  return DOMPurify.sanitize(marked.parse(content));

                } catch (error) {
                  loaderContext.emitError(error);
                  return content;
                }
              },
            },
          },
        ],
      },

      // =>> rules: typescript
      // {
      //   test: /\.tsx?$/,
      //   use: 'ts-loader',
      //   exclude: /node_modules/,
      // },

      // =>> rules: JavaScript/JSX
      // Use Babel to transpile JavaScript files
      {
        test: /(\.jsx?)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }]
            ]
          },
        },
      },

      // =>> rules: favicons
      {
        test: /\.(?:ico|png|svg|webmanifest)$/i,
        type: 'javascript/auto',
        include: favicons_path,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?_=[contenthash]',
              outputPath: '',
              esModule: false,
            }
          }
        ]
      }, // end favicons

      // =>> rules: svg
      {
        test: /(\.svg)$/i,
        exclude: favicons_path,
        oneOf: [
          // svg inline base64 per css (con `?inline-base64`)
          {
            resourceQuery: /inline-base64/,
            // loader: 'raw-loader',
            type: 'asset/inline',
            generator: {
              dataUrl: content => {
                content = content.toString();
                return svgToMiniDataURI(content);
              }
            }
          },

          // svg inline (con `?inline`)
          {
            resourceQuery: /inline/,
            // type: 'asset/inline', // inline as base 64
            type: 'asset/source', // inline as svg
          },

          // copy image files to build folder
          {
            // type: 'asset/resource',
            type: 'javascript/auto',
            // resourceQuery: { not: [/(css-)?inline/] },
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[contenthash].[ext]',
                  outputPath: 'imgs/',
                  esModule: false,
                }
              }
            ]
          },
        ]
      }, // end svg

      // =>> rules: Images / pdf
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|webp|avif|pdf)$/i,
        // type: 'asset/resource',
        type: 'javascript/auto',
        exclude: favicons_path,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]',
              outputPath: 'imgs/',
              esModule: false,
            }
          }
        ]
      }, // end Images / pdf

      // =>> rules: Fonts
      {
        test: /\.(woff2?|eot|ttf|otf)$/,
        //type: 'asset/resource',
        type: 'javascript/auto',
        use: [
          {
            loader: 'file-loader',
            options: {
              hmr: isDevelopment,
              name: '[name].[contenthash].[ext]',
              outputPath: 'fonts', // usato nel manifest
              // publicPath: `/${output_dir}/fonts`, // usato nel css
              esModule: false,
            }
          }
        ]
      }, // end fonts

      // =>> rules: css/scss modules
      {
        test: /(\.module\.(sass|scss|css))$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // importLoaders: 1,
              // modules: true,
              modules: {
                // esModule: false, // abilita importazione in cjs
                auto: true, // /\.module\.scss$/i.test(filename),
                // localIdentName: isDevelopment? '[local]_[hash:base64:6]' : '[hash:base64]' // '[name]__[local]_[hash:base64:5]'
                localIdentName: '[local]_[hash:base64:6]' // '[name]__[local]_[hash:base64:5]'
              },
              sourceMap: isDevelopment
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                sourceMap: isDevelopment
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      }, // end css/scss modules

      // =>> rules: css / scss
      {
        test: /\.(sass|scss|css)$/,
        exclude: /(\.module\.s?(a|c)ss)$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          // MiniCssExtractPlugin.loader, // per uso con scrittura del css anche in dev (commentando riga precedente)
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDevelopment,
              importLoaders: isDevelopment? 1 : 2,
              modules: false
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                sourceMap: isDevelopment
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          },
        ],
      }, // end css / scss

    ], // end rules
  }, // end module

  // =>> resolve
  resolve: {
    fallback: {
      'fs': false,
      'util': false
    },
    modules: ['./', 'node_modules'],
    extensions: ['.tsx', '.ts', '.js', '.mjs', '.cjs', '.jsx', '.json', '.scss', '.css'],
    alias: {
      '@': './',
    },
    // alias: aliases
  }

};


module.exports = config;
