'use strict';

/**
 * @ngdoc service
 * @name frontApp.libraryService
 * @description
 * # libraryService
 * Service in the frontApp.
 */
angular.module('frontAppServices', [])
  .factory('libraryService', ['$http', 'BASE_URL', function($http, BASE_URL) {

        return {
            /**
             * GET -> Get all the libraries
             * @returns {HttpPromise}
             */
            get: function(){
                return $http.get(BASE_URL + '/rest/library');
            },
            /**
             * GET -> Get one library
             * @param id
             * @returns {HttpPromise}
             */
            getById: function(id){
                return $http.get(BASE_URL + '/rest/library/get/'+ id);
            },
            /**
             * POST -> Create a new library
             * @param libInfos
             */
            createNew: function(libInfos){
               console.log(libInfos);
            },
            /**
             * PUT -> Add new song in the current library music array.
             * @param idLibrary
             * @param theNewSongArray
             * @returns {HttpPromise}
             */
            addSong: function(idLibrary, theNewSongArray){
                return $http({
                    method: 'POST',
                    url: BASE_URL + '/rest/library/update/' + idLibrary,
                    data: {
                        songs:theNewSongArray
                    }
                });
            }

        };

  }]);
