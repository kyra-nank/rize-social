const mongoose = require('mongoose');

const Guest = mongoose.model('guests');

module.exports = (app) => {

  app.get("/", (req, res) => {
    // get all the records from db & send to frontend
    Guest.find({})
      .then((guests) => {
        res.send(guests);
      });

  });

  app.post("/", (req, res) => {
    // set rsvp to true if the pin is correct - assuming no one misenters a pin that corr. to another user
    const inputPin = "13282"

    // find user with the entered pin & change rsvp to true
    Guest.updateOne({ pin: inputPin }, { rsvp: true })
      .then((doc) => {
        if (doc.modifiedCount == 1) {
          // user rsvped
          res.send({ msg: "success - you have been rsvped!" })
        } else {
          // no docs modified - pin not found
          // since there is no way for someone to try rsvping again, no need to handle the case where the record is already set to true
          res.send({ msg: "incorrect - please try again" })
        }
      });

  });

}