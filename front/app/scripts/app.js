'use strict';

/**
 * @ngdoc overview
 * @name frontApp
 * @description
 * # frontApp
 *
 * Main module of the application.
 */
angular
  .module('frontApp', [
    'ngRoute',
    'frontAppServices',
    'frontAppFilters'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/foo', {
        templateUrl: 'views/foo.html',
        controller: 'FooCtrl'
      })
      .when('/library/:id', {
        templateUrl: 'views/library.html',
        controller: 'LibraryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('BASE_URL', 'http://localhost:8081');
