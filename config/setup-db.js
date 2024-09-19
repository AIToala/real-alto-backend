/* eslint-disable no-undef */
const { Sequelize } = require('sequelize');
const process = require('process');
require('dotenv').config();
const env = process.env.NODE_ENV || 'development';
console.log('Environment', env);
const config = require(__dirname + '/config.js')[env];

// Connect to MySQL server using root/admin credentials

const sequelize = new Sequelize('', config.username, config.password, {
	host: config.host,
	dialect: config.dialect || 'mysql',
	port: config.port || 3306,
	logging: false, // Disable logging for cleaner output
});

async function setupDatabaseAndUser() {
	const databaseName = config.database;

	try {
		// Step 1: Create the database if it doesn't exist
		await sequelize.query(`CREATE DATABASE IF NOT EXISTS \`${databaseName}\`;`);
		console.log(`Database '${databaseName}' created or already exists.`);

		// Step to verify the database creation
		const [results] = await sequelize.query(`SHOW DATABASES LIKE '${databaseName}';`);
		if (results.length === 0) {
			throw new Error(`Failed to create database '${databaseName}'.`);
		}
	} catch (error) {
		console.error('Error setting up database and user:', error.message);
	} finally {
		await sequelize.close();
		process.exit();
	}
}

setupDatabaseAndUser();
