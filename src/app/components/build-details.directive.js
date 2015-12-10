'use strict';

var angular = require('angular');
var appComponents = angular.module('app.components');

appComponents.directive('buildDetails', function () {
  return {
    restrict: 'E',
    scope: {
      status: '=',
      startTime: '='
    },
    templateUrl: 'components/build-details.html'
  };
});
