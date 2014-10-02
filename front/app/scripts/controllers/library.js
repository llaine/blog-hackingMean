'use strict';

/**
 * @ngdoc function
 * @name frontApp.controller:LibraryCtrl
 * @description
 * # LibraryCtrl
 * Controller of the frontApp
 */
angular.module('frontApp')
  .controller('LibraryCtrl', ['$scope', 'libraryService', '$routeParams', 'songService', function ($scope, libraryService, $routeParams, songService) {

    /* the current library id */
    var libraryId = $routeParams.id
      , newSongToAdd = [];

    /* Verify in the array is empty. */
    $scope.isArrayEmpty = newSongToAdd;

    /**
     * Handle $http promise
     * @param response
     * @returns {*}
     */
    function checkForResponse(response){
        if(response.status === 200){
            return response.data;
        }
    }

    /**
     * Add or remove the item from the array
     * @param item
     */
    function addToArray(item){
        var position = newSongToAdd.indexOf(item);
        /* when > -1 mean dat is present */
        if(position === -1){
            newSongToAdd.push(item);
        }else{
            newSongToAdd.splice(position, 1);
        }
    }

    /**
     * add the selected song to the song array.
     * @param idSong
     */
    $scope.addSong = function(idSong){
        addToArray(idSong);
    };

    /**
     *  Validation the new array and save him in the database.
     */
    $scope.validNewSongs = function(){
        /* let's assume that the array isn't empty */
        if(newSongToAdd.length > 0){

            libraryService.addSong(newSongToAdd).then(function(data){
                console.log(data);
            });

        }
    };

    /* call to libraryService which retrive all resources */
    libraryService.getById(libraryId).then(function(data){
        /* store the library information */
        var informationsLibrary = checkForResponse(data);

        $scope.currentLibrary = informationsLibrary;

        $scope.isMusic = informationsLibrary.musics === undefined;

    });

    /* call to the songService which retrieve all resources */
    songService.get().then(function(data){

        $scope.songs = checkForResponse(data);

    });


  }]);
