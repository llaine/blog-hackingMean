module.exports = (function(){
    'use strict';

    // The express module
    var express = require('express')
      , router = express.Router(); // Routing service of express 

  	var fooBar = require('../models/fooBar');

    //Our default route 
    router.get('/', function(req, res) {
        res.send("Hello World from router ! ");
    });

    
    router.get('/fooBar', function(req, res){
        new fooBar({
            name: "Louis",
            type: "JavaScript loverz"
        }).save(function(err){
            if(err) throw err;
            res.send(" It's in the databases now ! ");
        });
    });
    
    return router;
})();