/* eslint-env node */
const cssnano = require('cssnano')
  ,purgecss = require('@fullhuman/postcss-purgecss')
  ,autoprefixer = require('autoprefixer')
  ,postcssJitProps = require('postcss-jit-props')
  ,openProps = require('open-props');
;

// https://github.com/argyleink/open-props
// https://github.com/GoogleChromeLabs/postcss-jit-props
// https://github.com/cssnano/cssnano
// https://purgecss.com/configuration.html
// https://github.com/postcss/postcss-mixins
// https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-media

const postcssConfig = {
  plugins: [

    postcssJitProps(openProps),

    autoprefixer,

    purgecss({
      content: [
        './node_modules/@massimo-cassandro/**/.js',
        './templates/**/*.html.twig',
        './frontend/src/**/*.js'
      ],
      // css: ['./AppBundle/Resources/public/css/**/*.css'],
      // output: ['./AppBundle/Resources/public/css/'],
      variables: true,
      // fontFace: true,
      safelist: {
        // standard: [],
        // deep: [],
        // greedy: [/yellow$/]
      }
    }),

  ]
};

// If we are in production mode, then add cssnano
if (process.env.NODE_ENV === 'production') {
  postcssConfig.plugins.push(
    cssnano({
      // use the safe preset so that it doesn't
      // mutate or remove code from our css
      preset: 'default',
    })
  );
}

module.exports = postcssConfig;

