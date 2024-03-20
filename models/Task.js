const db = require('../db/db')
const { DataTypes } = require('sequelize')

const Task = db.define( 'Task', {
    title: {
        type: DataTypes.STRING,
        required: true
    },

    description: {
        type: DataTypes.STRING,
        required: true
    },

    done: {
        type: DataTypes.BOOLEAN,
        required: true
    }
})

module.exports = Task