module.exports = (function() {
    'use strict';

    // The express module
    var express = require('express')
      , mongoose = require('mongoose')
      , router = express.Router()
      , songRepo = require('../models/song')
      , helpers = require('../helpers/utils');


    /**
     * GET -> /rest/song/
     */
    router.get('/', function(req, res){

        /* fetch all the song */
        songRepo.find().exec(function(err, r){

            /* handle response */
            res.send(
                helpers.handleResponse(err, r)
            );

        });

    });

    /**
     * GET -> /rest/song/:id
     */
    router.get('/:id', function(req, res){

        /* _id ObjectId type. */
        songRepo.findOne(
            {
                _id: new mongoose.Types.ObjectId(req.params.id)
            }
        ).exec(function(err, r){

            /* handle response */
            res.send(
                helpers.handleResponse(err, r)
            );

        });

    });

    /**
     * POST -> /rest/song
     * Create a new song.
     */
    router.post('/', function(req, res){
        /* create a document form the POST params */
        new songRepo({
            name: req.body.name,
            author: req.body.author,
            releaseDate: req.body.releaseDate,
            styles: req.body.styles
        }).
        save(function(err){

            /* send a 200 code if everything ok */
            res.send(
                helpers.handleResponse(err, 200)
            );

        });

    });



    return router;

})();