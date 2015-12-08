'use strict';

var app = angular.module('ciApp', []);

app.controller('appCtrl', ['$scope', function($scope){
  $scope.list = [
    {
      changelist: '432464',
      owner: 'JTuck',
      startTime: '4/17/2014@ 9:42am',
      build: {
        started: false,
        progress: 0
      },
      unit: {
        started: false,
        progress: 0
      },
      functional: {
        started: false,
        progress: 0
      },
      status: 'pending'
    },
    {
      changelist: '432463',
      owner: 'Dora',
      startTime: '4/17/2014@ 7:40am',
      build: {
        started: true,
        progress: 80
      },
      unit: {
        started: false,
        progress: 0
      },
      functional: {
        started: false,
        progress: 0
      },
      status: 'running'
    },
    {
      changelist: '432462',
      owner: 'Samy',
      startTime: '4/17/2014@ 6:42am',
      build: {
        started: true,
        progress: 100
      },
      unit: {
        started: true,
        progress: 100
      },
      functional: {
        started: true,
        progress: 100
      },
      status: 'passed'
    },
    {
      changelist: '432461',
      owner: 'JTuck',
      startTime: '4/17/2014@ 4:28am',
      build: {
        started: false,
        progress: 0
      },
      unit: {
        started: false,
        progress: 0
      },
      functional: {
        started: false,
        progress: 0
      },
      status: 'failed'
    },
    {
      changelist: '432460',
      owner: 'Samy',
      startTime: '4/17/2014@ 3:14am',
      build: {
        started: true,
        progress: 100
      },
      unit: {
        started: true,
        progress: 100
      },
      functional: {
        started: true,
        progress: 100
      },
      status: 'passed'
    },
    {
      changelist: '432459',
      owner: 'Dora',
      startTime: '4/17/2014@ 1:14am',
      build: {
        started: true,
        progress: 100
      },
      unit: {
        started: false,
        progress: 0
      },
      functional: {
        started: false,
        progress: 0
      },
      status: 'failed'
    }
  ];
}]);
