const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const readingRouter = require('./routers/reading')

const app = express()
app.use(express.json())
app.use(userRouter)
app.use(readingRouter)

app.listen(process.env.PORT, '0.0.0.0')

