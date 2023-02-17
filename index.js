const express = require('express')
var bodyParser = require("body-parser")
const mongoose = require('mongoose')
const keys = require('./config/keys')

require('./models/Guest')
const FileCSV = require('./routes/fileRoutes')
mongoose.set("strictQuery", false)
mongoose.connect(keys.mongoURI)

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('./routes/addGuestsRoutes')(app)
require('./routes/guestListRoutes')(app)
require('./routes/fileRoutes')(app)


const PORT = process.env.PORT || 5000
app.listen(PORT)