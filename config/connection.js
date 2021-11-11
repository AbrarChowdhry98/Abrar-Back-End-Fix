require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
      host: 'localhost',
      user:'root',
      password:'2197',
      dialect: 'mysql',
      database: 'ecommerce_db',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
