const mongoose = require('mongoose');
const { Schema } = mongoose;

const guestSchema = new Schema({
  pin: String,
  rsvp: { type: Boolean, default: false },
  name: String,
  image: String,
  linkedIn: String,
  instagram: String
});

mongoose.model('guests', guestSchema);