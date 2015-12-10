'use strict';

module.exports = [
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
