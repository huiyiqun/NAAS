
/*
  Application middleware index file
 */

// module dependencies
var system = require('./system_components');
var error = require('./error_handling');

function installMiddleware(app, middleware) {
  for (var component of middleware) {
    if (Array.isArray(component))
      app.use(component[0], component[1]);
    else if (component)
      app.use(component);
  }
}

module.exports = {
  // install before routing middleware on app
  // @param {express} app app to install middleware
  installRequestMiddleware: (app) => {
    // install system required middleware
    installMiddleware(app, system);
  },

  // install after routing (error handling) middleware on app
  // @param {express} app app to install middleware
  installErrorHandling: (app) => {
    // Setup middleware for error handling
    installMiddleware(app, error(app));
  },
}
