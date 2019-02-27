const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors')

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(cors())

const index = require('./routes/index')
const topics = require('./routes/topics')

app.use('/', index)
app.use('/topics', topics)

const server = app.listen(4000, () => {
    console.log(`Express is runing on -> ${server.address().port}`)
})