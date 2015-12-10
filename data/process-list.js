'use strict';

module.exports = [
  {
    changelist: '432464',
    owner: 'JTuck',
    startTime: 1397742120000,
    totalProgress: 0,
    build: 'pending',
    unit: false,
    functional: false,
    status: 'pending'
  },
  {
    changelist: '432463',
    owner: 'Dora',
    startTime: 1397734800000,
    totalProgress: 40,
    build: 'running',
    unit: false,
    functional: false,
    status: 'running'
  },
  {
    changelist: '432462',
    owner: 'Samy',
    startTime: 1397731320000,
    totalProgress: 100,
    build: 'passed',
    unit: 'passed',
    functional: 'passed',
    status: 'passed',
    details: {
      unit: {
        duration: '4:30',
        success: 342,
        failure: 3
      },
      functional: {
        duration: '3:30',
        success: 14321,
        failure: 2000
      }
    }

  },
  {
    changelist: '432461',
    owner: 'JTuck',
    startTime: 1397723280000,
    totalProgress: 0,
    build: 'failed',
    unit: false,
    functional: false,
    status: 'failed'
  },
  {
    changelist: '432460',
    owner: 'Samy',
    startTime: 1397718840000,
    totalProgress: 100,
    build: 'passed',
    unit: 'passed',
    functional: 'passed',
    status: 'passed',
    details: {
      unit: {
        duration: '2:30',
        success: 200,
        failure: 15
      },
      functional: {
        duration: '5:30',
        success: 1500,
        failure: 300
      }
    }
  },
  {
    changelist: '432459',
    owner: 'Dora',
    startTime: 1397711640000,
    totalProgress: 50,
    build: 'passed',
    unit: 'failed',
    functional: false,
    status: 'failed',
    details: {
      unit: {
        startTime: 1397711820000,
        success: 0,
        failure: 34
      }
    }
  }
];
