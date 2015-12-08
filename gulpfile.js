'use strict';

var gulp = require('gulp');
var compass = require('gulp-compass');
var minifyCSS = require('gulp-minify-css');

var paths = {
  sass: ['./app/sass/*.scss', './app/sass/**/*.scss']
};

gulp.task('compass', function () {
  gulp.src(paths.sass)
    .pipe(compass({
      css: 'app/assets/css',
      sass: 'app/sass',
      image: 'app/assets/images'
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('app/assets/temp'));
});

gulp.task('sass:watch', function (){
  gulp.watch(paths.sass, ['compass']);
});

gulp.task('default', ['compass', 'sass:watch']);
