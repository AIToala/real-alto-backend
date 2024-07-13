/* eslint-disable no-undef */
require('dotenv').config();
module.exports = {
	development: {
		username: process.env.DEV_USERNAME,
		password: process.env.DEV_PASSWORD,
		database: process.env.DEV_DATABASE_DEVELOPMENT,
		host: process.env.DEV_HOST,
		dialect: process.env.DEV_DIALECT,
	},
	test: {
		username: process.env.TEST_USERNAME,
		password: process.env.TEST_PASSWORD,
		database: process.env.TEST_DATABASE_TEST,
		host: process.env.TEST_HOST,
		dialect: process.env.TEST_DIALECT,
	},
	production: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE_PRODUCTION,
		host: process.env.DB_HOST,
		dialect: process.env.DB_DIALECT,
	},
};
