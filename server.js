const express = require('express')
const usersRoute = require('./routes/usersRoute.js')
const session = require('express-session');

const server = express()

server.use(express.json())

server.use(
  session({
    name: 'chocoDip',
    secret: 'keep it a secret',
    cookie: {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      secure: false,
      httpOnly: true,
    },
    resave: false,
    saveUninitialized: false,
  })
);



server.use('/api', usersRoute)

server.use('/', (req, res) => {
  res.send(`<h2>API Home</h2>`)
})

module.exports = server


