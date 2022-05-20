const db = require("../models");
const SHA256 = require('./helpers/SHA256');

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
      console.log(mail);
      res.send({
        status: 200,
        user: {
          id: id,
          mail: mail,
          name: name
        }
      })
    }
  })
}

module.exports = login;