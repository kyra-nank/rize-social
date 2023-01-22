const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys')

require('./models/Guest');

mongoose.set("strictQuery", false);
mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/addGuestsRoutes')(app);
require('./routes/guestListRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);