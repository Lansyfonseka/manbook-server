const express = require('express');
const { mainModule } = require('process');
const router = express.Router()
const db = require("../models");

router.get('/users',(req,res) => {
  db.Users.findAll({
    attributes: ['id','name','mail','active','createdAt','updatedAt','photo']
  }).then(users => res.send(users))
  // res.json({
  //   status: 200,
  //   message: "It's working good!"
  // })
});

router.post('/register',(req,res)=>{
  const {name,mail,password} = req.body;
  db.Users.create({
    name: name,
    mail: mail,
    password: getSHA256(password, name)
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

function getSHA256(value, key) {
  const { createHmac } = require('node:crypto');
  const hash = createHmac('sha256',key).update(value).digest('hex');
  return hash
}