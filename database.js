const Sequelize = require('sequelize')

const connection = new Sequelize('guiaperguntas', 'root', '', {
	host: 'localhost',
	port: '13306',
	dialect: 'mysql',
})

module.exports = connection

