'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Museos', {
			id_museo: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			id_museo_contacto: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			nombre_museo: {
				type: Sequelize.STRING,
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
		await queryInterface.dropTable('Museos');
	},
};
