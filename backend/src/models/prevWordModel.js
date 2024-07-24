const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

class prevWord extends Model { }

prevWord.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
    wordId: DataTypes.BIGINT,
    word: DataTypes.STRING,
    date_updated: DataTypes.DATE,
    editor_user_id: DataTypes.STRING,
    description: DataTypes.TEXT,
    firstUse: DataTypes.STRING,
    notableUses: DataTypes.TEXT,
    previousPageVersions: DataTypes.ARRAY(DataTypes.BIGINT),
}, {
    sequelize,
    modelName: "prevWord",
    tableName: 'prev_words',
    timestamps: false
})

module.exports = prevWord;