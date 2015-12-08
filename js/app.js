'use strict';

var app = angular.module('ciApp', []);

app.controller('appCtrl', ['$scope', function ($scope){
  $scope.list = [
    {
      changelist: '432464',
      owner: 'JTuck',
      startTime: '4/17/2014@ 9:42am',
      totalProgress: 0,
      build: true,
      unit: false,
      functional: false,
      status: 'pending'
    },
    {
      changelist: '432463',
      owner: 'Dora',
      startTime: '4/17/2014@ 7:40am',
      totalProgress: 40,
      build: true,
      unit: false,
      functional: false,
      status: 'running'
    },
    {
      changelist: '432462',
      owner: 'Samy',
      startTime: '4/17/2014@ 6:42am',
      totalProgress: 100,
      build: true,
      unit: true,
      functional: true,
      status: 'passed'
    },
    {
      changelist: '432461',
      owner: 'JTuck',
      startTime: '4/17/2014@ 4:28am',
      totalProgress: 0,
      build: true,
      unit: false,
      functional: false,
      status: 'failed'
    },
    {
      changelist: '432460',
      owner: 'Samy',
      startTime: '4/17/2014@ 3:14am',
      totalProgress: 100,
      build: true,
      unit: true,
      functional: true,
      status: 'passed'
    },
    {
      changelist: '432459',
      owner: 'Dora',
      startTime: '4/17/2014@ 1:14am',
      totalProgress: 50,
      build: true,
      unit: true,
      functional: false,
      status: 'failed'
    }
  ];
}]);
