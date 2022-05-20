module.exports = (value, key) => {
  const { createHmac } = require('node:crypto');
  const hash = createHmac('sha256',key).update(value).digest('hex');
  return hash
}