const express = require('express')
const bcrypt = require('bcryptjs')

const userDb = require('./usersHelper.js')
const middleware = require('./usersMiddleware.js')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Users Route' })
})

router.post('/register', middleware.validateBody, (req, res) => {
  let user = req.body

  const hash = bcrypt.hashSync(user.password, 14)
  user.password = hash

  userDb
    .add(user)
    .then(saved => {
      res.status(201).json(saved)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.post('/login', middleware.validateBody, (req, res) => {
  let { username, password } = req.body

  userDb
    .findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.user = user;
        res.status(200).json({ message: `Welcome ${user.username}` })
      } else {
        res.status(401).json({ message: 'Access Denied' })
      }
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

router.get('/users', middleware.restricted, (req, res) => {
  userDb
    .find()
    .then(users => {
      res.status(200).json(users)
    })
    .catch(error => {
      res.status(500).json(error)
    })
})

module.exports = router


