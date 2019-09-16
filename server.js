const express = require('express')
const usersRoute = require('./routes/usersRoute.js')

const server = express()

server.use(express.json())

server.use('/api/users', usersRoute)

server.use('/', (req, res) => {
  res.send(`<h2>Api Home</h2>`)
})

module.exports = server

