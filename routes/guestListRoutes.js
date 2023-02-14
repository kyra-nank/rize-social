const mongoose = require('mongoose');


const Guest = mongoose.model('guests');

module.exports = (app) => {

  app.get("/guest-list", async (req, res) => {
    // get all the records from db & send to frontend
    const guests = await Guest.find({});
    res.send(guests);
  });

  app.post("/rsvp", async (req, res) => {
    // set rsvp to true if the pin is correct - assuming no one misenters a pin that corr. to another user
    console.log("the req in the /rsvp server route is")
    console.log(req)
    const inputPin = req.body;

    // find user with the entered pin & change rsvp to true
    const doc = await Guest.updateOne({ pin: inputPin }, { rsvp: true });
    if (doc.modifiedCount == 1) {
      // user rsvped
      res.send(true)
    } else {
      // no docs modified - pin not found
      // since there is no way for someone to try rsvping again, no need to handle the case where the record is already set to true
      res.send(false)
    }

  });

}  