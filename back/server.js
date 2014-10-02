(function(){

    var express = require('express')
      , app = express()
      , libraryService = require('./routes/library')
      , songService = require('./routes/song')
      , conf = require('./conf/general') // Our configuration
	  , mongoose = require('mongoose')  // Mongoose library
      , bodyParser = require('body-parser');

	mongoose.connect('mongodb://'+ conf.mongodb.host + '/' + conf.mongodb.db, conf.mongodb.opt);

	mongoose.connection.on('open', function(ref){
		console.log("connection to mongo server " + conf.mongodb.host);
	});
	// Assign event to the MongoDB instance.
	mongoose.connection.on('error', function(err){
	    console.log(err);
	});
	mongoose.connection.on('disconnected', function(){
	    console.log("Disconnected");
	});

    app.use(bodyParser.urlencoded());
    app.use(bodyParser.json());

    /* All the route.  */
    app.use('/rest/library', log_node(libraryService));
    app.use('/rest/song', log_node(songService));


    /**
     * Log function
     * @param callback
     * @returns {Function}
     */
	function log_node(callback){
	    return function(req, res, next) {
	        console.log(new Date().toDateString() + " : " + req.method + " | " + req.baseUrl + " => " + req.url);
            res.setHeader('Access-Control-Allow-Origin', '*'); // Allow Access origin from everywhere
	        callback.call(null, req, res, next);
	    }
	}


    app.listen(8081);
})();