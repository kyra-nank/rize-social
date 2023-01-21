
module.exports = (app) => {

  app.get("/add-guest", (req, res) => {
    res.send({ msg: "serve add guest form" });
  });

  app.post("/add-guest", (req, res) => {
    res.send({ msg: "add guest to database" });
  });

};