const { Model, DataTypes } = require("sequelize");
// Imports model and sequelize
const sequelize = require("../config/connection");

class ProductTag extends Model {}

// Product Tag
ProductTag.init(
  {
    // define columns
    // Id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Product id column
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "product",
        key: "id",
        unique: false,
      },
    },
    // Tag id column
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "tag",
        key: "id",
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

// Exports product tag model
module.exports = ProductTag;
