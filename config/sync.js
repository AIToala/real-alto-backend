const { sequelize } = require('../models/index'); // Adjust path as needed

async function initializeDatabase() {
	try {
		await sequelize.authenticate();
		console.log('Database connection has been established successfully.');

		// Sync database
		await sequelize.sync({ alter: true });
		console.log('Database synced successfully');
	} catch (error) {
		console.error('Unable to connect to the database or sync:', error);
	}
}

initializeDatabase();
