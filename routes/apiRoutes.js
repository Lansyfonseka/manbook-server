const express = require('express');
const { mainModule } = require('process');
const router = express.Router()
const db = require("../models");

router.get('/users',(req,res) => {
  db.Users.findAll({
    attributes: ['name','mail','id','createdAt','updatedAt','active']
  }).then(users => res.send(users))
});

router.post('/register',(req,res)=>{
  const {name,mail,password} = req.body;
  db.Users.create({
    name: name,
    mail: mail,
    password: getSHA256(password)
  }).then((response)=>res.send(response));
});

router.post('/login', (req,res)=> {
  const {mail,password} = req.body;
  db.Users.findAll({
    attributes: ['name', 'password', 'id'],
    where: {
      mail: mail,
      password: getSHA256(password)
    }
  }).then(response=>{
    if (!response.length)
      res.status(403).send({
        status: 403,
        message:'Invalid mail or password'
      });
    else {
      const {name,mail,id} = response.pop();
      res.send({
        status: '200',
        user: {
          name: name,
          mail: mail,
          id: id
        }
      })
    }
  })
});

module.exports = router;


function getSHA256(value) {
  const crypto = require('crypto');
  const hash = crypto.createHash('sha256');
  return hash.update(value).digest('hex');
}