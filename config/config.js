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
		port: process.env.PORT,
	},
	test: {
		username: process.env.TEST_USERNAME,
		password: process.env.TEST_PASSWORD,
		database: process.env.TEST_DATABASE,
		host: process.env.TEST_HOST,
		dialect: process.env.TEST_ADAPTER,
		port: process.env.PORT,
	},
	production: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: process.env.DB_HOST,
		dialect: process.env.DB_ADAPTER,
		port: process.env.PORT,
	},
};
