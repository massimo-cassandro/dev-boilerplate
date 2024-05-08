/* eslint-env node */

const postcssConfig = {
  plugins: [

    require('autoprefixer'),

    // https://purgecss.com/configuration.html
    require('@fullhuman/postcss-purgecss')({
      content: [
        './node_modules/@massimo-cassandro/**/*.js',
        './node_modules/@massimo-cassandro/**/*.jsx',
        './led-board/**/*.js',
        './led-board/**/*.jsx'
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


    // require('postcss-csso')({
    //   restructure: false,
    //   // sourceMap: true,
    //   stat: true,
    //   forceMediaMerge: true
    // })
  ]
};

// If we are in production mode, then add cssnano
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
