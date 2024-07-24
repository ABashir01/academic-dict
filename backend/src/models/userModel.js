const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

class User extends Model { }

User.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
    username: DataTypes.STRING,
    date_joined: DataTypes.DATE,
}, {
    sequelize,
    modelName: "User",
    tableName: 'users',
    timestamps: false
})

module.exports = User;