var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

/**
* fooBar model. 
* name : String
* type : String 
* toString() : String  
* 
* A really nice model. 
*/
module.exports = (function(){
    'use strict';

    exports.schema = new Schema({
        name: String,
        type: String
    });

    exports.schema.statics.toString = function(){
        return "Hello i'm " + this.name + " a  " + this.type + " schema ! ";
    };

    // Very important, in order to compile the mongoose's schema definition.
    return mongoose.model('fooBar', exports.schema);
})();