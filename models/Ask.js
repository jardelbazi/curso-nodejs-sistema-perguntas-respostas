const Sequelize = require('sequelize')
const connection = require('../database')

const Ask  = connection.define('asks', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	description: {
		type: Sequelize.TEXT,
		allowNull: false
	}
})

Ask.sync({force: false})