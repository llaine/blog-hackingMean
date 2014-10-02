var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
* The song model 
* @name : String, the name
* @author: String the author
* @releaseDate : String, the release date of the song 
* @styles: Array of string, represent all the style a song may have. 
*/
module.exports = (function(){
    'use strict';

    exports.schema = new Schema({
        name: String,
        author: String,
        releaseDate: String,
        styles: [String]
    });

    return mongoose.model('music', exports.schema);

})();