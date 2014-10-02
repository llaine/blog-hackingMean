module.exports = (function(){
    'use strict';

    // The express module
    var express = require('express')
      , mongoose = require('mongoose')
      , router = express.Router()
      , libraryRepo = require('../models/library')
      , helpers = require('../helpers/utils');

    /**
     * GET -> /rest/library/
     */
    router.get('/', function(req, res) {

        /* find all document in the library collection */
        libraryRepo.find().exec(function(err, r){

            /* handle response */
            res.send(
                helpers.handleResponse(err, r)
            );

        });

    });

    /**
     * GET -> /rest/library/get/:id
     */
    router.get('/get/:id', function(req, res){

        /* _id ObjectId type. */
        libraryRepo.findOne(
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
     * POST -> /rest/library
     */
    router.post('/', function(req, res){

        /* create a new library document */
        new libraryRepo({
            name: req.body.name,
            music: req.body.songs
        })
        .save(function(err){

            /* send a 200 if everything ok ! */
            res.status(
                helpers.handleResponse(err, 200)
            ).end();

        });


    });

    /**
     * PUT -> /rest/library/:id
     */
    router.post('/update/:id', function(req, res){

        res.setHeader('Access-Control-Allow-Origin', '*');

        libraryRepo.update(
            {
                _id: req.params.id
            },
            {
                $push: {
                    musics: req.params.songs
                }
            }
        ).exec(function(err){

            /* send a 200 if everything ok ! */
            res.status(
                helpers.handleResponse(err, 200)
            ).end();

        });

    });


    return router;
})();