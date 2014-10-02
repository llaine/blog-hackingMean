'use strict';

/**
 * @ngdoc filter
 * @name frontApp.filter:date
 * @function
 * @description
 * # date
 * Filter in the frontApp.
 */
angular.module('frontAppFilters', [])
  .filter('date', function () {
    return function (input) {
      return new Date(input).toDateString();
    };
  });
