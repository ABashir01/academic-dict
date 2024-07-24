const { Sequelize } = require('sequelize');

// Using environment variables
const username = process.env.DB_USERNAME; 
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST; 
const port = process.env.DB_PORT; 
const dialect = process.env.DB_DIALECT;
const database = process.env.DB_NAME


const sequelize = new Sequelize(database, username, password, {
  host: host,
  port: port,
  dialect: dialect
});

console.log("DB Connection established")

module.exports = sequelize;