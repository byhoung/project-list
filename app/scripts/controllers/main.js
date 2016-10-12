'use strict';

/**
 * @ngdoc function
 * @name productListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the productListApp
 */
angular.module('productListApp')
  .controller('MainCtrl', function ($scope, globalScope, $timeout) {
  	$scope.quantity = 9;
    globalScope.getProducts().then(function(data){
    	$scope.products = data.data.products;
    });
    $scope.doFilter = function(val){
    	$scope.quantity = $scope.changeLength(val);
        $timeout.cancel($scope.timer);
        $scope.timer = $timeout(function(){
            globalScope.getProducts().then(function(data){
                $scope.products = data.data.products;
                $scope.products = $scope.products.filter(function(item){
                    var result = [];
                    for(var key in item){
                        var k = item[key].toLowerCase();
                        if(k.indexOf(val.toLowerCase()) > -1){
                            return item;
                        }
                    }
                });
            });
        }, 500);
    };

    $scope.clearFilter = function(){
    	$scope.productSearch = '';
    	$scope.quantity = 9;
    };

    $scope.changeLength = function(val){
    	return val ? false : 9;
    };
  });
