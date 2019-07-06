const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/notificoaster-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const Device = mongoose.model('Device', {
//     deviceID: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('email is invalid')
//             }
//         }
//     }
// })

// const me = new Device({
//     deviceID: 'TESTY',
//     email: 'testygmail.com'
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })

// const Reading = mongoose.model('Reading', {
//     deviceID: {
//         type: String,
//         required: true
//     },
//     temp: {
//         type: Number//,
//         // validate(value) {
//         //     if (value < 0) {
//         //         throw new Error('Needs to be positive')
//         //     } 
//         // }
//     }
// })

// const me = new Reading({
//     deviceID: 'TESTY',
//     temp: 12
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error', error)
// })