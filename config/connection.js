require("dotenv").config();
// Imports .env and sequelize
const Sequelize = require("sequelize");

// Creates sequelize connection from env file
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "mysql",
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

// Exports env file
module.exports = sequelize;
