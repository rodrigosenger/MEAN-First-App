const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, function() {
    console.log(`BACKEND is running on port ${port}.`)
})

server.use((req, res, next) => {
    console.log('meu middleware 1')
    next()
})

module.exports = server