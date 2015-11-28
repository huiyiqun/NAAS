
/*
  NAAS main file
 */

// module dependencies
var express = require('express');
var path = require('path');

var controller = require('./controllers')
var middleware = require('./helpers/middleware')
var staticHelper = require('./helpers/static')

// create and setup express app
var app = express();

staticHelper.installStaticHelper(app);
middleware.installRequestMiddleware(app);
controller.installControllers(app);
middleware.installErrorHandling(app);

module.exports = app;
