const mongoose = require('mongoose')

const Guest = mongoose.model('guests')

module.exports = (app) => {

  app.post("/add-guest", async (req, res) => {
    try {
      // add guest to db from form inputs
      const { data } = req.body

      // avoid duplicate records
      const foundGuest = await Guest.findOne({ pin: data.pin })
      if (!foundGuest) {
        // guest does not exist in db
        const response = await new Guest({
          ...data,
          rsvp: false,
        }).save()
        return res.status(201).send({
          message: "Guest Added",
          status: 201,
          guest: response
        })
      }
      res.status(400).send({
        message: "User already exisit",
        status: 400
      })

    } catch (error) {
      res.status(400).send({
        message: "Something went to wrong",
        status: 400
      })
    }
  })
}