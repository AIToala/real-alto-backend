'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('museos', {
			id_museo: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			nombre_museo: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			descripcion_museo: {
				type: Sequelize.TEXT,
			},
			localizacion_museo: {
				type: Sequelize.STRING,
			},
			descripcion_localizacion_museo: {
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
		await queryInterface.dropTable('museos');
	},
};
