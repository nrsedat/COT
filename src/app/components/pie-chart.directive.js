'use strict';

var angular = require('angular');
var appComponents = angular.module('app.components');

appComponents.directive('pieChart', function () {
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
