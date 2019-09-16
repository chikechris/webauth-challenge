const express = require('express')
const usersRoute = require('./routes/usersRoute.js')

const server = express()

server.use(express.json())

server.use('/api', usersRoute)

server.use('/', (req, res) => {
  res.send(`<h2>API Home</h2>`)
})

module.exports = server


