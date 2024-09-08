'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Procedencias', {
			id_procedencia: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			periodo_inicio: {
				type: Sequelize.DATE,
			},
			periodo_fin: {
				type: Sequelize.DATE,
			},
			origen: {
				type: Sequelize.STRING,
			},
			nivel_cronologico: {
				type: Sequelize.INTEGER,
			},
			descripcion: {
				type: Sequelize.TEXT,
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
		await queryInterface.dropTable('Procedencias');
	},
};
