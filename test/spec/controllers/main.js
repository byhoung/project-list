'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('productListApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should retrieve a list of products', function () {
    expect(scope.quantity).toBeDefined();
    expect(scope.checkFilterLength).toBeDefined();
    expect(scope.clearFilter).toBeDefined();
    expect(scope.changeLength('abc')).toBe(false);
  });
});