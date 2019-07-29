const express = require('express')
const Device = require('../models/device')
const router = new express.Router()

router.post('/devices', (req, res) => {
    const device = new Device(req.body)

    device.save().then(() => {
        res.status(201).send(device)
    }).catch((e) => {
        res.status(400).send(e)
    })
})

router.get('/devices', (req, res) => {
    Device.find({}).then((devices) => {
        res.send(devices)
    }).catch((e) => {
        res.status(500).send()
    })
})

router.get('/devices/:id', (req, res) => {
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

module.exports = router
