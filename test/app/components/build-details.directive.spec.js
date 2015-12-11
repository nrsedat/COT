'use strict';

describe('Unit testing build details directive', function () {
  var $compile;
  var $scope;
  var $rootScope;

  // Load the app.components module, which contains the directive
  beforeEach(module('app.components'));
  beforeEach(module('Templates'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function (_$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $scope = _$rootScope_.$new();
  }));

  it('The label should be build', function () {
    $scope.details = {
      success: 200,
      failure: 15
    };

    var element = $compile('<build-details status="item.build" start-time="item.startTime" />')($scope);
    $rootScope.$digest();
    // Check that the compiled element contains the templated content
    expect(element.find('.build-label').text().trim()).toBe('Build');
  });
});
