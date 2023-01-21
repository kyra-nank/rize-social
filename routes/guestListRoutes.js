
module.exports = (app) => {

  app.get("/", (req, res) => {
    res.send({ msg: "get guests from monogodb" });
  });

  app.post("/", (req, res) => {
    res.send({ msg: "set rsvp to true" });
  });

}