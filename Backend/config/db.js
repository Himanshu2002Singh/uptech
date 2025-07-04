const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,        // database
  process.env.DB_USER,        // username
  process.env.DB_PASSWORD || '', // password
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
    logging: false, // Optional: disable logging
  }
);



module.exports = sequelize;
