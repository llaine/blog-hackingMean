'use strict';

/**
 * @ngdoc service
 * @name frontApp.songService
 * @description
 * # songService
 * Service in the frontApp.
 */
angular.module('frontAppServices')
  .factory('songService', ['$http', 'BASE_URL', function($http, BASE_URL) {

        return {
            /**
             * GET -> Get all the songs
             * @returns {HttpPromise}
             */
            get: function(){
                return $http.get(BASE_URL + '/rest/song');
            },
            /**
             * GET -> Get one song
             * @param id
             * @returns {HttpPromise}
             */
            getById: function(id){
                return $http.get(BASE_URL + '/rest/song/'+ id);
            },
            /**
             * POST -> Create a new library
             * @param songInfos
             */
            createNew: function(songInfos){
                console.log(songInfos);
            }
        };

  }]);
