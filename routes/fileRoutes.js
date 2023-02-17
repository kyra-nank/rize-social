const excelToJson = require('convert-excel-to-json')
const Helper = require('../helper/fileUpload')

const mongoose = require('mongoose')


const Guest = mongoose.model('guests')

module.exports = (app) => {

    app.post("/upload/file", [Helper.singleUpload()], async (req, res) => {
        try {
            const { path } = req.file

            const data = await excelToJson({
                sourceFile: path,
                header: {
                    // Is the number of rows that will be skipped and will not be present at our result object. Counting from top to bottom
                    rows: 1 // 2, 3, 4, etc.
                },
                columnToKey: {
                    A: 'name',
                    B: 'image',
                    C: 'linkedin',
                    D: 'instagram',
                    E: 'pin'
                }
            })
            let allData = []
            for (const key in data) {
                allData = [...allData, ...data[key]]
            }
            await allData.filter((guest, index) => allData.findIndex((obj => obj.pin === guest.pin)) === index)
                .map(async (data) => {
                    const foundGuest = await Guest.findOne({ pin: data.pin })
                    let response
                    if (!foundGuest) {
                        response = await new Guest({
                            ...data,
                            rsvp: false,
                        }).save()
                    }
                })

            await res.status(201).send({
                message: "File Uploaded.",
                status: 201,
            })
        } catch (error) {
            res.status(400).send({
                message: "Something went to wrong.",
                status: 400,
                error
            })
        }
    })
} 