const mongoose = require('mongoose')

const Schema = mongoose.Schema

const fileSchema = new Schema({
    name: {
        type: String
    },
    image: {
        type: String
    },
    linkedin: {
        type: String
    },
    instagram: {
        type: String
    },
    pin: {
        type: String
    }
})

const FileUpload = mongoose.model('FileUpload', fileSchema)
module.exports = FileUpload