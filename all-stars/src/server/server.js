const path = require('path')
const express = require('express')

const stars = require('./routes/stars.js')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/stars', stars)

module.exports = server
