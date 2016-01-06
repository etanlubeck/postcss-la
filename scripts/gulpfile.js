var gulp = require('gulp');
gulp.task('default', function () {
  'use strict';
    var postcss    = require('gulp-postcss');
    var sourcemaps = require('gulp-sourcemaps');

    return gulp.src('../src/**/*.css')
        .pipe( sourcemaps.init() )
        .pipe( postcss([ require('autoprefixer'), require('precss') ]) )
        .pipe( sourcemaps.write('.') )
        .pipe( gulp.dest('../build/') );
});

module.exports = gulp;
