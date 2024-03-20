const { Sequelize } = require('sequelize')

const db = new Sequelize('to-do-list', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = db