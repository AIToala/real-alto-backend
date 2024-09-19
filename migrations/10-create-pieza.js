'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Piezas', {
			id_pieza: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			id_procedencia: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			id_pieza_uso: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			id_tipo_pieza: {
				type: Sequelize.INTEGER,
				allowNull: false,
			},
			id_modelo: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			id_pieza_dimension: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			id_exhibicion_pieza: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			nombre_pieza: {
				type: Sequelize.STRING,
			},
			descripcion: {
				type: Sequelize.TEXT,
			},
			descripcion_corta: {
				type: Sequelize.TEXT,
			},
			activo: {
				type: Sequelize.BOOLEAN,
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
		await queryInterface.dropTable('Piezas');
	},
};
