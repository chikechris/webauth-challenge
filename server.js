const express = require('express')


const server = express()

server.use(express.json())



server.use('/', (req, res) => {
  res.send(`<h2>Api Home</h2>`)
})

module.exports = server
