const express = require('express')
const mainRouter = require('./routers')
const helmet = require('helmet')

const server = express()

server.use(express.json())
server.use(helmet())
server.use('/', mainRouter)

module.exports = server