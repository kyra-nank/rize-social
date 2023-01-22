const mongoose = require('mongoose');

const Guest = mongoose.model('guests');

module.exports = (app) => {

  app.get("/", (req, res) => {
    res.send({ msg: "get guests from monogodb" });



  });

  app.post("/", (req, res) => {
    res.send({ msg: "set rsvp to true" });

    // find user with the entered pin & change rsvp to true
    Guest.updateOne({ pin: "13282" }, { rsvp: true })
      .then((doc) => {
        if (doc.modifiedCount == 0) {
          // no docs modified - pin not found
          // since there is no way for someone to try rsvping again, no need to handle the case where the record is already set to true
          console.log("incorrect pin")
        }
      })

  });

}