const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const potluckRouter = require('./potlucks/potluck-router')
const usersRouter = require('./users/users-router')
const authRouter = require('./auth/auth-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/potlucks', potluckRouter)
server.use('/api/users', usersRouter)
server.use('/auth', authRouter)

server.get('/', (req, res) => {
  res.json(`Welcome to the Potluck Planner server!`)
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    });
  });

module.exports = server
