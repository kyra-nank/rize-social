const mongoose = require('mongoose');

const Guest = mongoose.model('guests');

module.exports = (app) => {

  app.post("/add-guest", async (req, res) => {
    // add guest to db from form inputs
    const inputPin = "13282";
    const name = "Kyra Nankivell";
    const image = "https://media.istockphoto.com/id/1208585275/photo/profile-of-a-serene-young-woman.jpg?s=612x612&w=0&k=20&c=GU_NrBvXEiKL8GDe6MIVmx_M3xzwMKzjJ27RI0rHmw8=";
    const linkedIn = "https://www.linkedin.com/in/kyranank/";
    const instagram = "https://www.instagram.com/kyra_nank/";

    // avoid duplicate records
    const foundGuest = await Guest.findOne({ pin: inputPin });
    if (!foundGuest) {
      // guest does not exist in db
      await new Guest({
        pin: inputPin,
        rsvp: false,
        name: name,
        image: image,
        linkedIn: linkedIn,
        instagram: instagram
      }).save()
    }
  });

};