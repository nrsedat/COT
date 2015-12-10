'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
var path = require('path');

gulp.task('app', function () {
	//single entry point to browserify
  gulp.src(path.resolve(__dirname, '../src/app/app.js'))
		.pipe(browserify({
  shim: {
    angular: {
      path: 'src/lib/angular.js',
      exports: 'angular'
    },
    angularRoute: {
      path: 'src/lib/angular-route.js',
      exports: 'angularRoute'
    },
    bootstrap: {
      path: 'src/lib/bootstrap.js',
      exports: 'bootstrap'
    },
    jquery: {
      path: 'src/lib/jquery.js',
      exports: 'jquery'
    }
  }
		}))
    .pipe(gulp.dest(path.resolve(__dirname, '../build/js')));
});
