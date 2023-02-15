const express = require('express')
const Helper = require('../helper/fileUpload')
const File = require('../controller/fileController')

const router = express.Router()

router.post('/upload/file', [Helper.singleUpload()], File.fileUpload)

module.exports = router