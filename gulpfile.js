'use strict';

var gulp = require('gulp');

require('./gulp/style');
require('./gulp/app');

gulp.task('build', ['style', 'app']);

gulp.task('watch:style', function (){
  gulp.watch('src/assets/**/*.scss', ['style']);
});

gulp.task('watch:app', function (){
  gulp.watch('src/app/*.js', ['app']);
});

gulp.task('watch', ['watch:style', 'watch:app']);

gulp.task('default', ['build', 'watch']);
