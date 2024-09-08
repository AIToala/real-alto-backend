'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Modelos', {
			id_modelo: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true,
			},
			id_modelo_metadata: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			nombre_archivo: {
				type: Sequelize.STRING,
			},
			path_archivo: {
				type: Sequelize.STRING,
			},
			myme_type: {
				type: Sequelize.STRING,
			},
			file_type: {
				type: Sequelize.STRING,
			},
			tamaño_modelo: {
				type: Sequelize.INTEGER,
			},
			thumbnail: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Modelos');
	},
};
