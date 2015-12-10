'use strict';

var angular = require('angular');
var appViews = angular.module('app.views', []);

appViews.controller('dashboardCtrl', ['$scope', '$http', function ($scope, $http){
  $scope.Math = window.Math;
  $http({
    method: 'GET',
    url: '/api/getProcessList'
  }).then(function successCallback(response) {
    $scope.list = response.data;
  }, function errorCallback(response) {
    console.log(response.data);
  });
}]);
