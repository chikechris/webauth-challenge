const express = require('express')
const bcrypt = require('bcryptjs')

const userDb = require('./usersModel.js')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Users Route' })
})

module.exports = router
