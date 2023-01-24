const db = require("../models");
const SHA256 = require('./helpers/SHA256');

const register = (req, res) => {
  const {name,mail,password} = req.body;
  db.User.create({
    name: name,
    mail: mail,
    password: SHA256(password, mail)
  }).then((response)=>res.send(response));
}

module.exports = register;