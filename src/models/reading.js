const mongoose = require('mongoose')

const readingSchema = new mongoose.Schema({
    deviceID: {
        type: String,
        required: true
    },
    temp: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
})

const Reading = mongoose.model('Reading', readingSchema)

module.exports = Reading