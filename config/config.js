/* eslint-disable no-undef */
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
	development: {
		username: process.env.DEV_USERNAME,
		password: process.env.DEV_PASSWORD,
		database: process.env.DEV_DATABASE,
		host: process.env.DEV_HOST,
		dialect: process.env.DEV_ADAPTER,
	},
	test: {
		username: process.env.TEST_USERNAME,
		password: process.env.TEST_PASSWORD,
		database: process.env.TEST_DATABASE,
		host: process.env.TEST_HOST,
		dialect: process.env.TEST_ADAPTER,
	},
	production: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: process.env.DB_ADAPTER,
	},
};
