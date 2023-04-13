const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const hashPassword = async (password) => {
  const saltRounds = 10;

  return await new Promise((resolve, reject) => {
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) return reject(err);
      return resolve(hash);
    })
  })
}

const generateToken = async (user) => {
  return jwt.sign(user, process.env.JWT_SECRET);
}

module.exports = {
  hashPassword,
  generateToken
}