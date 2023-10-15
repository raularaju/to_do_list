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
        allowNull: false
    },
    dueDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    status: {
        type: Sequelize.ENUM('to_do', 'in_progress', 'done'),
        defaultValue: 'to_do',
        allowNull: false   
    }

});



module.exports = Task;