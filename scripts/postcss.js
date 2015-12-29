var postcss = require('postcss'),
  fs = require('fs');

  postcss([ require('autoprefixer'), require('cssnano') ])
  .process(css, { from: '../src/app.css', to: '/app.css' })
  .then(function (result) {
      fs.writeFileSync('app.css', result.css);
      if ( result.map ) fs.writeFileSync('app.css.map', result.map);
  });
