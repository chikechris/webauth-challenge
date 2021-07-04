const bcrypt = require('bcryptjs');
const userDb = require('./usersHelper.js')

function validateBody(req, res, next) {
  const { username, password } = req.body;
  if (username && password) {
    next();
  } else {
    res.status(401).json({ message: "Provide username or password" })
  }
}

function restricted(req, res, next) {
  const { username, password } = req.headers;

  if (req.session && req.session.user) {
    next();
  } else {
    res.status(401).json({ message: 'Access Denied' })
  }
}

module.exports = {
  validateBody,
  restricted
};