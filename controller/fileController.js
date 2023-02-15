const excelToJson = require('convert-excel-to-json')
const FileUpload = require('../models/FileModel')

exports.fileUpload = async (req, res) => {
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
        let isData = []
        for (const key in data) {
            const response = await FileUpload.insertMany(data[key])
            isData = isData.length > 0 ? [...isData, ...response] : [...response]
        }
        res.status(201).send({
            message: "Data SuccessFully Saved.",
            status: 201,
            data: isData
        })
    } catch (error) {
        res.status(400).send({
            message: "Something went to wrong.",
            status: 400,
            error
        })
    }
}