'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var compass = require('gulp-compass');
var minifyCSS = require('gulp-minify-css');

var paths = {
  sass : ['./sass/*.scss', './sass/**/*.scss']
};


gulp.task('compass', function() {
  gulp.src(paths.sass)
    .pipe(compass({
      css: 'app/assets/css',
      sass: 'app/assets/sass',
      image: 'app/assets/images'
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('app/assets/temp'));
});

gulp.task('sass:watch', function(){
  gulp.watch(paths.sass, ['compass']);
});

gulp.task('default', ['compass', 'sass:watch']);
