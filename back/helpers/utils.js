/**
 * Created by llaine on 02/10/2014.
 */

module.exports = (function(){

    var helper = {};

    /**
     * Handle a MongoDb response
     * @param err
     * @param r
     * @returns {*}
     */
    helper.handleResponse = function(err, r){

        try {
            if(err) throw err;
        } catch(e){
            helper.log(e.message);
        }

        return r;
    };

    /**
     * Log function
     * @param msg
     */
    helper.log = function(msg){
        if(msg !== undefined){
            console.log("[" + new Date().toDateString() + "]" + msg);
        }
    };

    return helper;
})();