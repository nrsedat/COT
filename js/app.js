'use strict';

var app = angular.module('ciApp', []);

app.controller('appCtrl', ['$scope', function ($scope){
  $scope.Math = window.Math;
  $scope.colors = {
    success: '#1bb392',
    failure: '#f7ab59'
  };

  $scope.list = [
    {
      changelist: '432464',
      owner: 'JTuck',
      startTime: '4/17/2014@ 9:42am',
      totalProgress: 0,
      build: 'pending',
      unit: false,
      functional: false,
      status: 'pending'
    },
    {
      changelist: '432463',
      owner: 'Dora',
      startTime: '4/17/2014@ 7:40am',
      totalProgress: 40,
      build: 'running',
      unit: false,
      functional: false,
      status: 'running'
    },
    {
      changelist: '432462',
      owner: 'Samy',
      startTime: '4/17/2014@ 6:42am',
      totalProgress: 100,
      build: 'passed',
      unit: 'passed',
      functional: 'passed',
      status: 'passed',
      details: {
        unit: {
          success: 342,
          failure: 3
        },
        functional: {
          success: 14321,
          failure: 2000
        }
      }

    },
    {
      changelist: '432461',
      owner: 'JTuck',
      startTime: '4/17/2014@ 4:28am',
      totalProgress: 0,
      build: 'failed',
      unit: false,
      functional: false,
      status: 'failed'
    },
    {
      changelist: '432460',
      owner: 'Samy',
      startTime: '4/17/2014@ 3:14am',
      totalProgress: 100,
      build: 'passed',
      unit: 'passed',
      functional: 'passed',
      status: 'passed'
    },
    {
      changelist: '432459',
      owner: 'Dora',
      startTime: '4/17/2014@ 1:14am',
      totalProgress: 50,
      build: 'passed',
      unit: 'failed',
      functional: false,
      status: 'failed'
    }
  ];
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
