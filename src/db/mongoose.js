const mongoose = require('mongoose')

mongoose.connect('mongodb://user:password1@ds247827.mlab.com:47827/heroku_29r51ncj', {
    useNewUrlParser: true,
    useCreateIndex: true
})