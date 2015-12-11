'use strict';

// Karma configuration
// Generated on Thu Dec 10 2015 19:26:22 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
      '../src/lib/jquery.js',
      '../src/lib/angular.js',
      '../src/lib/angular-route.js',
      '../src/lib/angular-mocks.js',
      '../build/js/app.js',
      '../src/**/*.html',
      'app/**/*.spec.js'
    ],

    ngHtml2JsPreprocessor: {
      'moduleName': 'Templates',

        // Function that transforms the path to look exactly like
        // you have it in templateUrl in your Angular code
        //
        // Mine looks like this
        cacheIdFromPath: function(filepath) {
          // console.log('=======================================');
          // console.log(filepath);
          return filepath.replace(/.*src\/app\//, '');
        }
    },

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      '../src/**/*.html': ['ng-html2js']
    },

    browserify: {
      debug: true,
      configure: function (bundle) {
        bundle.on('prebundle', function () {
          bundle.external('jquery');
          bundle.external('bootstrap');
          bundle.external('angular');
          bundle.external('Chart');
          bundle.external('angularRoute');
        });
      }
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
