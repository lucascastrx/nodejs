const { Sequelize } = require('sequelize')
const sequelize = require('sequelize')

const connection = new Sequelize('perguntas', '****', '****', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = connection
