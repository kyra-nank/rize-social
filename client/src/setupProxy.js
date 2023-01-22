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