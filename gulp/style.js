'use strict';

var gulp = require('gulp');
var compass = require('gulp-compass');
var minifyCSS = require('gulp-minify-css');

gulp.task('style', function () {
  gulp.src('./src/*.scss')
    .pipe(compass({
      css: 'build/css',
      sass: 'src/assets/sass',
      image: 'src/assets/images'
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('build/assets/temp'));
});
