describe('Unit testing pie chart directive', function() {
  var $compile;
  var $scope;
  var $rootScope;

  // Load the app.components module, which contains the directive
  beforeEach(module('app.components'));

  // Store references to $rootScope and $compile
  // so they are available to all tests in this describe block
  beforeEach(inject(function (_$compile_, _$rootScope_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $scope = _$rootScope_.$new();
  }));

  it('Should add a canvas element on the page', function () {
    $scope.details = {
      success: 200,
      failure: 15
    };

    var element = $compile('<pie-chart data="details"/>')($scope);
    $rootScope.$digest();
    // Check that the compiled element contains the templated content
    expect(element.html()).toBe('<canvas width="130" height="130" style="width: 65px; height: 65px;"></canvas>');
  });
});
