const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const db = require('./data/db-config')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

module.exports = server
