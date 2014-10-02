'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
  .controller('MainCtrl', ['$scope', 'libraryService', function ($scope, libraryService) {

        libraryService.get().then(function(data){

            if(data.status === 200){
                /* access to the data informations */
                $scope.theLibraries = data.data;
            }
        });

  }]);
