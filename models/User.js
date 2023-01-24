const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER(30),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    mail: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING(65),
      allowNull: false
    },
    role: {
      type: DataTypes.INTEGER(30),
      allowNull: false,
      defaultValue: 1
    },
    photo: {
      type: DataTypes.STRING()
    },
    settings: {
      type: DataTypes.INTEGER(30)
    }
  })
  return User;
}
