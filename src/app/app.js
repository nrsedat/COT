'use strict';

require('jquery');
require('bootstrap');
require('angular');
require('angularRoute');
require('Chart');

require('./components');
require('./views');

var app = angular.module('ciApp', ['ngRoute', 'app.components', 'app.views']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
      when('/', {
        templateUrl: 'views/dashboard/dashboard.html',
        controller: 'DashboardCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);
