const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');

class Word extends Model { }

Word.init({
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
    word: DataTypes.STRING,
    date_updated: DataTypes.DATE,
    editor_user_id: DataTypes.STRING,
    description: DataTypes.TEXT,
    firstUse: DataTypes.STRING,
    notableUses: DataTypes.TEXT,
    previousPageVersions: DataTypes.ARRAY(DataTypes.BIGINT),
}, {
    sequelize,
    modelName: "Word",
    tableName: 'words',
    timestamps: false
})

module.exports = Word;