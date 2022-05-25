const db = require("../models");
const SHA256 = require('./helpers/SHA256');
const generateAccessToken = require('./helpers/generateAccessToken')

const login = (req, res) => {
  const {mail,password} = req.body;

  db.Users.findAll({
    attributes: ['name', 'mail', 'id'],
    where: {
      mail: mail,
      password: SHA256(password, mail)
    }
  }).then(response=>{
    if (!response.length)
      res.status(403).send({
        status: 403,
        message:'Invalid mail or password'
      });
    else {
      const {name,mail,id} = response.pop();
      const token = generateAccessToken({id:id})

      res.send({
        status: 200,
        user: {
          id: id,
          mail: mail,
          name: name,
          token: token
        }
      })
    }
  })
}

module.exports = login;