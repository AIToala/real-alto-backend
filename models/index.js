/* eslint-disable no-undef */
'use strict';

const fs = require('fs');
const path = require('path');
const logger = require('winston'); // Ensure winston is installed and configured
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.js')[env];
const db = {};

let sequelize;

// Initialize Sequelize with either the environment variable or config values
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], {
		...config,
		logging: (msg) => logger.debug(msg), // Custom logging using winston
	});
} else {
	sequelize = new Sequelize(config.database, config.username, config.password, {
		...config,
		logging: (msg) => logger.debug(msg), // Custom logging using winston
	});
}

// Read all model files in the current directory and import them using Sequelize
fs.readdirSync(__dirname)
	.filter((file) => {
		return (
			file.indexOf('.') !== 0 && // Exclude hidden files
			file !== basename && // Exclude this index.js file
			file.slice(-3) === '.js' && // Include only .js files
			file.indexOf('.test.js') === -1 // Exclude test files
		);
	})
	.forEach((file) => {
		const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
		db[model.name] = model;
	});

// Setup associations for models that have them defined
Object.keys(db).forEach((modelName) => {
	if (db[modelName].associate) {
		db[modelName].associate(db); // Call associate function if defined
	}
});

// Add Sequelize instance and class to the db object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
