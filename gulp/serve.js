'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('serve', function () {
  nodemon({
    script: 'index.js',
    ext: 'js html',
    ignore: ['build/*', 'src/*', 'test/*'],
    env: { NODE_ENV: 'development' }
  });
});
