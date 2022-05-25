module.exports = (sequelize, DataTypes) => {
  const Collections = sequelize.define("Collections", {
    id: {
      type: DataTypes.INTEGER(30),
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    decription: {
      type: DataTypes.STRING()
    },
    author: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    photo: {
      type: DataTypes.STRING()
    },
    collections: {
      type: DataTypes.JSON
    }
  })
  return Collections;
}
