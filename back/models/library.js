var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
* The library model 
* @name : String, the name
* @creationDate : Date.now
* @releaseDate : String, the release date of the song 
* @styles: Array of string, represent all the style a song may have. 
*/
module.exports = (function(){
    'use strict';

    exports.schema = new Schema({
        name: String,
        creationDate: { type: Date, default: Date.now },
        music: {type: [Schema.Types.ObjectId], default: [] }
    });

    return mongoose.model('library', exports.schema);

})();