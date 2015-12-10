'use strict';

require('jquery');
require('bootstrap');
require('angular');
require('angularRoute');

var app = angular.module('ciApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
      when('/', {
        templateUrl: 'views/dashboard/dashboard.html',
        controller: 'dashboardCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);

app.controller('dashboardCtrl', ['$scope', '$http', function ($scope, $http){
  $scope.Math = window.Math;
  $scope.colors = {
    success: '#1bb392',
    failure: '#f7ab59'
  };

  $http({
    method: 'GET',
    url: '/api/getProcessList'
  }).then(function successCallback(response) {
    $scope.list = response.data;
  }, function errorCallback(response) {
    console.log(response.data);
  });
}]);


app.directive('pieChart', function () {
  return {
    template: '<canvas width="65" height="65"></canvas>',
    scope: {
      data: '='
    },
    link: function (scope, elem){
      var chartData = [{
        value: scope.data.success,
        color: '#1bb392',
        highlight: '#1bb392'
      }, {
        value: scope.data.failure,
        color: '#f7ab59',
        highlight: '#f7ab59'
      }];

      var context = elem.find('canvas').get(0).getContext('2d');
      return new Chart(context).Pie(chartData, {segmentShowStroke: false});
    }
  };
});
