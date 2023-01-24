module.exports = (sequelize, DataTypes) => {
  const Collection = sequelize.define("Collection", {
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
    photo: {
      type: DataTypes.STRING()
    },
    topic: {
      type: DataTypes.STRING(30)
    },
    fields: {
      type: DataTypes.STRING()
    }
  })
  return Collection;
}
