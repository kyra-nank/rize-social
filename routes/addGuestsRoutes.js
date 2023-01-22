const mongoose = require('mongoose');

const Guest = mongoose.model('guests');

module.exports = (app) => {

  app.get("/add-guest", (req, res) => {
    res.send({ msg: "serve add guest form" });

    // avoid duplicate records
    Guest.findOne({ pin: "13282" })
      .then((existingGuest) => {
        if (!existingGuest) {
          // guest does not exist in db
          new Guest({
            pin: "13282",
            rsvp: true,
            name: "Kyra Nankivell",
            image: "https://media.istockphoto.com/id/1208585275/photo/profile-of-a-serene-young-woman.jpg?s=612x612&w=0&k=20&c=GU_NrBvXEiKL8GDe6MIVmx_M3xzwMKzjJ27RI0rHmw8=",
            linkedIn: "https://www.linkedin.com/in/kyranank/",
            instagram: "https://www.instagram.com/kyra_nank/"
          }).save()
        }
      })

  });

  app.post("/add-guest", (req, res) => {
    res.send({ msg: "add guest to database" });
  });

};