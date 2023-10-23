const Sequelize = require('sequelize');
const database = require('../../../../database/index');
const User = require('../../User/models/User');

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

User.hasMany(Task, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
    foreignKey: {
        allowNull: false
    }
});
Task.belongsTo(User);


module.exports = Task;