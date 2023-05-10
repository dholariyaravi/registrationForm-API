var bunyan = require('bunyan');
var log = bunyan.createLogger({name: "myapp"});

var log = bunyan.createLogger({
    name: 'foo',
    streams: [{
        path: 'foo.log',
        type: 'file'
    }]
});
const errorHandler = (error, req, res, next) => {
    // Logging the error here
    // console.log(error); 
    // Returning the status and error message to client
    res.status(400).send(error.message); 
    
    log.info(error + error.message);
}
module.exports = errorHandler;