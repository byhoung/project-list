'use strict';

/**
 * @ngdoc function
 * @name productListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the productListApp
 */
angular.module('productListApp')
  .controller('MainCtrl', function ($scope, globalScope) {
  	$scope.quantity = 9;
    globalScope.getProducts().then(function(data){
    	$scope.products = data.data.products;
    });
    $scope.checkFilterLength = function(val){
    	$scope.quantity = $scope.changeLength(val);
    };

    $scope.clearFilter = function(){
    	$scope.productSearch = '';
    	$scope.quantity = 9;
    };

    $scope.changeLength = function(val){
    	return val ? false : 9;
    };
  });
