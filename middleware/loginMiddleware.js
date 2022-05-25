const jwt = require('jsonwebtoken');
const { secret } = require('../config/config');

module.exports = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    next()
  }
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      throw new Error
    }
    const decodeData = jwt.verify(token, secret);
    req.user = decodeData;
    next();
  }
  catch (error) {
    return res.status(403).json({message: "User isn't authorized"})
  }
}