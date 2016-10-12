'use strict';

/* COMMENT: Using stubbed data that was generated from JSON Generator. */
angular.module('productListApp')
	.service('globalScope', function(Products){
		return {
			getProducts: function(){
				return Products.get().success(function(data){
					return data.products;
				});
			}
		};
	})

	
/* COMMENT: I split up the consumption of data here so that my factories are simply retrieving 
the data while my services are returning the data to whatever controller needs them. The commented
out block of code is how I would do it in a real world scenario. In my factories I've also used the $q service
to force an asynchronous like call like I would when calling an api. */


	// .factory('Account', function($resource){
	// 	return $resource(resourceUrl + '/accounts/:id', {}, {
	// 		'get': {
	// 			method: 'GET',
	// 			params: {
	// 				id: '@id'
	// 			}
	// 		}
	// 	});
	// })
	.factory('Products', function($http){
		return {
			get : function(){
				return $http.get('products.json');
			},
		};
	});
