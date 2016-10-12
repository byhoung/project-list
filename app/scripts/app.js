'use strict';

/**
 * @ngdoc overview
 * @name productListApp
 * @description
 * # productListApp
 *
 * Main module of the application.
 */
angular
  .module('productListApp', [
    'ngAnimate',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
