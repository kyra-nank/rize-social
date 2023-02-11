// fixes the issue with having local vs. heroku links

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    ["/add-guest", "/guest-list", "/rsvp"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};

// DOESNT WORK?? (below)
// const proxy = require('http-proxy-middleware');

// module.exports = function (app) {
//   app.use(
//     ['/add-guest', '/guest-list', '/rsvp'],
//     proxy({ target: 'http://localhost:5000' })
//   )
// }

// unreliable - sometimes it works and sometimes 504 error, got new system to display tiles ONCE (with current config)
// now just getting a "this site cannot be reached, blah blah on the brower.."
// all i did was try to quit and restart the server