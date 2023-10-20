const Sequelize = require('sequelize');
const database = require('../../../../database/index');

const Task = database.define('Task', {

    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },

    title: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },

    description: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    category: {
        type: Sequelize.ENUM('Casa', 'Trabalho', 'Estudo', 'Pessoal', 'Outros'),
        defaultValue: 'outros',
        allowNull: false,
    },
    isComplete: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false   
    }

});



module.exports = Task;