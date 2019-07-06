const mongoose = require('mongoose')
const validator = require('validator')

const deviceSchema = new mongoose.Schema({
    deviceID: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    }
}, {
    timestamps: true
})

const Device = mongoose.model('Device', deviceSchema)

module.exports = Device