require('dotenv').config();

const sequelize = require('../config/dbConfig');

const userModel = require('../models/userModel');
const wordModel = require('../models/wordModel');

async function initDb() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        await sequelize.sync({ force: true });
        console.log('Database tables created successfully');
    } catch (error) {
        console.error('Unable to connect to the database or create tables:', error);
    }
}

initDb();