// CRUD create read update delete
// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'notificoaster'


MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // db.collection('devices').findOne({ deviceID: 'NOTIF-A-SIM01' }, (error, device) => {
    //     if (error) {
    //         return console.log('error')
    //     }
    //     console.log(device)
    // })

    // db.collection('devices').findOne({ _id: new ObjectID("5d1fb6cb5f1c17260c8d7b6a") }, (error, device) => {
    //     if (error) {
    //         return console.log('error')
    //     }
    //     console.log(device)
    // })


    // db.collection('readings').find({ deviceID: "NOTIF-A-SIM01" }).toArray((error, reading) => {
    //     if (error) {
    //         return console.log('error')
    //     }
    //     console.log(reading)
    // })

})