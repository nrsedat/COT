'use strict';

var angular = require('angular');
var appComponents = angular.module('app.components');

appComponents.directive('processDetails', function () {
  return {
    restrict: 'E',
    scope: {
      status: '=',
      details: '='
    },
    link: function (scope, elem, attrs){
      scope.Math = window.Math;
      scope.label = attrs.label;
    },
    templateUrl: 'components/process-details.html'
  };
});
