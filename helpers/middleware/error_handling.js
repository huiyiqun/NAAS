
/*
  Middleware for error handling
 */

module.exports = (app) => [
  // handler for 404 not found
  // generate a typical error
  (req, res, next) => {
    err = new Error('Not Found');
    err.status = 404;
    next(err);
  },

  // handler for error handling
  // will return a json which include error message
  (err, req, res, next) => {
    res
      .status(err.status || 500)
      .json({
        error: true,
        message: err.message,
      });
  }
];
