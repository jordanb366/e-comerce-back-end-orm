const { Model, DataTypes } = require("sequelize");
// Imports model and sequelize
const sequelize = require("../config/connection.js");

class Tag extends Model {}

// Tag model
Tag.init(
  {
    // define columns
    // id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // tag name column
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

// Exports tag model
module.exports = Tag;
