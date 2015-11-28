
/*
  Middleware system components
 */

// module dependencies
var logger = require('morgan');
var bodyParser = require('body-parser');

/*
  Array of system middleware in the required installing order
 */
module.exports = [
  logger('dev'),
  bodyParser.json(),
]
