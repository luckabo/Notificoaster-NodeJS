const express = require('express')
require('./db/mongoose')

const Device = require('./models/device')
const Reading = require('./models/reading')

const app = express()
// const port = process.env.PORT || 3000

app.use(express.json())


// Devices
app.post('/devices', (req, res) => {
    const device = new Device(req.body)

    device.save().then(() => {
        res.status(201).send(device)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.get('/devices', (req, res) => {
    Device.find({}).then((devices) => {
        res.send(devices)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/devices/:id', (req, res) => {
    const _id = req.params.id

    Device.findById(_id).then((device) => {
        if (!device) {
            return res.status(404).send()
        }

        res.send(device)
    }).catch((e) => {
        res.status(500).send()
    })
})


// Readings
app.post('/readings', (req, res) => {
    const reading = new Reading(req.body)
    console.log('henlo')
    console.log(req)

    reading.save().then(() => {
        // res.status(201).send(reading)
        res.send(reading)

    }).catch((e) => {
        res.status(400).send(e)
    })
})

app.get('/readings', (req, res) => {
    Reading.find({}).then((readings) => {
        res.send(readings)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/readings/:id', (req, res) => {
    const _id = req.params.id

    Reading.findById(_id).then((reading) => {
        if (!reading) {
            return res.status(404).send()
        }

        res.send(reading)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/readings/deviceID/:deviceID', (req, res) => {
    const _deviceID = req.params.deviceID

    Reading.find({ deviceID: _deviceID} ).then((reading) => {
        if (reading.length == 0) {
            return res.status(404).send()
        }

        res.send(reading)
    }).catch((e) => {
        res.status(500).send()
    })
})

// Testing endpoint
app.post('/testing', (req, res) => {
    console.log(req)
    res.send('testing')
})

// Readings by device id and before timestamp
app.get('/readings/deviceID/:deviceID/createdAt/:createdAt', (req, res) => {
    const _deviceID = req.params.deviceID
    const _createdAt = req.params.createdAt


    Reading.find({ deviceID: _deviceID, createdAt: { $gte: _createdAt } } ).then((reading) => {
        if (reading.length == 0) {
            return res.status(404).send()
        }

        res.send(reading)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.listen(process.env.PORT, '0.0.0.0')
// app.listen(port, () => {
//     console.log('server is up on port ' + port)
// })

