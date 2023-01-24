module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define("Item", {
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
    tags: {
      type: DataTypes.STRING()
    },
    photo: {
      type: DataTypes.STRING()
    },
    likes: {
      type: DataTypes.INTEGER(30),
      allowNull: false,
      defaultValue: 0
    }
  })
  return Item;
}
