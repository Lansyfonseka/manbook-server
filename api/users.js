const db = require("../models");

const getUsers = (req, res) => {
  db.Users.findAll({
    attributes: ['id','name','mail','active','createdAt','updatedAt','photo']
  }).then(users => res.send(users))
}

module.exports = getUsers;