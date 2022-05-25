const jwt = require('jsonwebtoken');
const { secret } = require('../../config/config')

module.exports = (id) => {
  const payload = {
      id
  }
  return jwt.sign(payload, secret, {expiresIn: "24h"} )
}