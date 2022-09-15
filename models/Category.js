const { Model, DataTypes } = require("sequelize");
// Imports sequelize models and sequelize
const sequelize = require("../config/connection.js");

class Category extends Model {}
// Creates category model
Category.init(
  {
    // define columns
    // Id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Category name
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

// Exports category
module.exports = Category;
