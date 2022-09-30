const Sequelize = require('sequelize')
const connection = require('../database')

const Answer = connection.define('answers', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	id_ask: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	answer: {
		type: Sequelize.TEXT,
		allowNull: false
	}
})
Answer.sync({force: false})

module.exports = Answer