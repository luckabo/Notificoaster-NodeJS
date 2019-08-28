const express = require('express')
const Reading = require('../models/reading')
const router = new express.Router()

router.post('/readings', async (req, res) => {
    const reading = new Reading(req.body)

    try {
        await reading.save()
        res.status(201).send(reading)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/readings', async (req, res) => {
    try {
        const readings = await Reading.find({})
        res.send(readings)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/readings/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const reading = await Reading.findById(_id)
        if (!reading) {
            return res.status(404).send()
        }
        res.send(reading)
    } catch (e) {
        res.status(500).send()
    }
})

router.get('/readings/deviceID/:deviceID', (req, res) => {
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

router.get('/readings/deviceID/:deviceID/createdAt/:createdAt', (req, res) => {
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

module.exports = router