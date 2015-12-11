'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('app', function () {
	//single entry point to browserify
  gulp.src('src/app/app.js')
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
    },
    Chart: {
      path: 'src/lib/chart.js',
      exports: 'Chart'
    }
  }
		}))
    .pipe(gulp.dest('build/js'));
});
