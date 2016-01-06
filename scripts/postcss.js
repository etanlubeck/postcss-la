var postcss = require('postcss'),
  fs = require('fs');

  postcss([ require('precss'), require('autoprefixer'), require('cssnano') ])
  .process({ from: '../src/stylesheets/app.css', to: '../build/stylesheets/app.css' })
  .then(function (result) {
    'use strict';
    console.log(result);
      fs.writeFileSync('app.css', result.css);
      if ( result.map ) {fs.writeFileSync('app.css.map', result.map);}
  }, function(err){
    'use strict';
    console.log(arguments);
  });
