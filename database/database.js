const { Sequelize } = require('sequelize')
const sequelize = require('sequelize')

const connection = new Sequelize('perguntas', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection
