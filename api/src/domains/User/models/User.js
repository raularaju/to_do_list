const Sequelize = require('sequelize');
const database = require('../../../../database/index');

const User = database.define('User', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },

    
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
},
{
    freezeTableName: true
});


module.exports = User;