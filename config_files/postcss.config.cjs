/* eslint-env node */

// const path = require('path');

// https://github.com/cssnano/cssnano
// https://purgecss.com/configuration.html
// https://github.com/GoogleChromeLabs/postcss-jit-props
// https://github.com/argyleink/open-props
// https://github.com/postcss/postcss-mixins
// https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-media
// https://github.com/postcss/postcss-simple-vars

const postcssConfig = {
  plugins: [

    // require('postcss-simple-vars'),
    
    // require('postcss-mixins')({
    //   mixinsDir: path.resolve(__dirname, './src/css')
    // }),

    // require('postcss-jit-props')(require('open-props')),
    require('postcss-jit-props')({
      ...require('open-props'),
      custom_selector: ':where(html)'
    }),

    require('autoprefixer'),
    require('postcss-custom-media')({
      preserve: false
    }),

    require('@fullhuman/postcss-purgecss')({
      content: [
        // './node_modules/@massimo-cassandro/**/.js',
        './templates/**/*.html.twig',
        './public/**/*.html',
        './src/**/*.{js,jsx}',
      ],
      // css: ['./src/css/custom-properties-figma.css'],
      // output: ['./AppBundle/Resources/public/css/'],
      // variables: true,
      // fontFace: true,
      // keyframes: true,
      safelist: {
        standard: [/:focus$/],
        // deep: [],
        // greedy: [/yellow$/]
      }
    }),

  ]
};

if (process.env.NODE_ENV === 'production') {
  postcssConfig.plugins.push(
    require('cssnano')({
      // use the safe preset so that it doesn't
      // mutate or remove code from our css
      preset: 'default',
    })
  );
}

module.exports = postcssConfig;

