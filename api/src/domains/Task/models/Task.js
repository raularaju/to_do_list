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
    category: {
        type: Sequelize.ENUM('casa', 'trabalho', 'estudo', 'pessoal'),
        allowNull: false,
    },
    status: {
        type: Sequelize.ENUM('a_fazer', 'fazendo', 'feito'),
        defaultValue: 'a_fazer',
        allowNull: false   
    }

});



module.exports = Task;